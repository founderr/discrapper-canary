n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
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
    g = n(189432),
    C = n(356778),
    I = n(370595),
    T = n(50493),
    x = n(194898),
    S = n(752910);
function v(e) {
    var t, n;
    let { userId: a, guildId: v, location: N, className: A, onNavigate: Z } = e,
        M = s.useRef(null),
        b = (0, o.e7)([_.ZP], () => _.ZP.getGuildSidebarState(v), [v]),
        R = s.useRef(0),
        [L, P] = s.useState(null !== (t = null == b ? void 0 : b.details.additionalSearchQuery) && void 0 !== t ? t : {}),
        j = (0, C.z0)(a, v, {
            addtionalQuery: L,
            shouldDispatch: !0
        }),
        O = (0, o.e7)([E.default], () => E.default.getUser(a), [a]),
        y = (0, o.e7)([f.ZP], () => f.ZP.getMember(v, a), [v, a]);
    s.useLayoutEffect(() => {
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
    let D = s.useCallback(
            (e) => {
                if (null == b) return;
                let t = e.target.scrollTop;
                (R.current = t),
                    (0, g.r)(v, a, b.baseChannelId, {
                        modViewPanel: T.k.MESSAGE_HISTORY,
                        additionalSearchQuery: L,
                        scrollOffset: R.current
                    });
            },
            [v, a, b, L]
        ),
        U = (0, r.throttle)(D, 300),
        k = s.useCallback(
            (e) => {
                if (null == b) return;
                let t = {
                    ...L,
                    offset: 25 * e
                };
                P(t),
                    (0, g.r)(v, a, b.baseChannelId, {
                        modViewPanel: T.k.MESSAGE_HISTORY,
                        additionalSearchQuery: t,
                        scrollOffset: R.current
                    });
            },
            [v, a, b, L]
        ),
        w = null !== (n = null == L ? void 0 : L.offset) && void 0 !== n ? n : 0,
        B = (0, o.e7)(
            [d.Z],
            () => {
                if (null == j.result) return [];
                let e = j.result.messages,
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
            [j.result]
        ),
        H = s.useMemo(() => {
            var e, t, n, i;
            return null == j.result
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
                      documentsIndexed: null !== (e = j.result.documents_indexed) && void 0 !== e ? e : 0,
                      isSearching: !1,
                      isIndexing: null !== (t = j.result.doing_deep_historical_index) && void 0 !== t && t,
                      isHistoricalIndexing: null !== (n = j.result.doing_deep_historical_index) && void 0 !== n && n,
                      offset: w,
                      totalResults: null !== (i = j.result.total_results) && void 0 !== i ? i : 0,
                      hasError: !1,
                      showBlockedResults: !1,
                      showNoResultsAlt: !1
                  };
        }, [j.result, w]);
    return null == O || null == y || null == H
        ? null
        : (0, i.jsxs)('div', {
              className: l()(x.container, A),
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: v,
                      userId: a,
                      onNavigate: Z
                  }),
                  (0, i.jsx)(c.AdvancedScroller, {
                      className: S.innerContainer,
                      ref: M,
                      onScroll: U,
                      children: (0, i.jsx)(m.Z, {
                          searchResults: B,
                          search: H,
                          searchId: a,
                          renderEmbeds: !0,
                          blockCount: 0,
                          scrollTo: () => {},
                          onChangePage: k
                      })
                  })
              ]
          });
}
