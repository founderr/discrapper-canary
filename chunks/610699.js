"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("653041"), n("47120"), n("390547");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  f = n("447543"),
  E = n("317381"),
  _ = n("778569"),
  m = n("182906"),
  T = n("100527"),
  I = n("906732"),
  p = n("835473"),
  h = n("471445"),
  N = n("601964"),
  S = n("592125"),
  C = n("430824"),
  A = n("496675"),
  g = n("594174"),
  M = n("197409"),
  R = n("514342"),
  v = n("602623"),
  O = n("624138"),
  x = n("358595"),
  L = n("981631"),
  D = n("245335"),
  P = n("689938"),
  y = n("648332");
let U = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
  j = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
  b = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

function B(e) {
  let {
    members: t,
    membersOnline: n,
    isLarge: l,
    isStacked: a
  } = e, r = [];
  return null != n && n > 0 && r.push((0, s.jsxs)("div", {
    className: y.statusWrapper,
    children: [(0, s.jsx)("i", {
      className: y.statusOnline
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: y.count,
      children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
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
      children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: t
      })
    })]
  }, "memberCount")), (0, s.jsx)("div", {
    className: i()(y.statusCounts, {
      [y.large]: l,
      [y.stacked]: a
    }),
    children: r
  })
}

function G(e) {
  let {
    channel: t,
    guild: n,
    isStacked: l,
    hasEnded: a
  } = e;
  if (null != t && null != n) {
    let e = (0, h.getChannelIconComponent)(t, n);
    return (0, s.jsxs)("div", {
      className: i()(y.channel, {
        [y.stacked]: l,
        [y.ended]: a
      }),
      children: [null != e ? (0, s.jsx)(e, {
        className: y.channelIcon,
        width: 16,
        height: 16
      }) : null, (0, s.jsx)(R.default, {
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          children: P.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, s.jsx)("div", {
    className: i()(y.channel, {
      [y.stacked]: l,
      [y.ended]: a
    }),
    children: (0, s.jsx)(R.default, {
      children: (0, s.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: P.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
          guildName: n.name
        })
      })
    })
  }) : null
}

function F(e) {
  var t, n;
  let a, r, {
      invite: d,
      getAcceptInviteContext: h
    } = e,
    {
      approximate_member_count: R,
      approximate_presence_count: O,
      target_type: F,
      target_application: k
    } = d;
  o()(F === D.InviteTargetTypes.EMBEDDED_APPLICATION && null != k, "invalid application invite");
  let w = l.useRef(null),
    [H, V] = l.useState(!1),
    [Y, K] = l.useState(!1);
  l.useEffect(() => {
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
  let W = (0, u.useStateFromStores)([C.default], () => null != d.guild ? C.default.getGuild(d.guild.id) : null, [d]),
    z = (0, p.default)([k.id])[0],
    Q = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return (null == d ? void 0 : d.channel) != null && (null === (e = E.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === k.id
    }),
    q = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? E.default.getEmbeddedActivitiesForChannel(d.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return k.id === t
      })
    }),
    Z = S.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
    X = (0, u.useStateFromStores)([A.default], () => null != Z && A.default.can(L.Permissions.USE_EMBEDDED_ACTIVITIES, Z), [Z]),
    {
      analyticsLocations: J
    } = (0, I.default)(T.default.INVITE_EMBED),
    $ = (0, _.default)({
      applicationId: k.id,
      size: U
    }),
    ee = (0, u.useStateFromStoresArray)([E.default], () => null != Z ? E.default.getEmbeddedActivitiesForChannel(Z.id).filter(e => e.applicationId === k.id).flatMap(e => Array.from(e.userIds)) : [], [Z, k.id]),
    et = (0, u.useStateFromStoresArray)([g.default], () => ee.map(e => g.default.getUser(e)), [ee]),
    en = d.state === L.InviteStates.ACCEPTING,
    es = null != W;
  if (null == W) {
    if (null == d.guild) return (0, s.jsx)(x.default, {});
    W = new N.default(d.guild)
  }
  let el = es && !X || es && Q,
    ea = () => {
      f.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: d.code,
        context: h("Invite Button Embed"),
        analyticsLocations: J
      })
    };
  return (es && Q && (a = P.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !X && (a = P.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = Q ? P.default.Messages.INVITE_EMBED_JOINED : q || !es ? P.default.Messages.JOIN : P.default.Messages.START, null == d.code || "" === d.code) ? null : (0, s.jsxs)("div", {
    className: y.container,
    ref: w,
    children: [(0, s.jsx)("div", {
      className: i()(y.imgContainer, {
        [y.large]: H,
        [y.stacked]: Y
      }),
      children: (0, s.jsx)(m.default, {
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
          children: es ? P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.default.Messages.INVITE_BUTTON_TITLE_INVITED
        }), (0, s.jsx)(c.Heading, {
          className: y.heading,
          variant: "heading-xl/semibold",
          children: null == z ? void 0 : z.name
        }), (0, s.jsx)(G, {
          channel: Z,
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
            children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
          }), (0, s.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
          })]
        }) : null, es ? null : (0, s.jsx)(B, {
          members: R,
          membersOnline: O,
          isLarge: H,
          isStacked: Y
        }), (0, s.jsxs)("div", {
          className: y.cta,
          children: [null != W && q ? (0, s.jsx)("div", {
            className: y.avatars,
            children: (0, s.jsx)(v.default, {
              guildId: W.id,
              users: et,
              max: 4
            })
          }) : null, (0, s.jsx)(c.Tooltip, {
            text: a,
            children: e => {
              let {
                onClick: t,
                ...n
              } = e;
              return (0, s.jsx)(c.Button, {
                className: y.actionButton,
                onClick: () => {
                  ea(), null == t || t()
                },
                wrapperClassName: y.tooltipButtonWrapper,
                ...n,
                submitting: en,
                disabled: el,
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