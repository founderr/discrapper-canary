n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    h = n(70097),
    m = n(768581),
    p = n(829409),
    g = n(226944);
let f = 16 / 9,
    _ = 325 / 72;
function E(e) {
    let { application: t, isHovered: n, botBannerUrl: l, botBannerUrlAnimated: o, iconURL: s } = e,
        m = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        p = r.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: f, imageUrlAnimated: _ } = r.useMemo(
            () =>
                'fetched' === m.state && null != m.url
                    ? { imageUrl: m.url }
                    : {
                          imageUrl: l,
                          imageUrlAnimated: o
                      },
            [m.state, m.url, l, o]
        ),
        E = null != f,
        N = null != p;
    return 'loading' === m.state
        ? null
        : N
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    E
                        ? (0, i.jsx)(I, {
                              isHovered: n,
                              url: f,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(h.Z, {
                              src: p,
                              className: a()(g.bannerImage, g.bannerContent),
                              muted: !0
                          }),
                    (0, i.jsx)(C, {
                        isHovered: n,
                        url: p,
                        isVideo: !0
                    })
                ]
            })
          : E
            ? (0, i.jsx)(I, {
                  isHovered: n,
                  url: f,
                  animatedUrl: _
              })
            : (0, i.jsx)(v, { iconURL: s });
}
function I(e) {
    let { isHovered: t, url: n, animatedUrl: l } = e,
        [o, s] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: a()(g.bannerImage, g.bannerContent, { [g.loaded]: o }),
                onLoad: () => s(!0)
            }),
            null != l
                ? (0, i.jsx)(C, {
                      isHovered: t,
                      url: l,
                      isVideo: !1
                  })
                : null
        ]
    });
}
function C(e) {
    let { isHovered: t, url: n, isVideo: l } = e,
        [o, s] = r.useState(!1),
        [c, d] = r.useState(t);
    return (r.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: a()(g.bannerAnimatedContainer, {
                  [g.videoFadeOut]: !t,
                  [g.videoFadeIn]: t && o
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: l
                  ? (0, i.jsx)(h.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: g.bannerContent,
                        onLoadedData: () => s(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: g.bannerContent,
                        onLoad: () => s(!0)
                    })
          })
        : null;
}
function v(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: r } = (0, p.u)(t);
    return (0, i.jsx)('div', {
        className: a()(g.bannerContent, g.bannerGradient, { [g.loaded]: r }),
        style: { backgroundImage: n }
    });
}
t.Z = function (e) {
    let { application: t, bannerType: n, iconURL: l } = e,
        a = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [c, d] = r.useState(!1),
        h = r.useCallback(() => {
            d(!0);
        }, []),
        p = r.useCallback(() => d(!1), []),
        C = (0, u.ye)(t),
        N = t.bot,
        { botBannerUrl: S, botBannerUrlAnimated: T } = r.useMemo(
            () =>
                (null == N ? void 0 : N.id) == null || (null == N ? void 0 : N.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.aN)({
                              id: N.id,
                              banner: N.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: a
                              ? void 0
                              : (0, m.aN)({
                                    id: N.id,
                                    banner: N.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == N ? void 0 : N.id, null == N ? void 0 : N.banner, a]
        );
    return (0, i.jsx)('div', {
        className: g.bannerContainer,
        style: { aspectRatio: 'card' === n ? f : _ },
        onMouseEnter: h,
        onFocus: h,
        onMouseLeave: p,
        onBlur: p,
        children:
            'card' === n && C
                ? (0, i.jsx)(E, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == S ? void 0 : S,
                      botBannerUrlAnimated: null == T ? void 0 : T
                  })
                : null != S
                  ? (0, i.jsx)(I, {
                        isHovered: c,
                        url: S,
                        animatedUrl: T
                    })
                  : (0, i.jsx)(v, { iconURL: l })
    });
};
