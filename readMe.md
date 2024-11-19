## Todo App Backend setup

Packages

- express js
- nodemon
- dotenv
- bcrypt
- jsonwebtoken or jwt
- mongoose

### Structure of todo backend

```
- server.js
- .env
- .gitignore
- config dir/connectDb.js

- models dir
  /userSchema/userSchema.js
  /userModels/userModel.js
  /todoSchema/todoSchema.js
  /todoModel/todoModel.js


- routes dir
  /userRouter.js
  /todoRouter.js


- controllers dir
  /signUp.js
  /login.js
  /getUsers.js
  /addTodo.js
  /getTodo.js
  /updateTodo.js
  /deleteTodo.js

- middlewares dir
  /authMiddleware.js



```
