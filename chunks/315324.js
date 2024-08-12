n.d(t, {
  W: function() {
return h;
  },
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(111028),
  o = n(318374),
  l = n(565138),
  u = n(769654),
  c = n(914010),
  d = n(938475),
  _ = n(652853),
  E = n(228168),
  f = n(692184);
let h = 3;

function p(e) {
  let {
user: t,
guild: n,
channel: p,
onAction: m,
onClose: I
  } = e, {
profileType: T
  } = (0, _.z)(), g = (0, i.e7)([c.Z], () => c.Z.getGuildId()), S = (0, i.Wu)([d.ZP], () => d.ZP.getVoiceStatesForChannel(p).map(e => {
let {
  user: t
} = e;
return t;
  }));
  return (0, r.jsxs)('div', {
className: f.voiceChannel,
children: [
  (0, r.jsx)(l.Z, {
    guild: n,
    size: l.Z.Sizes.SMOL,
    className: f.guildIcon
  }),
  (0, r.jsx)(a.ChevronSmallRightIcon, {
    size: 'xxs',
    color: a.tokens.colors.INTERACTIVE_NORMAL
  }),
  (0, r.jsxs)('div', {
    className: f.voiceChannelText,
    children: [
      (0, r.jsx)(a.VoiceNormalIcon, {
        size: 'xxs',
        color: a.tokens.colors.INTERACTIVE_NORMAL,
        className: f.voiceIcon
      }),
      n.id === g ? (0, r.jsx)(a.Text, {
        variant: 'text-xs/normal',
        color: 'interactive-normal',
        lineClamp: 1,
        children: (0, r.jsx)(s.Z, {
          children: p.name
        })
      }) : (0, r.jsx)(a.Clickable, {
        onClick: () => {
          (0, u.X)(n.id), null == m || m({
            action: 'OPEN_VOICE_CHANNEL'
          }), null == I || I();
        },
        className: f.clickable,
        children: (0, r.jsx)(a.Text, {
          variant: 'text-xs/normal',
          color: 'interactive-normal',
          lineClamp: 1,
          children: (0, r.jsx)(s.Z, {
            children: p.name
          })
        })
      })
    ]
  }),
  (0, r.jsx)(o.Z, {
    users: S,
    guildId: n.id,
    channelId: p.id,
    maxUsers: h,
    size: a.AvatarSizes.SIZE_16,
    disableUsernameTooltip: !0,
    disableUserPopout: T !== E.y0.FULL_SIZE || (e => e === t.id),
    overflowCountVariant: 'text-xs/normal'
  })
]
  });
}