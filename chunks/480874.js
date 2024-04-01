"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("91192"),
  o = n("286379"),
  u = n("481060"),
  d = n("183126"),
  c = n("209613"),
  f = n("797614"),
  E = n("151827"),
  _ = n("626135"),
  h = n("26373"),
  C = n("486622"),
  S = n("922409"),
  m = n("727813"),
  I = n("355350"),
  p = n("307947"),
  T = n("125855"),
  g = n("687683"),
  A = n("981631"),
  N = n("689938"),
  R = n("569265");

function O() {
  let e = s.useRef(null),
    t = (0, m.default)(),
    n = (0, I.useSpamMessageRequestCount)(),
    l = (0, h.useListHasSingleSpamMessageRequest)(),
    O = (0, d.useIsRejectAllMessageRequestsEnabled)(),
    v = (0, c.default)("message-requests-spam-list"),
    {
      channelId: L
    } = (0, S.useMessageRequestSidebarState)(),
    P = s.useCallback(() => {
      (0, u.showToast)((0, u.createToast)(N.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE))
    }, []),
    {
      rejectAll: M
    } = (0, C.useMessageRequestActions)({
      onError: P
    }),
    y = s.useCallback(() => {
      M(t.map(e => e.channel.id))
    }, [t, M]);
  s.useEffect(() => {
    _.default.track(A.AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), f.default.increment({
      name: o.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let D = s.useCallback(e => {
      var n, s;
      let {
        row: r
      } = e, o = t[r], u = null === (s = t[r + 1]) || void 0 === s ? void 0 : null === (n = s.channel) || void 0 === n ? void 0 : n.id, d = o.channel.id;
      return (0, a.jsx)(T.default, {
        index: r,
        className: i()({
          [R.selected]: null != L && L === d,
          [R.siblingSelected]: null != L && L === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [t, l, L]),
    x = s.useCallback(() => (0, a.jsxs)(E.default, {
      className: R.sectionTitle,
      children: [N.default.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: n
      }), O && n > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          className: R.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(u.Button, {
          onClick: y,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.LINK,
          size: u.ButtonSizes.SMALL,
          className: R.clearAllButton,
          "aria-label": N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, y, O]);
  return 0 === t.length ? (0, a.jsx)(p.default, {
    section: g.MessageRequestSections.SPAM
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: v,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: n => {
        let {
          ref: s,
          role: l,
          ...i
        } = n;
        return (0, a.jsx)(u.List, {
          className: R.list,
          innerRole: l,
          innerAriaLabel: N.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: g.LIST_SECTION_HEIGHT,
          rowHeight: g.LIST_ROW_HEIGHT,
          renderSection: x,
          renderRow: D,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-spam-list")
      }
    })
  })
}