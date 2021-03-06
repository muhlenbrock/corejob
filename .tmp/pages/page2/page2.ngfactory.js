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
import * as import0 from './page2';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/components/menu/menu-controller';
import * as import30 from 'ionic-angular/components/toolbar/toolbar';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from 'ionic-angular/gestures/gesture-controller';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from 'ionic-angular/components/item/item-reorder';
import * as import37 from 'ionic-angular/components/icon/icon';
import * as import38 from 'ionic-angular/components/button/button';
import * as import39 from 'ionic-angular/components/menu/menu-toggle';
import * as import40 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import41 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import42 from 'ionic-angular/components/navbar/navbar';
import * as import43 from 'ionic-angular/components/label/label';
import * as import44 from 'ionic-angular/components/item/item';
import * as import45 from 'ionic-angular/components/list/list';
import * as import46 from 'ionic-angular/components/content/content';
export var Wrapper_Page2 = (function () {
    function Wrapper_Page2(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.Page2(p0, p1, p2);
    }
    Wrapper_Page2.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Page2;
}());
var renderType_Page2_Host = null;
var _View_Page2_Host0 = (function (_super) {
    __extends(_View_Page2_Host0, _super);
    function _View_Page2_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page2_Host0, renderType_Page2_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page2_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-page2', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Page20(this.viewUtils, this.injector(0), this._appEl_0);
        this._Page2_0_4 = new Wrapper_Page2(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.Http));
        this._appEl_0.initComponent(this._Page2_0_4.context, [], compView_0);
        compView_0.create(this._Page2_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Page2_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Page2) && (0 === requestNodeIndex))) {
            return this._Page2_0_4.context;
        }
        return notFoundResult;
    };
    _View_Page2_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Page2_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Page2_Host0;
}(import1.AppView));
function viewFactory_Page2_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page2_Host === null)) {
        (renderType_Page2_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Page2_Host0(viewUtils, parentInjector, declarationEl);
}
export var Page2NgFactory = new import12.ComponentFactory('page-page2', viewFactory_Page2_Host0, import0.Page2);
var styles_Page2 = [];
var renderType_Page2 = null;
var _View_Page20 = (function (_super) {
    __extends(_View_Page20, _super);
    function _View_Page20(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page20, renderType_Page2, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page20.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'corejob');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import15.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import15.Wrapper_Button('', '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import16.Wrapper_MenuToggle(this.parentInjector.get(import29.MenuController), new import26.ElementRef(this._el_4), this.parentInjector.get(import27.ViewController, null), this._Navbar_2_4.context);
        this._ToolbarItem_4_6 = new import17.Wrapper_ToolbarItem(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._query_Button_4_0 = new import18.QueryList();
        this._appEl_4.initComponent(this._Button_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import19.Wrapper_Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4.context, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import3.AppElement(9, 2, this, this._el_9);
        var compView_9 = import20.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import20.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Perfil', null);
        compView_9.create(this._ToolbarTitle_9_4.context, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_14 = new import3.AppElement(14, null, this, this._el_14);
        var compView_14 = import21.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import21.Wrapper_Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import31.Keyboard), this.parentInjector.get(import32.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import33.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-list', null);
        this._List_16_3 = new import22.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import34.GestureController));
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'item item-block');
        this._appEl_18 = new import3.AppElement(18, 16, this, this._el_18);
        var compView_18 = import23.viewFactory_Item0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Item_18_4 = new import23.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_18_5 = new import23.Wrapper_ItemContent();
        this._query_Label_18_0 = new import18.QueryList();
        this._query_Button_18_1 = new import18.QueryList();
        this._query_Icon_18_2 = new import18.QueryList();
        this._appEl_18.initComponent(this._Item_18_4.context, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n      ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_20, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_20, 'stacked', '');
        this._Label_20_3 = new import24.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_20), this.renderer, null, '', null, null);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_18_0.reset([this._Label_20_3.context]);
        this._Item_18_4.context.contentLabel = this._query_Label_18_0.first;
        compView_18.create(this._Item_18_4.context, [
            [],
            [].concat([this._el_20]),
            [].concat([
                this._text_19,
                this._text_22
            ]),
            [],
            []
        ], null);
        this._text_23 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_24 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'item item-block');
        this._appEl_24 = new import3.AppElement(24, 16, this, this._el_24);
        var compView_24 = import23.viewFactory_Item0(this.viewUtils, this.injector(24), this._appEl_24);
        this._Item_24_4 = new import23.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_24), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_24_5 = new import23.Wrapper_ItemContent();
        this._query_Label_24_0 = new import18.QueryList();
        this._query_Button_24_1 = new import18.QueryList();
        this._query_Icon_24_2 = new import18.QueryList();
        this._appEl_24.initComponent(this._Item_24_4.context, [], compView_24);
        this._text_25 = this.renderer.createText(null, '\n      ', null);
        this._el_26 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_26, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_26, 'stacked', '');
        this._Label_26_3 = new import24.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_26), this.renderer, null, '', null, null);
        this._text_27 = this.renderer.createText(this._el_26, '', null);
        this._text_28 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_24_0.reset([this._Label_26_3.context]);
        this._Item_24_4.context.contentLabel = this._query_Label_24_0.first;
        compView_24.create(this._Item_24_4.context, [
            [],
            [].concat([this._el_26]),
            [].concat([
                this._text_25,
                this._text_28
            ]),
            [],
            []
        ], null);
        this._text_29 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_30 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'item item-block');
        this._appEl_30 = new import3.AppElement(30, 16, this, this._el_30);
        var compView_30 = import23.viewFactory_Item0(this.viewUtils, this.injector(30), this._appEl_30);
        this._Item_30_4 = new import23.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_30), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_30_5 = new import23.Wrapper_ItemContent();
        this._query_Label_30_0 = new import18.QueryList();
        this._query_Button_30_1 = new import18.QueryList();
        this._query_Icon_30_2 = new import18.QueryList();
        this._appEl_30.initComponent(this._Item_30_4.context, [], compView_30);
        this._text_31 = this.renderer.createText(null, '\n      ', null);
        this._el_32 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_32, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_32, 'stacked', '');
        this._Label_32_3 = new import24.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_32), this.renderer, null, '', null, null);
        this._text_33 = this.renderer.createText(this._el_32, '', null);
        this._text_34 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_30_0.reset([this._Label_32_3.context]);
        this._Item_30_4.context.contentLabel = this._query_Label_30_0.first;
        compView_30.create(this._Item_30_4.context, [
            [],
            [].concat([this._el_32]),
            [].concat([
                this._text_31,
                this._text_34
            ]),
            [],
            []
        ], null);
        this._text_35 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_36 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'item item-block');
        this._appEl_36 = new import3.AppElement(36, 16, this, this._el_36);
        var compView_36 = import23.viewFactory_Item0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Item_36_4 = new import23.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_36), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_36_5 = new import23.Wrapper_ItemContent();
        this._query_Label_36_0 = new import18.QueryList();
        this._query_Button_36_1 = new import18.QueryList();
        this._query_Icon_36_2 = new import18.QueryList();
        this._appEl_36.initComponent(this._Item_36_4.context, [], compView_36);
        this._text_37 = this.renderer.createText(null, '\n      ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_38, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_38, 'stacked', '');
        this._Label_38_3 = new import24.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_38), this.renderer, null, '', null, null);
        this._text_39 = this.renderer.createText(this._el_38, '', null);
        this._text_40 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_36_0.reset([this._Label_38_3.context]);
        this._Item_36_4.context.contentLabel = this._query_Label_36_0.first;
        compView_36.create(this._Item_36_4.context, [
            [],
            [].concat([this._el_38]),
            [].concat([
                this._text_37,
                this._text_40
            ]),
            [],
            []
        ], null);
        this._text_41 = this.renderer.createText(this._el_16, '\n    ', null);
        this._el_42 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_42, 'class', 'item item-block');
        this._appEl_42 = new import3.AppElement(42, 16, this, this._el_42);
        var compView_42 = import23.viewFactory_Item0(this.viewUtils, this.injector(42), this._appEl_42);
        this._Item_42_4 = new import23.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_42), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_42_5 = new import23.Wrapper_ItemContent();
        this._query_Label_42_0 = new import18.QueryList();
        this._query_Button_42_1 = new import18.QueryList();
        this._query_Icon_42_2 = new import18.QueryList();
        this._appEl_42.initComponent(this._Item_42_4.context, [], compView_42);
        this._text_43 = this.renderer.createText(null, '\n      ', null);
        this._el_44 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_44, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_44, 'stacked', '');
        this._Label_44_3 = new import24.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_44), this.renderer, null, '', null, null);
        this._text_45 = this.renderer.createText(this._el_44, '', null);
        this._text_46 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_42_0.reset([this._Label_44_3.context]);
        this._Item_42_4.context.contentLabel = this._query_Label_42_0.first;
        compView_42.create(this._Item_42_4.context, [
            [],
            [].concat([this._el_44]),
            [].concat([
                this._text_43,
                this._text_46
            ]),
            [],
            []
        ], null);
        this._text_47 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_48 = this.renderer.createText(null, '\n', null);
        compView_14.create(this._Content_14_4.context, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_48
            ]),
            []
        ], null);
        this._text_49 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49
        ], [disposable_0], []);
        return null;
    };
    _View_Page20.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3.context;
        }
        if (((token === import38.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4.context;
        }
        if (((token === import39.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5.context;
        }
        if (((token === import40.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6.context;
        }
        if (((token === import41.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4.context;
        }
        if (((token === import42.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import30.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3.context;
        }
        if (((token === import43.Label) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Label_20_3.context;
        }
        if (((token === import44.Item) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._Item_18_4.context;
        }
        if (((token === import44.ItemContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._ItemContent_18_5.context;
        }
        if (((token === import43.Label) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Label_26_3.context;
        }
        if (((token === import44.Item) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Item_24_4.context;
        }
        if (((token === import44.ItemContent) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ItemContent_24_5.context;
        }
        if (((token === import43.Label) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Label_32_3.context;
        }
        if (((token === import44.Item) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Item_30_4.context;
        }
        if (((token === import44.ItemContent) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._ItemContent_30_5.context;
        }
        if (((token === import43.Label) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Label_38_3.context;
        }
        if (((token === import44.Item) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._Item_36_4.context;
        }
        if (((token === import44.ItemContent) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._ItemContent_36_5.context;
        }
        if (((token === import43.Label) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Label_44_3.context;
        }
        if (((token === import44.Item) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._Item_42_4.context;
        }
        if (((token === import44.ItemContent) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ItemContent_42_5.context;
        }
        if (((token === import45.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._List_16_3.context;
        }
        if (((token === import46.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._Content_14_4.context;
        }
        return notFoundResult;
    };
    _View_Page20.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = 'corejob';
        this._Navbar_2_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Button_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        var currVal_4 = '';
        this._MenuToggle_4_5.check_menuToggle(currVal_4, throwOnChange, false);
        this._MenuToggle_4_5.detectChangesInternal(this, this._el_4, throwOnChange);
        this._ToolbarItem_4_6.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_6 = 'menu';
        this._Icon_6_3.check_name(currVal_6, throwOnChange, false);
        this._Icon_6_3.detectChangesInternal(this, this._el_6, throwOnChange);
        if (this._ToolbarTitle_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Content_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._List_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        if (this._Item_18_4.detectChangesInternal(this, this._el_18, throwOnChange)) {
            this._appEl_18.componentView.markAsCheckOnce();
        }
        this._ItemContent_18_5.detectChangesInternal(this, this._el_18, throwOnChange);
        var currVal_9 = 'primary';
        this._Label_20_3.check_color(currVal_9, throwOnChange, false);
        this._Label_20_3.detectChangesInternal(this, this._el_20, throwOnChange);
        if (this._Item_24_4.detectChangesInternal(this, this._el_24, throwOnChange)) {
            this._appEl_24.componentView.markAsCheckOnce();
        }
        this._ItemContent_24_5.detectChangesInternal(this, this._el_24, throwOnChange);
        var currVal_11 = 'primary';
        this._Label_26_3.check_color(currVal_11, throwOnChange, false);
        this._Label_26_3.detectChangesInternal(this, this._el_26, throwOnChange);
        if (this._Item_30_4.detectChangesInternal(this, this._el_30, throwOnChange)) {
            this._appEl_30.componentView.markAsCheckOnce();
        }
        this._ItemContent_30_5.detectChangesInternal(this, this._el_30, throwOnChange);
        var currVal_13 = 'primary';
        this._Label_32_3.check_color(currVal_13, throwOnChange, false);
        this._Label_32_3.detectChangesInternal(this, this._el_32, throwOnChange);
        if (this._Item_36_4.detectChangesInternal(this, this._el_36, throwOnChange)) {
            this._appEl_36.componentView.markAsCheckOnce();
        }
        this._ItemContent_36_5.detectChangesInternal(this, this._el_36, throwOnChange);
        var currVal_15 = 'primary';
        this._Label_38_3.check_color(currVal_15, throwOnChange, false);
        this._Label_38_3.detectChangesInternal(this, this._el_38, throwOnChange);
        if (this._Item_42_4.detectChangesInternal(this, this._el_42, throwOnChange)) {
            this._appEl_42.componentView.markAsCheckOnce();
        }
        this._ItemContent_42_5.detectChangesInternal(this, this._el_42, throwOnChange);
        var currVal_17 = 'primary';
        this._Label_44_3.check_color(currVal_17, throwOnChange, false);
        this._Label_44_3.detectChangesInternal(this, this._el_44, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4.context]);
                this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_18_1.dirty) {
                this._query_Button_18_1.reset([]);
                this._Item_18_4.context._buttons = this._query_Button_18_1;
                this._query_Button_18_1.notifyOnChanges();
            }
            if (this._query_Icon_18_2.dirty) {
                this._query_Icon_18_2.reset([]);
                this._Item_18_4.context._icons = this._query_Icon_18_2;
                this._query_Icon_18_2.notifyOnChanges();
            }
            if (this._query_Button_24_1.dirty) {
                this._query_Button_24_1.reset([]);
                this._Item_24_4.context._buttons = this._query_Button_24_1;
                this._query_Button_24_1.notifyOnChanges();
            }
            if (this._query_Icon_24_2.dirty) {
                this._query_Icon_24_2.reset([]);
                this._Item_24_4.context._icons = this._query_Icon_24_2;
                this._query_Icon_24_2.notifyOnChanges();
            }
            if (this._query_Button_30_1.dirty) {
                this._query_Button_30_1.reset([]);
                this._Item_30_4.context._buttons = this._query_Button_30_1;
                this._query_Button_30_1.notifyOnChanges();
            }
            if (this._query_Icon_30_2.dirty) {
                this._query_Icon_30_2.reset([]);
                this._Item_30_4.context._icons = this._query_Icon_30_2;
                this._query_Icon_30_2.notifyOnChanges();
            }
            if (this._query_Button_36_1.dirty) {
                this._query_Button_36_1.reset([]);
                this._Item_36_4.context._buttons = this._query_Button_36_1;
                this._query_Button_36_1.notifyOnChanges();
            }
            if (this._query_Icon_36_2.dirty) {
                this._query_Icon_36_2.reset([]);
                this._Item_36_4.context._icons = this._query_Icon_36_2;
                this._query_Icon_36_2.notifyOnChanges();
            }
            if (this._query_Button_42_1.dirty) {
                this._query_Button_42_1.reset([]);
                this._Item_42_4.context._buttons = this._query_Button_42_1;
                this._query_Button_42_1.notifyOnChanges();
            }
            if (this._query_Icon_42_2.dirty) {
                this._query_Icon_42_2.reset([]);
                this._Item_42_4.context._icons = this._query_Icon_42_2;
                this._query_Icon_42_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_18_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_24_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_30_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_36_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_42_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._MenuToggle_4_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_6_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._Content_14_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_10 = import4.interpolate(1, 'Id: ', this.context.userid, ' ');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_21, currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_12 = import4.interpolate(1, 'Rut: ', this.context.rut, ' ');
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_27, currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_14 = import4.interpolate(1, 'Nombre: ', this.context.nombre, ' ');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_33, currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_16 = import4.interpolate(2, 'Apellidos: ', this.context.apaterno, ' ', this.context.amaterno, ' ');
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_39, currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_18 = import4.interpolate(1, 'Email: ', this.context.email, ' ');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_45, currVal_18);
            this._expr_18 = currVal_18;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Page20.prototype.destroyInternal = function () {
        this._Icon_6_3.context.ngOnDestroy();
        this._Content_14_4.context.ngOnDestroy();
    };
    _View_Page20.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.context.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Page20;
}(import1.AppView));
export function viewFactory_Page20(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page2 === null)) {
        (renderType_Page2 = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_Page2, {}));
    }
    return new _View_Page20(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=page2.ngfactory.js.map