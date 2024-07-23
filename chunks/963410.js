n.r(t), n.d(t, {
  default: function() {
return g;
  }
}), n(642549), n(47120);
var r = n(735250),
  a = n(470079),
  o = n(442837),
  s = n(481060),
  i = n(377171),
  c = n(592125),
  E = n(594174),
  u = n(153124),
  l = n(5192),
  d = n(571826),
  _ = n(630759),
  f = n(716244),
  I = n(210975),
  S = n(436055),
  C = n(785792),
  R = n(190054),
  h = n(760373),
  M = n(981631),
  T = n(689938),
  p = n(958153);

function g(e) {
  let {
transitionState: t,
userId: n,
channelId: g,
onClose: A
  } = e, m = (0, u.Dt)(), N = (0, o.e7)([E.default], () => E.default.getUser(n)), Z = (0, o.e7)([c.Z], () => {
var e;
return null === (e = c.Z.getChannel(g)) || void 0 === e ? void 0 : e.getGuildId();
  }), U = l.ZP.useName(Z, null, N), D = btoa('12345'.repeat(12)), x = (0, S.E)({
codeBase64: btoa('12345'.repeat(12)),
chunkSize: h.iQ,
desiredLength: h.KN
  }), y = a.useCallback(() => {
(0, _.TQ)(n, D, g, M.Sbl.E2EE_USER_VERIFY_MODAL), A();
  }, [
n,
D,
g,
A
  ]), O = a.useCallback(() => {
(0, _.KF)(n, D), A();
  }, [
A,
D,
n
  ]), F = a.useCallback(() => {
(0, d.s$)({
  userId: n,
  channelId: g
});
  }, [
g,
n
  ]), b = (0, I.wV)({
userId: n,
channelId: g,
location: 'WebSecureFramesUserVerificationModal'
  }), {
isPersistentCode: k,
loading: L
  } = (0, f.l)({
otherUserId: n,
isOtherUserVerified: b
  }), [v, V] = a.useMemo(() => b ? [
T.Z.Messages.E2EE_VERIFIED,
i.Z.BG_BRAND
  ] : k ? [
T.Z.Messages.E2EE_PERSISTENT,
i.Z.STATUS_DANGER
  ] : [
T.Z.Messages.NEW,
i.Z.STATUS_DANGER
  ], [
k,
b
  ]), P = a.useMemo(() => (k ? T.Z.Messages.E2EE_PERSISTENT_USER_VERIFICATION_FOOTER_TEXT : T.Z.Messages.E2EE_EPHEMERAL_USER_VERIFICATION_FOOTER_TEXT).format({
helpArticle: h.l4
  }), [k]);
  return a.useEffect(() => {
(0, d.Rq)({
  userId: n,
  channelId: g
});
  }, [
g,
n
  ]), (0, r.jsxs)(s.ModalRoot, {
transitionState: t,
'aria-labelledby': m,
children: [
  (0, r.jsx)('div', {
    className: p.shieldIconContainer,
    children: (0, r.jsx)('div', {
      className: p.shieldIcon,
      children: (0, r.jsx)(s.ShieldLockIcon, {
        size: 'custom',
        width: 55,
        height: 55,
        color: s.tokens.colors.HEADER_SECONDARY
      })
    })
  }),
  (0, r.jsxs)(s.ModalContent, {
    className: p.content,
    children: [
      (0, r.jsx)(s.Heading, {
        className: p.title,
        variant: 'heading-lg/bold',
        color: 'header-primary',
        children: T.Z.Messages.E2EE_VERIFICATION_CODE
      }),
      (0, r.jsx)(s.Text, {
        className: p.subtitle,
        variant: 'text-md/normal',
        color: 'header-secondary',
        children: T.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
          username: U
        })
      }),
      (0, r.jsxs)('div', {
        className: p.verification,
        children: [
          (0, r.jsxs)('div', {
            className: p.header,
            children: [
              (0, r.jsx)(s.Heading, {
                variant: 'text-sm/bold',
                color: 'header-primary',
                children: T.Z.Messages.E2EE_VOICE_PRIVACY_CODE
              }),
              null != x && (0, r.jsx)(R.H, {
                className: p.copyIcon,
                chunks: x,
                color: s.tokens.colors.INTERACTIVE_NORMAL,
                onCopy: F
              }),
              L && !b ? (0, r.jsx)(s.Spinner, {
                className: p.spinner,
                type: s.SpinnerTypes.SPINNING_CIRCLE
              }) : (0, r.jsx)(s.TextBadge, {
                text: v,
                color: V
              })
            ]
          }),
          (0, r.jsx)(C.b, {
            className: p.code,
            chunks: x,
            columns: h.ak
          })
        ]
      }),
      (0, r.jsx)(s.Text, {
        className: p.details,
        variant: 'text-sm/normal',
        color: 'text-muted',
        children: P
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        className: p.verifiedButton,
        color: s.ButtonColors.BRAND,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: b ? O : y,
        children: b ? T.Z.Messages.E2EE_CLEAR_VERIFICATION : T.Z.Messages.E2EE_MARK_AS_VERIFIED
      }),
      (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.ButtonColors.PRIMARY,
        size: s.ButtonSizes.MEDIUM,
        look: s.ButtonLooks.FILLED,
        onClick: A,
        children: T.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}