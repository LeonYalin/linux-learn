import { delimeterMsg, logF, logToHTML } from "./utils";

function administrationBasics() {
    logToHTML('' +
      `The basic command line commands are:
        "man <section_num> <command_name>" - manual regarding a specitic command
      `);
  }

export default function gettingStartedWithLinuxSystemAdministration() {
    delimeterMsg('GETTING STARTED WITH LINUX SYSTEM ADMINISTRATION');
    logF(administrationBasics);
  }