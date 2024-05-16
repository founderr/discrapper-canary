"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("866442"),
  i = n("481060"),
  o = n("129861"),
  s = n("829883"),
  r = n("518738"),
  d = n("14263"),
  c = n("592125"),
  p = n("430824"),
  m = n("158776"),
  f = n("594174"),
  S = n("964309"),
  C = n("241820"),
  v = n("176278"),
  E = n("970184"),
  N = n("280501"),
  h = n("811654"),
  g = n("344991"),
  T = n("981631"),
  y = n("879565");

function I(e) {
  var t;
  let n = (0, E.useComponentStateContext)(),
    I = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
    x = c.default.getChannel(I),
    O = p.default.getGuild(null == x ? void 0 : x.getGuildId()),
    j = (0, d.default)(null == O ? void 0 : O.id, h.MIN_REREQUEST_TIME),
    L = a.useMemo(() => (0, h.getSnowflakeSelectDefaultValues)(e.defaultValues, null == O ? void 0 : O.id), [e.defaultValues, O]);
  return (0, l.jsx)(g.default, {
    selectActionComponent: e,
    queryOptions: t => (0, h.queryMentionables)(e.type, t, I),
    renderIcon: (e, t) => {
      let n = t === g.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(i.Avatar, {
          size: n ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == O ? void 0 : O.id, t),
          status: n ? null : m.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === N.SelectOptionType.ROLE) {
        var a;
        let n = null != O ? p.default.getRole(O.id, e.value) : void 0;
        if (null == n || null == O) return;
        let i = (0, s.canGuildUseRoleIcons)(O, n) ? (0, r.getRoleIconProps)(n, t) : null;
        return null != i ? (0, l.jsx)(v.default, {
          ...i
        }) : (0, l.jsx)(C.default, {
          color: null !== (a = n.colorString) && void 0 !== a ? a : (0, u.int2hex)(T.DEFAULT_ROLE_COLOR),
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === N.SelectOptionType.USER) {
        let n = f.default.getUser(e.value);
        null != n && (t = (0, l.jsx)(o.default, {
          className: y.tag,
          usernameClass: y.username,
          discriminatorClass: y.discriminator,
          botClass: y.bot,
          user: n,
          forceUsername: !0
        }))
      } else if (e.type === N.SelectOptionType.ROLE) {
        let n = null != O ? p.default.getRole(O.id, e.value) : void 0,
          a = null == n ? null : null == j ? void 0 : j[n.id];
        null != a && (t = (0, l.jsxs)("div", {
          className: y.roleCountContainer,
          children: [(0, l.jsx)(S.default, {
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
    defaultValues: L
  })
}