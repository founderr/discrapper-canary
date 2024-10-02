n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(990547),
    s = n(399606),
    l = n(481060),
    u = n(434650),
    c = n(778569),
    d = n(182906),
    _ = n(367907),
    E = n(213609),
    f = n(783097),
    h = n(220082),
    p = n(914010),
    m = n(768581),
    I = n(135431),
    T = n(728345),
    g = n(812206),
    S = n(981631),
    A = n(689938),
    v = n(166272),
    N = n(413097),
    O = n(970952);
let R = 280,
    C = 56;
function y(e) {
    let { applicationId: t } = e,
        [n, r, o] = (0, s.Wu)([g.Z], () => [g.Z.getApplication(t), g.Z.isFetchingApplication(t), g.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !r && !o && T.ZP.fetchApplication(t);
    }, [n, r, o, t]),
    null != n &&
        (0, I.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(L, { application: n })
        : null;
}
function L(e) {
    let { application: t } = e,
        n = (0, s.e7)([p.Z], () => {
            var e;
            return null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: r,
            name: c,
            description: d
        } = a.useMemo(
            () =>
                (0, f.sl)(t, {
                    fakeAppIconURL: N,
                    size: C
                }),
            [t]
        ),
        [h, m] = a.useState(!1),
        T = a.useCallback((e) => {
            e && m(!0);
        }, []),
        g = (0, u.O)(T);
    a.useEffect(() => {
        h &&
            (0, E.h)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id }
            });
    }, [h, t]);
    let R = () => {
        _.ZP.trackWithMetadata(S.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
            (0, I.LO)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: n,
                source: 'app_oauth2_link_embed'
            });
    };
    return (0, i.jsxs)('div', {
        ref: g,
        className: v.embedContainer,
        children: [
            (0, i.jsx)(b, {
                application: t,
                iconUrl: r
            }),
            (0, i.jsx)('img', {
                className: v.icon,
                alt: t.name,
                src: null != r ? r : O,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: v.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.details,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: c
                            }),
                            null != d &&
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: d
                                })
                        ]
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        className: v.button,
                        type: 'button',
                        size: l.Button.Sizes.MEDIUM,
                        onClick: R,
                        children: A.Z.Messages.APPLICATION_ADD_BUTTON
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, c.Z)({
            applicationId: t.id,
            size: R,
            names: ['embedded_cover']
        }),
        a = (0, h.ZP)(n, ''),
        o = t.bot,
        s = null,
        l = {};
    if ((0, f.ye)(t))
        s = (0, i.jsx)(d.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: v.bannerImage,
            imageNotFoundClassName: v.bannerImage
        });
    else if ((null == o ? void 0 : o.banner) != null) {
        let e = (0, m.aN)({
            id: o.id,
            banner: o.banner,
            size: R,
            canAnimate: !1
        });
        s = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: v.bannerImage
        });
    } else l = { backgroundColor: a };
    return (0, i.jsx)('div', {
        className: v.banner,
        style: l,
        children: s
    });
}
