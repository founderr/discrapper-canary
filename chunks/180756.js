var n = 1073741823;
e.exports = function (e, r) {
    if ('number' != typeof e) throw TypeError('Iterations not a number');
    if (e < 0) throw TypeError('Bad iterations');
    if ('number' != typeof r) throw TypeError('Key length not a number');
    if (r < 0 || r > n || r != r) throw TypeError('Bad key length');
};
