import moment from 'moment';

moment.locale('es');

export const DATE_FORMAT = 'dddd HH[h]';

export const formatDate = date => moment(date).format(DATE_FORMAT);
