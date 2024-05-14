const query = `
query userSessionProgress($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
      totalSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}
`;

const formatData = (data) => {
  const sendData = {
    // allQuestionsCount: data.allQuestionsCount,
    submitStats: data.matchedUser.submitStats
  };
  return sendData;
};

exports.query = (req, res) => {
  const user = req.params.id;
  fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com'
    },
    body: JSON.stringify({ query: query, variables: { username: user } }),
  })
  .then(result => result.json())
  .then(data => {
    if (data.errors) {
      res.send(data);
    } else {
      console.log(data.data);
      res.send(formatData(data.data));
    }
  })
  .catch(err => {
    console.error('Error', err);
    res.send(err);
  });
};
