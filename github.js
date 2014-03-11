"use strict";

var Git =function(options){
  
  var Deffered = _.isDefined(jQuery) ? jQuery.Deffered : _.Deffered
   
  this.git  = new Github(options)
  //save changed records
  this.save = function(changes) {
    this.upsert(records)
  }
  
  //Fetch dataset 
  this.fetch = function(dataset) {
    var out,dfd = {}, new Deffered()
    this.git.loadData(dataset.url)
    .done(function(data) {
      out = new CSV.extracField(new CSV.parse(data))
      dfd.resolve(out)
    }
    .fail(
      dfd.reject("Failed to load " + dataset.url +" are you sure that file exist")
    )
    reurn dfd.promise()
  }

  // save to git 
  this.saveData= function(data , dataset) {
    //should with let user provide branch !
    var repo = this.getRepo(dataset)
    var filePath = dataset.url.pop()
    console.log("filePath" +  filePath)
    repo.write('master', pathTofile , cb()) 
  }

  //Get repository based on dataset url
  this.loadData = function(dataset, cb){
    //should with let user provide branch !
    var repo = this.getRepo(dataset)
    var filePath = dataset.url.pop()
    console.log("filePath" +  filePath)
    repo.read('master', pathTofile , cb(data)) 
  }

  //get repository
  this.getRepo(dataset){
    var urlPart = dataset.url.split('/')
    var username, reponame =  utlPart[1], utlPart[2]
    return this.getRepo(username, reponame);
  }
)

this.recline =this.recline || {}
this.recline.Baclend  = this.recline.Backend ||{}
this.recline.Backend.Github  = this.recline.Backend.Github || {}

(function(my){
  //your githu options here , set login and password (basic)
  //or your gitub token.
  // username: "YOU_USER",
  //password: "YOUR_PASSWORD",
  //auth: "basic"
  //token: "OAUTH_TOKEN",
  //auth: "oauth"
  my.__type__ ="Github"

  my.gitOptions = {}
  my.fetch(dataset){
    var git =  new Git(dataset, my.gitOptions)
    git.fetch()
  }
  
  //query 
  my.query(queroObj, dataset , cache=false){
    var dfd = new Deferred();
    var numRows = queryObj.size || this.records.length;
    var start = queryObj.from || 0;

    if(cache)dataset.fetch()
    results= dataset.records

    //Apply filter
    results = this._applyFilters(results, queryObj);
    results = this._applyFreeTextQuery(results, queryObj);

    function _applyFreeTextQuery(results, queroObj){
       //todo
    }
    function _applyFilters(results, queryObj){
    	 //todo
    }
    function _computeFacets = function(results, queryObj){
      //todo
    }
    // Apply facet
    var facets = this.computeFacets(results, queryObj);
    var out = {
        total: results.length,
        hits: results.slice(start, start+numRows),
        facets: facets
    };
    dfd.resolve(out);
    return dfd.promise();
  }

}(this.recline.Backend.Github)

