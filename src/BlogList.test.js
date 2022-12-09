// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import BlogList from './BlogList';

// const MockBlogList = () => {
//     return (
//         <BrowserRouter>
//             <BlogList blogs={blogs} title={title} />
//         </BrowserRouter>
//     )
// }

// describe("BlogList", () => {
//     it("should render the first bloglist element", async () => {
//         render(<MockBlogList />);
//         const blogDivElement = await screen.findByTestId("blog-item-0")
//         expect(blogDivElement).toBeInTheDocument();
//     });
// })