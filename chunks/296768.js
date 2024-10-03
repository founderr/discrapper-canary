n.d(a, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(392711),
    s = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(224706),
    m = n(812206),
    p = n(669764),
    g = n(810568),
    _ = n(839392),
    f = n(774073),
    x = n(644941),
    h = n(689938),
    v = n(51527),
    I = n(796805);
let E = (e) => {
    let { game: a, onClose: n, trackClick: i } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getApplication(a.applicationId));
    return (0, t.jsx)(d.Tooltip, {
        text: a.name,
        children: (e) => {
            var o;
            return (0, t.jsx)(d.Clickable, {
                ...e,
                className: I.similarGameImageClickable,
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
                    src: a.coverImageUrl,
                    className: I.similarGameImage,
                    alt: h.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: null !== (o = null == r ? void 0 : r.name) && void 0 !== o ? o : null == a ? void 0 : a.name })
                })
            });
        }
    });
};
function A(e) {
    let { applicationId: a, onClose: n, trackAction: r, similarGames: l, similarGamesError: m } = e,
        g = (0, c.e7)([_.Z, p.Z], () => {
            let e = void 0 === _.Z.getSimilarGames(a),
                n = l.some((e) => p.Z.isFetching(e));
            return e || n;
        }),
        x = (0, c.Wu)([p.Z], () =>
            l
                .map((e) => p.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => null != e.coverImageUrl)
                .filter(f.W1)
                .slice(0, 5)
        );
    return (i.useEffect(() => {
        l.length > 0 && u.Z.getDetectableGamesSupplemental([a, ...l]);
    }, [a, l]),
    g && null == m)
        ? (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)('div', { className: o()(I.loadingHeading, v.sectionHeader) }),
                  (0, t.jsx)('div', {
                      className: o()(v.row, v.gapLg),
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
                        className: v.sectionHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: h.Z.Messages.GAME_PROFILE_ALSO_PLAYING
                    }),
                    (0, t.jsx)('div', {
                        className: o()(v.row, v.gapLg),
                        style: {},
                        children: x.map((e) =>
                            (0, t.jsx)(
                                E,
                                {
                                    game: e,
                                    onClose: n,
                                    trackClick: r
                                },
                                e.applicationId
                            )
                        )
                    })
                ]
            })
          : null;
}
