n.d(t, {
  u: function() {
    return H
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(91192),
  r = n(442837),
  a = n(433517),
  o = n(481060),
  u = n(339149),
  c = n(327943),
  d = n(864682),
  h = n(67212),
  p = n(770471),
  g = n(292584),
  m = n(835865),
  C = n(456541),
  E = n(143614),
  f = n(544803),
  _ = n(899740),
  I = n(155409),
  N = n(699516),
  Z = n(944486),
  S = n(594174),
  x = n(295226),
  L = n(774343),
  T = n(417363),
  v = n(941128),
  A = n(436088),
  M = n(880080),
  R = n(780570),
  O = n(557177),
  P = n(278464),
  b = n(682662),
  j = n(662146),
  y = n(674552),
  D = n(981631),
  U = n(474936),
  G = n(871465),
  w = n(689938),
  k = n(496540);
let B = {
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

function V(e) {
  let {
    selected: t,
    user: n,
    badge: h,
    link: g,
    showProgressBadge: m
  } = e, _ = (0, r.e7)([c.Z], () => c.Z.isEditorOpen), [N, Z] = i.useState(!1), [S, x] = i.useState(!1), [L, T] = i.useState(null), [v, R] = i.useState(0), [P, U] = i.useState(!1), {
    canViewBroadcasts: V
  } = p.Z.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), H = (0, E.Z)(), F = H.length > 0 && V;
  (0, C.P)();
  let W = (0, s.Ie)("home"),
    Y = () => {
      T(null), R(0), clearTimeout(L)
    };
  if (null == n) return null;
  let z = w.Z.Messages.DIRECT_MESSAGES;
  S && (z = a.K.get(D.wli) ? w.Z.Messages.DISCODO_ENABLED : w.Z.Messages.DISCODO_DISABLED), H.length > 0 && p.Z.trackExposure({
    location: "home_button"
  });
  let K = null;
  !t && m ? K = (0, l.jsx)(u.Z, {
    className: k.downloadProgress,
    determineOwnVisibility: !1
  }) : F && (K = (0, l.jsx)(A.Z, {
    className: k.broadcastBadge
  }));
  let q = t || N || _,
    Q = (0, l.jsx)(o.BlobMask, {
      highlight: F,
      selected: q,
      lowerBadge: h > 0 ? (0, y.Ne)(h) : null,
      upperBadge: K,
      lowerBadgeSize: {
        width: (0, o.getBadgeWidthForValue)(h)
      },
      children: (0, l.jsx)(o.NavItem, {
        onMouseEnter: () => Z(!0),
        onMouseLeave: () => Z(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), T(setTimeout(Y, 500)), R(v + 1), 15 === v)) {
            Y();
            let e = !a.K.get(D.wli);
            a.K.set(D.wli, e), e && a.K.set(G.O5, !0), e ? (0, O.GN)("discodo") : (0, O.GN)("user_leave"), x(!0), setTimeout(() => {
              x(!1)
            }, 1e3)
          }
        },
        selected: q,
        ariaLabel: w.Z.Messages.DIRECT_MESSAGES,
        ...W,
        to: {
          pathname: g,
          state: {
            analyticsSource: {
              page: D.ZY5.GUILD_CHANNEL,
              section: D.jXE.NAVIGATION,
              object: D.qAy.BUTTON_HOME
            }
          }
        },
        children: (0, l.jsx)(d.Z, {})
      })
    }),
    J = F ? (0, l.jsx)(o.Popout, {
      position: "right",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(f.Z, {
          closePopout: t
        })
      },
      onRequestClose: () => {
        U(!1)
      },
      spacing: 8,
      shouldShow: P,
      children: () => Q
    }) : null;
  return (0, l.jsx)("div", {
    className: k.tutorialContainer,
    onMouseEnter: () => {
      U(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        U(!1)
      }, 250)
    },
    children: (0, l.jsx)(I.Z, {
      inlineSpecs: B,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(b.H, {
        children: [(0, l.jsx)(M.Z, {
          selected: t,
          hovered: N,
          className: k.pill
        }), null != J ? J : (0, l.jsx)(j.Z, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: z,
          selected: t,
          children: Q
        })]
      })
    })
  })
}

function H() {
  let e = (0, P.n)(),
    t = (0, r.e7)([v.Z, T.Z], () => {
      let e = (0, u.E)(v.Z.activeItems, T.Z),
        {
          total: t,
          progress: n
        } = R.lK(e),
        l = R.xI(n, t);
      return l > 0 && l < 100
    }),
    n = (0, r.e7)([g.Z], () => g.Z.getUserIdsToValidate()),
    s = (0, r.e7)([N.Z], () => N.Z.getPendingCount()),
    a = Object.keys(U.nG),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: c
    } = (0, r.cj)([x.Z], () => ({
      unviewedTrialCount: x.Z.getUnacknowledgedOffers(a).length,
      unviewedDiscountCount: x.Z.getUnacknowledgedDiscountOffers().length
    })),
    d = o + c,
    p = (0, r.e7)([S.default], () => S.default.getCurrentUser()),
    C = (0, _.T)(),
    E = s + d + C,
    f = E === d && d > 0 && s + C === 0;
  i.useEffect(() => {
    n.length > 0 && (0, h.E7)()
  }, [n]), (0, m.Z)();
  let I = L.Z.getHomeLink();
  return f && (I = D.Z5c.APPLICATION_STORE), (0, l.jsx)(V, {
    selected: e,
    user: p,
    selectedChannelId: Z.Z.getChannelId(D.ME),
    badge: E,
    link: I,
    showProgressBadge: t
  })
}