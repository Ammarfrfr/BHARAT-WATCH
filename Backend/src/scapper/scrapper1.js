  import Parser from "rss-parser";

  const parser = new Parser();

 const indianCities = [
"Agartala","Agra","Ahmedabad","Ahmednagar","Aizawl","Ajmer","Akola","Alappuzha","Aligarh",
"Allahabad","Alwar","Amaravati","Ambala","Ambarnath","Ambattur","Amravati","Amritsar",
"Anand","Anantapur","Arrah","Asansol","Aurangabad","Avadi","Bally","Bangalore",
"Baranagar","Barasat","Bardhaman","Bareilly","Bathinda","Begusarai","Belgaum","Bellary",
"Berhampore","Berhampur","Bettiah","Bhagalpur","Bharatpur","Bharuch","Bhatpara",
"Bhavnagar","Bhilai","Bhilwara","Bhimavaram","Bhiwandi","Bhiwani","Bhopal","Bhubaneswar",
"Bhuj","Bidar","Bihar Sharif","Bijapur","Bikaner","Bilaspur","Bokaro","Bongaigaon",
"Bulandshahr","Burdwan","Chandigarh","Chandrapur","Chennai","Chhapra","Chhindwara",
"Chittoor","Coimbatore","Cuttack","Darbhanga","Davanagere","Dehradun","Delhi",
"Deoghar","Dewas","Dhanbad","Dharmavaram","Dindigul","Durg","Durgapur","Eluru",
"Erode","Etawah","Faridabad","Farrukhabad","Fatehpur","Firozabad","Gandhidham",
"Gandhinagar","Gaya","Ghaziabad","Giridih","Gorakhpur","Gudivada","Gulbarga",
"Guna","Guntakal","Guntur","Gurgaon","Guwahati","Gwalior","Hajipur","Haldia",
"Hapur","Haridwar","Hazaribagh","Hindupur","Hisar","Hoshiarpur","Hospet","Howrah",
"Hubli","Hyderabad","Ichalkaranji","Imphal","Indore","Jabalpur","Jaipur","Jalandhar",
"Jalgaon","Jalna","Jammu","Jamnagar","Jamshedpur","Jaunpur","Jhansi","Jodhpur",
"Junagadh","Kadapa","Kakinada","Kalyan","Kamarhati","Kanchipuram","Kannur",
"Kanpur","Karimnagar","Karnal","Karur","Katihar","Katni","Kharagpur","Khammam",
"Kochi","Kolhapur","Kolkata","Kollam","Korba","Kota","Kottayam","Kozhikode",
"Kurnool","Latur","Lucknow","Ludhiana","Madurai","Mahbubnagar","Malegaon",
"Mangalore","Mathura","Mau","Meerut","Mirzapur","Moradabad","Motihari",
"Mumbai","Muzaffarnagar","Muzaffarpur","Mysuru","Nadiad","Nagercoil","Nagpur",
"Naihati","Nanded","Nashik","Navi Mumbai","Nellore","New Delhi","Nizamabad",
"Noida","North Dumdum","Ongole","Orai","Pali","Panchkula","Panipat","Panvel",
"Parbhani","Patiala","Patna","Pimpri-Chinchwad","Pondicherry","Port Blair",
"Pune","Purnia","Raebareli","Raichur","Raiganj","Raipur","Rajahmundry","Rajkot",
"Rajnandgaon","Ramagundam","Rampur","Ranchi","Ratlam","Rewa","Rohtak","Rourkela",
"Sagar","Saharanpur","Salem","Sambalpur","Sangli","Satara","Satna","Secunderabad",
"Shahjahanpur","Shillong","Shimla","Shivamogga","Sikar","Silchar","Siliguri",
"Solapur","Sonipat","Sri Ganganagar","Srinagar","Surat","Surendranagar","Thane",
"Thanjavur","Thiruvananthapuram","Thoothukudi","Thrissur","Tinsukia","Tiruchirappalli",
"Tirunelveli","Tirupati","Tiruppur","Tumakuru","Udaipur","Udupi","Ujjain","Ulhasnagar",
"Unnao","Vadodara","Valsad","Varanasi","Vasai-Virar","Vellore","Vijayawada",
"Visakhapatnam","Warangal","Yamunanagar"
];

  const TOPICS = [
    { keyword: "rape sexual assault india", type: "Rape" },
    { keyword: "protest violent india", type: "Protest" },
    { keyword: "violent murder india", type: "Murder" },
    { keyword: "violent riots india", type: "Riot" },
    { keyword: "Rally rally india", type: "Rally" }
  ]

  async function getNews(keyword){
    const feed = await parser.parseURL(`https://news.google.com/rss/search?q=${keyword}`)
    return feed.items
  } 

  async function getFullNews(){
    for (const topic of TOPICS) {
      const items = (await getNews(topic.keyword)).slice(0, 20)
      for(const item of items){
        const title = item.title
        const foundCity = indianCities.find(city => title.includes(city))
        if(foundCity == undefined){
          continue;
        } else {
          const ok = await fetch(`https://nominatim.openstreetmap.org/search?q=${foundCity}&format=json`)
          const data = await ok.json()
          if(data.length > 0){
            const lat = data[0].lat
            const lon = data[0].lon
            console.log(lat, lon)
            console.log(foundCity)
          }

        }
      }
    }
    process.exit(1)
  }

  getFullNews()