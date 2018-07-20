import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Pag4Page } from '../pag4/pag4';
import { Pag5Page } from '../pag5/pag5';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Pag4Page;
  tab5Root = Pag5Page;

  constructor() {

  }
}
