n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
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
    T = n(689938),
    h = n(818768),
    N = n(761604);
function f(e) {
    let { gameId: t, onSelect: n } = e;
    return (0, i.jsx)(a.Menu, {
        onSelect: n,
        navId: 'discovery-entrypoint-context-menu',
        'aria-label': T.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: s.Zy,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                u.wS &&
                    (0, i.jsx)(a.MenuItem, {
                        id: 'copy',
                        label: T.Z.Messages.COPY_LINK,
                        icon: a.CopyIcon,
                        action: () => {
                            (0, u.JG)(''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.DISCOVERY_GUILD_GAME_RESULTS(t)));
                        }
                    }),
                (0, i.jsx)(a.MenuItem, {
                    id: 'learn-more',
                    label: T.Z.Messages.LEARN_MORE,
                    icon: a.LinkExternalMediumIcon,
                    action: () => {
                        (0, r.Z)(d.Z.getArticleURL(E.BhN.CLANS_FAQ));
                    }
                })
            ]
        })
    });
}
function C(e) {
    let { gameId: t } = e;
    return (0, i.jsx)(o.ZP, {
        className: h.buttonContainer,
        children: (0, i.jsx)(a.Popout, {
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            spacing: 4,
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(f, {
                    gameId: t,
                    onSelect: n
                });
            },
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(a.Tooltip, {
                    text: T.Z.Messages.MORE,
                    hideOnClick: !0,
                    children: (e) => {
                        let { onClick: s, ...r } = e;
                        return (0, i.jsx)(o.zx, {
                            ...n,
                            ...r,
                            onClick: (e) => {
                                e.stopPropagation(), null == s || s(), t(e);
                            },
                            'aria-label': T.Z.Messages.MORE,
                            children: (0, i.jsx)(a.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: h.overflowIcon
                            })
                        });
                    }
                });
            }
        })
    });
}
function p(e) {
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
        ? (0, i.jsx)(a.Spinner, { className: h.spinner })
        : null == r
          ? (0, i.jsxs)('div', {
                className: h.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.errorHeader,
                        children: [
                            (0, i.jsx)('div', {
                                className: h.headerContent,
                                children: (0, i.jsx)(a.Heading, {
                                    className: h.title,
                                    variant: 'display-md',
                                    color: 'header-secondary',
                                    children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_TITLE
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: N,
                                className: h.errorImage
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: h.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_DESCRIPTION
                            }),
                            (0, i.jsx)(a.Button, {
                                className: h.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: I.F$.SERVERS,
                                        selectedServersTab: m.vf.GUILDS
                                    });
                                },
                                children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_CTA
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: h.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.header,
                        children: [
                            (0, i.jsx)(C, { gameId: t }),
                            (0, i.jsx)('div', {
                                className: h.splashWrapper,
                                children: (0, i.jsx)('div', {
                                    className: h.splash,
                                    style: { backgroundImage: 'url("'.concat(s, '")') }
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: h.headerContent,
                                children: [
                                    (0, i.jsxs)(a.Text, {
                                        className: h.label,
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: [(0, i.jsx)(l.Z, { className: h.icon }), T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_LABEL]
                                    }),
                                    (0, i.jsx)(a.Heading, {
                                        className: h.title,
                                        variant: 'display-md',
                                        color: 'header-secondary',
                                        children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_TITLE.format({ gameName: r })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: h.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_DESCRIPTION.format({ gameName: r })
                            }),
                            (0, i.jsx)(a.Button, {
                                className: h.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: I.F$.SERVERS,
                                        selectedServersTab: m.vf.GUILDS,
                                        extra: { search: '?game='.concat(t) }
                                    });
                                },
                                children: T.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_CTA
                            })
                        ]
                    })
                ]
            });
}
