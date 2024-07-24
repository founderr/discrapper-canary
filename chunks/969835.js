n.d(t, {
  Z: function() {
return P;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(727637),
  l = n(100527),
  u = n(906732),
  c = n(564990),
  d = n(680295),
  _ = n(271383),
  E = n(430824),
  f = n(785717),
  h = n(481046),
  p = n(718107),
  m = n(27144),
  I = n(318661),
  T = n(78675),
  g = n(113557),
  S = n(438163),
  A = n(502762),
  N = n(544989),
  v = n(481932),
  O = n(195387),
  R = n(272510),
  C = n(171368),
  y = n(958120),
  D = n(215633),
  L = n(228168),
  b = n(689938),
  M = n(122269);

function P(e) {
  let {
user: t,
currentUser: n,
guildId: P,
channelId: U,
messageId: w,
roleId: x,
closePopout: G,
setPopoutRef: k,
disableUserProfileLink: B = __OVERLAY__,
newAnalyticsLocations: F = []
  } = e, {
analyticsLocations: V
  } = (0, u.ZP)([
...F,
l.Z.BITE_SIZE_PROFILE_POPOUT
  ]), H = (0, f.Q1)({
layout: 'BITE_SIZE_POPOUT',
userId: t.id,
guildId: P,
channelId: U,
messageId: w,
roleId: x
  }), {
pastActivityEnabled: Z
  } = (0, m.z)({
location: 'BiteSizeProfilePopout'
  }), Y = (0, a.e7)([E.Z], () => null != P ? E.Z.getGuild(P) : null), j = (0, a.e7)([_.ZP], () => null != P ? _.ZP.getMember(P, t.id) : null), {
profileStatusEditEnabled: W
  } = (0, h.K)({
location: 'BiteSizeProfilePopout'
  }), {
statusReactReplyEnabled: K
  } = (0, p.t)({
location: 'BiteSizeProfilePopout'
  }), z = i.useRef(null), q = (0, I.ZP)(t.id, P), Q = (0, o.Z)(z);
  i.useEffect(() => {
null == k || k(null == z ? void 0 : z.current);
  }, [
z,
k
  ]), i.useEffect(() => {
Z && (0, c.JX)(t.id);
  }, [
t,
Z
  ]);
  let X = e => {
null == G || G(), (0, C.openUserProfileModal)({
  sourceAnalyticsLocations: V,
  userId: t.id,
  guildId: P,
  channelId: U,
  messageId: w,
  roleId: x,
  ...e
});
  };
  return (0, r.jsx)(u.Gt, {
value: V,
children: (0, r.jsx)(f.Mt, {
  layout: 'BITE_SIZE_POPOUT',
  userId: t.id,
  guildId: P,
  channelId: U,
  messageId: w,
  roleId: x,
  shouldTrackViewOnMount: null == j || null != j.fullProfileLoadedTimestamp,
  children: (0, r.jsxs)(s.Dialog, {
    ref: z,
    'aria-label': t.username,
    children: [
      (0, r.jsxs)(A.Z, {
        user: t,
        displayProfile: q,
        profileType: L.y0.BITE_SIZE,
        children: [
          (0, r.jsxs)(N.Z, {
            profileType: L.y0.BITE_SIZE,
            children: [
              (0, r.jsx)(O.Z, {
                user: t,
                guildId: P,
                channelId: U,
                onClose: G
              }),
              (0, r.jsx)(v.Z, {
                profileType: L.y0.BITE_SIZE,
                user: t
              }),
              t.id !== n.id && (0, r.jsx)(R.Z, {
                user: t,
                guildId: P,
                viewProfileItem: B ? null : (0, r.jsx)(s.MenuItem, {
                  id: 'view-profile',
                  label: b.Z.Messages.VIEW_FULL_PROFILE,
                  action: () => {
                    H({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: V
                    }), X();
                  }
                })
              })
            ]
          }),
          (0, r.jsxs)('header', {
            className: M.header,
            children: [
              (0, r.jsx)(T.Z, {
                user: t,
                displayProfile: q,
                guildId: P,
                profileType: L.y0.BITE_SIZE,
                hasProfileEffect: (null == q ? void 0 : q.profileEffectId) != null
              }),
              (0, r.jsx)(g.Z, {
                location: 'BiteSizeProfilePopout',
                user: t,
                displayProfile: q,
                guildId: P,
                channelId: U,
                profileType: L.y0.BITE_SIZE,
                onOpenProfile: B ? void 0 : X
              }),
              (0, r.jsx)(S.Z, {
                user: t,
                profileType: L.y0.BITE_SIZE,
                editEnabled: W,
                reactReplyEnabled: K,
                onClose: G
              })
            ]
          }),
          (0, r.jsx)(y.Z, {
            user: t,
            currentUser: n,
            displayProfile: q,
            guild: Y,
            isHovering: Q,
            onOpenProfile: B ? void 0 : X,
            channelId: U,
            onClose: G
          }),
          (0, r.jsx)(D.Z, {
            user: t,
            guildId: P,
            channelId: U,
            onClose: G
          })
        ]
      }),
      (null == q ? void 0 : q.profileEffectId) != null && (0, r.jsx)(d.Z, {
        profileEffectId: null == q ? void 0 : q.profileEffectId,
        isHovering: Q
      })
    ]
  })
})
  });
}