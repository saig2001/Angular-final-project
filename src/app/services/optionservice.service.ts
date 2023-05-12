import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private selectedOption: string = 'closed';

  setSelectedOption(option: string) {
    this.selectedOption = option;
  }

  getSelectedOption() {
    return this.selectedOption;
  }
}
