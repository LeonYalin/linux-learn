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
      `);
  }

export default function gettingStartedWithLinuxSystemAdministration() {
    delimeterMsg('GETTING STARTED WITH LINUX SYSTEM ADMINISTRATION');
    logF(administrationBasics);
    logF(workingWithUsersAndGroups);
  }