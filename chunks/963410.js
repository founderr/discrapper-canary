n.r(t), n.d(t, {
  default: function() {
return p;
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
  g = n(760373),
  M = n(981631),
  A = n(689938),
  T = n(846045);

function y(e) {
  let {
badgeText: t,
badgeColor: n
  } = e, a = i.useRef(t), o = i.useRef(n);
  return (0, r.jsx)(s.TextBadge, {
text: a.current,
color: o.current
  });
}

function p(e) {
  let {
transitionState: t,
userId: n,
channelId: p,
onClose: Z
  } = e, m = (0, c.Dt)(), U = (0, a.e7)([u.default], () => u.default.getUser(n)), N = (0, a.e7)([E.Z], () => {
var e;
return null === (e = E.Z.getChannel(p)) || void 0 === e ? void 0 : e.getGuildId();
  }), D = l.ZP.useName(N, null, U), {
fingerprint: F,
userKey: L,
loading: x
  } = (0, R.q)({
userId: n
  }), b = (0, S.W)({
fingerprintBase64: F,
chunkSize: g.iQ,
desiredLength: g.KN
  }), V = i.useCallback(() => {
(0, d.s$)({
  userId: n,
  channelId: p
});
  }, [
p,
n
  ]), v = (0, I.wV)({
userId: n,
channelId: p,
location: 'WebSecureFramesUserVerificationModal'
  }), {
isPersistentCode: O,
loading: k
  } = (0, f.y)({
userId: n,
isUserVerified: v
  }), w = i.useCallback(() => {
null != L && ((0, _.TQ)(n, L, O, p, M.Sbl.E2EE_USER_VERIFY_MODAL), Z());
  }, [
L,
n,
O,
p,
Z
  ]), K = i.useCallback(() => {
null != L && ((0, _.LO)(n, L, O), Z());
  }, [
L,
n,
O,
Z
  ]), [P, B] = i.useMemo(() => v ? [
A.Z.Messages.E2EE_VERIFIED,
o.Z.BG_BRAND
  ] : O ? [
A.Z.Messages.E2EE_PERSISTENT,
o.Z.STATUS_DANGER
  ] : [
A.Z.Messages.NEW,
o.Z.STATUS_DANGER
  ], [
O,
v
  ]), Y = i.useMemo(() => (O ? A.Z.Messages.E2EE_PERSISTENT_USER_VERIFICATION_FOOTER_TEXT : A.Z.Messages.E2EE_EPHEMERAL_USER_VERIFICATION_FOOTER_TEXT).format({
helpArticle: g.l4
  }), [O]);
  return i.useEffect(() => {
(0, d.Rq)({
  userId: n,
  channelId: p
});
  }, [
p,
n
  ]), (0, r.jsxs)(s.ModalRoot, {
transitionState: t,
'aria-labelledby': m,
children: [
  (0, r.jsx)('div', {
    className: T.shieldIconContainer,
    children: (0, r.jsx)('div', {
      className: T.shieldIcon,
      children: (0, r.jsx)(s.ShieldLockIcon, {
        size: 'custom',
        width: 55,
        height: 55,
        color: s.tokens.colors.HEADER_SECONDARY
      })
    })
  }),
  (0, r.jsxs)(s.ModalContent, {
    className: T.content,
    children: [
      (0, r.jsx)(s.Heading, {
        className: T.title,
        variant: 'heading-lg/bold',
        color: 'header-primary',
        children: A.Z.Messages.E2EE_VERIFICATION_CODE
      }),
      (0, r.jsx)(s.Text, {
        className: T.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: A.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: D
        })
      }),
      (0, r.jsxs)('div', {
        className: T.verification,
        children: [
          (0, r.jsxs)('div', {
            className: T.header,
            children: [
              (0, r.jsx)(s.Heading, {
                variant: 'text-sm/bold',
                color: 'header-primary',
                children: A.Z.Messages.E2EE_VOICE_PRIVACY_CODE
              }),
              null != b && (0, r.jsx)(C.H, {
                className: T.copyIcon,
                chunks: b,
                color: s.tokens.colors.INTERACTIVE_NORMAL,
                onCopy: V
              }),
              k || x ? (0, r.jsx)(s.Spinner, {
                className: T.spinner,
                type: s.SpinnerTypes.SPINNING_CIRCLE
              }) : (0, r.jsx)(y, {
                badgeText: P,
                badgeColor: B
              })
            ]
          }),
          (0, r.jsx)(h.b, {
            className: T.code,
            chunks: b,
            columns: g.ak
          })
        ]
      }),
      (0, r.jsx)(s.Text, {
        className: T.details,
        variant: 'text-sm/normal',
        color: 'text-muted',
        children: Y
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        className: T.verifiedButton,
        color: s.ButtonColors.BRAND,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        disabled: null == F || k || x,
        onClick: v ? K : w,
        children: v ? A.Z.Messages.E2EE_CLEAR_VERIFICATION : A.Z.Messages.E2EE_MARK_AS_VERIFIED
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.ButtonColors.PRIMARY,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: Z,
        children: A.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}