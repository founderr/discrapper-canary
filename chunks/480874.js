n.d(t, {
  Z: function() {
    return L
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(91192),
  o = n(286379),
  c = n(481060),
  u = n(183126),
  d = n(209613),
  E = n(797614),
  h = n(151827),
  _ = n(626135),
  I = n(26373),
  m = n(486622),
  T = n(922409),
  g = n(727813),
  p = n(355350),
  N = n(307947),
  S = n(125855),
  C = n(687683),
  A = n(981631),
  f = n(689938),
  Z = n(964058);

function L() {
  let e = i.useRef(null),
    t = (0, g.Z)(),
    n = (0, p.w)(),
    l = (0, I.V)(),
    L = (0, u.N)(),
    O = (0, d.Z)("message-requests-spam-list"),
    {
      channelId: v
    } = (0, T._)(),
    R = i.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(f.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: P
    } = (0, m.m)({
      onError: R
    }),
    x = i.useCallback(() => {
      P(t.map(e => e.channel.id))
    }, [t, P]);
  i.useEffect(() => {
    _.default.track(A.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), E.Z.increment({
      name: o.V.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let M = i.useCallback(e => {
      var n, i;
      let {
        row: r
      } = e, o = t[r], c = null === (i = t[r + 1]) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id, u = o.channel.id;
      return (0, s.jsx)(S.Z, {
        index: r,
        className: a()({
          [Z.selected]: null != v && v === u,
          [Z.siblingSelected]: null != v && v === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [t, l, v]),
    D = i.useCallback(() => (0, s.jsxs)(h.Z, {
      className: Z.sectionTitle,
      children: [f.Z.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: n
      }), L && n > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.Text, {
          className: Z.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, s.jsx)(c.Button, {
          onClick: x,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: Z.clearAllButton,
          "aria-label": f.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: f.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, x, L]);
  return 0 === t.length ? (0, s.jsx)(N.Z, {
    section: C.pS.SPAM
  }) : (0, s.jsx)(r.bG, {
    navigator: O,
    children: (0, s.jsx)(r.SJ, {
      children: n => {
        let {
          ref: i,
          role: l,
          ...a
        } = n;
        return (0, s.jsx)(c.List, {
          className: Z.list,
          innerRole: l,
          innerAriaLabel: f.Z.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, i.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: C.oi,
          rowHeight: C.WN,
          renderSection: D,
          renderRow: M,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...a
        }, "message-requests-spam-list")
      }
    })
  })
}