let dia = $('#dia')


$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=mu2JlrbiqzSXIeRvffHEMko8cUPg8GPoIuH6h0xd&date=2021-07-05`,
    
    success: function(req){
        $('body').css('background-image', `url(${req.url})`)
    },

    error: ()=>{
      $('p').html('Sinto muito, no dia do seu aniversário não recebemos nenhuma foto da NASA')  
    }
})