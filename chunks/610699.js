n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(653041),
    n(47120),
    n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    m = n(447543),
    h = n(317381),
    f = n(778569),
    p = n(182906),
    g = n(884338),
    _ = n(100527),
    C = n(906732),
    E = n(835473),
    I = n(471445),
    x = n(111028),
    v = n(955415),
    N = n(601964),
    T = n(592125),
    S = n(430824),
    b = n(496675),
    A = n(594174),
    j = n(624138),
    Z = n(358595),
    R = n(981631),
    P = n(245335),
    y = n(388032),
    L = n(610935);
let O = (0, j.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    M = (0, j.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    k = (0, j.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function D(e) {
    let { members: t, membersOnline: n, isLarge: r, isStacked: l } = e,
        o = [];
    return (
        null != n &&
            n > 0 &&
            o.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: L.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: L.statusOnline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: L.count,
                                children: y.intl.format(y.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            o.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: L.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: L.statusOffline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: L.count,
                                children: y.intl.format(y.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: a()(L.statusCounts, {
                [L.large]: r,
                [L.stacked]: l
            }),
            children: o
        })
    );
}
function B(e) {
    let { channel: t, guild: n, isStacked: r, hasEnded: l } = e;
    if (null != t && null != n) {
        let e = (0, I.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: a()(L.channel, {
                [L.stacked]: r,
                [L.ended]: l
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: L.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(x.Z, {
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        children: y.intl.format(y.t['dc+LW1'], {
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
              className: a()(L.channel, {
                  [L.stacked]: r,
                  [L.ended]: l
              }),
              children: (0, i.jsx)(x.Z, {
                  children: (0, i.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      children: y.intl.format(y.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function w(e) {
    var t, n;
    let l,
        o,
        { invite: u, getAcceptInviteContext: I } = e,
        { approximate_member_count: x, approximate_presence_count: j, target_type: w, target_application: U } = u;
    s()(w === P.Iq.EMBEDDED_APPLICATION && null != U, 'invalid application invite');
    let F = r.useRef(null),
        [G, V] = r.useState(!1),
        [H, z] = r.useState(!1);
    r.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (V(t < k + M), z(t <= 2 * O));
                })()
            ),
            t = F.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [F, V, z]);
    let W = (0, c.e7)([S.Z], () => (null != u.guild ? S.Z.getGuild(u.guild.id) : null), [u]),
        K = (0, E.Z)([U.id])[0],
        Y = (0, c.e7)([h.ZP], () => {
            var e;
            return (null == u ? void 0 : u.channel) != null && (null === (e = h.ZP.getSelfEmbeddedActivityForChannel(u.channel.id)) || void 0 === e ? void 0 : e.applicationId) === U.id;
        }),
        X = (0, c.e7)([h.ZP], () => {
            var e;
            return ((null === (e = u.channel) || void 0 === e ? void 0 : e.id) != null ? h.ZP.getEmbeddedActivitiesForChannel(u.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return U.id === t;
            });
        }),
        Q = T.Z.getChannel(null === (t = u.channel) || void 0 === t ? void 0 : t.id),
        q = (0, c.e7)([b.Z], () => null != Q && b.Z.can(R.Plq.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
        { analyticsLocations: J } = (0, C.ZP)(_.Z.INVITE_EMBED),
        $ = (0, f.Z)({
            applicationId: U.id,
            size: O,
            names: ['embedded_cover']
        }),
        ee = (0, c.Wu)(
            [h.ZP],
            () =>
                null != Q
                    ? h.ZP.getEmbeddedActivitiesForChannel(Q.id)
                          .filter((e) => e.applicationId === U.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [Q, U.id]
        ),
        et = (0, c.Wu)([A.default], () => ee.map((e) => A.default.getUser(e)), [ee]),
        en = u.state === R.r2o.ACCEPTING,
        ei = null != W;
    if (null == W) {
        if (null == u.guild) return (0, i.jsx)(Z.Z, {});
        W = new N.ZP(u.guild);
    }
    let er = (ei && !q) || (ei && Y),
        el = () => {
            m.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: u.code,
                context: I('Invite Button Embed'),
                analyticsLocations: J
            });
        };
    return (ei && Y && (l = y.intl.string(y.t.wJNK8P)), !q && (l = y.intl.string(y.t.hHGrW1)), (o = Y ? y.intl.string(y.t.KC26NT) : X || !ei ? y.intl.string(y.t.VJlc0d) : y.intl.string(y.t.I0v0Qk)), null == u.code || '' === u.code)
        ? null
        : (0, i.jsxs)('div', {
              className: L.container,
              ref: F,
              children: [
                  (0, i.jsx)('div', {
                      className: a()(L.imgContainer, {
                          [L.large]: G,
                          [L.stacked]: H
                      }),
                      children: (0, i.jsx)(p.Z, {
                          imageBackground: $,
                          applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
                          imageClassName: a()(L.img, {
                              [L.large]: G,
                              [L.stacked]: H
                          }),
                          imageNotFoundClassName: a()(L.brokenImg, {
                              [L.large]: G,
                              [L.stacked]: H
                          })
                      })
                  }),
                  (0, i.jsxs)(v.Z, {
                      className: a()(L.content, {
                          [L.large]: G,
                          [L.stacked]: H
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: L.info,
                              children: [
                                  (0, i.jsx)(d.FormTitle, { children: ei ? y.intl.string(y.t['1ckx+P']) : y.intl.string(y.t.BoQUFR) }),
                                  (0, i.jsx)(d.Heading, {
                                      className: L.heading,
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
                              className: a()(L.currentState, {
                                  [L.large]: G,
                                  [L.split]: !X && H
                              }),
                              children: [
                                  !X && ei
                                      ? (0, i.jsxs)('div', {
                                            className: a()(L.endedNote, { [L.large]: G }),
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: y.intl.string(y.t.JBnc7O)
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: y.intl.string(y.t.lEvDDQ)
                                                })
                                            ]
                                        })
                                      : null,
                                  ei
                                      ? null
                                      : (0, i.jsx)(D, {
                                            members: x,
                                            membersOnline: j,
                                            isLarge: G,
                                            isStacked: H
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: L.cta,
                                      children: [
                                          null != W && X
                                              ? (0, i.jsx)('div', {
                                                    className: L.avatars,
                                                    children: (0, i.jsx)(g.Z, {
                                                        guildId: W.id,
                                                        users: et,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(d.Tooltip, {
                                              text: l,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(d.Button, {
                                                      className: L.actionButton,
                                                      onClick: () => {
                                                          el(), null == t || t();
                                                      },
                                                      wrapperClassName: L.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: en,
                                                      disabled: er,
                                                      color: d.ButtonColors.GREEN,
                                                      children: o
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
