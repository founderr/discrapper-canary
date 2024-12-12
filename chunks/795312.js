e.exports = function (e) {
    var n,
        r = this;
    e = e || {};
    var i = !1;
    for (n in r.sequenceLevels) {
        if (e[n]) {
            i = !0;
            continue;
        }
        r.sequenceLevels[n] = 0;
    }
    !i && (r.nextExpectedAction = !1);
};
