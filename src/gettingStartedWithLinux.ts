import { delimeterMsg, logF, logToHTML } from "./utils";

function runningUbuntu() {
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

function installingDevSoftware() {
  logToHTML('' +
    `In order to install dev software, we need to learn some commands and tools we have in linux:
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

export default function installingLinux() {
  delimeterMsg('INSTALLING LINUX');
  logF(runningUbuntu);
  logF(filesystemHierarchy);
  logF(installingDevSoftware);
}