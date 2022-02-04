let ApiKey="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";
function funsel(emails)
{
    const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authenticnations['api-key'];
apiKey.apiKey = ApiKey;
let apiInstance = new SibApiV3Sdk.ContactsApi();
let createContact = new SibApiV3Sdk.CreateContact();
createContact.email = "nishantdhamija41@gmail.com";
createContact.listIds = [2]
apiInstance.createContact(createContact).then(function(data) {
console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
console.error(error);
});
}
                    