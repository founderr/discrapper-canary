r.d(n, {
    I: function () {
        return u;
    },
    M: function () {
        return l;
    }
});
var i = r(442837),
    a = r(487419),
    s = r(496675),
    o = r(981631);
function l(e) {
    return (0, i.e7)([s.Z], () => null != e && s.Z.can(o.Plq.MANAGE_GUILD, e), [e]);
}
function u(e) {
    var n;
    let r = l(e),
        s = (0, i.e7)([a.Z], () => (null != e ? a.Z.getGuildIncident(e.id) : null)),
        u = (null == e ? void 0 : null === (n = e.hasFeature) || void 0 === n ? void 0 : n.call(e, o.oNc.INVITES_DISABLED)) || ((null == s ? void 0 : s.invitesDisabledUntil) != null && new Date(s.invitesDisabledUntil) > new Date());
    return r && u;
}
