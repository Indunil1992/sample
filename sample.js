let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.adminGetUser({
            UserPoolId: "us-east-1_Op8yngVcI",
            Username: "indunil"
        }).promise();
console.log("dataa")
console.log(data)
    } catch (err) {
        console.log("errrrr")
console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};