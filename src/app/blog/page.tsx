"use client"

import blogsDataJSON from "@/data/blogs.json"
import { useQuery } from "react-query";
import BlogCard from "./components/BlogCard";
import Recommented from "./components/Recommented";

export default function Blogs() {

  const { data: blogsData, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const data = await getBlogsData()
      return data
    },
  })

  if (!blogsData) {
    return <div>Meow</div>
  }

  return (
    <div className="flex justify-between w-full space-x-5">
      <div className="w-full xl:w-[780px]">
        <ul>
          {
            blogsData.map((blog, index) => {
              return <BlogCard blog={blog} key={index} />
            })
          }
        </ul>
      </div>
      <div className="hidden tablet:block w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[380px]">
        <div className="w-full h-auto sticky top-16 mt-5 ">
          <div className="w-full p-5 rounded-md bg-blue-50 bg-opacity-50">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-900 border-bottom pb-5">Recently Posted</h2>
            <ul>
              {
                blogsData.slice(3, 7).map((blog) => {
                  return <Recommented blog={blog} />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getBlogsData() {
  return blogsDataJSON
}