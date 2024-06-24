-- Drop the database if it exists
DROP DATABASE IF EXISTS egreen;

-- Create the database
CREATE DATABASE egreen;

-- Use the newly created database
USE egreen;


--
-- Create Tables
--

-- User table
DROP TABLE IF EXISTS `users`; 

CREATE TABLE `users`(
	`user_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	`username` VARCHAR(255) NOT NULL, 
	`password` VARCHAR(255) NOT NULL 
);

-- History table
DROP TABLE IF EXISTS `history`; 

CREATE TABLE `history`(
	`hist_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
	`date` DATETIME NOT NULL, 
	`score` VARCHAR(255) NOT NULL, 
	`user_id` INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Good practices
DROP TABLE IF EXISTS `good_practices`; 

CREATE TABLE good_practices(
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    profile VARCHAR(40) NOT NULL,
    alreadycreated VARCHAR(40) NOT NULL,
    how_to TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- Create the recommendations
INSERT INTO good_practices (name, profile, alreadycreated, how_to) VALUES
('Eliminate non-essential features', 'Beginner', 'Before', 'Identify and remove features that are not crucial to the core functionality of your application. This helps to simplify the user experience and improve performance.'),
('Precisely quantify the need', 'Beginner', 'Before', 'Conduct research and gather data to accurately define the requirements of your project. This ensures that you focus on what is truly needed and avoid unnecessary features.'),
('Optimize user journey', 'Intermediate', 'Doesn\'t matter', 'Analyze and streamline the steps a user takes to complete key tasks in your application. Remove obstacles and simplify navigation to enhance usability.'),
('Prefer assisted input to autocompletion', 'Intermediate', 'Doesn\'t matter', 'Provide users with suggestions and guided input fields instead of automatic completions. This helps users make informed choices and reduces errors.'),
('Favor a simple, clean, web-adapted design', 'Beginner', 'Doesn\'t matter', 'Design your website with simplicity and clarity in mind. Use a clean layout, avoid clutter, and ensure that the design adapts well to different web environments.'),
('Favor a \'mobile first\' approach, or at least adaptive loading', 'Intermediate', 'Before', 'Design your application primarily for mobile devices, ensuring that it functions well on smaller screens. Use adaptive loading techniques to improve performance on mobile networks.'),
('Respect the principle of quick navigation in history', 'Beginner', 'Before', 'Ensure that users can quickly navigate back to previously visited pages. Implement clear navigation paths and avoid disrupting the browser\'s back functionality.'),
('Limit the number of HTTP requests', 'Expert', 'Doesn\'t matter', 'Optimize your web pages by combining files and using techniques like sprites to reduce the number of HTTP requests. This improves loading times and overall performance.'),
('Store static data locally', 'Expert', 'Doesn\'t matter', 'Use local storage or indexedDB to store static data on the user\'s device. This reduces the need for repeated network requests and enhances performance.'),
('Favor static pages', 'Beginner', 'Doesn\'t matter', 'Whenever possible, use static HTML pages instead of dynamically generated ones. Static pages load faster and are more reliable.'),
('Choose the most suitable technologies', 'Expert', 'Before', 'Evaluate and select technologies that best fit the needs of your project. Consider factors like performance, scalability, and ease of maintenance.'),
('Choose an appropriate data format', 'Expert', 'Before', 'Select data formats that are efficient and appropriate for your application\'s needs. JSON is often a good choice for web applications, while formats like CSV might be better for data exports.'),
('Replace official social media sharing buttons', 'Beginner', 'Doesn\'t matter', 'Use custom social media sharing buttons instead of the official ones provided by social platforms. This reduces external scripts and improves loading times.'),
('Limit the number of CSS files', 'Expert', 'Before', 'Combine multiple CSS files into a single file to reduce HTTP requests. Use tools like CSS preprocessors to manage and compile your stylesheets.'),
('Prefer CSS over images', 'Intermediate', 'Doesn\'t matter', 'Use CSS properties to create visual effects instead of images. This reduces the number of assets your page needs to load and improves performance.'),
('Group similar CSS declarations', 'Expert', 'Before', 'Combine CSS rules that share the same properties to reduce redundancy and make your stylesheet more efficient. This also makes maintenance easier.'),
('Favor standard fonts', 'Beginner', 'Doesn\'t matter', 'Use standard web fonts instead of custom fonts to reduce loading times. If custom fonts are necessary, use web font loading techniques to minimize impact on performance.'),
('Prefer glyphs over images', 'Beginner', 'Doesn\'t matter', 'Use icon fonts or SVG icons instead of image files for icons. This reduces the number of HTTP requests and allows for better scaling and customization.'),
('Validate pages with W3C', 'Intermediate', 'Doesn\'t matter', 'Regularly validate your web pages using W3C\'s validation tools to ensure they adhere to web standards. This helps catch errors and improve compatibility.'),
('Avoid resizing images in the browser', 'Beginner', 'Before', 'Resize images to their appropriate dimensions before using them on your site. This reduces the browser\'s workload and improves page load times.'),
('Use lazy loading', 'Intermediate', 'Doesn\'t matter', 'Implement lazy loading for images and other resources that are not immediately visible. This improves initial page load times and reduces bandwidth usage.'),
('Minify CSS, JavaScript, HTML, and SVG files', 'Intermediate', 'After', 'Use minification tools to reduce the size of your CSS, JavaScript, HTML, and SVG files by removing unnecessary whitespace and comments. This improves load times.'),
('Compress CSS, JavaScript, HTML, and SVG files', 'Intermediate', 'After', 'Enable GZIP or Brotli compression on your server to reduce the size of these files as they are transferred over the network, speeding up load times.'),
('Combine CSS and JavaScript files', 'Intermediate', 'After', 'Merge multiple CSS and JavaScript files into single files to reduce the number of HTTP requests. This can significantly improve page load performance.'),
('Optimize images', 'Beginner', 'Doesn\'t matter', 'Use image optimization tools to reduce the file size of your images without compromising quality. Choose appropriate formats like JPEG for photos and PNG for graphics.'),
('Optimize cookie size', 'Expert', 'Doesn\'t matter', 'Keep cookies as small as possible by storing only essential information. Avoid using cookies for large data and consider alternative storage methods.'),
('Choose an \'eco-responsible\' hosting provider', 'Beginner', 'Doesn\'t matter', 'Select a hosting provider that uses renewable energy sources and implements eco-friendly practices. This helps reduce your website\'s environmental impact.'),
('Prefer an eco-responsible electricity supplier', 'Beginner', 'Doesn\'t matter', 'Choose an electricity supplier that generates power from renewable sources. This reduces the carbon footprint of your server and other infrastructure.'),
('Store data in the cloud', 'Beginner', 'Doesn\'t matter', 'Utilize cloud storage services for data storage. Cloud providers often offer optimized and scalable solutions that can improve efficiency and performance.'),
('Avoid redirects', 'Intermediate', 'Doesn\'t matter', 'Minimize the use of URL redirects, as they add extra HTTP requests and delay page loading. Use direct links whenever possible.'),
('Display static error pages', 'Intermediate', 'Doesn\'t matter', 'Create static HTML error pages to display when errors occur. These load faster than dynamic pages and provide a better user experience during issues.'),
('Use a CDN', 'Expert', 'Doesn\'t matter', 'Implement a Content Delivery Network (CDN) to distribute your content globally. CDNs improve load times and reliability by serving content from servers closest to the user.'),
('Add Expires or Cache-Control headers', 'Expert', 'Doesn\'t matter', 'Configure your server to include Expires or Cache-Control headers for static resources. This enables browsers to cache content, reducing load times on subsequent visits.'),
('Cache Ajax responses', 'Expert', 'Doesn\'t matter', 'Cache responses from Ajax requests to reduce the need for repeated server calls. Use appropriate caching strategies to keep the data fresh.'),
('Compress documents', 'Beginner', 'Doesn\'t matter', 'Use document compression tools to reduce the file size of documents such as PDFs before uploading them. This reduces download times and saves bandwidth.'),
('Optimize PDFs', 'Beginner', 'Doesn\'t matter', 'Use PDF optimization tools to compress and reduce the size of PDF files. Remove unnecessary elements and optimize images within the PDF.'),
('Limit heavy and redundant emails', 'Beginner', 'Doesn\'t matter', 'Avoid sending large, heavy emails and eliminate redundant messages. Use email marketing tools to segment your audience and send targeted, lightweight emails.'),
('Use double opt-in files only', 'Intermediate', 'Doesn\'t matter', 'Implement a double opt-in process for email subscriptions. This ensures that users genuinely want to receive your emails and improves engagement rates.'),
('Limit the size of sent emails', 'Beginner', 'Doesn\'t matter', 'Keep your email size small by avoiding large attachments and excessive images. Use links to external content instead of embedding it in the email.'),
('Adapt texts to the web', 'Beginner', 'Before', 'Write concise, clear, and scannable text for web pages. Use headings, bullet points, and short paragraphs to make the content easy to read online.'),
('Adapt videos to viewing contexts', 'Intermediate', 'Before', 'Optimize videos for different viewing contexts by providing various resolutions. Use adaptive streaming technologies to ensure the best quality for the user\'s connection.'),
('Limit analytics tools and collected data', 'Intermediate', 'Before', 'Use only essential analytics tools and collect minimal data necessary for your analysis. This reduces the load on your site and improves user privacy.'),
('Limit the use of animated GIFs', 'Beginner', 'Doesn\'t matter', 'Avoid using large animated GIFs that can slow down your site. Consider using CSS animations or video formats that are more efficient.'),
('Avoid auto-play and auto-load of videos and sounds', 'Intermediate', 'Doesn\'t matter', 'Disable auto-play and auto-load features for multimedia content. Allow users to choose when to play videos or sounds to improve performance and user experience.'),
('Use audio and video compression tools', 'Intermediate', 'After', 'Compress audio and video files to reduce their size before uploading them to your site. This helps improve load times and reduce bandwidth usage.'),
('Take user security into account', 'Expert', 'Doesn\'t matter', 'Implement strong security measures to protect user data and privacy. Use HTTPS, secure authentication, and data encryption to safeguard information.'),
('Offer the choice of personalizing cookies', 'Intermediate', 'Before', 'Provide users with options to customize their cookie preferences. Allow them to accept only essential cookies and opt-out of tracking cookies.'),
('Avoid using Captchas and other anti-spam systems', 'Beginner', 'Doesn\'t matter', 'Find alternatives to Captchas and other anti-spam systems that can frustrate users. Consider using hidden fields or behavioral analysis to detect bots.'),
('Configure ads and trackers', 'Intermediate', 'Before', 'Set up ads and trackers to be as lightweight as possible. Use asynchronous loading and limit the number of third-party scripts to improve performance.'),
('Avoid excessive tracking', 'Intermediate', 'Doesn\'t matter', 'Reduce the amount of tracking on your site to improve performance and respect user privacy. Only track essential data and comply with privacy regulations.'),
('Protect private data', 'Expert', 'Doesn\'t matter', 'Implement strong data protection practices to safeguard private information. Use encryption, secure storage, and access controls to prevent data breaches.'),
('Make data portability easier', 'Intermediate', 'Doesn\'t matter', 'Provide users with easy ways to export and transfer their data. This enhances user trust and compliance with data protection regulations.'),
('Prioritize web page weight', 'Intermediate', 'Doesn\'t matter', 'Optimize your web pages to reduce their overall weight. Remove unnecessary elements, minify resources, and use efficient coding practices.'),
('Prioritize data importance', 'Intermediate', 'Before', 'Focus on displaying the most important data to users first. Load critical content immediately and defer loading of less important elements.'),
('Use the proper device settings', 'Intermediate', 'Before', 'Detect and use appropriate settings for the user\'s device, such as screen size, resolution, and network speed. This ensures an optimal experience.'),
('Use an agile approach to eco-design', 'Intermediate', 'Before', 'Incorporate eco-design principles into your agile development process. Continuously evaluate and improve the environmental impact of your project.'),
('Do not hesitate to delete', 'Intermediate', 'Doesn\'t matter', 'Regularly review and remove unnecessary content, features, and code from your application. This helps keep your project lean and efficient.'),
('Get ready to reduce and adapt', 'Intermediate', 'Before', 'Be prepared to make changes and reduce the scope of your project if necessary. Adapt to new information and feedback to improve sustainability.'),
('Make services less visible or engaging', 'Intermediate', 'Doesn\'t matter', 'Limit the visibility or engagement of less critical services to reduce their impact. Prioritize the most important features for user interaction.'),
('Do not neglect product maintenance', 'Intermediate', 'After', 'Regularly maintain and update your product to ensure it remains efficient and functional. Address performance issues and security vulnerabilities promptly.'),
('Implement incremental delivery and continuous improvement', 'Intermediate', 'After', 'Adopt a continuous delivery and improvement process to iteratively enhance your product. This allows you to make small, frequent updates and improvements.'),
('Involve all stakeholders in the design process', 'Intermediate', 'Before', 'Engage all relevant stakeholders, including users, in the design process. This ensures that diverse perspectives are considered and improves the overall design.'),
('Provide adequate training', 'Beginner', 'Doesn\'t matter', 'Offer training and resources to team members on eco-design principles and practices. This builds awareness and encourages sustainable development.'),
('Incorporate eco-design into culture and strategy', 'Intermediate', 'Before', 'Embed eco-design principles into your organization\'s culture and strategic planning. This ensures that sustainability is a core consideration in all projects.'),
('Measure the environmental impacts of your services', 'Expert', 'After', 'Use tools and methodologies to assess the environmental impact of your services. Track key metrics and make data-driven decisions to reduce your footprint.'),
('Communicate impacts to users', 'Intermediate', 'After', 'Inform users about the environmental impact of your services. Provide transparency and encourage sustainable behavior through clear communication.'),
('Improve interactions with users', 'Intermediate', 'Doesn\'t matter', 'Enhance user interactions by making them more efficient and enjoyable. Gather feedback and continuously refine the user experience.'),
('Allow customization and personalization of services', 'Intermediate', 'Doesn\'t matter', 'Enable users to customize and personalize your services to meet their needs. This improves satisfaction and can reduce unnecessary features.'),
('Encourage reasonable consumption', 'Beginner', 'Doesn\'t matter', 'Promote mindful and responsible use of your services. Encourage users to avoid excessive usage and highlight the benefits of sustainable behavior.'),
('Avoid unnecessary user engagement techniques', 'Intermediate', 'Doesn\'t matter', 'Refrain from using manipulative engagement techniques that drive unnecessary interactions. Focus on providing value and reducing friction.'),
('Choose open source solutions', 'Beginner', 'Doesn\'t matter', 'Consider using open source software solutions that are often more sustainable and community-driven. This can reduce costs and improve transparency.'),
('Consider all the points of the ADEME repository', 'Expert', 'Doesn\'t matter', 'Refer to the ADEME repository for comprehensive guidelines and best practices on eco-design. Implement these principles to enhance sustainability.'),
('Be transparent with users', 'Intermediate', 'Doesn\'t matter', 'Maintain transparency with users about your sustainability efforts and practices. Build trust by openly sharing your goals and progress.'),
('Favor technical simplification', 'Intermediate', 'Before', 'Simplify your technical architecture and avoid unnecessary complexity. This improves maintainability, performance, and reduces resource consumption.'),
('Engage users', 'Intermediate', 'Before', 'Involve users in the design and development process. Gather feedback and incorporate their input to create more user-centered and sustainable solutions.');
