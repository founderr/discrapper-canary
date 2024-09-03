n.d(t, {
    h: function () {
        return S;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(704215),
    o = n(692547),
    c = n(481060),
    u = n(2052),
    d = n(127255),
    h = n(5200),
    p = n(403404),
    m = n(100527),
    _ = n(906732),
    f = n(605236),
    E = n(448239),
    C = n(626135),
    g = n(607187),
    I = n(981631),
    x = n(689938),
    T = n(187128),
    N = n(334732);
function S(e) {
    let { channel: t, guild: n, width: a, inPopout: s, handleClose: l, userParticipantCount: r } = e;
    return a < 250
        ? (0, i.jsx)(v, {
              channel: t,
              guild: n,
              width: a,
              inPopout: s,
              handleClose: l,
              userParticipantCount: r
          })
        : r > 1
          ? (0, i.jsx)(A, {
                channel: t,
                guild: n,
                width: a,
                inPopout: s,
                handleClose: l,
                userParticipantCount: r
            })
          : (0, i.jsx)(Z, {
                channel: t,
                guild: n,
                width: a,
                inPopout: s
            });
}
function v(e) {
    let { channel: t, inPopout: n, handleClose: a } = e,
        { analyticsLocations: s } = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_SHELF_BUTTON),
        r = (0, u.O)(),
        d = () => {
            (0, p.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: r.location,
                openInPopout: n,
                analyticsLocations: s,
                opensAppLauncherModal: !0
            });
        };
    return (0, i.jsx)(_.Gt, {
        value: s,
        children: (0, i.jsxs)(g.Z, {
            className: T.root,
            children: [
                (0, i.jsx)(c.Tooltip, {
                    text: x.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, i.jsx)(c.Clickable, {
                            ...n,
                            className: T.clickableTile,
                            onClick: () => {
                                null == t || t(), d();
                            },
                            children: (0, i.jsx)('div', {
                                className: T.iconContainer,
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
                            onClick: a,
                            className: l()(e, T.shelfButtonCloseButton),
                            children: (0, i.jsx)(c.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.closeButtonIcon,
                                secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
                            })
                        })
                })
            ]
        })
    });
}
function Z(e) {
    let { channel: t, guild: s, inPopout: l, width: r } = e;
    a.useEffect(() => {
        C.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity invite',
            n_participants: 1
        });
    }, []);
    let o = (0, u.O)(),
        { analyticsLocations: d } = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_INVITE);
    return (0, i.jsx)(_.Gt, {
        value: d,
        children: (0, i.jsxs)(g.Z, {
            className: T.root,
            children: [
                r > 400
                    ? (0, i.jsx)('img', {
                          src: N,
                          className: T.art,
                          alt: x.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
                      })
                    : null,
                (0, i.jsx)(c.Text, {
                    className: T.heading,
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: x.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
                }),
                (0, i.jsxs)('div', {
                    className: T.buttonContainer,
                    children: [
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            color: c.Button.Colors.PRIMARY,
                            className: T.button,
                            innerClassName: T.buttonContents,
                            onClick: function () {
                                (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e('7654'), n.e('66633')]).then(n.bind(n, 560114));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: s,
                                                channel: t,
                                                source: I.t4x.ACTIVITY_ENTRY_POINT_TILE
                                            });
                                    },
                                    { contextKey: l ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT }
                                );
                            },
                            children: [
                                (0, i.jsx)(c.FriendsIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                x.Z.Messages.INVITE_FRIENDS
                            ]
                        }),
                        (0, i.jsxs)(c.Button, {
                            size: c.Button.Sizes.LARGE,
                            className: T.button,
                            innerClassName: T.buttonContents,
                            onClick: function () {
                                (0, p.Z)({
                                    channel: t,
                                    guildId: t.guild_id,
                                    locationObject: o.location,
                                    openInPopout: l,
                                    analyticsLocations: d,
                                    opensAppLauncherModal: !0
                                });
                            },
                            children: [
                                (0, i.jsx)(c.ActivitiesIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                x.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function A(e) {
    let { channel: t, guild: n, handleClose: s, width: o, userParticipantCount: u } = e;
    a.useEffect(() => {
        C.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
            tile_type: 'activity suggestion',
            n_participants: u
        });
    }, []);
    let p = (0, d.Z)({ guildId: n.id }).slice(0, 3),
        { analyticsLocations: S } = (0, _.ZP)(m.Z.VC_TILE_ACTIVITY_SUGGESTION);
    return (0, i.jsx)(_.Gt, {
        value: S,
        children: (0, i.jsxs)(g.Z, {
            className: T.root,
            children: [
                o > 480
                    ? (0, i.jsx)('img', {
                          className: T.art,
                          src: N,
                          alt: x.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
                      })
                    : null,
                o > 300
                    ? (0, i.jsx)(c.Text, {
                          className: T.heading,
                          variant: o > 550 ? 'text-md/semibold' : 'text-sm/semibold',
                          children: x.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: l()(T.activitiesContainer, { [T.activitiesContainerSmol]: o <= 300 }),
                    children: p.map((e) =>
                        (0, i.jsx)(
                            h.Y,
                            {
                                channel: t,
                                activityItem: e,
                                aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
                                animatedDivClass: T.activitySuggestion
                            },
                            e.application.id
                        )
                    )
                }),
                (0, i.jsxs)(c.Clickable, {
                    className: T.checkboxContainer,
                    onClick: function () {
                        C.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'permanent',
                            n_participants: u
                        }),
                            (0, f.EW)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT);
                    },
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            children: x.Z.Messages.DONT_SHOW_AGAIN
                        })
                    ]
                }),
                (0, i.jsx)(c.Clickable, {
                    className: T.closeButtonContainer,
                    onClick: function () {
                        C.default.track(I.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
                            tile_type: 'activity suggestion',
                            close_type: 'temporary',
                            n_participants: u
                        }),
                            s();
                    },
                    children: (0, i.jsx)(c.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.closeButton
                    })
                })
            ]
        })
    });
}
