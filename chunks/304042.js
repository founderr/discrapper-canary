n.d(t, {
  Z: function() {
return k;
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
  d = n(100527),
  _ = n(906732),
  E = n(318374),
  f = n(382182),
  h = n(769654),
  p = n(543882),
  m = n(592125),
  I = n(430824),
  T = n(496675),
  g = n(914010),
  S = n(938475),
  A = n(368666),
  N = n(502762),
  v = n(652853),
  O = n(194811),
  R = n(373826),
  C = n(315324),
  y = n(582123),
  D = n(648926),
  L = n(290274),
  b = n(228168),
  M = n(981631),
  P = n(689938),
  U = n(692184),
  w = n(744171),
  x = n(924482),
  G = n(774797);

function k(e) {
  let {
user: t,
currentUser: n,
stream: i,
isHovering: k,
className: B,
onAction: F,
onClose: V
  } = e, {
analyticsLocations: H
  } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
profileType: Z,
theme: Y
  } = (0, v.z)(), j = {
[w.fullSize]: Z === b.y0.FULL_SIZE,
[U.fullSize]: Z === b.y0.FULL_SIZE
  }, W = (0, s.e7)([g.Z], () => g.Z.getGuildId()), K = (0, s.e7)([I.Z], () => I.Z.getGuild(null == i ? void 0 : i.guildId)), z = (0, s.e7)([m.Z], () => m.Z.getChannel(null == i ? void 0 : i.channelId)), q = (0, s.Wu)([S.ZP], () => null != z ? S.ZP.getVoiceStatesForChannel(z).map(e => {
let {
  user: t
} = e;
return t;
  }) : []), [Q, X] = (0, f.wq)(z), {
url: $,
isLoading: J,
canSeePreview: ee
  } = (0, s.cj)([
T.Z,
p.Z
  ], () => {
let e = null != z && T.Z.canBasicChannel(M.S7T.CONNECT, z);
return e ? {
  url: p.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
  isLoading: p.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
  canSeePreview: e
} : {
  url: null,
  isLoading: !1,
  canSeePreview: e
};
  }), et = (0, c.Z)(J ? null : $), en = J || null == $ ? et : $;
  if (null == K || null == z)
return null;
  let er = () => {
  let e = a()(w.preview, j),
    t = () => {
      l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == V || V();
    };
  return null == en && J ? (0, r.jsx)('div', {
    className: e,
    children: (0, r.jsx)(o.Spinner, {})
  }) : null == en ? (0, r.jsxs)(o.Clickable, {
    className: a()(e, {
      [w.clickable]: Q
    }),
    onClick: Q ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: Y === M.BRd.LIGHT ? G : x
      }),
      Z !== b.y0.FULL_SIZE && (0, r.jsx)(o.Text, {
        variant: 'text-xs/normal',
        children: ee ? P.Z.Messages.STREAM_NO_PREVIEW : P.Z.Messages.STREAM_NO_PERMISSION_CTA
      })
    ]
  }) : (0, r.jsxs)(o.Clickable, {
    className: a()(e, w.overlay, {
      [w.clickable]: Q
    }),
    onClick: Q ? t : void 0,
    children: [
      (0, r.jsx)('img', {
        alt: '',
        src: en,
        className: w.image
      }),
      Z === b.y0.BITE_SIZE && !1 === k && (0, r.jsx)(o.ClydeIcon, {
        size: 'xs',
        color: 'currentColor',
        className: w.clyde
      })
    ]
  });
},
ei = () => Z !== b.y0.FULL_SIZE ? null : (0, r.jsxs)('div', {
  className: U.details,
  children: [
    (0, r.jsxs)('div', {
      children: [
        (0, r.jsxs)('div', {
          className: U.voiceChannelInfo,
          children: [
            (0, r.jsx)(o.VoiceNormalIcon, {
              size: 'xxs',
              color: o.tokens.colors.TEXT_NORMAL
            }),
            (0, r.jsx)(R.Z, {
              variant: 'heading-sm/semibold',
              text: z.name
            })
          ]
        }),
        (0, r.jsx)(R.Z, {
          variant: 'text-xs/normal',
          text: P.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({
            guildName: K.name
          }),
          onClick: K.id === W ? void 0 : () => {
            (0, h.X)(K.id), null == V || V();
          }
        })
      ]
    }),
    (0, r.jsx)(E.Z, {
      users: q,
      guildId: K.id,
      maxUsers: C.W,
      size: o.AvatarSizes.SIZE_16,
      disableUsernameTooltip: !0,
      overflowCountVariant: 'text-xxs/semibold',
      overflowCountColor: 'text-muted'
    })
  ]
}),
ea = () => Z === b.y0.FULL_SIZE ? null : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: U.voiceChannelDivider
    }),
    (0, r.jsx)(C.Z, {
      guild: K,
      channel: z,
      onClose: V
    })
  ]
}),
es = () => t.id === n.id ? null : (0, r.jsx)('div', {
  className: a()(U.actions, j),
  children: (0, r.jsx)(D.Z, {
    stream: i,
    canWatch: Q,
    unavailableReason: X,
    onClick: F,
    onClose: V
  })
});
  return (0, r.jsx)(_.Gt, {
value: H,
children: (0, r.jsx)(y.Z, {
  user: t,
  onClose: V,
  children: e => {
    let {
      onAutoDismiss: n
    } = e;
    return (0, r.jsxs)(N.Z.Overlay, {
      className: a()(U.card, B),
      children: [
        (0, r.jsx)(O.Z, {
          text: P.Z.Messages.USER_ACTIVITY_STREAMING,
          tags: (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(A.ZP, {
                size: A.OH.SMALL
              }),
              (0, r.jsx)(L.Z, {
                display: 'live',
                user: t,
                onRequestOpen: n
              })
            ]
          })
        }),
        (0, r.jsxs)('div', {
          className: U.body,
          children: [
            (0, r.jsxs)('div', {
              className: a()(U.content, j),
              children: [
                er(),
                ei(),
                Z === b.y0.FULL_SIZE && es()
              ]
            }),
            ea(),
            Z !== b.y0.FULL_SIZE && es()
          ]
        })
      ]
    });
  }
})
  });
}