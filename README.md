# Module5-Challange

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Final Product
```
Site was created to keep track of the work day, starting at 9am and ending at 5pm
During this time, should the time of day not be during this time period, the rows will display as grey
Should the site be accessed during the workday, the current hour will display in red, the future will display in green and the past
will display in grey.

The user is able to write to each row and save the data to the local storage, should the page be reloaded, the last save will appear in
their designated areas.

The user will also be able to rewrite any text and resave and the data will replace the old data in the local storage

The date will appear at the top before the time blocks

```
## Site challanges
```
I did have an issue with trying to display the time live rather than just a time stamp. I feel it would have been more interactive that way

I initially had issue with the save feature in trying to save it to the local. I found that putting the siblings before the parent worked 
better the the reverse

I found that when the screen shrank to the size of a tablet or cell phone that the formatting didn't allow the save button to be viewed. So I
had to override the screen size and change the button, row and text area when the width for a tablet of cell phone were reached.
