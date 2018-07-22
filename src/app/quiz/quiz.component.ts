import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // reset_value: any = null;
  question: string = '123';
  selected: string = "a";
  question_id: number = 1;
  // selectedRadio: number = 0;
  // bool: boolean = false
  options;
  // x: string = "";

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://18.233.224.125:9090/questions/1')
      .subscribe((data) => {
        console.log(data.options[0].A);
        this.question_id = data.questionId;
        this.question = data.question;
        this.options = [
          { value: data.options[0].A, opt: 'A' },
          { value: data.options[1].B, opt: 'B' },
          { value: data.options[2].C, opt: 'C' },
          { value: data.options[3].D, opt: 'D' }
        ];
      });
  }


  refresh(option) {
    this.selected = option;
    console.log(this.selected);
  }


  nextQuestion() {
    this.question_id++;

    this.httpClient.post('http://18.233.224.125:9090/user/responses',
      {
        'questionId': 1,
        'userId': 12,
        'testId': 111,
        'selectedAnswer': this.selected.opt
      }
    )
      .subscribe((data) => {
        console.log(data);
        this.selected = null;
      });

    this.httpClient.get('http://18.233.224.125:9090/questions/' + this.question_id)
      .subscribe((data) => {
        console.log(data.options[0].A);
        this.question = data.question;
        this.options = [
          { value: data.options[0].A, opt: 'A' },
          { value: data.options[1].B, opt: 'B' },
          { value: data.options[2].C, opt: 'C' },
          { value: data.options[3].D, opt: 'D' }
        ];
      });
  }


  ngOnInit() {
  }

}
