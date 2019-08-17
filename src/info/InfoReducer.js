const mockInfos = [
  {
    type: 'Books',
    infos: [
      {
        id: 1,
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!'
      },
      {
        id: 2,
        title: 'Peace on Earth',
        description: 'No big deal.'
      }
    ]
  }
];

export default function infos(state = { infos: mockInfos }, action) {
  return state;
}
