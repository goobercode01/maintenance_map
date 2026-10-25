*maintenance map* is a proof-of-concept tool designed and aimed for use by railroads or any system with large amounts of infrastructure. it is a web tool utilizing node.js and sqlite to provide an example of how a web database coupled with web mapping tools can make large systems with small parts easy to visualize and track. 

the focus for the scope of this project was on the mta's metro-north railroad, as it is close to where i grew up and has public track maps available online from circa 2015. 

this repo uses the leaflet color markers repository made by pointhi, which is availible [here](https://github.com/pointhi/leaflet-color-markers).

required node packages:
- sqlite/sqlite3
- express

how to use:

1. init a new node.js project
2. ensure you have all node packages installed as listed above by using `npm install`
3. insert this repository into your node project with your packages
4. in the directory, run `npm start` and go to [localhost:3000](http://localhost:3000/)
