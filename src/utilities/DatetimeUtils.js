import { MONTHS, DAYS } from './DateConstants';

const date = new Date();

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days.map(day => day.charAt(0).toUpperCase() + day.slice(1)); // Adjust capitalization as needed
}

export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getDate();

  return `${day} ${month}`;
}

export function transformDateFormat() {
  const month = date.toLocaleString('vi-VN', { month: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
  const day = date.toLocaleString('vi-VN', { day: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
  const year = date.getFullYear();
  const time = date.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  const newFormatDate = `${year}-${month}-${day} ${time}`;
  return newFormatDate;
}

export function getVietnamDatetime() {
  const vnTime = date.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  const isoDateString = date.toISOString();
  const vnDate = `${isoDateString.split('T')[0]} ${vnTime}`;
  return vnDate;
}

export function getVietnamTime() {
  const vnTime = date.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  return vnTime;
}