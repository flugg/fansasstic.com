### Install

Fansasstic comes with its own CLI (Command Line Interface) through Node.js that makes installing and setting up new projects a delight. To install it, run the following command in the terminal:

```
npm install -g fansasstic-cli
```

Once the CLI is installed you can easily set up a new project using the following command:

```
fansasstic new
```

If you're having problems, head over to the [install guide](http://fansasstic.com/docs/install) for more information.

#### Boilerplate

After you've installed the framework and initiated a new project you will see that the CLI has installed some dependencies and given you a boilerplate in the _sass_ folder.
The boilerplate gives you some configuration files and a suggested folder structure. All the files and folders are completely optional, the only thing required to use Fansasstic is that you import it:
 
 ```scss
 @import '../bower_components/fansasstic/src/manifest';
 ```
 
 This command is included in the boilerplate, more specifically the __manifest.scss__ file. Note that you have to change the path if you move the Sass files.
 
 The suggested, but completely optional folder structure, can be seen below. For more insight, head over to [the documentation](http://fansasstic.com/docs/boilerplate).