import { useState } from "react";
import useMedia from "../../hooks/use-media";
import Button from "../button";
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'


export default function ButtonGroups({ buttons }) {

    const [open, setOpen] = useState(false)
    const isMobile = useMedia(500);

    const prepareButtons = (
        buttons.map((button, index) => (
            <Button key={index} {...button.attributes}>
                {button.title}
            </Button>
        ))
    )

    if (isMobile) {
        return (
            <>
                <button
                    onClick={() => setOpen(!open)}
                    className="w-10 h-10 flex items-center justify-center text-zinc-600 rounded bg-zinc-200"
                >
                {open  
                    ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
                    : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg> 
                } 
                </button>
                
                <BottomSheet open={open}
                    onDismiss={() => setOpen(false)}
                >
                    <nav className="grid p-4 gap-y-2">
                        {prepareButtons}
                    </nav>

                </BottomSheet>
            </>
        )
    }

    return (
        <nav className="flex gap-2.5">
            {prepareButtons}
        </nav>
    )

};
