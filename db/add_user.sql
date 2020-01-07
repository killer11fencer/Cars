with id as (
insert into c.users (first_name,last_name,phone,admin)
values (
    ${first_name},
    ${last_name},
    ${email},
    ${phone},
    ${admin} default false )
    returning id
)

insert into c.user_login (email,password,user_id)
values(
    ${email},
    ${password},
    (select * from id)
)