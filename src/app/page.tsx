import Link from "next/link";

import blogsData from "../data/blogs.json"

export default function Home() {
  return (
    <div className="flex justify-between w-full space-x-5">
      <div className="w-full xl:w-[780px]">
        {/* <h1 className="text-xl font-bold">
          Blogs
        </h1> */}
        <ul>
          {
            blogsData.map((blog) => {
              const date = new Date(blog.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
              return (
                <li key={blog.slug} className="border-b mb-3 mt-2 w-full">
                  <Link href={`/blog/${blog.slug}`} className="p-0">
                    <div className="px-2 py-5">
                      <div className="flex  items-start justify-between space-x-5 w-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="">
                            <h3 className="text-sm xs:text-lg lg:text-xl line-clamp-2 font-bold text-gray-950">{blog.title}</h3>
                            <p className="text-xs xs:text-sm lg:text-base line-clamp-3 xs:line-clamp-2 font-light text-gray-800 ">{blog.description}</p>
                          </div>
                          <div className="hidden lg:flex text-xs lg:text-sm items-center justify-start space-x-1.5 pt-4">
                            <img className="w-6 h-6 rounded-full" src={blog.author.avatar} />
                            <span className="text-gray-800 font-semibold">{blog.author.name}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
                            <span className="text-gray-700">{date}</span>
                          </div>
                        </div>
                        <div className="w-full flex-shrink-0 max-w-24 h-20 sm:max-w-32 sm:h-24 lg:max-w-44 lg:h-32">
                          <img className="w-full h-full rounded-md col-span-3 overflow-hidden object-fill" src={blog.thumbnail} />
                        </div>
                      </div>
                      <div className="flex lg:hidden text-[10px] xs:text-xs lg:text-sm items-center justify-start space-x-1.5 pt-4">
                        <img className="w-6 h-6 rounded-full" src={blog.author.avatar} />
                        <span className="text-gray-800 font-semibold">{blog.author.name}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
                        <span className="text-gray-700">{date}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="hidden tablet:block w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[380px]">
        <div className="w-full h-auto sticky top-16 mt-5 ">
          <div className="w-full p-5 rounded-md bg-gray-50">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-900 border-b pb-5">Recently Posted</h2>
            <ul>
              {
                blogsData.slice(3, 7).map((blog) => {
                  const date = new Date(blog.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                  return (
                    <li key={blog.slug} className="border-b mb-3 mt-2 w-full">
                      <Link href={`/blog/${blog.slug}`} className="p-0">
                        <div className="py-5">
                          <div className="flex justify-between items-start space-x-2.5">
                            <div className="flex flex-col justify-start">
                              <div className="flex  items-start lg:items-center justify-start space-x-3 lg:space-x-1.5 pb-2">
                                <img className="w-6 aspect-square rounded-full" src={blog.author.avatar} />
                                <div className="flex w-full flex-col lg:flex-row">
                                  <span className="text-sm lg:text-[11px] xl:text-xs text-gray-800 font-semibold">{blog.author.name}</span>
                                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                  {/* `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}` */}
                                  <span className="text-[11px] xl:text-xs ml-auto lg:ml-3 text-gray-700">{date}</span>
                                </div>
                              </div>
                              <h3 className="text-sm xl:text-base line-clamp-2 font-semibold text-gray-950">{blog.title}</h3>
                            </div>
                            <img className="w-16 lg:w-20 aspect-square object-fill rounded-md" src={blog.thumbnail} />
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
