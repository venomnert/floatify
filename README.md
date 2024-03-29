# Floatify
A light-weight floating form label plugin for jQuery

Based on a UI concept by Matt D. Smith.

[Demo](https://digitalify.github.io/floatify/)

## Usage

Include `jquery.floatify.js` and `jquery.floatify.css` to your page

```html
<link href="jquery.floatify.css" rel="stylesheet" />

<!-- floatify is jQuery plugin, so... -->
<script src="jquery.js"></script>
<script src="jquery.floatify.js"></script>
```

### HTML

Just normal HTML `input` tag with `placeholder`

```html
<input type="text" placeholder="First name">
```

### JS

```js
$('input').floatify({
  // options
});
```

## Available options

```js
{
  position: 'left', // can be left or right
  hGap: null // horizontal gap, can be any number or even string like '10px'
}
```

## License

[MIT](https://github.com/digitalify/floatify/blob/master/LICENSE)