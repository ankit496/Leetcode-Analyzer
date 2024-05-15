const query=require('../queries/userDetailsQuery')
//fetching the data
const userDetails= (req, res) => {
  let user = req.params.id;
  fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Referer': 'https://leetcode.com'
      }, 
      body: JSON.stringify({query: query, variables: {username: user}}),
  
  })
  .then(result => result.json())
  .then(data => {
    if(data.errors){
      res.send(data);
    }else {
      //console.log(data.data)
      res.send(data.data);
    }
  })
  .catch(err=>{
      console.error('Error', err);
      res.send(err);
  });
}
module.exports=userDetails