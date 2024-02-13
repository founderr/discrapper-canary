"use strict";
n.r(t), n.d(t, {
  AudienceEmptyTile: function() {
    return N
  },
  default: function() {
    return A
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("669491"),
  c = n("77078"),
  f = n("272030"),
  h = n("244201"),
  m = n("506885"),
  p = n("981601"),
  E = n("26989"),
  S = n("328275"),
  g = n("118503"),
  C = n("711486"),
  _ = n("387111"),
  I = n("808422"),
  T = n("5668");
let v = l.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: l,
      isPremium: s,
      isBlocked: i
    } = e;
    return (0, a.jsxs)("div", {
      className: T.textContainer,
      children: [i ? (0, a.jsx)(S.default, {
        className: T.blockedIcon,
        color: d.default.unsafe_rawColors.RED_400.css
      }) : null, (0, a.jsx)(c.Text, {
        className: T.text,
        variant: "text-sm/normal",
        color: "header-primary",
        children: _.default.getName(t, n, l)
      }), s ? (0, a.jsx)(g.default, {
        className: T.boost,
        color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }) : null]
    })
  }),
  x = l.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: l,
      channel: s,
      isPremium: r
    } = e, {
      user: o,
      blocked: u,
      rtsState: d
    } = n, c = d === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === I.RequestToSpeakStates.REQUESTED_TO_SPEAK || c;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: T.avatarContainer,
        children: [f && (0, a.jsx)(C.default, {
          className: i(T.icon, {
            [T.invited]: c
          })
        }), (0, a.jsx)("img", {
          src: null !== (t = o.getAvatarURL(s.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
          alt: o.username,
          "aria-label": o.username,
          className: i(T.avatar, {
            [T.faded]: u
          })
        })]
      }), (0, a.jsx)(v, {
        guildId: l,
        channelId: s.id,
        user: o,
        isPremium: r,
        isBlocked: u
      })]
    })
  }),
  N = () => (0, a.jsx)("div", {
    className: T.tileBaseContainer
  });
var A = l.memo(function(e) {
  let {
    participant: t,
    channel: s
  } = e, {
    user: r,
    blocked: d
  } = t, S = s.getGuildId(), g = (0, h.useAppContext)(), C = (0, u.useStateFromStores)([E.default], () => {
    var e;
    return null != S && (null === (e = E.default.getMember(S, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null
  }, [S, r.id]);
  o(null != S, "Channel cannot be guildless");
  let _ = l.useCallback(e => {
      (0, f.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: r,
          guildId: S,
          channel: s,
          showMediaItems: !0,
          showStageChannelItems: !0,
          showChatItems: !1
        })
      }, {
        context: g
      })
    }, [r, S, s, g]),
    I = l.useCallback(e => (0, a.jsx)(p.default, {
      ...e,
      guildId: S,
      channelId: s.id,
      userId: r.id
    }), [s.id, S, r.id]);
  return (0, a.jsx)(c.Popout, {
    preload: () => (0, m.default)(r.id, r.getAvatarURL(s.guild_id, 80), {
      guildId: s.guild_id,
      channelId: s.id
    }),
    renderPopout: I,
    position: "right",
    spacing: 8,
    children: e => (0, a.jsx)(c.Clickable, {
      className: i(T.tileContainer, {
        [T.singleIcon]: C || d,
        [T.doubleIcon]: C && d
      }),
      onContextMenu: _,
      ...e,
      children: (0, a.jsx)(x, {
        participant: t,
        guildId: S,
        channel: s,
        isPremium: C
      })
    })
  })
})