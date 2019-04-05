## Note

Still in development, check back in a few weeks to find a more stable release.

## What's inside

The Mathquill-Angular2 Library contains:

- An Angular Service with a promise to the mathquill object
- An implementation of a MathQuill editor.

**Important Note**: You need jquery installed for this library to work.

For example you can add it in `<head>` of your html.
Or in webpack write configure something like this:

```
var webpack = require("webpack");

    ...

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
```

Or in `.angular-cli.json`:
```
{
  ...
  "apps": [
    {
      ...
      "scripts": [
        "../node_modules/jquery/dist/jquery.js"
      ],
   ...
```

## Installation

Step 1)

Make sure Jquery is installed correctly

Step 2)

```
npm install mathquill-angular2
```

## Usage

In your `app.module`:

```
imports: [
  ...
  MathquillAngular2Module.forRoot()
]
```

Then to use the service:

import { MathquillService } from 'mathquill-angular2'

...

constructor(
  mqs: MathquillService
) {
  mqs.mq.then(resp => {
    console.log('this is the mathquill object', resp);
  });
}

or to use the editor

<mq-editor></mq-editor>



