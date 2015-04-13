# hit-that

> Render beautiful **pixel perfect** representations of websites in your terminal

# Installation

```bash
npm install -g hit-that
```

# API

_Hit That_ comes with a simple API where it exports just a function `hitThat(url, options?)`. The first argument is the `url` you intend to render. The second argument is an optional configuration object.

- `width=1024` is the viewport width in pixels that we'll use for the screenshot
- `height=768` is the viewport height in pixels that we'll use for the screenshot
- `cols=80` is the amount of columns we'll allocate to the terminal representation
- `dest=process.stdout` is the destination stream you want to pipe the results to.

```js
var hitThat = require('hit-that');

hitThat('http://ponyfoo.com');
```

# CLI

There's a command-line interface as well.

```bash
ht ponyfoo.com
```

```
Usage:

ht <url> --width [width] --height [height] --cols [cols]

Options:

  --width   Viewport width in pixels
  --height  Viewport height in pixels
  --cols    Terminal columns to use
  --help    Render this information
  --version Render version information
```
### Example

![Pony Foo rendered as an image in terminal][1]

### Use it as a CLI banner!

![Google.com banner][2]

### You'll get the best results when reducing the viewport width

![Reduced viewport width at emberjs.com][3]

<sub>_(That site better be responsive!)_</sub>

# License

MIT

[1]: https://raw.githubusercontent.com/bevacqua/hit-that/master/resources/ponyfoo.png
[2]: https://raw.githubusercontent.com/bevacqua/hit-that/master/resources/google.png
[3]: https://raw.githubusercontent.com/bevacqua/hit-that/master/resources/emberjs.png
