set mySystem="win64"

set nssm="%cd%\nssm-2.24\%mySystem%\nssm.exe"
set node="%ProgramFiles%\nodejs\node.exe"
%nssm% install RealtimeServer %node%
%nssm% set RealtimeServer AppDirectory "%cd%\bin"
%nssm% set RealtimeServer AppParameters "www"
%nssm% set RealtimeServer AppStdout "%cd%\Stdout.log"
%nssm% set RealtimeServer AppStderr "%cd%\Stderr.log"
%nssm% start RealtimeServer
pause