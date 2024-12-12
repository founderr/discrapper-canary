r.d(n, {
    By: function () {
        return _;
    },
    ms: function () {
        return h;
    }
});
var i = r(47120);
var a = r(149765),
    s = r(442837),
    o = r(430824),
    l = r(594174),
    u = r(700785),
    c = r(504469),
    d = r(478743);
let f = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.default];
        if (null == e) return !1;
        let [r, i] = n,
            s = r.getGuild(e);
        if (null == s) return !1;
        let c = i.getCurrentUser();
        return a.Db(
            u.uB({
                user: c,
                context: s,
                checkElevated: !1
            }),
            d.N
        );
    },
    _ = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        if (null == e) return !1;
        let i = f(e),
            a = (0, c.Qf)(e, {
                autoTrackExposure: n,
                disable: !i,
                location: r
            });
        return i && a;
    };
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = (0, s.e7)([o.Z, l.default], () => f(e, [o.Z, l.default]), [e]),
        a = (0, c.Om)(e, {
            autoTrackExposure: n,
            disable: !i,
            location: r
        });
    return i && a;
}
