n.d(t, {
    Z: function () {
        return b;
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
    S = n(687683),
    T = n(981631),
    N = n(388032),
    A = n(905152);
function b() {
    let e = r.useRef(null),
        t = (0, E.Z)(),
        n = (0, I.w)(),
        l = (0, g.V)(),
        b = (0, d.N)(),
        x = (0, u.Z)('message-requests-spam-list'),
        { channelId: Z } = (0, _._)(),
        L = r.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(N.intl.string(N.t.EDYbS0), c.ToastType.FAILURE));
        }, []),
        { rejectAll: y } = (0, f.m)({ onError: L }),
        O = r.useCallback(() => {
            y(t.map((e) => e.channel.id));
        }, [t, y]);
    r.useEffect(() => {
        p.default.track(T.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), m.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    }, []);
    let R = r.useCallback(
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
        P = r.useCallback(
            () =>
                (0, i.jsxs)(
                    h.Z,
                    {
                        className: A.sectionTitle,
                        children: [
                            N.intl.format(N.t.C79Edn, { count: n }),
                            b && n > 0
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
                                              onClick: O,
                                              look: c.ButtonLooks.LINK,
                                              color: c.ButtonColors.LINK,
                                              size: c.ButtonSizes.SMALL,
                                              className: A.clearAllButton,
                                              'aria-label': N.intl.string(N.t.p6t7RE),
                                              children: N.intl.string(N.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, O, b]
        );
    return 0 === t.length
        ? (0, i.jsx)(C.Z, { section: S.pS.SPAM })
        : (0, i.jsx)(s.bG, {
              navigator: x,
              children: (0, i.jsx)(s.SJ, {
                  children: (n) => {
                      let { ref: r, role: l, ...a } = n;
                      return (0, i.jsx)(
                          c.List,
                          {
                              className: A.list,
                              innerRole: l,
                              innerAriaLabel: N.intl.string(N.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: S.oi,
                              rowHeight: S.WN,
                              renderSection: P,
                              renderRow: R,
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
