"use strict";
n.r(t), n.d(t, {
  ActivitySuggestion: function() {
    return R
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("907002"),
  d = n("446674"),
  c = n("669491"),
  f = n("77078"),
  h = n("697218"),
  m = n("45029"),
  p = n("216422"),
  E = n("719923"),
  S = n("439932"),
  g = n("15264"),
  C = n("607573"),
  _ = n("817039"),
  I = n("687292"),
  T = n("141962"),
  v = n("49111"),
  x = n("782340"),
  N = n("839430");
let A = ["embedded_cover"],
  M = {
    tension: 800,
    friction: 24
  };

function R(e) {
  var t;
  let {
    channel: n,
    activityItem: l,
    onClick: a,
    aspectRatio: r = 0,
    animatedDivClass: R
  } = e, j = (0, d.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), {
    onActivityItemSelected: L,
    imageBackground: y,
    activityAction: O,
    labelType: P
  } = (0, C.default)({
    channel: n,
    activityItem: l,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: {},
    onActivityItemSelected: a,
    embeddedActivitiesManager: T.default,
    assetNames: A
  }), [b, D] = i.useState(!1), U = i.useCallback(() => {
    D(!0)
  }, [D]), w = i.useCallback(() => {
    D(!1)
  }, [D]), F = (0, f.useToken)(c.default.unsafe_rawColors.PREMIUM_PERK_PINK), k = i.useMemo(() => (0, s.jsx)("div", {
    className: N.overlayBadge,
    children: (0, s.jsx)("div", {
      className: N.badgeContainer,
      children: (0, s.jsx)(I.default, {
        name: l.application.name,
        labelType: P
      })
    })
  }), [l.application.name, P]), B = i.useMemo(() => (0, g.default)(l.activity) ? null : E.default.canUsePremiumActivities(j) ? (0, s.jsx)("div", {
    className: N.iconOuterContainer,
    children: (0, s.jsx)("div", {
      className: o(N.iconInnerContainer, N.nitroIconContainer),
      children: (0, s.jsx)(p.default, {
        width: 16,
        height: 16,
        color: F.hex(),
        className: N.nitroIcon
      })
    })
  }) : (0, s.jsx)("div", {
    className: o(N.iconOuterContainer, N.lockBackground),
    children: (0, s.jsx)("div", {
      className: o(N.iconInnerContainer, N.lockIconContainer),
      children: (0, s.jsx)(m.default, {
        color: "var(--interactive-active)",
        className: N.lock
      })
    })
  }), [l.activity, F, j]), V = i.useMemo(() => {
    switch (O) {
      case C.ActivityAction.JOIN:
        return (0, s.jsx)("div", {
          className: N.activityAction,
          children: (0, s.jsx)("div", {
            className: N.activityActionButton,
            children: (0, s.jsx)(f.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: x.default.Messages.JOIN
            })
          })
        });
      case C.ActivityAction.LEAVE:
        return (0, s.jsx)("div", {
          className: N.activityAction,
          children: (0, s.jsx)("div", {
            className: o(N.activityActionButton, N.activityActionButtonDanger),
            children: (0, s.jsx)(f.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: x.default.Messages.EMBEDDED_ACTIVITIES_LEAVE
            })
          })
        });
      case C.ActivityAction.START:
      default:
        return (0, s.jsx)(s.Fragment, {})
    }
  }, [O]);
  return (0, s.jsx)(f.Button, {
    onClick: L,
    color: "transparent",
    look: f.Button.Looks.BLANK,
    size: f.Button.Sizes.NONE,
    onFocus: U,
    onBlur: w,
    onMouseEnter: U,
    onMouseLeave: w,
    innerClassName: N.activityItemButtonInnerClass,
    children: (0, s.jsx)(u.Spring, {
      config: M,
      from: {
        value: 0
      },
      to: {
        value: b ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsx)(u.animated.div, {
          className: o((0, S.getThemeClass)(v.ThemeTypes.DARK), N.activityItem, R, {
            [N.activityItem_13_11]: 0 === r,
            [N.activityItem_16_9]: 1 === r
          }),
          style: {
            transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
          },
          children: (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(_.default, {
              imageBackground: y,
              applicationName: l.application.name,
              imageClassName: N.activitySuggestionImage,
              imageNotFoundClassName: N.brokenImageIconWrapper
            }), k, B, V]
          })
        })
      }
    })
  })
}(a = l || (l = {}))[a.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", a[a.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", R.AspectRatio = l