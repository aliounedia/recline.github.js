recline.github.js
=================

recline backend for github


This is a implementation of recline Github backend ,It use 
Github.js implemented by Michael Aufreiter and CSV.js 
implemented by  .and realy take insiration of existing 
recline backend [Memory, ElasticSearch,Google].


Status : "In developpement"


dataset ={
 resources :{
   "backend" :"github",
   "url": url 
 }
}

//instanciate githu backend 
var git = new recline.backend.Github()

//Fetch dataset 
git.fetch(dataset)


//Save records changes 
git.save(changes)


//Query dataset with cash , it use the same philosophy 
//of recline.backend.merory as  it will not the records
//already loaded , and does not fecth again

git.query(queryObj , cache=True  )

// If you need to refresh from resource  before making 
//query ,use cache = true 
