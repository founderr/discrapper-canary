"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
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
  _ = n("6048"),
  c = n("237159"),
  E = n("546600"),
  I = n("105355"),
  T = n("689079"),
  f = n("245199");

function S(e) {
  var t, n;
  let {
    channel: S
  } = e, [h, A] = r.useState(""), m = r.useCallback(() => A(""), [A]), {
    commandsByActiveSection: N,
    sectionDescriptors: p,
    filterSection: O
  } = u.useDiscovery(S, {
    commandType: a.ApplicationCommandType.CHAT
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
    g = (0, d.useSortApplicationsViaFrecency)(R);
  (0, l.useFetchDeveloperActivityShelfItems)();
  let L = (0, o.default)({
    guildId: S.getGuildId(),
    channel: S
  });
  return (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)("div", {
      className: f.searchBarContainer,
      children: (0, i.jsx)(_.default, {
        placeholder: "Search Apps & Commands",
        onChange: A,
        query: h,
        onClear: m,
        size: _.default.Sizes.MEDIUM
      })
    }), (0, i.jsxs)(s.Scroller, {
      className: f.scrollableContent,
      fade: !0,
      children: [(0, i.jsx)(E.default, {
        channel: S,
        commands: C,
        sectionDescriptors: p
      }), (0, i.jsx)(I.default, {
        channel: S,
        applications: g
      }), (0, i.jsx)(c.default, {
        channel: S,
        shelfItems: L
      })]
    })]
  })
}