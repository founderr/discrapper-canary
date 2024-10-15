n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(239091),
    r = n(782568),
    l = n(570938),
    o = n(951394),
    c = n(703656),
    u = n(572004),
    d = n(63063),
    _ = n(931515),
    E = n(981631),
    I = n(689938),
    m = n(818768),
    T = n(761604);
function h(e) {
    let { gameId: t, onSelect: n } = e;
    return (0, i.jsx)(a.Menu, {
        onSelect: n,
        navId: 'discovery-entrypoint-context-menu',
        'aria-label': I.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: s.Zy,
        children: (0, i.jsxs)(a.MenuGroup, {
            children: [
                u.wS &&
                    (0, i.jsx)(a.MenuItem, {
                        id: 'copy',
                        label: I.Z.Messages.COPY_LINK,
                        icon: a.CopyIcon,
                        action: () => {
                            (0, u.JG)(''.concat(location.protocol, '//').concat(location.host).concat(E.Z5c.DISCOVERY_GUILD_GAME_RESULTS(t)));
                        }
                    }),
                (0, i.jsx)(a.MenuItem, {
                    id: 'learn-more',
                    label: I.Z.Messages.LEARN_MORE,
                    icon: a.LinkExternalMediumIcon,
                    action: () => {
                        (0, r.Z)(d.Z.getArticleURL(E.BhN.CLANS_FAQ));
                    }
                })
            ]
        })
    });
}
function N(e) {
    let { gameId: t } = e;
    return (0, i.jsx)(o.ZP, {
        className: m.buttonContainer,
        children: (0, i.jsx)(a.Popout, {
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            spacing: 4,
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(h, {
                    gameId: t,
                    onSelect: n
                });
            },
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(a.Tooltip, {
                    text: I.Z.Messages.MORE,
                    hideOnClick: !0,
                    children: (e) => {
                        let { onClick: s, ...r } = e;
                        return (0, i.jsx)(o.zx, {
                            ...n,
                            ...r,
                            onClick: (e) => {
                                e.stopPropagation(), null == s || s(), t(e);
                            },
                            'aria-label': I.Z.Messages.MORE,
                            children: (0, i.jsx)(a.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.overflowIcon
                            })
                        });
                    }
                });
            }
        })
    });
}
function f(e) {
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
        ? (0, i.jsx)(a.Spinner, { className: m.spinner })
        : null == r
          ? (0, i.jsxs)('div', {
                className: m.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.errorHeader,
                        children: [
                            (0, i.jsx)('div', {
                                className: m.headerContent,
                                children: (0, i.jsx)(a.Heading, {
                                    className: m.title,
                                    variant: 'display-md',
                                    color: 'header-secondary',
                                    children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_TITLE
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: T,
                                className: m.errorImage
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: m.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_DESCRIPTION
                            }),
                            (0, i.jsx)(a.Button, {
                                className: m.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => (0, c.uL)(E.Z5c.GLOBAL_DISCOVERY_SERVERS),
                                children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_ERROR_CTA
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: m.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, i.jsx)(N, { gameId: t }),
                            (0, i.jsx)('div', {
                                className: m.splashWrapper,
                                children: (0, i.jsx)('div', {
                                    className: m.splash,
                                    style: { backgroundImage: 'url("'.concat(s, '")') }
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: m.headerContent,
                                children: [
                                    (0, i.jsxs)(a.Text, {
                                        className: m.label,
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: [(0, i.jsx)(l.Z, { className: m.icon }), I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_LABEL]
                                    }),
                                    (0, i.jsx)(a.Heading, {
                                        className: m.title,
                                        variant: 'display-md',
                                        color: 'header-secondary',
                                        children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_TITLE.format({ gameName: r })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: m.content,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_DESCRIPTION.format({ gameName: r })
                            }),
                            (0, i.jsx)(a.Button, {
                                className: m.button,
                                look: a.Button.Looks.FILLED,
                                size: a.Button.Sizes.MEDIUM,
                                color: a.Button.Colors.BRAND,
                                onClick: () => (0, c.uL)(E.Z5c.GLOBAL_DISCOVERY_SERVERS, { search: '?game='.concat(t) }),
                                children: I.Z.Messages.DISCOVERY_ENTRYPOINT_EMBED_CTA
                            })
                        ]
                    })
                ]
            });
}
