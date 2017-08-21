import jwt from 'jwt-simple';
import moment from 'moment';

const encodeJwt = (userId, expirationPeriod, userRole, encryptionKey) => {
    let expirationPeriodParts = expirationPeriod.split(' ');
    let payload = {};
    let token = null;

    payload.sub = userId;
    payload.iat = moment().unix();
    payload.exp = moment().add(expirationPeriodParts[0], expirationPeriodParts[1]).unix();
    payload.role = userRole;

    return jwt.encode(payload, encryptionKey);
};

const decodeJWT = (token, encryptionKey) => {
    return jwt.decode(token, encryptionKey);
};

const checkIfTokenIsUpToDate = (token, encryptionKey) => {
    let decodedToken = jwt.decode(token, encryptionKey);

    return moment(moment().unix()).isBefore(decodedToken.exp);
};

export {
    encodeJwt,
    decodeJWT,
    checkIfTokenIsUpToDate
};