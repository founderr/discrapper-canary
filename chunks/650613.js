"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("47120"), r("390547");
var a = r("735250"),
  i = r("442837"),
  n = r("481060"),
  l = r("100527"),
  o = r("171368"),
  c = r("594174"),
  s = r("719247"),
  d = r("71585"),
  u = r("146282"),
  h = r("897674"),
  p = r("561308"),
  g = r("206583"),
  m = r("198304");

function f(e) {
  let {
    id: t
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getUser(t));
  return null == r ? null : (0, a.jsx)(n.Clickable, {
    className: m.entryAuthor,
    onClick: function() {
      (0, o.openUserProfileModal)({
        sourceAnalyticsLocations: [l.default.DEV_TOOLS],
        userId: t
      })
    },
    children: (0, a.jsx)(n.Text, {
      variant: "text-md/semibold",
      children: r.username
    })
  })
}

function y() {
  var e;
  let t = (0, i.useStateFromStores)([u.default], () => u.default.getFeed(g.ContentInventoryFeedKey.GLOBAL_FEED)),
    r = (0, i.useStateFromStores)([u.default], () => u.default.getFilters()),
    l = (0, i.useStateFromStoresObject)([s.default], () => {
      var e;
      let r = {};
      for (let a of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : []) r[(0, s.entryToKey)(a.content)] = s.default.canRenderContent(a.content);
      return r
    }, [t]),
    o = (0, i.useStateFromStores)([d.default], () => d.default.getImpressionCappedItemIds());
  if (null == r) return null;
  let c = null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.flatMap(e => {
    let {
      content: t
    } = e;
    if (!(0, h.matchesFilters)(r, t)) return [];
    let i = l[(0, s.entryToKey)(t)];
    return (0, a.jsxs)("li", {
      className: m.locatorEntry,
      children: [(0, a.jsx)(f, {
        type: t.author_type,
        id: t.author_id
      }), !i && (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        children: "Expired or no matching presence"
      }), (0, p.isEntryExpired)(t) && (0, a.jsxs)(n.Text, {
        variant: "text-md/normal",
        children: ["Expired at ", t.expires_at]
      }), o.has(t.id) && (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        children: "Impression capped"
      })]
    })
  });
  return (0, a.jsxs)(n.FormSection, {
    children: [(0, a.jsx)(n.FormTitle, {
      children: "Selected Content"
    }), null != c ? (0, a.jsx)("ul", {
      children: c
    }) : (0, a.jsx)("div", {
      children: "(none?)"
    })]
  })
}