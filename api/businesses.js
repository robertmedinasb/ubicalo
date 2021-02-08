export const executeGraphQLQuery = async (body) => {
  const resp = await fetch(`/api/search-businesses`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const data = await resp.json();
  return data;
};

export const getBusinessesWithLocationQuery = (searchLocation) => {
  return `
  {
    search(location: "${searchLocation}",
           limit: 10){
          total
          business{
            id
            name
            location{
              state
              city
              address1
            }
            phone
            photos
            rating
            review_count
          }
    }
  }`;
};
export const getBusinessesWithLatitudeQuery = ({ longitude, latitude }) => {
  return `
  {
    search(longitude: ${longitude},
          latitude: ${latitude},
          limit: 10){
          total
          business{
            id
            name
            location{
              state
              city
              address1
            }
            phone
            photos
            rating
            review_count
          }
    }
  }`;
};

export const getBusinessByIdQuery = (id) => {
  return `  
  {
    business(id: "${id}") {
      id
      name
      rating
      review_count
      phone
      hours{
        open{
          start
          end
          day
        }
      }
      price
      is_closed
      photos,
      reviews(limit:5){
        id
        rating
        text
        time_created
        user{
          id
          image_url
          name
        }
      }
      categories {
        alias
        title
      }
      location{
        state
        city
        address1
      }
    }
  }
  `;
};
