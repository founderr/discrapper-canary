var i = r(535213),
    a = r(383252);
e.exports = function () {
    return i(), 'function' == typeof Promise.allSettled ? Promise.allSettled : a;
};
