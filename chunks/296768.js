a.d(n, {
    Z: function () {
        return N;
    }
}),
    a(47120);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(392711),
    l = a.n(o),
    c = a(442837),
    d = a(481060),
    u = a(224706),
    _ = a(812206),
    E = a(669764),
    m = a(810568),
    I = a(839392),
    A = a(774073),
    p = a(426482),
    g = a(644941),
    f = a(689938),
    T = a(51527),
    O = a(796805);
let R = (e) => {
    let { game: n, onClose: a, trackClick: r } = e,
        s = (0, c.e7)([_.Z], () => _.Z.getApplication(n.applicationId));
    return (0, t.jsx)(d.Tooltip, {
        text: n.name,
        children: (e) =>
            (0, t.jsx)(d.Clickable, {
                ...e,
                className: O.similarGameImageClickable,
                onClick: async () => {
                    r(m.as.ClickSimilarGame, n.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, t.jsx)(g.default, {
                                    applicationId: n.applicationId,
                                    source: m.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        a();
                },
                children: (0, t.jsx)(p.C, {
                    game: n,
                    application: s,
                    className: O.similarGameImage,
                    size: p.Z.SMALL
                })
            })
    });
};
function N(e) {
    let { applicationId: n, onClose: a, trackAction: s, similarGames: o, similarGamesError: _ } = e,
        m = (0, c.e7)([I.Z, E.Z], () => {
            let e = void 0 === I.Z.getSimilarGames(n),
                a = o.some((e) => E.Z.isFetching(e));
            return e || a;
        }),
        p = (0, c.Wu)([E.Z], () =>
            o
                .map((e) => E.Z.getGame(e))
                .filter((e) => null != e)
                .filter(A.W1)
                .slice(0, 5)
        );
    return (r.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...o]);
    }, [n, o]),
    m && null == _)
        ? (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)('div', { className: i()(O.loadingHeading, T.sectionHeader) }),
                  (0, t.jsx)('div', {
                      className: i()(T.row, T.gapLg),
                      children: l()
                          .range(0, 5)
                          .map((e) => (0, t.jsx)('div', { className: O.loadingArtwork }, e))
                  })
              ]
          })
        : m || 0 !== p.length
          ? (0, t.jsxs)('div', {
                children: [
                    (0, t.jsx)(d.Heading, {
                        className: T.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: f.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, t.jsx)('div', {
                        className: O.similarGames,
                        style: {},
                        children: p.map((e) =>
                            (0, t.jsx)(
                                R,
                                {
                                    game: e,
                                    onClose: a,
                                    trackClick: s
                                },
                                e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
