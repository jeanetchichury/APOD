let diaAtual = moment().format('YYYY-MM-DD')
let dia = $('#dia').val(diaAtual)
let btn = $('button')
mudaFoto()

btn.on('click', function(event){
    event.preventDefault()
    let diaPedido = dia.val()
    mudaFoto()
})

function mudaFoto(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=mu2JlrbiqzSXIeRvffHEMko8cUPg8GPoIuH6h0xd&date=${dia.val()}`,
        
        success: function(req){
            if (req.media_type == 'image'){
                $('body').css('background-image', `url(${req.url})`)
                $('#frame').remove()
                $('#erro').html('')
            }
            else
            $('#video').html(`<iframe id="frame" src="${req.url}" allowfullscreen>`)
            $('#erro').html('')
            $('h2').html(req.title)
            $('#descritor').html(req.explanation)
        },

        error: ()=>{
        $('#erro').html('Sinto muito, no dia do seu aniversário não recebemos nenhuma foto da NASA')
        $('h2').html("")
        $('#descritor').html("")
        }
    })
}