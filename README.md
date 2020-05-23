
> Open this page at [https://adumont.github.io/pxt-ADTools/](https://adumont.github.io/pxt-ADTools/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/adumont/pxt-ADTools** and import

## Edit this project ![Build status badge](https://github.com/adumont/test-extension/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/adumont/pxt-ADTools** and click import

## Usage

### packNums

Say we have some sensors readings, and we want to send sensors via Radio. ADTools.packNums() lets us pack them all into a string we can send in a single message, like this:

```blocks
let sensors = [0.2, 251, 0.01, 895]
// @highlight
let send = ADTools.packNums(sensors, Delimiters.Pipe)
```

### unpackNums

On the receiving end, say we received the packed string via Radio, we can unpack a string into an array of numbers using ADTools.unpackNums(), like this:

```blocks
// @highlight
let received = ADTools.unpackNums(send, Delimiters.Pipe)
```

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/adumont/test-extension/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
