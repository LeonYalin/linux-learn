import { delimeterMsg, logF, logToHTML } from "./utils";

function administrationBasics() {
    logToHTML('' +
      `In order to manage memory info we can use the following commands:
      - All the stats files are located in "/proc/" dynamic directory (files are updated constantly).
        "less /proc/meminfo" - view the memory status
        "less /proc/cpuinfo" - view the cpu status
        "top" - console task manager, like in Windows
        "free" - view the system RAM, available and used. "-h" for human readable flag
        "df" - view the system partitions and space, "-h" for human readable
        "iftop" - network manager (like if but for network). Install from apt
      
      In order to manage system processes we can use the following commands:
        "ps" - view running processes. Add "aux" flags for all processes
        "ps aux | grep <process_name>" - filter with grep for desired process
        "journalctl" - centralized system log, use --since flag to filter, e.g. "journalctl --since "10 minutes ago""
        "/var/log" - directory for system log files, we can view the "syslog" file in this directory and filter with "grep"
        "dmesg" - view all system kernel event data log
        "/dev/null" - a.k.a "send to /dev/null" - an old fashion way to send an output to nowhere.
        "yes > /dev/null &" - send a "yes" output do /dev/null, "&" to get control back, and get a pid
        "kill <p_id>" - kill the process by id 
        "killall <p_name>" - kill all instances of a specific process
        "systemctl status <process_name>" - view the process status
        "systemctl start/stop <process_name>" - start / stop the process
        "systemctl enable/disable <process_name>" - set automatic process load on startup
        "nice <priority_num> <full_process_command>" - adjust proirities for a process
      `);
  }

  function workingWithUsersAndGroups() {
    logToHTML('' +
      `User management Best Practices:
      - Avoid using the root account
      - Create unique accounts for ech user
      - Assugn only necessary authority to each user
      - Use admin power only via sudo

      In order to work with users or groups we can use the following commands:
      - The /etc/ directory contains number of files in which the user data is stored:
        "/etc/shadow" - stores ecrypted user passwords
        "/etc/passwd" - view users data and permissions
        "/etc/group" - view groups data and permissions
        "id" - view current user info, "id <username>" - to view specific user info
        "who" - view who is loged in currently
        "w" - more info about the logged in users, like what they are doing now
        "last" - all system logging info from the beginning of the month.

      In order to add new user or group we can use the following commands:
        "sudo useradd -m <user_name>" - add a new user and name it <user_name>
      - Contents of the default skeleton directory "/etc/skel" will be copied to the newly created user 
        "sudo passwd <user_name>" - create a password for the user <user_name>
        "sudo groupadd <group_name>" - create a group and name it <group_name>
        "sudo chown :<group_name> <dir>" - change owner of the directory to be <group_name>
        "sudo usermod -a -G <group_name> <user_name>" - add a user <user_name> to the group <group_name>
        "sudo chmod g+w <group_owned_dir>" - change permiissions for <dir> to be writeable for the owner group
        "su <user_name>" - switch user
      
        "ls -l" - display permissions for files in a directory
      - Example output: "-rw-rw-r-- 1 liza liza time __.txt". The permissiona are divider into 4 groups:
      - (- or d for a directory), owner (rw- or rwx) - read/ write / execute for the owner,
      - owner group (rw-), and all other non-root users (r--). Next, owner is "liza", owner group "liza"
        "ls -dl" - display permissions for a directory itself
      - Example output: "drwxrwxr-x 2 ubuntu family time". Here, we have full rights for owners,
      - read/execute for others. The owner is ubuntu because he created it, owner group is "family"
        "chmod o+x <file_name>" - change permissions for others, make executable
      - the "-t" attribute in the end can indicate that members of the group can delete only thir own files.
      - "sudo chmod +t" will add this capability 

      Numeric notations for permissions:
        "Read" - 4
        "Write" - 2
        "Execute" - 1
      Total of 7 is full permissions. So persissions can be written as numbers too, e.g. "777"  - for user/group/others
      "chmod 777 <file_name>" - give full persissions to <file_name> to everyone

      Linking. There are 2 types of links: hard and soft. Hard link is an additional name for a file, soft link is a shorcut.
        "ln -s <src_file_or_dir> <dest_file_or_dir>" - create a symlink betwen two locations, "-s" for symlink
      - If we omit the second param, we will create a symlink in current diectory with the same name
      `);
  }

  function securingTheLinuxServer() {
    logToHTML('' +
      `We should always check and apply security updates to our system, via "sudo apt update", "sudo apt upgrade".
        "nmap -v -sT <localhost/remote_addr>" - check which local/remote ports are open, and htewn you can type
        "systemctl disable <running_service>" to disable that service. 
      - Use let's encrypt to get free CA certificates to use the TLS (and upgrade to SSL) protocol
      `);
  }

export default function gettingStartedWithLinuxSystemAdministration() {
    delimeterMsg('GETTING STARTED WITH LINUX SYSTEM ADMINISTRATION');
    logF(administrationBasics);
    logF(workingWithUsersAndGroups);
    logF(securingTheLinuxServer);
  }