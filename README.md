# Node (TypeScript) and DynamoDB quiz

## Installation
1. `yarn install`
2. `yarn start`

## GET /users/{id}

[Retrive](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property) user from DynamoDB based on primary key.

### 200
```json
{
  "id": "28230c20-da6f-11e7-9278-33d748f82491",
  "firstName": "Max",
  "lastName": "Mustermann",
  "email": "max@example.com"
}
```

### 404
```json
{
  "message": "User not found"
}
```


## POST /users

Generate an UUID (`uuid.v1()`) and [save](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property)  to DB

```json
{
  "firstName": "Max",
  "lastName": "Mustermann",
  "email": "max@example.com"
}
```

### 201
```json
{
  "id": "28230c20-da6f-11e7-9278-33d748f82491",
  "firstName": "Max",
  "lastName": "Mustermann",
  "email": "max@example.com"
}
```
