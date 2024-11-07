n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(782690),
    o = n(622535),
    c = n(970606),
    d = n(945124),
    u = n(231467),
    h = n(931515),
    m = n(207796),
    p = n(777734),
    g = n(976757),
    f = n(981631),
    _ = n(914301);
t.Z = r.memo(function (e) {
    let { title: t, subtitle: n, className: l } = e,
        { loaded: E, clans: I, searchResult: C, searchCriteria: v } = (0, h.Qc)(20),
        S = (0, m.GN)((e) => e.selectedTraits, s.Z),
        N = r.useMemo(() => new Set(v.games), [v.games]),
        T = r.useCallback(
            (e) => {
                var t;
                return (0, i.jsx)(
                    u.ZP,
                    {
                        clan: e,
                        className: _.card,
                        affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, d.y)(e, v),
                        traitsToHighlight: S,
                        source: f.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: N,
                        onlyAnimateIconOnHover: !0
                    },
                    e.id
                );
            },
            [v, S, N]
        ),
        x = r.useMemo(() => (null != C && (0, g.Pw)(C) ? I : []), [I, C]),
        A = r.useCallback(
            (e) => {
                e && (0, c.Oe)('top_picks', v, 'control');
            },
            [v]
        );
    return 0 !== I.length && E
        ? (0, i.jsx)(o.$, {
              onChange: A,
              threshold: 0.25,
              children: (0, i.jsxs)('div', {
                  className: a()(_.previewListContainer, l),
                  children: [
                      (0, i.jsx)('div', {
                          className: _.previewListSection,
                          children: (0, i.jsx)(p.Z, {
                              title: t,
                              subtitle: n
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: _.previewList,
                          children: x.map((e) => T(e))
                      })
                  ]
              })
          })
        : null;
});
