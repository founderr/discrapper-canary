"use strict";
l.r(t), l.d(t, {
  ForwardModal: function() {
    return C
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("442837"),
  i = l("481060"),
  u = l("359110"),
  r = l("987509"),
  o = l("72214"),
  d = l("592125"),
  c = l("375954"),
  f = l("6048"),
  A = l("934415"),
  _ = l("572004"),
  E = l("823379"),
  p = l("859155"),
  I = l("822869"),
  S = l("757853"),
  h = l("912332"),
  m = l("819727"),
  T = l("689938"),
  g = l("715270"),
  y = l("621054");

function C(e) {
  let {
    channelId: t,
    messageId: l,
    initialSelectedDestinations: C,
    forwardOptions: N,
    onClose: L,
    ...R
  } = e, [b, D] = a.useState(""), M = a.useMemo(() => ({
    type: "channel",
    id: t
  }), [t]), [O, v] = a.useState(C), [F, x] = a.useState(!1), k = O.length, P = k >= m.MAX_DESTINATION_COUNT, G = (0, n.useStateFromStores)([c.default], () => c.default.getMessage(t, l), [t, l]), U = (0, n.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]), j = (0, o.useShareSearchResults)({
    searchText: b,
    selectedDestinations: O,
    originDestination: M
  }), H = a.useCallback(() => {
    (0, I.trackForwardCancel)(t, l), L()
  }, [t, l, L]), w = a.useCallback(() => {
    var e;
    let s = null === (e = d.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
    if (null == s) return;
    let a = (0, A.getChannelPermalink)(s, t, l);
    (0, i.showToast)((0, i.createToast)(T.default.Messages.COPIED_LINK, i.ToastType.LINK)), (0, _.copy)(a)
  }, [t, l]), z = a.useCallback(() => {
    D("")
  }, [D]), W = a.useCallback(e => {
    v(t => {
      let l = t.findIndex(t => {
        let {
          type: l,
          id: s
        } = t;
        return l === e.type && s === e.id
      });
      if (-1 === l) return P ? t : (D(""), [e, ...t]);
      let s = [...t];
      return s.splice(l, 1), s
    })
  }, [P]), Q = a.useCallback(async () => {
    let e = c.default.getMessage(t, l);
    if (null == e) {
      (0, i.showToast)((0, i.createToast)(T.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
      return
    }
    x(!0);
    let s = O.map(r.destinationChannel).filter(E.isNotNullish);
    (0, h.closeForwardModal)(), 1 === s.length && (0, u.transitionToChannel)(s[0]);
    let a = await p.default.sendForwards(e, s, N);
    if (a.every(e => {
        let {
          status: t
        } = e;
        return "fulfilled" === t
      })) {
      (0, I.trackForwardSent)(t, l, !1, s.length), (0, i.showToast)((0, i.createToast)(T.default.Messages.MESSAGE_FORWARD_SUCCESS, i.ToastType.FORWARD));
      return
    }(0, I.trackForwardSent)(t, l, !0, s.length);
    let n = O.filter((e, t) => "rejected" === a[t].status);
    (0, h.showForwardFailedAlertModal)({
      messageId: l,
      channelId: t,
      failedDestinations: n,
      forwardOptions: N
    })
  }, [t, N, l, O]);
  if (null == G || null == U) return null;
  let K = j.length > 0 ? (0, s.jsx)(S.DestinationList, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: j,
      message: G,
      originChannel: U,
      handleToggleDestination: W,
      selectedDestinations: O,
      disableSelection: P
    }) : (0, s.jsxs)(i.ModalContent, {
      className: g.noResults,
      children: [(0, s.jsx)("img", {
        className: g.noResultsImg,
        src: y,
        alt: ""
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: T.default.Messages.SEARCH_NO_RESULTS
      })]
    }),
    Y = k <= 1 ? T.default.Messages.SEND : T.default.Messages.MESSAGES_SEND_SEPARATELY.format({
      count: k
    });
  return (0, s.jsxs)(i.ModalRoot, {
    className: g.modal,
    "aria-label": T.default.Messages.MESSAGE_ACTION_FORWARD_TO,
    ...R,
    children: [(0, s.jsxs)(i.ModalHeader, {
      className: g.header,
      children: [(0, s.jsxs)("div", {
        className: g.titleLine,
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: T.default.Messages.MESSAGE_ACTION_FORWARD_TO
        }), (0, s.jsx)(i.ModalCloseButton, {
          className: g.closeButton,
          onClick: H
        })]
      }), (0, s.jsx)(f.default, {
        size: f.default.Sizes.MEDIUM,
        query: b,
        onChange: D,
        onClear: z,
        placeholder: T.default.Messages.SEARCH,
        "aria-label": T.default.Messages.SEARCH,
        autoFocus: !0
      }), P && (0, s.jsx)(i.FormErrorBlock, {
        backgroundColor: i.FormErrorBlockColors.BACKGROUND_ACCENT,
        iconClassName: g.warningIcon,
        children: T.default.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
          count: m.MAX_DESTINATION_COUNT
        })
      })]
    }), K, (0, s.jsxs)(i.ModalFooter, {
      className: g.footer,
      children: [(0, s.jsx)(i.Button, {
        submitting: F,
        disabled: 0 === k,
        onClick: Q,
        children: Y
      }), (0, s.jsx)(i.Button, {
        onClick: w,
        look: i.Button.Looks.OUTLINED,
        color: i.Button.Colors.WHITE,
        children: T.default.Messages.COPY_LINK
      })]
    })]
  })
}