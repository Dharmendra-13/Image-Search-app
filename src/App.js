import React,{ useState } from "react";
import axios from "axios";


function App() {
  const [photo,setPhoto] = useState('');
  const [result,setResult] = useState([]);

  const changephotoHandler =()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=e7Me0A4BvYzhXAa3MZWWmnlMUaXjWbAUTSZj44jKchI`)
    .then((response)=>{
      setResult(response.data.results);
    })
  }
 
  return (
    <>
    <div className="container text-center my-4">
    <input type="text" className="form-control" value={photo} onChange={(e)=>{
      setPhoto(e.target.value)
    }} />
    <button type="submit" onClick={changephotoHandler} className="btn btn-primary my-2">Get photos</button>
    </div>
     
      <div className="container">
        <div className="row text-center text-lg-start">

          {result.map((value)=>{
            return(
              <div className="col-lg-3 col-md-4 col-6" key={value.id}>
              <div className="d-block mb-4 h-100"> 
                <img className="img-fluid img-thumbnail"  src={value.urls.small} alt="hello world" />
              </div>
            </div>
            );
          })}

        
        </div>
      </div>

    </>
  );
}

export default App;
