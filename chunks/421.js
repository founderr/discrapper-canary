n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(399606),
    s = n(481060),
    o = n(100527),
    r = n(906732),
    c = n(895924),
    d = n(70097),
    u = n(592125),
    v = n(566620),
    I = n(122613),
    _ = n(678173),
    T = n(636508),
    m = n(696068),
    C = n(361213),
    E = n(778569),
    x = n(182906),
    h = n(412019),
    g = n(431136),
    p = n(226799),
    f = n(689938),
    N = n(706451);
function S(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: c, onActivityLaunch: u } = e,
        { analyticsLocations: I } = (0, r.ZP)(o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    a.useEffect(() => {
        (0, v.w1)({ guildId: l });
    }, [l]);
    let T = (0, E.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        m = (0, _.T)(null != l ? l : null, n);
    if (null == m) return null;
    let x = null != m.activity.activity_preview_video_asset_id ? (0, C.Z)(n, m.activity.activity_preview_video_asset_id) : null,
        h = p.o[n],
        g = (null == h ? void 0 : h.playersSuggestionMin) != null && (null == h ? void 0 : h.playersSuggestionMax) != null ? ''.concat(h.playersSuggestionMin, ' - ').concat(h.playersSuggestionMax) : void 0;
    return (0, i.jsx)(r.Gt, {
        value: I,
        children: (0, i.jsx)('div', {
            className: N.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
                className: N.scroller,
                children: [
                    (0, i.jsx)('div', {
                        className: N.launcherOuterContainer,
                        children: (0, i.jsx)(A, {
                            activityItem: m,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: N.activityDetailsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    null != x
                                        ? (0, i.jsx)('div', {
                                              className: N.heroVideoContainer,
                                              children: (0, i.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: N.heroVideo,
                                                  src: x,
                                                  poster: T.url
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)('div', {
                                        className: N.detailsTitle,
                                        children: (0, i.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: m.application.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.detailsDetails,
                                        children: [
                                            null != g
                                                ? (0, i.jsxs)('div', {
                                                      className: N.detailItem,
                                                      children: [
                                                          (0, i.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: N.detailItemText,
                                                              children: f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: g })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == h ? void 0 : h.timeSuggestionMinutes) != null
                                                ? (0, i.jsxs)('div', {
                                                      className: N.detailItem,
                                                      children: [
                                                          (0, i.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: N.detailItemText,
                                                              children: f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: h.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, i.jsxs)('div', {
                                                className: N.detailItem,
                                                children: [
                                                    (0, i.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: N.detailItemText,
                                                        children: m.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: N.detailsDescription,
                                children: m.application.description
                            }),
                            (0, i.jsx)('div', { className: N.divider }),
                            (0, i.jsx)('div', {
                                className: N.imagesContainer,
                                children: (null !== (t = null == h ? void 0 : h.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, i.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: f.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({ activityName: m.application.name }),
                                            className: N.activityImage
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
function A(e) {
    var t, o;
    let { activityItem: d, onLaunch: v, channelId: _ } = e,
        C = (0, E.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: p } = (0, r.ZP)(),
        [S, A] = a.useState(null !== (t = (0, T.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [j, D] = a.useState(
            null !==
                (o = (0, m.d)({
                    guildId: S,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== o
                ? o
                : void 0
        ),
        b = (0, l.e7)([u.Z], () => u.Z.getChannel(j), [j]),
        Z = (0, T.W)(),
        M = (0, m.F)(S),
        y = a.useCallback(async () => {
            var e;
            if (null != j)
                await (0, I.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: j,
                    analyticsLocations: p,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(v);
        }, [d, p, v, j]),
        L = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('43035')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, i.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: p
                    });
            });
        }, [d, p]),
        O = null == b || (null != b.guild_id && !(null != S && null != j && Z.some((e) => e.value === S) && M.some((e) => e.value.channel.id === j)) && !0);
    return (0, i.jsxs)('div', {
        className: N.launcherInnerContainer,
        children: [
            (0, i.jsx)(x.Z, {
                applicationName: d.application.name,
                imageBackground: C,
                imageClassName: N.launchImage,
                imageNotFoundClassName: N.brokenLaunchImage
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: f.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(s.Select, {
                              placeholder: f.Z.Messages.GUILD_SELECT,
                              optionClassName: N.__invalid_option,
                              options: Z,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === S);
                                  return null == t ? null : (0, i.jsx)(g.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, i.jsx)(g.m, { guildId: t });
                              },
                              isSelected: (e) => e === S,
                              select: (e) => {
                                  var t;
                                  A(e), D(null !== (t = (0, m.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, i.jsx)(s.Select, {
                              placeholder: f.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                              optionClassName: N.__invalid_option,
                              options: M,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === j;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return D(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = M.find((e) => e.value.channel.id === j);
                                  return null == e
                                      ? null
                                      : (0, i.jsx)(h.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, i.jsx)(h.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: y,
                              children: f.Z.Messages.START
                          }),
                          (0, i.jsx)('div', { className: N.divider }),
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: f.Z.Messages.SHARE
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: N.singleRowShareContainer,
                      children: [
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: y,
                              children: f.Z.Messages.START
                          }),
                          (0, i.jsx)(s.Button, {
                              className: N.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: (0, i.jsx)(s.ArrowAngleLeftUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
