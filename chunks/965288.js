n.d(t, {
  y: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(442837),
  d = n(692547),
  u = n(481060),
  h = n(239091),
  p = n(40851),
  m = n(484459),
  _ = n(103575),
  f = n(271383),
  E = n(709586),
  C = n(5192),
  g = n(590415),
  I = n(410370);
let x = a.memo(function(e) {
let {
  guildId: t,
  channelId: n,
  user: a,
  isPremium: s,
  isBlocked: l
} = e;
return (0, i.jsxs)('div', {
  className: I.textContainer,
  children: [
    l ? (0, i.jsx)(u.DenyIcon, {
      size: 'lg',
      className: I.blockedIcon,
      color: d.Z.unsafe_rawColors.RED_400.css
    }) : null,
    (0, i.jsx)(u.Text, {
      className: I.text,
      variant: 'text-sm/normal',
      color: 'header-primary',
      children: C.ZP.getName(t, n, a)
    }),
    s ? (0, i.jsx)(E.Z, {
      className: I.boost,
      color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }) : null
  ]
});
  }),
  T = a.memo(function(e) {
var t;
let {
  participant: n,
  guildId: a,
  channel: s,
  isPremium: r
} = e, {
  user: o,
  blocked: c,
  rtsState: d
} = n, h = d === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, p = d === g.xO.REQUESTED_TO_SPEAK || h;
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsxs)('div', {
      className: I.avatarContainer,
      children: [
        p && (0, i.jsx)(u.HandRequestSpeakIcon, {
          size: 'md',
          color: 'currentColor',
          className: l()(I.icon, {
            [I.invited]: h
          })
        }),
        (0, i.jsx)('img', {
          src: null !== (t = o.getAvatarURL(s.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
          alt: o.username,
          'aria-label': o.username,
          className: l()(I.avatar, {
            [I.faded]: c
          })
        })
      ]
    }),
    (0, i.jsx)(x, {
      guildId: a,
      channelId: s.id,
      user: o,
      isPremium: r,
      isBlocked: c
    })
  ]
});
  }),
  N = () => (0, i.jsx)('div', {
className: I.tileBaseContainer
  });
t.Z = a.memo(function(e) {
  let {
participant: t,
channel: s
  } = e, {
user: r,
blocked: d
  } = t, E = s.getGuildId(), C = (0, p.bp)(), g = (0, c.e7)([f.ZP], () => {
var e;
return null != E && (null === (e = f.ZP.getMember(E, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
  }, [
E,
r.id
  ]);
  o()(null != E, 'Channel cannot be guildless');
  let x = a.useCallback(e => {
  (0, h.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('79695'),
      n.e('70474'),
      n.e('12435'),
      n.e('46563')
    ]).then(n.bind(n, 757387));
    return t => (0, i.jsx)(e, {
      ...t,
      user: r,
      guildId: E,
      channel: s,
      showMediaItems: !0,
      showStageChannelItems: !0,
      showChatItems: !1
    });
  }, {
    context: C
  });
}, [
  r,
  E,
  s,
  C
]),
N = a.useCallback(e => (0, i.jsx)(_.Z, {
  ...e,
  location: 'AudienceTile',
  guildId: E,
  channelId: s.id,
  userId: r.id
}), [
  s.id,
  E,
  r.id
]);
  return (0, i.jsx)(u.Popout, {
preload: () => (0, m.W)(r, {
  guildId: s.guild_id,
  channelId: s.id
}),
renderPopout: N,
position: 'right',
spacing: 8,
children: e => (0, i.jsx)(u.Clickable, {
  className: l()(I.tileContainer, {
    [I.singleIcon]: g || d,
    [I.doubleIcon]: g && d
  }),
  onContextMenu: x,
  ...e,
  children: (0, i.jsx)(T, {
    participant: t,
    guildId: E,
    channel: s,
    isPremium: g
  })
})
  });
});