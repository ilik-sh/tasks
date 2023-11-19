import { $host } from "@/api/api";

type CharacterResponse = {
    info: Info,
    results: Character[]
}
type Info = {
    count: number,
    pages: number,
    next: string,
    prev: string
}
type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {name: string, url: string},
    location: {name: string, url: string},
    image: string,
    episode: string[],
    url: string,
    created: string,
}

export async function getCharactersFrom (page: number) : Promise<CharacterResponse> {
    const { data } = await $host.get("character", {params : {page: page}})
    return data
}

export async function getEverySecondCharacterPageStartingFrom (page = 2): Promise<Character[]> {
    let result = await getCharactersFrom(page)
    const lastPageNumber = result.info.pages
    if (page + 2 > lastPageNumber) { return [] } 

    if (result.results.length > 0) {
        return result.results.concat(await getEverySecondCharacterPageStartingFrom(page + 2))
    }

    return []
}