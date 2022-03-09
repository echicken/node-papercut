# PaperCut

This module makes it *slightly* easier to interact with the PaperCut XML
Web Services API via your node.js application, and performs some minimal
validation of parameters for your API calls.

## Updating and Rebuilding

This module takes the dubious approach of scraping the HTML documentation
included with PaperCut NG/MF, then dynamically generating its own methods
and docs based on the result. You can just start using this module without
having to worry about any of that, but it's possible that this module's API
will fall behind as new versions of PaperCut come out.

As a shortcut, you can use **PaperCut.call_api(method, param[, ...])** to call
an arbitrary API method without having to rebuild this module's data.

If you want to rebuild this module's list of methods, copy the file
**server/examples/webservices/java/docs/api/ServerCommandProxy.html** from
your PaperCut NG/MF application server into the root of this module and run
the following commands:

```sh
npm run scrape
```

```sh
npm run docs
```

Occasionally, the format of **ServerCommandProxy.html** will change, and
alterations will need to be made to **scrape-api-docs.js** to accommodate.
Typically when this happens, the generated docs will show no methods.

I'd recommend working on a new branch in your own fork of the repo before
running the above commands or making changes. If your update is successful
and brings this module up to date with the latest version of PaperCut MF,
a pull request would then be welcome. (If you're using PaperCut NG, remind
me to verify that I won't lose any MF-specific features by merging your
branch.)
