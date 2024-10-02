n.d(a, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(392711),
    s = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(224706),
    m = n(812206),
    p = n(669764),
    g = n(810568),
    f = n(839392),
    _ = n(774073),
    x = n(644941),
    v = n(689938),
    h = n(51527),
    I = n(796805);
let E = (e) => {
    let { game: a, onClose: n, trackClick: i } = e,
        o = (0, c.e7)([m.Z], () => ((null == a ? void 0 : a.applicationId) != null ? m.Z.getApplication(null == a ? void 0 : a.applicationId) : null));
    if (null == a) return null;
    let r = a.coverImageUrl;
    return (0, t.jsx)(d.Tooltip, {
        text: a.name,
        children: (e) => {
            var l;
            return (0, t.jsx)(d.Clickable, {
                ...e,
                className: h.clickable,
                onClick: async () => {
                    i(g.as.ClickSimilarGame, a.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, t.jsx)(x.default, {
                                    applicationId: a.applicationId,
                                    source: g.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        n();
                },
                children: (0, t.jsx)('img', {
                    src: r,
                    className: I.similarGameImage,
                    alt: v.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (l = null == o ? void 0 : o.name) && void 0 !== l ? l : null == a ? void 0 : a.name })
                })
            });
        }
    });
};
function A(e) {
    let { applicationId: a, onClose: n, trackAction: o, similarGames: l, similarGamesError: m } = e,
        g = (0, c.e7)([f.Z, p.Z], () => {
            let e = void 0 === f.Z.getSimilarGames(a),
                n = l.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        x = (0, c.Wu)([p.Z], () =>
            l
                .map((e) => p.Z.getGame(e))
                .filter(_.W1)
                .slice(0, 5)
        );
    return (i.useEffect(() => {
        l.length > 0 && u.Z.getDetectableGamesSupplemental([a, ...l]);
    }, [a, l]),
    g && null == m)
        ? (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)('div', { className: r()(I.loadingHeading, h.sectionHeader) }),
                  (0, t.jsx)('div', {
                      className: r()(h.row, h.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, t.jsx)('div', { className: I.loadingArtwork }, e))
                  })
              ]
          })
        : g || 0 !== x.length
          ? (0, t.jsxs)('div', {
                children: [
                    (0, t.jsx)(d.Heading, {
                        className: h.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: v.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, t.jsx)('div', {
                        className: r()(h.row, h.gapLg),
                        style: {},
                        children: x.map((e) =>
                            (0, t.jsx)(
                                E,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: o
                                },
                                null == e ? void 0 : e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
