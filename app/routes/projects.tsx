/* eslint-disable jsx-a11y/img-redundant-alt */
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { hygraph } from "~/utils/hygraph.server";
import type { Project } from "~/utils/interface";

interface iAppProps {
  projects: Project[];
}

// eslint-disable-next-line no-empty-pattern
export async function loader({}: LoaderArgs) {
  const query = gql`
    query MyQuery {
      projects(orderBy: publishedAt_DESC) {
        id
        link
        overview
        title
        titleImage {
          url
        }
        publishedAt
      }
    }
  `;

  const data: { projects: Project[] } = await hygraph.request(query);
  return json({ projects: data.projects });
}

const Projects = () => {
  const { projects } = useLoaderData() as iAppProps;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800 dark:shadow-gray-700/25"
          >
            <img
              src={project.titleImage.url}
              alt={`Image of ${project.title}`}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
              >
                Learn More!
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
