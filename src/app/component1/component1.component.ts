import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input()
  public newItem:string;
  public itemList:Array<string> = ['Papier','Ręcznik','Płyn'];
  @Input()
  public search:string;

  constructor() { }

  ngOnInit() {
  }

  public addItem():void{
    this.itemList.push(this.newItem);
    this.newItem = '';
  }

  public removeItem(item):void{
    const index: number = this.itemList.indexOf(item);
    this.itemList.splice(index, 1);
  }
}
