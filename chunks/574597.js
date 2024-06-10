"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("735250"),
  a = n("470079"),
  u = n("866442"),
  i = n("481060"),
  s = n("129861"),
  o = n("829883"),
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
  T = n("344991"),
  I = n("981631"),
  g = n("879565");

function y(e) {
  var t;
  let n = (0, E.useComponentStateContext)(),
    y = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.getChannelId(),
    x = c.default.getChannel(y),
    O = p.default.getGuild(null == x ? void 0 : x.getGuildId()),
    _ = (0, d.default)(null == O ? void 0 : O.id, h.MIN_REREQUEST_TIME),
    j = a.useMemo(() => (0, h.getSnowflakeSelectDefaultValues)(e.defaultValues, null == O ? void 0 : O.id), [e.defaultValues, O]);
  return (0, l.jsx)(T.default, {
    selectActionComponent: e,
    queryOptions: t => (0, h.queryMentionables)(e.type, t, y),
    renderIcon: (e, t) => {
      let n = t === T.SelectIconSize.PILL_ICON_SIZE;
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
        let i = (0, o.canGuildUseRoleIcons)(O, n) ? (0, r.getRoleIconProps)(n, t) : null;
        return null != i ? (0, l.jsx)(v.default, {
          ...i
        }) : (0, l.jsx)(C.default, {
          color: null !== (a = n.colorString) && void 0 !== a ? a : (0, u.int2hex)(I.DEFAULT_ROLE_COLOR),
          height: t,
          width: t
        })
      }
    },
    renderOptionLabel: e => {
      let t = null;
      if (e.type === N.SelectOptionType.USER) {
        let n = f.default.getUser(e.value);
        null != n && (t = (0, l.jsx)(s.default, {
          className: g.tag,
          usernameClass: g.username,
          discriminatorClass: g.discriminator,
          botClass: g.bot,
          user: n,
          forceUsername: !0
        }))
      } else if (e.type === N.SelectOptionType.ROLE) {
        let n = null != O ? p.default.getRole(O.id, e.value) : void 0,
          a = null == n ? null : null == _ ? void 0 : _[n.id];
        null != a && (t = (0, l.jsxs)("div", {
          className: g.roleCountContainer,
          children: [(0, l.jsx)(S.default, {
            className: g.roleCountIcon,
            height: 18,
            width: 18
          }), (0, l.jsx)("span", {
            className: g.roleCountText,
            children: a
          })]
        }))
      }
      return (0, l.jsxs)("span", {
        className: g.label,
        children: [(0, l.jsx)("span", {
          className: g.labelText,
          children: e.label
        }), t]
      })
    },
    defaultValues: j
  })
}