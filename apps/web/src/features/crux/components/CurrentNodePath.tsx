import { MouseEventHandler } from 'react'

const CurrentNodePath = ({
    goToParentNode,
    reset
}: {
    goToParentNode: MouseEventHandler
    reset: MouseEventHandler
}) => {
    return (
        <div className="fixed top-28 container px-20">
            <div className="flex justify-between text-lg bg-slate-800 text-white rounded px-3 py-2">
                Current Path: / ABC
                <div className="flex">
                    <div onClick={reset} className="px-2">
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
                    <div onClick={goToParentNode} className="px-2">
                        <i className="fa-solid fa-arrows-rotate"></i>
                        <i className="fa-solid fa-folder-arrow-up"></i>
                        <i className="fa-regular fa-folder-arrow-up"></i>
                        <i className="fa-sharp fa-solid fa-folder-arrow-up"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentNodePath
