let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

    try {
        let data = await cognito_idp.adminCreateUser({
            UserPoolId: process.env.UserPoolId_cognitoIndunilpoolAp1,
            Username: "indunil",
            DesiredDeliveryMediums: ['EMAIL'],
            ForceAliasCreation: false,
            MessageAction: "RESEND",
            TemporaryPassword: "Sachithra@142"
        }).promise();
console.log("dataa")
console.log(data)
    } catch (err) {
        console.log("err")
console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};