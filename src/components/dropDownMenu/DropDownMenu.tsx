import {ChangeEvent, FC, memo, ReactElement, useState} from 'react';
import s from './styles/dropDownMenu.module.scss';
import user from 'src/asseds/images/icons-user.svg';
import logout from 'src/asseds/images/icons-logout.svg';
import password from 'src/asseds/images/icons-change-password.svg';
import {EMPTY_STRING, LOGO} from 'src/constants';

export const DropDownMenu: FC = memo((): ReactElement | null => {
    const arrayString = ["Vasilina Kazachonak", "Logout", "Change password"];

    const [options, setOptions] = useState<Array<string>>(arrayString);
    const [salary, setSalary] = useState<string>(arrayString[0]);

    const currentValue = (e: ChangeEvent<HTMLSelectElement>) => {
      setSalary(e.currentTarget.value);
    }

    return (
      <div className={s.container}>
        <img
          src={
            salary === arrayString[0] ? user
              : salary === arrayString[1] ? logout
                : salary === arrayString[2] ? password : EMPTY_STRING
          }
          alt={LOGO}
        />
        <select className={s.select} onChange={currentValue}>
          {
            options.map(option => (
                <option className={s.select} key={option}>
                  {option}
                </option>
              )
            )
          }
        </select>
      </div>
    )
  }
)
