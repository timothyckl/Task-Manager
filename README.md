# Task Manager

A mini project I did following a guide to better understand back end development. \
I used Node, Express and MongoDB Atlas.

## How to use

__Step 1__: Clone repository

```bash    
git clone https://github.com/timothyckl/Task-Manager.git
```

__Step 2__: Change directory to wherever repository was cloned 

Example:

```
Desktop/
┗ task-manager/
┗ homework-folder ( ͡° ͜ʖ ͡°)
```

Type in the command prompt:

```
cd Desktop/task-manager
```

__Step 3__: Install dependencies

```bash
npm i
```

__Step 4__: Set up MogoDB Atlas
Sign up for a free account at [https://www.mongodb.com/](https://www.mongodb.com/)

Select the "Shared" cloud database option & click "Create":
![image](https://user-images.githubusercontent.com/89766111/140296006-7fb96eed-f9a7-4122-a215-8199d81035b1.png)

Choose a cloud provider & region *(in this case I chose AWS & Singapore)*

Wait for your cluster to be created, then select the "Database Access" on the left navigation tab.

Click "Add New Database User", with the following selected:
![image](https://user-images.githubusercontent.com/89766111/140297977-58f69be0-bff0-471b-b3aa-5b4748f84d52.png)

Leave the other settings as default and select "Add User".

> __Note__: Please choose a more secure password then in the example.

Next, select the "Network Access"  on the left navigation tab.

Choose whether you want to allow access your current IP or from anywhere. 
![image](https://user-images.githubusercontent.com/89766111/140299063-dfcbd7ba-3f09-4a57-9d6d-1513ca75247c.png)

Head back the "Databases" page on the left navigation tab and click "Connect".

Select the second option, "Connect your application":
![image](https://user-images.githubusercontent.com/89766111/140299447-4fdf4b0a-5e72-4bd3-ad02-a2ebdc9beb52.png)

Copy the connecttion string and paste it in a new `.env` file within your repository:
```
# .env file

MONGO_URI=mongodb+srv://root:<password>@cluster0.fr0ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
> __Note__: Remember to replace <password> with the password previously set for your database user.


__Step 5__: Run app.js

```bash
npm start
# or
node ./app.js
```
