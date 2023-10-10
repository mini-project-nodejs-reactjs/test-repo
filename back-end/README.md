# Script

npx sequelize-cli model:generate --name user --attributes email:string,password:string

npx sequelize-cli model:generate --name board --attributes boardName:string,backgroundImg:string

npx sequelize-cli model:generate --name type --attributes typeName:string

npx sequelize-cli model:generate --name todo --attributes todoName:string,userId:integer,typeId:integer,boardId:integer
