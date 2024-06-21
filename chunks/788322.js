n.d(t, {
  Y: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(556017),
  p = n(879484),
  N = n(26580),
  T = n(206887),
  C = n(981631),
  S = n(689938),
  A = n(565001),
  f = n(129512),
  Z = n(330065);
let v = () => (0, i.jsx)("div", {
  className: A.placeholder
});
t.Z = e => {
  var t;
  let {
    guild: l,
    theme: v,
    onView: L,
    onTagClick: O
  } = e, {
    id: R,
    discoverySplash: x,
    icon: M,
    name: P,
    description: D,
    presenceCount: b,
    memberCount: y,
    keywords: j
  } = l, [U, G] = s.useState(!1), [w, k] = s.useState(!1), {
    analyticsLocations: B
  } = (0, c.ZP)(), H = I.ZP.getGuildDiscoverySplashURL({
    id: R,
    splash: x,
    size: 240 * (0, u.x_)()
  }), V = null != H ? H : function(e) {
    switch (e) {
      case C.BRd.DARK:
        return f;
      case C.BRd.LIGHT:
        return Z
    }
  }(v), F = null !== (t = I.ZP.getGuildIconURL({
    id: R,
    icon: M,
    size: 32
  })) && void 0 !== t ? t : void 0, Y = async e => {
    let {
      className: t
    } = e.target;
    if (!t.includes("Menu")) {
      if ((0, d.yU)()) {
        (0, E.Z)({
          analyticsSource: {
            page: C.ZY5.GUILD_DISCOVERY
          },
          analyticsLocation: {
            page: C.ZY5.GUILD_DISCOVERY,
            section: C.jXE.GUILD_CAP_UPSELL_MODAL
          },
          analyticsLocations: B
        });
        return
      }
      k(!0);
      try {
        null != L && await L(l.id)
      } finally {
        k(!1)
      }
    }
  };
  s.useEffect(() => p.w.trackExposure({
    location: "4302e4_1"
  }));
  let {
    shouldDisplayTags: z
  } = p.w.useExperiment({
    location: "4302e4_2"
  }, {
    autoTrackExposure: !1
  }), W = (0, g.I)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: A.card,
      children: [w ? (0, i.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : null, (0, i.jsxs)(r.Clickable, {
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
            return t => (0, i.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: [(0, i.jsx)("div", {
          className: a()(A.splashContainer, {
            [A.splashContainerWithTags]: z
          }),
          children: (0, i.jsx)("img", {
            src: V,
            alt: "",
            className: A.splashImage,
            width: 240
          })
        }), (0, i.jsxs)("div", {
          className: a()(A.content, {
            [A.contentWithTags]: z
          }),
          children: [(0, i.jsxs)("div", {
            className: A.header,
            children: [(0, i.jsx)(_.ZP, {
              mask: _.ZP.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, i.jsx)("img", {
                src: F,
                alt: "",
                className: A.avatar
              })
            }), (0, i.jsxs)("div", {
              className: A.headerName,
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(h.Z, {
                  guild: l,
                  className: A.guildBadge,
                  size: 16
                })
              }), (0, i.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: A.headerTitle,
                children: P
              })]
            })]
          }), (0, i.jsx)(r.Text, {
            className: A.description,
            variant: "text-sm/normal",
            children: D
          }), z && null != j && null != O && (0, i.jsx)(N.F, {
            guildId: l.id,
            discoveryTagStyle: N.B.ALT,
            onTagClick: e => O(e, l.id),
            tags: j,
            section: m.P1.SEARCH
          }), (0, i.jsxs)("div", {
            className: A.memberInfo,
            children: [null != b && (0, i.jsx)("div", {
              className: A.memberCount,
              children: (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: S.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != y && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: A.dotSeparator
              }), (0, i.jsx)("div", {
                className: A.memberCount,
                children: (0, i.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: S.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: y
                  })
                })
              })]
            })]
          })]
        }), W ? (0, i.jsx)("div", {
          className: A.actionButtons,
          children: (0, i.jsx)(T.Z, {
            guild: l
          })
        }) : null]
      })]
    }), (0, i.jsx)("hr", {
      className: A.separator
    })]
  })
}