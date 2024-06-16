import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import { contenfulCLient } from "../utils/createContenfulClient";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";




function Post(){
  const{slug} = useParams();
  const[post, setPost] = useState(null); //o estado inicial do post é null
  const getPost = async () => {

    try {
       const response = await contenfulCLient.getEntries({
         content_type: 'blogPost5j',
         'fields.blogPostSlug': slug,
       });
       console.log(response);
       setPost(response.items[0] || null);
    } catch (error) {
      console.log('Erro ao buscar', error);
    }
  };


  useEffect(() => { getPost();},[]);
     //no load do documento, chama o método get Post
 return (


    <Layout>
     <main className="container my-4">
        <div className="row">
            <div className="col">
            {!post && <div>Carregando...</div>}

            {post && (
                            <>
                                <h1>{post.fields.blogPostTitle}</h1>
                        
                                <div 
                                    dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.fields.blogPostContent)}}
                                />
                                
                                <Link to="/" className="btn btn-primary mt-4">
                                    Voltar para Home
                                </Link>
                            </>
                        )}
            </div>
        </div>
     </main>

    </Layout>
  
    
 )

}
export default Post;