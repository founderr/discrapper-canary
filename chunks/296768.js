n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    i = n.n(s),
    o = n(392711),
    l = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(224706),
    _ = n(812206),
    E = n(669764),
    m = n(810568),
    I = n(839392),
    A = n(774073),
    p = n(426482),
    g = n(644941),
    f = n(689938),
    T = n(51527),
    O = n(796805);
let N = (e) => {
    let { game: t, onClose: n, trackClick: r } = e,
        s = (0, c.e7)([_.Z], () => _.Z.getApplication(t.applicationId));
    return (0, a.jsx)(d.Tooltip, {
        text: t.name,
        children: (e) =>
            (0, a.jsx)(d.Clickable, {
                ...e,
                className: O.similarGameImageClickable,
                onClick: async () => {
                    r(m.as.ClickSimilarGame, t.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, a.jsx)(g.default, {
                                    applicationId: t.applicationId,
                                    source: m.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        n();
                },
                children: (0, a.jsx)(p.C, {
                    game: t,
                    application: s,
                    className: O.similarGameImage,
                    size: p.Z.SMALL
                })
            })
    });
};
function R(e) {
    let { applicationId: t, onClose: n, trackAction: s, similarGames: o, similarGamesError: _ } = e,
        m = (0, c.e7)([I.Z, E.Z], () => {
            let e = void 0 === I.Z.getSimilarGames(t) && null == I.Z.getSimilarGamesError(t),
                n = o.some((e) => E.Z.isFetching(e));
            return e || n;
        }),
        p = (0, c.Wu)([E.Z], () =>
            o
                .map((e) => E.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, A.z6)(e.applicationId))
                .slice(0, 5)
        );
    return (r.useEffect(() => {
        o.length > 0 && u.Z.getDetectableGamesSupplemental([t, ...o]);
    }, [t, o]),
    m && null == _)
        ? (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)('div', { className: i()(O.loadingHeading, T.sectionHeader) }),
                  (0, a.jsx)('div', {
                      className: i()(T.row, T.gapLg),
                      children: l()
                          .range(0, 5)
                          .map((e) => (0, a.jsx)('div', { className: O.loadingArtwork }, e))
                  })
              ]
          })
        : m || 0 !== p.length
          ? (0, a.jsxs)('div', {
                children: [
                    (0, a.jsx)(d.Heading, {
                        className: T.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: f.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, a.jsx)('div', {
                        className: O.similarGames,
                        style: {},
                        children: p.map((e) =>
                            (0, a.jsx)(
                                N,
                                {
                                    game: e,
                                    onClose: n,
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
