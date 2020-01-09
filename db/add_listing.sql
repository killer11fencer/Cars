with id as (
insert into c.listing (price,miles,description,year_id,make_id,model_id,status)
values(
    ${price},
    ${miles},
    ${description},
    ${year_id},
    ${make_id},
    ${model_id},
    ${status})
    
returning id
)
insert into c.photos (image_url,listing_id)
    ${image_url},
    (select * from id)
)