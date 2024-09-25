n.d(t, {
    By: function () {
        return _;
    },
    ms: function () {
        return E;
    }
});
var r = n(47120);
var i = n(149765),
    a = n(442837),
    o = n(430824),
    s = n(594174),
    l = n(700785),
    u = n(686692),
    c = n(478743);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.default];
        if (null == e) return !1;
        let [n, r] = t,
            a = n.getGuild(e);
        if (null == a) return !1;
        let u = r.getCurrentUser();
        return i.Db(
            l.uB({
                user: u,
                context: a,
                checkElevated: !1
            }),
            c.N
        );
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == e) return !1;
        let r = d(e),
            i = (0, u.Qf)(e, {
                autoTrackExposure: t,
                disable: !r,
                location: n
            });
        return r && i;
    };
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = (0, a.e7)([o.Z, s.default], () => d(e, [o.Z, s.default]), [e]),
        i = (0, u.Om)(e, {
            autoTrackExposure: t,
            disable: !r,
            location: n
        });
    return r && i;
}
