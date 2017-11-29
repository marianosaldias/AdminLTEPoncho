jQuery(document).ready(function(){
  if (document.getElementById('fileUpld') !== null) {
    document.getElementById("fileUpld").onchange = function() {
      //llama a funcion
      getFileSelected();
    };
  };

  jQuery(".wpcf7-text").addClass('form-control');
  jQuery(".wpcf7-select").addClass('form-control');
  jQuery(".wpcf7-number").addClass('form-control');
  jQuery(".wpcf7-submit").addClass('btn');
  jQuery(".wpcf7-list-item").addClass('btn btn-default p-t-1');
  jQuery(".wpcf7-radio").addClass('btn-group btn-group-justified');
  jQuery(".wpcf7-checkbox").addClass('btn-group');
  jQuery(".wpcf7-radio").attr('data-toggle', 'buttons');
  jQuery(".wpcf7-checkbox").attr('data-toggle', 'buttons');

  function getFileSelected(){

    //Extrae valor
    var getFileSelected = document.getElementById("fileUpld").files[0].name;

    //Muestra el valor
    document.getElementById("file-selected").innerHTML = getFileSelected + ' <i class="fa fa-check text-success"></i>';

  }
});
