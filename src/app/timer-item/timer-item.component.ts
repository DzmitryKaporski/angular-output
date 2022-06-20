import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {

  currentTimerHour = 0
  currentTimerSec = 0
  @Input() timerIntervalSec: number = 1000
  @Input() timerIntervalHours: number = 3000
  timerSecID: any = null
  timerHoursID: any = null

  constructor() { }

  ngOnInit(): void {
  }

  timerStart(): void {
    if (this.timerSecID !== null && this.timerHoursID !== null) return
    this.timerSecID = setInterval(() => this.timerIncrementSec(), this.timerIntervalSec)
    this.timerHoursID = setInterval(() => this.timerIncrementHours(), this.timerIntervalHours)
  }

  timerStop(): void {
    if (this.timerSecID === null && this.timerHoursID === null) return
    clearInterval(this.timerSecID)
    clearInterval(this.timerHoursID)
    this.timerSecID = null
    this.timerHoursID = null
  }

  private timerIncrementSec(): void {
    this.currentTimerSec++

  }
  private timerIncrementHours(): void {
    this.currentTimerHour++
  }

}
