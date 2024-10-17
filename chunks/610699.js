n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(653041),
    n(47120),
    n(390547);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    _ = n(447543),
    E = n(317381),
    I = n(778569),
    m = n(182906),
    T = n(884338),
    f = n(100527),
    h = n(906732),
    N = n(835473),
    p = n(471445),
    C = n(111028),
    g = n(955415),
    S = n(601964),
    A = n(592125),
    x = n(430824),
    R = n(496675),
    O = n(594174),
    v = n(624138),
    M = n(358595),
    L = n(981631),
    Z = n(245335),
    b = n(689938),
    P = n(610935);
let D = (0, v.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    j = (0, v.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    U = (0, v.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function y(e) {
    let { members: t, membersOnline: n, isLarge: a, isStacked: s } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: P.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: P.statusOnline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: P.count,
                                children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            l.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: P.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: P.statusOffline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: P.count,
                                children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: r()(P.statusCounts, {
                [P.large]: a,
                [P.stacked]: s
            }),
            children: l
        })
    );
}
function B(e) {
    let { channel: t, guild: n, isStacked: a, hasEnded: s } = e;
    if (null != t && null != n) {
        let e = (0, p.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: r()(P.channel, {
                [P.stacked]: a,
                [P.ended]: s
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: P.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(C.Z, {
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        children: b.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
                            channelName: t.name,
                            serverName: n.name
                        })
                    })
                })
            ]
        });
    }
    return null != n
        ? (0, i.jsx)('div', {
              className: r()(P.channel, {
                  [P.stacked]: a,
                  [P.ended]: s
              }),
              children: (0, i.jsx)(C.Z, {
                  children: (0, i.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      children: b.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: n.name })
                  })
              })
          })
        : null;
}
function k(e) {
    var t, n;
    let s,
        l,
        { invite: u, getAcceptInviteContext: p } = e,
        { approximate_member_count: C, approximate_presence_count: v, target_type: k, target_application: G } = u;
    o()(k === Z.Iq.EMBEDDED_APPLICATION && null != G, 'invalid application invite');
    let F = a.useRef(null),
        [w, V] = a.useState(!1),
        [H, Y] = a.useState(!1);
    a.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (V(t < U + j), Y(t <= 2 * D));
                })()
            ),
            t = F.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [F, V, Y]);
    let W = (0, c.e7)([x.Z], () => (null != u.guild ? x.Z.getGuild(u.guild.id) : null), [u]),
        z = (0, N.Z)([G.id])[0],
        K = (0, c.e7)([E.ZP], () => {
            var e;
            return (null == u ? void 0 : u.channel) != null && (null === (e = E.ZP.getSelfEmbeddedActivityForChannel(u.channel.id)) || void 0 === e ? void 0 : e.applicationId) === G.id;
        }),
        X = (0, c.e7)([E.ZP], () => {
            var e;
            return ((null === (e = u.channel) || void 0 === e ? void 0 : e.id) != null ? E.ZP.getEmbeddedActivitiesForChannel(u.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return G.id === t;
            });
        }),
        Q = A.Z.getChannel(null === (t = u.channel) || void 0 === t ? void 0 : t.id),
        J = (0, c.e7)([R.Z], () => null != Q && R.Z.can(L.Plq.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
        { analyticsLocations: q } = (0, h.ZP)(f.Z.INVITE_EMBED),
        $ = (0, I.Z)({
            applicationId: G.id,
            size: D,
            names: ['embedded_cover']
        }),
        ee = (0, c.Wu)(
            [E.ZP],
            () =>
                null != Q
                    ? E.ZP.getEmbeddedActivitiesForChannel(Q.id)
                          .filter((e) => e.applicationId === G.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [Q, G.id]
        ),
        et = (0, c.Wu)([O.default], () => ee.map((e) => O.default.getUser(e)), [ee]),
        en = u.state === L.r2o.ACCEPTING,
        ei = null != W;
    if (null == W) {
        if (null == u.guild) return (0, i.jsx)(M.Z, {});
        W = new S.ZP(u.guild);
    }
    let ea = (ei && !J) || (ei && K),
        es = () => {
            _.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: u.code,
                context: p('Invite Button Embed'),
                analyticsLocations: q
            });
        };
    return (ei && K && (s = b.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !J && (s = b.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), (l = K ? b.Z.Messages.INVITE_EMBED_JOINED : X || !ei ? b.Z.Messages.JOIN : b.Z.Messages.START), null == u.code || '' === u.code)
        ? null
        : (0, i.jsxs)('div', {
              className: P.container,
              ref: F,
              children: [
                  (0, i.jsx)('div', {
                      className: r()(P.imgContainer, {
                          [P.large]: w,
                          [P.stacked]: H
                      }),
                      children: (0, i.jsx)(m.Z, {
                          imageBackground: $,
                          applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : '',
                          imageClassName: r()(P.img, {
                              [P.large]: w,
                              [P.stacked]: H
                          }),
                          imageNotFoundClassName: r()(P.brokenImg, {
                              [P.large]: w,
                              [P.stacked]: H
                          })
                      })
                  }),
                  (0, i.jsxs)(g.Z, {
                      className: r()(P.content, {
                          [P.large]: w,
                          [P.stacked]: H
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: P.info,
                              children: [
                                  (0, i.jsx)(d.FormTitle, { children: ei ? b.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : b.Z.Messages.INVITE_BUTTON_TITLE_INVITED }),
                                  (0, i.jsx)(d.Heading, {
                                      className: P.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == z ? void 0 : z.name
                                  }),
                                  (0, i.jsx)(B, {
                                      channel: Q,
                                      guild: W,
                                      isStacked: H,
                                      hasEnded: !X
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: r()(P.currentState, {
                                  [P.large]: w,
                                  [P.split]: !X && H
                              }),
                              children: [
                                  !X && ei
                                      ? (0, i.jsxs)('div', {
                                            className: r()(P.endedNote, { [P.large]: w }),
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: b.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: b.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
                                                })
                                            ]
                                        })
                                      : null,
                                  ei
                                      ? null
                                      : (0, i.jsx)(y, {
                                            members: C,
                                            membersOnline: v,
                                            isLarge: w,
                                            isStacked: H
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: P.cta,
                                      children: [
                                          null != W && X
                                              ? (0, i.jsx)('div', {
                                                    className: P.avatars,
                                                    children: (0, i.jsx)(T.Z, {
                                                        guildId: W.id,
                                                        users: et,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(d.Tooltip, {
                                              text: s,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(d.Button, {
                                                      className: P.actionButton,
                                                      onClick: () => {
                                                          es(), null == t || t();
                                                      },
                                                      wrapperClassName: P.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: en,
                                                      disabled: ea,
                                                      color: d.ButtonColors.GREEN,
                                                      children: l
                                                  });
                                              }
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
