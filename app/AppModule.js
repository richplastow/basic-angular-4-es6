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
