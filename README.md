## Manually install from NPM

```bash
$ sudo npm install @angular/common --save
  needs @angular/core@4.1.3
  v4.1.3  1.6MB for 75 items

$ sudo npm install @angular/core --save
  needs rxjs@^5.0.1
  needs zone.js@^0.8.4
  v4.1.3  7.1MB for 230 items

$ sudo npm install @angular/compiler --save
  v4.1.3  17.5MB for 461 items

$ sudo npm install rxjs --save
  v5.4.0  25.1MB for 1896 items

$ sudo npm install zone.js --save
  v0.8.11  25.9MB for 1975 items

# $ sudo npm install @angular/http --save
#   needs @angular/platform-browser@4.1.3
#   v4.1.3  26.9MB for 2030 items

$ sudo npm install @angular/platform-browser --save
  v4.1.3  28.6MB for 2126 items

$ sudo npm install @angular/platform-browser-dynamic --save
  v4.1.3  28.8MB for 2177 items

$ sudo npm install @angular/router --save
  v4.1.3  31.3MB for 2258 items

$ sudo npm install @angular/forms --save
  v4.1.3  33.3MB for 2312 items

$ sudo npm install core-js --save
  v2.4.1  40.2MB for 3781 items
```


## Move useful files to ‘lib/’

```bash
$ cp node_modules/core-js/client/shim.min.js lib/shim.min.js
$ cp node_modules/zone.js/dist/zone.min.js lib/zone.min.js
$ cp node_modules/rxjs/bundles/rx.min.js lib/rx.min.js
$ cp node_modules/@angular/core/bundles/core.umd.min.js lib/core.umd.min.js
$ cp node_modules/@angular/common/bundles/common.umd.min.js lib/common.umd.min.js
$ cp node_modules/@angular/compiler/bundles/compiler.umd.min.js lib/compiler.umd.min.js
$ cp node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js lib/platform-browser.umd.min.js
$ cp node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js lib/platform-browser-dynamic.umd.min.js
```

...size of ‘lib/’ is 1.2MB for 9 items


## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular 4</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="No TypeScript, no build-process, ES6 browsers only">

  <!-- 3rd Party libraries -->
  <script src="node_modules/core-js/client/shim.min.js"></script>
  <script src="lib/zone.min.js"></script>
  <script src="lib/rx.min.js"></script>

  <!-- Angular libraries -->
  <script src="lib/core.umd.min.js"></script>
  <script src="lib/common.umd.min.js"></script>
  <script src="lib/compiler.umd.min.js"></script>
  <script src="lib/platform-browser.umd.min.js"></script>
  <script src="lib/platform-browser-dynamic.umd.min.js"></script>

  <!-- App modules -->
  <script src='app/AppComponent.js'></script>
  <script src='app/AppModule.js'></script>
  <script src='main.js'></script>

</head>
<body>
  <my-app>Loading...</my-app>
</body>
</html>
```

## main.js

```js
(function(app) {

    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic
           .platformBrowserDynamic()
           .bootstrapModule(app.AppModule)
    })

})(window.app || (window.app = {}))
```


## app/AppComponent.js

```js
(function(app) {

app.AppComponent = class {
    static get annotations() {
        return [
            new ng.core.Component({
                selector: 'my-app',
                template: '<h1>My Angular 4 App!</h1>'
            }),
        ];
    }

    constructor () {}
}

})(window.app || (window.app = {}))
```


## app/AppModule.js
```js
(function(app) {

app.AppModule = class {
    static get annotations() {
        return [
            new ng.core.NgModule({
                imports:      [ ng.platformBrowser.BrowserModule ]
              , declarations: [ app.AppComponent ]
              , bootstrap:    [ app.AppComponent ]
            }),
        ];
    }

    constructor () {}
}

})(window.app || (window.app = {}))
```

