import { NextSeo } from 'next-seo'

import HomeLayout from '@/components/@Layout/HomeLayout'
import Count from '@/containers/Count'
import withAuthGuard from '@/hocs/withAuthGuard'

function CountPage() {
  return (
    <>
      {/* output: 똑똑한개발자 |  */}
      {/* titleTemplate는 /configs/seo/config.ts에서 변경 가능합니다. */}
      <NextSeo title="count" />
      <HomeLayout content={<Count />} />
    </>
  )
}

export default withAuthGuard(CountPage)
