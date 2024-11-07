n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    o = n(481060),
    c = n(70097),
    d = n(626135),
    u = n(526167),
    g = n(409100),
    m = n(831964),
    f = n(981631),
    p = n(869783),
    _ = n(388032),
    h = n(868106);
let x = (e) => {
    let { name: t, title: n, description: a, descriptionCta: _, previewImage: x, videoUrl: E, shouldLoadVideo: b, isCompact: C, onClick: v, index: T } = e,
        N = (0, u.rO)(),
        I = r.useRef(null),
        [S, R] = r.useState(0),
        A = (function (e) {
            let t;
            switch (e) {
                case m.dm.EMOJIS:
                    t = h.emojisBackground;
                    break;
                case m.dm.REFERRAL_PROGRAM:
                    t = h.referralProgramBackground;
                    break;
                case m.dm.NO_LIMITS:
                    t = h.noLimitsBackground;
                    break;
                case m.dm.NEW_APP_STYLES:
                    t = h.newStylesBackground;
                    break;
                case m.dm.YOUR_SPACE:
                    t = h.yourSpaceBackground;
                    break;
                case m.dm.SERVER_PROFILES:
                    t = h.serverProfilesBackground;
                    break;
                case m.dm.SHOW_YOUR_STYLE:
                    t = h.yourStyleBackground;
            }
            return t;
        })(t),
        j = (0, l.debounce)(() => {
            d.default.track(f.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        P = () => {
            null != I.current && ((I.current.currentTime = S), I.current.play());
        },
        O = () => {
            null != I.current && (R(I.current.currentTime), I.current.pause());
        },
        Z = () =>
            (0, i.jsxs)('div', {
                className: s()({
                    [h.whatsNewTextBoxOuter]: !C,
                    [h.compactTextBox]: C
                }),
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: s()({
                            [h.whatsNewBoxHeader]: !C,
                            [h.compactBoxHeader]: C
                        }),
                        children: n
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: h.whatsNewBoxDescription,
                        children: a
                    }),
                    null != _ &&
                        (null != v
                            ? (0, i.jsx)(o.Button, {
                                  className: h.whatsNewBoxButton,
                                  onClick: () => {
                                      j(), v();
                                  },
                                  children: _
                              })
                            : (0, i.jsx)(g.Z, {
                                  className: h.whatsNewBoxButton,
                                  onClick: j,
                                  buttonText: _,
                                  color: o.Button.Colors.BRAND,
                                  look: o.Button.Looks.FILLED,
                                  showIcon: !1
                              }))
                ]
            }),
        M = (e) => {
            let { isLeft: t } = e;
            return (0, i.jsx)('div', {
                className: s()({
                    [h.whatsNewArtContainer]: !C,
                    [h.compactBoxArtContainer]: C
                }),
                children: (0, i.jsx)(c.Z, {
                    playsInline: !0,
                    preload: b ? 'auto' : 'none',
                    muted: !0,
                    poster: x,
                    loop: !0,
                    className: s()({
                        [h.perkBoxVideo]: !C,
                        [h.leftSideArt]: t && !C,
                        [h.compactBoxVideo]: C
                    }),
                    ref: I,
                    children: (0, i.jsx)('source', {
                        src: E,
                        type: N ? p.m.MP4 : p.m.WEBM
                    })
                })
            });
        };
    return T % 2 != 0
        ? (0, i.jsxs)('div', {
              className: s()(A, {
                  [h.whatsNewBoxContainer]: !C,
                  [h.compactBoxContainer]: C
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: O,
              onMouseLeave: O,
              children: [(0, i.jsx)(Z, {}), (0, i.jsx)(M, { isLeft: !1 })]
          })
        : (0, i.jsxs)('div', {
              className: s()(A, {
                  [h.whatsNewBoxContainer]: !C,
                  [h.compactBoxContainer]: C,
                  boxBackgroundColor: A
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: O,
              onMouseLeave: O,
              children: [(0, i.jsx)(M, { isLeft: !0 }), (0, i.jsx)(Z, {})]
          });
};
t.Z = r.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: r = !1 } = e,
        a = Object.values((0, m.ZP)(r)),
        l = r ? Object.values((0, m.__)()) : null;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(h.boxBackdrop, t),
            children: [
                (0, i.jsx)(o.Heading, {
                    className: h.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: r ? _.intl.string(_.t.EnzW2N) : _.intl.string(_.t.LRmNAg)
                }),
                a.map((e, t) =>
                    (0, i.jsx)(
                        x,
                        {
                            shouldLoadVideo: n,
                            ...e,
                            index: t
                        },
                        e.name
                    )
                ),
                null != l &&
                    (0, i.jsx)('div', {
                        className: h.compactBoxOuterContainer,
                        children: l.map((e, t) =>
                            (0, i.jsx)(
                                x,
                                {
                                    shouldLoadVideo: n,
                                    ...e,
                                    index: t
                                },
                                e.name
                            )
                        )
                    })
            ]
        })
    });
});
