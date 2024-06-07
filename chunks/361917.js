"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("911969"),
  o = n("880308"),
  l = n("10718"),
  u = n("148958"),
  d = n("6048"),
  _ = n("546600"),
  c = n("105355"),
  E = n("689079"),
  I = n("245199");

function T(e) {
  var t, n;
  let {
    channel: T
  } = e, [f, S] = r.useState(""), h = r.useCallback(() => S(""), [S]), {
    commandsByActiveSection: A,
    sectionDescriptors: m,
    filterSection: N
  } = l.useDiscovery(T, {
    commandType: a.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: E.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  });
  r.useEffect(() => {
    N(E.BuiltInSectionId.FRECENCY)
  }, [N]);
  let p = null !== (n = null === (t = A[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
    O = m.filter(e => e.id !== E.BuiltInSectionId.FRECENCY && e.id !== E.BuiltInSectionId.BUILT_IN),
    C = (0, u.useSortApplicationsViaFrecency)(O);
  return (0, o.useFetchDeveloperActivityShelfItems)(), (0, i.jsxs)("div", {
    className: I.container,
    children: [(0, i.jsx)("div", {
      className: I.searchBarContainer,
      children: (0, i.jsx)(d.default, {
        placeholder: "Search Apps & Commands",
        onChange: S,
        query: f,
        onClear: h,
        size: d.default.Sizes.MEDIUM
      })
    }), (0, i.jsxs)(s.Scroller, {
      className: I.scrollableContent,
      fade: !0,
      children: [(0, i.jsx)(_.default, {
        channel: T,
        commands: p,
        sectionDescriptors: m
      }), (0, i.jsx)(c.default, {
        channel: T,
        applications: C
      })]
    })]
  })
}