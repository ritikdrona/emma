import constants from '../../constants'
import { useGet } from '../../lib/hooks/useGet'
import { usePost } from '../../lib/hooks/usePost'

const API_URL = constants.API_URL + 'crux/'

export const useGetNodesByParentId = async (parentId: string | null) => {
    let response = await useGet(API_URL + 'nodes/' + parentId)
    return response.nodes
}

export const usePostNode = async (parentId: string | null, node: Node) => {
    let response = await usePost(API_URL + 'nodes/', node)
    return response
}
