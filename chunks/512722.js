e.exports = function (e, t, r, n, a, o, i, _) {
    if (!e) {
        var E;
        if (void 0 === t) E = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var s = [r, n, a, o, i, _],
                c = 0;
            (E = Error(
                t.replace(/%s/g, function () {
                    return s[c++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((E.framesToPop = 1), E);
    }
};
