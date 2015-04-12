### Explore

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, doloremque doloribus enim est iusto molestiae obcaecati quibusdam ullam. A adipisci dolores est facilis libero obcaecati porro repellendus repudiandae, sequi voluptatem.

#### Components

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, doloremque doloribus enim est iusto molestiae obcaecati quibusdam ullam. A adipisci dolores est facilis libero obcaecati porro repellendus repudiandae, sequi voluptatem.

```scss
// Bar
@include Component( 'Bar' )
{
    background: blue;
}
```

You can read more about components in the documentation.

#### Modifiers

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, doloremque doloribus enim est iusto molestiae obcaecati quibusdam ullam. A adipisci dolores est facilis libero obcaecati porro repellendus repudiandae, sequi voluptatem.

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

You can read more about modifiers in the documentation.

#### Elements

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, doloremque doloribus enim est iusto molestiae obcaecati quibusdam ullam. A adipisci dolores est facilis libero obcaecati porro repellendus repudiandae, sequi voluptatem.

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

You can read more about elements in the documentation.