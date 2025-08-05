import { useLocation, useNavigate } from "react-router-dom";
import { IWork } from "../../Types/our-work";
import { useEffect } from "react";
import "./Detail.css"


const WorkDetails = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const data : IWork = location.state ;
  const imageBaseUrl = import.meta.env.VITE_BASE_URL ;

  useEffect(() => {
    data == null || data == undefined ? navigate("/") : null;
  }, []);

  return (
    <div>
      
      <div className="page-title dark-background py-10 text-center text-white"
      style={{ 
        backgroundImage: `url(${imageBaseUrl + data.cover.formats.large?.url || '/img/mission.jpg'} )` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container relative">
          <h1 className="text-4xl font-bold">{data.title}</h1>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4" style={{padding:'40px 0px'}}>
        <article className="max-w-3xl mx-auto">
          <div className="content space-y-6">
            {
              data.description.map((desc , i)=>(
                <>
                {desc.type == "heading" && <h3 key={i} className="text-2xl font-semibold">{desc.children.map((chl)=> <span>{chl.text}</span> )}</h3>}
                {desc.type == "paragraph" && <p key={i}>{desc.children.map((chl)=> <span>{chl.text}</span> )}</p>}  
                </>
              ))
            }
          </div>
        </article>
      </div>
    </div>
  );
};

export default WorkDetails;

// import { FC } from "react";
// import { useLocation } from "react-router-dom";
// import { IWork } from "../../Types/our-work";


// const BlogDetails = () => {

//   const location = useLocation();
//   const data : IWork = location.state ;

//   return (
//     <div>
//       {/* Page Title */}
//       <div className="page-title dark-background py-10 text-center text-white">
//         <div className="container relative">
//           <h1 className="text-4xl font-bold">Blog Details</h1>
//           <p className="mt-2 text-lg">
//             Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
//             placeat quibusdam quia assumenda numquam molestias.
//           </p>
//           <nav className="breadcrumbs mt-4">
//             <ol className="flex justify-center space-x-2">
//               <li><a href="/" className="text-blue-500">Home</a></li>
//               <li className="text-gray-400">/ Blog Details</li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Blog Details Section */}
//       <div className="container mx-auto py-10 px-4">
//         <article className="max-w-3xl mx-auto">
//           <div className="post-img mb-6">
//             <img
//               src="/assets/img/blog/blog-1.jpg"
//               alt="Blog Cover"
//               className="w-full rounded-lg shadow-md"
//             />
//           </div>

//           <h2 className="text-3xl font-bold mb-4">
//             Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
//           </h2>

//           <div className="meta-top flex space-x-4 text-gray-500 text-sm mb-6">
//             <span className="flex items-center"><i className="bi bi-person mr-2"></i><a href="/blog-details" className="text-blue-500">John Doe</a></span>
//             <span className="flex items-center"><i className="bi bi-clock mr-2"></i><time dateTime="2022-01-01">Jan 1, 2022</time></span>
//             <span className="flex items-center"><i className="bi bi-chat-dots mr-2"></i><a href="/blog-details" className="text-blue-500">12 Comments</a></span>
//           </div>

//           <div className="content space-y-6">
//             <p>
//               Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.
//             </p>
//             <p>
//               Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur.
//             </p>
//             <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
//               "Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut."
//             </blockquote>
//             <p>
//               Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore.
//             </p>
//             <h3 className="text-2xl font-semibold">Et quae iure vel ut odit alias.</h3>
//             <p>
//               Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque.
//             </p>
//             <img src="/assets/img/blog/blog-inside-post.jpg" className="w-full rounded-lg shadow-md" alt="" />
//             <h3 className="text-2xl font-semibold">Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
//             <p>
//               Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum.
//             </p>
//           </div>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

