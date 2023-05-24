import renderer from 'react-test-renderer';
import List from '../components/List';

it('renders list item correctly', () => {
  const tree = renderer.create(
    <List co={3} no={3} no2={3} o3={4} so2={5} aqi={3} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
