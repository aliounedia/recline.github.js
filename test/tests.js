(function () {
module("Backend Github - Wrapper");
test("fetch repository api", function(){
  var dataset ={
    url : "",
    backend :"Github"
  }
  var expected ={
    fields :{
    {id: ""},
    {id: ""},
    {id: ""}
    }
    records :{
      {name : "", title : ""}
    }
  }

  my =new recline.backend.Github()
  my.gitOptions ={
  username:"xxx"
  password: "xxx"
  auth:"basic"
  }
  // fetch 
  out  = my.fetch()
  assertEqual(out, expected)
 }
})();
