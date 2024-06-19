n.d(t, {
  y: function() {
    return N
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  u = n(692547),
  d = n(481060),
  h = n(239091),
  m = n(40851),
  p = n(484459),
  E = n(103575),
  g = n(271383),
  f = n(709586),
  C = n(5192),
  _ = n(590415),
  I = n(433534);
let x = i.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: i,
      isPremium: s,
      isBlocked: a
    } = e;
    return (0, l.jsxs)("div", {
      className: I.textContainer,
      children: [a ? (0, l.jsx)(d.DenyIcon, {
        size: "lg",
        className: I.blockedIcon,
        color: u.Z.unsafe_rawColors.RED_400.css
      }) : null, (0, l.jsx)(d.Text, {
        className: I.text,
        variant: "text-sm/normal",
        color: "header-primary",
        children: C.ZP.getName(t, n, i)
      }), s ? (0, l.jsx)(f.Z, {
        className: I.boost,
        color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
      }) : null]
    })
  }),
  T = i.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: i,
      channel: s,
      isPremium: r
    } = e, {
      user: o,
      blocked: c,
      rtsState: u
    } = n, h = u === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, m = u === _.xO.REQUESTED_TO_SPEAK || h;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)("div", {
        className: I.avatarContainer,
        children: [m && (0, l.jsx)(d.HandRequestSpeakIcon, {
          size: "md",
          color: "currentColor",
          className: a()(I.icon, {
            [I.invited]: h
          })
        }), (0, l.jsx)("img", {
          src: null !== (t = o.getAvatarURL(s.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
          alt: o.username,
          "aria-label": o.username,
          className: a()(I.avatar, {
            [I.faded]: c
          })
        })]
      }), (0, l.jsx)(x, {
        guildId: i,
        channelId: s.id,
        user: o,
        isPremium: r,
        isBlocked: c
      })]
    })
  }),
  N = () => (0, l.jsx)("div", {
    className: I.tileBaseContainer
  });
t.Z = i.memo(function(e) {
  let {
    participant: t,
    channel: s
  } = e, {
    user: r,
    blocked: u
  } = t, f = s.getGuildId(), C = (0, m.bp)(), _ = (0, c.e7)([g.ZP], () => {
    var e;
    return null != f && (null === (e = g.ZP.getMember(f, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null
  }, [f, r.id]);
  o()(null != f, "Channel cannot be guildless");
  let x = i.useCallback(e => {
      (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
        return t => (0, l.jsx)(e, {
          ...t,
          user: r,
          guildId: f,
          channel: s,
          showMediaItems: !0,
          showStageChannelItems: !0,
          showChatItems: !1
        })
      }, {
        context: C
      })
    }, [r, f, s, C]),
    N = i.useCallback(e => (0, l.jsx)(E.Z, {
      ...e,
      location: "AudienceTile",
      guildId: f,
      channelId: s.id,
      userId: r.id
    }), [s.id, f, r.id]);
  return (0, l.jsx)(d.Popout, {
    preload: () => (0, p.W)(r, {
      guildId: s.guild_id,
      channelId: s.id
    }),
    renderPopout: N,
    position: "right",
    spacing: 8,
    children: e => (0, l.jsx)(d.Clickable, {
      className: a()(I.tileContainer, {
        [I.singleIcon]: _ || u,
        [I.doubleIcon]: _ && u
      }),
      onContextMenu: x,
      ...e,
      children: (0, l.jsx)(T, {
        participant: t,
        guildId: f,
        channel: s,
        isPremium: _
      })
    })
  })
})