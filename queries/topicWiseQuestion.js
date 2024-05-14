const query=`
query skillStats($username: String!) {
    matchedUser(username: $username) {
      tagProblemCounts {
        advanced {
          tagName
          tagSlug
          problemsSolved
        }
        intermediate {
          tagName
          tagSlug
          problemsSolved
        }
        fundamental {
          tagName
          tagSlug
          problemsSolved
        }
      }
    }
  }
`

// format data 
const formatData = (data) => {
    let sendData =  {
        advanced:data.matchedUser.tagProblemCounts.advanced,
        intermediate:data.matchedUser.tagProblemCounts.intermediate,
        fundamental:data.matchedUser.tagProblemCounts.fundamental
    }
    return sendData;
}

//fetching the data
exports.query = (req, res) => {
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
        console.log(data.data)
        res.send(formatData(data.data));
      }
    })
    .catch(err=>{
        console.error('Error', err);
        res.send(err);
    });
}