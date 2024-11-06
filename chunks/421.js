n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(895924),
    d = n(70097),
    u = n(592125),
    v = n(566620),
    m = n(122613),
    x = n(678173),
    h = n(636508),
    C = n(696068),
    g = n(361213),
    p = n(778569),
    T = n(182906),
    _ = n(412019),
    I = n(431136),
    f = n(226799),
    N = n(388032),
    j = n(706451);
function b(e) {
    var t;
    let { applicationId: n, guildId: a, channelId: c, onActivityLaunch: u } = e,
        { analyticsLocations: m } = (0, s.ZP)(o.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    l.useEffect(() => {
        (0, v.w1)({ guildId: a });
    }, [a]);
    let h = (0, p.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        C = (0, x.T)(null != a ? a : null, n);
    if (null == C) return null;
    let T = null != C.activity.activity_preview_video_asset_id ? (0, g.Z)(n, C.activity.activity_preview_video_asset_id) : null,
        _ = f.o[n],
        I = (null == _ ? void 0 : _.playersSuggestionMin) != null && (null == _ ? void 0 : _.playersSuggestionMax) != null ? ''.concat(_.playersSuggestionMin, ' - ').concat(_.playersSuggestionMax) : void 0;
    return (0, i.jsx)(s.Gt, {
        value: m,
        children: (0, i.jsx)('div', {
            className: j.scrollContainer,
            children: (0, i.jsxs)(r.Scroller, {
                className: j.scroller,
                children: [
                    (0, i.jsx)('div', {
                        className: j.launcherOuterContainer,
                        children: (0, i.jsx)(S, {
                            activityItem: C,
                            onLaunch: u,
                            channelId: c
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.activityDetailsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    null != T
                                        ? (0, i.jsx)('div', {
                                              className: j.heroVideoContainer,
                                              children: (0, i.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: j.heroVideo,
                                                  src: T,
                                                  poster: h.url
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)('div', {
                                        className: j.detailsTitle,
                                        children: (0, i.jsx)(r.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: C.application.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.detailsDetails,
                                        children: [
                                            null != I
                                                ? (0, i.jsxs)('div', {
                                                      className: j.detailItem,
                                                      children: [
                                                          (0, i.jsx)(r.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(r.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: j.detailItemText,
                                                              children: N.intl.format(N.t.T3isFB, { nPlayers: I })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == _ ? void 0 : _.timeSuggestionMinutes) != null
                                                ? (0, i.jsxs)('div', {
                                                      className: j.detailItem,
                                                      children: [
                                                          (0, i.jsx)(r.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(r.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: j.detailItemText,
                                                              children: N.intl.format(N.t.dehcUV, { nMinutes: _.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, i.jsxs)('div', {
                                                className: j.detailItem,
                                                children: [
                                                    (0, i.jsx)(r.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: j.detailItemText,
                                                        children: C.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(r.Heading, {
                                variant: 'heading-lg/medium',
                                className: j.detailsDescription,
                                children: C.application.description
                            }),
                            (0, i.jsx)('div', { className: j.divider }),
                            (0, i.jsx)('div', {
                                className: j.imagesContainer,
                                children: (null !== (t = null == _ ? void 0 : _.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, i.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: N.intl.formatToPlainString(N.t.YOslsL, { activityName: C.application.name }),
                                            className: j.activityImage
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
    var t, o;
    let { activityItem: d, onLaunch: v, channelId: x } = e,
        g = (0, p.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: f } = (0, s.ZP)(),
        [b, S] = l.useState(null !== (t = (0, h.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [E, y] = l.useState(
            null !==
                (o = (0, C.d)({
                    guildId: b,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== o
                ? o
                : void 0
        ),
        A = (0, a.e7)([u.Z], () => u.Z.getChannel(E), [E]),
        Z = (0, h.W)(),
        O = (0, C.F)(b),
        L = l.useCallback(async () => {
            var e;
            if (null != E)
                await (0, m.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: E,
                    analyticsLocations: f,
                    commandOrigin: c.bB.APPLICATION_LAUNCHER
                }).then(v);
        }, [d, f, v, E]),
        k = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('60133'), n.e('37493')]).then(n.bind(n, 827940));
                return (t) =>
                    (0, i.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: f
                    });
            });
        }, [d, f]),
        B = null == A || (null != A.guild_id && !(null != b && null != E && Z.some((e) => e.value === b) && O.some((e) => e.value.channel.id === E)) && !0);
    return (0, i.jsxs)('div', {
        className: j.launcherInnerContainer,
        children: [
            (0, i.jsx)(T.Z, {
                applicationName: d.application.name,
                imageBackground: g,
                imageClassName: j.launchImage,
                imageNotFoundClassName: j.brokenLaunchImage
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/medium',
                children: N.intl.string(N.t.lfSF4O)
            }),
            null == x
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(r.Select, {
                              placeholder: N.intl.string(N.t.etZ9tb),
                              optionClassName: j.__invalid_option,
                              options: Z,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === b);
                                  return null == t ? null : (0, i.jsx)(I.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, i.jsx)(I.m, { guildId: t });
                              },
                              isSelected: (e) => e === b,
                              select: (e) => {
                                  var t;
                                  S(e), y(null !== (t = (0, C.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, i.jsx)(r.Select, {
                              placeholder: N.intl.string(N.t.SUryfX),
                              optionClassName: j.__invalid_option,
                              options: O,
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
                                  let e = O.find((e) => e.value.channel.id === E);
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
                              disabled: B,
                              onClick: L,
                              children: N.intl.string(N.t.I0v0Qk)
                          }),
                          (0, i.jsx)('div', { className: j.divider }),
                          (0, i.jsx)(r.Button, {
                              fullWidth: !0,
                              color: r.Button.Colors.PRIMARY,
                              onClick: k,
                              children: N.intl.string(N.t.RDE0SU)
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: j.singleRowShareContainer,
                      children: [
                          (0, i.jsx)(r.Button, {
                              fullWidth: !0,
                              disabled: B,
                              onClick: L,
                              children: N.intl.string(N.t.I0v0Qk)
                          }),
                          (0, i.jsx)(r.Button, {
                              className: j.shareIconButton,
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
