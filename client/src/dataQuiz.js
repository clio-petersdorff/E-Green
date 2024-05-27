const goodPractices = [
  {
      name: "Eliminate non-essential features",
      profile: "Beginner",
      when: "Before",
      howTo: "Identify and remove features that are not crucial to the core functionality of your application. This helps to simplify the user experience and improve performance."
  },
  {
      name: "Precisely quantify the need",
      profile: "Beginner",
      when: "Before",
      howTo: "Conduct research and gather data to accurately define the requirements of your project. This ensures that you focus on what is truly needed and avoid unnecessary features."
  },
  {
      name: "Optimize user journey",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Analyze and streamline the steps a user takes to complete key tasks in your application. Remove obstacles and simplify navigation to enhance usability."
  },
  {
      name: "Prefer assisted input to autocompletion",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Provide users with suggestions and guided input fields instead of automatic completions. This helps users make informed choices and reduces errors."
  },
  {
      name: "Favor a simple, clean, web-adapted design",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Design your website with simplicity and clarity in mind. Use a clean layout, avoid clutter, and ensure that the design adapts well to different web environments."
  },
  {
      name: "Favor a 'mobile first' approach, or at least adaptive loading",
      profile: "Intermediate",
      when: "Before",
      howTo: "Design your application primarily for mobile devices, ensuring that it functions well on smaller screens. Use adaptive loading techniques to improve performance on mobile networks."
  },
  {
      name: "Respect the principle of quick navigation in history",
      profile: "Beginner",
      when: "Before",
      howTo: "Ensure that users can quickly navigate back to previously visited pages. Implement clear navigation paths and avoid disrupting the browser's back functionality."
  },
  {
      name: "Limit the number of HTTP requests",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Optimize your web pages by combining files and using techniques like sprites to reduce the number of HTTP requests. This improves loading times and overall performance."
  },
  {
      name: "Store static data locally",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Use local storage or indexedDB to store static data on the user's device. This reduces the need for repeated network requests and enhances performance."
  },
  {
      name: "Favor static pages",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Whenever possible, use static HTML pages instead of dynamically generated ones. Static pages load faster and are more reliable."
  },
  {
      name: "Choose the most suitable technologies",
      profile: "Expert",
      when: "Before",
      howTo: "Evaluate and select technologies that best fit the needs of your project. Consider factors like performance, scalability, and ease of maintenance."
  },
  {
      name: "Choose an appropriate data format",
      profile: "Expert",
      when: "Before",
      howTo: "Select data formats that are efficient and appropriate for your application's needs. JSON is often a good choice for web applications, while formats like CSV might be better for data exports."
  },
  {
      name: "Replace official social media sharing buttons",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use custom social media sharing buttons instead of the official ones provided by social platforms. This reduces external scripts and improves loading times."
  },
  {
      name: "Limit the number of CSS files",
      profile: "Expert",
      when: "Before",
      howTo: "Combine multiple CSS files into a single file to reduce HTTP requests. Use tools like CSS preprocessors to manage and compile your stylesheets."
  },
  {
      name: "Prefer CSS over images",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Use CSS properties to create visual effects instead of images. This reduces the number of assets your page needs to load and improves performance."
  },
  {
      name: "Group similar CSS declarations",
      profile: "Expert",
      when: "Before",
      howTo: "Combine CSS rules that share the same properties to reduce redundancy and make your stylesheet more efficient. This also makes maintenance easier."
  },
  {
      name: "Favor standard fonts",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use standard web fonts instead of custom fonts to reduce loading times. If custom fonts are necessary, use web font loading techniques to minimize impact on performance."
  },
  {
      name: "Prefer glyphs over images",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use icon fonts or SVG icons instead of image files for icons. This reduces the number of HTTP requests and allows for better scaling and customization."
  },
  {
      name: "Validate pages with W3C",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Regularly validate your web pages using W3C's validation tools to ensure they adhere to web standards. This helps catch errors and improve compatibility."
  },
  {
      name: "Avoid resizing images in the browser",
      profile: "Beginner",
      when: "Before",
      howTo: "Resize images to their appropriate dimensions before using them on your site. This reduces the browser's workload and improves page load times."
  },
  {
      name: "Use lazy loading",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Implement lazy loading for images and other resources that are not immediately visible. This improves initial page load times and reduces bandwidth usage."
  },
  {
      name: "Minify CSS, JavaScript, HTML, and SVG files",
      profile: "Intermediate",
      when: "After",
      howTo: "Use minification tools to reduce the size of your CSS, JavaScript, HTML, and SVG files by removing unnecessary whitespace and comments. This improves load times."
  },
  {
      name: "Compress CSS, JavaScript, HTML, and SVG files",
      profile: "Intermediate",
      when: "After",
      howTo: "Enable GZIP or Brotli compression on your server to reduce the size of these files as they are transferred over the network, speeding up load times."
  },
  {
      name: "Combine CSS and JavaScript files",
      profile: "Intermediate",
      when: "After",
      howTo: "Merge multiple CSS and JavaScript files into single files to reduce the number of HTTP requests. This can significantly improve page load performance."
  },
  {
      name: "Optimize images",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use image optimization tools to reduce the file size of your images without compromising quality. Choose appropriate formats like JPEG for photos and PNG for graphics."
  },
  {
      name: "Optimize cookie size",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Keep cookies as small as possible by storing only essential information. Avoid using cookies for large data and consider alternative storage methods."
  },
  {
      name: "Choose an 'eco-responsible' hosting provider",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Select a hosting provider that uses renewable energy sources and implements eco-friendly practices. This helps reduce your website's environmental impact."
  },
  {
      name: "Prefer an eco-responsible electricity supplier",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Choose an electricity supplier that generates power from renewable sources. This reduces the carbon footprint of your server and other infrastructure."
  },
  {
      name: "Store data in the cloud",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Utilize cloud storage services for data storage. Cloud providers often offer optimized and scalable solutions that can improve efficiency and performance."
  },
  {
      name: "Avoid redirects",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Minimize the use of URL redirects, as they add extra HTTP requests and delay page loading. Use direct links whenever possible."
  },
  {
      name: "Display static error pages",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Create static HTML error pages to display when errors occur. These load faster than dynamic pages and provide a better user experience during issues."
  },
  {
      name: "Use a CDN",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Implement a Content Delivery Network (CDN) to distribute your content globally. CDNs improve load times and reliability by serving content from servers closest to the user."
  },
  {
      name: "Add Expires or Cache-Control headers",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Configure your server to include Expires or Cache-Control headers for static resources. This enables browsers to cache content, reducing load times on subsequent visits."
  },
  {
      name: "Cache Ajax responses",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Cache responses from Ajax requests to reduce the need for repeated server calls. Use appropriate caching strategies to keep the data fresh."
  },
  {
      name: "Compress documents",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use document compression tools to reduce the file size of documents such as PDFs before uploading them. This reduces download times and saves bandwidth."
  },
  {
      name: "Optimize PDFs",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use PDF optimization tools to compress and reduce the size of PDF files. Remove unnecessary elements and optimize images within the PDF."
  },
  {
      name: "Limit heavy and redundant emails",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Avoid sending large, heavy emails and eliminate redundant messages. Use email marketing tools to segment your audience and send targeted, lightweight emails."
  },
  {
      name: "Use double opt-in files only",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Implement a double opt-in process for email subscriptions. This ensures that users genuinely want to receive your emails and improves engagement rates."
  },
  {
      name: "Limit the size of sent emails",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Keep your email size small by avoiding large attachments and excessive images. Use links to external content instead of embedding it in the email."
  },
  {
      name: "Adapt texts to the web",
      profile: "Beginner",
      when: "Before",
      howTo: "Write concise, clear, and scannable text for web pages. Use headings, bullet points, and short paragraphs to make the content easy to read online."
  },
  {
      name: "Adapt videos to viewing contexts",
      profile: "Intermediate",
      when: "Before",
      howTo: "Optimize videos for different viewing contexts by providing various resolutions. Use adaptive streaming technologies to ensure the best quality for the user's connection."
  },
  {
      name: "Limit analytics tools and collected data",
      profile: "Intermediate",
      when: "Before",
      howTo: "Use only essential analytics tools and collect minimal data necessary for your analysis. This reduces the load on your site and improves user privacy."
  },
  {
      name: "Limit the use of animated GIFs",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Avoid using large animated GIFs that can slow down your site. Consider using CSS animations or video formats that are more efficient."
  },
  {
      name: "Avoid auto-play and auto-load of videos and sounds",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Disable auto-play and auto-load features for multimedia content. Allow users to choose when to play videos or sounds to improve the user experience and save bandwidth."
  },
  {
      name: "Provide text alternatives for multimedia content",
      profile: "Intermediate",
      when: "After",
      howTo: "Ensure accessibility by providing text alternatives, such as captions or transcripts, for multimedia content. This helps users with disabilities and improves SEO."
  },
  {
      name: "Prefer HTTP/2 over HTTP/1",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Upgrade your server to support HTTP/2, which offers faster page loads by allowing multiple requests and responses over a single connection."
  },
  {
      name: "Save bandwidth with a ServiceWorker",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Implement a ServiceWorker to cache assets locally and serve them from the cache. This reduces the need for repeated network requests and improves performance."
  },
  {
      name: "Implement an efficient sitemap",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Create and maintain an up-to-date XML sitemap to help search engines crawl and index your site more efficiently. This improves SEO and site navigation."
  },
  {
      name: "Ensure compatibility with older devices and software",
      profile: "Expert",
      when: "Doesn't matter",
      howTo: "Test your website on older devices and browsers to ensure compatibility. Use progressive enhancement techniques to provide a functional experience for all users."
  },
  {
      name: "Reduce the stored data volume to the strict necessary",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Regularly audit and clean up your stored data, keeping only what is necessary. Implement data retention policies to manage the lifecycle of stored data."
  },
  {
      name: "Implement a data expiration and deletion policy",
      profile: "Intermediate",
      when: "After",
      howTo: "Establish policies for data expiration and deletion to ensure that outdated or unnecessary data is removed in a timely manner. This helps maintain data hygiene and security."
  },
  {
      name: "Ensure user journeys allow them to complete intended actions",
      profile: "Intermediate",
      when: "After",
      howTo: "Design user journeys with clear and intuitive steps to help users complete their goals. Conduct usability testing to identify and fix any issues in the flow."
  },
  {
      name: "Have a page title and meta description relevant to the page content",
      profile: "Beginner",
      when: "After",
      howTo: "Ensure each page has a descriptive and accurate title and meta description. This improves SEO and helps users understand the content of the page before clicking."
  },
  {
      name: "Load data/code only when necessary",
      profile: "Intermediate",
      when: "Doesn't matter",
      howTo: "Use lazy loading and conditional loading techniques to load data and code only when needed. This improves initial load times and reduces unnecessary data transfer."
  },
  {
      name: "Eliminate unused features",
      profile: "Beginner",
      when: "After",
      howTo: "Regularly review and remove features that are not being used. This simplifies your application, reduces maintenance overhead, and improves performance."
  },
  {
      name: "Limit the number of HTTP API calls",
      profile: "Expert",
      when: "After",
      howTo: "Optimize your application to minimize the number of HTTP API calls by combining requests and caching responses where possible. This reduces server load and improves performance."
  },
  {
      name: "Limit the use of carousels",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use carousels sparingly as they can impact performance and usability. If necessary, ensure they are optimized and provide clear navigation controls for users."
  },
  {
      name: "Have a content end-of-life strategy",
      profile: "Beginner",
      when: "Before",
      howTo: "Develop a strategy for content lifecycle management, including creation, review, archiving, and deletion. This ensures your content remains relevant and up-to-date."
  },
  {
      name: "Maintain the site regularly",
      profile: "Beginner",
      when: "After",
      howTo: "Perform regular maintenance on your site to fix bugs, update content, and improve performance. Schedule periodic reviews and updates to keep everything running smoothly."
  },
  {
      name: "Limit the number of extensions in a CMS",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use only essential extensions in your CMS to reduce complexity and potential security vulnerabilities. Regularly review and remove any unnecessary plugins."
  },
  {
      name: "Secure access to the administration",
      profile: "Beginner",
      when: "Before",
      howTo: "Implement strong security measures for accessing the administration area, such as using secure passwords, two-factor authentication, and IP whitelisting."
  },
  {
      name: "Do not display documents within pages",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Avoid embedding documents like PDFs directly within web pages. Instead, provide links to download or view them in a separate tab to improve performance and user experience."
  },
  {
      name: "Favorize tailored-made rather than CMS",
      profile: "Beginner",
      when: "Before",
      howTo: "Consider using custom-built solutions instead of off-the-shelf CMS platforms for better performance, security, and flexibility tailored to your specific needs."
  },
  {
      name: "Favorize pagination to infinite scroll",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Use pagination instead of infinite scroll to load content. This improves performance and allows users to navigate through content more predictably."
  },
  {
      name: "Use the most recent versions of technologies",
      profile: "Beginner",
      when: "Doesn't matter",
      howTo: "Keep your development stack up-to-date by using the latest stable versions of your technologies. This ensures better security, performance, and access to new features."
  }
];


  
export default goodPractices;