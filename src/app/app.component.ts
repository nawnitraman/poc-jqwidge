import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  source: any =
    {
      datatype: 'json',
      datafields: [
        { name: 'userId', type: 'int' },
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'completed', type: 'boolean' }
      ],
      url: 'https://jsonplaceholder.typicode.com/todos'
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);


  columns: any[] =
    [
      { text: 'id', datafield: 'id' },
      { text: 'userId', datafield: 'userId' },
      { text: 'title', datafield: 'title' },
      { text: 'completed', datafield: 'completed' }
    ];
}
