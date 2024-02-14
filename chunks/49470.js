"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("249900"),
  o = s("448881"),
  d = s("2973"),
  u = s("514002"),
  c = s("859893"),
  S = s("782340"),
  E = s("38845");
let T = e => {
  let {
    quest: t
  } = e, [s, l] = n.useState(!1), i = n.useCallback(() => l(!0), []), r = n.useCallback(() => l(!1), []);
  return (0, a.jsxs)("div", {
    className: E.questsCard,
    onFocus: i,
    onMouseEnter: i,
    onBlur: r,
    onMouseLeave: r,
    children: [(0, a.jsx)(c.default, {
      isFocused: s,
      quest: t
    }), (0, a.jsx)(u.default, {
      quest: t
    })]
  })
};
var f = () => {
  let [e, t] = n.useState(!1), s = (0, l.useStateFromStoresArray)([d.default], () => [...d.default.quests.values()]), {
    isFetchingCurrentQuests: u,
    lastFetchedCurrentQuests: c
  } = (0, l.useStateFromStoresObject)([d.default], () => ({
    isFetchingCurrentQuests: d.default.isFetchingCurrentQuests,
    lastFetchedCurrentQuests: d.default.lastFetchedCurrentQuests
  }));
  return (n.useEffect(() => {
    !e && 0 === c && !u && (t(!0), (0, o.fetchCurrentQuests)())
  }, [u, c, e]), u) ? (0, a.jsx)(i.Spinner, {
    className: E.spinner
  }) : 0 === s.length ? null : (0, a.jsx)(i.FormSection, {
    className: E.questsContainer,
    children: (0, a.jsxs)(i.HeadingLevel, {
      component: (0, a.jsxs)(i.Heading, {
        variant: "heading-md/semibold",
        className: E.questsHeading,
        children: [(0, a.jsx)(r.default, {
          className: E.questsIcon
        }), S.default.Messages.QUESTS]
      }),
      children: [(0, a.jsx)(i.FormDivider, {
        className: E.divider
      }), s.map(e => (0, a.jsx)(T, {
        quest: e
      }, e.id))]
    })
  })
}