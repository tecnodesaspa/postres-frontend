import { Component, OnInit, HostListener } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import data from './postres.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faCoffee= faCoffee
  initApp:Boolean = false
  showSectionPostres:Boolean = false
  showSectionImages:Boolean = false
  showTitleImages:Boolean = false
  showSectionPromo:Boolean = false
  showMenu:Boolean = false
  constructor() { 
    setTimeout(() => {
      this.initApp = true
    },1000)
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(document.body.scrollTop + 200 > document.getElementById('sectionPostres').offsetTop ||     
        document.documentElement.scrollTop + 200 > document.getElementById('sectionPostres').offsetTop){
          this.showSectionPostres = true
    } else {
      this.showSectionPostres = false
    }
    if(document.body.scrollTop + 200 > document.getElementById('sectionTitleImages').offsetTop ||     
        document.documentElement.scrollTop + 200 > document.getElementById('sectionTitleImages').offsetTop){
          this.showTitleImages = true
    } else {
      this.showTitleImages = false
    }
    if(document.body.scrollTop + 200 > document.getElementById('sectionImages').offsetTop ||     
        document.documentElement.scrollTop + 200 > document.getElementById('sectionImages').offsetTop){
          this.showSectionImages = true
    } else {
      this.showSectionImages = false
    }
    if(document.body.scrollTop + 200 > document.getElementById('sectionPromo').offsetTop ||     
        document.documentElement.scrollTop + 200 > document.getElementById('sectionPromo').offsetTop){
          this.showSectionPromo = true
    } else {
      this.showSectionPromo = false
    }
    // if(document.body.scrollTop + 200 > document.getElementById('sectionPromo').offsetTop ||     
    //     document.documentElement.scrollTop + 200 > document.getElementById('sectionPromo').offsetTop){
    //       this.showSectionPromo = true
    // } else {
    //   this.showSectionPromo = false
    // }
  }
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
  }

  openMenu(){
    this.showMenu = !this.showMenu
  }

}
