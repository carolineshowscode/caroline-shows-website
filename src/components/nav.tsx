import Link from 'next/link';

export default function Nav() {
  return (
    <nav className=''>
      <ul className='flex space-x-4 m-0'>
        <li className='bg-primary p-2 hover:scale-110'>
          <Link href="/">Home</Link>
        </li>
        <li className='bg-secondary p-2 hover:scale-110'>
          <Link href="/about">About</Link>
        </li>
        <li className='p-2 hover:scale-110'>
          <a href='mailto:caroline.e.shows@gmail.com'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}