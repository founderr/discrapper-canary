var r = n(96403),
    i = n(463374),
    a = n(342545),
    o = n(219479),
    s = r(''.replace),
    l = RegExp('^[' + o + ']+'),
    u = RegExp('(^|[^' + o + '])[' + o + ']+$'),
    c = function (e) {
        return function (t) {
            var n = a(i(t));
            return 1 & e && (n = s(n, l, '')), 2 & e && (n = s(n, u, '$1')), n;
        };
    };
e.exports = {
    start: c(1),
    end: c(2),
    trim: c(3)
};
