### Configure

Fansasstic is very configurable and brings a default configuration file. However, you're completely free to override it, or parts of it, by creating a _$fansasstic_ map.
The boilerplate provides a ___settings.scss__ which has a _$fansasstic_ map filled with all the default values.

You can head to the [documentation](http://fansasstic.com/docs/configuration) for a full overview of the configuration possibilities.

#### Variables

The boilerplate gives you a __variables__ folder with a few example files to get you started. You are free to remove these or store your variables somewhere else.

Instead of creating regular Sass variables, Fansasstic encourages the use of maps to give one variable multiple values. This has several benefits, but let's first take a look at ___breakpoints.scss__:

```scss
$breakpoints: (
    small: 400px,
    medium: 700px,
    big: 1000px
);
```

The _$breakpoints_ map is where you should store your major breakpoints; you give the given breakpoint a key and a value. 

By using the keys you assigned in the _$breakpoints_ map you can now create variables that magically represents different values at different breakpoints. Take a look at ___layout.scss__:

```scss
$layout: (
    'spacing': (
        default: 10px,
        small: 15px,
        big: 20px
    )
);
```

Here we assign the _spacing_ key in _$layout_ to be 10px by default, 15px at 400px screen width and 20px at 1000px screen width. To see how you can use this magic you should read up on modules below.

If we, however, only want to retrieve a value given at a given breakpoint we can do so using _get_:

```scss
$value: get( $layout, 'spacing.small' ); // Returns 15px
```

The _get_ function is part of Fansasstic's huge library, filled with helpful functions to simplify working with data types in Sass; like strings, lists and maps. 
Head over to the documentation for more information about [variables](http://fansasstic.com/docs/variables) or [the library](http://fansasstic.com/docs/library).

#### Modules

Modules are in many ways the building blocks of your application, they are basically mixins on steroids. You can use modules to bind your variables maps to to the given breakpoint keys. The boilerplate includes an empty __modules__ folder.

If we use the default variables as described above we can create the following module:

```scss
@include new-module( "inner-spacing", (
    property: padding
    value: get( $layout, 'spacing' );
) );
```

This will create a new module called _inner-spacing_, we can take use of our new module like this:

```scss
header {
    @include module( 'inner-spacing' );
}
```

Which compiles down to the following CSS output:

```css
header { margin: 10px }
@media screen and (max-width: 400px) {
    header { margin: 15px } }
@media screen and (max-width: 1000px) {
    header { margin: 20px } }
```

You can read more about [modules](http://fansasstic.com/docs/modules) in the documentation.