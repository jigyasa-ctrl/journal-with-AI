import { useState } from 'react';
import './App.css';
import {submitJournal} from "./components/connector"

// Loading component with spinning icon
const Loading = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
    <span className="ml-2">Loading...</span>
  </div>
);

function App() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading]= useState(false)
  const [aiResponse, setAiresponse] = useState("")
  const handleSubmit = async function(e) {
    setIsLoading(true)
    let url = "http://localhost:8000/journal"
    const response = await submitJournal(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ input })
    }, setIsLoading)
    if(response){
      setAiresponse(response.message)
      setIsLoading(false)
    }
  }
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center 
                bg-gradient-to-br from-orange-100 via-rose-50 to-yellow-100">
      <header className="text-center mb-8">
        <h1 className="text-[70px] font-bold text-orange-500 tracking-tight mb-2">
          Journal with <span className="text-orange-600">AI</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Reflect on your day. Let AI help you find patterns in your thoughts.
        </p>
      </header>
      <div className='flex flex-row justify-space-between items-center gap-20'>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px] max-w-[90%] transition-all hover:shadow-2xl">
        <textarea
          className="w-full h-40 border-2 border-orange-200 focus:border-orange-400 
                     rounded-xl p-4 text-gray-700 resize-none outline-none
                     placeholder:text-gray-400 transition"
          placeholder="Hi, how are you feeling today?"
          rows={10}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="text-center mt-5">
          <button
          onClick={handleSubmit}
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-xl 
                       hover:bg-orange-600 active:scale-95 transition-all duration-200"
          >
            {!isLoading ? "Submit" : <Loading />}
          </button>
        </div>
      </div>

      {!isLoading && aiResponse && <section className="mt-8 w-[500px] max-w-[90%]">
        <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-orange-400">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-xl font-semibold text-gray-800">AI Analysis</h3>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100 overflow-auto">
            <p className="text-gray-700 leading-relaxed text-center italic overflow-auto h-[300px]">
              "{aiResponse}"
            </p>
          </div>
          <div className="mt-3 text-xs text-gray-500 text-center">
            ✨ Powered by AI insights
          </div>
        </div>
      </section>}
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        Your entries are private and stay on your device.
      </footer>


    </div>
  );
}

export default App;
