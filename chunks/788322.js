n.d(t, {
  Y: function() {
    return L
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(239091),
  c = n(906732),
  u = n(134432),
  d = n(451603),
  E = n(885714),
  h = n(940627),
  _ = n(806519),
  I = n(768581),
  m = n(900849),
  T = n(556017),
  g = n(879484),
  p = n(26580),
  N = n(206887),
  S = n(981631),
  C = n(689938),
  A = n(565001),
  f = n(129512),
  Z = n(330065);
let L = () => (0, s.jsx)("div", {
  className: A.placeholder
});
t.Z = e => {
  var t;
  let {
    guild: l,
    theme: L,
    onView: O,
    onTagClick: v
  } = e, {
    id: R,
    discoverySplash: P,
    icon: x,
    name: M,
    description: D,
    presenceCount: b,
    memberCount: y,
    keywords: j
  } = l, [U, G] = i.useState(!1), [w, k] = i.useState(!1), {
    analyticsLocations: B
  } = (0, c.ZP)(), H = I.ZP.getGuildDiscoverySplashURL({
    id: R,
    splash: P,
    size: 240 * (0, u.x_)()
  }), V = null != H ? H : function(e) {
    switch (e) {
      case S.BRd.DARK:
        return f;
      case S.BRd.LIGHT:
        return Z
    }
  }(L), F = null !== (t = I.ZP.getGuildIconURL({
    id: R,
    icon: x,
    size: 32
  })) && void 0 !== t ? t : void 0, Y = async e => {
    let {
      className: t
    } = e.target;
    if (!t.includes("Menu")) {
      if ((0, d.yU)()) {
        (0, E.Z)({
          analyticsSource: {
            page: S.ZY5.GUILD_DISCOVERY
          },
          analyticsLocation: {
            page: S.ZY5.GUILD_DISCOVERY,
            section: S.jXE.GUILD_CAP_UPSELL_MODAL
          },
          analyticsLocations: B
        });
        return
      }
      k(!0);
      try {
        null != O && await O(l.id)
      } finally {
        k(!1)
      }
    }
  };
  i.useEffect(() => g.w.trackExposure({
    location: "4302e4_1"
  }));
  let {
    shouldDisplayTags: z
  } = g.w.useExperiment({
    location: "4302e4_2"
  }, {
    autoTrackExposure: !1
  }), W = (0, T.I)();
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: A.card,
      children: [w ? (0, s.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : null, (0, s.jsxs)(r.Clickable, {
        className: a()(A.container, {
          [A.hover]: U,
          [A.submitting]: w
        }),
        onClick: Y,
        onContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 455839));
            return t => (0, s.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: [(0, s.jsx)("div", {
          className: a()(A.splashContainer, {
            [A.splashContainerWithTags]: z
          }),
          children: (0, s.jsx)("img", {
            src: V,
            alt: "",
            className: A.splashImage,
            width: 240
          })
        }), (0, s.jsxs)("div", {
          className: a()(A.content, {
            [A.contentWithTags]: z
          }),
          children: [(0, s.jsxs)("div", {
            className: A.header,
            children: [(0, s.jsx)(_.ZP, {
              mask: _.ZP.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, s.jsx)("img", {
                src: F,
                alt: "",
                className: A.avatar
              })
            }), (0, s.jsxs)("div", {
              className: A.headerName,
              children: [(0, s.jsx)("div", {
                children: (0, s.jsx)(h.Z, {
                  guild: l,
                  className: A.guildBadge,
                  size: 16
                })
              }), (0, s.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: A.headerTitle,
                children: M
              })]
            })]
          }), (0, s.jsx)(r.Text, {
            className: A.description,
            variant: "text-sm/normal",
            children: D
          }), z && null != j && null != v && (0, s.jsx)(p.F, {
            guildId: l.id,
            discoveryTagStyle: p.B.ALT,
            onTagClick: e => v(e, l.id),
            tags: j,
            section: m.P1.SEARCH
          }), (0, s.jsxs)("div", {
            className: A.memberInfo,
            children: [null != b && (0, s.jsx)("div", {
              className: A.memberCount,
              children: (0, s.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != y && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: A.dotSeparator
              }), (0, s.jsx)("div", {
                className: A.memberCount,
                children: (0, s.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: y
                  })
                })
              })]
            })]
          })]
        }), W ? (0, s.jsx)("div", {
          className: A.actionButtons,
          children: (0, s.jsx)(N.Z, {
            guild: l
          })
        }) : null]
      })]
    }), (0, s.jsx)("hr", {
      className: A.separator
    })]
  })
}