

var beers = [];
var flag = true;

function addBeer (Name, Category , Rate){
    let beer = { 
        name:Name, 
        category:Category,
        rate:Rate
    };
    beers.push(beer);
    renderBeers();
}

function renderBeers(){
    $('.beers').find('li').remove();
    console.log(beers[0]);
    for(let i=0; i<beers.length ;i++){
        $('.beers').append('<li>' + beers[i].name + " " + beers[i].category + " " + beers[i].rate + '</li>');
    }
};


$('.post-beer').click(function(){
    addBeer($('.beer-input').val(),$('.category-input').val(), $('.selection option:selected').text());

});


$('.sort-beer').click(function(){
    if(flag === true){
        beers.sort(function(a,b){ return a.rate - b.rate});
        flag = false;
    }
    else{
        beers.sort(function(a,b){ return b.rate - a.rate});
        flag = true;
    }
    renderBeers();

});