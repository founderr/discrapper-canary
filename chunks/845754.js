var n = Math.floor;
e.exports = function (e, r) {
    var i = e % r;
    return n(i >= 0 ? i : i + r);
};
