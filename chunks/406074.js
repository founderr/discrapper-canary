n.d(t, {
    C: function () {
        return d;
    }
});
var i = n(149765),
    l = n(442837),
    r = n(160404),
    s = n(592125),
    a = n(430824),
    o = n(584825),
    c = n(790285),
    u = n(981631);
function d(e) {
    let { guildId: t, channelId: n } = e,
        d = (0, o.qi)(t);
    return (0, l.Wu)(
        [s.Z, a.Z, r.Z],
        () => {
            let e = s.Z.getChannel(n),
                l = a.Z.getGuild(t),
                o = r.Z.isViewingServerShop(t);
            return null != l && null != e
                ? d.filter((t) =>
                      (function (e, t, n) {
                          let { isPreviewingRoles: l = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                          if (!(l || e.published)) return !1;
                          let r = n.permissionOverwrites[e.role_id];
                          if ((0, c.TG)(n, r)) return !0;
                          let s = a.Z.getRole(t.id, t.getEveryoneRoleId()),
                              o = null != s && !i.e$(s.permissions, u.Plq.VIEW_CHANNEL),
                              d = (0, c.wB)(n, n.permissionOverwrites[t.id]),
                              h = a.Z.getRole(t.id, e.role_id);
                          return o && !d && null != h && (0, c.MT)(h) && !(0, c.wB)(n, r);
                      })(t, l, e, { isPreviewingRoles: o })
                  )
                : [];
        },
        [t, n, d]
    );
}
