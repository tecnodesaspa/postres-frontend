import { Component, OnInit, HostListener } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import data from '../../../services/data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCoffee= faCoffee
  initApp:Boolean = false
  showSectionPostres:Boolean = false
  constructor() { 
    // console.log(data)
    setTimeout(() => {
      this.initApp = true
    },1000)
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // if (document.body.scrollTop > 20 ||     
    //   document.documentElement.scrollTop > 20) {
    //     document.getElementById('linkServices').classList.add('active')
    //     document.getElementById('mainNav').classList.add('navbar-shrink');
    //     document.getElementById('linkAbout').classList.remove('active')
    // } else {
    //   document.getElementById('mainNav').classList.remove('navbar-shrink');
    //   document.getElementById('linkServices').classList.remove('active')
    //   document.getElementById('linkAbout').classList.remove('active')
    // }
    if(document.body.scrollTop > document.getElementById('sectionPostres').offsetTop ||     
        document.documentElement.scrollTop > document.getElementById('about').offsetTop){
    }
    if(document.body.scrollTop > document.getElementById('portafolio').offsetTop ||     
    document.documentElement.scrollTop > document.getElementById('portafolio').offsetTop){
      document.getElementById('linkPortafolio').classList.add('active')
      document.getElementById('linkAbout').classList.remove('active')
    } else {
      document.getElementById('linkPortafolio').classList.remove('active')
    }
  }
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    // if (scrollPosition >= this.topPosToStartShowing) {
    //   this.isShow = true;
    // } else {
    //   this.isShow = false;
    // }   
  }

}
