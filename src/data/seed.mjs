import { faker } from '@faker-js/faker';
import fs from 'fs';
import slugify from 'slugify';

// Define the number of blogs you want to generate
const numBlogs = 10;

// Create an array to store the blog data
const blogs = [];

// Generate fake data for each blog
for (let i = 0; i < numBlogs; i++) {
  const title = faker.lorem.sentence()

  const comments = []
  for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
    comments.push({
      author: {
        avatar: faker.image.avatar(),
        name: faker.person.fullName(),
      },
      uploadedAt: faker.date.past(),
      content: faker.lorem.paragraph(),
    })
  }
  const blog = {
    title,
    description: faker.lorem.paragraph(),
    content: faker.lorem.paragraphs({ min: 4, max: 10 }),
    thumbnail: faker.image.url(),
    slug: slugify(title, { lower: true, strict: true }),
    author: {
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
    },
    uploadedAt: faker.date.past(),
    comments,
  };

  blogs.push(blog);
}

// Convert the array of blogs to JSON
const jsonData = JSON.stringify(blogs, null, 2);

// Write the JSON data to a file
fs.writeFileSync('src/data/blogs.json', jsonData);
console.log('JSON data written to blogs.json');



const numMembers = 5;

// Create an array to store the blog data
const members = [];

// Generate fake data for each blog
for (let i = 0; i < numMembers; i++) {
  const member = {
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    jobDescription: faker.lorem.sentence(),
  };

  members.push(member);
}

// Convert the array of members to JSON
const membersJsonData = JSON.stringify(members, null, 2);

// Write the JSON data to a file
fs.writeFileSync('src/data/members.json', membersJsonData);
console.log('JSON data written to members.json');