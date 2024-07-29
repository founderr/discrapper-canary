n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(287734),
  u = n(872810),
  c = n(110924),
  d = n(382182),
  _ = n(769654),
  E = n(543882),
  f = n(592125),
  h = n(430824),
  p = n(496675),
  m = n(914010),
  I = n(368666),
  T = n(502762),
  g = n(652853),
  S = n(373826),
  A = n(315324),
  N = n(648926),
  v = n(228168),
  O = n(981631),
  R = n(689938),
  C = n(692184),
  y = n(744171),
  D = n(924482),
  L = n(774797);

function b(e) {
  let {
user: t,
currentUser: n,
stream: i,
onAction: b,
onClose: M
  } = e, {
profileType: P,
theme: U
  } = (0, g.z)(), w = {
[y.fullSize]: P === v.y0.FULL_SIZE,
[C.fullSize]: P === v.y0.FULL_SIZE
  }, x = (0, s.e7)([m.Z], () => m.Z.getGuildId()), G = (0, s.e7)([h.Z], () => h.Z.getGuild(null == i ? void 0 : i.guildId)), k = (0, s.e7)([f.Z], () => f.Z.getChannel(null == i ? void 0 : i.channelId)), [B, F] = (0, d.wq)(k), {
url: V,
isLoading: H,
canSeePreview: Z
  } = (0, s.cj)([
p.Z,
E.Z
  ], () => {
let e = null != k && p.Z.canBasicChannel(O.S7T.CONNECT, k);
return e ? {
  url: E.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: E.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), Y = (0, c.Z)(H ? null : V), j = H || null == V ? Y : V;
  if (null == G || null == k)
return null;
  let W = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(C.actions, w),
children: (0, r.jsx)(N.Z, {
  stream: i,
  canWatch: B,
  unavailableReason: F,
  onClick: b,
  onClose: M
})
  });
  return (0, r.jsxs)(T.Z.Overlay, {
className: C.card,
children: [
  (0, r.jsxs)('div', {
    className: y.heading,
    children: [
      (0, r.jsx)(o.Heading, {
        variant: 'text-xs/medium',
        color: 'header-primary',
        className: C.header,
        children: R.Z.Messages.USER_ACTIVITY_STREAMING
      }),
      (0, r.jsx)(I.ZP, {
        size: I.OH.SMALL
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: C.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(C.content, w),
        children: [
          (() => {
            let e = a()(y.preview, w),
              t = () => {
                l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == M || M();
              };
            return null == j && H ? (0, r.jsx)('div', {
              className: e,
              children: (0, r.jsx)(o.Spinner, {})
            }) : null == j ? (0, r.jsxs)(o.Clickable, {
              className: a()(e, {
                [y.clickable]: B
              }),
              onClick: B ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: U === O.BRd.LIGHT ? L : D,
                  className: y.image
                }),
                P !== v.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
                  variant: 'text-xs/normal',
                  children: Z ? R.Z.Messages.STREAM_NO_PREVIEW : R.Z.Messages.STREAM_NO_PERMISSION_CTA
                })
              ]
            }) : (0, r.jsxs)(o.Clickable, {
              className: a()(e, y.overlay, {
                [y.clickable]: B
              }),
              onClick: B ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: j,
                  className: y.image
                }),
                P === v.y0.BITE_SIZE && (0, r.jsx)(o.ClydeIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: y.clyde
                })
              ]
            });
          })(),
          P !== v.y0.FULL_SIZE ? null : (0, r.jsx)('div', {
            className: C.details,
            children: (0, r.jsxs)('div', {
              children: [
                (0, r.jsxs)('div', {
                  className: C.voiceChannelInfo,
                  children: [
                    (0, r.jsx)(o.VoiceNormalIcon, {
                      size: 'xxs',
                      color: o.tokens.colors.TEXT_NORMAL
                    }),
                    (0, r.jsx)(S.Z, {
                      variant: 'heading-sm/semibold',
                      text: k.name
                    })
                  ]
                }),
                (0, r.jsx)(S.Z, {
                  variant: 'text-xs/normal',
                  text: R.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
                    guildName: G.name
                  }),
                  onClick: G.id === x ? void 0 : () => {
                    (0, _.X)(G.id), null == M || M();
                  }
                })
              ]
            })
          }),
          P === v.y0.FULL_SIZE && W()
        ]
      }),
      P === v.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: C.voiceChannelDivider
          }),
          (0, r.jsx)(A.Z, {
            guild: G,
            channel: k,
            onClose: M
          })
        ]
      }),
      P !== v.y0.FULL_SIZE && W()
    ]
  })
]
  });
}