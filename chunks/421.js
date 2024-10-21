n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    r = n(100527),
    o = n(906732),
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
        { analyticsLocations: I } = (0, o.ZP)(r.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
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
    return (0, a.jsx)(o.Gt, {
        value: I,
        children: (0, a.jsx)('div', {
            className: N.scrollContainer,
            children: (0, a.jsxs)(s.Scroller, {
                className: N.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: N.launcherOuterContainer,
                        children: (0, a.jsx)(A, {
                            activityItem: m,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: N.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != x
                                        ? (0, a.jsx)('div', {
                                              className: N.heroVideoContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: N.heroVideo,
                                                  src: x,
                                                  poster: T.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: N.detailsTitle,
                                        children: (0, a.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: m.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: N.detailsDetails,
                                        children: [
                                            null != g
                                                ? (0, a.jsxs)('div', {
                                                      className: N.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: N.detailItemText,
                                                              children: f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({ nPlayers: g })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == h ? void 0 : h.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: N.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: N.detailItemText,
                                                              children: f.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({ nMinutes: h.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: N.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
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
                            (0, a.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: N.detailsDescription,
                                children: m.application.description
                            }),
                            (0, a.jsx)('div', { className: N.divider }),
                            (0, a.jsx)('div', {
                                className: N.imagesContainer,
                                children: (null !== (t = null == h ? void 0 : h.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
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
    var t, r;
    let { activityItem: d, onLaunch: v, channelId: _ } = e,
        C = (0, E.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: p } = (0, o.ZP)(),
        [S, A] = i.useState(null !== (t = (0, T.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [b, j] = i.useState(
            null !==
                (r = (0, m.d)({
                    guildId: S,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== r
                ? r
                : void 0
        ),
        D = (0, l.e7)([u.Z], () => u.Z.getChannel(b), [b]),
        Z = (0, T.W)(),
        M = (0, m.F)(S),
        L = i.useCallback(async () => {
            var e;
            if (null != b)
                await (0, I.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: b,
                    analyticsLocations: p,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(v);
        }, [d, p, v, b]),
        y = i.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('43035')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, a.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: p
                    });
            });
        }, [d, p]),
        O = null == D || (null != D.guild_id && !(null != S && null != b && Z.some((e) => e.value === S) && M.some((e) => e.value.channel.id === b)) && !0);
    return (0, a.jsxs)('div', {
        className: N.launcherInnerContainer,
        children: [
            (0, a.jsx)(x.Z, {
                applicationName: d.application.name,
                imageBackground: C,
                imageClassName: N.launchImage,
                imageNotFoundClassName: N.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: f.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
            }),
            null == _
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.Select, {
                              placeholder: f.Z.Messages.GUILD_SELECT,
                              optionClassName: N.__invalid_option,
                              options: Z,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === S);
                                  return null == t ? null : (0, a.jsx)(g.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(g.m, { guildId: t });
                              },
                              isSelected: (e) => e === S,
                              select: (e) => {
                                  var t;
                                  A(e), j(null !== (t = (0, m.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.Select, {
                              placeholder: f.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                              optionClassName: N.__invalid_option,
                              options: M,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === b;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return j(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = M.find((e) => e.value.channel.id === b);
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
                              onClick: L,
                              children: f.Z.Messages.START
                          }),
                          (0, a.jsx)('div', { className: N.divider }),
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: y,
                              children: f.Z.Messages.SHARE
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: N.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: O,
                              onClick: L,
                              children: f.Z.Messages.START
                          }),
                          (0, a.jsx)(s.Button, {
                              className: N.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: y,
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
