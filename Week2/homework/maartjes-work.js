'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

/**
 * Use of High order functions: map, filter, toFixed
 */

function computeEarnings(tasks, hourlyRate) {
  // mapping duration of tasks from minutes to hours and filtering out duties < 2h
  const timeInHours = tasks.map(time => time.duration / 60).filter(duty => duty >= 2);
  const salaryPerDay = timeInHours.map(hoursPerDay => hoursPerDay * hourlyRate);
  const totalSalary = salaryPerDay.reduce((sum, dailySalary) => sum + dailySalary, 0);
  const euroSalary = totalSalary.toFixed(2);
  return euroSalary;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${earnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
