var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(442837),
    d = l(692547),
    c = l(481060),
    o = l(410030),
    u = l(565138),
    h = l(523751),
    m = l(637853),
    g = l(434404),
    x = l(159300),
    C = l(496675),
    f = l(709586),
    v = l(768581),
    I = l(981631),
    Z = l(388032),
    p = l(215966),
    j = l(63190),
    N = l(102219);
let _ = (e) => {
    let n = i.useMemo(
        () =>
            null == e
                ? null
                : v.ZP.getGuildHomeHeaderURL({
                      id: e.id,
                      homeHeader: e.homeHeader
                  }),
        [e]
    );
    return {
        homeHeaderImage: n,
        isHomeHeaderImageSet: null != n,
        homeHeaderScroll: null != n ? 200 : 0
    };
};
function b(e) {
    let { guild: n } = e,
        l = () => {
            g.Z.open(n.id, I.pNK.ONBOARDING, void 0, I.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(I.oNc.BANNER)
        ? (0, a.jsxs)(c.Button, {
              className: p.editButton,
              innerClassName: p.editButtonInner,
              type: 'button',
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: l,
              children: [
                  (0, a.jsx)(c.ImagePlusIcon, {
                      size: 'xs',
                      color: d.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  Z.intl.string(Z.t.b0y3DA)
              ]
          })
        : (0, a.jsxs)(c.ShinyButton, {
              color: c.Button.Colors.GREEN,
              className: p.editButton,
              innerClassName: p.editButtonInner,
              onClick: l,
              children: [
                  (0, a.jsx)(f.Z, {
                      height: 16,
                      width: 16
                  }),
                  Z.intl.string(Z.t['+7XY39'])
              ]
          });
}
let E = i.memo(function (e) {
    let { guild: n, titleClassName: i } = e,
        { homeHeaderImage: t, isHomeHeaderImageSet: d } = _(n),
        g = (0, m.b$)(n.id),
        f = (0, s.e7)([C.Z], () => (0, x.b)(C.Z, n)),
        v = (0, o.ZP)();
    return (0, a.jsxs)('div', {
        className: p.header,
        children: [
            (0, a.jsxs)('div', {
                className: p.headerArtWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: r()(p.headerArt, { [p.headerArtPlaceholder]: !d }),
                        style: { backgroundImage: 'url('.concat(d ? t : 'dark' === v ? j : N, ')') }
                    }),
                    g && (0, a.jsx)(b, { guild: n })
                ]
            }),
            (0, a.jsx)('div', {
                className: p.titleWrapper,
                children: (0, a.jsxs)('div', {
                    className: i,
                    children: [
                        (0, a.jsx)(u.Z, {
                            className: p.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, a.jsx)(c.HeadingLevel, {
                            children: (0, a.jsxs)('div', {
                                className: p.headerName,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        className: p.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, a.jsx)(h.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: c.Tooltip.Colors.PRIMARY
                                    }),
                                    f &&
                                        (0, a.jsx)(c.Button, {
                                            className: p.inviteButton,
                                            size: c.Button.Sizes.MEDIUM,
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, c.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([l.e('7654'), l.e('85683')]).then(l.bind(l, 560114));
                                                    return (l) =>
                                                        (0, a.jsx)(e, {
                                                            ...l,
                                                            guild: n,
                                                            source: I.t4x.GUILD_HOME
                                                        });
                                                }),
                                            children: Z.intl.string(Z.t.VINpSE)
                                        })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
});
n.Z = E;
