[TOC]

# Protocols Introduction and Communication Types Explanation

## 1.1、Protocols Introduction

Before adopting this data protocol,please r**un RealtimeServer in advance; or refer to source code of webViewServer.js in RealtimeServer, build Websocket Server to manage socket connection by yourself, (using Easyboard software to set  RealtimeServer address , that is Websocket Server address,  **protocol data needs to be added an extra request filed_id, it is random value, response will also contain this field _id).**  RealtimeServer in the SDK will only work for transferring the protocol data, please refer to "Realtime Solution" document for realtime diagram. 

## 1.2、Communication protocols

- RealtimeServer external interface based on the HTTP protocol, so please let your application send following protocol data to RealtimeServer through HTTP protocol and get corresponding results：

- *HOST:means the computer IP address **or domain** **name** which RealtimeServer build on

- Port：RealtimeServer port

- Method：POST

- Path：/command/controller serial id（/command/y10-c14-00140)

- **Header："Content-Type" value is "application/json; charset=UTF-8"**

- Content/Body：data protocol（JSON string）*

  please refer to below image

  ![img](../pictures/postmandemo.png)
