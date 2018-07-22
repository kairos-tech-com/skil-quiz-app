import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
// import {InterceptorModule} from './interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { CompleteComponent } from './complete/complete.component';



const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'complete', component: CompleteComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CompleteComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
    // InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
