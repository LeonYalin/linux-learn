import { delimeterMsg, logF, logToHTML } from "./utils";

function installingUbuntu() {
  logToHTML('' +
    'Start by installing Linux on USB using the ubuntu ISO image and Rufus. Hold the right SHIFT key on startup to enter the linux BIOS(or UEFI). ' +
    'To run the terminal, press CTRL+SHIFT+T' +
    '');
}

function filesystemHierarchy() {
  logToHTML('' +
    `Linux filesystem hierarchy consists of the following directories:
      "/bin" - binary files for a single user
      "/sbin" - system binary files for all users
      "/boot" - Linux images and boot files
      "/dev" - physical and virtual devices files
      "/ect" - configuration files
      "/home" - User files
      "/lib" - software lisudo apt insudo apt install ./<file>.debstall ./<file>.debbraries
      "/root" - root user files
      "/usr" - additionl binaries
      "/var" - dynamic files: logs, app data, caches
      "/proc" - processes files
      "/sys" - systemssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3vEgJBZsKdM8C9l/a8pbWVsnuVm09WMMK1VBJvpSr/ISNfo0GlgzdtHEvtTcnc/h4+Bhr4GNaAdjx3bEcbQVvd5C/Jv+IQzmDba1MdcOmVGekdLxHoWdShPoXbzyzUwfcu4qpDFLvVnCf5XYvKRQVOe1Zx+GXSyGxj981I/HzU7ABX7zCLvjLLPFEXDVCOmOD/lPA2vHJf9kXXvjDLF8xVus6oxrk16p3bFub4QaMsPUrPz/lkFNbeXkGmVLOnqAuY+1pU7K3L2w2yrIohejzKBmG9PKbh4Kvo7GIxdc1xkWuCtvrgPnFputRR82vtyVxqolY398cTjgvF4BuhLDv ubuntu@ubuntu and kernel files
    `);
}


function managingSystemEnvironment() {
  logToHTML('' +
    `We can manage the system environment using the following commands:
      "localectl" - manage system locale
      "timedatectl" - manage system time and date
      "echo <text or $VAR>" - print text or variable contents
      "pwd" - print current directory. Also $PWD
      "env" - list of all environment variables
      "|" - using pipes to redirect the output to different command, e.g. "env | less", "env | grep PWD"
      "myval=5" - create a local variable for current shell
      "export myval=5" - export a variable for all shells
      "bash" - enter bash terminal, then "exit" to exit from bash
    We can manage the system hardware using the following commands:
      "df" or "df -ht ext4" - list all connected drives, e.g. for "sda1" and "sdb5" - a and b is the disk number and 1 and 5 is the partition number 
      "lsblk" - list all system devices, event the not-connected ones, e.g. "lsblk | grep sda"
      "dmesg" - info about system adapter usage, e.g. "dmesg | grep wl" - view wireless devices activity
      "lshw" - view system hardware
    `);
}


function installingDevSoftware() {
  logToHTML('' +
    `In order to install dev slinuxSystemEnvironmentoftware, we need to learn some commands and tools we have in linux:
      "ssh-keygen" - generate ssh public and privete keys 
      ".deb" - debian packages files. Ubuntu is built on top of Debian Linux and can use these files and "apt" package manager. 
      ".tar" - tar format is like a zip tool for Linux. It makes a single file from multiple and can compress files as well. 
      ".tgz" or ".tar.gz" - compressed .tar files, with gzip option applied. 
      "apt" - package manager for Debian (prev apt-get) tht is using dpkg under the hood. Can install and manage packages, e.g. "sudo apt install curl"
      "sources.list" - list of all apt package repositories.
      "man <section_num> <command_name>" - manual for cmd commands, e.g. "man 5 sources.list" - show section 5 of sources.list 
      "which <program_name>" - view the location of the installed software, e.g. "which firefox" or "which node"
    In order to install NodeJS we need to do the following:
      "curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -" - add a new entry to the sources.list
      "sudo apt install nodejs" - install a nodejs package including npm
      "/usr/bin/<package_name>" - directory for application binaries, e.g. vscode
    In order to install Git we need to do the following:
      "sudo apt install git"
    In order to install VSCode we need to do the following:
      - Download the .deb package
      - Use the system dialog to install or enter "sudo apt install ./<file>.deb"
    `);
}

function networkConnectivity() {
  logToHTML('' +
    `In order to manage network operations in Linux we can use the following commands:
      "ip route" - to see the router connections and your own ip address (in the end of the line)
      "ip addr" or "ifconfig" - to view the mashine available ip addresses
      "netstat" - to view all network connections, "netstat -l" - display all open and listening ports
      "host <web_addr>" - to view the ipV name of the website, e.g. "host pluralsight.com"
      "ping <web_addr>" - to check if the web_rrd exists and live
    - We can edit a "/etc/hosts" file to view and manage dns servers that are translated to names.
    - The open-ssh protocol is used to securely connect to the remove hosts. In order to make it work, we need to install
    "openssh-server" on the receiving mashine, and "openssh-client" on client mashine. Ssh client configuration is
    located in "/etc/ssh/ssh_config" file, and "/etc/ssh/sshd_config" is for server configuration.
    "ssh user@remote_addr" will open the shh session, "exit" to end it. Use flags like "-p" for port, "-i" for sertificate ect..
    "scp <file_loc> user@remote_addr:<remote_file_loc>" - copy a file to remote server using ssh 
    `);
}

function linuxScripting() {
  logToHTML('' +
    `We can write bash script using the following commands:
      "#!/bin/bash" - tell the OS that this an executable bash script
    - Open the "calc.sh" file to see the details
      "chmod +x calc.sh" - make the script executable (so no need for "sh calc.sh", just "./calc.sh")
      "netstat" - to view all network connections, "netstat -l" - display all open and listening ports
      "host <web_addr>" - to view the ipV name of the website, e.g. "host pluralsight.com"
      "ping <web_addr>" - to check if the web_rrd exists and live
    - We can edit a "/etc/hosts" file to view and manage dns servers that are translated to names.
    - The open-ssh protocol is used to securely connect to the remove hosts. In order to make it work, we need to install
    "openssh-server" on the receiving mashine, and "openssh-client" on client mashine. Ssh client configuration is
    located in "/etc/ssh/ssh_config" file, and "/etc/ssh/sshd_config" is for server configuration.
    "ssh user@remote_addr" will open the shh session, "exit" to end it. Use flags like "-p" for port, "-i" for sertificate ect..
    "scp <file_loc> user@remote_addr:<remote_file_loc>" - copy a file to remote server using ssh 
    `);
}
export default function installingLinux() {
  delimeterMsg('INSTALLING LINUX');
  logF(installingUbuntu);
  logF(filesystemHierarchy);
  logF(managingSystemEnvironment);
  logF(installingDevSoftware);
  logF(networkConnectivity);
  logF(linuxScripting);
}