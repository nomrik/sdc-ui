export default `
<div class="sdc-input">
    <label class="sdc-input__label" *ngIf="label" [ngClass]="{'required':required}">{{label}}</label>
    <input
        class="sdc-input__input"
        [ngClass]="{'error': control.invalid, 'disabled':disabled}"
        type="text"
        [name]="name"
        [placeholder]="placeHolder"
        [(ngModel)]="value"
        [maxlength]="maxLength"
        [minlength]="minLength"
        [pattern]="pattern"
        [formControl]="control"
        [disabled]=disabled
    />
</div>
`;
