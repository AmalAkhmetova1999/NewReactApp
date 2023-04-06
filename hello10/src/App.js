import React, {useState} from "react"
import './App.css';
import {Container, Grid, Item } from "@mui/material";


function App() {

  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  
  const dropDown=()=> {
    document.getElementById("list").classList.toggle("show");
  }
  
  /*window.onclick = function(event) {
    if (!event.target.matches('.burger')) {
      var listMenu = document.getElementsByClassName("list-content");
      var i;
      for (i = 0; i < listMenu.length; i++) {
        var openListMenu = listMenu[i];
        if (openListMenu.classList.contains('show')) {
          openListMenu.classList.remove('show');
        }
      }
    }
  }*/
  return (
    <div>
  <div>
  <Grid container >
    <Grid item xs={12}>
     <header className='header'>

      <div className={navBar ? "menu active" : "menu"} id='menu'>
      <p className='login'> → Konsultlogin</p>
      <img className='logo' src={require('./logo.png')} />
      <ul className='menuUl'>
        <li className='menuLi'>Lediga jobb</li>
        <li className='menuLi'>Registrera CV</li>
        <li className='menuLi'>För företag</li>
      </ul>
    <button onClick={dropDown} className='burger'><img src={require('./burger.png')} /></button>
    <div id="list" className="list-content">
    <li style={{listStyle:"none",padding:"2%",border:"solid 1px gray"}}><a style={{textDecoration:"none",color:"black",fontWeight: "bold"}} href="#ledigajobb">Lediga jobb</a></li>
    <li style={{listStyle:"none",padding:"2%",border:"solid 1px gray"}}><a style={{textDecoration:"none",color:"black",fontWeight: "bold"}} href="#registreraCV">Registrera CV</a></li>
    <li style={{listStyle:"none",padding:"2%",border:"solid 1px gray"}}><a style={{textDecoration:"none",color:"black",fontWeight: "bold"}} href="#förföretag">För företag</a></li>
    <li style={{listStyle:"none",padding:"2%",border:"solid 1px gray"}}><a style={{textDecoration:"none",color:"black",fontWeight: "bold"}} href="#kontakt">Kontakt</a></li>
    <li style={{listStyle:"none",padding:"2%",border:"solid 1px gray"}}><a style={{textDecoration:"none",color:"black",fontWeight: "bold"}} href="#konsultlogin">Konsultlogin</a></li>
  </div>
      
      </div>
     <img className="pic" src={require('./header.jpg')} />
     </header>
     </Grid>
     </Grid>
     <div className='det'>
     <h2>Det personliga Konsultbolaget</h2>
     <p>Vi har jobb inom IT, Teknik, HR, Administration och Ekonomi. <br/>Bli vår nästa medarbetare, registrera ditt CV redan idag!</p>
     <div className='header-button'>
     <button className='button'>LEDIGA JOBB</button>
     <button className='button'>REGISTRERA CV</button>
     <button className='button right'>Spontan-<br/>ansökan</button>
     </div>
     </div>
     <div className='main-text'>
     <h1>VILKA ÄR VI</h1>
     <p className='text'> Quest Consulting är ett auktoriserat konsultbolag med kollektivavtal, försäkringar, friskvård och tjänstepension. Vi är specialiserade inom IT, Teknik, HR, Administration och Ekonomi. Vår målsättning är att vara din personliga samarbetspartner och just därför är det så viktigt för oss att arbeta efter våra kärnvärden där våra ledord är att vara Personliga, Nyskapande och Professionella.<br/><br/> Låt oss berätta mer om våra tjänster och hur vi kan hjälpa dig. Du är alltid välkommen att kontakta oss!</p>
     </div>
     </div>
     <div style={{padding:"0%",margin:"0%",marginTop:"3%"}}>
    <Grid container >
     <Grid item sm={12} md={6} lg={6} paddingRight={"7%"} paddingLeft={"7%"}>
 <h3>Jobbsökande</h3>
 <p className='text'>Genom att registrera ditt CV och skapa en profil hos oss gör du dig tillgänglig som jobbsökande utan att söka ett specifikt jobb. Dina uppgifter registreras i vårt kandidathanteringssystem och är självklart konfidentiella.<br/><br/>
Vi är ett auktoriserat konsultbolag vilket ger dig som anställd möjlighet till utmanande och roliga konsultuppdrag hos våra kunder samt en trygg anställning hos oss.<br/><br/>
Som uthyrd konsult får du möjlighet till båda långa och korta uppdrag som matchar just din kompetens med våra kunders kravprofil. Registrera ditt CV hos oss redan idag för att ta nästa steg i din karriär!</p><br/><br/>
<button className='button'>LOGGA IN / REGISTRERA CV</button>
     </Grid>
     <Grid item  sm={12} md={6} overflow={"hidden"} >
     <img src={require('./for_jobbsokanden.jpg')} />
     </Grid>
      </Grid>
      <Grid container>
     <Grid item  sm={12} md={6} overflow={"hidden"} >
     <img src={require('./vara_tjanster.jpg')} />
     </Grid>
     <Grid item  sm={12} md={6} xl={6} paddingLeft={"7%"} paddingRight={"4%"}>
     <h3>Våra tjänster</h3>
 <p className='text'>Personalbrist, planerad eller oplanerad, tillhör vardagen i de flesta företag och organisationer. Vi är ett konsultbolag med mer än 15 års samlad branscherfarenhet och kan erbjuda ditt företag specialistkompetens inom IT, Teknik, HR, Administration och Ekonomi.<br/><br/>
Genom effektiv annonsering, sökning i databaser, headhunting, tips och sociala medier hittar vi de mest kvalificerade kandidaterna för de tjänster vi annonserar.<br/><br/>
Vår målsättning är att vara din personliga samarbetspartner och vi arbetar även för att vara ett rikstäckande konsultbolag. Bland våra kunder inkluderas såväl stora globala bolag som små lokala företag. Låt oss berätta mer om våra tjänster och hur vi kan hjälpa dig!</p><br/><br/>
<button className='button'>KONTAKTA OSS</button>
     </Grid>
      </Grid>
      <Grid container marginTop={"4%"}>
      <Grid item xs={12}>
        <h1 style={{textAlign:"center"}}>Här är ett urval av våra Kompetensområden</h1></Grid>
      </Grid>
      <Grid container style={{backgroundColor:"#f2f2f2",textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}} spacing={5}>
      <Grid item xs={12} md={3}>
        <div className='zoom'>
        <h4 className='imgName1'>IT och Telekom</h4>
      <img style={{maxWidth:"100%"}} className="zoom" src={require('./dsc-2476-943.jpg')} />
     
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
        <h4 className='imgName'>Teknik och Ingenjörer</h4>
      <img style={{maxWidth:"100%"}} className="zoom" src={require('./img_8032-329.jpg')} />
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
      <h4 className='imgName'>Kundtjänst och Support</h4>
        <img style={{maxWidth:"100%"}} className="zoom" src={require('./img_7938-1906.jpg')} />
        </div>
        </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
      <h4 className='imgName2'>Management</h4>
        <img style={{maxWidth:"100%"}} className="zoom"  src={require('./touch-screen-mobile-phone_m1s1bcbd.jpg')} />
        </div>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className='zoom'>
        <h4 className='imgName'>Kontor och Administration</h4>
      <img style={{maxWidth:"100%"}} className="zoom" src={require('./storyblocks-young-professionals-or-students-planning-new-project_hiy_jiivr-.jpg')} />
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
      <h4 className='imgName'>Marknad och Kommunikation</h4>
      <img style={{maxWidth:"100%"}} className="zoom" src={require('./storyblocks-cropped-image-of-business-people-discussing-business-strategy-on-the-foreground_ribg7fvpzf.jpg')} />
      </div>
      </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
      <h4 className='imgName'>Ekonomi och Finans</h4>
        <img style={{maxWidth:"100%"}} className="zoom" src={require('./dsc_0345-2448.jpg')} />
        </div>
        </Grid>
      <Grid item xs={12} md={3}>
      <div className='zoom'>
      <h4 className='imgName3'>HR</h4>
        <img style={{maxWidth:"100%"}} className="zoom" src={require('./graphicstock-portrait-of-happy-employer-giving-test-results-to-applicant_rgbq6dkxxz.jpg')} />
        </div>
        </Grid>
      </Grid>
      <Grid container marginTop={"4%"}>
      <Grid item xs={12}><h1 style={{textAlign:"center"}}>Några av våra referensuppdrag</h1></Grid>
    
      </Grid>
      <Grid container style={{textAlign:"center"}} >
      <Grid item xs={12} sm={3}>
     <h4>Förvaltningsledare</h4>
     <p style={{fontStyle:"italic"}} className='text'>Retailkedja</p>
      </Grid>
      <Grid item xs={12} sm={3}>
      <h4>Projektledare</h4>
      <p style={{fontStyle:"italic"}} className='text'>Telekombolag</p>
      </Grid>
      <Grid item xs={12} sm={3}>
      <h4>Kravanalytiker</h4>
      <p style={{fontStyle:"italic"}} className='text'>Järnvägsbranschen</p>
        </Grid>
      <Grid item xs={12} sm={3}>
      <h4>Kundtjänst</h4>
      <p style={{fontStyle:"italic"}} className='text'>Kommun</p>
        </Grid>
        <Grid item xs={12} sm={3}>
        <h4>Webbredaktör</h4>
        <p style={{fontStyle:"italic"}} className='text'>Energiföretag</p>
      </Grid>
      <Grid item xs={12} sm={3}>
      <h4>Scrum Master</h4>
      <p style={{fontStyle:"italic"}} className='text'>Bank och Finans</p>
      </Grid>
      <Grid item xs={12} sm={3}>
      <h4>Projektadministratör</h4>
      <p style={{fontStyle:"italic"}} className='text'>Fordonsindustri</p>
        </Grid>
      <Grid item xs={12} sm={3}>
      <h4>IT Tekniker</h4>
      <p style={{fontStyle:"italic"}} className='text'>Myndighet</p>
        </Grid>
      </Grid>
    </div>
    <footer style={{backgroundColor:"#1f1f1f",paddingTop:"3%",marginTop:"7%",paddingBottom:"5%",marginBottom:"0%"}}>
      <Container>
      <Grid container marginTop={"4%"} >
        <Grid item xs={6} style={{textAlign:"right"}}>
        <p className='footerH'>Följ oss:  </p>
        </Grid>
        <Grid item xs={6} >
        <img style={{marginTop:"0.5%", width:"30px"}} src={require('./linkedin.png')} /> 
        </Grid>
        <Grid container style={{textAlign:"center"}}>
<Grid item xs={12} md={2}>
  <li  className='footerUl'>
  Lediga jobb
  </li>
  </Grid>
  <Grid item xs={12} md={2}>
  <li  className='footerUl'>
  Registrera CV
  </li>
  </Grid>
  <Grid item xs={12} md={2}>
  <li  className='footerUl'>
  För företag
  </li>
  </Grid>
  <Grid item xs={12} md={2}>
  <li  className='footerUl'>
  Integritetspolicy
  </li>
  </Grid>
  <Grid item xs={12} md={2}>

  <li  className='footerUl'>
  Cookies
  </li>
  </Grid>
  <Grid item xs={12} md={2}>
  <li  className='footerUl'>
  Kontakt
  </li>
  </Grid>

        </Grid>
        <Grid item xs={12} style={{textAlign:"center"}}>
        <p className='footerH'>Landsvägen 57, 172 65 Sundbyberg, info@quest.se</p>
        </Grid>
        <Grid item xs={12} sm={3} style={{textAlign:"center"}}>

  <img style={{width:"80px"}} src={require('./bfa-invt.png')} /> 
  </Grid>
 
  <Grid item xs={12} sm={3} style={{textAlign:"center"}}>
  <img style={{width:"150px"}} src={require('./kvalitetspartner_guldsigill_2019_2.png')} /> 
  </Grid>
<Grid item xs={12} sm={3} style={{textAlign:"center"}}>
  <img style={{width:"200px",marginTop:"7%"}} src={require('./display.png')} /> 
  </Grid>
  <Grid item xs={12} sm={3} style={{textAlign:"center"}}>
 
  <img style={{width:"80px"}} src={require('./di_gasell_gasellvinnare_2018_stende.png')} />
        </Grid>
        </Grid>
        
      </Container>
      
    </footer>
    <div style={{backgroundColor:"black", marginRight:"0%", marginLeft:"0%"}}>
   <Grid container>
    <Grid item xs={6}>
  <p className='rights'>©Quest Consulting Sverige AB, All Rights Reserved</p>
  </Grid>
  <Grid item xs={6} style={{textAlign:"right"}}>
  <p className='rights'> → Admin</p>
  </Grid>
  </Grid>
     </div>
     </div>

  );
}

/*window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky")
  } else {
   menu.classList.remove("sticky");
  }
}*/
export default App;
