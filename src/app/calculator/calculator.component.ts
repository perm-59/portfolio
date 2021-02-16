import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ToastrService} from "ngx-toastr";

enum EventEnum {
  plus = '+',
  minus = '-',
  del = '/',
  multiplication = '*',
  equally = '='
}


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @ViewChild('myModal' , { static: false }) myModal: any;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private toast: ToastrService) {}
  result: number;
  intermediateResult = ''


  ngOnInit(): void {
  }

  onClick(number: number) {
    this.intermediateResult +=number.toString()
    this.result = number

  }

  onEvent(ev: string) {
    if (ev === EventEnum.equally) {
      try {
        const res = this.intermediateResult;
        this.intermediateResult = eval(this.intermediateResult)
        if (this.intermediateResult === undefined) {
          this.toast.error(res , 'Ошибочное выражение')
          this.intermediateResult = ''
        }
      }
      catch (e) {
        this.toast.error('Не верное выражение')
      }

    } else {
      this.intermediateResult +=ev
    }
  }

  confirm(): void {
    this.intermediateResult = ''
    this.toast.success('Все очищено');
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  onClear(template?: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  onDelete() {
    this.intermediateResult = this.intermediateResult.slice(0,this.intermediateResult.length - 1)
  }
}
