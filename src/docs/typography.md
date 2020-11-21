---
title: Typography
description: Typography Styles
path: /docs/typography
author: Lucas Zapico
image: 
date-created: '2020/11/14'
draft: false
featured: ""
type: doc
categories:
  - typography
tag:
  - typography
---

# Typography

The typography module is broken into submodules dealing with 

- family
- scale 
- weight 
- 

### Header Sets 

A header set defines a family of headers `display` - `h6`. 

<!-- add class modifier for  multiple header sets-->

```css
$header-family;
$header-line-height;
$header-weight;
```

```css
@mixin headerType($header-family, $header-line-height, $header-weight) {
  .display,
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    font-family: $header-family;
    line-height: $header-line-height;
    margin: 0px;
    font-weight: $header-weight;
  }
}
```

<div class="demo">
  <h1>header 1<h1>
  <h2>header 2<h2>
  <h3>header 3<h3>
  <h4>header 4<h4>
  <h5>header 5<h5>
  <h6>header 6<h6>
</div>

## Type Scale 

```css 
@mixin typeScales($header-base-size, $type-scaler) {
  .display {
    font-size: $header-base-size * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler;
  }
  h1,
  .h1,
  .exa {
    font-size: $header-base-size * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler;
  }
  h2,
  .h2,
  .peta {
    font-size: $header-base-size * $type-scaler * $type-scaler * $type-scaler * $type-scaler * $type-scaler;
  }
  h3,
  .h3,
  .tera {
    font-size: $header-base-size * $type-scaler * $type-scaler * $type-scaler * $type-scaler;
  }
  h4,
  .h4,
  .giga {
    font-size: $header-base-size * $type-scaler * $type-scaler * $type-scaler;
  }
  h5,
  .h5,
  .mega {
    font-size: $header-base-size * $type-scaler * $type-scaler;
  }
  h6,
  .h6,
  .kilo {
    font-size: $header-base-size * $type-scaler;
  }

  .body {
    &__large {
      font-size: $type-base-size * $type-scaler;
    }

    &__default {
      font-size: $type-base-size;
    }

    &__small {
      font-size: $type-base-size * .8;
    }
  }

  .micro {
    font-size: 0.5rem;
  }

  .milli {
    font-size: $header-base-size/$type-scaler;
  }
}
```


# Header 1 

```
.h1,h1 
```

| header | selector |
|---|---|
| # header 1  |   |