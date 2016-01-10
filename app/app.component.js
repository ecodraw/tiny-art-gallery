System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArtImage, GalleryHeader, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArtImage = (function () {
                function ArtImage() {
                }
                ArtImage = __decorate([
                    core_1.Component({
                        selector: 'art-image',
                        template: "\n        <div> My Image</div>\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArtImage);
                return ArtImage;
            })();
            exports_1("ArtImage", ArtImage);
            GalleryHeader = (function () {
                function GalleryHeader() {
                }
                GalleryHeader = __decorate([
                    core_1.Component({
                        selector: 'gallery-header',
                        template: "\n        <div>Header</div>\n       "
                    }), 
                    __metadata('design:paramtypes', [])
                ], GalleryHeader);
                return GalleryHeader;
            })();
            exports_1("GalleryHeader", GalleryHeader);
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [ArtImage, GalleryHeader],
                        template: "\n        <h1> My Art-Gallery</h1>\n        <gallery-header>...</gallery-header>\n        <art-image>...</art-image>\n        <art-image>...</art-image>\n       ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            ;
        }
    }
});

//# sourceMappingURL=app.component.js.map
