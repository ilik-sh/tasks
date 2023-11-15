import { $host } from "./api";

export async function getCharacters (page = 1) {
    const {data} = await $host.get("character/", {params: {page: page}})
    return data
}

export async function getEverySecondCharacterPage (page = 2) {
    let result = await getCharacters(page)
    const lastPageNumber = result.info.pages
    if (page + 2 > lastPageNumber) { return }

    if (result.results.length > 0) {
        return result.results.concat(await getEverySecondCharacterPage(page + 2))
    }
}