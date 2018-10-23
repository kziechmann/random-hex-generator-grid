console.log("hello");
document.addEventListener("DOMContentLoaded",function(){
  // let gridDiv = document.createElement("div");
  // let divone = document.getElementById("div1");
  // gridDiv.className = "singleTile";
  // gridDiv.style.backgroundColor = "skyblue";
  // gridDiv.style.padding = "30px";
  // // gridDiv.style.paddingColor = "black";
  // divone.appendChild(gridDiv);
  const hexCodeGenerator = () =>{
  var valid = "abcdef0123456789"
  accumulator = ""
  for(let i = 0; i<6; i++){
    accumulator += valid[Math.floor(Math.random()*valid.length)]
  }
  return "#"+ accumulator;
  }

  let divtwo = document.getElementById("div2");
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32);
    divtwo.appendChild(div32too);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32too);
    divtwo.appendChild(div32);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32);
    divtwo.appendChild(div32too);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32too);
    divtwo.appendChild(div32);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32);
    divtwo.appendChild(div32too);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32too);
    divtwo.appendChild(div32);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32);
    divtwo.appendChild(div32too);
  };
  for(let i = 0; i<8; i++){
    let div32 = document.createElement("div");
    let div32too = document.createElement("div");
    div32.className = "multiTilePurple";
    div32too.className = "multiTileRed";
    div32.style.backgroundColor = hexCodeGenerator();
    div32too.style.backgroundColor = hexCodeGenerator();


    divtwo.appendChild(div32too);
    divtwo.appendChild(div32);
  };

  document.body.style.backgroundColor = hexCodeGenerator();

});
