"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("866442"),
  o = n("481060"),
  u = n("129861"),
  r = n("829883"),
  i = n("518738"),
  d = n("14263"),
  c = n("592125"),
  m = n("430824"),
  p = n("158776"),
  f = n("594174"),
  C = n("964309"),
  S = n("241820"),
  E = n("176278"),
  v = n("970184"),
  N = n("280501"),
  h = n("811654"),
  T = n("344991"),
  x = n("981631"),
  y = n("41865");

function g(e) {
  var t;
  let n = (0, v.useComponentStateContext)(),
    g = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
    O = c.default.getChannel(g),
    I = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
    j = (0, d.default)(null == I ? void 0 : I.id, h.MIN_REREQUEST_TIME),
    _ = a.useMemo(() => (0, h.getSnowflakeSelectDefaultValues)(e.defaultValues, null == I ? void 0 : I.id), [e.defaultValues, I]);
  return (0, l.jsx)(T.default, {
    selectActionComponent: e,
    queryOptions: t => (0, h.queryMentionables)(e.type, t, g),
    renderIcon: (e, t) => {
      let n = t === T.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(o.Avatar, {
          size: n ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == I ? void 0 : I.id, t),
          status: n ? null : p.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.ROLE) {
        var a;
        let n = null != I ? m.default.getRole(I.id, e.value) : void 0;
        if (null == n || null == I) return;
        let o = (0, r.canGuildUseRoleIcons)(I, n) ? (0, i.getRoleIconProps)(n, t) : null;
        return null != o ? (0, l.jsx)(E.default, {
          ...o
        }) : (0, l.jsx)(S.default, {
          color: null !== (a = n.colorString) && void 0 !== a ? a : (0, s.int2hex)(x.DEFAULT_ROLE_COLOR),
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === N.SelectOptionType.USER) {
        let n = f.default.getUser(e.value);
        null != n && (t = (0, l.jsx)(u.default, {
          className: y.tag,
          usernameClass: y.username,
          discriminatorClass: y.discriminator,
          botClass: y.bot,
          user: n,
          forceUsername: !0
        }))
      } else if (e.type === N.SelectOptionType.ROLE) {
        let n = null != I ? m.default.getRole(I.id, e.value) : void 0,
          a = null == n ? null : null == j ? void 0 : j[n.id];
        null != a && (t = (0, l.jsxs)("div", {
          className: y.roleCountContainer,
          children: [(0, l.jsx)(C.default, {
            className: y.roleCountIcon,
            height: 18,
            width: 18
          }), (0, l.jsx)("span", {
            className: y.roleCountText,
            children: a
          })]
        }))
      }
      return (0, l.jsxs)("span", {
        className: y.label,
        children: [(0, l.jsx)("span", {
          className: y.labelText,
          children: e.label
        }), t]
      })
    },
    defaultValues: _
  })
}