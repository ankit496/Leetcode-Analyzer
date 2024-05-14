const fetchAllQuestionswithTagQuery=require('../queries/fetchAllQuestionswithTag')
const formatData = (data) => {
    let sendData =  {
        advanced:data.matchedUser.tagProblemCounts.advanced,
        intermediate:data.matchedUser.tagProblemCounts.intermediate,
        fundamental:data.matchedUser.tagProblemCounts.fundamental
    }
    return sendData;
}
const question=async(req,res)=>{
    try{
        let username=req.params.id
        const result=await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com'
            }, 
            body: JSON.stringify({query: fetchAllQuestionswithTagQuery, variables: {username: username}}),
        })
        const data=await result.json()
        res.status(200).json({
            data:formatData(data.data)
        })
    }
    catch(err){
        res.status(400).json({
            message:"Some error occured"
        })
    }
}
module.exports=question