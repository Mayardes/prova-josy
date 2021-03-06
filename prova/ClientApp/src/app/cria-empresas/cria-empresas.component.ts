import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cria-empresas',
  templateUrl: './cria-empresas.component.html',
  styleUrls: ['./cria-empresas.component.css']
})
export class CriaEmpresasComponent implements OnInit {

  constructor(private apiServices: ApiService, private toastr: ToastrService) { }


  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 10;

  ngOnInit() {
  }

  onSubmit(data) {
    document.getElementById('spinner').hidden = false;

    this.apiServices.saveEmpresa(data).subscribe((res) => {

      document.getElementById('spinner').hidden = true;
      this.showSuccess();

    });
  }

  showSuccess() {
    this.toastr.success('Salvar', 'Gravado com sucesso',
      { timeOut: 2000 });;
  }
  //showError() {
  //  this.toastr.error('everything is broken', 'Major Error', {
  //    timeOut: 3000
  //  });
  //}
}
