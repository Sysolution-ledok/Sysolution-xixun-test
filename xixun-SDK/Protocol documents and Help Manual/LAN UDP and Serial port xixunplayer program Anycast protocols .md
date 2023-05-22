#            LAN UDP and Serial port xixunplayer program Anycast protocols 

# 1.**Communication format**


Serial port baud rate 9600, data bits 8bits, check bit None, stop bit 1bit, flow control None, HEX encoding, byte interval time within the same command not exceeding 100ms

# 2．Program control type command

| 1Byte | 1Byte | 1Byte | 1Byte | 4Bytes              | 4Bytes              | Variable length | 1Byte                                                        |
| ----- | ----- | ----- | ----- | ------------------- | ------------------- | --------------- | ------------------------------------------------------------ |
| 0x7E  | 0x7E  | 0x55  | 0x42  | reserve，full  0x00 | DATA content length | DATA            | Check bit（accelerate from 4th byte to DATA, DATA included, take inverse low byte for the value） |

| DATA       | Functions                                                    |
| ---------- | ------------------------------------------------------------ |
| 0x11       | Turn on screen, program start from beginning                 |
| 0x10       | Turn off screen, program stop, screen keep black             |
| 0xf3       | Anycast the next one                                         |
| 0x31～0x39 | Specific program1～9，after Anycast, will only display those programs, not display in normal sequence |

LAN Xixunplayer Anycast program protocols [UDP], Anycast data format fits for serial port or TCP/IP or Ethernet port/CAN protocols, baud rate 9600

Terminal monitor port 31396

## **Screen switch command**

Turn on screen command：7E 7E 55 42 00 00 00 00 03 00 00 00 11 00 00 A9

Turn off screen command：7E 7E 55 42 00 00 00 00 03 00 00 00 10 00 00 AA

## **Anycast program command**

Next program:7E 7E 55 42 00 00 00 00 01 00 00 00 F3 C9

**Note: Mute and unmute only take effect when the cardsystem version is above than or equal to version 5274-10**

## Mute

7E 7E 55 42 00 00 00 00 03 00 00 00 14 00 00 A6

## Unmute

7E 7E 55 42 00 00 00 00 03 00 00 00 15 00 00 A5

# 3．Adjust time command

| 1Byte | 1Byte | 1Byte | 4Byte              | 4Byte               | Variable length | 1Byte     |
| ----- | ----- | ----- | ------------------ | ------------------- | --------------- | --------- |
| 0x7E  | 0x7E  | 0x55  | reserve，full 0x00 | DATA Content length | DATA            | Check bit |

| DATA                                |                             |                                                              |
| ----------------------------------- | :-------------------------: | ------------------------------------------------------------ |
| Synchronization identification code |  Fixed 0x00（that is NUL）  | The data is assembled in the form of string. When filling in the content of protocol data, it is converted into a byte array. Each field is divided by "," and the corresponding data is filled when it is turned on. If it is not turned on, it is filled with - 1. |
| time                                | Current time’s milliseconds | The data is assembled in the form of string. When filling in the content of protocol data, it is converted into a byte array. Each field is divided by "," and the corresponding data is filled when it is turned on. If it is not turned on, it is filled with - 1. |
| Screen switch                       |          fixed -1           | The data is assembled in the form of string. When filling in the content of protocol data, it is converted into a byte array. Each field is divided by "," and the corresponding data is filled when it is turned on. If it is not turned on, it is filled with - 1. |
| brightness                          |          fixed -1           | The data is assembled in the form of string. When filling in the content of protocol data, it is converted into a byte array. Each field is divided by "," and the corresponding data is filled when it is turned on. If it is not turned on, it is filled with - 1. |
| volume                              |          fixed -1           | The data is assembled in the form of string. When filling in the content of protocol data, it is converted into a byte array. Each field is divided by "," and the corresponding data is filled when it is turned on. If it is not turned on, it is filled with - 1. |

## Adjust time data, for example：

//Sync code 0x00，time 2342234230ms，not sync screen switch, not sync brightness,not sync volume

"NUL,2342234230,-1,-1,-1"

Convert the string into ASCII byte array and put it into DATA.

 

## Protocols definition：

| 1Byte | 1Byte | 1Byte | 1Byte | 4Bytes             | 4Bytes              | Variable length | 1Byte                                                        |
| ----- | ----- | ----- | ----- | ------------------ | ------------------- | --------------- | ------------------------------------------------------------ |
| 0x7E  | 0x7E  | 0x55  | 0x42  | reserve，full 0x00 | DATA content length | DATA            | Check bit（accelerate from 4th byte to DATA, DATA included, take inverse low byte for the value） |

Transfer the program number that need to be displayed into Data, start number is 1, range 1-150.

## Anycast data, for example:  display the first program

7e 7e 55 42 01 00 00 00 03 00 00 00 31 0a 00 7e

7e 7e 55   42    01 00 00 00  03 00 00 00  31 0a 00   7e

--protocol head--  -fixed command-   -01sub command-   --data length--  --data--    --check bit--

While the data field 31 means program number’s ASCII code(that is program 1), 0a 00 is the delay execute milliseconds, can be set as 00 00

### Example for Anycast program 1 to program 5：

program1  7E 7E 55 42 04 00 00 00 03 00 00 00 31 1A 00 6B

program2  7E 7E 55 42 05 00 00 00 03 00 00 00 32 06 00 7D

program3  7E 7E 55 42 06 00 00 00 03 00 00 00 33 07 00 7A

program4  7E 7E 55 42 07 00 00 00 03 00 00 00 34 06 00 79

program5  7E 7E 55 42 0A 00 00 00 03 00 00 00 35 0A 00 71

Check code: accelerate from 4th byte to DATA, DATA included, take inverse low byte for the value

### Check code algorithm：

int len = bytes number of participating in verification；

byte[] p; //participated data

unsigned char c=0；

for (i=0;i<len;i++) c+=p[i];

(~c)&0x0ff //result is check code