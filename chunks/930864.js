"use strict";
l.r(t), l.d(t, {
  ForwardModal: function() {
    return y
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
  f = l("934415"),
  A = l("572004"),
  _ = l("823379"),
  E = l("859155"),
  p = l("822869"),
  I = l("757853"),
  S = l("912332"),
  h = l("819727"),
  m = l("689938"),
  T = l("715270"),
  g = l("621054");

function y(e) {
  let {
    channelId: t,
    messageId: l,
    initialSelectedDestinations: y,
    forwardOptions: C,
    onClose: N,
    ...L
  } = e, [R, b] = a.useState(""), D = a.useMemo(() => ({
    type: "channel",
    id: t
  }), [t]), [M, O] = a.useState(y), [v, F] = a.useState(!1), x = M.length, k = x >= h.MAX_DESTINATION_COUNT, P = (0, n.useStateFromStores)([c.default], () => c.default.getMessage(t, l), [t, l]), G = (0, n.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]), U = (0, o.useShareSearchResults)({
    searchText: R,
    selectedDestinations: M,
    originDestination: D
  }), j = a.useCallback(() => {
    (0, p.trackForwardCancel)(t, l), N()
  }, [t, l, N]), H = a.useCallback(() => {
    var e;
    let s = null === (e = d.default.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
    if (null == s) return;
    let a = (0, f.getChannelPermalink)(s, t, l);
    (0, i.showToast)((0, i.createToast)(m.default.Messages.COPIED_LINK, i.ToastType.LINK)), (0, A.copy)(a)
  }, [t, l]), w = a.useCallback(() => {
    b("")
  }, [b]), z = a.useCallback(e => {
    O(t => {
      let l = t.findIndex(t => {
        let {
          type: l,
          id: s
        } = t;
        return l === e.type && s === e.id
      });
      if (-1 === l) return k ? t : (b(""), [e, ...t]);
      let s = [...t];
      return s.splice(l, 1), s
    })
  }, [k]), W = a.useCallback(async () => {
    let e = c.default.getMessage(t, l);
    if (null == e) {
      (0, i.showToast)((0, i.createToast)(m.default.Messages.ERROR_GENERIC_TITLE, i.ToastType.FAILURE));
      return
    }
    F(!0);
    let s = M.map(r.destinationChannel).filter(_.isNotNullish);
    (0, S.closeForwardModal)(), 1 === s.length && (0, u.transitionToChannel)(s[0]);
    let a = await E.default.sendForwards(e, s, C);
    if (a.every(e => {
        let {
          status: t
        } = e;
        return "fulfilled" === t
      })) {
      (0, p.trackForwardSent)(t, l, !1, s.length), (0, i.showToast)((0, i.createToast)(m.default.Messages.MESSAGE_FORWARD_SUCCESS, i.ToastType.FORWARD));
      return
    }(0, p.trackForwardSent)(t, l, !0, s.length);
    let n = M.filter((e, t) => "rejected" === a[t].status);
    (0, S.showForwardFailedAlertModal)({
      messageId: l,
      channelId: t,
      failedDestinations: n,
      forwardOptions: C
    })
  }, [t, C, l, M]);
  if (null == P || null == G) return null;
  let Q = U.length > 0 ? (0, s.jsx)(I.DestinationList, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: U,
      message: P,
      originChannel: G,
      handleToggleDestination: z,
      selectedDestinations: M,
      disableSelection: k
    }) : (0, s.jsxs)(i.ModalContent, {
      className: T.noResults,
      children: [(0, s.jsx)("img", {
        className: T.noResultsImg,
        src: g,
        alt: ""
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: m.default.Messages.SEARCH_NO_RESULTS
      })]
    }),
    K = x <= 1 ? m.default.Messages.SEND : m.default.Messages.MESSAGES_SEND_SEPARATELY.format({
      count: x
    });
  return (0, s.jsxs)(i.ModalRoot, {
    className: T.modal,
    "aria-label": m.default.Messages.MESSAGE_ACTION_FORWARD_TO,
    ...L,
    children: [(0, s.jsxs)(i.ModalHeader, {
      className: T.header,
      children: [(0, s.jsxs)("div", {
        className: T.titleLine,
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          children: m.default.Messages.MESSAGE_ACTION_FORWARD_TO
        }), (0, s.jsx)(i.ModalCloseButton, {
          className: T.closeButton,
          onClick: j
        })]
      }), (0, s.jsx)(i.SearchBar, {
        size: i.SearchBar.Sizes.MEDIUM,
        query: R,
        onChange: b,
        onClear: w,
        placeholder: m.default.Messages.SEARCH,
        "aria-label": m.default.Messages.SEARCH,
        autoFocus: !0
      }), k && (0, s.jsx)(i.FormErrorBlock, {
        backgroundColor: i.FormErrorBlockColors.BACKGROUND_ACCENT,
        iconClassName: T.warningIcon,
        children: m.default.Messages.MESSAGES_FORWARD_MAX_DESTINATION_COUNT.format({
          count: h.MAX_DESTINATION_COUNT
        })
      })]
    }), Q, (0, s.jsxs)(i.ModalFooter, {
      className: T.footer,
      children: [(0, s.jsx)(i.Button, {
        submitting: v,
        disabled: 0 === x,
        onClick: W,
        children: K
      }), (0, s.jsx)(i.Button, {
        onClick: H,
        look: i.Button.Looks.OUTLINED,
        color: i.Button.Colors.WHITE,
        children: m.default.Messages.COPY_LINK
      })]
    })]
  })
}