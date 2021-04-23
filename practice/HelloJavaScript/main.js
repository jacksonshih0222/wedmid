var last=3;

$(function () {
    $("input").on("click", function () {
        //alert("Hi");
        
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        if(last==randomChildNumber)
        randomChildNumber+=1;
        if(randomChildNumber>2)
        randomChildNumber=0;
        last=randomChildNumber;


        

        image=['拉麵.jpg','滷肉飯.jpg','水餃.jpg'];
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",image[randomChildNumber]);


    });
});

