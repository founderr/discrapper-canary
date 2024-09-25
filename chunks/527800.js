e.exports = function (e, t, r, i) {
    var a = this;
    function o(t) {
        return function () {
            (a.nextExpectedAction = t), ++a.sequenceLevels[e], a.resetSequenceTimer();
        };
    }
    function s(t) {
        var o;
        a.fireCallback(r, t, e),
            'keyup' !== i && ((o = n(619820)), (a.ignoreNextKeyup = o(t))),
            setTimeout(function () {
                a.resetSequences();
            }, 10);
    }
    a.sequenceLevels[e] = 0;
    for (var l = 0; l < t.length; ++l) {
        var u = l + 1 === t.length ? s : o(i || a.getKeyInfo(t[l + 1]).action);
        a.bindSingle(t[l], u, i, e, l);
    }
};
