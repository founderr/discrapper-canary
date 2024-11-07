n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(239091),
    a = n(782568),
    o = n(570938),
    s = n(951394),
    c = n(749681),
    u = n(572004),
    d = n(63063),
    m = n(931515),
    h = n(981631),
    f = n(49898),
    p = n(128449),
    _ = n(388032),
    g = n(818768),
    E = n(761604);
function C(e) {
    let { gameId: t, onSelect: n } = e;
    return (0, i.jsx)(r.Menu, {
        onSelect: n,
        navId: 'discovery-entrypoint-context-menu',
        'aria-label': _.intl.string(_.t.ogxXGh),
        onClose: l.Zy,
        children: (0, i.jsxs)(r.MenuGroup, {
            children: [
                u.wS &&
                    (0, i.jsx)(r.MenuItem, {
                        id: 'copy',
                        label: _.intl.string(_.t.WqhZsr),
                        icon: r.CopyIcon,
                        action: () => {
                            (0, u.JG)(''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.DISCOVERY_GUILD_GAME_RESULTS(t)));
                        }
                    }),
                (0, i.jsx)(r.MenuItem, {
                    id: 'learn-more',
                    label: _.intl.string(_.t.hvVgAQ),
                    icon: r.LinkExternalMediumIcon,
                    action: () => {
                        (0, a.Z)(d.Z.getArticleURL(h.BhN.CLANS_FAQ));
                    }
                })
            ]
        })
    });
}
function I(e) {
    let { gameId: t } = e;
    return (0, i.jsx)(s.ZP, {
        className: g.buttonContainer,
        children: (0, i.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: 'bottom',
            spacing: 4,
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(C, {
                    gameId: t,
                    onSelect: n
                });
            },
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(r.Tooltip, {
                    text: _.intl.string(_.t.UKOtz8),
                    hideOnClick: !0,
                    children: (e) => {
                        let { onClick: l, ...a } = e;
                        return (0, i.jsx)(s.zx, {
                            ...n,
                            ...a,
                            onClick: (e) => {
                                e.stopPropagation(), null == l || l(), t(e);
                            },
                            'aria-label': _.intl.string(_.t.UKOtz8),
                            children: (0, i.jsx)(r.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: g.overflowIcon
                            })
                        });
                    }
                });
            }
        })
    });
}
function x(e) {
    let { gameId: t } = e,
        {
            isLoading: n,
            backgroundImageUrl: l,
            gameName: a
        } = (0, m.kN)(t, {
            coverImageWidth: 600,
            coverImageHeight: 280
        });
    return n
        ? (0, i.jsx)(r.Spinner, { className: g.spinner })
        : null == a
          ? (0, i.jsxs)('div', {
                className: g.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.errorHeader,
                        children: [
                            (0, i.jsx)('div', {
                                className: g.headerContent,
                                children: (0, i.jsx)(r.Heading, {
                                    className: g.title,
                                    variant: 'display-md',
                                    color: 'header-secondary',
                                    children: _.intl.string(_.t.ZDg1eH)
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: E,
                                className: g.errorImage
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.content,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: _.intl.string(_.t['yHp/y8'])
                            }),
                            (0, i.jsx)(r.Button, {
                                className: g.button,
                                look: r.Button.Looks.FILLED,
                                size: r.Button.Sizes.MEDIUM,
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: f.F$.SERVERS,
                                        selectedServersTab: p.vf.GUILDS,
                                        entrypoint: p.Qq.EMBED
                                    });
                                },
                                children: _.intl.string(_.t.uPeLWl)
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: g.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.header,
                        children: [
                            (0, i.jsx)(I, { gameId: t }),
                            (0, i.jsx)('div', {
                                className: g.splashWrapper,
                                children: (0, i.jsx)('div', {
                                    className: g.splash,
                                    style: { backgroundImage: 'url("'.concat(l, '")') }
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: g.headerContent,
                                children: [
                                    (0, i.jsxs)(r.Text, {
                                        className: g.label,
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: [(0, i.jsx)(o.Z, { className: g.icon }), _.intl.string(_.t.KH2azs)]
                                    }),
                                    (0, i.jsx)(r.Heading, {
                                        className: g.title,
                                        variant: 'display-md',
                                        color: 'header-secondary',
                                        children: _.intl.format(_.t.DOeucH, { gameName: a })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.content,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: _.intl.format(_.t['34PBmJ'], { gameName: a })
                            }),
                            (0, i.jsx)(r.Button, {
                                className: g.button,
                                look: r.Button.Looks.FILLED,
                                size: r.Button.Sizes.MEDIUM,
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: f.F$.SERVERS,
                                        selectedServersTab: p.vf.GUILDS,
                                        entrypoint: p.Qq.EMBED,
                                        extra: { search: '?game='.concat(t) }
                                    });
                                },
                                children: _.intl.string(_.t['7R5eKi'])
                            })
                        ]
                    })
                ]
            });
}
