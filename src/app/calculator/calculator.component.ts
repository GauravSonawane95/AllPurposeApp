import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display: string = '0';
  currentOperand: string = '';
  previousOperand: string = '';
  operation: string = '';
  isEvaluated: boolean = false;
  cursorPosition: number = 0;

  updateDisplay(value: string): void {
    this.display = value;
    setTimeout(() => {
      const inputElement = document.getElementById('display') as HTMLInputElement;
      inputElement.selectionStart = this.cursorPosition;
      inputElement.selectionEnd = this.cursorPosition;
      inputElement.focus();
    }, 0);
  }

  onDigit(digit: string): void {
    if (this.isEvaluated) {
      this.display = digit;
      this.isEvaluated = false;
      this.cursorPosition = 1;
    } else {
      if (this.display === '0') {
        this.display = digit;
        this.cursorPosition = 1;
      } else {
        this.display = this.display.slice(0, this.cursorPosition) + digit + this.display.slice(this.cursorPosition);
        this.cursorPosition += 1;
      }
    }
    this.updateDisplay(this.display);
  }

  onDot(): void {
    if (!this.display.includes('.')) {
      this.display += '.';
      this.cursorPosition += 1;
      this.updateDisplay(this.display);
    }
  }

  onClear(): void {
    this.display = '0';
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
    this.cursorPosition = 0;
    this.updateDisplay(this.display);
  }

  onOperator(operator: string): void {
    if (this.display !== '' && !this.isEvaluated) {
      this.operation = operator;
      this.previousOperand = this.display;
      this.display += ' ' + operator + ' ';
      this.cursorPosition += 3;
      this.updateDisplay(this.display);
    }
  }

  onEnter(): void {
    if (this.operation !== '' && this.display !== '') {
      this.compute();
      this.operation = '';
      this.previousOperand = '';
      this.isEvaluated = true;
      this.cursorPosition = this.display.length;
    }
  }

  compute(): void {
    let computation;
    const splitDisplay = this.display.split(' ');
    const prev = parseFloat(splitDisplay[0]);
    const current = parseFloat(splitDisplay[2]);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.display = computation.toString();
    this.currentOperand = '';
  }

  moveCursor(position: number): void {
    this.cursorPosition = position;
    this.updateDisplay(this.display);
  }

  cursorLeft(): void {
    if (this.cursorPosition > 0) {
      this.cursorPosition -= 1;
      this.updateDisplay(this.display);
    }
  }

  cursorRight(): void {
    if (this.cursorPosition < this.display.length) {
      this.cursorPosition += 1;
      this.updateDisplay(this.display);
    }
  }

  onBackspace(): void {
    if (this.cursorPosition > 0) {
      this.display = this.display.slice(0, this.cursorPosition - 1) + this.display.slice(this.cursorPosition);
      this.cursorPosition -= 1;
      this.updateDisplay(this.display);
    }
  }

  onReset(): void {
    this.display = '0';
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
    this.cursorPosition = 0;
    this.isEvaluated = false;
    this.updateDisplay(this.display);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const key = event.key;
    if (!isNaN(parseInt(key))) {
      this.onDigit(key);
    } else if (key === '+') {
      this.onOperator('+');
    } else if (key === '-') {
      this.onOperator('-');
    } else if (key === '*') {
      this.onOperator('*');
    } else if (key === '/') {
      this.onOperator('/');
    } else if (key === 'Enter') {
      this.onEnter();
    } else if (key === 'Escape') {
      this.onClear();
    } else if (key === '.') {
      this.onDot();
    } else if (key === 'ArrowLeft') {
      this.cursorLeft();
    } else if (key === 'ArrowRight') {
      this.cursorRight();
    } else if (key === 'Backspace') {
      this.onBackspace();
    } else if (key === 'Delete') {
      this.onReset();
    }
  }
}
