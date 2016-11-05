chat-space
====
##データベース設計

###users

|name|type|null|
|:--:|:--:|:--:|
|user_name|strings|false|
|email|strings|false|
|password|strings|false|

###groups
|name|type|null|
|:--:|:--:|:--:|
|group_name|strings|false|

###messages
|name|type|null|
|:--:|:--:|:--:|
|body|text||
|image|strings||
|group_id|integer|false|
|user_id|integer|false|
|group_id|integer|false|

###group_users
|name|type|null|
|:--:|:--:|:--:|
|group_id|integer|false|
|user_id|integer|false|

##アソシエーション
###users
######has_many groups　　
######has_many messages

###groups
######has_many users
######has_many messages

### messages
######belongs_to user
######belongs_to group

###group_users
######belongs_to user
######belongs_to group


## Description

## Demo

## VS.

## Requirement

## Usage

## Install

## Contribution

## Licence


## 北條孝
