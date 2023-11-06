import { useLoaderData } from "react-router-dom"

export const Home = () => {
    console.log(useLoaderData())
  return (
    <div>Home</div>
  )
}
