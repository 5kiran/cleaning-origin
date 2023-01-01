const jwt = require('jsonwebtoken');
const { Customers, Business } = require('../../sequelize/models');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authType: Bearer , authToken: 토큰 값
    const [authType, authToken] = authorization.split(' ');
    if (!authToken || authType !== 'Bearer') {
        res.status(401).send({
            errorMessage: '로그인 후 이용 가능합니다',
        });
        return;
    }
    try {
        const { userId } = jwt.verify(authToken, secretKey);
        // console.log(jwt.verify(authToken, secretKey));
        User.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        res.status(401).send({
            errorMessage: '로그인 후 이용 가능합니다!',
        });
    }
};

module.exports = UsersVerifi;
