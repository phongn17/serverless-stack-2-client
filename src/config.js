const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1e9wbmmiyuxy7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pmwz5uykba.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_t97bCEzT1",
    APP_CLIENT_ID: "6oiv1birgt18qjptie06dcsma3",
    IDENTITY_POOL_ID: "us-east-1:af8c687c-07fc-43bc-be87-da176d8d8d49"
  },
  stripeKey: "pk_test_cPOJibF7ZbFCk0QKbP72iQLx"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  },
  stripeKey: "pk_test_cPOJibF7ZbFCk0QKbP72iQLx"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
