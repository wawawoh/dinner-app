"use client"

import * as motion from "motion/react-client"
import { useState } from "react"
export default function Drag() {
    const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(
        null
    )
    const handleDragEnd = (e,info) => {
        console.log("drag has finished",info.offset.y)
        if (Math.abs(info.offset.y) > screen.height * 0.3) {
            console.log("scrolled for more than half the scren", info.offset.y)
        }
    }

    return (
        <>
            <Line direction="x" activeDirection={activeDirection} />
            <Line direction="y" activeDirection={activeDirection} />
            <motion.div
                drag
                dragDirectionLock
                onDirectionLock={(direction) => setActiveDirection(direction)}
                onDragEnd={(e,info) => 
                handleDragEnd(e,info)
                    
                }
                dragConstraints={{ top: 0, right:-20, bottom: 0, left: 0 }}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 25 }}
                dragElastic={0.9}
                whileDrag={{ cursor: "grabbing" }}
                style={box}
            />
        </>
    )
}

function Line({
    direction,
    activeDirection,
}: {
    direction: "x" | "y"
    activeDirection: "x" | "y" | null
}) {
    return (
        <motion.div
            initial={false}
            animate={{ opacity: activeDirection === direction ? 1 : 0.3 }}
            transition={{ duration: 0.1 }}
            style={{ ...line, rotate: direction === "y" ? 90 : 0 }}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box: React.CSSProperties = {
    width: 52,
    height: 52,
    border: "1px solid #f5f5f5",
    position: "absolute",
}

const line: React.CSSProperties = {
    width: 300,
    height: 1,
    borderTop: "1px dashed #f5f5f5",
    position: "absolute",
}
