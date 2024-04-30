"use strict";
a.r(t), a.d(t, {
  default: function() {
    return L
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("91192"),
  o = a("286379"),
  u = a("481060"),
  d = a("183126"),
  c = a("209613"),
  f = a("797614"),
  E = a("151827"),
  h = a("626135"),
  _ = a("26373"),
  C = a("486622"),
  m = a("922409"),
  S = a("727813"),
  p = a("355350"),
  I = a("307947"),
  T = a("125855"),
  g = a("687683"),
  A = a("981631"),
  N = a("689938"),
  v = a("449846");

function L() {
  let e = s.useRef(null),
    t = (0, S.default)(),
    a = (0, p.useSpamMessageRequestCount)(),
    l = (0, _.useListHasSingleSpamMessageRequest)(),
    L = (0, d.useIsRejectAllMessageRequestsEnabled)(),
    R = (0, c.default)("message-requests-spam-list"),
    {
      channelId: O
    } = (0, m.useMessageRequestSidebarState)(),
    M = s.useCallback(() => {
      (0, u.showToast)((0, u.createToast)(N.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE))
    }, []),
    {
      rejectAll: P
    } = (0, C.useMessageRequestActions)({
      onError: M
    }),
    x = s.useCallback(() => {
      P(t.map(e => e.channel.id))
    }, [t, P]);
  s.useEffect(() => {
    h.default.track(A.AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: a
    }), f.default.increment({
      name: o.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let y = s.useCallback(e => {
      var a, s;
      let {
        row: r
      } = e, o = t[r], u = null === (s = t[r + 1]) || void 0 === s ? void 0 : null === (a = s.channel) || void 0 === a ? void 0 : a.id, d = o.channel.id;
      return (0, n.jsx)(T.default, {
        index: r,
        className: i()({
          [v.selected]: null != O && O === d,
          [v.siblingSelected]: null != O && O === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [t, l, O]),
    D = s.useCallback(() => (0, n.jsxs)(E.default, {
      className: v.sectionTitle,
      children: [N.default.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: a
      }), L && a > 0 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.Text, {
          className: v.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, n.jsx)(u.Button, {
          onClick: x,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.LINK,
          size: u.ButtonSizes.SMALL,
          className: v.clearAllButton,
          "aria-label": N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [a, x, L]);
  return 0 === t.length ? (0, n.jsx)(I.default, {
    section: g.MessageRequestSections.SPAM
  }) : (0, n.jsx)(r.ListNavigatorProvider, {
    navigator: R,
    children: (0, n.jsx)(r.ListNavigatorContainer, {
      children: a => {
        let {
          ref: s,
          role: l,
          ...i
        } = a;
        return (0, n.jsx)(u.List, {
          className: v.list,
          innerRole: l,
          innerAriaLabel: N.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var a;
            e.current = t, s.current = null !== (a = null == t ? void 0 : t.getScrollerNode()) && void 0 !== a ? a : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: g.LIST_SECTION_HEIGHT,
          rowHeight: g.LIST_ROW_HEIGHT,
          renderSection: D,
          renderRow: y,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-spam-list")
      }
    })
  })
}