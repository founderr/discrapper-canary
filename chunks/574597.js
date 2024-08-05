t.d(n, {
  Z: function() {
return T;
  }
});
var l = t(735250),
  r = t(470079),
  i = t(866442),
  a = t(481060),
  o = t(129861),
  s = t(91218),
  c = t(829883),
  u = t(518738),
  d = t(14263),
  m = t(592125),
  f = t(430824),
  _ = t(158776),
  p = t(594174),
  v = t(970184),
  C = t(280501),
  h = t(811654),
  x = t(344991),
  I = t(981631),
  E = t(56816);

function T(e) {
  var n;
  let t = (0, v.CJ)(),
T = null == t ? void 0 : null === (n = t.message) || void 0 === n ? void 0 : n.getChannelId(),
N = m.Z.getChannel(T),
g = f.Z.getGuild(null == N ? void 0 : N.getGuildId()),
S = (0, d.Z)(null == g ? void 0 : g.id, h.HI),
b = r.useMemo(() => (0, h.tx)(e.defaultValues, null == g ? void 0 : g.id), [
  e.defaultValues,
  g
]);
  return (0, l.jsx)(x.ZP, {
selectActionComponent: e,
queryOptions: n => (0, h._H)(e.type, n, T),
renderIcon: (e, n) => {
  let t = n === x.tE.PILL_ICON_SIZE;
  if ((null == e ? void 0 : e.type) === C.tM.USER) {
    let r = p.default.getUser(e.value);
    if (null == r)
      return;
    return (0, l.jsx)(a.Avatar, {
      size: t ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
      src: r.getAvatarURL(null == g ? void 0 : g.id, n),
      status: t ? null : _.Z.getStatus(r.id),
      'aria-hidden': !0
    });
  }
  if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
    var r;
    let t = null != g ? f.Z.getRole(g.id, e.value) : void 0;
    if (null == t || null == g)
      return;
    let o = (0, c._b)(g, t) ? (0, u.Kz)(t, n) : null;
    return null != o ? (0, l.jsx)(s.Z, {
      ...o
    }) : (0, l.jsx)(a.ShieldUserIcon, {
      size: 'custom',
      color: null !== (r = t.colorString) && void 0 !== r ? r : (0, i.Rf)(I.p6O),
      height: n,
      width: n
    });
  }
},
renderOptionLabel: e => {
  let n = null;
  if (e.type === C.tM.USER) {
    let t = p.default.getUser(e.value);
    null != t && (n = (0, l.jsx)(o.Z, {
      className: E.tag,
      usernameClass: E.username,
      discriminatorClass: E.discriminator,
      botClass: E.bot,
      user: t,
      forceUsername: !0
    }));
  } else if (e.type === C.tM.ROLE) {
    let t = null != g ? f.Z.getRole(g.id, e.value) : void 0,
      r = null == t ? null : null == S ? void 0 : S[t.id];
    null != r && (n = (0, l.jsxs)('div', {
      className: E.roleCountContainer,
      children: [
        (0, l.jsx)(a.UserIcon, {
          size: 'sm',
          color: 'currentColor',
          className: E.roleCountIcon
        }),
        (0, l.jsx)('span', {
          className: E.roleCountText,
          children: r
        })
      ]
    }));
  }
  return (0, l.jsxs)('span', {
    className: E.label,
    children: [
      (0, l.jsx)('span', {
        className: E.labelText,
        children: e.label
      }),
      n
    ]
  });
},
defaultValues: b
  });
}