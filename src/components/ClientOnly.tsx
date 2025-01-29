import { isNullish } from '@toktokhan-dev/universal'

import { useClient } from '@/hooks/useClient'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const ClientOnly = ({ children, fallback }: ClientOnlyProps) => {
  const isClient = useClient()
  if (!isClient) return isNullish(fallback) ? null : fallback

  return children
}

export default ClientOnly
