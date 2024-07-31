n.r(t), n.d(t, {
  default: function() {
return Z;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(377171),
  E = n(592125),
  u = n(594174),
  c = n(153124),
  l = n(5192),
  d = n(571826),
  _ = n(630759),
  f = n(539067),
  I = n(210975),
  S = n(301107),
  R = n(65692),
  h = n(785792),
  C = n(190054),
  y = n(760373),
  A = n(981631),
  M = n(689938),
  g = n(846045);

function T(e) {
  let {
badgeText: t,
badgeColor: n
  } = e, a = i.useRef(t), o = i.useRef(n);
  return (0, r.jsx)(s.TextBadge, {
text: a.current,
color: o.current
  });
}

function Z(e) {
  let {
transitionState: t,
userId: n,
channelId: Z,
onClose: p
  } = e, m = (0, c.Dt)(), U = (0, a.e7)([u.default], () => u.default.getUser(n)), N = (0, a.e7)([E.Z], () => {
var e;
return null === (e = E.Z.getChannel(Z)) || void 0 === e ? void 0 : e.getGuildId();
  }), D = l.ZP.useName(N, null, U), {
fingerprint: F,
userKey: L,
loading: b
  } = (0, R.q)({
userId: n
  }), x = (0, S.W)({
fingerprintBase64: F,
chunkSize: y.iQ,
desiredLength: y.KN
  }), v = i.useCallback(() => {
(0, d.s$)({
  userId: n,
  channelId: Z
});
  }, [
Z,
n
  ]), O = (0, I.wV)({
userId: n,
channelId: Z,
location: 'WebSecureFramesUserVerificationModal'
  }), {
isPersistentCode: V,
loading: k
  } = (0, f.y)({
userId: n
  }), K = i.useCallback(() => {
null != L && ((0, _.TQ)(n, L, V, Z, A.Sbl.E2EE_USER_VERIFY_MODAL), p());
  }, [
L,
n,
V,
Z,
p
  ]), w = i.useCallback(() => {
null != L && ((0, _.LO)(n, L, V), p());
  }, [
L,
n,
V,
p
  ]), [P, B] = i.useMemo(() => O ? [
M.Z.Messages.E2EE_VERIFIED,
o.Z.BG_BRAND
  ] : V ? [
M.Z.Messages.E2EE_PERSISTENT,
o.Z.STATUS_DANGER
  ] : [
M.Z.Messages.NEW,
o.Z.STATUS_DANGER
  ], [
V,
O
  ]), Y = i.useMemo(() => (V ? M.Z.Messages.E2EE_PERSISTENT_USER_VERIFICATION_FOOTER_TEXT : M.Z.Messages.E2EE_EPHEMERAL_USER_VERIFICATION_FOOTER_TEXT).format({
helpArticle: y.l4
  }), [V]);
  return i.useEffect(() => {
(0, d.Rq)({
  userId: n,
  channelId: Z
});
  }, [
Z,
n
  ]), (0, r.jsxs)(s.ModalRoot, {
transitionState: t,
'aria-labelledby': m,
children: [
  (0, r.jsx)('div', {
    className: g.shieldIconContainer,
    children: (0, r.jsx)('div', {
      className: g.shieldIcon,
      children: (0, r.jsx)(s.ShieldLockIcon, {
        size: 'custom',
        width: 55,
        height: 55,
        color: s.tokens.colors.HEADER_SECONDARY
      })
    })
  }),
  (0, r.jsxs)(s.ModalContent, {
    className: g.content,
    children: [
      (0, r.jsx)(s.Heading, {
        className: g.title,
        variant: 'heading-lg/bold',
        color: 'header-primary',
        children: M.Z.Messages.E2EE_VERIFICATION_CODE
      }),
      (0, r.jsx)(s.Text, {
        className: g.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: M.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: D
        })
      }),
      (0, r.jsxs)('div', {
        className: g.verification,
        children: [
          (0, r.jsxs)('div', {
            className: g.header,
            children: [
              (0, r.jsx)(s.Heading, {
                variant: 'text-sm/bold',
                color: 'header-primary',
                children: M.Z.Messages.E2EE_VOICE_PRIVACY_CODE
              }),
              null != x && (0, r.jsx)(C.H, {
                className: g.copyIcon,
                chunks: x,
                color: s.tokens.colors.INTERACTIVE_NORMAL,
                onCopy: v
              }),
              k || b ? (0, r.jsx)(s.Spinner, {
                className: g.spinner,
                type: s.SpinnerTypes.SPINNING_CIRCLE
              }) : (0, r.jsx)(T, {
                badgeText: P,
                badgeColor: B
              })
            ]
          }),
          (0, r.jsx)(h.b, {
            className: g.code,
            chunks: x,
            columns: y.ak
          })
        ]
      }),
      (0, r.jsx)(s.Text, {
        className: g.details,
        variant: 'text-sm/normal',
        color: 'text-muted',
        children: Y
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        className: g.verifiedButton,
        color: s.ButtonColors.BRAND,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        disabled: null == F || k || b,
        onClick: O ? w : K,
        children: O ? M.Z.Messages.E2EE_CLEAR_VERIFICATION : M.Z.Messages.E2EE_MARK_AS_VERIFIED
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.ButtonColors.PRIMARY,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: p,
        children: M.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}