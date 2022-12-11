import { createBrowserRouter } from 'react-router-dom';
import { Contact, Projects } from '../components';
import Home from '../components/Home';
import { AboutMe, Blog } from '../pages/index';
import ProjectCaseStudy from '../components/Projects/ProjectCaseStudy';
// import ContactMe from '../pages/ContactMe';
import Root from '../root/Root';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact-me',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/project-case-study/:id',
        element: <ProjectCaseStudy />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-kohl-tau-84.vercel.app/myprojects/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
