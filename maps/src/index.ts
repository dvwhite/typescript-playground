// import { Company } from './Company';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const divId = "map"
const user = new User();
const company = new Company();
const customMap = new CustomMap(divId);

customMap.addMarker(user);
customMap.addMarker(company);