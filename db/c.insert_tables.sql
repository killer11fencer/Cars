create table c.users (
    id serial NOT NULL,
    first_name varchar(50),
    last_name varchar(50),
    phone varchar(10),
    admin boolean
)

create table c.user_login (
    id serial NOT NULL,
    email varchar,
    password text,
    user_id int
)
create table c.photos (
    id serial NOT NULL,
    image_url text,
    listing_id int
)

create table c.listing (
    id serial NOT NUll,
    price int,
    miles int,
    listing_date timestamp WIth time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    description text,
    year_id int,
    model_id int,
    status varchar
)