# node-papercut

This module makes it *slightly* easier to interact with the
[PaperCut NG/MF XML Web Services API](https://www.papercut.com/support/resources/manuals/ng-mf/common/topics/tools-web-services.html)
via your node.js application, and performs minimal validation of parameters
for your API calls.

## Using

```js
const PaperCut = require('node-papercut');
const papercut = new PaperCut('my.server.address', 9192, 'my_auth_token');
papercut.getTotalUsers().then(n => console.log(`There are ${n} users`));
```

I've found that the [online docs](https://www.papercut.com/support/resources/manuals/ng-mf/common/topics/tools-web-services.html)
are often a bit outdated. The list of API methods below is more comprehensive
and is based on the auto-generated **ServerCommandProxy** file included with
**PaperCut NG/MF**. It's best to refer to this page for available methods.

The web API includes several overloaded methods (eg. **adjustUserAccountBalance**
which may take four or five parameters) that are tricky to handle dynamically.
Subsequent/variant methods of the same name are assigned a numeric suffix in
this module, so you'll end up with:

```js
papercut.adjustUserAccountBalance(username, adjustment, comment);
papercut.adjustUserAccountBalance_2(username, adjustment, comment, accountName);
```

therefore, again, it's best to refer to this page to see available methods.

## Updating and Rebuilding

This module takes the dubious approach of scraping the HTML docs included with
**PaperCut NG/MF**, then dynamically generating its own methods and docs based
on the result. You can use this module without worrying about that, but this
module may fall behind as new versions of PaperCut come out.

As a shortcut, you can use **PaperCut.call_api(method, param[, ...])** to call
an arbitrary API method without having to rebuild this module's data.

If you want to rebuild this module's list of methods, copy the file
**server/examples/webservices/java/docs/api/ServerCommandProxy.html** from
your **PaperCut NG/MF** application server into the root of this module and run
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
and brings this module up to date with the latest version of **PaperCut MF**,
a pull request would then be welcome. (If you're using **PaperCut NG**, remind
me to verify that I won't lose any **MF** features by merging your branch. I
haven't checked whether the same **ServerCommandProxy.html** file ships with
both versions.)
