import { motion } from "motion/react"
import Drag from "./Drag"
function Swiping () {
    interface foodData  {
        name: string,
        type: string,
        img: string,
        // for now just these two

    }
    
    const tempData : foodData[] = [
          {name: "croissant",
            type:"vegetarian",
            img:"https://images.unsplash.com/photo-1652172600474-32937eefee09?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            name:"veggie pizza",
            type:"vegetarian",
            img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"hot-dog",
            type:"meat",
            img:"https://plus.unsplash.com/premium_photo-1683121324502-94bd9fa0202e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name:"steak",
            type:"meat",
            img: "https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <div className="bg-background h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            {/* the food container */}
            <div className="bg-orangee p-10 flex justify-center items-center flex-col ">
                <img src={tempData[0].img} alt="random thing for now" />
                <h3 className="text-white">{tempData[0].name}</h3>

            </div>
            
            {/* the container letting u alternate */}
            <div>
                 <p className="text-green">Veggie options</p>
            </div>
           
           <div className="absolute bottom-6">
            <p>scroll down</p>
           </div>

<Drag />

        </div>
    )
}
export default Swiping