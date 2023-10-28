import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'outubro-rosa';

  @ViewChild('initialText', { static: true })
  initialText!: ElementRef<HTMLElement>;

  saibaMais() {
    let bounds = this.initialText.nativeElement.getBoundingClientRect()

    window.scroll({left: 0, top: bounds.top, behavior: 'smooth'})

    // this.initialText.nativeElement.scrollIntoView({
    //   behavior: 'smooth',
    //   inline: 'center',
    // });
  }

  @HostListener('window:scroll', ['$event'])
  scoll(event: MouseEvent) {
    let y = window.innerHeight;

    document.querySelectorAll('.info .text').forEach((element) => {
      let bounds = element.getBoundingClientRect();
      let yElement = bounds.y;

      if (bounds.top + bounds.height / 2 < y) {
        element.classList.remove('fade');
      } else {
        element.classList.add('fade');
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  scollTab(event: KeyboardEvent) {
    let y = window.innerHeight;
    let current = -1;

    if (event.key === 'ArrowDown') {
      document.querySelectorAll('.info').forEach((element, index) => {

        let bounds = element.getBoundingClientRect();

        if (element.classList.contains('fade')) {
            window.scroll({top: (bounds.bottom) , behavior : 'smooth'})
        }
      });

      current = -1
    }
  }
}
