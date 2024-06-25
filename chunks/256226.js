"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(866442),
  u = n(442837),
  _ = n(692547),
  c = n(481060),
  d = n(239091),
  E = n(607070),
  I = n(134433),
  T = n(518738),
  h = n(176278),
  f = n(689938),
  S = n(491136);
t.Z = r.forwardRef(function(e, t) {
  var s, A, N;
  let m;
  let {
    canRemove: O,
    className: p,
    role: R,
    onRemove: g,
    guildId: C,
    disableBorderColor: v,
    onMouseDown: L
  } = e, {
    tabIndex: D,
    ...M
  } = (0, a.JA)(R.id), P = (0, T.p9)({
    roleId: R.id,
    size: 16,
    guildId: C
  }), y = (0, u.e7)([E.Z], () => E.Z.roleStyle), U = (null === (s = R.tags) || void 0 === s ? void 0 : s.guild_connections) === null, b = r.useCallback(e => {
    (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, {
        ...t,
        id: R.id,
        label: f.Z.Messages.COPY_ID_ROLE
      })
    })
  }, [R.id]), G = (0, c.useToken)(_.Z.unsafe_rawColors.PRIMARY_300).hsl(), w = null !== (A = R.colorString) && void 0 !== A ? A : G, x = null !== (N = (0, l.wK)(w, .6)) && void 0 !== N ? N : void 0, B = _.Z.unsafe_rawColors.WHITE_500.css, k = (0, l._i)(w);
  null != k && .3 > (0, l.Bd)(k) && (B = _.Z.unsafe_rawColors.PRIMARY_630.css), m = U ? (0, i.jsx)(I.Z, {
    className: S.roleFlowerStar,
    iconClassName: O ? S.roleVerifiedIcon : void 0,
    color: w,
    size: 14
  }) : "dot" === y ? (0, i.jsx)(c.RoleDot, {
    className: S.roleDot,
    color: w,
    background: !1,
    tooltip: !1
  }) : (0, i.jsx)(c.RoleCircle, {
    color: w,
    className: S.roleCircle
  });
  let V = r.useMemo(() => {
    var t;
    return {
      borderColor: v ? void 0 : x,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [x, v, e.style]);
  return (0, i.jsx)(c.FocusRing, {
    children: (0, i.jsxs)("div", {
      ref: t,
      className: o()(S.role, p),
      style: V,
      onContextMenu: b,
      onMouseDown: L,
      "aria-label": R.name,
      tabIndex: D,
      ...M,
      children: [O ? (0, i.jsx)(c.TooltipContainer, {
        text: f.Z.Messages.USER_PROFILE_REMOVE_ROLE,
        children: (0, i.jsxs)(c.Clickable, {
          className: o()(S.roleRemoveButtonCanRemove, S.roleRemoveButton),
          onClick: g,
          tabIndex: D,
          focusProps: {
            focusClassName: S.roleRemoveIconFocused
          },
          "aria-hidden": !1,
          "aria-label": f.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
            roleName: R.name
          }),
          children: [m, (0, i.jsx)(c.CloseSmallIcon, {
            size: "md",
            color: B,
            className: S.roleRemoveIcon,
            "aria-hidden": !0
          })]
        })
      }) : (0, i.jsx)(c.Clickable, {
        className: S.roleRemoveButton,
        tabIndex: -1,
        focusProps: {
          focusClassName: S.roleRemoveIconFocused
        },
        "aria-hidden": !0,
        "aria-label": f.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: R.name
        }),
        children: m
      }), null != P ? (0, i.jsx)(h.Z, {
        className: S.roleIcon,
        ...P,
        enableTooltip: !1
      }) : null, (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: S.roleName,
        children: (0, i.jsx)(c.Text, {
          variant: "text-xs/medium",
          className: S.roleNameOverflow,
          children: R.name
        })
      })]
    })
  })
})