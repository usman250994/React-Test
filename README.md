This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Configuration:
You need to create an `.env` file in root directory and copy keys from the sample env. to run the app. Also I can deploy it on AWS for live test. Please notify me.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
                          
## Using Context Over Redux
 
 This was not a mighty application where we need to decide upon busines logic in different containers. We just need a few props available all around our application. with minimal over head. No need to create unneeccessary classes; where things can work around as dump components (avoiding React lifecycle hooks). The application mainly contains three segments, A map, a List of marker details, and an address form. All of them are inerconnected and will re render if one changes. However, still where needed, I created a React class component (stateful) and handled state internally. reducing any extra call to provider for needless re-rendering. Also working over big applications I prefer and personnally like to work with Redux + Epics.

## Directory Structure

I went for a hierarichal directory structure. 
 
 -src<br>
--components (state less simeple functional components, with drilled props)<br>
---dumpComponent-1<br>
----index (root file with rendering logic of the component)<br>
----css (file to style component)<br>
---dumpComponent-2 <br>
----index<br>
----css<br>
--ContextApi  (We all are aware of what this is )<br>
---provider (React class, handling api calls and state management is done here)<br>
---consumer<br>
--shared<br>
---helpers<br>
----utilities (generic functions to be used any where accross app)<br>
---services<br>
----location-services (separated geolocation services from business logic)<br>
----marker-serices(CRUD operations)<br>
---constants (holds our declared constants; spearated from renderin code)<br>

Reacts main purpose is to destructure the application in to small re render able componnts.
Therefore I prefer to create small and reusbale components. With styling of each component independant of the other.

They then call constants, helpers and services to use any needed function. 
This structure separates every type of services, components, helper kind of functions, application wide constants and more relations apart. Making seamless changes to any part for any upcoming scenarios, without breaking changes.

## Handling Configuration values

Well, there in this application, I have a few main configuration values,

`Goolge api` key  (I put it in `.env` file )
`Base url` to hit my server (  I again put it back to `.env` file)

as these are the things kept secret and will change accross every environment. Although i have declared a `sample.env` file to showcase the required .env variables 

## Handling invalid address

Well I used Googles, place api where options are suggested and an invalid address, which google has not recored of , returns an error msg. Which I displayed just below the field. Also any error messages from the apis are also displayed below the auto complete field (for entering address).

## Handling Error in third party API

Well, It can be the case that Google api key is not responding, is invalid or expires. This should not break my Application. To handle this scenario. I simply used a utility function to check whether Google api has loaded or not? If it has loaded, I then allow to search for places, edit and add markers and more. Other than that. I just returns the function call. 
( a message to be displayed for broken Api key )

## Migratation to another location service proivider (apart from Google Api)

Well, Just a simple dump component is dedicated to Google Maps and  the key to api is in `.env`
file. We can change it any time. No need to hurt the whole application. Also we can change the markers associated with the maps api in markers component. Rest rendering logic will be safe in ther components and will be implemented as it is. Isn't it? 

## Improvements; further implementations

Well  if we stretch the weekend long enough. We had a maximum of 1 to 1.5 working day time. I have to deliver 2 repositories. With `backend CRUD` and a `Frontend SPA`. So there are a few things that got compromised to time constraint.
Those are :

1. I could better design the page. Adding a few more `css classes`
2. I could try to add some extra features like Epic, Formik and more. 
   (although this would was a  test so I avoided any heav library)
3. The most important part. I was thinking to deploy both the applications FE + BE on AWS. So     that you can live check.
4. Above all, I was in need of some time to write a few unit tests. Which i couldn't get. 

## Github repositories

### Frontend: 
https://github.com/usman250994/React-Test

### Backend:
https://github.com/usman250994/React-Test-BE

#### limitations during development

All I had, was limited time. If things worked I can work on the improvement areas to furnish the project.(only if needed)
