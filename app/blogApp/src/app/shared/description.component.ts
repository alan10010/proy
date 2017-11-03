

import {Component, Input, OnChanges} from '@angular/core';

// [] -> property Binding
// () -> event Binding
//@ -> decorador
@Component({
    selector: 'team-description',
    templateUrl: './description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() equipo: {name:'',description:''};
    ngOnChanges(){
        console.log(this.equipo);
    }
}

