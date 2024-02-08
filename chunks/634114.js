"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("798609"),
  u = n("240249"),
  d = n("776007"),
  c = n("810567"),
  f = n("113713"),
  p = n("968918"),
  m = n("317041"),
  h = n("440987");

function E(e) {
  var t, n;
  let {
    channel: a,
    isAppDetailPresent: E
  } = e, [g, S] = i.useState(""), C = i.useCallback(() => S(""), [S]), {
    commandsByActiveSection: T,
    sectionDescriptors: v,
    filterSection: I
  } = u.useDiscovery(a, {
    commandType: o.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: m.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  });
  i.useEffect(() => {
    I(m.BuiltInSectionId.FRECENCY)
  }, [I]);
  let _ = null !== (n = null === (t = T[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
    y = v.filter(e => e.id !== m.BuiltInSectionId.FRECENCY && e.id !== m.BuiltInSectionId.BUILT_IN),
    A = (0, d.useSortApplicationsViaFrecency)(y);
  return (0, l.jsxs)("div", {
    className: s(h.container, {
      [h.appDetailVisible]: E
    }),
    children: [(0, l.jsx)("div", {
      className: h.searchBarContainer,
      children: (0, l.jsx)(c.default, {
        placeholder: "Search Apps & Commands",
        onChange: S,
        query: g,
        onClear: C,
        size: c.default.Sizes.MEDIUM
      })
    }), (0, l.jsxs)(r.Scroller, {
      className: h.scrollableContent,
      fade: !0,
      children: [(0, l.jsx)(f.default, {
        channel: a,
        commands: _,
        sectionDescriptors: v
      }), (0, l.jsx)(p.default, {
        channel: a,
        applications: A
      })]
    })]
  })
}