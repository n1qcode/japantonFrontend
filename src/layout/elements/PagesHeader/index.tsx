import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';

import Search from '../../../components/Search';
import PagesLogo from '../../../assets/icons/Header/Header.icons/PagesLogo.png';
import {RouteNames} from '../../../routes/Routes/Routes.enum';

import {BalanceStyled, TopStyled} from './PagesHeader.styles';

const PagesHeader = () => {
  const router = useNavigate();

  const crateHandler = () => router(RouteNames.CARS_CREATE);

  return (
    <TopStyled>
      <Search />
      <Button sx={{padding: '0 30px', height: '40px', textTransform: 'none'}} onClick={crateHandler} variant="contained" startIcon={<AddIcon />}>Добавить</Button>
      <BalanceStyled>
          1.000.000 $
      </BalanceStyled>
      <img src={PagesLogo} alt="Pages Header Logo"/>
    </TopStyled>

  );
};

export default PagesHeader;
