var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(782568),
    o = n(326135),
    c = n(299206),
    d = n(706454),
    u = n(572004),
    h = n(135431),
    m = n(981631),
    p = n(388032),
    g = n(914045);
t.Z = function (e) {
    var t;
    let { application: n } = e,
        f = r.useCallback(() => {
            (0, h.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: void 0,
                source: 'product_page'
            });
        }, [n]),
        _ = r.useMemo(
            () =>
                (0, h.Eb)({
                    customInstallUrl: n.custom_install_url,
                    installParams: n.install_params,
                    integrationTypesConfig: n.integration_types_config
                }),
            [n]
        ),
        E = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        I = r.useCallback(() => {
            (0, u.JG)(E(n.id)), (0, a.showToast)((0, a.createToast)(p.intl.string(p.t['L/PwZW']), a.ToastType.SUCCESS));
        }, [n.id]),
        C = (0, l.e7)([d.default], () => d.default.locale),
        v = r.useCallback(() => {
            null != n &&
                (0, s.Z)(
                    (0, o.G)({
                        id: n.id,
                        name: n.name,
                        locale: C
                    })
                );
        }, [C, n]),
        S = (0, c.Z)({
            id: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
            label: p.intl.string(p.t['FfCL+/']),
            onSuccess: () => (0, a.showToast)((0, a.createToast)(p.intl.string(p.t.eNjAam), a.ToastType.SUCCESS))
        }),
        N = r.useCallback(
            (e) =>
                (0, i.jsxs)(a.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': p.intl.string(p.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(a.MenuGroup, {
                            children: (0, i.jsx)(a.MenuItem, {
                                id: 'report',
                                label: p.intl.string(p.t.NgA5vr),
                                color: 'danger',
                                action: v
                            })
                        }),
                        null != S ? (0, i.jsx)(a.MenuGroup, { children: S }) : null
                    ]
                }),
            [S, v]
        );
    return (0, i.jsxs)('div', {
        className: g.actionContainer,
        children: [
            (0, i.jsx)(a.Button, {
                color: a.Button.Colors.BRAND,
                onClick: f,
                disabled: !_,
                children: p.intl.string(p.t.NgXl3N)
            }),
            u.wS
                ? (0, i.jsx)(a.Button, {
                      look: a.Button.Looks.FILLED,
                      size: a.Button.Sizes.ICON,
                      color: a.Button.Colors.PRIMARY,
                      className: g.iconButton,
                      innerClassName: g.innerIconButton,
                      'aria-label': p.intl.string(p.t.z4sP5O),
                      onClick: I,
                      children: (0, i.jsx)(a.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
            (0, i.jsx)(a.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return N(t);
                },
                position: 'left',
                align: 'top',
                animation: a.Popout.Animation.NONE,
                children: (e) =>
                    (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.FILLED,
                        size: a.Button.Sizes.ICON,
                        color: a.Button.Colors.PRIMARY,
                        className: g.iconButton,
                        innerClassName: g.innerIconButton,
                        'aria-label': p.intl.string(p.t.UKOtz8),
                        ...e,
                        children: (0, i.jsx)(a.MoreHorizontalIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            })
        ]
    });
};
