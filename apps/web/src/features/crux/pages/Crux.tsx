import React, { useEffect, useState } from 'react'
import { useSessionStorage } from '../../../lib/hooks/useSessionStorage'
import { useGetNodesByParentId } from '../api'
import CurrentNodePath from '../components/CurrentNodePath'
import NodeDetail from '../components/NodeDetail'
import { Node } from '../types/Node'

const Crux = () => {
    const { state: currentParentId, setState: setCurrentParentId } =
        useSessionStorage(null, 'currentParentId')
    const [nodes, setNodes] = useState<Node[]>([])
    const [pathNodes, setPathNodes] = useState<Node[]>([])

    useEffect(() => {
        getNodesByCurrentParentId()
    }, [currentParentId])

    const getNodesByCurrentParentId = async () => {
        let response = await useGetNodesByParentId(currentParentId)
        setNodes(response)
    }

    const onNodeClick = (node: Node) => {
        setCurrentParentId(node._id)
        console.log(node)
        console.log(pathNodes)
        setPathNodes((pathNodes) => [...pathNodes, node])
    }

    const goToParentNode = () => {
        console.log('cedsceds')
        console.log(pathNodes)
        if (pathNodes.length > 0) {
            console.log('in loop')
            let parentNode: Node = pathNodes.at(pathNodes.length - 2) as Node
            console.log(parentNode)
            setCurrentParentId(parentNode._id)
            setPathNodes((pathNodes) => {
                pathNodes.pop()
                console.log('new path nodes', pathNodes)
                return pathNodes
            })
        }
    }

    const reset = () => {
        setPathNodes([])
        setCurrentParentId(null)
    }

    return (
        <div>
            <CurrentNodePath goToParentNode={goToParentNode} reset={reset} />
            <div className="container px-20">
                <ul>
                    {nodes.map((node) => {
                        return (
                            <NodeDetail
                                node={node}
                                key={node._id}
                                onClick={() => onNodeClick(node)}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Crux
