n.r(t), n.d(t, {
  ForwardModal: function() {
    return N
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  s = n(442837),
  i = n(481060),
  r = n(359110),
  u = n(987509),
  o = n(72214),
  c = n(592125),
  d = n(375954),
  E = n(934415),
  _ = n(572004),
  h = n(823379),
  S = n(859155),
  f = n(822869),
  g = n(757853),
  A = n(912332),
  I = n(819727),
  p = n(689938),
  C = n(971892),
  m = n(621054);

function N(e) {
  let {
    channelId: t,
    messageId: n,
    initialSelectedDestinations: N,
    forwardOptions: T,
    onClose: L,
    onRequestSent: b,
    ...Z
  } = e, [y, x] = a.useState(""), v = a.useMemo(() => ({
    type: "channel",
    id: t
  }), [t]), [R, M] = a.useState(N), [P, O] = a.useState(!1), D = R.length, F = D >= I.G, G = (0, s.e7)([d.Z], () => d.Z.getMessage(t, n), [t, n]), U = (0, s.e7)([c.Z], () => c.Z.getChannel(t), [t]), j = (0, o.s)({
    searchText: y,
    selectedDestinations: R,
    originDestination: v
  }), k = a.useCallback(() => {
    (0, f.sF)(t, n), L()
  }, [t, n, L]), H = a.useCallback(() => {
    var e;
    let l = null === (e = c.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
    if (null == l) return;
    let a = (0, E.wR)(l, t, n);
    (0, i.showToast)((0, i.createToast)(p.Z.Messages.COPIED_LINK, i.ToastType.LINK)), (0, _.JG)(a)
  }, [t, n]), Q = a.useCallback(() => {
    x("")
  }, [x]), z = a.useRef(null);
  a.useEffect(() => {
    if ("" === y) {
      var e;
      null === (e = z.current) || void 0 === e || e.focus()
    }
  }, [y]);
  let w = a.useCallback(e => {
      M(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (-1 === n) return F ? t : (x(""), [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), l
      })
    }, [F]),
    W = a.useCallback(async () => {
      let e = d.Z.getMessage(t, n);
      if (null == e) {
        (0, i.showToast)((0, i.createToast)(p.Z.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
        return
      }
      O(!0);
      let l = R.map(u.Be).filter(h.lm);
      (0, A.mc)(), null == b || b(), 1 === l.length && (0, r.Kh)(l[0]);
      let a = await S.Z.sendForwards(e, l, T);
      if (a.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, f.gP)(t, n, !1, l.length), (0, i.showToast)((0, i.createToast)(p.Z.Messages.MESSAGE_FORWARD_SUCCESS, i.ToastType.FORWARD));
        return
      }(0, f.gP)(t, n, !0, l.length);
      let s = R.filter((e, t) => "rejected" === a[t].status);
      (0, A.Np)({
        messageId: n,
        channelId: t,
        failedDestinations: s,
        forwardOptions: T
      })
    }, [t, T, n, R, b]);
  if (null == G || null == U) return null;
  let K = j.length > 0 ? (0, l.jsx)(g.F, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: j,
      message: G,
      originChannel: U,
      handleToggleDestination: w,
      selectedDestinations: R,
      disableSelection: F
    }) : (0, l.jsxs)(i.ModalContent, {
      className: C.noResults,
      children: [(0, l.jsx)("img", {
        className: C.noResultsImg,
        src: m,
        alt: ""
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: p.Z.Messages.SEARCH_NO_RESULTS
      })]
    }),
    Y = D <= 1 ? p.Z.Messages.SEND : p.Z.Messages.MESSAGES_SEND_SEPARATELY.format({
      count: D
    });
  return (0, l.jsxs)(i.ModalRoot, {
    className: C.modal,
    "aria-label": p.Z.Messages.MESSAGE_ACTION_FORWARD_TO,
    ...Z,
    children: [(0, l.jsxs)(i.ModalHeader, {
      className: C.header,
      children: [(0, l.jsxs)("div", {
        className: C.titleLine,
        children: [(0, l.jsxs)("div", {
          className: C.title,
          children: [(0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: p.Z.Messages.MESSAGE_ACTION_FORWARD_TO
          }), F ? (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-warning",
            children: p.Z.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
              count: I.G
            })
          }) : null]
        }), (0, l.jsx)(i.ModalCloseButton, {
          className: C.closeButton,
          onClick: k
        })]
      }), (0, l.jsx)(i.SearchBar, {
        ref: z,
        size: i.SearchBar.Sizes.MEDIUM,
        query: y,
        onChange: x,
        onClear: Q,
        placeholder: p.Z.Messages.SEARCH,
        "aria-label": p.Z.Messages.SEARCH,
        autoFocus: !0
      })]
    }), K, (0, l.jsxs)(i.ModalFooter, {
      className: C.footer,
      children: [(0, l.jsx)(i.Button, {
        submitting: P,
        disabled: 0 === D,
        onClick: W,
        children: Y
      }), (0, l.jsx)(i.Button, {
        onClick: H,
        look: i.Button.Looks.OUTLINED,
        color: i.Button.Colors.PRIMARY,
        children: p.Z.Messages.COPY_LINK
      })]
    })]
  })
}