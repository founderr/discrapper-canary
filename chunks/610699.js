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
    l = n.n(s),
    r = n(512722),
    o = n.n(r),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    _ = n(447543),
    E = n(317381),
    I = n(778569),
    m = n(182906),
    T = n(884338),
    N = n(100527),
    h = n(906732),
    C = n(835473),
    p = n(471445),
    f = n(111028),
    g = n(955415),
    A = n(601964),
    S = n(592125),
    M = n(430824),
    O = n(496675),
    x = n(594174),
    R = n(624138),
    v = n(358595),
    L = n(981631),
    Z = n(245335),
    P = n(689938),
    D = n(610935);
let b = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    j = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    U = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function y(e) {
    let { members: t, membersOnline: n, isLarge: a, isStacked: s } = e,
        r = [];
    return (
        null != n &&
            n > 0 &&
            r.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: D.statusOnline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: D.count,
                                children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            r.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: D.statusOffline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: D.count,
                                children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: l()(D.statusCounts, {
                [D.large]: a,
                [D.stacked]: s
            }),
            children: r
        })
    );
}
function B(e) {
    let { channel: t, guild: n, isStacked: a, hasEnded: s } = e;
    if (null != t && null != n) {
        let e = (0, p.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: l()(D.channel, {
                [D.stacked]: a,
                [D.ended]: s
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: D.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(f.Z, {
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: P.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
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
              className: l()(D.channel, {
                  [D.stacked]: a,
                  [D.ended]: s
              }),
              children: (0, i.jsx)(f.Z, {
                  children: (0, i.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      children: P.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: n.name })
                  })
              })
          })
        : null;
}
function k(e) {
    var t, n;
    let s,
        r,
        { invite: d, getAcceptInviteContext: p } = e,
        { approximate_member_count: f, approximate_presence_count: R, target_type: k, target_application: G } = d;
    o()(k === Z.Iq.EMBEDDED_APPLICATION && null != G, 'invalid application invite');
    let F = a.useRef(null),
        [w, V] = a.useState(!1),
        [H, Y] = a.useState(!1);
    a.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (V(t < U + j), Y(t <= 2 * b));
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
    let W = (0, c.e7)([M.Z], () => (null != d.guild ? M.Z.getGuild(d.guild.id) : null), [d]),
        K = (0, C.Z)([G.id])[0],
        z = (0, c.e7)([E.ZP], () => {
            var e;
            return (null == d ? void 0 : d.channel) != null && (null === (e = E.ZP.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === G.id;
        }),
        X = (0, c.e7)([E.ZP], () => {
            var e;
            return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? E.ZP.getEmbeddedActivitiesForChannel(d.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return G.id === t;
            });
        }),
        Q = S.Z.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
        J = (0, c.e7)([O.Z], () => null != Q && O.Z.can(L.Plq.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
        { analyticsLocations: q } = (0, h.ZP)(N.Z.INVITE_EMBED),
        $ = (0, I.Z)({
            applicationId: G.id,
            size: b,
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
        et = (0, c.Wu)([x.default], () => ee.map((e) => x.default.getUser(e)), [ee]),
        en = d.state === L.r2o.ACCEPTING,
        ei = null != W;
    if (null == W) {
        if (null == d.guild) return (0, i.jsx)(v.Z, {});
        W = new A.ZP(d.guild);
    }
    let ea = (ei && !J) || (ei && z),
        es = () => {
            _.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: d.code,
                context: p('Invite Button Embed'),
                analyticsLocations: q
            });
        };
    return (ei && z && (s = P.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !J && (s = P.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), (r = z ? P.Z.Messages.INVITE_EMBED_JOINED : X || !ei ? P.Z.Messages.JOIN : P.Z.Messages.START), null == d.code || '' === d.code)
        ? null
        : (0, i.jsxs)('div', {
              className: D.container,
              ref: F,
              children: [
                  (0, i.jsx)('div', {
                      className: l()(D.imgContainer, {
                          [D.large]: w,
                          [D.stacked]: H
                      }),
                      children: (0, i.jsx)(m.Z, {
                          imageBackground: $,
                          applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
                          imageClassName: l()(D.img, {
                              [D.large]: w,
                              [D.stacked]: H
                          }),
                          imageNotFoundClassName: l()(D.brokenImg, {
                              [D.large]: w,
                              [D.stacked]: H
                          })
                      })
                  }),
                  (0, i.jsxs)(g.Z, {
                      className: l()(D.content, {
                          [D.large]: w,
                          [D.stacked]: H
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: D.info,
                              children: [
                                  (0, i.jsx)(u.FormTitle, { children: ei ? P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.Z.Messages.INVITE_BUTTON_TITLE_INVITED }),
                                  (0, i.jsx)(u.Heading, {
                                      className: D.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == K ? void 0 : K.name
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
                              className: l()(D.currentState, {
                                  [D.large]: w,
                                  [D.split]: !X && H
                              }),
                              children: [
                                  !X && ei
                                      ? (0, i.jsxs)('div', {
                                            className: l()(D.endedNote, { [D.large]: w }),
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
                                                })
                                            ]
                                        })
                                      : null,
                                  ei
                                      ? null
                                      : (0, i.jsx)(y, {
                                            members: f,
                                            membersOnline: R,
                                            isLarge: w,
                                            isStacked: H
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: D.cta,
                                      children: [
                                          null != W && X
                                              ? (0, i.jsx)('div', {
                                                    className: D.avatars,
                                                    children: (0, i.jsx)(T.Z, {
                                                        guildId: W.id,
                                                        users: et,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(u.Tooltip, {
                                              text: s,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(u.Button, {
                                                      className: D.actionButton,
                                                      onClick: () => {
                                                          es(), null == t || t();
                                                      },
                                                      wrapperClassName: D.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: en,
                                                      disabled: ea,
                                                      color: u.ButtonColors.GREEN,
                                                      children: r
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
