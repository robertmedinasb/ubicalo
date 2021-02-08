import { useEffect, useState } from 'react';
import styles from '../../styles/components/elements/Hours.module.scss';
import { constants } from '../../constants';

export const HoursSection = ({ hours }) => {
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    const daysChecked = [];
    const finalSchedule = [];
    hours[0].open.forEach((day, index) => {
      if (daysChecked.includes(index)) return;
      const currentDays = hours[0].open.filter((hour) => hour.day === index);
      if (currentDays.length < 1) return;
      const today = {};
      daysChecked.push(index);
      today.start = currentDays[0].start;
      today.end = currentDays[0].end;
      finalSchedule.push(day);
    });
    setSchedule(finalSchedule);
  }, []);
  const transformDate = (number) => {
    const numbers = number.split('', 4);
    const hours = `${numbers[0]}${numbers[1]}`;
    const minutes = `${numbers[2]}${numbers[3]}`;
    return `${hours}:${minutes}`;
  };

  return (
    <div className={styles['hours']}>
      {schedule &&
        schedule.map(({ day, start, end }, index) => (
          <div className={styles['day']} key={index}>
            <strong>{constants.DAYS[day]}:</strong>
            <span>
              {transformDate(start)} - {transformDate(end)}
            </span>
          </div>
        ))}
    </div>
  );
};
