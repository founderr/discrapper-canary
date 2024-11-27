n.d(t, {
    h: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(704215),
    o = n(692547),
    c = n(481060),
    d = n(2052),
    u = n(127255),
    h = n(5200),
    p = n(403404),
    m = n(100527),
    f = n(906732),
    g = n(895924),
    C = n(605236),
    x = n(448239),
    _ = n(626135),
    v = n(607187),
    I = n(981631),
    E = n(388032),
    b = n(414360),
    N = n(334732);
function S(e) {
    let { channel: t, guild: n, width: l, inPopout: r, handleClose: a, userParticipantCount: s } = e;
    return l < 250
        ? (0, i.jsx)(Z, {
              channel: t,
              guild: n,
              width: l,
              inPopout: r,
              handleClose: a,
              userParticipantCount: s
          })
        : s > 1
          ? (0, i.jsx)(j, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r,
                handleClose: a,
                userParticipantCount: s
            })
          : (0, i.jsx)(T, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r
            });
}
function Z(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: r } = (0, f.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        s = (0, d.O)(),
        u = () => {
            (0, p.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: s.location,
                openInPopout: n,
                analyticsLocations: r,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(f.Gt, {
        value: r,
        children: (0, i.jsxs)(v.Z, {
            className: b.root,
            children: [
                (0, i.jsx)(c.Tooltip, {
                    text: E.intl.string(E.t.qJvTKS),
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(c.Clickable, {
                            ...n,
                            className: b.clickableTile,
                            onClick: () => {
                                null == t || t(), u();
                            },
                            children: (0, i.jsx)('div', {
                                className: b.iconContainer,
                                children: (0, i.jsx)(c.ActivitiesPlusIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 40,
                                    height: 40
                                })
                            })
                        });
                    }
                }),
                (0, i.jsx)(c.ThemeProvider, {
                    theme: I.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(c.Clickable, {
                            onClick: l,
                            className: a()(e, b.shelfButtonCloseButton),
                            children: (0, i.jsx)(c.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.closeButtonIcon,
                                secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function T(e) {
    let { channel: t, guild: r, inPopout: a, width: s } = e;
    l.useEffect(() => {
        _.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let o = (0, d.O)(),
        { analyticsLocations: u } = (0, f.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE);
    return (0, i.jsx)(f.Gt, {
        value: u,
        children: (0, i.jsxs)(v.Z, {
            className: b.root,
            children: [
                s > 400
                    ? (0, i.jsx)('img', {
                          src: N,
                          className: b.art,
                          alt: E.intl.string(E.t['3Y9xdH'])
                      })
                    : null,
                (0, i.jsx)(c.Text, {
                    className: b.heading,
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: E.intl.string(E.t['6pKGKS'])
                }),
                (0, i.jsxs)('div', {
                    className: b.buttonContainer,
                    children: [
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            color: c.Button.Colors.PRIMARY,
                            className: b.button,
                            innerClassName: b.buttonContents,
                            onClick: function () {
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('7654'), n.e('54655')]).then(n.bind(n, 560114));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: r,
                                                channel: t,
                                                source: I.t4x.ACTIVITY_ENTRY_POINT_TILE
                                            });
                                    },
                                    { contextKey: a ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT }
                                );
                            },
                            children: [
                                (0, i.jsx)(c.FriendsIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                E.intl.string(E.t['6Qgren'])
                            ]
                        }),
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            className: b.button,
                            innerClassName: b.buttonContents,
                            onClick: function () {
                                (0, p.Z)({
                                    channel: t,
                                    guildId: t.guild_id,
                                    locationObject: o.location,
                                    openInPopout: a,
                                    analyticsLocations: u,
                                    opensAppLauncherModal: !0
                                });
                            },
                            children: [
                                (0, i.jsx)(c.ActivitiesIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                E.intl.string(E.t.qaIFpq)
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function j(e) {
    let { channel: t, guild: n, handleClose: r, width: o, userParticipantCount: d } = e;
    l.useEffect(() => {
        _.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: d
        });
    }, []);
    let p = (0, u.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: S } = (0, f.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION);
    return (0, i.jsx)(f.Gt, {
        value: S,
        children: (0, i.jsxs)(v.Z, {
            className: b.root,
            children: [
                o > 480
                    ? (0, i.jsx)('img', {
                          className: b.art,
                          src: N,
                          alt: E.intl.string(E.t['3Y9xdH'])
                      })
                    : null,
                o > 300
                    ? (0, i.jsx)(c.Text, {
                          className: b.heading,
                          variant: o > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: E.intl.string(E.t['7BKMcH'])
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: a()(b.activitiesContainer, { [b.activitiesContainerSmol]: o <= 300 }),
                    children: p.map((e) =>
                        (0, i.jsx)(
                            h.Y,
                            {
                                channel: t,
                                activityItem: e,
                                aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: b.activitySuggestion,
                                commandOrigin: g.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS
                            },
                            e.application.id
                        )
                    )
                }),
                (0, i.jsxs)(c.Clickable, {
                    className: b.checkboxContainer,
                    onClick: function () {
                        _.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: d
                        }),
                            (0, C.EW)(s.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(x.Z, {}),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: E.intl.string(E.t['5E9SBw'])
                        })
                    ]
                }),
                (0, i.jsx)(c.Clickable, {
                    className: b.closeButtonContainer,
                    onClick: function () {
                        _.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: d
                        }),
                            r();
                    },
                    children: (0, i.jsx)(c.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.closeButton
                    })
                })
            ]
        })
    });
}
