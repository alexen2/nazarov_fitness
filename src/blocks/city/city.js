import refreshData from '../refresh-data/refresh-data';
import loadData from '../load-data/load-data';

const city = () => {
  let cityName = localStorage.getItem('cityName');

  if(!cityName) {
    $('#cityNameModal').modal({
      fadeDuration: 300,
      fadeDelay: 0.50
    });
  }

  $('.city-select').on('change', function() {
    let catalogData = JSON.parse(loadData(this.value));

    if(catalogData.error) {
      console.log('Ошибка загрузки данных!');
    } else {
      refreshData(catalogData);
    }    
  }); 
}

export default city;