n.d(t, {
  Z: function() {
    return v
  }
});
var i = n(735250),
  s = n(470079),
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
  g = n(922409),
  p = n(727813),
  N = n(355350),
  T = n(307947),
  C = n(125855),
  S = n(687683),
  A = n(981631),
  f = n(689938),
  Z = n(964058);

function v() {
  let e = s.useRef(null),
    t = (0, p.Z)(),
    n = (0, N.w)(),
    l = (0, I.V)(),
    v = (0, u.N)(),
    L = (0, d.Z)("message-requests-spam-list"),
    {
      channelId: O
    } = (0, g._)(),
    R = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(f.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: x
    } = (0, m.m)({
      onError: R
    }),
    M = s.useCallback(() => {
      x(t.map(e => e.channel.id))
    }, [t, x]);
  s.useEffect(() => {
    _.default.track(A.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), E.Z.increment({
      name: o.V.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let P = s.useCallback(e => {
      var n, s;
      let {
        row: r
      } = e, o = t[r], c = null === (s = t[r + 1]) || void 0 === s ? void 0 : null === (n = s.channel) || void 0 === n ? void 0 : n.id, u = o.channel.id;
      return (0, i.jsx)(C.Z, {
        index: r,
        className: a()({
          [Z.selected]: null != O && O === u,
          [Z.siblingSelected]: null != O && O === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [t, l, O]),
    D = s.useCallback(() => (0, i.jsxs)(h.Z, {
      className: Z.sectionTitle,
      children: [f.Z.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: n
      }), v && n > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Text, {
          className: Z.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, i.jsx)(c.Button, {
          onClick: M,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: Z.clearAllButton,
          "aria-label": f.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: f.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, M, v]);
  return 0 === t.length ? (0, i.jsx)(T.Z, {
    section: S.pS.SPAM
  }) : (0, i.jsx)(r.bG, {
    navigator: L,
    children: (0, i.jsx)(r.SJ, {
      children: n => {
        let {
          ref: s,
          role: l,
          ...a
        } = n;
        return (0, i.jsx)(c.List, {
          className: Z.list,
          innerRole: l,
          innerAriaLabel: f.Z.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: S.oi,
          rowHeight: S.WN,
          renderSection: D,
          renderRow: P,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...a
        }, "message-requests-spam-list")
      }
    })
  })
}