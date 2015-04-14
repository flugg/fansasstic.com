### Explore

Besides having a huge library of powerful functions that essentially extends the capabilities of Sass, and modules, to create flexible variables that has different values at different states.
Fansasstic also has a lot of mixins to make your CSS more organised. 

If you've used [BEM](https://en.bem.info/) or [OOCSS](http://oocss.org/) you'll feel right at home with Fansasstic's components.

#### Components

Components are independent blocks of CSS that can be reused in your application. They usually consists of elements, modifiers, modules and CSS rules.

```scss
// Bar
@include Component( 'Bar' )
{
    background: blue;
}
```

Which compiles down to the following CSS:

```css
.Bar {
    background: blue;
}
```

You can read more about components in the [documentation](http://fansasstic.com/docs/components).

#### Elements

Elements are blocks of CSS that has a specific function and depend on a specific component, and therefore it cannot be used outside of the scope of the component.

```scss
// Bar
@include Component( 'Bar' )
{
    background: blue;

    // Bar-icon
    @include Element( 'icon' )
    {
        padding-right: 20px;
    }
}
```

Which compiles down to the following CSS:

```css
.Bar {
    background: blue;
}
.Bar-icon {
    padding-right: 20px;
}
```

You can read more about elements in the [documentation](http://fansasstic.com/docs/elements).

#### Modifiers

Modifiers, on the other hand, are used to apply modifications to a component or element.

```scss
// Bar
@include Component( 'Bar' )
{
    background: blue;
    
    // Bar--alert
    @include Modifier( 'alert' )
    {
        background: red;
    }
}
```

Which compiles down to the following CSS:

```css
.Bar {
    background: blue;
}
.Bar--alert {
    background: red;
}
```

You can read more about modifiers in the [documentation](http://fansasstic.com/docs/modifiers).