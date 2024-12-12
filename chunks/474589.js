e.exports = function (e) {
    var n = !0,
        r = !0,
        i = !1;
    if ('function' == typeof e) {
        try {
            e.call('f', function (e, r, i) {
                'object' != typeof i && (n = !1);
            }),
                e.call(
                    [null],
                    function () {
                        r = 'string' == typeof this;
                    },
                    'x'
                );
        } catch (e) {
            i = !0;
        }
        return !i && n && r;
    }
    return !1;
};
