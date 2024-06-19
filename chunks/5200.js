n.d(t, {
  Y: function() {
    return x
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(920906),
  u = n(481060),
  d = n(792125),
  h = n(542094),
  m = n(182906),
  p = n(556505),
  E = n(513202),
  g = n(981631),
  f = n(689938),
  C = n(107667);
let _ = ["embedded_cover"],
  I = {
    tension: 800,
    friction: 24
  };

function x(e) {
  var t;
  let {
    channel: n,
    activityItem: l,
    onClick: i,
    aspectRatio: r = 0,
    animatedDivClass: x
  } = e, {
    onActivityItemSelected: T,
    imageBackground: N,
    activityAction: Z,
    labelType: S
  } = (0, h.ZP)({
    channel: n,
    activityItem: l,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: {},
    onActivityItemSelected: i,
    embeddedActivitiesManager: E.Z,
    assetNames: _
  }), [v, A] = a.useState(!1), M = a.useCallback(() => {
    A(!0)
  }, [A]), R = a.useCallback(() => {
    A(!1)
  }, [A]), j = a.useMemo(() => (0, s.jsx)("div", {
    className: C.overlayBadge,
    children: (0, s.jsx)("div", {
      className: C.badgeContainer,
      children: (0, s.jsx)(p.Z, {
        name: l.application.name,
        labelType: S
      })
    })
  }), [l.application.name, S]), L = a.useMemo(() => {
    switch (Z) {
      case h.JS.JOIN:
        return (0, s.jsx)("div", {
          className: C.activityAction,
          children: (0, s.jsx)("div", {
            className: C.activityActionButton,
            children: (0, s.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: f.Z.Messages.JOIN
            })
          })
        });
      case h.JS.LEAVE:
        return (0, s.jsx)("div", {
          className: C.activityAction,
          children: (0, s.jsx)("div", {
            className: o()(C.activityActionButton, C.activityActionButtonDanger),
            children: (0, s.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: f.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
            })
          })
        });
      case h.JS.START:
      default:
        return (0, s.jsx)(s.Fragment, {})
    }
  }, [Z]);
  return (0, s.jsx)(u.Button, {
    onClick: T,
    color: "transparent",
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    onFocus: M,
    onBlur: R,
    onMouseEnter: M,
    onMouseLeave: R,
    innerClassName: C.activityItemButtonInnerClass,
    children: (0, s.jsx)(c.Spring, {
      config: I,
      from: {
        value: 0
      },
      to: {
        value: v ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsx)(c.animated.div, {
          className: o()((0, d.Q)(g.BRd.DARK), C.activityItem, x, {
            [C.activityItem_13_11]: 0 === r,
            [C.activityItem_16_9]: 1 === r
          }),
          style: {
            transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
          },
          children: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(m.Z, {
              imageBackground: N,
              applicationName: l.application.name,
              imageClassName: C.activitySuggestionImage,
              imageNotFoundClassName: C.brokenImageIconWrapper
            }), j, L]
          })
        })
      }
    })
  })
}(i = l || (l = {}))[i.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", i[i.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", x.AspectRatio = l