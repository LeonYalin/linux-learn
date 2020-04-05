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
        "ls" - list directory, -a to view hidden files, -l to verbose, -h to human readable file size format, -t sort by time
        "cd" with no arguments will take you to the home directory
      We can use regulat expressions with some commands. For example,
        "rm *" - will remove all files in the current directory
        "touch name\ with\ spaces" or 'touch "name with spaces"' - creates a filename with spaces
      `);
  }

  function navigatingTheLinuxFileSystem() {
    logToHTML('' +
      `Some things about the basic shell terminal:
        "pwd" - present work directory
        "mkdir" - create a directory
        "cp file1 folder1/" - copy a file into a folder
        "cp file* folder1/" - copy all files that start with "file" into a "folder1" folder
        "rm file?" - remove all files that start with "file" and have 1 more character
        "rmdir" - remove a directory
        "mv oldname newname" - rename a file/folder
        "locate <filename>" - find a file in the filesystem. "sudo updatedb" to update files search index
        ""
      `);
  }

export default function gettingStartedWithLinuxCommandLine() {
    delimeterMsg('GETTING STARTED WITH LINUX COMMAND LINE');
    logF(commandLineBasics);
    logF(theLinuxTermial);
    logF(navigatingTheLinuxFileSystem);
  }