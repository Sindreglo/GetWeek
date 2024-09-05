# getWeek

A lightweight npm library for working with dates and weeks.

## Installation

To install `getWeek`, use npm:

```
npm install getweek
```

## Usage

Import the functions from `getWeek`:

```javascript
import { getDatesFromWeek, getDatesFromSameWeek, getWeekNumber, isSameWeek } from 'get-week';
```

### getDatesFromWeek

Get an array of dates within a specific week and year.

```javascript
const weekDates = getDatesFromWeek(week, year);
```

Returns an array of `Date` objects representing the dates within the specified week.

### getDatesFromSameWeek

Get an array of dates within the same week as a given date.

```javascript
const weekDates = getDatesFromSameWeek(date);
```

Returns an array of `Date` objects representing the dates within the same week as the reference date.

### getWeekNumber

Get the week number of a given date.

```javascript
const weekNumber = getWeekNumber(date);
```


Returns the week number of the given date.

### isSameWeek

Check if two dates fall within the same week.

```javascript
const sameWeek = isSameWeek(date1, date2);
```

Returns `true` if the two dates fall within the same week, `false` otherwise.
