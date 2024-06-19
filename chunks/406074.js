n.d(t, {
  C: function() {
    return d
  }
});
var l = n(149765),
  i = n(442837),
  s = n(160404),
  a = n(592125),
  r = n(430824),
  o = n(584825),
  c = n(790285),
  u = n(981631);

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, d = (0, o.qi)(t);
  return (0, i.Wu)([a.Z, r.Z, s.Z], () => {
    let e = a.Z.getChannel(n),
      i = r.Z.getGuild(t),
      o = s.Z.isViewingServerShop(t);
    return null != i && null != e ? d.filter(t => (function(e, t, n) {
      let {
        isPreviewingRoles: i = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (!(i || e.published)) return !1;
      let s = n.permissionOverwrites[e.role_id];
      if ((0, c.TG)(n, s)) return !0;
      let a = r.Z.getRole(t.id, t.getEveryoneRoleId()),
        o = null != a && !l.e$(a.permissions, u.Plq.VIEW_CHANNEL),
        d = (0, c.wB)(n, n.permissionOverwrites[t.id]),
        h = r.Z.getRole(t.id, e.role_id);
      return o && !d && null != h && (0, c.MT)(h) && !(0, c.wB)(n, s)
    })(t, i, e, {
      isPreviewingRoles: o
    })) : []
  }, [t, n, d])
}