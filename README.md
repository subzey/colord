<div align="center">
  <a href="https://github.com/omgovich/colord">
    <img src="assets/logo.png" width="280" height="210" alt="colord" />
  </a>
</div>

<div align="center">
  <a href="https://npmjs.org/package/colord">
    <img alt="npm" src="https://img.shields.io/npm/v/colord.svg?labelColor=dd3a5e&color=6ead0a" />
  </a>
  <a href="https://github.com/omgovich/colord/actions">
    <img alt="build" src="https://img.shields.io/github/workflow/status/omgovich/colord/Node.js%20CI/master.svg?labelColor=dd3a5e&color=6ead0a" />
  </a>
  <a href="https://codecov.io/gh/omgovich/colord">
    <img alt="coverage" src="https://img.shields.io/codecov/c/github/omgovich/colord.svg?labelColor=dd3a5e&color=6ead0a" />
  </a>
  <a href="https://npmjs.org/package/colord">
    <img alt="no dependencies" src="https://badgen.net/bundlephobia/dependency-count/colord?labelColor=dd3a5e&color=6ead0a" />
  </a>
  <a href="https://npmjs.org/package/colord">
    <img alt="types included" src="https://badgen.net/npm/types/colord?labelColor=dd3a5e&color=6ead0a" />
  </a>
</div>

<div align="center">
  <strong>Colord</strong> is a tiny yet powerful tool for high-performance color manipulations and conversions.
</div>

## Features

