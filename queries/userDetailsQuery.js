const userDetailsQuery = `#graphql
query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      contestBadge {
        name
        expired
        hoverText
        icon
      }
      username
      githubUrl
      twitterUrl
      linkedinUrl
      profile {
        ranking
        userAvatar
        realName
        aboutMe
        school
        websites
        countryName
        company
        jobTitle
        skillTags
        postViewCount
        postViewCountDiff
        reputation
        reputationDiff
        solutionCount
        solutionCountDiff
        categoryDiscussCount
        categoryDiscussCountDiff
      }
    }
  }`

module.exports=userDetailsQuery