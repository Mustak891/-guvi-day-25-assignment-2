var button=document.getElementById("button");
button.addEventListener("click", searchphotos);

function searchphotos(){
    let client_id = "ouPEmoFn14da45wC97JoM-9ifLbSfYKYgu5isaPJ0wQ";
    let search = document.getElementById("search").value;
    let url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${search}`;
    let result = document.getElementById("result");
    result.innerHTML="";

    //make request to api
    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then(data1=>{
            data1.results.forEach(element => {
            let img = document.createElement('img');
            img.src = element.urls.regular;
            img.className='img_box';
            result.append(img);
            // if(button("click")===true){
                
            // }
            
        });
    })
    .catch((error)=>(console.log(error)));
}



