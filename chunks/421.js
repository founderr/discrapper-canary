n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(399606),
    s = n(481060),
    r = n(100527),
    o = n(906732),
    c = n(895924),
    d = n(70097),
    u = n(592125),
    g = n(566620),
    m = n(122613),
    v = n(678173),
    p = n(636508),
    I = n(696068),
    f = n(361213),
    x = n(778569),
    _ = n(182906),
    h = n(412019),
    C = n(431136),
    T = n(226799),
    E = n(689938),
    S = n(806384);
function b(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: c, onActivityLaunch: u } = e,
        { analyticsLocations: m } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
        (0, g.w1)({ guildId: l });
    }, [l]);
    let p = (0, x.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        I = (0, v.T)(null != l ? l : null, n);
    if (null == I) return null;
    let _ = null != I.activity.activity_preview_video_asset_id ? (0, f.Z)(n, I.activity.activity_preview_video_asset_id) : null,
        h = T.o[n],
        C = (null == h ? void 0 : h.playersSuggestionMin) != null && (null == h ? void 0 : h.playersSuggestionMax) != null ? ''.concat(h.playersSuggestionMin, ' - ').concat(h.playersSuggestionMax) : void 0;
    return (0, a.jsx)(o.Gt, {
        value: m,
        children: (0, a.jsx)('div', {
            className: S.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
                className: S.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: S.launcherOuterContainer,
                        children: (0, a.jsx)(N, {
                            activityItem: I,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: S.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != _
                                        ? (0, a.jsx)('div', {
                                              className: S.heroVideoContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: S.heroVideo,
                                                  src: _,
                                                  poster: p.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: S.detailsTitle,
                                        children: (0, a.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: I.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: S.detailsDetails,
                                        children: [
                                            null != C
                                                ? (0, a.jsxs)('div', {
                                                      className: S.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: S.detailItemText,
                                                              children: E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: C })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == h ? void 0 : h.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: S.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: S.detailItemText,
                                                              children: E.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: h.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: S.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: S.detailItemText,
                                                        children: I.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: S.detailsDescription,
                                children: I.application.description
                            }),
                            (0, a.jsx)('div', { className: S.divider }),
                            (0, a.jsx)('div', {
                                className: S.imagesContainer,
                                children: (null !== (t = null == h ? void 0 : h.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: E.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: I.application.name }),
                                            className: S.activityImage
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function N(e) {
    var t, r;
    let { activityItem: d, onLaunch: g, channelId: v } = e,
        f = (0, x.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: T } = (0, o.ZP)(),
        [b, N] = i.useState(null !== (t = (0, p.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [j, A] = i.useState(
            null !==
                (r = (0, I.d)({
                    guildId: b,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== r
                ? r
                : void 0
        ),
        M = (0, l.e7)([u.Z], () => u.Z.getChannel(j), [j]),
        Z = (0, p.W)(),
        y = (0, I.F)(b),
        D = i.useCallback(async () => {
            var e;
            if (null != j)
                await (0, m.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: j,
                    analyticsLocations: T,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(g);
        }, [d, T, g, j]),
        L = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('61755')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, a.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: T
                    });
            });
        }, [d, T]),
        O = null == M || (null != M.guild_id && !(null != b && null != j && Z.some((e) => e.value === b) && y.some((e) => e.value.channel.id === j)) && !0);
    return (0, a.jsxs)('div', {
        className: S.launcherInnerContainer,
        children: [
            (0, a.jsx)(_.Z, {
                applicationName: d.application.name,
                imageBackground: f,
                imageClassName: S.launchImage,
                imageNotFoundClassName: S.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: E.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == v
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.Select, {
                              placeholder: E.Z.Messages.GUILD_SELECT,
                              optionClassName: S.__invalid_option,
                              options: Z,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === b);
                                  return null == t ? null : (0, a.jsx)(C.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(C.m, { guildId: t });
                              },
                              isSelected: (e) => e === b,
                              select: (e) => {
                                  var t;
                                  N(e), A(null !== (t = (0, I.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.Select, {
                              placeholder: E.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                              optionClassName: S.__invalid_option,
                              options: y,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === j;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return A(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = y.find((e) => e.value.channel.id === j);
                                  return null == e
                                      ? null
                                      : (0, a.jsx)(h.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, a.jsx)(h.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: D,
                              children: E.Z.Messages.START
                          }),
                          (0, a.jsx)('div', { className: S.divider }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: E.Z.Messages.SHARE
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: S.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: D,
                              children: E.Z.Messages.START
                          }),
                          (0, a.jsx)(s.Button, {
                              className: S.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
