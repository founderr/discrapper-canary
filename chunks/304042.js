n.d(t, {
  Z: function() {
return U;
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
  d = n(318374),
  _ = n(382182),
  E = n(769654),
  f = n(543882),
  h = n(592125),
  p = n(430824),
  m = n(496675),
  I = n(914010),
  T = n(938475),
  g = n(368666),
  S = n(502762),
  A = n(652853),
  N = n(194811),
  v = n(373826),
  O = n(315324),
  R = n(648926),
  C = n(228168),
  y = n(981631),
  D = n(689938),
  L = n(692184),
  b = n(744171),
  M = n(924482),
  P = n(774797);

function U(e) {
  let {
user: t,
currentUser: n,
stream: i,
isHovering: U,
className: w,
onAction: x,
onClose: G
  } = e, {
profileType: k,
theme: B
  } = (0, A.z)(), F = {
[b.fullSize]: k === C.y0.FULL_SIZE,
[L.fullSize]: k === C.y0.FULL_SIZE
  }, V = (0, s.e7)([I.Z], () => I.Z.getGuildId()), H = (0, s.e7)([p.Z], () => p.Z.getGuild(null == i ? void 0 : i.guildId)), Z = (0, s.e7)([h.Z], () => h.Z.getChannel(null == i ? void 0 : i.channelId)), Y = (0, s.Wu)([T.ZP], () => null != Z ? T.ZP.getVoiceStatesForChannel(Z).map(e => {
let {
  user: t
} = e;
return t;
  }) : []), [j, W] = (0, _.wq)(Z), {
url: K,
isLoading: z,
canSeePreview: q
  } = (0, s.cj)([
m.Z,
f.Z
  ], () => {
let e = null != Z && m.Z.canBasicChannel(y.S7T.CONNECT, Z);
return e ? {
  url: f.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: f.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), Q = (0, c.Z)(z ? null : K), X = z || null == K ? Q : K;
  if (null == H || null == Z)
return null;
  let $ = () => t.id === n.id ? null : (0, r.jsx)('div', {
className: a()(L.actions, F),
children: (0, r.jsx)(R.Z, {
  stream: i,
  canWatch: j,
  unavailableReason: W,
  onClick: x,
  onClose: G
})
  });
  return (0, r.jsxs)(S.Z.Overlay, {
className: a()(L.card, w),
children: [
  (0, r.jsxs)('div', {
    className: b.heading,
    children: [
      (0, r.jsx)(N.Z, {
        text: D.Z.Messages.USER_ACTIVITY_STREAMING
      }),
      (0, r.jsx)(g.ZP, {
        size: g.OH.SMALL
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: L.body,
    children: [
      (0, r.jsxs)('div', {
        className: a()(L.content, F),
        children: [
          (() => {
            let e = a()(b.preview, F),
              t = () => {
                l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == G || G();
              };
            return null == X && z ? (0, r.jsx)('div', {
              className: e,
              children: (0, r.jsx)(o.Spinner, {})
            }) : null == X ? (0, r.jsxs)(o.Clickable, {
              className: a()(e, {
                [b.clickable]: j
              }),
              onClick: j ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: B === y.BRd.LIGHT ? P : M
                }),
                k !== C.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
                  variant: 'text-xs/normal',
                  children: q ? D.Z.Messages.STREAM_NO_PREVIEW : D.Z.Messages.STREAM_NO_PERMISSION_CTA
                })
              ]
            }) : (0, r.jsxs)(o.Clickable, {
              className: a()(e, b.overlay, {
                [b.clickable]: j
              }),
              onClick: j ? t : void 0,
              children: [
                (0, r.jsx)('img', {
                  alt: '',
                  src: X,
                  className: b.image
                }),
                k === C.y0.BITE_SIZE && !1 === U && (0, r.jsx)(o.ClydeIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: b.clyde
                })
              ]
            });
          })(),
          k !== C.y0.FULL_SIZE ? null : (0, r.jsxs)('div', {
            className: L.details,
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsxs)('div', {
                    className: L.voiceChannelInfo,
                    children: [
                      (0, r.jsx)(o.VoiceNormalIcon, {
                        size: 'xxs',
                        color: o.tokens.colors.TEXT_NORMAL
                      }),
                      (0, r.jsx)(v.Z, {
                        variant: 'heading-sm/semibold',
                        text: Z.name
                      })
                    ]
                  }),
                  (0, r.jsx)(v.Z, {
                    variant: 'text-xs/normal',
                    text: D.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
                      guildName: H.name
                    }),
                    onClick: H.id === V ? void 0 : () => {
                      (0, E.X)(H.id), null == G || G();
                    }
                  })
                ]
              }),
              (0, r.jsx)(d.Z, {
                users: Y,
                guildId: H.id,
                maxUsers: O.W,
                size: o.AvatarSizes.SIZE_16,
                disableUsernameTooltip: !0,
                overflowCountVariant: 'text-xxs/semibold',
                overflowCountColor: 'text-muted'
              })
            ]
          }),
          k === C.y0.FULL_SIZE && $()
        ]
      }),
      k === C.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)('div', {
            className: L.voiceChannelDivider
          }),
          (0, r.jsx)(O.Z, {
            guild: H,
            channel: Z,
            onClose: G
          })
        ]
      }),
      k !== C.y0.FULL_SIZE && $()
    ]
  })
]
  });
}