const mockInfos = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    type: 'Weather',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'News',
  },
];

export default function infos (state = { infos: mockTasks }, action) {    
  return state;
}
