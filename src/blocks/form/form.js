const form = () => {
  $('#distributorLink').on('click', function(event) {
    event.preventDefault();

    let form = $("#distributor").serialize();

    $.ajax({
      type: "POST",
      url: "mail.php",
      data: form,
      success: function(msg){
      }
    });

  });
}

export default form;