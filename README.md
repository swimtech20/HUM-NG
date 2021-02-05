# HUM-NG
##### House Utility Manager... in Angular!
Developed by: Gage Gibson, Caleb LaVergne, Jayme Brock


## Tools to use
- IDE: Visual Studio Code (VSC)
- Source Control: SourceTree, GitHub, GitKraken (choose one for your OS); I use SourceTree
- Community: Slack
- _More to come_ (API, server, database, etc)

## Getting started
Fork the repository and map it to your Source Control application (DO NOT CLONE)

If you want to copy my VSC settings, list of extensions, and theme (highly recommended):
- Open VSC
- Go to the *Extensions* tab (```ctrl + shift + x``` for Windows, ```cmd + shift + x``` for Mac)
- Install the extension "Syncing" by nonoroazoro.
- ```ctrl + shift + p``` to open command prompt
- Type "syncing"
- Arrow down to "Download Settings"
- Enter gist manually
- Paste this token in ```c4d26d476dcd0a9a96c25300a0268e7ad95bb783``` (as of 02/05/2021)
  - if this token does not work, contact Gage for a new one
#### _NOTE_: you can download these settings and modify them as you wish (mainly colors etc.). The important thing here is to get the extensions which will standardize formatting, etc.
- Run the command ```npm i``` which will install all required node_modules by the application.
- Run the command ```npm start``` which will trigger the Angular CLI to build and run the application.
  - Feel free to code without this running, but you won't be able to see it in the browser.

## Source Control
Use Slack to communicate and set standards, but for right now:
- Use the specific feature branch for the task at hand
- Once you push to your personal fork, send a Pull Request to Gage
- If approved, these changes will be merged into the main repo; if unapproved, code will go back to the developer.

## Coding Standards
### CSS/SCSS
- Class names are to be hyphenated. e.g ```list-element```
- IDs are to be camelCase. e.g. ```mainDiv```
- HUM uses scss and minimizing code is going to be CRUCIAL
  - Utilize variables and mixins files in ```src/styles/```
  - Nest styles where possible, this provides stronger style priority
  - Component _ViewEncapsulation_ is on, so styles are restricted to its component stylesheet, unless it is global i.e. ```styles.scss```
  - AKA, if some styles apply to multiple components across the app, these should be in the global stylesheet
- Try to avoid inline styles, but they aren't forbidden
- Try to avoid ```!important``` - if styles are nested and given enough priority, the important tag should not be necessary.

### HTML
- The Prettier extension should take care of most html formatting
- Not much else, but try to minimize the number of wrapping divs etc. to avoid confusion and convolusion down the road.

### TypeScript
- Utilize NGRX Store for information needed across the app (e.g. user data, house data)
- Minimize component properties
- If a component is getting large (discretionary) move part of that component into another child component
- ****** More to come here as the application grows... ******
