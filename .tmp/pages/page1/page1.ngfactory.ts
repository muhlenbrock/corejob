/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './page1';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../providers/global';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import19 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/gestures/gesture-controller';
import * as import30 from 'ionic-angular/util/form';
import * as import31 from 'ionic-angular/components/item/item-reorder';
import * as import32 from 'ionic-angular/platform/platform';
import * as import33 from 'ionic-angular/components/toolbar/toolbar';
import * as import34 from '@angular/forms/src/directives/ng_model';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from '@angular/forms/src/directives/ng_control_status';
import * as import37 from 'ionic-angular/components/input/input';
import * as import38 from 'ionic-angular/components/item/item';
import * as import39 from 'ionic-angular/components/list/list';
import * as import40 from 'ionic-angular/components/button/button';
import * as import41 from 'ionic-angular/components/content/content';
export class Wrapper_Page1 {
  context:import0.Page1;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.Page1(p0,p1,p2);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_Page1_Host:import2.RenderComponentType = (null as any);
class _View_Page1_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Page1_0_4:Wrapper_Page1;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Page1_Host0,renderType_Page1_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-page1',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Page10(this.viewUtils,this.injector(0),this._appEl_0);
    this._Page1_0_4 = new Wrapper_Page1(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.Http),this.parentInjector.get(import10.Global));
    this._appEl_0.initComponent(this._Page1_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Page1_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Page1) && (0 === requestNodeIndex))) { return this._Page1_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Page1_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Page1_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Page1_Host === (null as any))) { (renderType_Page1_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Page1_Host0(viewUtils,parentInjector,declarationEl);
}
export const Page1NgFactory:import12.ComponentFactory<import0.Page1> = new import12.ComponentFactory<import0.Page1>('page-page1',viewFactory_Page1_Host0,import0.Page1);
const styles_Page1:any[] = ([] as any[]);
var renderType_Page1:import2.RenderComponentType = (null as any);
class _View_Page10 extends import1.AppView<import0.Page1> {
  _el_0:any;
  _Header_0_3:import13.Wrapper_Header;
  _text_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Content_4_4:import14.Wrapper_Content;
  _text_5:any;
  _el_6:any;
  _List_6_3:import15.Wrapper_List;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _Item_8_4:import16.Wrapper_Item;
  _ItemContent_8_5:import16.Wrapper_ItemContent;
  _query_Label_8_0:import17.QueryList<any>;
  _query_Button_8_1:import17.QueryList<any>;
  _query_Icon_8_2:import17.QueryList<any>;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _NgModel_10_4:import18.Wrapper_NgModel;
  _NgControl_10_5:any;
  _NgControlStatus_10_6:import19.Wrapper_NgControlStatus;
  _TextInput_10_7:import20.Wrapper_TextInput;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _Item_13_4:import16.Wrapper_Item;
  _ItemContent_13_5:import16.Wrapper_ItemContent;
  _query_Label_13_0:import17.QueryList<any>;
  _query_Button_13_1:import17.QueryList<any>;
  _query_Icon_13_2:import17.QueryList<any>;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _NgModel_15_4:import18.Wrapper_NgModel;
  _NgControl_15_5:any;
  _NgControlStatus_15_6:import19.Wrapper_NgControlStatus;
  _TextInput_15_7:import20.Wrapper_TextInput;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _Button_19_4:import21.Wrapper_Button;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  /*private*/ _appEl_22:import3.AppElement;
  _Button_22_4:import21.Wrapper_Button;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Page10,renderType_Page1,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import13.Wrapper_Header(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import24.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_4 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','getstart');
    this.renderer.setElementAttribute(this._el_4,'padding','');
    this._appEl_4 = new import3.AppElement(4,(null as any),this,this._el_4);
    var compView_4:any = import14.viewFactory_Content0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Content_4_4 = new import14.Wrapper_Content(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import25.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import24.ViewController,(null as any)),this.parentInjector.get(import28.Tabs,(null as any)));
    this._appEl_4.initComponent(this._Content_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_6_3 = new import15.Wrapper_List(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_6),this.renderer,this.parentInjector.get(import29.GestureController));
    this._text_7 = this.renderer.createText(this._el_6,'\n\n  ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','item item-block');
    this._appEl_8 = new import3.AppElement(8,6,this,this._el_8);
    var compView_8:any = import16.viewFactory_Item0(this.viewUtils,this.injector(8),this._appEl_8);
    this._Item_8_4 = new import16.Wrapper_Item(this.parentInjector.get(import30.Form),this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_8),this.renderer,this.parentInjector.get(import31.ItemReorder,(null as any)));
    this._ItemContent_8_5 = new import16.Wrapper_ItemContent();
    this._query_Label_8_0 = new import17.QueryList<any>();
    this._query_Button_8_1 = new import17.QueryList<any>();
    this._query_Icon_8_2 = new import17.QueryList<any>();
    this._appEl_8.initComponent(this._Item_8_4.context,([] as any[]),compView_8);
    this._text_9 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_10,'name','loginUser');
    this.renderer.setElementAttribute(this._el_10,'placeholder','Username');
    this.renderer.setElementAttribute(this._el_10,'type','text');
    this._appEl_10 = new import3.AppElement(10,8,this,this._el_10);
    var compView_10:any = import20.viewFactory_TextInput0(this.viewUtils,this.injector(10),this._appEl_10);
    this._NgModel_10_4 = new import18.Wrapper_NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_10_5 = this._NgModel_10_4.context;
    this._NgControlStatus_10_6 = new import19.Wrapper_NgControlStatus(this._NgControl_10_5);
    this._TextInput_10_7 = new import20.Wrapper_TextInput(this.parentInjector.get(import22.Config),this.parentInjector.get(import30.Form),this._Item_8_4.context,this.parentInjector.get(import25.App),this.parentInjector.get(import32.Platform),new import23.ElementRef(this._el_10),this.renderer,this._Content_4_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_10_5);
    this._appEl_10.initComponent(this._TextInput_10_7.context,([] as any[]),compView_10);
    compView_10.create(this._TextInput_10_7.context,([] as any[]),(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._query_Label_8_0.reset(([] as any[]));
    this._Item_8_4.context.contentLabel = this._query_Label_8_0.first;
    compView_8.create(this._Item_8_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_9,
        this._text_11
      ]
      ),
      ([] as any[]).concat([this._el_10]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n\n  ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_6,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','item item-block');
    this._appEl_13 = new import3.AppElement(13,6,this,this._el_13);
    var compView_13:any = import16.viewFactory_Item0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Item_13_4 = new import16.Wrapper_Item(this.parentInjector.get(import30.Form),this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import31.ItemReorder,(null as any)));
    this._ItemContent_13_5 = new import16.Wrapper_ItemContent();
    this._query_Label_13_0 = new import17.QueryList<any>();
    this._query_Button_13_1 = new import17.QueryList<any>();
    this._query_Icon_13_2 = new import17.QueryList<any>();
    this._appEl_13.initComponent(this._Item_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_15 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_15,'name','loginPassword');
    this.renderer.setElementAttribute(this._el_15,'placeholder','Password');
    this.renderer.setElementAttribute(this._el_15,'type','password');
    this._appEl_15 = new import3.AppElement(15,13,this,this._el_15);
    var compView_15:any = import20.viewFactory_TextInput0(this.viewUtils,this.injector(15),this._appEl_15);
    this._NgModel_15_4 = new import18.Wrapper_NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_15_5 = this._NgModel_15_4.context;
    this._NgControlStatus_15_6 = new import19.Wrapper_NgControlStatus(this._NgControl_15_5);
    this._TextInput_15_7 = new import20.Wrapper_TextInput(this.parentInjector.get(import22.Config),this.parentInjector.get(import30.Form),this._Item_13_4.context,this.parentInjector.get(import25.App),this.parentInjector.get(import32.Platform),new import23.ElementRef(this._el_15),this.renderer,this._Content_4_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_15_5);
    this._appEl_15.initComponent(this._TextInput_15_7.context,([] as any[]),compView_15);
    compView_15.create(this._TextInput_15_7.context,([] as any[]),(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._query_Label_13_0.reset(([] as any[]));
    this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
    compView_13.create(this._Item_13_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_14,
        this._text_16
      ]
      ),
      ([] as any[]).concat([this._el_15]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_17 = this.renderer.createText(this._el_6,'\n\n',(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_19,'block','');
    this.renderer.setElementAttribute(this._el_19,'ion-button','');
    this.renderer.setElementAttribute(this._el_19,'secondary','');
    this._appEl_19 = new import3.AppElement(19,4,this,this._el_19);
    var compView_19:any = import21.viewFactory_Button0(this.viewUtils,this.injector(19),this._appEl_19);
    this._Button_19_4 = new import21.Wrapper_Button((null as any),'',this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_19),this.renderer);
    this._appEl_19.initComponent(this._Button_19_4.context,([] as any[]),compView_19);
    this._text_20 = this.renderer.createText((null as any),'Iniciar Sesión',(null as any));
    compView_19.create(this._Button_19_4.context,[([] as any[]).concat([this._text_20])],(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_22,'block','');
    this.renderer.setElementAttribute(this._el_22,'ion-button','');
    this.renderer.setElementAttribute(this._el_22,'secondary','');
    this._appEl_22 = new import3.AppElement(22,4,this,this._el_22);
    var compView_22:any = import21.viewFactory_Button0(this.viewUtils,this.injector(22),this._appEl_22);
    this._Button_22_4 = new import21.Wrapper_Button((null as any),'',this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_22),this.renderer);
    this._appEl_22.initComponent(this._Button_22_4.context,([] as any[]),compView_22);
    this._text_23 = this.renderer.createText((null as any),'Registrar',(null as any));
    compView_22.create(this._Button_22_4.context,[([] as any[]).concat([this._text_23])],(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_25,'alt','');
    this.renderer.setElementAttribute(this._el_25,'src','assets/img/logo2.png');
    this._text_26 = this.renderer.createText((null as any),'\n',(null as any));
    compView_4.create(this._Content_4_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_18,
        this._el_19,
        this._text_21,
        this._el_22,
        this._text_24,
        this._el_25,
        this._text_26
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_27 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'ngModelChange',this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
    const subscription_0:any = this._NgModel_10_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_10_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_15,'ngModelChange',this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    const subscription_1:any = this._NgModel_15_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_19,'click',this.eventHandler(this._handle_click_19_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import33.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._Header_0_3.context; }
    if (((token === import34.NgModel) && (10 === requestNodeIndex))) { return this._NgModel_10_4.context; }
    if (((token === import35.NgControl) && (10 === requestNodeIndex))) { return this._NgControl_10_5; }
    if (((token === import36.NgControlStatus) && (10 === requestNodeIndex))) { return this._NgControlStatus_10_6.context; }
    if (((token === import37.TextInput) && (10 === requestNodeIndex))) { return this._TextInput_10_7.context; }
    if (((token === import38.Item) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Item_8_4.context; }
    if (((token === import38.ItemContent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ItemContent_8_5.context; }
    if (((token === import34.NgModel) && (15 === requestNodeIndex))) { return this._NgModel_15_4.context; }
    if (((token === import35.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_5; }
    if (((token === import36.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_6.context; }
    if (((token === import37.TextInput) && (15 === requestNodeIndex))) { return this._TextInput_15_7.context; }
    if (((token === import38.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Item_13_4.context; }
    if (((token === import38.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._ItemContent_13_5.context; }
    if (((token === import39.List) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._List_6_3.context; }
    if (((token === import40.Button) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._Button_19_4.context; }
    if (((token === import40.Button) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._Button_22_4.context; }
    if (((token === import41.Content) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Content_4_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    if (this._Content_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    this._List_6_3.detectChangesInternal(this,this._el_6,throwOnChange);
    if (this._Item_8_4.detectChangesInternal(this,this._el_8,throwOnChange)) { this._appEl_8.componentView.markAsCheckOnce(); }
    this._ItemContent_8_5.detectChangesInternal(this,this._el_8,throwOnChange);
    const currVal_2:any = 'loginUser';
    this._NgModel_10_4.check_name(currVal_2,throwOnChange,false);
    const currVal_3:any = this.context.usuario;
    this._NgModel_10_4.check_model(currVal_3,throwOnChange,false);
    this._NgModel_10_4.detectChangesInternal(this,this._el_10,throwOnChange);
    this._NgControlStatus_10_6.detectChangesInternal(this,this._el_10,throwOnChange);
    const currVal_10:any = 'Username';
    this._TextInput_10_7.check_placeholder(currVal_10,throwOnChange,false);
    const currVal_11:any = 'text';
    this._TextInput_10_7.check_type(currVal_11,throwOnChange,false);
    this._TextInput_10_7.detectChangesInternal(this,this._el_10,throwOnChange);
    if (this._Item_13_4.detectChangesInternal(this,this._el_13,throwOnChange)) { this._appEl_13.componentView.markAsCheckOnce(); }
    this._ItemContent_13_5.detectChangesInternal(this,this._el_13,throwOnChange);
    const currVal_13:any = 'loginPassword';
    this._NgModel_15_4.check_name(currVal_13,throwOnChange,false);
    const currVal_14:any = this.context.password;
    this._NgModel_15_4.check_model(currVal_14,throwOnChange,false);
    this._NgModel_15_4.detectChangesInternal(this,this._el_15,throwOnChange);
    this._NgControlStatus_15_6.detectChangesInternal(this,this._el_15,throwOnChange);
    const currVal_21:any = 'Password';
    this._TextInput_15_7.check_placeholder(currVal_21,throwOnChange,false);
    const currVal_22:any = 'password';
    this._TextInput_15_7.check_type(currVal_22,throwOnChange,false);
    this._TextInput_15_7.detectChangesInternal(this,this._el_15,throwOnChange);
    const currVal_24:any = '';
    this._Button_19_4.check_block(currVal_24,throwOnChange,false);
    if (this._Button_19_4.detectChangesInternal(this,this._el_19,throwOnChange)) { this._appEl_19.componentView.markAsCheckOnce(); }
    const currVal_26:any = '';
    this._Button_22_4.check_block(currVal_26,throwOnChange,false);
    if (this._Button_22_4.detectChangesInternal(this,this._el_22,throwOnChange)) { this._appEl_22.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_8_1.dirty) {
        this._query_Button_8_1.reset(([] as any[]));
        this._Item_8_4.context._buttons = this._query_Button_8_1;
        this._query_Button_8_1.notifyOnChanges();
      }
      if (this._query_Icon_8_2.dirty) {
        this._query_Icon_8_2.reset(([] as any[]));
        this._Item_8_4.context._icons = this._query_Icon_8_2;
        this._query_Icon_8_2.notifyOnChanges();
      }
      if (this._query_Button_13_1.dirty) {
        this._query_Button_13_1.reset(([] as any[]));
        this._Item_13_4.context._buttons = this._query_Button_13_1;
        this._query_Button_13_1.notifyOnChanges();
      }
      if (this._query_Icon_13_2.dirty) {
        this._query_Icon_13_2.reset(([] as any[]));
        this._Item_13_4.context._icons = this._query_Icon_13_2;
        this._query_Icon_13_2.notifyOnChanges();
      }
      this._TextInput_10_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_8_4.context.ngAfterContentInit(); }
      this._TextInput_15_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_13_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_19_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_22_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Content_4_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_4,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_4:any = this._NgControlStatus_10_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_10,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatus_10_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_10,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_10_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_10,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_10_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_10,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_10_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_10,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_10_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_10,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_15:any = this._NgControlStatus_15_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_15,'ng-untouched',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_15_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_15,'ng-touched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_15_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_15,'ng-pristine',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_15_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_15,'ng-dirty',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_15_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_15,'ng-valid',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_15_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_15,'ng-invalid',currVal_20);
      this._expr_20 = currVal_20;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_10_4.context.ngOnDestroy();
    this._TextInput_10_7.context.ngOnDestroy();
    this._NgModel_15_4.context.ngOnDestroy();
    this._TextInput_15_7.context.ngOnDestroy();
    this._Content_4_4.context.ngOnDestroy();
  }
  private _handle_ngModelChange_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.usuario = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.password = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.doLogin()) !== false);
    return (true && pd_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.openPage()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Page10(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Page1> {
  if ((renderType_Page1 === (null as any))) { (renderType_Page1 = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_Page1,{})); }
  return new _View_Page10(viewUtils,parentInjector,declarationEl);
}