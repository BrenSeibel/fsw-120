import React from "react";
import "./App.css"; 
import Header from "./blogprops/header"
import Footer from "./blogprops/footer"
import BlogList from "./blogprops/BlogList";

//function components
function App() {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
export default App;
