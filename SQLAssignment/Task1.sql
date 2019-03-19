SELECT 
	Customer.CustomerId,
	Name, 
	COUNT( Device.DeviceId ) AS DevicesCount
FROM Device 
RIGHT OUTER JOIN Customer 
	ON Device.CustomerId = Customer.CustomerId  
GROUP BY 
	Customer.CustomerId,
	Name;