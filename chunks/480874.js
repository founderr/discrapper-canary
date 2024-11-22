n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(286379),
    c = n(481060),
    d = n(183126),
    u = n(209613),
    h = n(82295),
    m = n(797614),
    p = n(626135),
    g = n(26373),
    f = n(486622),
    _ = n(922409),
    E = n(727813),
    I = n(355350),
    C = n(307947),
    v = n(125855),
    N = n(687683),
    T = n(981631),
    S = n(388032),
    A = n(908120);
function x() {
    let e = r.useRef(null),
        t = (0, E.Z)(),
        n = (0, I.w)(),
        l = (0, g.V)(),
        x = (0, d.N)(),
        b = (0, u.Z)('message-requests-spam-list'),
        { channelId: Z } = (0, _._)(),
        L = r.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(S.intl.string(S.t.EDYbS0), c.ToastType.FAILURE));
        }, []),
        { rejectAll: y } = (0, f.m)({ onError: L }),
        P = r.useCallback(() => {
            y(t.map((e) => e.channel.id));
        }, [t, y]);
    r.useEffect(() => {
        p.default.track(T.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), m.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    }, []);
    let O = r.useCallback(
            (e) => {
                var n, r;
                let { row: s } = e,
                    o = t[s],
                    c = null === (r = t[s + 1]) || void 0 === r ? void 0 : null === (n = r.channel) || void 0 === n ? void 0 : n.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    v.Z,
                    {
                        index: s,
                        className: a()({
                            [A.selected]: null != Z && Z === d,
                            [A.siblingSelected]: null != Z && Z === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l
                    },
                    d
                );
            },
            [t, l, Z]
        ),
        R = r.useCallback(
            () =>
                (0, i.jsxs)(
                    h.Z,
                    {
                        className: A.sectionTitle,
                        children: [
                            S.intl.format(S.t.C79Edn, { count: n }),
                            x && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.Text, {
                                              className: A.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(c.Button, {
                                              onClick: P,
                                              look: c.ButtonLooks.LINK,
                                              color: c.ButtonColors.LINK,
                                              size: c.ButtonSizes.SMALL,
                                              className: A.clearAllButton,
                                              'aria-label': S.intl.string(S.t.p6t7RE),
                                              children: S.intl.string(S.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, P, x]
        );
    return 0 === t.length
        ? (0, i.jsx)(C.Z, { section: N.pS.SPAM })
        : (0, i.jsx)(s.bG, {
              navigator: b,
              children: (0, i.jsx)(s.SJ, {
                  children: (n) => {
                      let { ref: r, role: l, ...a } = n;
                      return (0, i.jsx)(
                          c.List,
                          {
                              className: A.list,
                              innerRole: l,
                              innerAriaLabel: S.intl.string(S.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: N.oi,
                              rowHeight: N.WN,
                              renderSection: R,
                              renderRow: O,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a
                          },
                          'message-requests-spam-list'
                      );
                  }
              })
          });
}
