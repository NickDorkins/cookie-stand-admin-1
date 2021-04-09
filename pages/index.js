import Head from 'next/head'
import { useState } from "react"
// import styles from '../styles/Home.module.css'

export default function Home() {

const [question, setQuestion] = useState("Report Table Coming Soon...")

// const [reply, setReply] = useState("Ask Me Anything!")

function questionAskedHandler(event){
  event.preventDefault();
  // alert(event.target.question.value)

  // .5 means 50/50 chance
  // const randomReply = Math.random() > .5 ? "YES" : "NO"

  setReply(randomReply)
  setQuestion(event.target.question.value)

}

  return (
    <div className="">
      <Head>
        <title>Cookie Stand </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin"/>

      {/* <header className="flex p-4 bg-gray-500 justify-items-center text-gray-50 ">
        <h1 className="text-xl boarder boarder-color-black">Cookie Stand</h1>
      </header> */}

      <main className="">
        {/* <form onSubmit={questionAskedHandler} className="flex w-1/2 p-2 mx-auto my-4 bg-green-500">
          <input name="question" className="flex-auto pl-1"></input>
          <button className="px-2 py-1 bg-gray-500 text-gray-50">Ask</button>
        </form> */}
        
        
        <form onSubmit={questionAskedHandler} className="flex w-1/2 p-2 mx-auto my-4 text-center bg-green-300">
          <fieldset>
            <div className="justify-items-center">
              <legend className="">Create Cookie Stand</legend>
            </div>
              
            <div className="inline-block ">
              <label>
                <input name="question" className="flex-auto pl-1"></input>
              </label>
            </div>

            <div className="inline-block ">
              <label>
                <input name="question" className="flex-auto pl-1"></input>
              </label>
            </div>

            <div className="inline-block ">
                <label>
                  <input name="question" className="flex-auto pl-1"></input>
                </label>
              </div>
              
            <button className="px-2 py-1 bg-green-350 justify-right text-gray-50 ">Ask</button>
          </fieldset>
        </form>


        {/* <div className="mx-auto bg-gray-900 rounded-full w-96 h-96">
          <div className="relative flex justify-center w-48 h-48 rounded-full item-center bg-gray-50 top-16 left-16 ">
            <p>{reply}</p>
          </div>
        </div> */}

        <h3 className="p-1 text-center boarder">{question}</h3>
        
      </main>

      <footer className="p-4 mt-8 bg-gray-500 ">
        <p className="text-gray-50">Code Fellows</p>
        
      </footer>
    </div>
  )

  function Header(props){
    return(
      <header className="flex p-4 bg-green-400 justify-items-center text-black-500 ">
        <h1 className="text-2xl boarder boarder-color-black">{props.title}</h1>
      </header>
    )
  }
}
