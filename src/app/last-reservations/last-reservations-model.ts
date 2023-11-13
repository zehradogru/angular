export class Model {
  id!: number;
  customerId!: number;
  roomType!: string;
  room!: string;
  dateArrival!: Date;
  dateDeparture!: Date;
  notes!: string;
  source!: null;
  paymentAmount!: number;
  dateUpdated!: Date;
  status!: string;
  customer!: CustomerModel;
}

export class CustomerModel {
  id!: number;
  tcNo!: null;
  passportNo!: null;
  nationality!: null | string;
  firstName!: string;
  lastName!: string;
  middleName!: null;
  streetAddress!: null;
  city!: null;
  country!: null | string;
  email!: string;
  phone!: string;
  notes!: string;
  stayList!: null;
}
