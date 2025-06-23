import { connect } from 'react-redux';
import { getTypesThunk, getPetsThunk} from '../../store/slices/petsSlice';

function PetsList() {
  return <></>;
}

const mapStateToProps = ({ petsData }) => petsData;

const mapDispatchToProps = (dispatch) => ({
  getPets: () => dispatch(getPetsThunk()),
  getTypes: () => dispatch(getTypesThunk()),
  changePetType: (data) => dispatch(changePetTypeFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);
