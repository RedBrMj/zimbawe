import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { CommonModule } from '@angular/common';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  btnText: string = 'Compartilhar';
  image?: File;

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.image = file;
  }
  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add('Momento adicionado com sucesso');
    this.router.navigate(['/']);
  }
}
