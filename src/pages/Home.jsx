import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";
import { contenfulCLient } from "../utils/createContenfulClient";




function Home(){
    const [Categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    const getCategories = async () => {
       const response = await contenfulCLient.getEntries({
            content_type: 'blogCategory5j',

         });

        setCategories(response.items);
         console.log(response);




    };
    
    const getPosts = async () =>{

        try{
           
          const response = await contenfulCLient.getEntries({
             content_type: 'blogPost5j',
             limit: 5,
             order: '-sys.createdAt',         

          });
          console.log(response.items);
          setPosts(response.items);
        }catch(error){
            console.log('erro post',error) ;
            setPosts([]);
        }
    };

    useEffect(() => {
        getCategories();
        getPosts();
    },[]);//useEffect -. onload do compoonente home
    return (

       <Layout>
          <div className="container mt-4 mb-4">
            <div className="row"> 
                <main className="col-md-8">
                    <h2 className="mb-3">ùltimos posts</h2>
                    {posts.map((item) => (

                              <Card 
                              key={item.sys.id}
                              title={item.fields.blogPostTitle}
                              text={item.fields.blogPostDescription}
                              link={'/post/'+ item.fields.blogPostSlug}
                              />


                    ))}
                    

              

                    <Link to="/posts?page=1"  className="btn btn-dark mt-4">
                             Ver todos os posts
                         
                    </Link>
                    
                </main>
                <aside className="col-md-4">
                    <h2>Categorias</h2>
                    <ul>
                       {Categories.map((item) => <li key={item.sys.id}>{item.fields.blogCategoryTitle}</li>)}
                    </ul>
                </aside>


            </div>
         
          </div>

       </Layout>


    );


}

export default Home;