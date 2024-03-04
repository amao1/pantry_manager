import Image from "next/image";
import Link from "next/link";
import styles from './header.module.css'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const {heroContent, heroWrapper, imageWrapper, loginButton } = styles

export default function Home() {
  return (
    <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src='/hero.jpg'
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
        />
      </div>

      <div className={heroContent}>
        <h1>Welcome to your pantry manager!</h1>
        <p>This website provides an easy solution to keeping track of your pantry and recipes.</p>
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span className="text-center">Log in to get started</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>

    </div>
  );
}
