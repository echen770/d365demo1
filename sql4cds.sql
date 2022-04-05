-- SQL for all employees
SELECT
    e.cra31_employee1id as 'Employee ID',
    e.cra31_first_name as 'First Name',
    e.cra31_last_name as 'Last Name',
    e.cra31_fullname as 'Full Name',
    e.cra31_gender as 'Gender',
    eth.cra31_ethnicity as 'Ethnicity',
    eth.cra31_ethnicity1id,
    e.cra31_email as 'Email',
    e.cra31_phone as 'Phone',
    hc.cra31_city as 'Home City',
    hc.cra31_city1id,
    mc.cra31_city as 'Mail City',
    mc.cra31_city1id,
    e.cra31_hire_date as 'Hire Date',
    e.cra31_yearsofservice as 'Years of Service',
    j.cra31_job as 'Job',
    j.cra31_job1id,
    d.cra31_department as 'Department',
    d.cra31_department1id,
    p.cra31_position as 'Position',
    p.cra31_position1id,
    s.cra31_station as 'Station',
    s.cra31_station1id
FROM cra31_employee1 e
LEFT JOIN cra31_department1 d
    ON e.cra31_department = d.cra31_department1id
LEFT JOIN cra31_ethnicity1 eth
    ON e.cra31_ethnicity = eth.cra31_ethnicity1id
LEFT JOIN cra31_city1 hc
    ON e.cra31_homecity = hc.cra31_city1id
LEFT JOIN cra31_city1 mc
    ON e.cra31_mailcity = mc.cra31_city1id
LEFT JOIN cra31_job1 j
    ON e.cra31_job = j.cra31_job1id
LEFT JOIN cra31_position1 p
    ON e.cra31_positions = p.cra31_position1id
LEFT JOIN cra31_station1 s
    ON e.cra31_station = s.cra31_station1id;