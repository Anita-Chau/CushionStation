COMP2406 - Assignment 5
Store Website

Program Authors:
Anita Chau (101086113)
Christopher Geddes (101072566)

Base Code by Cuneyt Celebican and Louis D. Nel

To run this app you need a personal Paypal Account to create a sandbox buyer account from https://developer.paypal.com/

Setup:
Before starting application please run the populate-for-startup.js
file inside the seed directory to populate the mongodb database.
You can basically run the file with below command (after locating in the terminal)
node populate-for-startup.js

Install the npm module dependencies in package.json by executing:
npm install

Running the application:
In the application folder execute:
npm start
then you can access from localhost at
http://localhost:3000

Login to the app using one of the dummy users for project:
username : anita@admin.com
password : admin

OR

username : chris@admin.com
password : admin

Important: Before starting application please make sure your mongo database runs.

Features:
Upload local/online photos for products
Add, delete, or update product
Add, delete, or update variant
Add, delete, or update department
Add, delete, or update category
Add, or delete discount code
Sends email on the sign-in
Advance search bar (search for product and categories)
Buy item
Shopping cart
Order history
Distinguishes user and admin
Filters

Issues:
None known of at the moment.
