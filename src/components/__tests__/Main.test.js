// import React from 'react';
// import { render, screen, userEvent } from '@testing-library/react';
// import Main from '../Main';

// const mockData = {
//   launchesData: [
//     {
//       name: 'First launch',
//       details: 'First launch Details',
//       date_utc: '2021-01-01T00:00:00.000Z',
//       success: true,
//       rocket: 'okudmdo090ms8nn',
//       links: {
//         patch: {
//           small: 'https://images2.imgbox.com/53/22/dh0XSLXO_o.png',
//         },
//       },
//     },
//     {
//       name: 'Second launch',
//       details: 'Second launch Details',
//       date_utc: '2022-06-07T00:00:24.000Z',
//       success: false,
//       rocket: 'okudmgtz90ms9ox',
//       links: {
//         patch: {
//           small: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
//         },
//       },
//     },
//     {
//       name: 'Third launch',
//       details: 'Third launch Details',
//       date_utc: '2022-08-01T00:00:00.000Z',
//       success: true,
//       rocket: 'omz12gtz90mslkN',
//       links: {
//         patch: {
//           small: 'https://images2.imgbox.com/53/22/dh0XSLXO_o.png',
//         },
//       },
//     },

//   ],
//   // rocketData: [
//   //   {

//   //   }
//   // ],
//   // ... mock data for other states
// };

// jest.spyOn(global, 'fetch').mockImplementation(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockData),
//   })
// );

// beforeEach(() => {
//   jest.clearAllMocks();
// });

// test('renders the Main component with initial data', async () => {
//   render(<Main />);

//   // You can write assertions to check if your component renders correctly with initial data
//   expect(screen.getByText('Space X launches')).toBeInTheDocument();
//   expect(await screen.findByText('Launch - First launch')).toBeInTheDocument();
//   // Add more assertions as needed
// });

// test('handles search correctly', async () => {
//   render(<Main />);

//   // Simulate user input and click search
//   const searchInput = screen.getByPlaceholderText('Search...');
//   userEvent.type(searchInput, 'Search Query');
//   const searchButton = screen.getByText('Search');
//   userEvent.click(searchButton)

//   // You can write assertions to check if your component handles search correctly
//   expect(global.fetch).toHaveBeenCalledWith('https://api.spacexdata.com/v5/launches');
//   expect(await screen.findByText('Search Results')).toBeInTheDocument();
//   // Add more assertions as needed
// });

// // Write more tests for other functionalities, filters, and interactions
