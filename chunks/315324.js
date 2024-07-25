n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(318374),
  o = n(565138),
  l = n(769654),
  u = n(914010),
  c = n(938475),
  d = n(373826),
  _ = n(692184);

function E(e) {
  let {
guild: t,
channel: n,
onClose: E
  } = e, f = (0, i.e7)([u.Z], () => u.Z.getGuildId()), h = (0, i.Wu)([c.ZP], () => c.ZP.getVoiceStatesForChannel(n).map(e => {
let {
  user: t
} = e;
return t;
  }));
  return (0, r.jsxs)('div', {
className: _.voiceChannel,
children: [
  (0, r.jsxs)('div', {
    className: _.voiceChannelDetails,
    children: [
      (0, r.jsx)(o.Z, {
        guild: t,
        size: o.Z.Sizes.SMOL,
        className: _.guildIcon
      }),
      (0, r.jsx)(a.ChevronSmallRightIcon, {
        size: 'xxs',
        color: a.tokens.colors.INTERACTIVE_NORMAL
      }),
      (0, r.jsxs)('div', {
        className: _.voiceChannelInfo,
        children: [
          (0, r.jsx)(a.VoiceNormalIcon, {
            size: 'xs',
            color: a.tokens.colors.INTERACTIVE_NORMAL
          }),
          (0, r.jsx)(d.Z, {
            variant: 'text-xs/normal',
            color: 'interactive-normal',
            text: n.name,
            onClick: t.id === f ? void 0 : () => {
              (0, l.X)(t.id), null == E || E();
            }
          })
        ]
      })
    ]
  }),
  (0, r.jsx)(s.Z, {
    users: h,
    guildId: t.id,
    maxUsers: 3,
    size: a.AvatarSizes.SIZE_16,
    disableUsernameTooltip: !0,
    overflowCountVariant: 'text-xs/normal'
  })
]
  });
}