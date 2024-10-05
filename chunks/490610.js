n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(622535),
    c = n(970606),
    d = n(945124),
    u = n(231467),
    _ = n(931515),
    E = n(207796),
    h = n(777734),
    m = n(976757),
    I = n(981631),
    p = n(641388);
t.Z = a.memo(function (e) {
    let { title: t, subtitle: n, className: s } = e,
        { loaded: g, clans: T, searchResult: S, searchCriteria: f } = (0, _.Qc)(20),
        C = (0, E.GN)((e) => e.selectedTraits, l.Z),
        N = a.useMemo(() => new Set(f.games), [f.games]),
        A = a.useCallback(
            (e) => {
                var t;
                return (0, i.jsx)(
                    u.ZP,
                    {
                        clan: e,
                        className: p.card,
                        affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, d.y)(e, f),
                        traitsToHighlight: C,
                        source: I.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: N,
                        onlyAnimateIconOnHover: !0
                    },
                    e.id
                );
            },
            [f, C, N]
        ),
        v = a.useMemo(() => (null != S && (0, m.Pw)(S) ? T : []), [T, S]),
        Z = a.useCallback(
            (e) => {
                e && (0, c.Oe)('top_picks', f);
            },
            [f]
        );
    return 0 !== T.length && g
        ? (0, i.jsx)(o.$, {
              onChange: Z,
              threshold: 0.25,
              children: (0, i.jsxs)('div', {
                  className: r()(p.previewListContainer, s),
                  children: [
                      (0, i.jsx)('div', {
                          className: p.previewListSection,
                          children: (0, i.jsx)(h.Z, {
                              title: t,
                              subtitle: n
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: p.previewList,
                          children: v.map((e) => A(e))
                      })
                  ]
              })
          })
        : null;
});
