"use strict";
n.r(t), n.d(t, {
  DiscoverSearchResultPlaceholder: function() {
    return v
  },
  default: function() {
    return O
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("272030"),
  u = n("685665"),
  d = n("407063"),
  c = n("141254"),
  f = n("116616"),
  E = n("580357"),
  h = n("587974"),
  _ = n("315102"),
  C = n("794818"),
  I = n("378662"),
  S = n("574921"),
  p = n("311092"),
  m = n("613088"),
  T = n("49111"),
  g = n("782340"),
  A = n("750408"),
  N = n("68422"),
  R = n("578817");
let v = () => (0, a.jsx)("div", {
  className: A.placeholder
});
var O = e => {
  var t;
  let {
    guild: l,
    theme: v,
    onView: O,
    onTagClick: L
  } = e, {
    id: M,
    discoverySplash: P,
    icon: D,
    name: y,
    description: x,
    presenceCount: b,
    memberCount: U,
    keywords: G
  } = l, [j, w] = s.useState(!1), [k, B] = s.useState(!1), {
    analyticsLocations: F
  } = (0, u.default)(), H = _.default.getGuildDiscoverySplashURL({
    id: M,
    splash: P,
    size: 240 * (0, d.getDevicePixelRatio)()
  }), V = null != H ? H : function(e) {
    switch (e) {
      case T.ThemeTypes.DARK:
        return N;
      case T.ThemeTypes.LIGHT:
        return R
    }
  }(v), Y = null !== (t = _.default.getGuildIconURL({
    id: M,
    icon: D,
    size: 32
  })) && void 0 !== t ? t : void 0, W = async e => {
    let {
      className: t
    } = e.target;
    if (!t.includes("Menu")) {
      if ((0, c.isAtGuildCapAndNonPremium)()) {
        (0, f.default)({
          analyticsSource: {
            page: T.AnalyticsPages.GUILD_DISCOVERY
          },
          analyticsLocation: {
            page: T.AnalyticsPages.GUILD_DISCOVERY,
            section: T.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
          },
          analyticsLocations: F
        });
        return
      }
      B(!0);
      try {
        null != O && await O(l.id)
      } finally {
        B(!1)
      }
    }
  };
  s.useEffect(() => S.DiscoveryTagsExperiment.trackExposure({
    location: "4302e4_1"
  }));
  let {
    shouldDisplayTags: K
  } = S.DiscoveryTagsExperiment.useExperiment({
    location: "4302e4_2"
  }, {
    autoTrackExposure: !1
  }), z = (0, I.useCanSeeDiscoveryContextMenu)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: A.card,
      children: [k ? (0, a.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : null, (0, a.jsxs)(r.Clickable, {
        className: i(A.container, {
          [A.hover]: j,
          [A.submitting]: k
        }),
        onClick: W,
        onContextMenu: e => {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await n.el("392533").then(n.bind(n, "392533"));
            return t => (0, a.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [(0, a.jsx)("div", {
          className: i(A.splashContainer, {
            [A.splashContainerWithTags]: K
          }),
          children: (0, a.jsx)("img", {
            src: V,
            alt: "",
            className: A.splashImage,
            width: 240
          })
        }), (0, a.jsxs)("div", {
          className: i(A.content, {
            [A.contentWithTags]: K
          }),
          children: [(0, a.jsxs)("div", {
            className: A.header,
            children: [(0, a.jsx)(h.default, {
              mask: h.default.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, a.jsx)("img", {
                src: Y,
                alt: "",
                className: A.avatar
              })
            }), (0, a.jsxs)("div", {
              className: A.headerName,
              children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(E.default, {
                  guild: l,
                  className: A.guildBadge,
                  size: 16
                })
              }), (0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: A.headerTitle,
                children: y
              })]
            })]
          }), (0, a.jsx)(r.Text, {
            className: A.description,
            variant: "text-sm/normal",
            children: x
          }), K && null != G && null != L && (0, a.jsx)(p.DiscoveryTags, {
            guildId: l.id,
            discoveryTagStyle: p.DiscoveryTagStyle.ALT,
            onTagClick: e => L(e, l.id),
            tags: G,
            section: C.AnalyticsContexts.SEARCH
          }), (0, a.jsxs)("div", {
            className: A.memberInfo,
            children: [null != b && (0, a.jsx)("div", {
              className: A.memberCount,
              children: (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != U && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: A.dotSeparator
              }), (0, a.jsx)("div", {
                className: A.memberCount,
                children: (0, a.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: U
                  })
                })
              })]
            })]
          })]
        }), z ? (0, a.jsx)("div", {
          className: A.actionButtons,
          children: (0, a.jsx)(m.default, {
            guild: l
          })
        }) : null]
      })]
    }), (0, a.jsx)("hr", {
      className: A.separator
    })]
  })
}