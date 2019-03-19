SELECT 
	DerivedTable.Date,
	DerivedTable.AlarmType,
	COUNT (CONVERT(varchar, Alarm.OccurenceDate,1)) as AlarmsCount
FROM Alarm
RIGHT JOIN

(SELECT
	CONVERT(varchar, Calendar.[Date],1) AS Date,
	AlarmType.Description AS AlarmType,
	AlarmType.AlarmTypeId AS Type
FROM Calendar
CROSS JOIN AlarmType)
AS DerivedTable

ON DerivedTable.Date = CONVERT(varchar, Alarm.OccurenceDate,1)
AND DerivedTable.Type = Alarm.AlarmTypeId
GROUP BY DerivedTable.Date, DerivedTable.AlarmType, CONVERT(varchar, Alarm.OccurenceDate,1)
ORDER BY DerivedTable.Date