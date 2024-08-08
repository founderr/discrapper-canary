n.d(t, {
  u: function() {
return W;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(91192),
  a = n(442837),
  s = n(433517),
  o = n(481060),
  c = n(339149),
  u = n(327943),
  d = n(864682),
  h = n(67212),
  p = n(770471),
  _ = n(292584),
  f = n(835865),
  m = n(456541),
  g = n(143614),
  C = n(544803),
  I = n(899740),
  E = n(557494),
  N = n(718107),
  x = n(159631),
  S = n(699516),
  v = n(944486),
  Z = n(594174),
  T = n(295226),
  L = n(774343),
  A = n(417363),
  b = n(941128),
  M = n(436088),
  R = n(780570),
  O = n(557177),
  P = n(278464),
  y = n(276952),
  j = n(682662),
  D = n(662146),
  w = n(674552),
  U = n(981631),
  G = n(474936),
  k = n(871465),
  B = n(689938),
  H = n(297627);
let V = {
  origin: {
x: -16,
y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
x: 0,
y: 0
  }
};

function F(e) {
  let {
selected: t,
user: n,
badge: h,
link: _,
showProgressBadge: f
  } = e, I = (0, a.e7)([u.Z], () => u.Z.isEditorOpen), [S, v] = l.useState(!1), [Z, T] = l.useState(!1), [L, A] = l.useState(null), [b, R] = l.useState(0), [P, G] = l.useState(!1), {
canViewBroadcasts: F
  } = p.Z.useExperiment({
location: 'home_button_no_track'
  }, {
autoTrackExposure: !1
  }), W = (0, g.Z)(), z = W.length > 0 && F;
  (0, m.P)();
  let {
statusReactReplyEnabled: Y,
avatarReactReplyEnabled: K
  } = (0, N.t)({
location: 'HomeButtons',
autoTrackExposure: !1
  }), q = (0, r.Ie)('home'), Q = () => {
A(null), R(0), clearTimeout(L);
  };
  if (null == n)
return null;
  let J = B.Z.Messages.DIRECT_MESSAGES;
  Z && (J = s.K.get(U.wli) ? B.Z.Messages.DISCODO_ENABLED : B.Z.Messages.DISCODO_DISABLED), W.length > 0 && p.Z.trackExposure({
location: 'home_button'
  });
  let X = null;
  !t && f ? X = (0, i.jsx)(c.Z, {
className: H.downloadProgress,
determineOwnVisibility: !1
  }) : z && (X = (0, i.jsx)(M.Z, {
className: H.broadcastBadge
  }));
  let $ = t || S || I,
ee = (0, i.jsx)(o.BlobMask, {
  highlight: z,
  selected: $,
  lowerBadge: h > 0 ? (0, w.Ne)(h) : null,
  upperBadge: X,
  lowerBadgeSize: {
    width: (0, o.getBadgeWidthForValue)(h)
  },
  children: (0, i.jsx)(o.NavItem, {
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    onClick: () => {
      if (!__OVERLAY__ && (null != L && clearTimeout(L), A(setTimeout(Q, 500)), R(b + 1), 15 === b)) {
        Q();
        let e = !s.K.get(U.wli);
        s.K.set(U.wli, e), e && s.K.set(k.O5, !0), e ? (0, O.GN)('discodo') : (0, O.GN)('user_leave'), T(!0), setTimeout(() => {
          T(!1);
        }, 1000);
      }
    },
    selected: $,
    ariaLabel: B.Z.Messages.DIRECT_MESSAGES,
    ...q,
    to: {
      pathname: _,
      state: {
        analyticsSource: {
          page: U.ZY5.GUILD_CHANNEL,
          section: U.jXE.NAVIGATION,
          object: U.qAy.BUTTON_HOME
        }
      }
    },
    children: (0, i.jsx)(d.Z, {})
  })
}),
et = z ? (0, i.jsx)(o.Popout, {
  position: 'right',
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(C.Z, {
      closePopout: t
    });
  },
  onRequestClose: () => {
    G(!1);
  },
  spacing: 8,
  shouldShow: P,
  children: () => ee
}) : null;
  return (0, i.jsx)('div', {
className: H.tutorialContainer,
onMouseEnter: () => {
  G(!0);
},
onMouseLeave: () => {
  setTimeout(() => {
    G(!1);
  }, 250);
},
children: (0, i.jsx)(E.Z, {
  inlineSpecs: V,
  tutorialId: 'friends-list',
  position: 'right',
  children: (0, i.jsxs)(j.H, {
    children: [
      (0, i.jsx)(y.Z, {
        selected: t,
        hovered: S,
        className: H.pill
      }),
      null != et ? et : (0, i.jsx)(D.Z, {
        color: o.Tooltip.Colors.PRIMARY,
        hideOnClick: !0,
        text: J,
        selected: t,
        children: Y || K ? (0, i.jsx)(x.M, {
          children: ee
        }) : ee
      })
    ]
  })
})
  });
}

function W() {
  let e = (0, P.n)(),
t = (0, a.e7)([
  b.Z,
  A.Z
], () => {
  let e = (0, c.E)(b.Z.activeItems, A.Z),
    {
      total: t,
      progress: n
    } = R.lK(e),
    i = R.xI(n, t);
  return i > 0 && i < 100;
}),
n = (0, a.e7)([_.Z], () => _.Z.getUserIdsToValidate()),
r = (0, a.e7)([S.Z], () => S.Z.getPendingCount()),
s = Object.keys(G.nG),
{
  unviewedTrialCount: o,
  unviewedDiscountCount: u
} = (0, a.cj)([T.Z], () => ({
  unviewedTrialCount: T.Z.getUnacknowledgedOffers(s).length,
  unviewedDiscountCount: T.Z.getUnacknowledgedDiscountOffers().length
})),
d = o + u,
p = (0, a.e7)([Z.default], () => Z.default.getCurrentUser()),
m = (0, I.T)(),
g = r + d + m,
C = g === d && d > 0 && r + m === 0;
  l.useEffect(() => {
n.length > 0 && (0, h.E7)();
  }, [n]), (0, f.Z)();
  let E = L.Z.getHomeLink();
  return C && (E = U.Z5c.APPLICATION_STORE), (0, i.jsx)(F, {
selected: e,
user: p,
selectedChannelId: v.Z.getChannelId(U.ME),
badge: g,
link: E,
showProgressBadge: t
  });
}