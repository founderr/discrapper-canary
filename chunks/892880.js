let r;
n(653041);
var i = n(392711),
    a = n.n(i),
    s = n(31775),
    o = n.n(s),
    l = n(749210),
    u = n(430824),
    c = n(594174),
    d = n(70956),
    f = n(51144),
    _ = n(388032);
let h = new (o())({ maxAge: 1 * d.Z.Millis.MINUTE });
function p(e, t, n) {
    null != r && clearTimeout(r),
        (r = setTimeout(() => {
            let r = [],
                i = (e) => {
                    r.push(e.id);
                };
            if (null == e) a().forEach(u.Z.getGuilds(), i);
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = u.Z.getGuild(e);
                    null != t && i(t);
                });
            else {
                let t = u.Z.getGuild(e);
                null != t && i(t);
            }
            r.length > 0 && l.Z.requestMembers(r, t.toLocaleLowerCase(), n);
        }, 200));
}
function m(e, t) {
    let n = ''.concat(null != e ? e : '', ':').concat(t),
        r = h.get(n);
    if (null != r) return r;
    h.set(n, !0);
}
t.Z = {
    getGuildNameSuggestion: function (e) {
        let t = c.default.getCurrentUser(),
            n = f.oY(t);
        return null == n || 0 === n.length ? '' : _.intl.formatToPlainString(_.t.Y6Qfjo, { username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n });
    },
    requestMembers(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Array.isArray(e),
            i = [],
            a = !1;
        r
            ? e.forEach((e) => {
                  null == m(e, t) && i.push(e);
              })
            : null == m(e, t) && (a = !0),
            i.length > 0 && r ? p(i, t, n) : a && p(e, t, n);
    }
};
