"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("911969"),
  o = n("127255"),
  l = n("880308"),
  u = n("10718"),
  d = n("148958"),
  _ = n("237159"),
  c = n("546600"),
  E = n("105355"),
  I = n("689079"),
  T = n("245199");

function f(e) {
  var t, n;
  let {
    channel: f
  } = e, [S, h] = r.useState(""), A = r.useCallback(() => h(""), [h]), {
    commandsByActiveSection: m,
    sectionDescriptors: N,
    filterSection: p
  } = u.useDiscovery(f, {
    commandType: a.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: I.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  });
  r.useEffect(() => {
    p(I.BuiltInSectionId.FRECENCY)
  }, [p]);
  let O = null !== (n = null === (t = m[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
    C = N.filter(e => e.id !== I.BuiltInSectionId.FRECENCY && e.id !== I.BuiltInSectionId.BUILT_IN),
    R = (0, d.useSortApplicationsViaFrecency)(C);
  (0, l.useFetchDeveloperActivityShelfItems)();
  let g = (0, o.default)({
    guildId: f.getGuildId(),
    channel: f
  });
  return (0, i.jsxs)("div", {
    className: T.container,
    children: [(0, i.jsx)("div", {
      className: T.searchBarContainer,
      children: (0, i.jsx)(s.SearchBar, {
        placeholder: "Search Apps & Commands",
        onChange: h,
        query: S,
        onClear: A,
        size: s.SearchBar.Sizes.MEDIUM
      })
    }), (0, i.jsxs)(s.Scroller, {
      className: T.scrollableContent,
      fade: !0,
      children: [(0, i.jsx)(c.default, {
        channel: f,
        commands: O,
        sectionDescriptors: N
      }), (0, i.jsx)(E.default, {
        channel: f,
        applications: R
      }), (0, i.jsx)(_.default, {
        channel: f,
        shelfItems: g
      })]
    })]
  })
}