n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(399606),
    r = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(895924),
    d = n(70097),
    u = n(592125),
    v = n(566620),
    m = n(122613),
    h = n(678173),
    x = n(636508),
    g = n(696068),
    C = n(361213),
    p = n(778569),
    f = n(182906),
    _ = n(412019),
    I = n(431136),
    T = n(226799),
    N = n(388032),
    b = n(706451);
function j(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: c, onActivityLaunch: u } = e,
        { analyticsLocations: m } = (0, o.ZP)(s.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    a.useEffect(() => {
        (0, v.w1)({ guildId: l });
    }, [l]);
    let x = (0, p.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        g = (0, h.T)(null != l ? l : null, n);
    if (null == g) return null;
    let f = null != g.activity.activity_preview_video_asset_id ? (0, C.Z)(n, g.activity.activity_preview_video_asset_id) : null,
        _ = T.o[n],
        I = (null == _ ? void 0 : _.playersSuggestionMin) != null && (null == _ ? void 0 : _.playersSuggestionMax) != null ? ''.concat(_.playersSuggestionMin, ' - ').concat(_.playersSuggestionMax) : void 0;
    return (0, i.jsx)(o.Gt, {
        value: m,
        children: (0, i.jsx)('div', {
            className: b.scrollContainer,
            children: (0, i.jsxs)(r.Scroller, {
                className: b.scroller,
                children: [
                    (0, i.jsx)('div', {
                        className: b.launcherOuterContainer,
                        children: (0, i.jsx)(S, {
                            activityItem: g,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: b.activityDetailsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    null != f
                                        ? (0, i.jsx)('div', {
                                              className: b.heroVideoContainer,
                                              children: (0, i.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: b.heroVideo,
                                                  src: f,
                                                  poster: x.url
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)('div', {
                                        className: b.detailsTitle,
                                        children: (0, i.jsx)(r.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: g.application.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: b.detailsDetails,
                                        children: [
                                            null != I
                                                ? (0, i.jsxs)('div', {
                                                      className: b.detailItem,
                                                      children: [
                                                          (0, i.jsx)(r.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(r.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: b.detailItemText,
                                                              children: N.intl.format(N.t.T3isFB, { nPlayers: I })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == _ ? void 0 : _.timeSuggestionMinutes) != null
                                                ? (0, i.jsxs)('div', {
                                                      className: b.detailItem,
                                                      children: [
                                                          (0, i.jsx)(r.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(r.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: b.detailItemText,
                                                              children: N.intl.format(N.t.dehcUV, { nMinutes: _.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, i.jsxs)('div', {
                                                className: b.detailItem,
                                                children: [
                                                    (0, i.jsx)(r.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: b.detailItemText,
                                                        children: g.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-lg/medium',
                                className: b.detailsDescription,
                                children: g.application.description
                            }),
                            (0, i.jsx)('div', { className: b.divider }),
                            (0, i.jsx)('div', {
                                className: b.imagesContainer,
                                children: (null !== (t = null == _ ? void 0 : _.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, i.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: N.intl.formatToPlainString(N.t.YOslsL, { activityName: g.application.name }),
                                            className: b.activityImage
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
function S(e) {
    var t, s;
    let { activityItem: d, onLaunch: v, channelId: h } = e,
        C = (0, p.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: T } = (0, o.ZP)(),
        [j, S] = a.useState(null !== (t = (0, x.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [E, y] = a.useState(
            null !==
                (s = (0, g.d)({
                    guildId: j,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== s
                ? s
                : void 0
        ),
        A = (0, l.e7)([u.Z], () => u.Z.getChannel(E), [E]),
        Z = (0, x.W)(),
        L = (0, g.F)(j),
        O = a.useCallback(async () => {
            var e;
            if (null != E)
                await (0, m.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: E,
                    analyticsLocations: T,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(v);
        }, [d, T, v, E]),
        k = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('43035')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, i.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: T
                    });
            });
        }, [d, T]),
        M = null == A || (null != A.guild_id && !(null != j && null != E && Z.some((e) => e.value === j) && L.some((e) => e.value.channel.id === E)) && !0);
    return (0, i.jsxs)('div', {
        className: b.launcherInnerContainer,
        children: [
            (0, i.jsx)(f.Z, {
                applicationName: d.application.name,
                imageBackground: C,
                imageClassName: b.launchImage,
                imageNotFoundClassName: b.brokenLaunchImage
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/medium',
                children: N.intl.string(N.t.lfSF4O)
            }),
            null == h
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.Select, {
                              placeholder: N.intl.string(N.t.etZ9tb),
                              optionClassName: b.__invalid_option,
                              options: Z,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === j);
                                  return null == t ? null : (0, i.jsx)(I.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, i.jsx)(I.m, { guildId: t });
                              },
                              isSelected: (e) => e === j,
                              select: (e) => {
                                  var t;
                                  S(e), y(null !== (t = (0, g.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, i.jsx)(r.Select, {
                              placeholder: N.intl.string(N.t.SUryfX),
                              optionClassName: b.__invalid_option,
                              options: L,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === E;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return y(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = L.find((e) => e.value.channel.id === E);
                                  return null == e
                                      ? null
                                      : (0, i.jsx)(_.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, i.jsx)(_.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, i.jsx)(r.Button, {
                              fullWidth: !0,
                              disabled: M,
                              onClick: O,
                              children: N.intl.string(N.t.I0v0Qk)
                          }),
                          (0, i.jsx)('div', { className: b.divider }),
                          (0, i.jsx)(r.Button, {
                              fullWidth: !0,
                              color: r.Button.Colors.PRIMARY,
                              onClick: k,
                              children: N.intl.string(N.t.RDE0SU)
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: b.singleRowShareContainer,
                      children: [
                          (0, i.jsx)(r.Button, {
                              fullWidth: !0,
                              disabled: M,
                              onClick: O,
                              children: N.intl.string(N.t.I0v0Qk)
                          }),
                          (0, i.jsx)(r.Button, {
                              className: b.shareIconButton,
                              color: r.Button.Colors.PRIMARY,
                              onClick: k,
                              children: (0, i.jsx)(r.ArrowAngleLeftUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
