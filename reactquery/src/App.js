import {QueryClient, QueryClientProvider } from "react-query";
import User from "./components/User";


const client = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={client}>
        <User/>
      </QueryClientProvider>
  );
}

export default App;
