import Nav from "@components/Nav";
import Feed from "@components/Feed";



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
     <h1 className="head_text text-center">Discover & Share</h1>
     <br className="max-mad:hidden"/>
     <span className="orange_gradient text-center">AI-Powered Prompts</span>
     <p className="desc text-center">
     Sharepoint is an open-source AI prompting tool for modern world to discover, create and share creative prompts
     </p>
     {/*  feed */}
     <Feed />
    </section>
  )
}

export default Home
