a.d(n, {
    Z: function () {
        return A;
    }
}),
    a(47120);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(392711),
    s = a.n(l),
    c = a(442837),
    d = a(481060),
    u = a(224706),
    m = a(812206),
    p = a(669764),
    _ = a(810568),
    g = a(839392),
    f = a(774073),
    x = a(644941),
    I = a(689938),
    h = a(51527),
    v = a(796805);
let E = (e) => {
    let { game: n, onClose: a, trackClick: i } = e,
        o = (0, c.e7)([m.Z], () => ((null == n ? void 0 : n.applicationId) != null ? m.Z.getApplication(null == n ? void 0 : n.applicationId) : null));
    if (null == n) return null;
    let r = n.coverImageUrl;
    return (0, t.jsx)(d.Tooltip, {
        text: n.name,
        children: (e) => {
            var l;
            return (0, t.jsx)(d.Clickable, {
                ...e,
                className: h.clickable,
                onClick: async () => {
                    i(_.as.ClickSimilarGame, n.applicationId),
                        (0, d.openModalLazy)(() =>
                            Promise.resolve((e) =>
                                (0, t.jsx)(x.default, {
                                    applicationId: n.applicationId,
                                    source: _.m1.SimilarGames,
                                    ...e
                                })
                            )
                        ),
                        await new Promise((e) => setTimeout(e, 10)),
                        a();
                },
                children: (0, t.jsx)('img', {
                    src: r,
                    className: v.similarGameImage,
                    alt: I.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (l = null == o ? void 0 : o.name) && void 0 !== l ? l : null == n ? void 0 : n.name })
                })
            });
        }
    });
};
function A(e) {
    let { applicationId: n, onClose: a, trackAction: o, similarGames: l, similarGamesError: m } = e,
        _ = (0, c.e7)([g.Z, p.Z], () => {
            let e = void 0 === g.Z.getSimilarGames(n),
                a = l.some((e) => p.Z.isFetching(e));
            return e || a;
        }),
        x = (0, c.Wu)([p.Z], () =>
            l
                .map((e) => p.Z.getGame(e))
                .filter(f.W1)
                .slice(0, 5)
        );
    return (i.useEffect(() => {
        l.length > 0 && u.Z.getDetectableGamesSupplemental([n, ...l]);
    }, [n, l]),
    _ && null == m)
        ? (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)('div', { className: r()(v.loadingHeading, h.sectionHeader) }),
                  (0, t.jsx)('div', {
                      className: r()(h.row, h.gapLg),
                      children: s()
                          .range(0, 5)
                          .map((e) => (0, t.jsx)('div', { className: v.loadingArtwork }, e))
                  })
              ]
          })
        : _ && 0 !== x.length
          ? (0, t.jsxs)('div', {
                children: [
                    (0, t.jsx)(d.Heading, {
                        className: h.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: I.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, t.jsx)('div', {
                        className: r()(h.row, h.gapLg),
                        style: {},
                        children: x.map((e) =>
                            (0, t.jsx)(
                                E,
                                {
                                    game: e,
                                    onClose: a,
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
