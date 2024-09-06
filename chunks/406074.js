n.d(t, {
    C: function () {
        return d;
    }
});
var i = n(149765),
    s = n(442837),
    a = n(160404),
    l = n(592125),
    r = n(430824),
    o = n(584825),
    c = n(790285),
    u = n(981631);
function d(e) {
    let { guildId: t, channelId: n } = e,
        d = (0, o.qi)(t);
    return (0, s.Wu)(
        [l.Z, r.Z, a.Z],
        () => {
            let e = l.Z.getChannel(n),
                s = r.Z.getGuild(t),
                o = a.Z.isViewingServerShop(t);
            return null != s && null != e
                ? d.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: s = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(s || e.published)) return !1;
                          let a = n.permissionOverwrites[e.role_id];
                          if ((0, c.TG)(n, a)) return !0;
                          let l = r.Z.getRole(t.id, t.getEveryoneRoleId()),
                              o = null != l && !i.e$(l.permissions, u.Plq.VIEW_CHANNEL),
                              d = (0, c.wB)(n, n.permissionOverwrites[t.id]),
                              h = r.Z.getRole(t.id, e.role_id);
                          return o && !d && null != h && (0, c.MT)(h) && !(0, c.wB)(n, a);
                      })(t, s, e, { isPreviewingRoles: o })
                  )
                : [];
        },
        [t, n, d]
    );
}
