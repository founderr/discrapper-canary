n.d(t, {
    h: function () {
        return Z;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(704215),
    o = n(692547),
    c = n(481060),
    u = n(2052),
    d = n(127255),
    h = n(5200),
    m = n(403404),
    p = n(100527),
    f = n(906732),
    g = n(895924),
    C = n(605236),
    x = n(448239),
    v = n(626135),
    _ = n(607187),
    I = n(981631),
    E = n(388032),
    b = n(896659),
    S = n(334732);
function Z(e) {
    let { channel: t, guild: n, width: l, inPopout: r, handleClose: s, userParticipantCount: a } = e;
    return l < 250
        ? (0, i.jsx)(T, {
              channel: t,
              guild: n,
              width: l,
              inPopout: r,
              handleClose: s,
              userParticipantCount: a
          })
        : a > 1
          ? (0, i.jsx)(j, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r,
                handleClose: s,
                userParticipantCount: a
            })
          : (0, i.jsx)(N, {
                channel: t,
                guild: n,
                width: l,
                inPopout: r
            });
}
function T(e) {
    let { channel: t, inPopout: n, handleClose: l } = e,
        { analyticsLocations: r } = (0, f.ZP)(p.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        a = (0, u.O)(),
        d = () => {
            (0, m.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: a.location,
                openInPopout: n,
                analyticsLocations: r,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(f.Gt, {
        value: r,
        children: (0, i.jsxs)(_.Z, {
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
                                null == t || t(), d();
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
                            className: s()(e, b.shelfButtonCloseButton),
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
function N(e) {
    let { channel: t, guild: r, inPopout: s, width: a } = e;
    l.useEffect(() => {
        v.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let o = (0, u.O)(),
        { analyticsLocations: d } = (0, f.ZP)(p.Z.VC_TILE_ACTIVITY_INVITE);
    return (0, i.jsx)(f.Gt, {
        value: d,
        children: (0, i.jsxs)(_.Z, {
            className: b.root,
            children: [
                a > 400
                    ? (0, i.jsx)('img', {
                          src: S,
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
                                        let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: r,
                                                channel: t,
                                                source: I.t4x.ACTIVITY_ENTRY_POINT_TILE
                                            });
                                    },
                                    { contextKey: s ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT }
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
                                (0, m.Z)({
                                    channel: t,
                                    guildId: t.guild_id,
                                    locationObject: o.location,
                                    openInPopout: s,
                                    analyticsLocations: d,
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
    let { channel: t, guild: n, handleClose: r, width: o, userParticipantCount: u } = e;
    l.useEffect(() => {
        v.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: u
        });
    }, []);
    let m = (0, d.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: Z } = (0, f.ZP)(p.Z.VC_TILE_ACTIVITY_SUGGESTION);
    return (0, i.jsx)(f.Gt, {
        value: Z,
        children: (0, i.jsxs)(_.Z, {
            className: b.root,
            children: [
                o > 480
                    ? (0, i.jsx)('img', {
                          className: b.art,
                          src: S,
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
                    className: s()(b.activitiesContainer, { [b.activitiesContainerSmol]: o <= 300 }),
                    children: m.map((e) =>
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
                        v.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: u
                        }),
                            (0, C.EW)(a.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
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
                        v.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: u
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
