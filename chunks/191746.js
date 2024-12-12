e.exports = function (e, n) {
    var r = this;
    return r.directMap[e + ':' + n] && r.directMap[e + ':' + n]({}, e), this;
};
