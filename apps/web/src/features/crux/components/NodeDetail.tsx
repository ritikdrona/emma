import { MouseEventHandler } from 'react'
import { Node } from '../types/Node'

const NodeDetail = ({
    node,
    onClick
}: {
    node: Node
    onClick: MouseEventHandler
}) => {
    return (
        <li
            onClick={onClick}
            className="relative text-justify py-3 pl-4 pr-10 my-2 border rounded border-slate-700 border-spacing-8"
        >
            <div>{node.text}</div>
            <i className="absolute right-4 top-4 fa-solid fa-angle-right"></i>
        </li>
    )
}

export default NodeDetail