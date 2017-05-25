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
