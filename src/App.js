import './App.css';
import NavBar from './Components/navBar/NavBar';
import Profile from './Components/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/contactMe/Contact';
import ProjectList from './ProjectList';
const projects=[{
  image:"https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?cs=srgb&dl=pexels-pixabay-210243.jpg&fm=jpg",
  title:"Project 1",
  des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.",
  linkName:"Github Link",
  },
  {
    image:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=pexels-pixabay-371589.jpg&fm=jpg",
    title:"Project 2",
    des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.",
    linkName:"Github Link",
  },
  {
      image:"https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-443446.jpg&fm=jpg",
      title:"Project 3",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.",
      linkName:"Github Link",
  },
  {
        image:"https://images.pexels.com/photos/675764/pexels-photo-675764.jpeg?cs=srgb&dl=pexels-tobi-675764.jpg&fm=jpg",
        title:"Project 4",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.",
        linkName:"Github Link",
  }
  ]
  
function App() {
  const fullName = "John Doe";
  const imgURL="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg";
  return (
    <div className="App">
      <NavBar />
      <Profile fullName={fullName}>
        <img style={{borderRadius:"100%", width:' 250px',
 height: '250px'}} src={imgURL} alt="doe"/>
      </Profile>
      <ProjectList projects={projects}/>
      <Contact />
      <footer style={{backgroundColor:"black", height:70}}>
        <h5 style={{color:"white",paddingTop:30}}>Copyrights © GOMYCODE 2022</h5>
      </footer>

    </div>
    
  );
}

export default App;
