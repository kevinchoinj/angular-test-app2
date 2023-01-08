import { Component } from '@angular/core';

const problemsArray = [
  {
    word1: 'cottage',
    word2: 'swiss',
    word3: 'cake',
    solution: 'cheese',
  },
  {
    word1: 'cream',
    word2: 'skate',
    word3: 'water',
    solution: 'ice',
  },
  {
    word1: 'loser',
    word2: 'throat',
    word3: 'spot',
    solution: 'sore',
  },
  {
    word1: 'show',
    word2: 'life',
    word3: 'row',
    solution: 'boat',
  },
  {
    word1: 'night',
    word2: 'wrist',
    word3: 'stop',
    solution: 'watch',
  },
  {
    word1: 'duck',
    word2: 'fold',
    word3: 'dollar',
    solution: 'bill',
  },
  {
    word1: 'rocking',
    word2: 'wheel',
    word3: 'high',
    solution: 'chair',
  },
  {
    word1: 'dew',
    word2: 'comb',
    word3: 'bee',
    solution: 'honey',
  },
  {
    word1: 'fountain',
    word2: 'baking',
    word3: 'pop',
    solution: 'soda',
  },
  {
    word1: 'preserve',
    word2: 'ranger',
    word3: 'tropical',
    solution: 'forest',
  },
];

@Component({
  selector: 'app-remote-associates-test',
  templateUrl: './remote-associates-test.component.html',
  styleUrls: ['./remote-associates-test.component.scss'],
})
export class RemoteAssociatesTestComponent {
  word1 = '';
  word2 = '';
  word3 = '';
  solution = '';
  feedback = '';
  currentProblem = 0;
  problems = problemsArray;

  ngOnInit() {
    this.loadProblem();
  }

  loadProblem() {
    this.word1 = this.problems[this.currentProblem].word1;
    this.word2 = this.problems[this.currentProblem].word2;
    this.word3 = this.problems[this.currentProblem].word3;
    this.solution = '';
    this.feedback = '';
  }

  checkAnswer() {
    if (
      this.solution.toLowerCase() === this.problems[this.currentProblem].solution
    ) {
      this.feedback =
        'Correct! The word "' +
        this.solution +
        '" is associated with the words "' +
        this.word1 +
        '", "' +
        this.word2 +
        '", and "' +
        this.word3 +
        '".';
    } else {
      this.feedback = 'Incorrect. Please try again.';
    }
  }

  nextProblem() {
    this.currentProblem++;
    this.loadProblem();
  }
}
