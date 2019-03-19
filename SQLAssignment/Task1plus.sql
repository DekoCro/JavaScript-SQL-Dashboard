SELECT
Customer.CustomerId,
Customer.Name AS CustomerName,
DeviceType.Name as DeviceTypeName,
COUNT (*) as DevicesCount
FROM Device
RIGHT JOIN DeviceType
	ON Device.DeviceTypeId = DeviceType.DeviceTypeId
LEFT JOIN Customer
	ON Customer.CustomerId = Device.CustomerId
WHERE Device.DeviceId IS NOT NULL
GROUP BY Customer.CustomerId , Customer.Name, DeviceType.Name;