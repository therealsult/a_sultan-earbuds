(() => {
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    //Array with content for the earbuds hotspots

  const infoBoxes = [
    {
      title: "Comfortable EarBud Tips",
      text: "Comfortable ear bud tips are typically made from various materials designed to provide a comfortable and secure fit and are crucial to provinding the best sound quality. Paper Thin Tech EarBus offer many different ear bud tips made of different material. We offer memory foam, gel, silicone, velur or cloth and our in house secert hybrid material for you to choose from.",
      image: "ri-headphone-line",
    },

    {
        title: "Super Fast Charging",
        text: "Our Paper Thin Tech EarBuds are capable of charging at super fast speed rates handeling up to 60w charging pulgs. They will charge from 20% to 90% in 15 minutes guaranteed. ",
        image: "ri-battery-2-charge-fill",
    },

    {
        title: "24 Karat",
        text: "Our top of the line model ear buds inculde 2 grams of 24 karat gold on each bud. This model is produced to provide comfort and while enhancing your look at the same time.",
        image: "ri-vip-diamond-fill",
    },

    {
        title: "High Quality Components ",
        text: "All Paper Thin Tech Ear Buds use real gold for components to provide the best listening experince. Gold plated drivers, connectors and speaker housing provide exeptional quality.",
        image: "ri-hq-fill",
    }
  ]
  
    //functions
    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);


        //HOTSPOT TITLE
        const hotspotName = document.createElement("h3");
        hotspotName.textContent = infoBox.title;
          
        //IMAGE ICON
        const hotspotImg = document.createElement("i");
        hotspotImg.classList.add("ri-3x", infoBox.image);

        //HOTSPOT TEXT
        const hotspotDesc = document.createElement("p");
        hotspotDesc.textContent = infoBox.text;


        selected.appendChild(hotspotName);
        selected.appendChild(hotspotImg);
        selected.appendChild(hotspotDesc);
      });
    }
  
    loadInfo();
  
  
    function showInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      //console.log(this.slot);
      //console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });



    tl = gsap.timeline({
      defaults: {
        duration: 2.0,
        ease: "expo.inOut"
      }
    });
    
    tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
    
  })();