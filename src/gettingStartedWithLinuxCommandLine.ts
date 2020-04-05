import { delimeterMsg, logF, logToHTML } from "./utils";

function commandLineBasics() {
    logToHTML('' +
      `The basic command line commands are:
        "man <section_num> <command_name>" - manual regarding a specitic command
        "info" - external package that provides info about any command in an interactive way.
        - can be downloaded using "sudo apt install info" and used like "info" or "info wget", "info wget example simple"...
        - most info files are located under "/usr/share/doc/<program_name>/", e.g. "/usr/share/doc/wget/README"
        "wget" - a simple tool used to download things from the network 
        "less" - a simple viewer that divides documents to pages
        "type" - tells you how the command is interpreted by the command line, e.g. "type git"
      `);
  }

  function theLinuxTermial() {
    logToHTML('' +
      `Some things about the basic shell terminal:
      When you open a terminal, it opens a default shell session for a program that is configured in the config file.
      This is the .bashrc file, and the edfault is /bin/bash or bash. .bashrc file has the configuration for non-login sessions (for personal pc).
      For logic sessions like remote connections there is a .profile file and a /etc/profile file.
      `);
  }

  function navigatingTheLinuxFileSystem() {
    logToHTML('' +
      `Some things about the basic shell terminal:
        "ls" - list directory, -a to view hidden files, -l to verbose, -h to human readable, -t sort by time
        "cd" with no arguments will take you to the home directory
        "pwd" - present work directory
        "mkdir" - create a directory
        "cp file1 folder1/" - copy a file into a folder
        "cp file* folder1/" - copy all files that start with "file" into a "folder1" folder
        "rm file?" - remove all files that start with "file" and have 1 more character
        "rm *" - will remove all files in the current directory
        "rmdir" - remove a directory
        "mv oldname newname" - rename a file/folder
        "touch name\ with\ spaces" or 'touch "name with spaces"' - creates a filename with spaces
        "locate <file>" - find a file in the filesystem. "sudo updatedb" to update files search index
        "| grep <criteria>" - pipe the output to specific line containing <criteria>
        "| wc" - words count
        "| sort" - sort output, -n for ascending order, -rn for descending order
        ">> file" - redirect the ouput to the new file
        "> file" - append to the end of existing file, or create a file
        Example: "locate package.json | grep linux-learn | wc > wc.txt" - count all package.json files inside linux-learn directory and store the result in wc.txt file
        "head <file>" - print first 10 lines of the file
        "tail <file>" - print last 10 lines of the file, "tail -f" us a useful options
        "cut -d: -f3" - cut the output by ":" delimeter and take only 3rd group
        "tar xzf <file>" - extract a .tar.gz or .tgz file
        "tar czf <out_file> <in_dir>" - create a tar comperssed file from directory
        "gzip <tr_file>" - compress a tar file
        "zip <file> <dir>" - create a zip file from directory
        "unzip <zip_file>" - unzip a zip file
      `);
  }

  function workingWithKernelndDevices() {
    logToHTML('' +
      `Some of the commands to work with the Linux kernel and devices are:
        "lsusb" - list usb devices
        "lspci" - list pci devices
        "lshw" - list hardware
      Linux modules are located in the "/lib/modules" directory. The "uname -r" command gives a currently used module.
      So using "cd /lib/modules/\`uname -r\`" we can enter the current module. Then enter "kernel" directory to view the devices.
      Then, we can enter the "sound" directory and locate the soundcore.ko file. Drivers usually have the ".ko" extension.
      We can use "lsmod" to view currently loaded modules, e.g. "lsmod | grep sound" will show if the sound module is installed.
      If it is not, we can use "modprobe <module>" to load it, e.g. "modprobe soundcore".
      `);
  }

export default function gettingStartedWithLinuxCommandLine() {
    delimeterMsg('GETTING STARTED WITH LINUX COMMAND LINE');
    logF(commandLineBasics);
    logF(theLinuxTermial);
    logF(navigatingTheLinuxFileSystem);
    logF(workingWithKernelndDevices)
  }