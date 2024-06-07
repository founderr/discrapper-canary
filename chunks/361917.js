"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("911969"),
  u = n("880308"),
  d = n("10718"),
  _ = n("148958"),
  c = n("6048"),
  E = n("546600"),
  I = n("105355"),
  T = n("689079"),
  f = n("245199");

function S(e) {
  var t, n;
  let {
    channel: s,
    isAppDetailPresent: S
  } = e, [h, A] = r.useState(""), m = r.useCallback(() => A(""), [A]), {
    commandsByActiveSection: N,
    sectionDescriptors: p,
    filterSection: O
  } = d.useDiscovery(s, {
    commandType: l.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: T.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  });
  r.useEffect(() => {
    O(T.BuiltInSectionId.FRECENCY)
  }, [O]);
  let C = null !== (n = null === (t = N[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
    R = p.filter(e => e.id !== T.BuiltInSectionId.FRECENCY && e.id !== T.BuiltInSectionId.BUILT_IN),
    g = (0, _.useSortApplicationsViaFrecency)(R);
  return (0, u.useFetchDeveloperActivityShelfItems)(), (0, i.jsxs)("div", {
    className: a()(f.container, {
      [f.appDetailVisible]: S
    }),
    children: [(0, i.jsx)("div", {
      className: f.searchBarContainer,
      children: (0, i.jsx)(c.default, {
        placeholder: "Search Apps & Commands",
        onChange: A,
        query: h,
        onClear: m,
        size: c.default.Sizes.MEDIUM
      })
    }), (0, i.jsxs)(o.Scroller, {
      className: f.scrollableContent,
      fade: !0,
      children: [(0, i.jsx)(E.default, {
        channel: s,
        commands: C,
        sectionDescriptors: p
      }), (0, i.jsx)(I.default, {
        channel: s,
        applications: g
      })]
    })]
  })
}