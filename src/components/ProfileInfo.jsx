import React, {useEffect, useState} from "react";

function ProfileInfo() {
const [Profile,setProfile]=useState({email:"", phone:"",name:"",registrationDate:new Date()})
   const Request=(Profile,setProfile)=>{
       var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.token}` );
       fetch("https://pets.xn--80ahdri7a.site/api/users")
           .then(response => response.json())
           .then(result =>{ console.log(result)
           setProfile(result)
           })
           .catch(error => console.log('error', error));
   }
   useEffect(() => {
        Request(Profile,setProfile)
    }, []);
    return (
        <div>
            <div className="row m-auto"  style={ {
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "space-around",
                alignItems: "flex-end",
                flexDirection: "row",
                alignContent: "flex-start",
                flexWrap: "nowrap"
            }}>
            <form className="row g-3 w-25" onSubmit={(e)=>{
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer xdcXQ6GcwdTB1iZGImQaHGXievBJfCTZ5o1aZlI2FPWpCkuveCM5m9O9Utzbj4lNO9zs6e0VKtkqT3j8");

                let raw = JSON.stringify({
                    "phone": document.getElementById("phone").value
                });

                let requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://pets.xn--80ahdri7a.site/api/users/phone", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }}>
                <div className="col w-25" >
                    <h4>Номер телефона</h4>
                    <input type="text" className="form-control" placeholder="Номер телефона" id="phone" aria-label=" Номер телефона"/>
                    <pre></pre>
                    <button className="btn btn-primary" type="submit">Изменить</button>
                </div>
            </form>

            <form className="row g-3 w-25">
                <div className="col w-25">
                    <h4>E-mail</h4>
                    <input type="text" className="form-control" placeholder="Почта" aria-label="Почта"/>
                    <pre></pre>
                    <button className="btn btn-primary">Изменить</button>
                </div>
            </form>
                <p> Кол-во дней на сайте: ${Math.ceil(new Date() - Profile.registrationDate / 86400000 )}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;