import { useRouter } from 'next/router'
import { useEffect } from 'react'

const profile = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.query.confirmed) {
      router.push('/signup')
    }
  }, [router.query])

  return <>profile</>
}

export default profile
