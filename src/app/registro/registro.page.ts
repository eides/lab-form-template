import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form) {

     alert('form value:' + JSON.stringify(form.value) );

     alert('email: ' + form.value.email );

   // this.authService.register(form.value).subscribe((res) => {
   //   this.router.navigateByUrl('home');
   // });
  }
}
