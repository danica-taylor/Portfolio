/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, 
      typename: 'Group Project', 
      projectname: 'Character Development', 
      skills: 'React, Node, Express', 
      description: 'This web application was built for users to track their journey and progress in life. Storing each progress/exp entry into a experience journal for the users review at anytime, whilst earning experience points and leveling up ', 
      focus_features: 'Creating posts, Incrementing exp point bar, Database of stored exp entries', 
      url: 'https://slain-character-development.devacademy.nz/'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
