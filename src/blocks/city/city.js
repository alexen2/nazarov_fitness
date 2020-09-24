import refreshData from '../refresh-data/refresh-data';
import loadData from '../load-data/load-data';

const city = () => {
  let cityName = localStorage.getItem('cityName');

  if(!cityName) {
    $('#cityNameModal').modal({
      fadeDuration: 300,
      fadeDelay: 0.50
    });
  } else {
    refreshData();
    // console.log("Ваш город: " + localStorage.getItem('cityName'));
  }

  $('.city-select').on('change', function() {
    let catalogData = loadData(this.value);
    let responseData = JSON.parse(catalogData);

    if(responseData.error) {
      console.log('Ошибка загрузки данных!');
    } else {
      localStorage.setItem('cityName', this.value);
      localStorage.setItem('catalogData', catalogData);
      // console.log("Ваш новый город: " + localStorage.getItem('cityName'));
      refreshData();
      $.modal.close();
    }    
  }); 
}

export default city;