"use strict";
n.r(t), n.d(t, {
  DiscoverSearchResultPlaceholder: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("239091"),
  u = n("906732"),
  d = n("134432"),
  c = n("451603"),
  f = n("885714"),
  E = n("940627"),
  h = n("806519"),
  _ = n("768581"),
  C = n("900849"),
  m = n("556017"),
  S = n("879484"),
  I = n("26580"),
  p = n("206887"),
  T = n("981631"),
  g = n("689938"),
  N = n("208596"),
  A = n("129512"),
  v = n("330065");
let R = () => (0, a.jsx)("div", {
  className: N.placeholder
});
t.default = e => {
  var t;
  let {
    guild: l,
    theme: R,
    onView: O,
    onTagClick: L
  } = e, {
    id: P,
    discoverySplash: M,
    icon: y,
    name: x,
    description: D,
    presenceCount: b,
    memberCount: U,
    keywords: j
  } = l, [G, w] = s.useState(!1), [k, F] = s.useState(!1), {
    analyticsLocations: B
  } = (0, u.default)(), H = _.default.getGuildDiscoverySplashURL({
    id: P,
    splash: M,
    size: 240 * (0, d.getDevicePixelRatio)()
  }), V = null != H ? H : function(e) {
    switch (e) {
      case T.ThemeTypes.DARK:
        return A;
      case T.ThemeTypes.LIGHT:
        return v
    }
  }(R), Y = null !== (t = _.default.getGuildIconURL({
    id: P,
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
          analyticsLocations: B
        });
        return
      }
      F(!0);
      try {
        null != O && await O(l.id)
      } finally {
        F(!1)
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: N.card,
      children: [k ? (0, a.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: N.spinner
      }) : null, (0, a.jsxs)(r.Clickable, {
        className: i()(N.container, {
          [N.hover]: G,
          [N.submitting]: k
        }),
        onClick: W,
        onContextMenu: e => {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, "455839"));
            return t => (0, a.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: [(0, a.jsx)("div", {
          className: i()(N.splashContainer, {
            [N.splashContainerWithTags]: K
          }),
          children: (0, a.jsx)("img", {
            src: V,
            alt: "",
            className: N.splashImage,
            width: 240
          })
        }), (0, a.jsxs)("div", {
          className: i()(N.content, {
            [N.contentWithTags]: K
          }),
          children: [(0, a.jsxs)("div", {
            className: N.header,
            children: [(0, a.jsx)(h.default, {
              mask: h.default.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, a.jsx)("img", {
                src: Y,
                alt: "",
                className: N.avatar
              })
            }), (0, a.jsxs)("div", {
              className: N.headerName,
              children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(E.default, {
                  guild: l,
                  className: N.guildBadge,
                  size: 16
                })
              }), (0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: N.headerTitle,
                children: x
              })]
            })]
          }), (0, a.jsx)(r.Text, {
            className: N.description,
            variant: "text-sm/normal",
            children: D
          }), K && null != j && null != L && (0, a.jsx)(I.DiscoveryTags, {
            guildId: l.id,
            discoveryTagStyle: I.DiscoveryTagStyle.ALT,
            onTagClick: e => L(e, l.id),
            tags: j,
            section: C.AnalyticsContexts.SEARCH
          }), (0, a.jsxs)("div", {
            className: N.memberInfo,
            children: [null != b && (0, a.jsx)("div", {
              className: N.memberCount,
              children: (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != U && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: N.dotSeparator
              }), (0, a.jsx)("div", {
                className: N.memberCount,
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
          className: N.actionButtons,
          children: (0, a.jsx)(p.default, {
            guild: l
          })
        }) : null]
      })]
    }), (0, a.jsx)("hr", {
      className: N.separator
    })]
  })
}