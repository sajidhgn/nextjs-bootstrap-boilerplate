import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not_found_wrapper'>
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='btn dbtn black'>Return Home</Link>
    </div>
    </div>
  )
}