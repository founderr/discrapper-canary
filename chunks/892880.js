let r;
var i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(31775),
    l = n.n(s),
    u = n(749210),
    c = n(430824),
    d = n(594174),
    _ = n(70956),
    E = n(51144),
    f = n(689938);
let h = new (l())({ maxAge: 1 * _.Z.Millis.MINUTE });
function p(e, t, n) {
    null != r && clearTimeout(r),
        (r = setTimeout(() => {
            let r = [],
                i = (e) => {
                    r.push(e.id);
                };
            if (null == e) o().forEach(c.Z.getGuilds(), i);
            else if (Array.isArray(e))
                e.forEach((e) => {
                    let t = c.Z.getGuild(e);
                    null != t && i(t);
                });
            else {
                let t = c.Z.getGuild(e);
                null != t && i(t);
            }
            r.length > 0 && u.Z.requestMembers(r, t.toLocaleLowerCase(), n);
        }, 200));
}
function m(e, t) {
    let n = ''.concat(null != e ? e : '', ':').concat(t),
        r = h.get(n);
    if (null != r) return r;
    h.set(n, !0);
}
function I(e) {
    let t = d.default.getCurrentUser(),
        n = E.oY(t);
    return null == n || 0 === n.length ? '' : f.Z.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({ username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n });
}
t.Z = {
    getGuildNameSuggestion: I,
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
