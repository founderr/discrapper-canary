r(535213)();
var i = r(245252),
    a = r(665855),
    s = r(247498),
    o = r(350506),
    l = r(665679),
    u = r(705806),
    c = u(l('%Promise.all%')),
    d = u(l('%Promise.reject%'));
e.exports = function (e) {
    var n = this;
    if ('Object' !== a(n)) throw TypeError('`this` value must be an object');
    return c(
        n,
        o(s(e), function (e) {
            var r = function (e) {
                    return {
                        status: 'fulfilled',
                        value: e
                    };
                },
                a = function (e) {
                    return {
                        status: 'rejected',
                        reason: e
                    };
                },
                s = i(n, e);
            try {
                return s.then(r, a);
            } catch (e) {
                return d(n, e);
            }
        })
    );
};
