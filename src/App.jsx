import './App.css'

function App() {

  return (
    <div style={{display:"flex",justifyContent:"center",background: "#34495e", height:"100vh",padding:10}}>
      <div style={{
                    borderRadius:20,
                    // backgroundColor: "white",
                    marginRight: 3
                  }}>
          <div>
            <ProfileCard />
            <br/>
          </div>
      </div>

      <div style={{}}>
        <div>
          <div>
            <PostComponent/>
            <br />
          </div>  
          <div>
            <PostComponent/>
          </div>
        </div>
      </div>

    </div>
  )
}
const styles = { width: 500, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent(){
  return (
    <div style={styles}>
      <div style={{display: "flex"}}>
        <img src='https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_normal.jpg'  style={{width:30, height:30, borderRadius: 20}}></img>
        <div style={{fontSize:10, marginLeft: 10}}>
          <b>100XDevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
        
      </div>
      <div>
        <span>My first React learnings.</span>
      </div>
      <div style={{justifyContent:"center"}}>
        <img src='https://bit.ly/3Y0duim'/>
      </div>
    </div>
  )
}

function ProfileCard(){
  return (
    <div style={{
                  justifyContent:"center", 
                  backgroundColor:"white", 
                  borderRadius:10,
                  width: 300,
                  height: 300,
                  position: "relative",
                  marginRight: 3,
                  padding: 10
                  }}>
      <div style={{backgroundColor:"#95a5a6",position: "relative",borderRadius: 10}}>
        <img src=''  style={{width:300, height:100, borderRadius: 10}}></img>
      </div>
      <div style={{
                    display:"flex",
                    // width: 100,
                    position: "relative",
                    top: -30,
                    // left: 0,
                    // zIndex: 10,
                    // margin: 20,
                    justifyContent:"center", 
                    // borderWidth:2
                    }}>
        <img src='https://pbs.twimg.com/profile_images/1599003507415166977/pRYwiTo3_normal.jpg'  style={{width:30, height:30, borderRadius: 20, objectFit:"cover"}}></img>
      </div>
      <div >
        <div style={{textAlign:"center"}}>Inesh Reddy</div>
        <br/>
        <div style={{textAlign:"center"}}>Working with WebRTC</div>
        <br/>
      </div>

      <div style={{padding:"20"}}>
        <div style={{display:"flex", justifyContent:'space-between'}}>
          <b>Profile Viewers</b>
          <b>100</b>
        </div>
        <div style={{display:"flex", justifyContent:'space-between'}}>
          <b >connections</b>
          <b>100</b>
        </div>
      </div>
      
    </div>
  )
}

export default App
 