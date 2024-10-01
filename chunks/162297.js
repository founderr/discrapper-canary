n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(399606),
    s = n(481060),
    l = n(778569),
    u = n(182906),
    c = n(783097),
    d = n(220082),
    _ = n(914010),
    E = n(768581),
    f = n(135431),
    h = n(728345),
    p = n(812206),
    m = n(689938),
    I = n(166272),
    T = n(413097),
    g = n(970952);
let S = 280,
    A = 56;
function v(e) {
    let { applicationId: t } = e,
        [n, r, s] = (0, o.Wu)([p.Z], () => [p.Z.getApplication(t), p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !r && !s && h.ZP.fetchApplication(t);
    }, [n, r, s, t]),
    null != n &&
        (0, f.E)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(N, { application: n })
        : null;
}
function N(e) {
    let { application: t } = e,
        n = (0, o.e7)([_.Z], () => {
            var e;
            return null !== (e = _.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: r,
            name: l,
            description: u
        } = a.useMemo(
            () =>
                (0, c.sl)(t, {
                    fakeAppIconURL: T,
                    size: A
                }),
            [t]
        ),
        d = () => {
            (0, f.L)({
                applicationId: t.id,
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
                guildId: n,
                source: 'app_oauth2_link_embed'
            });
        };
    return (0, i.jsxs)('div', {
        className: I.embedContainer,
        children: [
            (0, i.jsx)(O, {
                application: t,
                iconUrl: r
            }),
            (0, i.jsx)('img', {
                className: I.icon,
                alt: t.name,
                src: null != r ? r : g,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: I.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: I.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: l
                            }),
                            null != u &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: u
                                })
                        ]
                    }),
                    (0, i.jsx)(s.Button, {
                        color: s.Button.Colors.PRIMARY,
                        className: I.button,
                        type: 'button',
                        size: s.Button.Sizes.MEDIUM,
                        onClick: d,
                        children: m.Z.Messages.APPLICATION_ADD_BUTTON
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, l.Z)({
            applicationId: t.id,
            size: S,
            names: ['embedded_cover']
        }),
        a = (0, d.ZP)(n, ''),
        o = t.bot,
        s = null,
        _ = {};
    if ((0, c.ye)(t))
        s = (0, i.jsx)(u.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: I.bannerImage,
            imageNotFoundClassName: I.bannerImage
        });
    else if ((null == o ? void 0 : o.banner) != null) {
        let e = (0, E.aN)({
            id: o.id,
            banner: o.banner,
            size: S,
            canAnimate: !1
        });
        s = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: I.bannerImage
        });
    } else _ = { backgroundColor: a };
    return (0, i.jsx)('div', {
        className: I.banner,
        style: _,
        children: s
    });
}
