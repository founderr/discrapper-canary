n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(239091),
    r = n(782568),
    l = n(570938),
    o = n(951394),
    c = n(749681),
    u = n(572004),
    d = n(63063),
    _ = n(931515),
    E = n(981631),
    I = n(49898),
    m = n(128449),
    f = n(689938),
    T = n(818768),
    h = n(761604);
function N(e) {
    let { gameId: t, onSelect: n } = e;
    return (0, i.jsx)(a.Menu, {
        onSelect: n,
        navId: 'discovery-entrypoint-context-menu',
        'aria-label': f.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: s.Zy,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                u.wS &&
                    (0, i.jsx)(a.MenuItem, {
                        id: 'copy',
                        label: f.Z.Messages.COPY_LINK,
                        icon: a.CopyIcon,
                        action: () => {
                            (0, u.JG)(''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.DISCOVERY_GUILD_GAME_RESULTS(t)));
                        }
                    }),
                (0, i.jsx)(a.MenuItem, {
                    id: 'learn-more',
                    label: f.Z.Messages.LEARN_MORE,
                    icon: a.LinkExternalMediumIcon,
                    action: () => {
                        (0, r.Z)(d.Z.getArticleURL(E.BhN.CLANS_FAQ));
                    }
                })
            ]
        })
    });
}
function p(e) {
    let { gameId: t } = e;
    return (0, i.jsx)(o.ZP, {
        className: T.buttonContainer,
        children: (0, i.jsx)(a.Popout, {
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            spacing: 4,
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(N, {
                    gameId: t,
                    onSelect: n
                });
            },
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(a.Tooltip, {
                    text: f.Z.Messages.MORE,
                    hideOnClick: !0,
                    children: (e) => {
                        let { onClick: s, ...r } = e;
                        return (0, i.jsx)(o.zx, {
                            ...n,
                            ...r,
                            onClick: (e) => {
                                e.stopPropagation(), null == s || s(), t(e);
                            },
                            'aria-label': f.Z.Messages.MORE,
                            children: (0, i.jsx)(a.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.overflowIcon
                            })
                        });
                    }
                });
            }
        })
    });
}
function C(e) {
    let { gameId: t } = e,
        {
            isLoading: n,
            backgroundImageUrl: s,
            gameName: r
        } = (0, _.kN)(t, {
            coverImageWidth: 600,
            coverImageHeight: 280
        });
    return n
        ? (0, i.jsx)(a.Spinner, { className: T.spinner })
        : null == r
          ? (0, i.jsxs)('div', {
                className: T.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: T.errorHeader,
                        children: [
                            (0, i.jsx)('div', {
                                className: T.headerContent,
                                children: (0, i.jsx)(a.Heading, {
                                    className: T.title,
                                    variant: 'display-md',
                                    color: 'header-secondary',
                                    children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_TITLE
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: h,
                                className: T.errorImage
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: T.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_DESCRIPTION
                            }),
                            (0, i.jsx)(a.Button, {
                                className: T.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: I.F$.SERVERS,
                                        selectedServersTab: m.vf.GUILDS,
                                        entrypoint: m.Qq.EMBED
                                    });
                                },
                                children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_CTA
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: T.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: T.header,
                        children: [
                            (0, i.jsx)(p, { gameId: t }),
                            (0, i.jsx)('div', {
                                className: T.splashWrapper,
                                children: (0, i.jsx)('div', {
                                    className: T.splash,
                                    style: { backgroundImage: 'url("'.concat(s, '")') }
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: T.headerContent,
                                children: [
                                    (0, i.jsxs)(a.Text, {
                                        className: T.label,
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: [(0, i.jsx)(l.Z, { className: T.icon }), f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_LABEL]
                                    }),
                                    (0, i.jsx)(a.Heading, {
                                        className: T.title,
                                        variant: 'display-md',
                                        color: 'header-secondary',
                                        children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_TITLE.format({ gameName: r })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: T.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_DESCRIPTION.format({ gameName: r })
                            }),
                            (0, i.jsx)(a.Button, {
                                className: T.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: I.F$.SERVERS,
                                        selectedServersTab: m.vf.GUILDS,
                                        entrypoint: m.Qq.EMBED,
                                        extra: { search: '?game='.concat(t) }
                                    });
                                },
                                children: f.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_CTA
                            })
                        ]
                    })
                ]
            });
}
