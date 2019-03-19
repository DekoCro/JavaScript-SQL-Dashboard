SELECT 
	Device.CustomerId,
	Customer.Name AS CustomerName,
	MAX(Device.SerialNumber),
	MAX(alarms_per_device.Alarms) AS AlarmsCount
FROM
 
(SELECT
	Device.DeviceId,
	COUNT(Alarm.DeviceId) AS Alarms
FROM Alarm
LEFT JOIN Device
	ON Alarm.DeviceId = Device.DeviceId
GROUP BY Device.DeviceId) 
AS alarms_per_device

LEFT JOIN Device
	ON alarms_per_device.DeviceId = Device.DeviceId
INNER JOIN Customer
	ON Customer.CustomerId = Device.CustomerId
GROUP BY Device.CustomerId, Customer.Name