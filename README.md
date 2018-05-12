## Playment assignment

- The smart component is App.js in src while the presentation compoent are present in the atoms folder.
- The app use redux for state management and I have written three middlewares (in the src/store folder).
- The navagation and addition of folders are describes in the challange have been implemented
- The following edgecases have been implemented, use tried to up formt eh tpmost folder, user tried to create two folders of the same name if the same folder.
- The smart componet has been unit tested with jest and enzyme, the tests are in the App.test.js file.
- I have written some stub http calls in the HttpHelpers folder, i have chosen to go with a method of getting the path and folder list from the server each time
as having the whole structure in-memeory will not sacle to a large number of folders. In a real world implementation i would go with a dB with denormalized to reduce query time.
- I have used alert, prompt and confirm in several places that should be replaced with toast messages later
- I belive this app is scalable to include other use cases link delete or edit

This project was bootstrapped with Create React App.

