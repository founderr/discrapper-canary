"use strict";
a.r(t), a.d(t, {
  DiscoverSearchResultPlaceholder: function() {
    return L
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("239091"),
  u = a("906732"),
  d = a("134432"),
  c = a("451603"),
  f = a("885714"),
  E = a("940627"),
  h = a("806519"),
  _ = a("768581"),
  C = a("900849"),
  m = a("556017"),
  S = a("879484"),
  p = a("26580"),
  I = a("206887"),
  T = a("981631"),
  g = a("689938"),
  A = a("37807"),
  N = a("129512"),
  v = a("330065");
let L = () => (0, n.jsx)("div", {
  className: A.placeholder
});
t.default = e => {
  var t;
  let {
    guild: l,
    theme: L,
    onView: R,
    onTagClick: O
  } = e, {
    id: M,
    discoverySplash: P,
    icon: y,
    name: x,
    description: D,
    presenceCount: b,
    memberCount: U,
    keywords: j
  } = l, [G, w] = s.useState(!1), [k, B] = s.useState(!1), {
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
        return v
    }
  }(L), Y = null !== (t = _.default.getGuildIconURL({
    id: M,
    icon: y,
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
        null != R && await R(l.id)
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
  }), z = (0, m.useCanSeeDiscoveryContextMenu)();
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: A.card,
      children: [k ? (0, n.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : null, (0, n.jsxs)(r.Clickable, {
        className: i()(A.container, {
          [A.hover]: G,
          [A.submitting]: k
        }),
        onClick: W,
        onContextMenu: e => {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(a.bind(a, "455839"));
            return t => (0, n.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [(0, n.jsx)("div", {
          className: i()(A.splashContainer, {
            [A.splashContainerWithTags]: K
          }),
          children: (0, n.jsx)("img", {
            src: V,
            alt: "",
            className: A.splashImage,
            width: 240
          })
        }), (0, n.jsxs)("div", {
          className: i()(A.content, {
            [A.contentWithTags]: K
          }),
          children: [(0, n.jsxs)("div", {
            className: A.header,
            children: [(0, n.jsx)(h.default, {
              mask: h.default.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, n.jsx)("img", {
                src: Y,
                alt: "",
                className: A.avatar
              })
            }), (0, n.jsxs)("div", {
              className: A.headerName,
              children: [(0, n.jsx)("div", {
                children: (0, n.jsx)(E.default, {
                  guild: l,
                  className: A.guildBadge,
                  size: 16
                })
              }), (0, n.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: A.headerTitle,
                children: x
              })]
            })]
          }), (0, n.jsx)(r.Text, {
            className: A.description,
            variant: "text-sm/normal",
            children: D
          }), K && null != j && null != O && (0, n.jsx)(p.DiscoveryTags, {
            guildId: l.id,
            discoveryTagStyle: p.DiscoveryTagStyle.ALT,
            onTagClick: e => O(e, l.id),
            tags: j,
            section: C.AnalyticsContexts.SEARCH
          }), (0, n.jsxs)("div", {
            className: A.memberInfo,
            children: [null != b && (0, n.jsx)("div", {
              className: A.memberCount,
              children: (0, n.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != U && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", {
                className: A.dotSeparator
              }), (0, n.jsx)("div", {
                className: A.memberCount,
                children: (0, n.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: U
                  })
                })
              })]
            })]
          })]
        }), z ? (0, n.jsx)("div", {
          className: A.actionButtons,
          children: (0, n.jsx)(I.default, {
            guild: l
          })
        }) : null]
      })]
    }), (0, n.jsx)("hr", {
      className: A.separator
    })]
  })
}