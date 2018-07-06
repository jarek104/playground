import { Component, OnInit, ViewChild, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-panel-one',
  templateUrl: './panel-one.component.html',
  styleUrls: ['./panel-one.component.scss']
})
export class PanelOneComponent implements OnInit {

  @ContentChild('projectedContent') projContent: TemplateRef<any>;
  @ViewChild('viewContent') viewContent: TemplateRef<any>;
  showViewChild = true;
  currentTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.showViewChild = !this.showViewChild;
    this.currentTemplate = this.showViewChild ? this.viewContent : this.projContent;
  }
}
