"use strict";
t.r(n), t.d(n, {
  default: function() {
    return j
  }
});
var l = t("735250"),
  a = t("470079"),
  s = t("866442"),
  u = t("481060"),
  i = t("129861"),
  o = t("829883"),
  r = t("518738"),
  d = t("14263"),
  c = t("592125"),
  m = t("430824"),
  p = t("158776"),
  f = t("594174"),
  S = t("964309"),
  C = t("241820"),
  E = t("176278"),
  N = t("970184"),
  v = t("280501"),
  T = t("811654"),
  h = t("344991"),
  x = t("981631"),
  y = t("41865");

function j(e) {
  var n;
  let t = (0, N.useComponentStateContext)(),
    j = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
    O = c.default.getChannel(j),
    g = m.default.getGuild(null == O ? void 0 : O.getGuildId()),
    I = (0, d.default)(null == g ? void 0 : g.id, T.MIN_REREQUEST_TIME),
    _ = a.useMemo(() => (0, T.getSnowflakeSelectDefaultValues)(e.defaultValues, null == g ? void 0 : g.id), [e.defaultValues, g]);
  return (0, l.jsx)(h.default, {
    selectActionComponent: e,
    queryOptions: n => (0, T.queryMentionables)(e.type, n, j),
    renderIcon: (e, n) => {
      let t = n === h.SelectIconSize.PILL_ICON_SIZE;
      if ((null == e ? void 0 : e.type) === v.SelectOptionType.USER) {
        let a = f.default.getUser(e.value);
        if (null == a) return;
        return (0, l.jsx)(u.Avatar, {
          size: t ? u.AvatarSizes.SIZE_16 : u.AvatarSizes.SIZE_24,
          src: a.getAvatarURL(null == g ? void 0 : g.id, n),
          status: t ? null : p.default.getStatus(a.id),
          "aria-hidden": !0
        })
      }
      if ((null == e ? void 0 : e.type) === v.SelectOptionType.ROLE) {
        var a;
        let t = null != g ? m.default.getRole(g.id, e.value) : void 0;
        if (null == t || null == g) return;
        let u = (0, o.canGuildUseRoleIcons)(g, t) ? (0, r.getRoleIconProps)(t, n) : null;
        return null != u ? (0, l.jsx)(E.default, {
          ...u
        }) : (0, l.jsx)(C.default, {
          color: null !== (a = t.colorString) && void 0 !== a ? a : (0, s.int2hex)(x.DEFAULT_ROLE_COLOR),
          height: n,
          width: n
        })
      }
    },
    renderOptionLabel: e => {
      let n = null;
      if (e.type === v.SelectOptionType.USER) {
        let t = f.default.getUser(e.value);
        null != t && (n = (0, l.jsx)(i.default, {
          className: y.tag,
          usernameClass: y.username,
          discriminatorClass: y.discriminator,
          botClass: y.bot,
          user: t,
          forceUsername: !0
        }))
      } else if (e.type === v.SelectOptionType.ROLE) {
        let t = null != g ? m.default.getRole(g.id, e.value) : void 0,
          a = null == t ? null : null == I ? void 0 : I[t.id];
        null != a && (n = (0, l.jsxs)("div", {
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
        }), n]
      })
    },
    defaultValues: _
  })
}