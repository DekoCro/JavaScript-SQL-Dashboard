SELECT
CONVERT(varchar, Alarm.OccurenceDate,1) AS AlarmOccurenceDate,
AlarmType.Description AS AlarmType,
COUNT (Alarm.AlarmId) as AlarmsCount
FROM Alarm
LEFT JOIN AlarmType
	ON Alarm.AlarmTypeId = AlarmType.AlarmTypeId
GROUP BY CONVERT(varchar, Alarm.OccurenceDate,1) , AlarmType.Description;