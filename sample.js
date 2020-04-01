let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.adminEnableUser({
            UserPoolId: process.env.UserPoolId_cognitoIndunilpoolAp1,
            Username: "indunil"
        }).promise();
console.log("dataa")
console.log(data)
    } catch (err) {
        console.log("errrrrr")
console.log(err)
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};