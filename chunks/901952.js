n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(906732),
  u = n(541716),
  c = n(752305),
  d = n(893718),
  _ = n(131704),
  E = n(5192),
  f = n(785717),
  h = n(910128),
  p = n(485216),
  m = n(261253),
  I = n(7242),
  T = n(934861),
  g = n(981631),
  S = n(689938),
  A = n(663054),
  N = n(589273);
let v = (0, _.kt)({
  id: '1',
  type: g.d4z.DM
});

function O(e) {
  let {
user: t,
guildId: n,
channelId: a,
onClose: _
  } = e, {
newestAnalyticsLocation: g
  } = (0, l.ZP)(), {
trackUserProfileAction: O
  } = (0, f.KZ)(), {
messageCtaEnabled: R,
activeInviteToCallCtaEnabled: C,
persistentCallCtaEnabled: y
  } = (0, h.l)({
location: 'BiteSizeProfileDirectMessageSection'
  }), [D, L] = i.useState(''), [b, M] = i.useState((0, c.JM)(D)), P = i.useRef(!1);
  if (R) {
let e = (0, r.jsx)(I.Z, {
  user: t,
  className: N.biteSizeButton
});
return C && null != e ? (0, r.jsxs)('div', {
  className: N.ctaRow,
  children: [
    (0, r.jsx)(T.c, {
      userId: t.id,
      fullWidth: !0,
      color: N.engagementExpButton,
      className: N.biteSizeButton,
      onClose: _
    }),
    e
  ]
}) : y ? (0, r.jsxs)('div', {
  className: N.ctaRow,
  children: [
    (0, r.jsx)(T.c, {
      userId: t.id,
      fullWidth: !0,
      color: s()(o.Button.Colors.BRAND, A.color),
      className: N.biteSizeButton,
      onClose: _
    }),
    (0, r.jsx)(m.Z, {
      user: t,
      onClose: _,
      className: s()(N.engagementExpButton, N.biteSizeIconButton)
    })
  ]
}) : (0, r.jsx)(T.c, {
  userId: t.id,
  fullWidth: !0,
  className: N.biteSizeButton,
  color: s()(o.Button.Colors.BRAND, A.color),
  onClose: _
});
  }
  return (0, r.jsx)(d.Z, {
innerClassName: N.inner,
editorClassName: N.editor,
type: u.I.USER_PROFILE,
placeholder: S.Z.Messages.QUICK_DM_USER.format({
  name: E.ZP.getName(n, a, t)
}),
channel: v,
textValue: D,
richValue: b,
onChange: (e, t, n) => {
  if (t !== D)
    L(t), M(n);
},
focused: P.current,
onFocus: () => {
  P.current = !0;
},
onBlur: () => {
  P.current = !1;
},
onSubmit: async e => {
  let {
    value: n
  } = e;
  try {
    return O({
      action: 'SEND_DIRECT_MESSAGE'
    }), await (0, p.Z)({
      userId: t.id,
      content: n.trim(),
      location: g
    }), null == _ || _(), {
      shouldClear: !0,
      shouldRefocus: !1
    };
  } catch {
    return {
      shouldClear: !1,
      shouldRefocus: !1
    };
  }
}
  });
}