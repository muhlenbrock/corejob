/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './intro';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/components/toolbar/toolbar';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/components/tabs/tabs';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import28 from 'ionic-angular/components/navbar/navbar';
import * as import29 from '@angular/common/src/directives/ng_for';
import * as import30 from 'ionic-angular/components/slides/slides';
import * as import31 from 'ionic-angular/components/content/content';
import * as import32 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import33 from '@angular/core/src/linker/query_list';
import * as import34 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import35 from 'ionic-angular/components/button/button';
import * as import36 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import37 from '@angular/core/src/security';
export var Wrapper_IntroPage = (function () {
    function Wrapper_IntroPage(p0) {
        this.changed = false;
        this.context = new import0.IntroPage(p0);
    }
    Wrapper_IntroPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IntroPage;
}());
var renderType_IntroPage_Host = null;
var _View_IntroPage_Host0 = (function (_super) {
    __extends(_View_IntroPage_Host0, _super);
    function _View_IntroPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_IntroPage_Host0, renderType_IntroPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_IntroPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-intro', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_IntroPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._IntroPage_0_4 = new Wrapper_IntroPage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._IntroPage_0_4.context, [], compView_0);
        compView_0.create(this._IntroPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_IntroPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.IntroPage) && (0 === requestNodeIndex))) {
            return this._IntroPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_IntroPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._IntroPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_IntroPage_Host0;
}(import1.AppView));
function viewFactory_IntroPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IntroPage_Host === null)) {
        (renderType_IntroPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_IntroPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var IntroPageNgFactory = new import10.ComponentFactory('page-intro', viewFactory_IntroPage_Host0, import0.IntroPage);
var styles_IntroPage = [];
var renderType_IntroPage = null;
var _View_IntroPage0 = (function (_super) {
    __extends(_View_IntroPage0, _super);
    function _View_IntroPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_IntroPage0, renderType_IntroPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_IntroPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import11.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_3, 'color', 'corejob');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import12.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import20.App), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import21.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'CoreJob', null);
        compView_5.create(this._ToolbarTitle_5_4.context, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'tutorial-page');
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import14.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import14.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import20.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import24.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-slides', null);
        this.renderer.setElementAttribute(this._el_12, 'pager', '');
        this._appEl_12 = new import3.AppElement(12, 10, this, this._el_12);
        var compView_12 = import15.viewFactory_Slides0(this.viewUtils, this.injector(12), this._appEl_12);
        this._Slides_12_4 = new import15.Wrapper_Slides(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_12), this.renderer);
        this._appEl_12.initComponent(this._Slides_12_4.context, [], compView_12);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_14 = new import3.AppElement(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import25.TemplateRef_(this._appEl_14, viewFactory_IntroPage1);
        this._NgFor_14_6 = new import16.Wrapper_NgFor(this._appEl_14.vcRef, this._TemplateRef_14_5, this.parentInjector.get(import26.IterableDiffers), this.ref);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        compView_12.create(this._Slides_12_4.context, [[].concat([
                this._text_13,
                this._appEl_14,
                this._text_15
            ])], null);
        this._text_16 = this.renderer.createText(null, '\n', null);
        compView_10.create(this._Content_10_4.context, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_16
            ]),
            []
        ], null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._text_17
        ], [], []);
        return null;
    };
    _View_IntroPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4.context;
        }
        if (((token === import28.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import21.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3.context;
        }
        if (((token === import25.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import29.NgFor) && (14 === requestNodeIndex))) {
            return this._NgFor_14_6.context;
        }
        if (((token === import30.Slides) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Slides_12_4.context;
        }
        if (((token === import31.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Content_10_4.context;
        }
        return notFoundResult;
    };
    _View_IntroPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        var currVal_0 = 'corejob';
        this._Navbar_3_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._ToolbarTitle_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        if (this._Content_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        var currVal_4 = '';
        this._Slides_12_4.check_pager(currVal_4, throwOnChange, false);
        if (this._Slides_12_4.detectChangesInternal(this, this._el_12, throwOnChange)) {
            this._appEl_12.componentView.markAsCheckOnce();
        }
        var currVal_5 = this.context.slides;
        this._NgFor_14_6.check_ngForOf(currVal_5, throwOnChange, false);
        this._NgFor_14_6.detectChangesInternal(this, this._anchor_14, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_10_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_IntroPage0.prototype.destroyInternal = function () {
        this._Content_10_4.context.ngOnDestroy();
    };
    return _View_IntroPage0;
}(import1.AppView));
export function viewFactory_IntroPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_IntroPage === null)) {
        (renderType_IntroPage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_IntroPage, {}));
    }
    return new _View_IntroPage0(viewUtils, parentInjector, declarationEl);
}
var _View_IntroPage1 = (function (_super) {
    __extends(_View_IntroPage1, _super);
    function _View_IntroPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_IntroPage1, renderType_IntroPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_IntroPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-slide', null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_Slide0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Slide_0_4 = new import15.Wrapper_Slide(new import18.ElementRef(this._el_0), this.parent._Slides_12_4.context);
        this._appEl_0.initComponent(this._Slide_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Toolbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Toolbar_2_4 = new import11.Wrapper_Toolbar(this.parent.parentInjector.get(import19.ViewController, null), this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Toolbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'end', '');
        this._ToolbarItem_4_3 = new import32.Wrapper_ToolbarItem(this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this._Toolbar_2_4.context, this.parent.parentInjector.get(import28.Navbar, null));
        this._query_Button_4_0 = new import33.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n          ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_6, 'ion-button', '');
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import34.viewFactory_Button0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Button_6_4 = new import34.Wrapper_Button(null, '', this.parent.parentInjector.get(import17.Config), new import18.ElementRef(this._el_6), this.renderer);
        this._appEl_6.initComponent(this._Button_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Skip', null);
        compView_6.create(this._Button_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(null, '\n      ', null);
        compView_2.create(this._Toolbar_2_4.context, [
            [],
            [],
            [].concat([this._el_4]),
            [].concat([
                this._text_3,
                this._text_9
            ])
        ], null);
        this._text_10 = this.renderer.createText(null, '\n      ', null);
        this._el_11 = this.renderer.createElement(null, 'img', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'slide-image');
        this._text_12 = this.renderer.createText(null, '\n      ', null);
        this._el_13 = this.renderer.createElement(null, 'h2', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'slide-title');
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'p', null);
        this._text_16 = this.renderer.createText(null, '\n    ', null);
        compView_0.create(this._Slide_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_10,
                this._el_11,
                this._text_12,
                this._el_13,
                this._text_14,
                this._el_15,
                this._text_16
            ])], null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16
        ], [disposable_0], []);
        return null;
    };
    _View_IntroPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_6_4.context;
        }
        if (((token === import36.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_4_3.context;
        }
        if (((token === import21.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Toolbar_2_4.context;
        }
        if (((token === import30.Slide) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Slide_0_4.context;
        }
        return notFoundResult;
    };
    _View_IntroPage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Slide_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        if (this._Toolbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this._ToolbarItem_4_3.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_2 = 'primary';
        this._Button_6_4.check_color(currVal_2, throwOnChange, false);
        if (this._Button_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_6_4.context]);
                this._ToolbarItem_4_3.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_6_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Toolbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_3 = this.context.$implicit.image;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_11, 'src', this.viewUtils.sanitizer.sanitize(import37.SecurityContext.URL, currVal_3));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.$implicit.title;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_13, 'innerHTML', this.viewUtils.sanitizer.sanitize(import37.SecurityContext.HTML, currVal_4));
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.description;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_15, 'innerHTML', this.viewUtils.sanitizer.sanitize(import37.SecurityContext.HTML, currVal_5));
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_IntroPage1.prototype.destroyInternal = function () {
        this._Slide_0_4.context.ngOnDestroy();
    };
    _View_IntroPage1.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.openPage() !== false);
        return (true && pd_0);
    };
    return _View_IntroPage1;
}(import1.AppView));
function viewFactory_IntroPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_IntroPage1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=intro.ngfactory.js.map