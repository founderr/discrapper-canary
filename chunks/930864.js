n.r(t), n.d(t, {
  ForwardModal: function() {
return b;
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
  f = n(572004),
  h = n(823379),
  E = n(859155),
  g = n(822869),
  S = n(895442),
  I = n(757853),
  A = n(912332),
  p = n(819727),
  m = n(689938),
  C = n(803519),
  L = n(621054);

function b(e) {
  let {
channelId: t,
messageId: b,
initialSelectedDestinations: N,
forwardOptions: T,
onClose: Z,
onRequestSent: y,
...x
  } = e, v = a.useMemo(() => (0, c.dL)(t), [t]), [R, M] = a.useState(!1), D = (0, i.e7)([d.Z], () => d.Z.getMessage(t, b), [
t,
b
  ]), P = (0, i.e7)([o.Z], () => o.Z.getChannel(t), [t]), O = (0, g.ZF)(), F = (0, g.mh)(), G = a.useRef(0), U = a.useRef(0), [j, k] = a.useState(N), H = j.length, Q = H >= p.G, [w, z] = a.useState(''), W = a.useCallback(e => {
z(e), U.current += 1, '' !== e && F(t, b);
  }, [
t,
b,
F
  ]), B = (0, u.s)({
searchText: w,
selectedDestinations: j,
originDestination: v,
includeMissingDMs: !0
  }), K = a.useCallback(() => {
(0, g.sF)({
  channelId: t,
  messageId: b,
  numDestinationChanges: G.current,
  numQueryChanges: U.current
}), Z();
  }, [
t,
b,
Z
  ]), Y = a.useCallback(() => {
var e;
let n = null === (e = o.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
if (null == n)
  return;
let l = (0, _.wR)(n, t, b);
(0, s.showToast)((0, s.createToast)(m.Z.Messages.COPIED_LINK, s.ToastType.LINK)), (0, f.JG)(l), (0, g.xp)(t, b);
  }, [
t,
b
  ]), q = a.useCallback(() => {
z('');
  }, [z]), X = a.useRef(null);
  a.useEffect(() => {
if ('' === w) {
  var e;
  null === (e = X.current) || void 0 === e || e.focus();
}
  }, [w]);
  let V = a.useCallback(e => {
  O(t, b, '' !== w), k(t => {
    let n = t.findIndex(t => {
      let {
        type: n,
        id: l
      } = t;
      return n === e.type && l === e.id;
    });
    if (-1 === n)
      return Q ? t : (z(''), G.current += 1, [
        e,
        ...t
      ]);
    let l = [...t];
    return l.splice(n, 1), G.current += 1, l;
  });
}, [
  t,
  Q,
  b,
  w,
  O
]),
J = a.useCallback(async () => {
  let e = d.Z.getMessage(t, b);
  if (null == e) {
    (0, s.showToast)((0, s.createToast)(m.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
    return;
  }
  M(!0);
  let a = (await Promise.all(j.map(c.qx))).filter(h.lm);
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
    M(!1);
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
      messageId: b,
      hasError: !1,
      numDestinations: a.length,
      numDestinationChanges: G.current,
      numQueryChanges: U.current
    }), (0, s.showToast)((0, s.createToast)(m.Z.Messages.MESSAGE_FORWARD_SUCCESS, s.ToastType.FORWARD));
    return;
  }
  (0, g.gP)({
    channelId: t,
    messageId: b,
    hasError: !0,
    numDestinations: a.length,
    numDestinationChanges: G.current,
    numQueryChanges: U.current
  });
  let u = j.filter((e, t) => 'rejected' === i[t].status);
  (0, A.Np)({
    messageId: b,
    channelId: t,
    failedDestinations: u,
    forwardOptions: T
  });
}, [
  t,
  T,
  b,
  j,
  y
]);
  if (null == D || null == P)
return null;
  let $ = B.length > 0 ? (0, l.jsx)(I.F, {
  paddingBottom: 16,
  paddingTop: 16,
  rowData: B,
  message: D,
  originChannel: P,
  handleToggleDestination: V,
  selectedDestinations: j,
  disableSelection: Q
}) : (0, l.jsxs)(s.ModalContent, {
  className: C.noResults,
  children: [
    (0, l.jsx)('img', {
      className: C.noResultsImg,
      src: L,
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
        ref: X,
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