const fbAdminConfig = {
  type: 'service_account',
  project_id: 'react-twitter-clone-bd306',
  private_key_id: process.env.FB_PRIVATE_ID_KEY,
  private_key: process.env.FB_API_KEY,
  client_email:
    'firebase-adminsdk-7y87h@react-twitter-clone-bd306.iam.gserviceaccount.com',
  client_id: '104987616406536305779',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7y87h%40react-twitter-clone-bd306.iam.gserviceaccount.com',
};

module.exports = fbAdminConfig