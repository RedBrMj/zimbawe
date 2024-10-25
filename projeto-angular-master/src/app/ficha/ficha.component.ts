import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';


@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {

}
