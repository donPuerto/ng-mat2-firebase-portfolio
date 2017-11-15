import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatButtonModule, 
   MatToolbarModule, 
   MatInputModule, 
   MatProgressSpinnerModule, 
   MatCardModule, 
   MatIconModule, 
   MatMenuModule, 
   MatTabsModule, 
   MatGridListModule,
   MatListModule 
} from '@angular/material';


@NgModule({
   imports: [  
      MatButtonModule, 
      MatToolbarModule, 
      MatInputModule, 
      MatProgressSpinnerModule, 
      MatCardModule, 
      MatIconModule, 
      MatMenuModule, 
      MatTabsModule, 
      MatGridListModule,
      MatListModule
   ],
   exports: [
      MatButtonModule, 
      MatToolbarModule, 
      MatInputModule, 
      MatProgressSpinnerModule, 
      MatCardModule, 
      MatIconModule, 
      MatMenuModule, 
      MatTabsModule, 
      MatGridListModule,
      MatListModule
   ], 

})

export class MaterialModule {
}