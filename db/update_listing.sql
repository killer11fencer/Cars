update c.listing
set price = ${price}, miles = ${miles}, description = ${description},
year_id = ${year_id}, make_id = ${make_id}, model_id = ${model_id}, status = ${status}
where id =${id}