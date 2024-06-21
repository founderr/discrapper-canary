n.d(t, {
  Z: function() {
    return el
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(143927),
  o = n(91192),
  c = n(873546),
  u = n(442837),
  d = n(704215),
  E = n(952265),
  h = n(481060),
  _ = n(493683),
  I = n(348600),
  m = n(257968),
  g = n(367907),
  p = n(770471),
  N = n(158631),
  T = n(143614),
  C = n(463119),
  S = n(377171),
  A = n(243778),
  f = n(922409),
  Z = n(899740),
  v = n(28476),
  L = n(880257),
  O = n(631885),
  R = n(457396),
  x = n(51596),
  M = n(905423),
  P = n(155409),
  D = n(210887),
  b = n(695346),
  y = n(283595),
  j = n(699516),
  U = n(923834),
  G = n(55563),
  w = n(774343),
  k = n(517802),
  B = n(436088),
  H = n(814225),
  V = n(515753),
  F = n(831218),
  Y = n(339149),
  z = n(981631),
  W = n(689938),
  K = n(422009);
let q = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.JA)("friends"), l = (0, u.e7)([j.Z], () => j.Z.getPendingCount()), a = (0, T.Z)(), {
      canViewBroadcasts: r
    } = p.Z.useExperiment({
      location: "friends_tab_no_track"
    }), c = (0, N.ZP)();
    return (0, i.jsxs)(V.Qj, {
      selected: t,
      route: z.Z5c.FRIENDS,
      icon: h.FriendsIcon,
      text: W.Z.Messages.FRIENDS,
      onClick: () => {
        g.ZP.trackWithMetadata(z.rMx.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: a.length,
          friends_tab_clicked: !0,
          is_broadcasting: c
        })
      },
      ...n,
      ...s,
      children: [a.length > 0 && r && (0, i.jsx)(h.TextBadge, {
        color: S.Z.BG_BRAND,
        text: (0, i.jsxs)("div", {
          className: K.broadcastingBadge,
          children: [(0, i.jsx)(B.Z, {
            className: K.broadcastingIcon
          }), (0, i.jsx)(h.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: a.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, i.jsx)(h.NumberBadge, {
        count: l
      }) : null]
    })
  },
  Q = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.JA)("library");
    return (0, i.jsx)(V.Qj, {
      selected: t,
      route: z.Z5c.APPLICATION_LIBRARY,
      icon: h.InventoryIcon,
      text: W.Z.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, i.jsx)(Y.Z, {
        className: a()(K.downloadProgressCircle, {
          [K.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  X = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.JA)("activities"), c = (0, u.e7)([D.Z], () => D.Z.getState().theme), d = (0, m.p)();
    return (0, i.jsx)(V.Qj, {
      selected: t,
      route: n,
      icon: (0, h.makeIconCompat)(k.Z),
      iconClassName: a()(K.activitiesBirthdayIcon, {
        [K.activitiesBirthdayIconLight]: "light" === c
      }),
      text: W.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: d > 0 ? (0, i.jsx)(h.NumberBadge, {
        count: d
      }) : null
    })
  },
  J = () => {
    let e = (0, Z.q)(),
      t = (0, Z.T)();
    return e > 0 ? (0, i.jsx)(h.NumberBadge, {
      count: e,
      color: 0 === t ? S.Z.ICON_MUTED : void 0
    }) : null
  },
  $ = e => {
    let {
      selected: t
    } = e, n = (0, o.JA)("messageRequests"), {
      channelId: s
    } = (0, f._)();
    if (!(0, v.a)()) return null;
    let l = null == s ? void 0 : () => _.Z.preload(z.ME, s);
    return (0, i.jsx)(V.Qj, {
      selected: t,
      route: z.Z5c.MESSAGE_REQUESTS,
      icon: h.EnvelopeIcon,
      text: W.Z.Messages.MESSAGE_REQUESTS,
      onClick: l,
      ...n,
      children: (0, i.jsx)(J, {})
    })
  },
  ee = e => {
    let {
      selected: t
    } = e, n = W.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.JA)("family-center"), a = b.Ex.useSetting(), r = (0, L.Z)(), [c, u] = s.useState(!0);
    return a && r ? (0, i.jsx)(V.Qj, {
      selected: t,
      route: z.Z5c.FAMILY_CENTER,
      icon: h.GroupIcon,
      text: n,
      onMouseEnter: () => {
        u(!0)
      },
      onMouseLeave: () => {
        u(!1)
      },
      interactiveClassName: K.familyCenterLinkButton,
      ...l,
      children: (0, i.jsx)(et, {
        isParentHovered: c
      })
    }) : null
  },
  et = e => {
    let {
      isParentHovered: t
    } = e, s = (0, O.gU)();
    return t ? (0, i.jsx)(V.PZ, {
      onClick: () => {
        (0, E.ZD)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("44153")]).then(n.bind(n, 760949));
          return t => (0, i.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": W.Z.Messages.CLOSE
    }) : s > 0 ? (0, i.jsx)("div", {
      className: K.familyCenterPendingBadge,
      children: (0, i.jsx)(h.NumberBadge, {
        count: s
      })
    }) : (0, i.jsx)(A.Z, {
      contentTypes: [d.z.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === d.z.FAMILY_CENTER_NEW_BADGE ? (0, i.jsx)(h.TextBadge, {
          text: W.Z.Messages.NEW,
          color: S.Z.BG_BRAND
        }) : null
      }
    })
  },
  en = () => (0, x.$Z)("DM_SEARCH");

function ei(e) {
  switch (e) {
    case z.Z5c.APPLICATION_LIBRARY:
      return z.ZY5.LIBRARY;
    case z.Z5c.FRIENDS:
      return z.ZY5.FRIENDS_LIST;
    case z.Z5c.COLLECTIBLES_SHOP:
      return z.ZY5.COLLECTIBLES_SHOP
  }
  if (e.startsWith(z.Z5c.APPLICATION_STORE)) return e === z.Z5c.APPLICATION_STORE ? z.ZY5.STORE_DIRECTORY_HOME : e.startsWith(z.Z5c.APPLICATION_STORE) ? z.ZY5.STORE_DIRECTORY_BROWSE : z.ZY5.STORE_LISTING;
  return z.ZY5.DM_CHANNEL
}
let es = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [u, d] = (0, M.Z)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.Z), {
    enabled: E
  } = I.Z.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, i.jsxs)("nav", {
    className: K.privateChannels,
    "aria-label": W.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, i.jsx)(P.Z, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, i.jsx)("div", {
        className: a()(K.searchBar, {
          [K.themedHeaderMobile]: c.tq
        }),
        children: (0, i.jsx)("button", {
          type: "button",
          className: a()(K.searchBarComponent, {
            [K.themedSearchBarMobile]: c.tq
          }),
          onClick: en,
          children: W.Z.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, i.jsxs)(F.Z, {
      ...e,
      version: d,
      selectedChannelId: u,
      showDMHeader: !0,
      children: [(0, i.jsx)(q, {
        selected: null != d ? d === z.Z5c.FRIENDS : s === z.Z5c.FRIENDS
      }, "friends"), n && t ? (0, i.jsx)(Q, {
        selected: null == d ? null != s && s.startsWith(z.Z5c.APPLICATION_LIBRARY) : d.startsWith(z.Z5c.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === z.Z5c.APPLICATION_LIBRARY
      }, "library") : null, (0, i.jsx)(R.g, {
        selected: null == d ? o : d.startsWith(z.Z5c.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(z.Z5c.ACTIVITIES) || location.pathname.startsWith(z.Z5c.APPLICATION_STORE) ? z.Z5c.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: ei(s),
            section: z.jXE.NAVIGATION,
            object: z.qAy.NAVIGATION_LINK
          }
        }
      }, "premium"), E ? (0, i.jsx)(X, {
        selected: null != d && d.startsWith(z.Z5c.ACTIVITIES) || null != s && s.startsWith(z.Z5c.ACTIVITIES),
        route: z.Z5c.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: ei(s),
            section: z.jXE.NAVIGATION,
            object: z.qAy.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, i.jsx)($, {
        selected: null == d ? null != s && s.startsWith(z.Z5c.MESSAGE_REQUESTS) : d === z.Z5c.MESSAGE_REQUESTS
      }, "message-requests"), (0, i.jsx)(C.i, {
        selected: d === z.Z5c.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(z.Z5c.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: ei(s),
            section: z.jXE.NAVIGATION,
            object: z.qAy.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, i.jsx)(ee, {
        selected: null != s && s.startsWith(z.Z5c.FAMILY_CENTER) || null != d && d.startsWith(z.Z5c.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function el() {
  let e = (0, u.e7)([w.Z], () => w.Z.getHomeLink()),
    t = (0, u.e7)([G.Z], () => {
      if (e === z.Z5c.APPLICATION_STORE) return !0;
      let t = (0, H.ZK)(e);
      if (null != t) {
        var n, i;
        return null !== (i = null === (n = G.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i
      }
      return !1
    }, [e]),
    n = !b.bm.useSetting(),
    {
      theme: s
    } = (0, u.cj)([D.Z], () => ({
      theme: D.Z.theme
    })),
    l = (0, u.e7)([y.Z], () => y.Z.hasLibraryApplication()),
    a = (0, u.e7)([U.Z], () => U.Z.getCurrentPath());
  return (0, i.jsx)(es, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: a,
    homeLink: e,
    premiumTabSelected: t
  })
}