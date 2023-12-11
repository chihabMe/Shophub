import { trpc } from "../utils/trpc";


const HomePage = ()=>{
  const {isLoading,data} =  trpc.books.getAllBooks.useQuery();
  if(isLoading)return <h1>loading</h1>
  if(!data)return <h1>error</h1>

  return (
  <div>
      <h1>
      {data}
      </h1>
  </div>
  )

  
}
export default HomePage;
