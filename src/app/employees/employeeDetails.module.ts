import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { EmployeeDetailsRoutingModule } from './employeeDetails-routing.module';
import { HomeComponent } from './employee/home/home.component';
import { EmployeeBasicsDetailsComponent } from './employee-basics-details/employee-basics-details.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeBankDetailsComponent } from './employee-bank-details/employee-bank-details.component';
import { EmployeeSpouseDetailsComponent } from './employee-spouse-details/employee-spouse-details.component';
import { EmployeeNationalityDetailsComponent } from './employee-nationality-details/employee-nationality-details.component';
import { EmployeeNomineeDetailsComponent } from './employee-nominee-details/employee-nominee-details.component';
import { EmployeePersonalDetailsComponent } from './employee-personal-details/employee-personal-details.component';
import { EmployeeReferenceDetailsComponent } from './employee-reference-details/employee-reference-details.component';
import { EmployeeReviewDetailsComponent } from './employee-review-details/employee-review-details.component';
import { EmployeeCorrespondenceDetailsComponent } from './employee-correspondence-details/employee-correspondence-details.component';
import { EmployeePermanentDetailsComponent } from './employee-permanent-details/employee-permanent-details.component';



@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        EmployeeDetailsRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatStepperModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatSliderModule,
        MatSnackBarModule,
        MatIconModule,
        MatExpansionModule,
        MatChipsModule,
        MatBottomSheetModule,
        MatTooltipModule,
        MatDividerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatCheckboxModule
    ],
    declarations: [
        HomeComponent,
        EmployeeDetailsComponent,
        EmployeeBasicsDetailsComponent,
        EmployeeBankDetailsComponent,
        EmployeeSpouseDetailsComponent,
        EmployeeNationalityDetailsComponent,
        EmployeeNomineeDetailsComponent,
        EmployeePersonalDetailsComponent,
        EmployeeReferenceDetailsComponent,
        EmployeeReviewDetailsComponent,
        EmployeeCorrespondenceDetailsComponent,
        EmployeePermanentDetailsComponent
    ]
})
export class EmployeeDetailsModule {}
