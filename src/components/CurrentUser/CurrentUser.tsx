import React, { useEffect, useState } from 'react';
import './CurrentUser.scss';
import { loadUser } from '../../api';

interface Props {
  selectedUserId: number;
}

export const CurrentUser: React.FC<Props> = (props) => {
  const { selectedUserId } = props;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const userFromApi = await loadUser(selectedUserId);

      setUser(userFromApi);
    })();
  }, [selectedUserId]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="CurrentUser">
      <h2 className="CurrentUser__title">
        <span>
          Selected user:
          {user.id}
        </span>
      </h2>

      <h3 className="CurrentUser__name">{user.name}</h3>
      <p className="CurrentUser__email">{user.email}</p>
      <p className="CurrentUser__phone">{user.phone}</p>
    </div>
  );
};
