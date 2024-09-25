# ITP Stand Application

Application used to reserve stands for the Engineering Job Fair (ITP).

## Case
* Company is registering to Job Fairs using Google Form.
* Client should be able to choose appropriate stand.
* Email with link is send to client (implemented on Google Form side)
* There is 4m, 6m, 8m and sponsor types available.

## Solution
###### Backend
Backend Function is generating link with id which is associated with company and type of stand.

Backend contains API to fetch and save data to MongoDB and to generate unique links for the companies.

###### Frontend
SVG map is generated based on config and id. 

# Container Case changes to be made

## MongoDB schema

**Database name**: `standapp`

**Collections**:
- `reservedStands`,
- `tokens`.

## Dotenv

Requires changes to MongoDB connection and backend expose port.
![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/38d7d3da-2f1c-4d3c-869b-4c16fa2e3e48)

## Backend api calls changes

Frontend makes calls to localhost:3000 (PORT defined in dotenv file). It should be changed to whatever address the container provides. Code that is subject to change is tagged with @kerdamon :

##### useStands.js
![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/bd05dc29-d530-4562-b2d4-0beb04548bed)

##### useToken.js
![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/975467b3-b38a-44f2-9b4a-bed926615589)

##### useTokens.js
![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/8f3519a1-b50b-4578-a29c-0a92bbff5237)

##### DataContext.js
![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/764c78da-7e84-41a5-908b-7319a9dec55e)

![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/9a730f3f-1e92-45a6-851b-eeca014018a1)

![obraz](https://github.com/adam-glab/standapp_new/assets/72575016/cabdd32f-8b64-4abc-b9eb-b57bc95d0218)
