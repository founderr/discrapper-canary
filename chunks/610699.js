n.d(t, {
  Z: function() {
    return k
  }
}), n(653041), n(47120), n(390547);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  u = n(477690),
  d = n(481060),
  E = n(447543),
  _ = n(317381),
  I = n(778569),
  T = n(182906),
  m = n(100527),
  N = n(906732),
  h = n(835473),
  C = n(471445),
  S = n(601964),
  A = n(592125),
  g = n(430824),
  p = n(496675),
  f = n(594174),
  R = n(197409),
  O = n(514342),
  M = n(602623),
  x = n(624138),
  v = n(358595),
  L = n(981631),
  Z = n(245335),
  P = n(689938),
  D = n(746142);
let j = (0, x.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  U = (0, x.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, x.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function y(e) {
  let {
    members: t,
    membersOnline: n,
    isLarge: i,
    isStacked: l
  } = e, r = [];
  return null != n && n > 0 && r.push((0, s.jsxs)("div", {
    className: D.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: D.statusOnline
    }), (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: D.count,
      children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && r.push((0, s.jsxs)("div", {
    className: D.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: D.statusOffline
    }), (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: D.count,
      children: P.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: a()(D.statusCounts, {
      [D.large]: i,
      [D.stacked]: l
    }),
    children: r
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    isStacked: i,
    hasEnded: l
  } = e;
  if (null != t && null != n) {
    let e = (0, C.KS)(t, n);
    return (0, s.jsxs)("div", {
      className: a()(D.channel, {
        [D.stacked]: i,
        [D.ended]: l
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: D.channelIcon,
        size: "xs",
        color: "currentColor"
      }) : null, (0, s.jsx)(O.Z, {
        children: (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: P.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: a()(D.channel, {
      [D.stacked]: i,
      [D.ended]: l
    }),
    children: (0, s.jsx)(O.Z, {
      children: (0, s.jsx)(d.Text, {
        variant: "text-xs/normal",
        children: P.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function k(e) {
  var t, n;
  let l, r, {
      invite: u,
      getAcceptInviteContext: C
    } = e,
    {
      approximate_member_count: O,
      approximate_presence_count: x,
      target_type: k,
      target_application: G
    } = u;
  o()(k === Z.Iq.EMBEDDED_APPLICATION && null != G, "invalid application invite");
  let F = i.useRef(null),
    [V, w] = i.useState(!1),
    [H, Y] = i.useState(!1);
  i.useEffect(() => {
    let e = new ResizeObserver(() => (function() {
        var e;
        let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
        null != t && (w(t < b + U), Y(t <= 2 * j))
      })()),
      t = F.current;
    return null != t && e.observe(t), () => {
      e.disconnect()
    }
  }, [F, w, Y]);
  let W = (0, c.e7)([g.Z], () => null != u.guild ? g.Z.getGuild(u.guild.id) : null, [u]),
    z = (0, h.Z)([G.id])[0],
    K = (0, c.e7)([_.ZP], () => {
      var e;
      return (null == u ? void 0 : u.channel) != null && (null === (e = _.ZP.getSelfEmbeddedActivityForChannel(u.channel.id)) || void 0 === e ? void 0 : e.applicationId) === G.id
    }),
    Q = (0, c.e7)([_.ZP], () => {
      var e;
      return ((null === (e = u.channel) || void 0 === e ? void 0 : e.id) != null ? _.ZP.getEmbeddedActivitiesForChannel(u.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return G.id === t
      })
    }),
    X = A.Z.getChannel(null === (t = u.channel) || void 0 === t ? void 0 : t.id),
    q = (0, c.e7)([p.Z], () => null != X && p.Z.can(L.Plq.USE_EMBEDDED_ACTIVITIES, X), [X]),
    {
      analyticsLocations: J
    } = (0, N.ZP)(m.Z.INVITE_EMBED),
    $ = (0, I.Z)({
      applicationId: G.id,
      size: j,
      names: ["embedded_cover"]
    }),
    ee = (0, c.Wu)([_.ZP], () => null != X ? _.ZP.getEmbeddedActivitiesForChannel(X.id).filter(e => e.applicationId === G.id).flatMap(e => Array.from(e.userIds)) : [], [X, G.id]),
    et = (0, c.Wu)([f.default], () => ee.map(e => f.default.getUser(e)), [ee]),
    en = u.state === L.r2o.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == u.guild) return (0, s.jsx)(v.Z, {});
    W = new S.ZP(u.guild)
  }
  let ei = es && !q || es && K,
    el = () => {
      E.Z.acceptInviteAndTransitionToInviteChannel({
        inviteKey: u.code,
        context: C("Invite Button Embed"),
        analyticsLocations: J
      })
    };
  return (es && K && (l = P.Z.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !q && (l = P.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = K ? P.Z.Messages.INVITE_EMBED_JOINED : Q || !es ? P.Z.Messages.JOIN : P.Z.Messages.START, null == u.code || "" === u.code) ? null : (0, s.jsxs)("div", {
    className: D.container,
    ref: F,
    children: [(0, s.jsx)("div", {
      className: a()(D.imgContainer, {
        [D.large]: V,
        [D.stacked]: H
      }),
      children: (0, s.jsx)(T.Z, {
        imageBackground: $,
        applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
        imageClassName: a()(D.img, {
          [D.large]: V,
          [D.stacked]: H
        }),
        imageNotFoundClassName: a()(D.brokenImg, {
          [D.large]: V,
          [D.stacked]: H
        })
      })
    }), (0, s.jsxs)(R.Z, {
      className: a()(D.content, {
        [D.large]: V,
        [D.stacked]: H
      }),
      children: [(0, s.jsxs)("div", {
        className: D.info,
        children: [(0, s.jsx)(d.FormTitle, {
          children: es ? P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.Z.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(d.Heading, {
          className: D.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(B, {
          channel: X,
          guild: W,
          isStacked: H,
          hasEnded: !Q
        })]
      }), (0, s.jsxs)("div", {
        className: a()(D.currentState, {
          [D.large]: V,
          [D.split]: !Q && H
        }),
        children: [!Q && es ? (0, s.jsxs)("div", {
          className: a()(D.endedNote, {
            [D.large]: V
          }),
          children: [(0, s.jsx)(d.Text, {
            variant: "text-xs/medium",
            children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/medium",
            children: P.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(y, {
          members: O,
          membersOnline: x,
          isLarge: V,
          isStacked: H
        }), (0, s.jsxs)("div", {
          className: D.cta,
          children: [null != W && Q ? (0, s.jsx)("div", {
            className: D.avatars,
            children: (0, s.jsx)(M.Z, {
              guildId: W.id,
              users: et,
              max: 4
            })
          }) : null, (0, s.jsx)(d.Tooltip, {
            text: l,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(d.Button, {
                className: D.actionButton,
                onClick: () => {
                  el(), null == t || t()
                },
                wrapperClassName: D.tooltipButtonWrapper,
                ...n,
                submitting: en,
                disabled: ei,
                color: d.ButtonColors.GREEN,
                children: r
              })
            }
          })]
        })]
      })]
    })]
  })
}