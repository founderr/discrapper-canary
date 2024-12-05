var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(782568),
    d = n(326135),
    u = n(299206),
    h = n(706454),
    m = n(572004),
    p = n(135431),
    g = n(981631),
    f = n(388032),
    _ = n(914045);
t.Z = function (e) {
    var t;
    let { application: n, size: l } = e,
        E = r.useCallback(() => {
            (0, p.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: void 0,
                source: 'product_page'
            });
        }, [n]),
        I = r.useMemo(
            () =>
                (0, p.Eb)({
                    customInstallUrl: n.custom_install_url,
                    installParams: n.install_params,
                    integrationTypesConfig: n.integration_types_config
                }),
            [n]
        ),
        C = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(g.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        v = r.useCallback(() => {
            (0, m.JG)(C(n.id)), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t['L/PwZW']), o.ToastType.SUCCESS));
        }, [n.id]),
        N = (0, s.e7)([h.default], () => h.default.locale),
        S = r.useCallback(() => {
            null != n &&
                (0, c.Z)(
                    (0, d.G)({
                        id: n.id,
                        name: n.name,
                        locale: N
                    })
                );
        }, [N, n]),
        T = (0, u.Z)({
            id: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
            label: f.intl.string(f.t['FfCL+/']),
            onSuccess: () => (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.eNjAam), o.ToastType.SUCCESS))
        }),
        b = r.useCallback(
            (e) =>
                (0, i.jsxs)(o.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': f.intl.string(f.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(o.MenuGroup, {
                            children: (0, i.jsx)(o.MenuItem, {
                                id: 'report',
                                label: f.intl.string(f.t.NgA5vr),
                                color: 'danger',
                                action: S
                            })
                        }),
                        null != T ? (0, i.jsx)(o.MenuGroup, { children: T }) : null
                    ]
                }),
            [T, S]
        );
    return (0, i.jsxs)('div', {
        className: _.actionContainer,
        children: [
            (0, i.jsx)(o.Button, {
                size: 'sm' === l ? o.Button.Sizes.SMALL : o.Button.Sizes.MEDIUM,
                color: o.Button.Colors.BRAND,
                onClick: E,
                disabled: !I,
                children: f.intl.string(f.t.NgXl3N)
            }),
            m.wS
                ? (0, i.jsx)(o.Button, {
                      look: o.Button.Looks.FILLED,
                      size: o.Button.Sizes.ICON,
                      color: o.Button.Colors.PRIMARY,
                      className: a()(_.iconButton, { [_.small]: 'sm' === l }),
                      innerClassName: _.innerIconButton,
                      'aria-label': f.intl.string(f.t.z4sP5O),
                      onClick: v,
                      children: (0, i.jsx)(o.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return b(t);
                },
                position: 'left',
                align: 'top',
                animation: o.Popout.Animation.NONE,
                children: (e) =>
                    (0, i.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        size: o.Button.Sizes.ICON,
                        color: o.Button.Colors.PRIMARY,
                        className: a()(_.iconButton, { [_.small]: 'sm' === l }),
                        innerClassName: _.innerIconButton,
                        'aria-label': f.intl.string(f.t.UKOtz8),
                        ...e,
                        children: (0, i.jsx)(o.MoreHorizontalIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            })
        ]
    });
};
