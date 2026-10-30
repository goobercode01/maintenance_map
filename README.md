*maintenance map* is a proof-of-concept tool designed and aimed for use by railroads or any system with large amounts of infrastructure. it is a web tool utilizing node.js and sqlite to provide an example of how a web database coupled with web mapping tools can make large systems with small parts easy to visualize and track. 

[project justification](https://docs.google.com/presentation/d/1NjJAvCF4otKHTD1-dV1Ew4XkRN9UCFmNDr77EmMYP58/edit?usp=sharing)

the focus for the scope of this project was on the mta's metro-north railroad, as it is close to where i grew up and has public track maps available online from circa 2015. 

for the sake of time and to demonstrate how the software works, sqlite was chosen for the database as opposed to setting up a separate database server. this library will create a database.db file in the repo directory using sql. this makes testing and showing off the software far easier. i imagine it's not too hard to connect this software to a real sql server if it was to actually be implemented.

this repo uses the leaflet color markers repository made by pointhi, which is availible [here](https://github.com/pointhi/leaflet-color-markers).

required node packages:
- sqlite/sqlite3
- express

how to use:

1. init a new node.js project
2. ensure you have all node packages installed as listed above by using `npm install`
3. insert this repository into your node project with your packages
4. run `node init-db.js` in the repository where the repo is stored to initialize the database
5. in the directory, run `npm start` and go to [localhost:3000](http://localhost:3000/)
