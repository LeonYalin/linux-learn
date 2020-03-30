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
        "type" - tells you how the command is interpreted by the ommand line, e.g. "type git"
      `);
  }

  function theLinuxTermial() {
    logToHTML('' +
      `Some things about the basic shell terminal:
        When you open a terminal, it opens a default shell that is configured in the configuration file.
        This is te .bashrc file
        ...
      `);
  }

export default function gettingStartedWithLinuxCommandLine() {
    delimeterMsg('GETTING STARTED WITH LINUX COMMAND LINE');
    logF(commandLineBasics);
    logF(theLinuxTermial);
  }