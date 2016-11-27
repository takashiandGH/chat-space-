chat-space
====
##データベース設計

###users

|name|type|null|index|
|:--:|:--:|:--:|:--:|
|name|string|false|true|
|email|string|false||
|password|string|false||

###groups
|name|type|null|index|
|:--:|:--:|:--:|:--:|
|name|string|false|true|

###messages
|name|type|null|index|foreign_key|
|:--:|:--:|:--:|:--:|:--:|
|body|text||||
|image|string||||
|group_id|refarence|false|true|true|
|user_id|refarence|false|true|true|

###groups_users
|name|type|null|index|foreign_key|
|:--:|:--:|:--:|:--:|:--:|
|group_id|reference|false|true|true|
|user_id|reference|false|true|true|


##アソシエーション
###users
* has_many groups :through, group_users
* has_many messages
* has_many :group_users

###groups
* has_many users :through, group_users
* has_many messages
* has_many :group_users

### messages
* belongs_to user
* belongs_to group

###group_users
* belongs_to user
* belongs_to group
