import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { StoryComponent } from './pages/story/story.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'story', component: StoryComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'return-policy', component: ReturnPolicyComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];
