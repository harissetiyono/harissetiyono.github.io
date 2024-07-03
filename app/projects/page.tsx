import projectsData from '@/data/projectsData'
import ListLayout from '@/layouts/ListLayout'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { allProjects } from 'contentlayer/generated'
import { allCoreContent, sortPosts
} from 'pliny/utils/contentlayer'

const POSTS_PER_PAGE = 6

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const project = allCoreContent(sortPosts(allProjects))
  const pageNumber = 1
  const initialDisplayProject = project.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(project.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          </p>
        </div>
        <div className="container py-12">
          Others
          <div className="-m-4 flex flex-wrap">
            {project.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.summary}
                imgSrc={d.images}
                href={'/'+d.path}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Others Stuff
        </h2>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
