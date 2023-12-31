import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isToggle = false;

  @HostListener('click') toggleOpenOnClick() {
    this.isToggle = !this.isToggle;
  }

}
