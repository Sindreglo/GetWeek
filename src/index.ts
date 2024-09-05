// src/index.ts

export function getDatesFromWeek(week: number, year: number): Date[] {
    const dates = [];
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    for (let i = 1; i <= 7; i++) {
        date.setDate(date.getDate() + 1);
        dates.push(new Date(date));
    }
    return dates;
}

export function getDatesFromSameWeek(date: Date): Date[] {
    const weekDates = [];
    let dayOfWeek = date.getDay();
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const firstDayOfWeek = new Date(date.setDate(date.getDate() - dayOfWeek));

    for (let i = 0; i < 7; i++) {
        weekDates.push(new Date(firstDayOfWeek));
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }
    return weekDates;
}

export function getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export function isSameWeek(date1: Date, date2: Date): boolean {
    return getWeekNumber(date1) === getWeekNumber(date2);
}
