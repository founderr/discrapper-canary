e.exports = function (e, n, i, a) {
    var s = this;
    function o(n) {
        return function () {
            (s.nextExpectedAction = n), ++s.sequenceLevels[e], s.resetSequenceTimer();
        };
    }
    function l(n) {
        var o;
        s.fireCallback(i, n, e),
            'keyup' !== a && ((o = r(619820)), (s.ignoreNextKeyup = o(n))),
            setTimeout(function () {
                s.resetSequences();
            }, 10);
    }
    s.sequenceLevels[e] = 0;
    for (var u = 0; u < n.length; ++u) {
        var c = u + 1 === n.length ? l : o(a || s.getKeyInfo(n[u + 1]).action);
        s.bindSingle(n[u], c, a, e, u);
    }
};
