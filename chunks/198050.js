r.d(n, {
    Do: function () {
        return o;
    },
    Iu: function () {
        return s;
    },
    qp: function () {
        return l;
    }
});
var i = ['D', 'DD'],
    a = ['YY', 'YYYY'];
function s(e) {
    return -1 !== i.indexOf(e);
}
function o(e) {
    return -1 !== a.indexOf(e);
}
function l(e, n, r) {
    if ('YYYY' === e) throw RangeError('Use `yyyy` instead of `YYYY` (in `'.concat(n, '`) for formatting years to the input `').concat(r, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    if ('YY' === e) throw RangeError('Use `yy` instead of `YY` (in `'.concat(n, '`) for formatting years to the input `').concat(r, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    if ('D' === e) throw RangeError('Use `d` instead of `D` (in `'.concat(n, '`) for formatting days of the month to the input `').concat(r, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
    else if ('DD' === e) throw RangeError('Use `dd` instead of `DD` (in `'.concat(n, '`) for formatting days of the month to the input `').concat(r, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'));
}
