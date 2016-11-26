chat-space
====
##データベース設計

###users

|name|type|null|
|:--:|:--:|:--:|
|name|string|false|
|email|string|false|
|password|string|false|

###groups
|name|type|null|
|:--:|:--:|:--:|
|name|string|false|

###messages
|name|type|null|
|:--:|:--:|:--:|
|body|text||
|image|string||
|group_id|integer|false|
|user_id|integer|false|

###group_users
|name|type|null|
|:--:|:--:|:--:|
|group_id|integer|false|
|user_id|integer|false|

##アソシエーション
###users
* has_many groups :through, group_users
* has_many messages

###groups
* has_many users :through, group_users
* has_many messages

### messages
* belongs_to user
* belongs_to group

###group_users
* belongs_to user
* belongs_to group


## Description

## Demo

## VS.

## Requirement

## Usage

## Install

## Contribution

## Licence


## 北條孝
