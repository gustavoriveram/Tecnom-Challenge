import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Basic authentication
  private auth = signal({
    user: '',
    pass: ''
  })

  user = computed(() => this.auth().user)
  password = computed(() => this.auth().pass)

  constructor(){
    this.auth.set({
      user: 'max@tecnom.com.ar',
      pass: 'b0x3sApp'
    })
  }
}
