import{ Component } from '@angular/core'

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'
})



export class ProfileComponent{
    profiles: any[] = [
        {
            nombre: 'Alan',
            apellido: 'Fdz'
        },
        {
            nombre: 'Ella',
            apellido: 'Lira'
        }
    ]
}