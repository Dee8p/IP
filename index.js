const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  const place = document.querySelector("input").value;
  const url = "https://api.ipfind.com/?ip=" + place + "&auth=a323c2b5-92c7-49e9-88de-523deef88e19";
  const url1 = "https://ipapi.co/"+place+"/json/";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const lat = data.latitude;
      const lon = data.longitude;
      
      document.getElementById("ip").value = data.ip_address;

      document.getElementById("loc").value = data.country;
      document.getElementById("tz").value = data.timezone;


      console.log(data)
      var map = L.map('ipmap').setView([lat, lon], 10, {animation: true});

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([lat, lon]).addTo(map)

        .openPopup();
        


    })


})
