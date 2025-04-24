import { Component } from '@angular/core';

@Component({
  selector: 'ce-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showSideBar(){
    let sideBar = document.querySelector(".side-bar-container") as HTMLElement;
     
    sideBar.style.display = 'flex';
    setTimeout(() => {
      sideBar.style.right = '0';
    }, 250);
      // sideBar.hidden = false;

  }

  hideSideBar(){
    let sideBar = document.querySelector(".side-bar-container") as HTMLElement;
     
    sideBar.style.right = '-300px';
    setTimeout(() => {
      sideBar.style.display = 'none';
    }, 500);

    // sideBar.hidden = true;


  }
}

