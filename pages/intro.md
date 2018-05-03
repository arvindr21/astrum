# Web Component Twitter Bootstrap component library

This component library helps build an end to application using Twitter Bootstrap 4.x & Web Component Specifications. 

## Getting Started

In you web application, include the following CSS to get started

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```

You can refer `data.json` file `assets` property to view all the related dependencies to replicate the component library in your application.

# Copper Framework

Copper Framework (CF) is a lightweight component library designed to be the base for any new project that requires managing and maintaining web components (buttons to modal popups). 

This is **NOT** a client side SPA framework. 

**Copper Framework A.K.A. Living Component Guide for static & dynamic components**

## Getting Started
Firstly globally install Copper Framework:

`npm install -g copper-framework`

Create a new folder, where you would like to develop your component library and run

`cf init`

Finally add your first component e.g.:

`cf new buttons/btn-primary`

Note: Component name must be in kebab case (ex: `btn-dark`).

Your component library should now be up and running though granted it will look a little sparse at this stage.

Once this done, you can run

`npm start` 

or

`yarn start`

to launch the Copper Framework app on [localhost:5000](http://localhost:5000).

Do keep an eye on the console of the Copper Framework app, this will throw errors if there are any inconsistencies.