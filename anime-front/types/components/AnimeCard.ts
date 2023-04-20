export interface Props {
  animeData: AnimeData
  cardWidth: string
}

export interface AnimeData {
  id: number
  anime_api_id: number
  name: string
  for_sex: number
  image: string
  season: number
  public_url: string
  product_companies: string
  created_year: number
}
