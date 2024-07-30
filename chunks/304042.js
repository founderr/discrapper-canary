n.d(t, {
  Z: function() {
return M;
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
  S = n(194811),
  A = n(373826),
  N = n(315324),
  v = n(648926),
  O = n(228168),
  R = n(981631),
  C = n(689938),
  y = n(692184),
  D = n(744171),
  L = n(924482),
  b = n(774797);

function M(e) {
  let {
user: t,
currentUser: n,
stream: i,
isHovering: M,
className: P,
onAction: U,
onClose: w
  } = e, {
profileType: x,
theme: G
  } = (0, g.z)(), k = {
[D.fullSize]: x === O.y0.FULL_SIZE,
[y.fullSize]: x === O.y0.FULL_SIZE
  }, B = (0, s.e7)([m.Z], () => m.Z.getGuildId()), F = (0, s.e7)([h.Z], () => h.Z.getGuild(null == i ? void 0 : i.guildId)), V = (0, s.e7)([f.Z], () => f.Z.getChannel(null == i ? void 0 : i.channelId)), [H, Z] = (0, d.wq)(V), {
url: Y,
isLoading: j,
canSeePreview: W
  } = (0, s.cj)([
p.Z,
E.Z
  ], () => {
let e = null != V && p.Z.canBasicChannel(R.S7T.CONNECT, V);
return e ? {
  url: E.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: E.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), K = (0, c.Z)(j ? null : Y), z = j || null == Y ? K : Y;
  if (null == F || null == V)
return null;
  let q = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(y.actions, k),
children: (0, r.jsx)(v.Z, {
  stream: i,
  canWatch: H,
  unavailableReason: Z,
  onClick: U,
  onClose: w
})
  });
  return (0, r.jsxs)(T.Z.Overlay, {
className: a()(y.card, P),
children: [
  (0, r.jsxs)('div', {
    className: D.heading,
    children: [
      (0, r.jsx)(S.Z, {
        text: C.Z.Messages.USER_ACTIVITY_STREAMING
      }),
      (0, r.jsx)(I.ZP, {
        size: I.OH.SMALL
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: y.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(y.content, k),
        children: [
          (() => {
            let e = a()(D.preview, k),
              t = () => {
                l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == w || w();
              };
            return null == z && j ? (0, r.jsx)('div', {
              className: e,
              children: (0, r.jsx)(o.Spinner, {})
            }) : null == z ? (0, r.jsxs)(o.Clickable, {
              className: a()(e, {
                [D.clickable]: H
              }),
              onClick: H ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: G === R.BRd.LIGHT ? b : L
                }),
                x !== O.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
                  variant: 'text-xs/normal',
                  children: W ? C.Z.Messages.STREAM_NO_PREVIEW : C.Z.Messages.STREAM_NO_PERMISSION_CTA
                })
              ]
            }) : (0, r.jsxs)(o.Clickable, {
              className: a()(e, D.overlay, {
                [D.clickable]: H
              }),
              onClick: H ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: z,
                  className: D.image
                }),
                x === O.y0.BITE_SIZE && !1 === M && (0, r.jsx)(o.ClydeIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: D.clyde
                })
              ]
            });
          })(),
          x !== O.y0.FULL_SIZE ? null : (0, r.jsx)('div', {
            className: y.details,
            children: (0, r.jsxs)('div', {
              children: [
                (0, r.jsxs)('div', {
                  className: y.voiceChannelInfo,
                  children: [
                    (0, r.jsx)(o.VoiceNormalIcon, {
                      size: 'xxs',
                      color: o.tokens.colors.TEXT_NORMAL
                    }),
                    (0, r.jsx)(A.Z, {
                      variant: 'heading-sm/semibold',
                      text: V.name
                    })
                  ]
                }),
                (0, r.jsx)(A.Z, {
                  variant: 'text-xs/normal',
                  text: C.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
                    guildName: F.name
                  }),
                  onClick: F.id === B ? void 0 : () => {
                    (0, _.X)(F.id), null == w || w();
                  }
                })
              ]
            })
          }),
          x === O.y0.FULL_SIZE && q()
        ]
      }),
      x === O.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: y.voiceChannelDivider
          }),
          (0, r.jsx)(N.Z, {
            guild: F,
            channel: V,
            onClose: w
          })
        ]
      }),
      x !== O.y0.FULL_SIZE && q()
    ]
  })
]
  });
}