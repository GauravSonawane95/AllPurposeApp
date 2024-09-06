import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  localHourMinute: string='';
  localSecondsAmPm: string='';
  worldHourMinute: string='';
  worldSecondsAmPm: string='';
  selectedTimeZone: string='';
  timeZones: string[];

  constructor() {
    this.timeZones = moment.tz.names();
    this.selectedTimeZone = this.timeZones[0]; // Initialize with the first time zone
    this.updateTime();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime(): void {
    const nowLocal = moment();
    this.localHourMinute = this.formatTime(nowLocal);
    this.localSecondsAmPm = this.formatSecondsAmPm(nowLocal);

    const nowWorld = moment().tz(this.selectedTimeZone);
    this.worldHourMinute = this.formatTime(nowWorld);
    this.worldSecondsAmPm = this.formatSecondsAmPm(nowWorld);
  }

  formatTime(time: moment.Moment): string {
    const hours = time.hours();
    const minutes = time.minutes();
    const formattedHours = hours % 12 || 12; // Convert 24h to 12h format
    const formattedMinutes = this.padZero(minutes);
    return `${formattedHours}:${formattedMinutes}`;
  }

  formatSecondsAmPm(time: moment.Moment): string {
    const seconds = time.seconds();
    const amPm = time.hours() >= 12 ? 'PM' : 'AM';
    const formattedSeconds = this.padZero(seconds);
    return `${formattedSeconds} ${amPm}`;
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onTimeZoneChange(event: any): void {
    this.selectedTimeZone = event.target.value;
    this.updateTime();
  }
}