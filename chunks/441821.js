"use strict";
n.r(t), n.d(t, {
  ActivitySuggestion: function() {
    return I
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("907002"),
  d = n("77078"),
  c = n("439932"),
  f = n("607573"),
  h = n("817039"),
  m = n("687292"),
  p = n("141962"),
  E = n("49111"),
  g = n("782340"),
  C = n("839430");
let S = ["embedded_cover"],
  _ = {
    tension: 800,
    friction: 24
  };

function I(e) {
  var t;
  let {
    channel: n,
    activityItem: l,
    onClick: a,
    aspectRatio: r = 0,
    animatedDivClass: I
  } = e, {
    onActivityItemSelected: T,
    imageBackground: v,
    activityAction: x,
    labelType: N
  } = (0, f.default)({
    channel: n,
    activityItem: l,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: p.default,
    assetNames: S
  }), [A, M] = i.useState(!1), R = i.useCallback(() => {
    M(!0)
  }, [M]), j = i.useCallback(() => {
    M(!1)
  }, [M]), L = i.useMemo(() => (0, s.jsx)("div", {
    className: C.overlayBadge,
    children: (0, s.jsx)("div", {
      className: C.badgeContainer,
      children: (0, s.jsx)(m.default, {
        name: l.application.name,
        labelType: N
      })
    })
  }), [l.application.name, N]), O = i.useMemo(() => {
    switch (x) {
      case f.ActivityAction.JOIN:
        return (0, s.jsx)("div", {
          className: C.activityAction,
          children: (0, s.jsx)("div", {
            className: C.activityActionButton,
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.default.Messages.JOIN
            })
          })
        });
      case f.ActivityAction.LEAVE:
        return (0, s.jsx)("div", {
          className: C.activityAction,
          children: (0, s.jsx)("div", {
            className: u(C.activityActionButton, C.activityActionButtonDanger),
            children: (0, s.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: g.default.Messages.EMBEDDED_ACTIVITIES_LEAVE
            })
          })
        });
      case f.ActivityAction.START:
      default:
        return (0, s.jsx)(s.Fragment, {})
    }
  }, [x]);
  return (0, s.jsx)(d.Button, {
    onClick: T,
    color: "transparent",
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    onFocus: R,
    onBlur: j,
    onMouseEnter: R,
    onMouseLeave: j,
    innerClassName: C.activityItemButtonInnerClass,
    children: (0, s.jsx)(o.Spring, {
      config: _,
      from: {
        value: 0
      },
      to: {
        value: A ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsx)(o.animated.div, {
          className: u((0, c.getThemeClass)(E.ThemeTypes.DARK), C.activityItem, I, {
            [C.activityItem_13_11]: 0 === r,
            [C.activityItem_16_9]: 1 === r
          }),
          style: {
            transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
          },
          children: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(h.default, {
              imageBackground: v,
              applicationName: l.application.name,
              imageClassName: C.activitySuggestionImage,
              imageNotFoundClassName: C.brokenImageIconWrapper
            }), L, O]
          })
        })
      }
    })
  })
}(a = l || (l = {}))[a.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", a[a.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", I.AspectRatio = l