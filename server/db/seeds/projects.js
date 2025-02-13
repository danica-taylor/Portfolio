/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {id: 1, 
      type: 'Group Project', 
      project_name: 'Character Development', 
      skills: 'React, Node, Express', 
      description: 'This web application was built for users to track their journey and progress in life. Storing each progress/exp entry into a experience journal for the users review at anytime, whilst earning experience points and leveling up ', 
      focus_features: 'Creating posts, Incrementing exp point bar, Database of stored exp entries', 
      url: 'https://slain-character-development.devacademy.nz/'},
    {id: 2, 
      type: 'Personal Project',
      project_name: 'Tic-Tac-Toe',
      skills: 'React, Node, Express',
      description: 'A basic web application for two players to play tic-tac-toe',
      focus_features: 'Loops and conditionals, ',
      url: 'Unavailable'},
    {id: 3, 
      type: 'Group Project',
      project_name: 'Cookbook 3.0',
      skills: 'React, Node, Express',
      description: 'A web application built for users to research and follow along with instructions',
      focus_features: 'CRUD operations, React, Node, Express',
      url: 'Unavailable'},
  ]);
};
