n.d(t, {
    Co: function () {
        return X;
    },
    bZ: function () {
        return i;
    },
    gt: function () {
        return V;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(884338),
    h = n(471445),
    m = n(986332),
    p = n(662842),
    g = n(703656),
    f = n(922482),
    _ = n(565799),
    E = n(501655),
    I = n(192079),
    C = n(427679),
    v = n(448206),
    S = n(496675),
    N = n(938475),
    T = n(626135),
    A = n(823379),
    b = n(15274),
    x = n(924301),
    Z = n(504160),
    L = n(151864),
    y = n(835184),
    O = n(725436),
    R = n(497656),
    P = n(79874),
    j = n(554747),
    D = n(230900),
    M = n(854698),
    w = n(139712),
    k = n(765305),
    U = n(981631),
    G = n(388032),
    B = n(690302);
let V = a.memo(function (e) {
    let { heading: t, location: n, locationIcon: i, details: r, detailsIcon: a, topic: s, onClickCloseIcon: c, onClickTopicText: u, children: h } = e,
        m = (0, l.jsx)(d.Text, {
            color: 'header-primary',
            variant: 'text-md/semibold',
            className: B.eventName,
            children: s
        });
    return (0, l.jsxs)('div', {
        className: B.channelNotice,
        children: [
            (0, l.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    (0, l.jsx)('div', { className: B.liveIndicator }),
                    (0, l.jsx)(d.Text, {
                        color: 'text-positive',
                        variant: 'text-xs/bold',
                        className: B.liveNowText,
                        children: t
                    }),
                    null != c &&
                        (0, l.jsx)(d.Clickable, {
                            onClick: c,
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, l.jsx)(d.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                ]
            }),
            null == u
                ? m
                : (0, l.jsx)(d.Button, {
                      size: d.Button.Sizes.MIN,
                      look: d.Button.Looks.LINK,
                      color: d.Button.Colors.PRIMARY,
                      onClick: u,
                      children: m
                  }),
            (0, l.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    i,
                    (0, l.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.channelName,
                        children: n
                    }),
                    null != r &&
                        null != a &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.Text, {
                                    className: B.dotDivider,
                                    color: 'header-secondary',
                                    variant: 'text-xs/normal',
                                    children: '\u2022'
                                }),
                                a,
                                (0, l.jsx)(d.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-xs/normal',
                                    children: r
                                })
                            ]
                        })
                ]
            }),
            h
        ]
    });
});
function H(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, c.Wu)(
            [N.ZP],
            () =>
                N.ZP.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n]
        ),
        r = (0, h.KS)(n);
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, Z.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        topic: t.name,
        location: n.name,
        locationIcon:
            null != r
                ? (0, l.jsx)(r, {
                      size: 'xs',
                      color: 'currentColor',
                      className: B.stageIcon
                  })
                : null,
        children: (0, l.jsx)(X, {
            channel: n,
            speakers: i,
            voiceType: 1
        })
    });
}
function F(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, M.DK)(t),
        r = (0, c.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, c.e7)([y.Z], () => y.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        !r && null == a && (0, Z._6)(t.id),
        (0, l.jsxs)(d.Button, {
            fullWidth: !0,
            className: B.joinButton,
            innerClassName: B.rsvpButton,
            onClick: function () {
                (0, w.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, Z.L_)(t.id), 1000)),
                    T.default.track(U.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                        guild_id: t.guild_id,
                        notice_type: n
                    });
            },
            look: r ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
            color: r ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
            size: d.Button.Sizes.SMALL,
            children: [
                r
                    ? (0, l.jsx)(d.CheckmarkLargeIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: B.buttonIcon
                      })
                    : (0, l.jsx)(d.BellIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 16,
                          height: 16,
                          className: B.buttonIcon
                      }),
                G.intl.string(G.t.DlcqlZ)
            ]
        })
    );
}
function z(e) {
    var t;
    let { guildEvent: n, noticeType: i } = e,
        r = (0, D.cS)(n),
        s = null != r ? (0, O.m)(r, !0) : null,
        c = (0, D.nE)(n),
        u = (0, h.KS)(c),
        { startTime: m, endTime: p } = (0, P.ZP)(n),
        { startDateTimeString: g, upcomingEvent: f, diffMinutes: _ } = (0, M.ub)(m.toISOString(), null == p ? void 0 : p.toISOString()),
        E = f ? (_ > 0 ? G.intl.formatToPlainString(G.t.PQlCWl, { minutes: _ }) : G.intl.string(G.t.WINqKS)) : G.intl.formatToPlainString(G.t.DC6h3N, { date: g });
    return (
        a.useEffect(() => {
            T.default.track(U.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: i,
                guild_id: n.guild_id
            });
        }, [n, i]),
        (0, l.jsxs)('div', {
            className: B.channelNotice,
            children: [
                (0, l.jsxs)('div', {
                    className: B.textBlock,
                    children: [
                        (0, l.jsx)(d.Clickable, {
                            onClick: () => (0, b.bO)({ eventId: n.id }),
                            className: B.eventNameClickable,
                            children: (0, l.jsx)(d.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                className: B.eventName,
                                children: n.name
                            })
                        }),
                        (0, l.jsx)(d.Clickable, {
                            onClick: () => {
                                T.default.track(U.rMx.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: i,
                                    guild_id: n.guild_id
                                }),
                                    (0, Z.L_)(n.id);
                            },
                            className: B.closeIcon,
                            'aria-label': G.intl.string(G.t.cpT0Cg),
                            children: (0, l.jsx)(d.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: o()(B.textBlock, B.singleLine),
                    children: [
                        (0, l.jsx)(d.CalendarIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: B.stageIcon,
                            width: 16,
                            height: 16
                        }),
                        (0, l.jsx)(d.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: B.startTime,
                            children: E
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: o()(B.textBlock, B.singleLine),
                    children: [
                        null != u
                            ? (0, l.jsx)(u, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: B.stageIcon
                              })
                            : (0, l.jsx)(d.LocationIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16,
                                  height: 16,
                                  className: B.stageIcon
                              }),
                        (0, l.jsx)(d.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            className: B.channelName,
                            children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : s
                        })
                    ]
                }),
                (0, l.jsx)(F, {
                    guildEvent: n,
                    noticeType: i
                })
            ]
        })
    );
}
function Y(e) {
    let { guildEvent: t } = e,
        n = (0, D.cS)(t);
    return null == n
        ? null
        : (0, l.jsx)(V, {
              onClickCloseIcon: () => (0, Z.ji)({ eventId: null == t ? void 0 : t.id }),
              heading: G.intl.string(G.t['1+boPj']),
              topic: t.name,
              location: (0, O.m)(n, !0),
              locationIcon: (0, l.jsx)(d.LocationIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16,
                  className: B.stageIcon
              }),
              children: (0, l.jsx)(W, { guildEvent: t })
          });
}
function W(e) {
    let { guildEvent: t } = e,
        n = a.useCallback(() => {
            (0, b.bO)({ eventId: t.id });
        }, [t]);
    return (0, l.jsx)(d.Button, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: G.intl.string(G.t.z4FcDg)
    });
}
function K(e) {
    let { channel: t, label: n } = e;
    return (0, l.jsx)(d.Button, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, f.Cq)(t), (0, g.XU)(t.getGuildId(), t.id));
        },
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: n
    });
}
function q(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, c.Wu)([_.Z], () => [...new Set(_.Z.getMutableParticipants(n.id, E.pV.SPEAKER).map((e) => e.user))], [n.id]),
        r = (0, c.e7)([_.Z], () => _.Z.getParticipantCount(n.id, E.pV.AUDIENCE), [n.id]),
        a = G.intl.formatToPlainString(G.t['+v2pNz'], { count: ''.concat(r) });
    return (0, l.jsx)(V, {
        onClickCloseIcon: () => (0, Z.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: G.intl.string(G.t['X2K3//']),
        location: n.name,
        details: a,
        detailsIcon: (0, l.jsx)(d.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: B.stageIcon
        }),
        locationIcon: (0, l.jsx)(d.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: B.stageIcon
        }),
        topic: t.topic,
        children: (0, l.jsx)(X, {
            channel: n,
            speakers: i,
            voiceType: 2
        })
    });
}
function X(e) {
    let { channel: t, speakers: n, voiceType: i } = e,
        r = t.getGuildId(),
        s = a.useMemo(() => n.slice(0, 3), [n]),
        h = (0, c.e7)([S.Z], () => S.Z.can(U.Plq.CONNECT, t)),
        m = (0, v.Z)(t.id),
        p = G.intl.string(G.t.VJlc0d);
    switch (i) {
        case 1:
            p = G.intl.string(G.t.VJlc0d);
            break;
        case 2:
            (p = G.intl.string(G.t.ZYO5OD)), (null == m ? void 0 : m.speaker) ? (p = G.intl.string(G.t['/cnSFR'])) : null != m && (p = G.intl.string(G.t.btSGOj));
            break;
        case 3:
            p = G.intl.string(G.t.wBoE6O);
            break;
        default:
            (0, A.vE)(i);
    }
    return null == r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  s.length > 0
                      ? (0, l.jsxs)('div', {
                            className: o()(B.textBlock, B.singleLine),
                            children: [
                                (0, l.jsx)(u.Z, {
                                    guildId: r,
                                    users: s,
                                    showUserPopout: !0,
                                    size: u.u.SIZE_16
                                }),
                                (0, l.jsx)(d.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-xs/normal',
                                    className: B.userNames,
                                    children: (0, I.ER)(r, s, null == t ? void 0 : t.id, n.length)
                                })
                            ]
                        })
                      : null,
                  h &&
                      null == m &&
                      (0, l.jsx)(K, {
                          channel: t,
                          label: p
                      })
              ]
          });
}
((r = i || (i = {}))[(r.VOICE = 1)] = 'VOICE'),
    (r[(r.STAGE = 2)] = 'STAGE'),
    (r[(r.STUDY_ROOM = 3)] = 'STUDY_ROOM'),
    (t.ZP = a.memo(function (e) {
        let { guild: t } = e,
            { showRedesignedLiveChannelNotice: n } = (0, m.o)(!0),
            i = (0, R.y)(t.id),
            r = (0, j.k5)(t.id),
            a = (0, j.Vm)(t.id),
            s = (0, c.e7)([C.Z], () => C.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]),
            { isStageNoticeHidden: o, isEventNoticeHidden: d } = (0, c.cj)(
                [L.Z],
                () => ({
                    isStageNoticeHidden: L.Z.isLiveChannelNoticeHidden({ stageId: null == s ? void 0 : s.id }),
                    isEventNoticeHidden: L.Z.isLiveChannelNoticeHidden({ eventId: null == r ? void 0 : r.id })
                }),
                [s, r]
            ),
            u = null,
            h = null != s && null != i && !o;
        if (n) return (0, l.jsx)(p.Z, { guild: t });
        null == r || d
            ? h &&
              (u = (0, l.jsx)(q, {
                  stageInstance: s,
                  channel: i
              }))
            : r.entity_type === k.WX.STAGE_INSTANCE && h
              ? (u = (0, l.jsx)(q, {
                    stageInstance: s,
                    channel: i
                }))
              : r.entity_type === k.WX.EXTERNAL
                ? (u = (0, l.jsx)(Y, { guildEvent: r }))
                : r.entity_type === k.WX.VOICE &&
                  null != i &&
                  (u = (0, l.jsx)(H, {
                      guildEvent: r,
                      channel: i
                  }));
        let g = t.hasFeature(U.oNc.COMMUNITY) || t.hasFeature(U.oNc.HUB);
        if (null == u && null != a && !g) {
            let { upcomingEvent: e, noticeType: t } = a;
            u = (0, l.jsx)(z, {
                guildEvent: e,
                noticeType: t
            });
        }
        return u;
    }));
