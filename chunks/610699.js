n.d(t, {
    Z: function () {
        return V;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(390547);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(512722),
    d = n.n(c),
    _ = n(442837),
    E = n(477690),
    f = n(481060),
    h = n(447543),
    p = n(317381),
    m = n(778569),
    I = n(182906),
    T = n(884338),
    g = n(100527),
    S = n(906732),
    A = n(835473),
    v = n(471445),
    N = n(111028),
    O = n(955415),
    R = n(601964),
    C = n(592125),
    y = n(430824),
    b = n(496675),
    L = n(594174),
    D = n(624138),
    M = n(358595),
    P = n(981631),
    U = n(245335),
    w = n(689938),
    x = n(610935);
let G = (0, D.Mg)(E.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    k = (0, D.Mg)(E.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    B = (0, D.Mg)(E.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function F(e) {
    let { members: t, membersOnline: n, isLarge: r, isStacked: i } = e,
        a = [];
    return (
        null != n &&
            n > 0 &&
            a.push(
                (0, o.jsxs)(
                    'div',
                    {
                        className: x.statusWrapper,
                        children: [
                            (0, o.jsx)('i', { className: x.statusOnline }),
                            (0, o.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                className: x.count,
                                children: w.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            a.push(
                (0, o.jsxs)(
                    'div',
                    {
                        className: x.statusWrapper,
                        children: [
                            (0, o.jsx)('i', { className: x.statusOffline }),
                            (0, o.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                className: x.count,
                                children: w.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, o.jsx)('div', {
            className: u()(x.statusCounts, {
                [x.large]: r,
                [x.stacked]: i
            }),
            children: a
        })
    );
}
function Z(e) {
    let { channel: t, guild: n, isStacked: r, hasEnded: i } = e;
    if (null != t && null != n) {
        let e = (0, v.KS)(t, n);
        return (0, o.jsxs)('div', {
            className: u()(x.channel, {
                [x.stacked]: r,
                [x.ended]: i
            }),
            children: [
                null != e
                    ? (0, o.jsx)(e, {
                          className: x.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, o.jsx)(N.Z, {
                    children: (0, o.jsx)(f.Text, {
                        variant: 'text-xs/normal',
                        children: w.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
                            channelName: t.name,
                            serverName: n.name
                        })
                    })
                })
            ]
        });
    }
    return null != n
        ? (0, o.jsx)('div', {
              className: u()(x.channel, {
                  [x.stacked]: r,
                  [x.ended]: i
              }),
              children: (0, o.jsx)(N.Z, {
                  children: (0, o.jsx)(f.Text, {
                      variant: 'text-xs/normal',
                      children: w.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: n.name })
                  })
              })
          })
        : null;
}
function V(e) {
    var t, n;
    let r,
        i,
        { invite: a, getAcceptInviteContext: l } = e,
        { approximate_member_count: c, approximate_presence_count: E, target_type: v, target_application: N } = a;
    d()(v === U.Iq.EMBEDDED_APPLICATION && null != N, 'invalid application invite');
    let D = s.useRef(null),
        [V, H] = s.useState(!1),
        [Y, j] = s.useState(!1);
    s.useEffect(() => {
        function e() {
            var e;
            let t = null === (e = D.current) || void 0 === e ? void 0 : e.offsetWidth;
            null != t && (H(t < B + k), j(t <= 2 * G));
        }
        let t = new ResizeObserver(() => e()),
            n = D.current;
        return (
            null != n && t.observe(n),
            () => {
                t.disconnect();
            }
        );
    }, [D, H, j]);
    let W = (0, _.e7)([y.Z], () => (null != a.guild ? y.Z.getGuild(a.guild.id) : null), [a]),
        K = (0, A.Z)([N.id])[0],
        z = (0, _.e7)([p.ZP], () => {
            var e;
            return (null == a ? void 0 : a.channel) != null && (null === (e = p.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) || void 0 === e ? void 0 : e.applicationId) === N.id;
        }),
        q = (0, _.e7)([p.ZP], () => {
            var e;
            return ((null === (e = a.channel) || void 0 === e ? void 0 : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(a.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return N.id === t;
            });
        }),
        Q = C.Z.getChannel(null === (t = a.channel) || void 0 === t ? void 0 : t.id),
        X = (0, _.e7)([b.Z], () => null != Q && b.Z.can(P.Plq.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
        { analyticsLocations: $ } = (0, S.ZP)(g.Z.INVITE_EMBED),
        J = (0, m.Z)({
            applicationId: N.id,
            size: G,
            names: ['embedded_cover']
        }),
        ee = (0, _.Wu)(
            [p.ZP],
            () =>
                null != Q
                    ? p.ZP.getEmbeddedActivitiesForChannel(Q.id)
                          .filter((e) => e.applicationId === N.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [Q, N.id]
        ),
        et = (0, _.Wu)([L.default], () => ee.map((e) => L.default.getUser(e)), [ee]),
        en = a.state === P.r2o.ACCEPTING,
        er = null != W;
    if (null == W) {
        if (null == a.guild) return (0, o.jsx)(M.Z, {});
        W = new R.ZP(a.guild);
    }
    let ei = (er && !X) || (er && z),
        ea = () => {
            h.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: a.code,
                context: l('Invite Button Embed'),
                analyticsLocations: $
            });
        };
    return (er && z && (r = w.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !X && (r = w.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), (i = z ? w.Z.Messages.INVITE_EMBED_JOINED : q || !er ? w.Z.Messages.JOIN : w.Z.Messages.START), null == a.code || '' === a.code)
        ? null
        : (0, o.jsxs)('div', {
              className: x.container,
              ref: D,
              children: [
                  (0, o.jsx)('div', {
                      className: u()(x.imgContainer, {
                          [x.large]: V,
                          [x.stacked]: Y
                      }),
                      children: (0, o.jsx)(I.Z, {
                          imageBackground: J,
                          applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
                          imageClassName: u()(x.img, {
                              [x.large]: V,
                              [x.stacked]: Y
                          }),
                          imageNotFoundClassName: u()(x.brokenImg, {
                              [x.large]: V,
                              [x.stacked]: Y
                          })
                      })
                  }),
                  (0, o.jsxs)(O.Z, {
                      className: u()(x.content, {
                          [x.large]: V,
                          [x.stacked]: Y
                      }),
                      children: [
                          (0, o.jsxs)('div', {
                              className: x.info,
                              children: [
                                  (0, o.jsx)(f.FormTitle, { children: er ? w.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : w.Z.Messages.INVITE_BUTTON_TITLE_INVITED }),
                                  (0, o.jsx)(f.Heading, {
                                      className: x.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == K ? void 0 : K.name
                                  }),
                                  (0, o.jsx)(Z, {
                                      channel: Q,
                                      guild: W,
                                      isStacked: Y,
                                      hasEnded: !q
                                  })
                              ]
                          }),
                          (0, o.jsxs)('div', {
                              className: u()(x.currentState, {
                                  [x.large]: V,
                                  [x.split]: !q && Y
                              }),
                              children: [
                                  !q && er
                                      ? (0, o.jsxs)('div', {
                                            className: u()(x.endedNote, { [x.large]: V }),
                                            children: [
                                                (0, o.jsx)(f.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: w.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
                                                }),
                                                (0, o.jsx)(f.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: w.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
                                                })
                                            ]
                                        })
                                      : null,
                                  er
                                      ? null
                                      : (0, o.jsx)(F, {
                                            members: c,
                                            membersOnline: E,
                                            isLarge: V,
                                            isStacked: Y
                                        }),
                                  (0, o.jsxs)('div', {
                                      className: x.cta,
                                      children: [
                                          null != W && q
                                              ? (0, o.jsx)('div', {
                                                    className: x.avatars,
                                                    children: (0, o.jsx)(T.Z, {
                                                        guildId: W.id,
                                                        users: et,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, o.jsx)(f.Tooltip, {
                                              text: r,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, o.jsx)(f.Button, {
                                                      className: x.actionButton,
                                                      onClick: () => {
                                                          ea(), null == t || t();
                                                      },
                                                      wrapperClassName: x.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: en,
                                                      disabled: ei,
                                                      color: f.ButtonColors.GREEN,
                                                      children: i
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
