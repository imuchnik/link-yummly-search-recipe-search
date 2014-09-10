var toastGroupTemplate = document.querySelector('#toastGroup'),
    app=document.querySelector('#app');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

app.showDiet=function(){
  document.querySelector('#diet').show();
  document.querySelector('#pcos').hide();
  
}

   