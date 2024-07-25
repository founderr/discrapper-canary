n.r(t), n.d(t, {
  ForwardModal: function() {
return L;
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(442837),
  s = n(481060),
  r = n(359110),
  c = n(987509),
  u = n(72214),
  o = n(592125),
  d = n(375954),
  _ = n(934415),
  h = n(572004),
  f = n(823379),
  E = n(859155),
  g = n(822869),
  S = n(895442),
  I = n(757853),
  A = n(912332),
  p = n(819727),
  m = n(689938),
  C = n(803519),
  N = n(621054);

function L(e) {
  let {
channelId: t,
messageId: L,
initialSelectedDestinations: b,
forwardOptions: T,
onClose: Z,
onRequestSent: y,
...x
  } = e, v = a.useMemo(() => (0, c.dL)(t), [t]), [R, P] = a.useState(!1), M = (0, i.e7)([d.Z], () => d.Z.getMessage(t, L), [
t,
L
  ]), D = (0, i.e7)([o.Z], () => o.Z.getChannel(t), [t]), O = (0, g.ZF)(), G = (0, g.mh)(), F = a.useRef(0), U = a.useRef(0), [k, j] = a.useState(b), H = k.length, Q = H >= p.G, [w, z] = a.useState(''), W = a.useCallback(e => {
z(e), U.current += 1, '' !== e && G(t, L);
  }, [
t,
L,
G
  ]), B = (0, u.s)({
searchText: w,
selectedDestinations: k,
originDestination: v,
includeMissingDMs: !0
  }), K = a.useCallback(() => {
(0, g.sF)({
  channelId: t,
  messageId: L,
  numDestinationChanges: F.current,
  numQueryChanges: U.current
}), Z();
  }, [
t,
L,
Z
  ]), Y = a.useCallback(() => {
var e;
let n = null === (e = o.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
if (null == n)
  return;
let l = (0, _.wR)(n, t, L);
(0, s.showToast)((0, s.createToast)(m.Z.Messages.COPIED_LINK, s.ToastType.LINK)), (0, h.JG)(l), (0, g.xp)(t, L);
  }, [
t,
L
  ]), q = a.useCallback(() => {
z('');
  }, [z]), V = a.useRef(null);
  a.useEffect(() => {
if ('' === w) {
  var e;
  null === (e = V.current) || void 0 === e || e.focus();
}
  }, [w]);
  let X = a.useCallback(e => {
  O(t, L, '' !== w), j(t => {
    let n = t.findIndex(t => {
      let {
        type: n,
        id: l
      } = t;
      return n === e.type && l === e.id;
    });
    if (-1 === n)
      return Q ? t : (z(''), F.current += 1, [
        e,
        ...t
      ]);
    let l = [...t];
    return l.splice(n, 1), F.current += 1, l;
  });
}, [
  t,
  Q,
  L,
  w,
  O
]),
J = a.useCallback(async () => {
  let e = d.Z.getMessage(t, L);
  if (null == e) {
    (0, s.showToast)((0, s.createToast)(m.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
    return;
  }
  P(!0);
  let a = (await Promise.all(k.map(c.qx))).filter(f.lm);
  if ((0, S.Z)(e, a) && !await new Promise(e => {
      (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.e('88643').then(n.bind(n, 466080));
        return n => (0, l.jsx)(t, {
          ...n,
          onConfirm: () => e(!0),
          onBack: () => e(!1)
        });
      });
    })) {
    P(!1);
    return;
  }
  (0, A.mc)(), null == y || y(), 1 === a.length && (0, r.Kh)(a[0]);
  let i = await E.Z.sendForwards(e, a, T);
  if (i.every(e => {
      let {
        status: t
      } = e;
      return 'fulfilled' === t;
    })) {
    (0, g.gP)({
      channelId: t,
      messageId: L,
      hasError: !1,
      numDestinations: a.length,
      numDestinationChanges: F.current,
      numQueryChanges: U.current
    }), (0, s.showToast)((0, s.createToast)(m.Z.Messages.MESSAGE_FORWARD_SUCCESS, s.ToastType.FORWARD));
    return;
  }
  (0, g.gP)({
    channelId: t,
    messageId: L,
    hasError: !0,
    numDestinations: a.length,
    numDestinationChanges: F.current,
    numQueryChanges: U.current
  });
  let u = k.filter((e, t) => 'rejected' === i[t].status);
  (0, A.Np)({
    messageId: L,
    channelId: t,
    failedDestinations: u,
    forwardOptions: T
  });
}, [
  t,
  T,
  L,
  k,
  y
]);
  if (null == M || null == D)
return null;
  let $ = B.length > 0 ? (0, l.jsx)(I.F, {
  paddingBottom: 16,
  paddingTop: 16,
  rowData: B,
  message: M,
  originChannel: D,
  handleToggleDestination: X,
  selectedDestinations: k,
  disableSelection: Q
}) : (0, l.jsxs)(s.ModalContent, {
  className: C.noResults,
  children: [
    (0, l.jsx)('img', {
      className: C.noResultsImg,
      src: N,
      alt: ''
    }),
    (0, l.jsx)(s.Text, {
      variant: 'text-md/normal',
      color: 'text-muted',
      children: m.Z.Messages.SEARCH_NO_RESULTS
    })
  ]
}),
ee = H <= 1 ? m.Z.Messages.SEND : m.Z.Messages.MESSAGES_SEND_SEPARATELY.format({
  count: H
});
  return (0, l.jsxs)(s.ModalRoot, {
className: C.modal,
'aria-label': m.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
...x,
children: [
  (0, l.jsxs)(s.ModalHeader, {
    className: C.header,
    children: [
      (0, l.jsxs)('div', {
        className: C.titleLine,
        children: [
          (0, l.jsxs)('div', {
            className: C.title,
            children: [
              (0, l.jsx)(s.Heading, {
                variant: 'heading-lg/semibold',
                children: m.Z.Messages.MESSAGE_ACTION_FORWARD_TO
              }),
              Q ? (0, l.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'text-warning',
                children: m.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
                  count: p.G
                })
              }) : null
            ]
          }),
          (0, l.jsx)(s.ModalCloseButton, {
            className: C.closeButton,
            onClick: K
          })
        ]
      }),
      (0, l.jsx)(s.SearchBar, {
        ref: V,
        size: s.SearchBar.Sizes.MEDIUM,
        query: w,
        onChange: W,
        onClear: q,
        placeholder: m.Z.Messages.SEARCH,
        'aria-label': m.Z.Messages.SEARCH,
        autoFocus: !0
      })
    ]
  }),
  $,
  (0, l.jsxs)(s.ModalFooter, {
    className: C.footer,
    children: [
      (0, l.jsx)(s.Button, {
        submitting: R,
        disabled: 0 === H,
        onClick: J,
        children: ee
      }),
      (0, l.jsx)(s.Button, {
        onClick: Y,
        look: s.Button.Looks.OUTLINED,
        color: s.Button.Colors.PRIMARY,
        children: m.Z.Messages.COPY_LINK
      })
    ]
  })
]
  });
}