- 📦 **Small**: Just **1.4 KB** gzipped ([3x+ lighter](#benchmarks) than **color** and **tinycolor2**)
- 🚀 **Fast**: [2x+ faster](#benchmarks) than **color** and **tinycolor2**
- 😍 **Simple**: Chainable API and familiar patterns
- 💪 **Immutable**: No need to worry about data mutations
- 🛡 **Bulletproof**: Written in strict TypeScript and has 100% test coverage
- 🗂 **Typed**: Ships with [types included](#types)
- 🏗 **Extendable**: Built-in [plugin system](#plugins) to add new functionality
- 👫 **Works everywhere**: Supports all browsers and Node.js
- 💨 **Dependency-free**

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## Benchmarks

| Library                       | <nobr>Operations/sec</nobr>   | Size<br /> (minified)                                                                                                 | Size<br /> (gzipped)                                                                                                     | Dependencies                                                                                                                         | Type declarations                                                                                                |
| ----------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| <nobr><b>colord 👑</b></nobr> | <nobr><b>2,274,420</b></nobr> | [![](https://badgen.net/bundlephobia/min/colord?color=6ead0a&label=)](https://bundlephobia.com/result?p=colord)       | [![](https://badgen.net/bundlephobia/minzip/colord?color=6ead0a&label=)](https://bundlephobia.com/result?p=colord)       | [![](https://badgen.net/bundlephobia/dependency-count/colord?color=6ead0a&label=)](https://bundlephobia.com/result?p=colord)         | [![](https://badgen.net/npm/types/colord?color=6ead0a&label=)](https://bundlephobia.com/result?p=colord)         |
| color                         | 717,048                       | [![](https://badgen.net/bundlephobia/min/color?color=red&label=)](https://bundlephobia.com/result?p=color)            | [![](https://badgen.net/bundlephobia/minzip/color?color=red&label=)](https://bundlephobia.com/result?p=color)            | [![](https://badgen.net/bundlephobia/dependency-count/color?color=red&label=)](https://bundlephobia.com/result?p=color)              | [![](https://badgen.net/npm/types/color?color=e6591d&label=)](https://bundlephobia.com/result?p=color)           |
| tinycolor2                    | 956,285                       | [![](https://badgen.net/bundlephobia/min/tinycolor2?color=red&label=)](https://bundlephobia.com/result?p=tinycolor2)  | [![](https://badgen.net/bundlephobia/minzip/tinycolor2?color=red&label=)](https://bundlephobia.com/result?p=tinycolor2)  | [![](https://badgen.net/bundlephobia/dependency-count/tinycolor2?color=6ead0a&label=)](https://bundlephobia.com/result?p=tinycolor2) | [![](https://badgen.net/npm/types/tinycolor2?color=e6591d&label=)](https://bundlephobia.com/result?p=tinycolor2) |
| ac-colors                     | 637,469                       | [![](https://badgen.net/bundlephobia/min/ac-colors?color=e6591d&label=)](https://bundlephobia.com/result?p=ac-colors) | [![](https://badgen.net/bundlephobia/minzip/ac-colors?color=e6591d&label=)](https://bundlephobia.com/result?p=ac-colors) | [![](https://badgen.net/bundlephobia/dependency-count/ac-colors?color=6ead0a&label=)](https://bundlephobia.com/result?p=ac-colors)   | [![](https://badgen.net/npm/types/ac-colors?color=red&label=)](https://bundlephobia.com/result?p=ac-colors)      |
| chroma-js                     | 900,826                       | [![](https://badgen.net/bundlephobia/min/chroma-js?color=red&label=)](https://bundlephobia.com/result?p=chroma-js)    | [![](https://badgen.net/bundlephobia/minzip/chroma-js?color=red&label=)](https://bundlephobia.com/result?p=chroma-js)    | [![](https://badgen.net/bundlephobia/dependency-count/chroma-js?color=red&label=)](https://bundlephobia.com/result?p=chroma-js)      | [![](https://badgen.net/npm/types/chroma-js?color=e6591d&label=)](https://bundlephobia.com/result?p=chroma-js)   |

The performance results were generated on a MBP 2019, 2,6 GHz Intel Core i7 by running `npm run benchmark` in the library folder. See [tests/benchmark.ts](https://github.com/omgovich/colord/blob/master/tests/benchmark.ts).

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## Getting Started

```
npm i colord
```

```js
import { colord } from "colord";

colord("#ff0000").grayscale().alpha(0.25).toRgbString(); // "rgba(128, 128, 128, 0.25)"
colord("rgb(192, 192, 192)").isLight(); // true
colord("hsl(0, 50%, 50%)").darken(0.25).toHex(); // "#602020"
```

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## API

### Color parsing

#### Accepted input formats

- Hexadecimal strings (including 3, 4 and 8 digit notations)
- RGB strings and objects
- HSL strings and objects
- HSV objects
- Color names ([via plugin](#plugins))
- HWB objects ([via plugin](#plugins))
- XYZ objects ([via plugin](#plugins))
- LCH (coming soon)

```js
// String input examples
colord("FFF");
colord("#ffffff");
colord("#ffffffff");
colord("rgb(255, 255, 255)");
colord("rgba(255, 255, 255, 1)");
colord("hsl(0, 100%, 100%)");
colord("hsla(0, 100%, 100%, 1)");
colord("tomato"); // requires "names" plugin

// Object input examples
colord({ r: 255, g: 255, b: 255 });
colord({ r: 255, g: 255, b: 255, a: 1 });
colord({ h: 360, s: 100, l: 100 });
colord({ h: 360, s: 100, l: 100, a: 1 });
colord({ h: 360, s: 100, v: 100 });
colord({ h: 360, s: 100, v: 100, a: 1 });
```

#### Permissive parser

The parser of the library is user-friendly: it trims unnecessary whitespaces, clamps numbers, disregards character case, punctuation, brackets, etc. Here are some examples:

```js
colord(" aBc ").toHex(); // "#aabbcc"
colord("__rGbA 10 20,  999...").toRgbString(); // "rgb(10, 20, 255)"
colord(" hsL(  10, 200% 30 .5!!!").toHslString(); // "hsla(10, 100%, 30%, 0.5)"
```

### Color conversion

<details>
  <summary><b><code>toHex()</code></b></summary>

Returns the [hexadecimal representation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors) of a color. When the alpha channel value of the color is less than 1, it outputs `#rrggbbaa` format instead of `#rrggbb`.

```js
colord("rgb(0, 255, 0)").toHex(); // "#00ff00"
colord({ h: 300, s: 100, l: 50 }).toHex(); // "#ff00ff"
colord({ r: 255, g: 255, b: 255, a: 0 }).toHex(); // "#ffffff00"
```

</details>

<details>
  <summary><b><code>toRgb()</code></b></summary>

```js
colord("#ff0000").toRgb(); // { r: 255, g: 0, b: 0, a: 1 }
colord({ h: 180, s: 100, l: 50, a: 0.5 }).toRgb(); // { r: 0, g: 255, b: 255, a: 0.5 }
```

</details>

<details>
  <summary><b><code>toRgbString()</code></b></summary>

```js
colord("#ff0000").toRgbString(); // "rgb(255, 0, 0)"
colord({ h: 180, s: 100, l: 50, a: 0.5 }).toRgbString(); // "rgba(0, 255, 255, 0.5)"
```

</details>

<details>
  <summary><b><code>toHsl()</code></b></summary>

Converts a color to [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns an object.

```js
colord("#ffff00").toHsl(); // { h: 60, s: 100, l: 50, a: 1 }
colord("rgba(0, 0, 255, 0.5) ").toHsl(); // { h: 240, s: 100, l: 50, a: 0.5 }
```

</details>

<details>
  <summary><b><code>toHslString()</code></b></summary>

Converts a color to [HSL color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and expresses it through the [functional notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl_colors).

```js
colord("#ffff00").toHslString(); // "hsl(60, 100%, 50%)"
colord("rgba(0, 0, 255, 0.5)").toHslString(); // "hsla(240, 100%, 50%, 0.5)"
```

</details>

<details>
  <summary><b><code>toHsv()</code></b></summary>

Converts a color to [HSV color space](https://en.wikipedia.org/wiki/HSL_and_HSV) and returns an object.

```js
colord("#ffff00").toHsv(); // { h: 60, s: 100, v: 100, a: 1 }
colord("rgba(0, 255, 255, 0.5) ").toHsv(); // { h: 180, s: 100, v: 100, a: 1 }
```

</details>

<details>
  <summary><b><code>toName()</code></b> (<b>names</b> plugin)</summary>

Converts a color to a [CSS keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords). Returns `undefined` if the color is not specified in the specs.

```js
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

colord("#ff6347").toName(); // "tomato"
colord("#00ffff").toName(); // "cyan"
colord("#aabbcc").toName(); // undefined (the color is not specified in CSS specs)
colord("rgba(0, 0, 0, 0)").toName(); // "transparent"
```

</details>

<details>
  <summary><b><code>toHwb()</code></b> (<b>hwb</b> plugin)</summary>

Converts a color to [HWB (Hue-Whiteness-Blackness)](https://en.wikipedia.org/wiki/HWB_color_model) color space.

```js
import { colord, extend } from "colord";
import hwbPlugin from "colord/plugins/hwb";

extend([hwbPlugin]);

colord("#ffffff").toHwb(); // { h: 0, w: 100, b: 0, a: 1 }
colord("#555aaa").toHwb(); // { h: 236, w: 33, b: 33, a: 1 }
```

</details>

<details>
  <summary><b><code>toXyz()</code></b> (<b>xyz</b> plugin)</summary>

Converts a color to [CIE XYZ](https://www.sttmedia.com/colormodel-xyz) color space. The conversion logic is ported from [CSS Color Module Level 4 Specification](https://www.w3.org/TR/css-color-4/#color-conversion-code).

```js
import { colord, extend } from "colord";
import xyzPlugin from "colord/plugins/xyz";

extend([xyzPlugin]);

colord("#ffffff").toXyz(); // { x: 95.047, y: 100, z: 108.883, a: 1 }
```

</details>

### Color manipulation

<details>
  <summary><b><code>alpha(value)</code></b></summary>

Changes the alpha channel value and returns a new `Colord` instance.

```js
colord("rgb(0, 0, 0)").alpha(0.5).toRgbString(); // rgba(0, 0, 0, 0.5)
```

</details>

<details>
  <summary><b><code>invert()</code></b></summary>

Creates a new `Colord` instance containing an inverted (opposite) version of the color.

```js
colord("#ffffff").invert().toHex(); // "#000000"
colord("#aabbcc").invert().toHex(); // "#554433"
```

</details>

<details>
  <summary><b><code>saturate(amount = 0.1)</code></b></summary>

Increases the [HSL saturation](https://en.wikipedia.org/wiki/HSL_and_HSV) of a color by the given amount.

```js
colord("#bf4040").saturate(0.25).toHex(); // "#df2020"
colord("hsl(0, 50%, 50%)").saturate(0.5).toHslString(); // "hsl(0, 100%, 50%)"
```

</details>

<details>
  <summary><b><code>desaturate(amount = 0.1)</code></b></summary>

Decreases the [HSL saturation](https://en.wikipedia.org/wiki/HSL_and_HSV) of a color by the given amount.

```js
colord("#df2020").saturate(0.25).toHex(); // "#bf4040"
colord("hsl(0, 100%, 50%)").saturate(0.5).toHslString(); // "hsl(0, 50%, 50%)"
```

</details>

<details>
  <summary><b><code>grayscale()</code></b></summary>

Makes a gray color with the same lightness as a source color. Same as calling `desaturate(1)`.

```js
colord("#bf4040").grayscale().toHex(); // "#808080"
colord("hsl(0, 100%, 50%)").grayscale().toHslString(); // "hsl(0, 0%, 50%)"
```

</details>

<details>
  <summary><b><code>lighten(amount = 0.1)</code></b></summary>

Increases the [HSL lightness](https://en.wikipedia.org/wiki/HSL_and_HSV) of a color by the given amount.

```js
colord("#000000").lighten(0.5).toHex(); // "#808080"
colord("#223344").lighten(0.3).toHex(); // "#5580aa"
colord("hsl(0, 50%, 50%)").lighten(0.5).toHslString(); // "hsl(0, 50%, 100%)"
```

</details>

<details>
  <summary><b><code>darken(amount = 0.1)</code></b></summary>

Decreases the [HSL lightness](https://en.wikipedia.org/wiki/HSL_and_HSV) of a color by the given amount.

```js
colord("#ffffff").darken(0.5).toHex(); // "#808080"
colord("#5580aa").darken(0.3).toHex(); // "#223344"
colord("hsl(0, 50%, 100%)").lighten(0.5).toHslString(); // "hsl(0, 50%, 50%)"
```

</details>

### Color analysis

<details>
  <summary><b><code>alpha()</code></b></summary>

```js
colord("#ffffff").alpha(); // 1
colord("rgba(50, 100, 150, 0.5)").alpha(); // 0.5
```

</details>

<details>
  <summary><b><code>brightness()</code></b></summary>

Returns the brightness of a color (from 0 to 1). The calculation logic is modified from [Web Content Accessibility Guidelines](https://www.w3.org/TR/AERT/#color-contrast).

```js
colord("#000000").brightness(); // 0
colord("#808080").brightness(); // 0.5
colord("#ffffff").brightness(); // 1
```

</details>

<details>
  <summary><b><code>isLight()</code></b></summary>

Same as calling `brightness() >= 0.5`.

```js
colord("#111111").isLight(); // false
colord("#aabbcc").isLight(); // true
colord("#ffffff").isLight(); // true
```

</details>

<details>
  <summary><b><code>isDark()</code></b></summary>

Same as calling `brightness() < 0.5`.

```js
colord("#111111").isDark(); // true
colord("#aabbcc").isDark(); // false
colord("#ffffff").isDark(); // false
```

</details>

<details>
  <summary><b><code>luminance()</code></b> (<b>a11y</b> plugin)</summary>

Returns the relative luminance of a color, normalized to 0 for darkest black and 1 for lightest white as defined by [WCAG 2.0](https://www.w3.org/TR/WCAG20/#relativeluminancedef).

```js
colord("#000000").luminance(); // 0
colord("#808080").luminance(); // 0.22
colord("#ccddee").luminance(); // 0.71
colord("#ffffff").luminance(); // 1
```

</details>

<details>
  <summary><b><code>contrast(color2 = "#FFF")</code></b> (<b>a11y</b> plugin)</summary>

Calculates a contrast ratio for a color pair. This luminance difference is expressed as a ratio ranging from 1 (e.g. white on white) to 21 (e.g., black on a white). [WCAG Accessibility Level AA requires](https://webaim.org/articles/contrast/) a ratio of at least 4.5 for normal text and 3 for large text.

```js
colord("#000000").contrast(); // 21 (black on white)
colord("#ffffff").contrast("#000000"); // 21 (white on black)
colord("#777777").contrast(); // 4.47 (gray on white)
colord("#ff0000").contrast(); // 3.99 (red on white)
colord("#0000ff").contrast("#ff000"); // 2.14 (blue on red)
```

</details>

<details>
  <summary><b><code>isReadable(color2 = "#FFF", options?)</code></b> (<b>a11y</b> plugin)</summary>

Checks that a background and text color pair is readable according to [WCAG 2.0 Contrast and Color Requirements](https://webaim.org/articles/contrast/).

```js
colord("#000000").isReadable(); // true (normal black text on white bg conforms to WCAG AA)
colord("#777777").isReadable(); // false (normal gray text on white bg conforms to WCAG AA)
colord("#ffffff").isReadable("#000000"); // true (normal white text on black bg conforms to WCAG AA)
colord("#e60000").isReadable("#ffff47"); // true (normal red text on yellow bg conforms to WCAG AA)
colord("#e60000").isReadable("#ffff47", { level: "AAA" }); // false (normal red text on yellow bg does not conform to WCAG AAA)
colord("#e60000").isReadable("#ffff47", { level: "AAA", size: "large" }); // true (large red text on yellow bg conforms to WCAG AAA)
```

</details>

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## Plugins

**Colord** has a built-in plugin system that allows new features and functionality to be easily added.

<details>
  <summary><b><code>a11y</code> (Accessibility)</b> <i>0.38 KB</i></summary>

Adds accessibility and color contrast utilities working according to [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/).

```js
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";

extend([a11yPlugin]);

colord("#000000").luminance(); // 0
colord("#ccddee").luminance(); // 0.71
colord("#ffffff").luminance(); // 1

colord("#000000").contrast(); // 21 (black on white)
colord("#ffffff").contrast("#000000"); // 21 (white on black)
colord("#0000ff").contrast("#ff000"); // 2.14 (blue on red)

colord("#000000").isReadable(); // true (black on white)
colord("#ffffff").isReadable("#000000"); // true (white on black)
colord("#777777").isReadable(); // false (gray on white)
colord("#e60000").isReadable("#ffff47"); // true (normal red text on yellow bg conforms to WCAG AA)
colord("#e60000").isReadable("#ffff47", { level: "AAA" }); // false (normal red text on yellow bg does not conform to WCAG AAA)
colord("#e60000").isReadable("#ffff47", { level: "AAA", size: "large" }); // true (large red text on yellow bg conforms to WCAG AAA)
```

</details>

<details>
  <summary><b><code>hwb</code> (Hue-Whiteness-Blackness color model)</b> <i>0.5 KB</i></summary>

Adds support of [HWB (Hue-Whiteness-Blackness)](https://en.wikipedia.org/wiki/HWB_color_model) color model.

```js
import { colord, extend } from "colord";
import hwbPlugin from "colord/plugins/hwb";

extend([hwbPlugin]);

colord("#ffffff").toHwb(); // { h: 0, w: 100, b: 0, a: 1 }
colord("#555aaa").toHwb(); // { h: 236, w: 33, b: 33, a: 1 }

colord({ h: 0, w: 0, b: 100 }).toHex(); // "#000000"
colord({ h: 0, w: 100, b: 0, a: 1 }).toHex(); // "#ffffff"
```

</details>

<details>
  <summary><b><code>names</code> (CSS color keywords)</b> <i>1.48 KB</i></summary>

Provides options to convert a color into a [CSS color keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords) and vice versa.

```js
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

colord("tomato").toHex(); // "#ff6347"
colord("#00ffff").toName(); // "cyan"
colord("#aabbcc").toName(); // undefined (the color is not specified in CSS specs)
colord("rgba(0, 0, 0, 0)").toName(); // "transparent"
```

</details>

<details>
  <summary><b><code>xyz</code> (CIE XYZ color space)</b> <i>0.6 KB</i></summary>

Adds support of [CIE XYZ](https://www.sttmedia.com/colormodel-xyz) color model. The conversion logic is ported from [CSS Color Module Level 4 Specification](https://www.w3.org/TR/css-color-4/#color-conversion-code).

```js
import { colord, extend } from "colord";
import xyzPlugin from "colord/plugins/xyz";

extend([xyzPlugin]);

colord("#ffffff").toXyz(); // { x: 95.047, y: 100, z: 108.883, a: 1 }
colord({ x: 0, y: 0, z: 0 }).toHex(); // "#000000"
```

</details>

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## Types

**Colord** is written in strict TypeScript and ships with types in the library itself — no need for any other install. We provide everything you need in one tiny package.

While not only typing its own functions and variables, **Colord** can also help you type yours. Depending on the color space you are using, you can also import and use the type that is associated with it.

```ts
import { RgbColor, RgbaColor, HslColor, HslaColor, HsvColor, HsvaColor } from "colord";

const foo: HslColor = { h: 0, s: 0, l: 0 };
const bar: RgbColor = { r: 0, g: 0, v: 0 }; // ERROR
```

<div><img src="assets/divider.png" width="838" alt="---" /></div>

## Roadmap

- [x] Parse and convert Hex, RGB(A), HSL(A), HSV(A)
- [x] Saturate, desaturate, grayscale
- [x] Trim an input value
- [x] Clamp input numbers to resolve edge cases (e.g. `rgb(256, -1, 999, 2)`)
- [x] `brightness`, `isDark`, `isLight`
- [x] Set and get `alpha`
- [x] Plugin API
- [x] 4 and 8 digit Hex
- [x] `lighten`, `darken`
- [x] `invert`
- [x] CSS color names (via plugin)
- [x] A11y and contrast utils (via plugin)
- [x] XYZ color space (via plugin)
- [x] [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation) color space (via plugin)
- [ ] [LAB](https://www.w3.org/TR/css-color-4/#resolving-lab-lch-values) color space (via plugin)
- [ ] [LCH](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/) color space (via plugin)
- [ ] CMYK color space (via plugin)
- [ ] Mix colors (via plugin)
