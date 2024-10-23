var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(782568),
    o = n(326135),
    c = n(299206),
    d = n(706454),
    u = n(572004),
    _ = n(135431),
    E = n(981631),
    h = n(689938),
    m = n(825337);
t.Z = function (e) {
    var t;
    let { application: n } = e,
        I = a.useCallback(() => {
            (0, _.LO)({
                applicationId: n.id,
                customInstallUrl: n.custom_install_url,
                installParams: n.install_params,
                integrationTypesConfig: n.integration_types_config,
                guildId: void 0,
                source: 'product_page'
            });
        }, [n]),
        p = a.useMemo(
            () =>
                (0, _.Eb)({
                    customInstallUrl: n.custom_install_url,
                    installParams: n.install_params,
                    integrationTypesConfig: n.integration_types_config
                }),
            [n]
        ),
        g = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.APPLICATION_DIRECTORY_PROFILE(e)),
        T = a.useCallback(() => {
            (0, u.JG)(g(n.id)), (0, r.showToast)((0, r.createToast)(h.Z.Messages.COPIED_LINK, r.ToastType.SUCCESS));
        }, [n.id]),
        S = (0, s.e7)([d.default], () => d.default.locale),
        f = a.useCallback(() => {
            null != n &&
                (0, l.Z)(
                    (0, o.G)({
                        id: n.id,
                        name: n.name,
                        locale: S
                    })
                );
        }, [S, n]),
        C = (0, c.Z)({
            id: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
            label: h.Z.Messages.COPY_ID_APPLICATION,
            onSuccess: () => (0, r.showToast)((0, r.createToast)(h.Z.Messages.TOAST_ID_COPIED, r.ToastType.SUCCESS))
        }),
        N = a.useCallback(
            (e) =>
                (0, i.jsxs)(r.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': h.Z.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(r.MenuGroup, {
                            children: (0, i.jsx)(r.MenuItem, {
                                id: 'report',
                                label: h.Z.Messages.REPORT_APP,
                                color: 'danger',
                                action: f
                            })
                        }),
                        null != C ? (0, i.jsx)(r.MenuGroup, { children: C }) : null
                    ]
                }),
            [C, f]
        );
    return (0, i.jsxs)('div', {
        className: m.actionContainer,
        children: [
            (0, i.jsx)(r.Button, {
                color: r.Button.Colors.BRAND,
                onClick: I,
                disabled: !p,
                children: h.Z.Messages.APPLICATION_ADD_BUTTON
            }),
            u.wS
                ? (0, i.jsx)(r.Button, {
                      look: r.Button.Looks.FILLED,
                      size: r.Button.Sizes.ICON,
                      color: r.Button.Colors.PRIMARY,
                      className: m.iconButton,
                      innerClassName: m.innerIconButton,
                      'aria-label': h.Z.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON,
                      onClick: T,
                      children: (0, i.jsx)(r.LinkIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
            (0, i.jsx)(r.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return N(t);
                },
                position: 'left',
                align: 'top',
                animation: r.Popout.Animation.NONE,
                children: (e) =>
                    (0, i.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
                        className: m.iconButton,
                        innerClassName: m.innerIconButton,
                        'aria-label': h.Z.Messages.MORE,
                        ...e,
                        children: (0, i.jsx)(r.MoreHorizontalIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
            })
        ]
    });
};
