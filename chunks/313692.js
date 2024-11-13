n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(399606),
    c = n(481060),
    d = n(963374),
    u = n(735020),
    h = n(786761),
    p = n(937889),
    m = n(619753),
    f = n(433355),
    g = n(271383),
    C = n(594174),
    x = n(189432),
    v = n(356778),
    _ = n(370595),
    I = n(50493),
    E = n(194898),
    b = n(752910);
function Z(e) {
    var t, n;
    let { userId: a, guildId: Z, location: N, className: S, onNavigate: T } = e,
        j = l.useRef(null),
        A = (0, o.e7)([f.ZP], () => f.ZP.getGuildSidebarState(Z), [Z]),
        y = l.useRef(0),
        [P, M] = l.useState(null !== (t = null == A ? void 0 : A.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        R = (0, v.z0)(a, Z, {
            addtionalQuery: P,
            shouldDispatch: !0
        }),
        L = (0, o.e7)([C.default], () => C.default.getUser(a), [a]),
        k = (0, o.e7)([g.ZP], () => g.ZP.getMember(Z, a), [Z, a]);
    l.useLayoutEffect(() => {
        let e = null == A ? void 0 : A.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = j.current) ||
                void 0 === t ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    }, []);
    let O = l.useCallback(
            (e) => {
                if (null == A) return;
                let t = e.target.scrollTop;
                (y.current = t),
                    (0, x.r)(Z, a, A.baseChannelId, {
                        modViewPanel: I.k.MESSAGE_HISTORY,
                        additionalSearchQuery: P,
                        scrollOffset: y.current
                    });
            },
            [Z, a, A, P]
        ),
        D = (0, s.throttle)(O, 300),
        w = l.useCallback(
            (e) => {
                if (null == A) return;
                let t = {
                    ...P,
                    offset: 25 * e
                };
                M(t),
                    (0, x.r)(Z, a, A.baseChannelId, {
                        modViewPanel: I.k.MESSAGE_HISTORY,
                        additionalSearchQuery: t,
                        scrollOffset: y.current
                    });
            },
            [Z, a, A, P]
        ),
        B = null !== (n = null == P ? void 0 : P.offset) && void 0 !== n ? n : 0,
        U = (0, o.e7)(
            [u.Z],
            () => {
                if (null == R.result) return [];
                let e = R.result.messages,
                    t = (0, d.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = u.Z.getMessage(e.id, e.channel_id),
                            i = (0, h.e5)(e);
                        return (
                            null != n &&
                                (i = i.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            i.isSearchHit
                                ? i.set(
                                      'customRenderedContent',
                                      (0, p.ZP)(i, {
                                          postProcessor: t,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  )
                                : i
                        );
                    })
                );
            },
            [R.result]
        ),
        H = l.useMemo(() => {
            var e, t, n, i;
            return null == R.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: B,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null !== (e = R.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = R.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = R.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: B,
                      totalResults: null !== (i = R.result.total_results) && void 0 !== i ? i : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [R.result, B]);
    return null == L || null == k || null == H
        ? null
        : (0, i.jsxs)('div', {
              className: r()(E.container, S),
              children: [
                  (0, i.jsx)(_.Z, {
                      guildId: Z,
                      userId: a,
                      onNavigate: T
                  }),
                  (0, i.jsx)(c.AdvancedScroller, {
                      className: b.innerContainer,
                      ref: j,
                      onScroll: D,
                      children: (0, i.jsx)(m.Z, {
                          searchResults: U,
                          search: H,
                          searchId: a,
                          renderEmbeds: !0,
                          blockCount: 0,
                          scrollTo: () => {},
                          onChangePage: w
                      })
                  })
              ]
          });
}
