n.d(t, {
  Z: function() {
return M;
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
  p = n(27144),
  m = n(318661),
  I = n(78675),
  T = n(113557),
  g = n(169979),
  S = n(502762),
  A = n(544989),
  N = n(481932),
  v = n(195387),
  O = n(272510),
  R = n(171368),
  C = n(958120),
  y = n(215633),
  D = n(228168),
  L = n(689938),
  b = n(122269);

function M(e) {
  let {
user: t,
currentUser: n,
guildId: M,
channelId: P,
messageId: U,
roleId: w,
closePopout: x,
setPopoutRef: G,
disableUserProfileLink: k = __OVERLAY__,
newAnalyticsLocations: B = []
  } = e, {
analyticsLocations: F
  } = (0, u.ZP)([
...B,
l.Z.BITE_SIZE_PROFILE_POPOUT
  ]), V = (0, f.Q1)({
layout: 'BITE_SIZE_POPOUT',
userId: t.id,
guildId: M,
channelId: P,
messageId: U,
roleId: w
  }), {
pastActivityEnabled: H
  } = (0, p.z)({
location: 'BiteSizeProfilePopout'
  }), Z = (0, a.e7)([E.Z], () => null != M ? E.Z.getGuild(M) : null), Y = (0, a.e7)([_.ZP], () => null != M ? _.ZP.getMember(M, t.id) : null), {
profileStatusEditEnabled: j
  } = (0, h.K)({
location: 'BiteSizeProfilePopout'
  }), [W, K] = i.useState(!1), z = i.useRef(null), q = (0, m.ZP)(t.id, M), Q = (0, o.Z)(z);
  i.useEffect(() => {
null == G || G(null == z ? void 0 : z.current);
  }, [
z,
G
  ]);
  i.useEffect(() => {
H && (0, c.JX)(t.id);
  }, [
t,
H
  ]);
  let X = e => {
null == x || x(), (0, R.openUserProfileModal)({
  sourceAnalyticsLocations: F,
  userId: t.id,
  guildId: M,
  channelId: P,
  messageId: U,
  roleId: w,
  ...e
});
  };
  return (0, r.jsx)(u.Gt, {
value: F,
children: (0, r.jsx)(f.Mt, {
  layout: 'BITE_SIZE_POPOUT',
  userId: t.id,
  guildId: M,
  channelId: P,
  messageId: U,
  roleId: w,
  shouldTrackViewOnMount: null == Y || null != Y.fullProfileLoadedTimestamp,
  children: (0, r.jsxs)(s.Dialog, {
    ref: z,
    'aria-label': t.username,
    children: [
      (0, r.jsxs)(S.Z, {
        user: t,
        displayProfile: q,
        profileType: D.y0.BITE_SIZE,
        children: [
          (0, r.jsxs)(A.Z, {
            profileType: D.y0.BITE_SIZE,
            children: [
              (0, r.jsx)(v.Z, {
                user: t,
                guildId: M,
                channelId: P,
                onClose: x
              }),
              (0, r.jsx)(N.Z, {
                profileType: D.y0.BITE_SIZE,
                user: t
              }),
              t.id !== n.id && (0, r.jsx)(O.Z, {
                user: t,
                guildId: M,
                viewProfileItem: k ? null : (0, r.jsx)(s.MenuItem, {
                  id: 'view-profile',
                  label: L.Z.Messages.VIEW_FULL_PROFILE,
                  action: () => {
                    V({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: F
                    }), X();
                  }
                })
              })
            ]
          }),
          (0, r.jsxs)('header', {
            className: b.header,
            children: [
              (0, r.jsx)(I.Z, {
                user: t,
                displayProfile: q,
                guildId: M,
                profileType: D.y0.BITE_SIZE,
                hasProfileEffect: (null == q ? void 0 : q.profileEffectId) != null
              }),
              (0, r.jsx)(T.Z, {
                location: 'BiteSizeProfilePopout',
                user: t,
                displayProfile: q,
                guildId: M,
                channelId: P,
                profileType: D.y0.BITE_SIZE,
                onOpenProfile: k ? void 0 : X
              }),
              (0, r.jsx)(g.Z, {
                location: 'BiteSizeProfilePopout',
                user: t,
                profileType: D.y0.BITE_SIZE,
                editEnabled: j,
                isReplying: W,
                onReply: e => {
                  K(e);
                },
                onClose: x
              })
            ]
          }),
          (0, r.jsx)(C.Z, {
            user: t,
            currentUser: n,
            displayProfile: q,
            guild: Z,
            isHovering: Q,
            onOpenProfile: k ? void 0 : X,
            channelId: P,
            onClose: x
          }),
          (0, r.jsx)(y.Z, {
            user: t,
            guildId: M,
            channelId: P,
            onClose: x
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