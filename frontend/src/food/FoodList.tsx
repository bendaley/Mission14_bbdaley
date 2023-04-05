import { useEffect, useState } from 'react';
import { Food } from '../types/food';
import Layout from '../pages/Layout';

function FoodList() {
  const [foodData, setFoodData] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:7247/food');
      const temp = await rsp.json();
      setFoodData(temp);
    };
    fetchFood();
  }, []);

  return (
    <>
      <div className="row">
        <Layout />
        <h4>The Best Food in the Marriott School</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Vendor</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr key={f.foodId}>
              <td>{f.eventName}</td>
              <td>{f.vendor}</td>
              <td>{f.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
