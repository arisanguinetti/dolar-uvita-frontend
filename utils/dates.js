import moment from 'moment';

moment.locale('es');

export const DATE_FORMAT = 'DD/MM HH[h]';

export const formatDate = date => moment(date).format(DATE_FORMAT);
