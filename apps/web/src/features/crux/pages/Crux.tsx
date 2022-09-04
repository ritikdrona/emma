import { useEffect, useState } from 'react'
import { useSessionStorage } from '../../../lib/hooks/useSessionStorage'
import { useSessionStorageJSON } from '../../../lib/hooks/useSessionStorageJSON'
import { useGetNodesByParentId } from '../api'
import CurrentNodePath from '../components/CurrentNodePath'
import NodeDetail from '../components/NodeDetail'
import { Node } from '../types/Node'

const Crux = () => {
    const { state: currentParentId, setState: setCurrentParentId } =
        useSessionStorage(null, 'currentParentId')
    const [nodes, setNodes] = useState<Node[]>([])
    const { state: pathNodes, setState: setPathNodes } = useSessionStorageJSON<
        Node[]
    >([], 'pathNodes')

    useEffect(() => {
        getNodesByCurrentParentId()
    }, [currentParentId])

    // useEffect(() => {
    //     console.log('path nodes updated', pathNodes)
    // }, [pathNodes])

    const getNodesByCurrentParentId = async () => {
        let response = await useGetNodesByParentId(currentParentId)
        setNodes(response)
    }

    const onNodeClick = (node: Node) => {
        setCurrentParentId(node._id)
        setPathNodes((currentPathNodes) => [...currentPathNodes, node])
    }

    const goToParentNode = () => {
        if (pathNodes.length == 1) {
            // current parent is root
            reset()
        } else if (pathNodes.length > 1) {
            let parentNode: Node = pathNodes.at(pathNodes.length - 2) as Node
            setCurrentParentId(parentNode._id)
            setPathNodes((currentPathNodes) =>
                currentPathNodes.slice(0, currentPathNodes.length - 1)
            )
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
