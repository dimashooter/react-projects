import axios from 'axios';
import React, {
  useEffect,
  useState,
} from 'react';
import User from '../Components/User';

const URL =
  'https://jsonplaceholder.typicode.com/users';

const TablePage = () => {
  const [users, setUsers] = useState(null);
  const [userNames, setUserNames] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get(URL);
    response.data.map(el => {
      return { ...el, active: false };
    });

    setUsers(response.data);
  };

  const checkHandler = id => {
    let arr = users.map(user => {
      if (user.id === id) {
        {
          user.active = !user.active;
        }
        setUserNames(prev => {
            if(prev.includes(user.name)) {

              return  [...prev].filter( el => el !== user.name)
            }
           return  [...prev,user.name]})
      }
      return user;
    });
    setUsers(arr);
  };

  const checkAll = () => {
    let checkedArr = users.map(user => {
      user.active = !user.active;
      return user;
    });
    setUsers(checkedArr);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="table">
      <tr className={'bg-gray-400'}>
        <td className="col">Номер</td>
        <td className="col">Имя</td>
        <td className="col">Адрес</td>
        <td className="col">Телефон</td>
        <td className="col">
          <button onClick={checkAll}>
            Выбрать всех
          </button>
        </td>
      </tr>
      {users &&
        users.map(el => (
          <User
            el={el}
            checkHandler={checkHandler}
          />
        ))}
      <div>
        Выбранные польлзователи:
        <span>
          {userNames.length &&
            userNames.map((el, index) => (
              <span key={index}> {el},</span>
            ))}
        </span>
      </div>
    </div>
  );
};

export default TablePage;
