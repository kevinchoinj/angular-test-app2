import { Component } from '@angular/core';

const problemsArray = [
  {
    word1: 'car',
    word2: 'red',
    word3: 'wheel',
    solution: 'tire',
  },
  {
    word1: 'book',
    word2: 'cover',
    word3: 'binding',
    solution: 'spine',
  },
  {
    word1: 'fruit',
    word2: 'orange',
    word3: 'lemon',
    solution: 'citrus',
  },
  {
    word1: 'flower',
    word2: 'petal',
    word3: 'stem',
    solution: 'blossom',
  },
  {
    word1: 'animal',
    word2: 'lion',
    word3: 'tiger',
    solution: 'feline',
  },
  {
    word1: 'tree',
    word2: 'leaves',
    word3: 'branches',
    solution: 'foliage',
  },
  {
    word1: 'bird',
    word2: 'wing',
    word3: 'feather',
    solution: 'avian',
  },
  {
    word1: 'ocean',
    word2: 'wave',
    word3: 'tide',
    solution: 'maritime',
  },
  {
    word1: 'desk',
    word2: 'chair',
    word3: 'pen',
    solution: 'office',
  },
  {
    word1: 'face',
    word2: 'nose',
    word3: 'mouth',
    solution: 'facial',
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
