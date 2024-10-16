var a = l(735250),
    i = l(470079),
    r = l(120356),
    t = l.n(r),
    s = l(442837),
    d = l(692547),
    c = l(481060),
    o = l(410030),
    u = l(565138),
    h = l(523751),
    m = l(637853),
    g = l(434404),
    C = l(159300),
    x = l(496675),
    f = l(709586),
    I = l(768581),
    v = l(981631),
    _ = l(689938),
    Z = l(215966),
    N = l(63190),
    j = l(102219);
let p = (e) => {
    let n = i.useMemo(
        () =>
            null == e
                ? null
                : I.ZP.getGuildHomeHeaderURL({
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
            g.Z.open(n.id, v.pNK.ONBOARDING, void 0, v.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(v.oNc.BANNER)
        ? (0, a.jsxs)(c.Button, {
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              type: 'button',
              size: c.Button.Sizes.MEDIUM,
              color: c.Button.Colors.BRAND,
              onClick: l,
              children: [
                  (0, a.jsx)(c.ImagePlusIcon, {
                      size: 'xs',
                      color: d.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  _.Z.Messages.EDIT_IMAGE
              ]
          })
        : (0, a.jsxs)(c.ShinyButton, {
              color: c.Button.Colors.GREEN,
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              onClick: l,
              children: [
                  (0, a.jsx)(f.Z, {
                      height: 16,
                      width: 16
                  }),
                  _.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
              ]
          });
}
let E = i.memo(function (e) {
    let { guild: n, titleClassName: i } = e,
        { homeHeaderImage: r, isHomeHeaderImageSet: d } = p(n),
        g = (0, m.b$)(n.id),
        f = (0, s.e7)([x.Z], () => (0, C.b)(x.Z, n)),
        I = (0, o.ZP)();
    return (0, a.jsxs)('div', {
        className: Z.header,
        children: [
            (0, a.jsxs)('div', {
                className: Z.headerArtWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: t()(Z.headerArt, { [Z.headerArtPlaceholder]: !d }),
                        style: { backgroundImage: 'url('.concat(d ? r : 'dark' === I ? N : j, ')') }
                    }),
                    g && (0, a.jsx)(b, { guild: n })
                ]
            }),
            (0, a.jsx)('div', {
                className: Z.titleWrapper,
                children: (0, a.jsxs)('div', {
                    className: i,
                    children: [
                        (0, a.jsx)(u.Z, {
                            className: Z.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, a.jsx)(c.HeadingLevel, {
                            children: (0, a.jsxs)('div', {
                                className: Z.headerName,
                                children: [
                                    (0, a.jsx)(c.Heading, {
                                        className: Z.headerName,
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
                                            className: Z.inviteButton,
                                            size: c.Button.Sizes.MEDIUM,
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, c.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([l.e('7654'), l.e('85683')]).then(l.bind(l, 560114));
                                                    return (l) =>
                                                        (0, a.jsx)(e, {
                                                            ...l,
                                                            guild: n,
                                                            source: v.t4x.GUILD_HOME
                                                        });
                                                }),
                                            children: _.Z.Messages.INSTANT_INVITE
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
