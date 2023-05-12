import { StarIcon, ViewIcon } from '@chakra-ui/icons'
import { Card, CardBody, Heading, Stack, Link, Text, CardFooter, Box } from '@chakra-ui/react'
import Image from 'next/image'

import { Props } from '../types/components/AnimeCard'

const AnimeCard = ({ animeData, cardWidth }: Props) => {
  return (
    <Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <DesktopCard animeData={animeData} cardWidth={cardWidth} />
      </Box>
    </Box>
  )
}

const DesktopCard = ({ animeData, cardWidth }: Props) => {
  return (
    <Card w={cardWidth}>
      <CardBody pb={'0'}>
        <Image src={animeData.image} alt='anime_image' width={500} height={500} />
        <Stack mt={6} spacing={3}>
          <Heading fontSize={'xl'}>{animeData.name}</Heading>
          <Text fontSize={'sm'}>
            公式サイト :&nbsp;
            <Link href={animeData.public_url} color={'brand'}>
              {animeData.public_url}
            </Link>
          </Text>
          <Text as={'a'} cursor={'pointer'}>
            動画サイトで見る
          </Text>
        </Stack>
      </CardBody>
      <CardFooter m={'0 0 0 auto'} p={'0 10px 10px 10px'}>
        <Box textAlign={'center'} cursor={'pointer'} mr={'10px'}>
          <ViewIcon color={'brand'} />
          <Text fontSize={'12px'}>これ見た</Text>
        </Box>
        <Box textAlign={'center'} cursor={'pointer'}>
          <StarIcon color={'favo'} />
          <Text fontSize={'12px'}>お気に入り</Text>
        </Box>
      </CardFooter>
    </Card>
  )
}

export default AnimeCard
