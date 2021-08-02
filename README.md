# e-commerce

## Description

This project is purely back end and its purpose was to connect an exisiting 
database to a server by creating routes. The file structure was already partially set up,
which left each of the models (category, product & tag) to be created with their own attributes.

After the models were created, I made get, post, put and delete routes for each of them and joined
them where needed using the belongsToMany,belongsTo or hasMany methods depending on the relationship. 
A few errors show when testing some of the put and delete routes but nevertheless they update and delete 
the intended data. 

The database name, username and password are all safely stored in environment variables and exluded from the respository along with the node modules. 