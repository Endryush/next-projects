import { useRouter } from "next/router";

export default function Search () {
  const router = useRouter()
  const query = router?.query?.id
  return (
    <div>
      <h1>account/{query}/search</h1>
    </div>
  )
}