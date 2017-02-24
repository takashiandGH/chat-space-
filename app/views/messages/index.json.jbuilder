json.array!(@messages) do |message|
  json.name   message.user.name
  json.body   message.body
  json.time   message.created_at
  json.image  message.image.url
end
