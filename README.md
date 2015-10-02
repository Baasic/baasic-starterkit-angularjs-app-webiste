Baasic AngularJS App Website Starter Kit
============

## Starter Kit Functionality

This starter kit provides a blog engine, ladning page and simple plan editor. Initially, it shows landing page with a list of availaible plans. In blog section it shows blog posts with tags and login modules contained within a panel on the right side. To keep things simple, it allows you to add/edit/delete blog posts using the markdown syntax and add tags to posts. It is very simple to add/edit/delete plans as well. We deliberately removed more advanced features so the basic functionality is not obscured by them: however, future samples will include a complete content management functionality.

This kit is based on the Baasic article data type and Dynamic Resources. Articles provide a standard way to gather written work for the purpose of publishing various documents, news, posts and other similar items. Each article has a set of properties that can be edited interactively to change their appearance and behavior. We can distinguish following article types:
- Published article - a publicly available article,
- Article pending publication - an article that is waiting on publication until the predetermined Publication date,
- Draft article - an unfinished article saved to the Baasic data storage and
- Archived article - an older article separated in the archived data storage for potential future use.

Dynamic Resource Schema is JSON that can be created on Dashboard. We use one dynamic resource schema for plans and one for social links in footer.

## Starter Kit live demo
[Bora](http://demo.baasic.com/angularjs/starterkit-app-website/bora/)  
 

## Working with the Starter kit
 
As a client-side prerequisite, you should install the basic tools for your operating system: Node.js (4.x and above), Bower and Gulp. Start by cloning the [AngularJS App Website Starter Kit repository](https://github.com/Baasic/baasic-starterkit-angularjs-app-website/). After that, go into the root folder of the started Kit you just cloned and type

    npm install

npm (Node Package Manager) will go through its configuration file (package.json) and install all dependencies. It may take a couple of minutes to download and install everything; when it is finished, just type

    gulp serve

this will serve you the default theme, to serve a different theme please use the _--theme_ switch

    gulp serve --theme apptheme

and you are *almost* ready to go.

In its default state, this kit points to the [main demo site](http://demo.baasic.com/angularjs/starterkit-app-website/bora/) and pulls its content from it. As this is demo content on our site, you will need to point your kit to your own application. It is easy - just go to the *\src\themes\apptheme\app.conf.json* and enter your Baasic application unique identifier (API Key) here:

    {
        "apiKey" : "your-unique-identifier"
    }

As your application may be empty and there is no articles, no plans and no social links in it, and the demo page will be blank after this switch.

For plans and social links in footer, you will have to make your own Dynamic Resource schemas in Baasic Dashboard.

Dynamic Resource Schema for Plans named "plans" should look like this:

    {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Unique Identifier",
          "hidden": true,
          "readonly": true
        },
        "name": {
          "type": "string",
          "required": true
        },
        "sync": {
          "type": "boolean"
        },
        "price": {
          "type": "number"
        },
        "period": {
          "type": "string"
        },
        "tickets": {
          "type": "number"
        },
        "isFeatured": {
          "type": "boolean"
        },
        "description": {
          "type": "string"
        },
        "navAccessLevel": {
          "type": "string"
        }
      }
    }

Dynamic Resource Schema for social links named "social" should look like this:

    {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "Unique Identifier",
          "hidden": true,
          "readonly": true
        },
        "url": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "order": {
          "type": "number"
        }
      }
    }

However, you can now log in and start entering your own content.

## Production ready build

To make the app ready for deploy to production run:

```bash
gulp dist
```
or
```bash
gulp dist --theme apptheme
```

## Base url option

You can also add a `--baseUrl` command if your blog destination is not in root of your website 

For example:
`--baseUrl "/angularjs/starterkit-app-website/bora/"`

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

## Get in touch

Get in touch using one of the community channels

* GitHub: [Baasic](https://github.com/Baasic)
* Google Groups: [Baasic Support](https://groups.google.com/forum/#!forum/baasic-baas)
* Twitter: [@baasical](https://twitter.com/baasical)