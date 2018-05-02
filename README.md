# Copper Framework

<a href="https://snyk.io/test/github/arvindr21/copper-framework?targetFile=package.json"><img src="https://snyk.io/test/github/arvindr21/copper-framework/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/arvindr21/copper-framework?targetFile=package.json" style="max-width:100%;"></a>

***
> Copper Framework (CF) is a clone & update of [NoDivide/astrum](https://github.com/NoDivide/astrum). All the project setup & initial templates with component library was created by NoDivide & team. This is an attempt to covert the same to a Web component library with living style guides.

Copper Framework (CF) is a lightweight component library designed to be the base for any new project that requires managing and maintaining web components (buttons to modal popups). 

This is **NOT** a client side SPA framework. 

**Copper Framework A.K.A. Living Component Guide for static & dynamic components**

This component library is supposed to be a single source of truth for all the developers involved in the project and this should be frozen by the time we start working on the actual application development.

Any change requests to the components need to start from here and then get merged with actual project after required approvals.

A CF component library comprises of components organised into groups. There are 2 types of components that you can scaffold with CF. 
* Static
* Dynamic

If you are building simple components like buttons, custom radios, etc, which do not involve JavaScript or related functionality, select `static` under component type while creating a component

Each component has a `markup.html` and `description.md` file which are
used to render an example of the component along with a code sample. A group can also have an description and is used for organisational purposes.

If you are building JavaScript driven component, this framework expects you build those components using [W3C Web Components Standards](https://www.w3.org/standards/techs/components#w3c_all). This way, there would not be any third party dependency with the other libraries as well the fundamental components are built ground up, hence the living style guide.

Each component has a `markup.html`, `description.md` & `component.html` file which are used to render an example of the component along with a code sample. These components can also be grouped like static components.

You also have the option to add pages of content, for example an introduction page and/or coding guidelines specific to your project.

## Table of Contents
- [Getting Started](#getting-started)
- [How `Copper Framework` Works](#how-cf-works)
	- [Folder Structure](#folder-structure)
	- [The data.json File](#the-datajson-file)
		- [Project Details](#project-details)
		- [Creators](#creators)
		- [Theming](#theming)
		- [Assets](#assets)
		- [Font Libraries](#font-libraries)
		- [Content Pages](#content-pages)
- [Adding Components](#adding-components)
	- [Static Component Types](#static-component-types)
	- [Special Options](#special-options)
- [Editing Components](#editing-components)
- [Editing Groups](#editing-groups)
- [Listing Components](#listing-components)
- [Deleting Components](#deleting-components)
- [Deleting Groups](#deleting-groups)
- [Updating Copper Framework](#updating-copper-framework)
- [Contributing](#contributing)
- [Browser Support](#browser-support)
- [Acknowledgements](#acknowledgements)
- [License](#license)

***

<a href=“#getting-started”></a>
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

You can spawn another terminal/prompt and scaffold components and the Copper Framework app refreshes. 

Do keep an eye on the console of the Copper Framework app, this will throw errors if there are any inconsistencies.

<a href=“#how-cf-works”></a>
## How Copper Framework Works
Copper Framework is a single page, [Vue.js](https://vuejs.org) powered, app. As mentioned previously, it comprises of components organised into groups and loads its all important data from a core `data.json` file.

<a href=“#folder-structure”></a>
### Folder Structure

```
app                      // Patterns CSS and JavaScript.
components               // Your components.
  buttons                // Example group folder.
    default              // Example component folder.
      component.html        // Component definition - dynamic components
      markup.html        // Component markup.
      description.md     // Component description.
    description.md.      // Group description.
pages                    // Your pages.
  intro.md               // Example page.
data.json                // Core data file.
favicon.png              // Copper Framework's default favicon.
index.html               // Patterns app index file.
LICENSE.txt              // MIT licence file.
```

Each group has its own folder under `components` and each component has its own sub-folder under its parent group.

<a href=“#the-data-file”></a>
### The data.json File
The `data.json` file is central to how Cooper Framework works and should be relatively self explanatory upon opening it. By default it looks like this:

```
{
    "project_logo": null,
    "project_favicon": "favicon.png",
    "project_name": null,
    "project_url": null,
    "copyright_start_year": null,
    "client_name": null,
    "client_url": null,
    "creators": [
        {
            "name": null,
            "url": null
        }
    ],
    "theme": {
        "border_color": "#E0E6ED",
        "highlight_color": "#F9FAFC",
        "brand_color": "#00585C",
        "background_color": "#FFFFFF",
        "code_highlight_theme": "github",
        "override_code_highlight_bg": "#F9FAFC",
        "sample_dark_background": "#333333",
        "show_project_name": true,
        "show_version": true,
        "max-width": null,
        "titles": {
            "library_title": "Component Library",
            "pages_title": "Overview",
            "components_title": "Components"
        }
    },
    "assets": {
        "css": [],
        "js": []
    },
    "font_libraries": {
        "typekit_code": null,
        "typography_web_fonts": null,
        "google_web_fonts": null
    },
    "content": {
        "show_first_page_on_load": true,
        "title": "Overview",
        "pages": [
            {
                "name": "introduction",
                "title": "Introduction",
                "file": "./pages/intro.md"
            }
        ]
    },
    "groups": []
}
```

Let's break it down in details:

<a href=“#project-details”></a>
#### Project Details
```
{
    "project_logo": "/assets/images/logo.svg",
    "project_favicon": "../favicon.png",
    "project_name": "My Project",
    "project_url": "http://myproject.com",
    "copyright_start_year": 2015,
    "client_name": "Best Client Ltd",
    "client_url": "http://bestclient.com",
```

The more information you add to your `data.json` file, the more customised the Copper Framework UI becomes. For example, if you specify a `project_logo` (this can be a relative path or a full URL), the logo will appear at the top of the sidebar and/or if you specify a `client_name` along with a `copyright_start_year`, copyright information will be automatically generated. This will appear at the bottom of the sidebar.

<a href=“#creators”></a>
#### Creators
```
    "creators": [
        {
            "name": "Ryan Taylor",
            "url": "http://twitter.com/ryanhavoc"
        },
        {
            "name": "Matt West",
            "url": "http://twitter.com/mattantwest"
        },
        {
            "name": "Arvind Ravulavaru",
            "url": "http://twitter.com/arvindr21"
        }
    ]
```

You can specify as many creators as you need. Copper Framework will automatically format these into a "created by" line that appears at the bottom of the sidebar.

<a href=“#theming”></a>
#### Theming
```
    "theme": {
        "border_color": "#E0E6ED",
        "highlight_color": "#F9FAFC",
        "brand_color": "#00585C",
        "background_color": "#FFFFFF",
        "code_highlight_theme": "github",
        "override_code_highlight_bg": "#F9FAFC",
        "sample_dark_background": "#333333",
        "show_project_name": true,
        "show_version": true,
        "max_width": null,
        "titles": {
            "library_title": "Component Library",
            "pages_title": "Overview",
            "components_title": "Components"
        }
    },
```

Copper Framework supports basic theming to help you bring your component library in line with your projects branding.

Key | Default | Description
---|---|---
border_color | #E0E6ED | The border color used throughout the component library, e.g. separating the nav items and around the component containers.
highlight_color | #F9FAFC | The highlight color used throughout the component library, .e.g. the background on nav items and the show code sample buttons.
brand_color | #00585C | The primary brand color for your project, used sparing to signify the active nav item as well as and anchors used in your descriptions.
background_color | #FFFFFF | The background color for the whole component library.
code_hightlight_theme | github | Copper Framework uses [highlight.js](https://highlightjs.org) for its code samples. You can use any style you like: [available styles](https://highlightjs.org/static/demo)
override_code_highlight_bg | #F9FAFC | Allows you to override a [highlight.js](https://highlightjs.org) styles background color.
sample_dark_background | #333333 | The color used for dark background component samples.
show_project_name | true | Show the project name in the sidebar.
show_version | true | Show the Copper Framework version at the bottom of the sidebar.
max_width | null | A maximum width for the components container element.
titles | object | Customise titles that appear on the sidebar. Set a title to null if you'd prefer for it not to be shown at all.

<a href=“#assets”></a>
#### Assets
```
    "assets": {
        "css": [
            "../assets/css/styles.css"
        ],
        "js": [
            "../assets/js/vendor.js",
            "../assets/js/main.js"
        ]
    },
```
This is where you specify the CSS and JavaScript for your project, these will be included in your component library to render your components.

<a href=“#font-libraries”></a>
#### Font Libraries
```
    "font_libraries": {
        "typekit_code": null,
        "typography_web_fonts": null,
        "google_web_fonts": null
    },
```
If your project requires a font service you can specify this here.

**Note:** *For TypeKit you only need to specify the unique code for example: https://use.typekit.net/**dxp5bzu**.js*

<a href=“#content-pages”></a>
#### Content Pages
```
    "content": {
        "show_first_page_on_load": true,
        "title": "Overview",
        "pages": [
            {
                "name": "introduction",
                "title": "Introduction",
                "file": "./pages/intro.md"
            }
        ]
    },
```
Copper Framework includes an introduction page by default.

Key | Default | Description
---|---|---
show_first_page_on_load|true|Display the first page in the `pages` array on load.
title|Overview|The title that appears above the pages navigation in the sidebar.

Add your pages to the `pages` array, each item requires:

Key|Description
---|---
name|The page name, should be lowercase with no spaces. This value is used to set the page’s ID.
title|The page title, this appears in the page navigation in the sidebar.
file|Either created `.md` file in the pages directory and enter the relative path to it or specify a full Url to a markdown file, for example a `README.md` file in a Git repository.

**Note:** *If you don’t require any pages in your component library simple set the `content` key value to `null`.*

<a href=“#adding-components”></a>
## Adding Components
The simplest way to add a component to your component library is by using the Copper Framework command-line tool which will ask you a series of questions on how you want the component to be configured. For example:

`cf new navigation/primary`

This result of this in your `data.json` file would be:

```
    "groups": [
        {
            "name": "navigation",
            "title": "Navigation",
            "components": [
                {
                    "group": "navigation",
                    "name": "primary",
                    "title": "Primary Navigation"
                }
            ]
        }
    ],
```

The necessary files required for the new component are created for you automatically so now you can add your markup and a component description ready to be displayed in your component library.

<a href=“#static-component-types”></a>
### Static Component Types
Copper Framework currently supports two component types. The default component and a **colors** type. The **colors** type lets you include a color palette in your component library and to include it you use the `--type` option:

`cf new branding/color-palette --type colors`

The result of this in your `data.json` file would be:

```
    "groups": [
        {
            "name": "branding",
            "title": "Branding",
            "components": [
                {
                    "group": "branding",
                    "name": "primary-palette",
                    "title": "Primary Color Palette",
                    "type": "colors",
                    "colors": []
                }
            ]
        },
   ],
```

You’ll need to edit your `data.json` file further to add your color values, for example:

```
"colors": [
    "#4c4c4c",
    "#7d8284",
    "#a6b1b5",
    "#e6eaf2",
    "#FFFFFF"
]
```

You can also add complimentary colors by comma separating the values e.g.:

```
"colors": [
    "#7da9f9,#507ed3",
    "#f469a7,#c14c80",
    "#60ceb8,#3fa18d",
    "#f5d13f,#f5a63f",
    "#e199e5,#c776cb"
]
```

<a href=“#special-options”></a>
### Special Options
Components can also have special options that alter their behaviour. To use these add an `options` key to the component, for example:

```
{
    "group": "navigation",
    "name": "primary",
    "title": "Primary Navigation",
    "options": {
	      "sample_dark_background": true,
	      "disable_code_sample": true
    }
}
```

The available options are:

Key|Value|Description
---|---|---
sample_dark_background|boolean|Set the background of the component sample area to be a dark color.
sample_background_color|string|Override sample background color. This option take precident over the dark background color.
sample_min_height|integer|Copper Framework detects if a component is hidden at desktop or mobile resolutions by detecting the components rendered height. When it’s hidden in your project CSS, Copper Framework shows a message to this effect. If the component is absolutely positioned, it has no height so you can set a min-height with this option to ensure it is shown properly and Copper Framework messaging is shown correctly.
sample_overflow_hidden|boolean|Apply `overflow: hidden;` to the component sample.
disabled_auto_sample_hiding|object|Copper Framework automatically detects if you've hidden a component at mobile or desktop resolutions in your stylesheets. You can disable this feature using this option. Add `show_on_mobile` and `show_on_desktop` keys to the object with boolean values to set how the component should behave.
disable_code_sample|boolean|Don't display the component code sample.

<a href=“#editing-components”></a>
## Editing Components
To edit a component use the `edit` command:

`cf edit branding/primary-palette`

<a href=“#editing-groups”></a>
## Editing Groups
You can also edit a group using the `--group` option:

`cf edit --group branding`

**Note:** *If you change a groups name, Copper Framework automatically updates all of the groups components.*

<a href=“#listing-components”></a>
## Listing Components
To see a list of all of the components in your component library, you can use the `list` command:

`cf list`

<a href=“#deleting-components”></a>
## Deleting Components
To delete a component use the `delete` command:

`cf delete navigation/utility`

<a href=“#deleteing-groups”></a>
## Deleting Groups
You can also delete an entire group along with all its components using the `--group` option:

`cf delete --group navigation`

<a href=“#updating-copper-framework”></a>
## Updating Copper Framework
Firstly update the Copper Framework package:

`npm update -g copper-framework`

Navigate to the route of your project and then update your Copper Framework instance e.g.:

`cf update`

You will receive feedback that the update is complete.

There is also a `--force` option that you can use to force an update in the event that your Copper Framework instance is already on the current version. This is if you need to restore your Copper Framework instance core files.

## Contributing
Astrum was created by Ryan Taylor & Matt West of [No Divide](http://nodividestudio.com). Copper Framework is a layer on top of Astrum to provide a base for JavaScript based components as well. We welcome anyone and everyone to contribute to the project and help make Copper Framwework as versatile as possible. If you decide to get involved, please take a moment to review our [contribution guidelines](.github/CONTRIBUTING.md):

- [Bug reports](.github/CONTRIBUTING.md#bugs)
- [Feature requests](.github/CONTRIBUTING.md#features)
- [Pull requests](.github/CONTRIBUTING.md#pull-requests)

<a href=“#browser-support”></a>
## Browser Support
- Chrome *(latest 2)*
- Safari *(latest 2)*
- Firefox *(latest 2)*
- Opera *(latest 2)*
- Edge *(latest 2)*
- Internet Explorer 10+

This doesn't mean that Copper Framework cannot be used in older browsers, we’re just aiming to ensure compatibility with those mentioned above.

<a href=“#acknowledgements”></a>
## Acknowledgements
Copper Framework is a clone & update of [NoDivide/astrum](https://github.com/NoDivide/astrum)

Copper Framework wouldn’t work without [Vue.js](http://vuejs.org/) and the work that Evan You is doing there: [support his efforts](http://vuejs.org/support-vuejs/).

The nifty loading animation we use was created by [Tobias Ahlin](http://tobiasahlin.com/spinkit/).

Our command-line tool is built using [Commander](https://www.npmjs.com/package/commander) by TJ Holowaychuk and [Inquirer](https://www.npmjs.com/package/inquirer) by Simon Boudrias.


<a href=“#license”></a>
## License
The code is available under the [MIT license](_template/LICENSE.txt).
