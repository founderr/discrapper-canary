var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(782568),
    d = n(326135),
    u = n(299206),
    h = n(706454),
    m = n(572004),
    p = n(135431),
    g = n(881294),
    f = n(981631),
    _ = n(388032),
    E = n(914045);
t.Z = function (e) {
    var t;
    let { application: n, size: l } = e,
        I = r.useCallback(() => {
            (0, p.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: void 0,
                source: 'product_page'
            });
        }, [n]),
        C = r.useMemo(
            () =>
                (0, p.Eb)({
                    customInstallUrl: n.custom_install_url,
                    installParams: n.install_params,
                    integrationTypesConfig: n.integration_types_config
                }),
            [n]
        ),
        v = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)),
        S = r.useCallback(() => {
            (0, g.z)(f.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }), (0, m.JG)(v(n.id)), (0, s.showToast)((0, s.createToast)(_.intl.string(_.t['L/PwZW']), s.ToastType.SUCCESS));
        }, [n.id]),
        N = (0, o.e7)([h.default], () => h.default.locale),
        T = r.useCallback(() => {
            null != n &&
                (0, c.Z)(
                    (0, d.G)({
                        id: n.id,
                        name: n.name,
                        locale: N
                    })
                );
        }, [N, n]),
        b = (0, u.Z)({
            id: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
            label: _.intl.string(_.t['FfCL+/']),
            onSuccess: () => (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.eNjAam), s.ToastType.SUCCESS))
        }),
        A = r.useCallback(
            (e) =>
                (0, i.jsxs)(s.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': _.intl.string(_.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(s.MenuGroup, {
                            children: (0, i.jsx)(s.MenuItem, {
                                id: 'report',
                                label: _.intl.string(_.t.NgA5vr),
                                color: 'danger',
                                action: T
                            })
                        }),
                        null != b ? (0, i.jsx)(s.MenuGroup, { children: b }) : null
                    ]
                }),
            [b, T]
        );
    return (0, i.jsxs)('div', {
        className: E.actionContainer,
        children: [
            (0, i.jsx)(s.Button, {
                size: 'sm' === l ? s.Button.Sizes.SMALL : s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND,
                onClick: I,
                disabled: !C,
                children: _.intl.string(_.t.NgXl3N)
            }),
            m.wS
                ? (0, i.jsx)(s.Button, {
                      look: s.Button.Looks.FILLED,
                      size: s.Button.Sizes.ICON,
                      color: s.Button.Colors.PRIMARY,
                      className: a()(E.iconButton, { [E.small]: 'sm' === l }),
                      innerClassName: E.innerIconButton,
                      'aria-label': _.intl.string(_.t.z4sP5O),
                      onClick: S,
                      children: (0, i.jsx)(s.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
            (0, i.jsx)(s.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return A(t);
                },
                position: 'left',
                align: 'top',
                animation: s.Popout.Animation.NONE,
                children: (e) =>
                    (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        size: s.Button.Sizes.ICON,
                        color: s.Button.Colors.PRIMARY,
                        className: a()(E.iconButton, { [E.small]: 'sm' === l }),
                        innerClassName: E.innerIconButton,
                        'aria-label': _.intl.string(_.t.UKOtz8),
                        ...e,
                        children: (0, i.jsx)(s.MoreHorizontalIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            })
        ]
    });
};
