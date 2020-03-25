import { delimeterMsg, logF, logToHTML } from "./utils";

function installations() {
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
      "/lib" - software libraries
      "/root" - root user files
      "/usr" - additionl binaries
      "/var" - dynamic files: logs, app data, caches
      "/proc" - processes files
      "/sys" - system and kernel files
    `);
}

export default function installingLinux() {
  delimeterMsg('INSTALLING LINUX');
  logF(installations);
  logF(filesystemHierarchy);
}