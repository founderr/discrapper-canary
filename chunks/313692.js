n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n(399606),
    c = n(481060),
    u = n(963374),
    d = n(735020),
    h = n(786761),
    p = n(937889),
    m = n(619753),
    _ = n(433355),
    f = n(271383),
    E = n(594174),
    C = n(189432),
    g = n(356778),
    I = n(370595),
    x = n(50493),
    T = n(446926),
    N = n(5844);
function S(e) {
    var t, n;
    let { userId: s, guildId: S, location: v, className: Z, onNavigate: A } = e,
        M = a.useRef(null),
        b = (0, o.e7)([_.ZP], () => _.ZP.getGuildSidebarState(S), [S]),
        R = a.useRef(0),
        [L, j] = a.useState(null !== (t = null == b ? void 0 : b.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        O = (0, g.z0)(s, S, {
            addtionalQuery: L,
            shouldDispatch: !0
        }),
        P = (0, o.e7)([E.default], () => E.default.getUser(s), [s]),
        y = (0, o.e7)([f.ZP], () => f.ZP.getMember(S, s), [S, s]);
    a.useLayoutEffect(() => {
        let e = null == b ? void 0 : b.details.scrollOffset;
        if (null != e) {
            var t;
            null === (t = M.current) ||
                void 0 === t ||
                t.scrollTo({
                    to: e,
                    animate: !1
                });
        }
    }, []);
    let D = a.useCallback(
            (e) => {
                if (null == b) return;
                let t = e.target.scrollTop;
                (R.current = t),
                    (0, C.r)(S, s, b.baseChannelId, {
                        modViewPanel: x.k.MESSAGE_HISTORY,
                        additionalSearchQuery: L,
                        scrollOffset: R.current
                    });
            },
            [S, s, b, L]
        ),
        k = (0, r.throttle)(D, 300),
        U = a.useCallback(
            (e) => {
                if (null == b) return;
                let t = {
                    ...L,
                    offset: 25 * e
                };
                j(t),
                    (0, C.r)(S, s, b.baseChannelId, {
                        modViewPanel: x.k.MESSAGE_HISTORY,
                        additionalSearchQuery: t,
                        scrollOffset: R.current
                    });
            },
            [S, s, b, L]
        ),
        w = null !== (n = null == L ? void 0 : L.offset) && void 0 !== n ? n : 0,
        B = (0, o.e7)(
            [d.Z],
            () => {
                if (null == O.result) return [];
                let e = O.result.messages,
                    t = (0, u.nC)('');
                return e.map((e) =>
                    e.map((e) => {
                        let n = d.Z.getMessage(e.id, e.channel_id),
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
            [O.result]
        ),
        H = a.useMemo(() => {
            var e, t, n, i;
            return null == O.result
                ? {
                      documentsIndexed: 0,
                      isSearching: !0,
                      isIndexing: !1,
                      isHistoricalIndexing: !1,
                      offset: w,
                      totalResults: 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  }
                : {
                      documentsIndexed: null !== (e = O.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = O.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = O.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: w,
                      totalResults: null !== (i = O.result.total_results) && void 0 !== i ? i : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [O.result, w]);
    return null == P || null == y || null == H
        ? null
        : (0, i.jsxs)('div', {
              className: l()(T.container, Z),
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: S,
                      userId: s,
                      onNavigate: A
                  }),
                  (0, i.jsx)(c.AdvancedScroller, {
                      className: N.innerContainer,
                      ref: M,
                      onScroll: k,
                      children: (0, i.jsx)(m.Z, {
                          searchResults: B,
                          search: H,
                          searchId: s,
                          renderEmbeds: !0,
                          blockCount: 0,
                          scrollTo: () => {},
                          onChangePage: U
                      })
                  })
              ]
          });
}
