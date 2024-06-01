"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("653041"), n("47120"), n("390547");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  E = n("447543"),
  f = n("317381"),
  _ = n("778569"),
  T = n("182906"),
  m = n("100527"),
  I = n("906732"),
  N = n("835473"),
  p = n("471445"),
  S = n("601964"),
  C = n("592125"),
  A = n("430824"),
  h = n("496675"),
  g = n("594174"),
  M = n("197409"),
  O = n("514342"),
  R = n("602623"),
  v = n("624138"),
  L = n("358595"),
  x = n("981631"),
  P = n("245335"),
  D = n("689938"),
  y = n("137435");
let U = (0, v.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, v.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, v.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function G(e) {
  let {
    members: t,
    membersOnline: n,
    isLarge: a,
    isStacked: l
  } = e, r = [];
  return null != n && n > 0 && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOnline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: D.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOffline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: D.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: i()(y.statusCounts, {
      [y.large]: a,
      [y.stacked]: l
    }),
    children: r
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    isStacked: a,
    hasEnded: l
  } = e;
  if (null != t && null != n) {
    let e = (0, p.getChannelIconComponent)(t, n);
    return (0, s.jsxs)("div", {
      className: i()(y.channel, {
        [y.stacked]: a,
        [y.ended]: l
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: y.channelIcon,
        width: 16,
        height: 16
      }) : null, (0, s.jsx)(O.default, {
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: D.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: i()(y.channel, {
      [y.stacked]: a,
      [y.ended]: l
    }),
    children: (0, s.jsx)(O.default, {
      children: (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: D.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function F(e) {
  var t, n;
  let l, r, {
      invite: d,
      getAcceptInviteContext: p
    } = e,
    {
      approximate_member_count: O,
      approximate_presence_count: v,
      target_type: F,
      target_application: k
    } = d;
  o()(F === P.InviteTargetTypes.EMBEDDED_APPLICATION && null != k, "invalid application invite");
  let w = a.useRef(null),
    [H, V] = a.useState(!1),
    [Y, K] = a.useState(!1);
  a.useEffect(() => {
    let e = new ResizeObserver(() => (function() {
        var e;
        let t = null === (e = w.current) || void 0 === e ? void 0 : e.offsetWidth;
        null != t && (V(t < b + j), K(t <= 2 * U))
      })()),
      t = w.current;
    return null != t && e.observe(t), () => {
      e.disconnect()
    }
  }, [w, V, K]);
  let W = (0, u.useStateFromStores)([A.default], () => null != d.guild ? A.default.getGuild(d.guild.id) : null, [d]),
    z = (0, N.default)([k.id])[0],
    Q = (0, u.useStateFromStores)([f.default], () => {
      var e;
      return (null == d ? void 0 : d.channel) != null && (null === (e = f.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === k.id
    }),
    q = (0, u.useStateFromStores)([f.default], () => {
      var e;
      return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? f.default.getEmbeddedActivitiesForChannel(d.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return k.id === t
      })
    }),
    X = C.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
    Z = (0, u.useStateFromStores)([h.default], () => null != X && h.default.can(x.Permissions.USE_EMBEDDED_ACTIVITIES, X), [X]),
    {
      analyticsLocations: J
    } = (0, I.default)(m.default.INVITE_EMBED),
    $ = (0, _.default)({
      applicationId: k.id,
      size: U,
      names: ["embedded_cover"]
    }),
    ee = (0, u.useStateFromStoresArray)([f.default], () => null != X ? f.default.getEmbeddedActivitiesForChannel(X.id).filter(e => e.applicationId === k.id).flatMap(e => Array.from(e.userIds)) : [], [X, k.id]),
    et = (0, u.useStateFromStoresArray)([g.default], () => ee.map(e => g.default.getUser(e)), [ee]),
    en = d.state === x.InviteStates.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == d.guild) return (0, s.jsx)(L.default, {});
    W = new S.default(d.guild)
  }
  let ea = es && !Z || es && Q,
    el = () => {
      E.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: d.code,
        context: p("Invite Button Embed"),
        analyticsLocations: J
      })
    };
  return (es && Q && (l = D.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !Z && (l = D.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = Q ? D.default.Messages.INVITE_EMBED_JOINED : q || !es ? D.default.Messages.JOIN : D.default.Messages.START, null == d.code || "" === d.code) ? null : (0, s.jsxs)("div", {
    className: y.container,
    ref: w,
    children: [(0, s.jsx)("div", {
      className: i()(y.imgContainer, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: (0, s.jsx)(T.default, {
        imageBackground: $,
        applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
        imageClassName: i()(y.img, {
          [y.large]: H,
          [y.stacked]: Y
        }),
        imageNotFoundClassName: i()(y.brokenImg, {
          [y.large]: H,
          [y.stacked]: Y
        })
      })
    }), (0, s.jsxs)(M.default, {
      className: i()(y.content, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: [(0, s.jsxs)("div", {
        className: y.info,
        children: [(0, s.jsx)(c.FormTitle, {
          children: es ? D.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : D.default.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(c.Heading, {
          className: y.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(B, {
          channel: X,
          guild: W,
          isStacked: Y,
          hasEnded: !q
        })]
      }), (0, s.jsxs)("div", {
        className: i()(y.currentState, {
          [y.large]: H,
          [y.split]: !q && Y
        }),
        children: [!q && es ? (0, s.jsxs)("div", {
          className: i()(y.endedNote, {
            [y.large]: H
          }),
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: D.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: D.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(G, {
          members: O,
          membersOnline: v,
          isLarge: H,
          isStacked: Y
        }), (0, s.jsxs)("div", {
          className: y.cta,
          children: [null != W && q ? (0, s.jsx)("div", {
            className: y.avatars,
            children: (0, s.jsx)(R.default, {
              guildId: W.id,
              users: et,
              max: 4
            })
          }) : null, (0, s.jsx)(c.Tooltip, {
            text: l,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(c.Button, {
                className: y.actionButton,
                onClick: () => {
                  el(), null == t || t()
                },
                wrapperClassName: y.tooltipButtonWrapper,
                ...n,
                submitting: en,
                disabled: ea,
                color: c.ButtonColors.GREEN,
                children: r
              })
            }
          })]
        })]
      })]
    })]
  })
}