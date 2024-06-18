"use strict";
n.d(t, {
  Z: function() {
    return D
  }
}), n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(892814),
  l = n(79411),
  u = n(442837),
  _ = n(481060),
  c = n(911969),
  d = n(867176),
  E = n(566620),
  I = n(127255),
  T = n(880308),
  h = n(399654),
  S = n(844439),
  f = n(10718),
  N = n(148958),
  A = n(695676),
  m = n(98880),
  O = n(41558),
  R = n(105862),
  p = n(28147),
  g = n(689079),
  C = n(689938),
  v = n(584915);
let L = [];

function D(e) {
  let {
    channel: t,
    entrypoint: n,
    enableRecommendations: s,
    enableRecents: o,
    enableGlobalSearch: a
  } = e, l = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen");
  r.useEffect(() => {
    l && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [l, t]);
  let [u, c] = r.useState(""), I = u.length > 0;
  return (0, i.jsxs)("div", {
    className: v.container,
    children: [(0, i.jsx)(M, {
      searchQuery: u,
      setSearchQuery: c
    }), (0, i.jsx)(_.Scroller, {
      className: v.scrollableContent,
      fade: !0,
      children: I ? (0, i.jsx)("div", {
        children: (0, i.jsx)(p.Z, {
          channel: t,
          query: u,
          entrypoint: n,
          enableGlobalSearch: a,
          enableShelfSearch: l
        })
      }) : (0, i.jsxs)("div", {
        children: [o && (0, i.jsx)(P, {}), (0, i.jsx)(y, {
          channel: t
        }), s && (0, i.jsx)(U, {
          channel: t
        }), (0, i.jsx)(R.Z, {})]
      })
    })]
  })
}

function M(e) {
  let {
    searchQuery: t,
    setSearchQuery: n
  } = e, s = r.useMemo(() => o().debounce(e => {}, 400, {
    leading: !1,
    trailing: !0
  }), []), a = r.useCallback(e => {
    n(e), s(e)
  }, [n, s]), l = r.useCallback(() => n(""), [n]);
  return (0, i.jsx)("div", {
    className: v.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: C.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER,
      query: t,
      onChange: a,
      onClear: l,
      size: _.SearchBar.Sizes.MEDIUM
    })
  })
}

function P() {
  return null
}

function y(e) {
  let {
    channel: t
  } = e, {
    pushHistory: n
  } = (0, A.hH)(), {
    sectionDescriptors: s,
    filterSection: a
  } = f.wi(t, {
    commandType: c.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: g.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    a(g.bi.FRECENCY)
  }, [a]);
  let l = r.useMemo(() => s.filter(e => e.id !== g.bi.FRECENCY && e.id !== g.bi.BUILT_IN), [s]),
    u = (0, N.h)(l),
    _ = r.useMemo(() => o().compact(u.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [u]),
    {
      items: d,
      handleViewMore: E
    } = G(C.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, m.Z.Looks.NO_BANNER, _, 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(O.Z, {
      title: C.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: E
    }), (0, i.jsx)("div", {
      className: v.sectionContentContainer,
      children: d.map(e => {
        let {
          application: t,
          isPartner: r
        } = e;
        return (0, i.jsx)(m.Z, {
          application: t,
          look: m.Z.Looks.NO_BANNER,
          isPartner: r,
          onClick: e => {
            e.stopPropagation(), n({
              type: A.gc.APPLICATION,
              application: t
            })
          }
        }, t.id)
      })
    })]
  })
}

function U(e) {
  let {
    channel: t
  } = e, n = function(e) {
    let {
      channelId: t,
      location: n
    } = e;
    return r.useEffect(() => {
      (0, h.$)({
        channelId: t,
        location: n
      })
    }, [t, n]), (0, u.Wu)([S.Z], () => S.Z.getRecommendations({
      channelId: t,
      location: n
    }))
  }({
    channelId: t.id,
    location: a.I.APP_LAUNCHER_TEXT
  }), s = function(e) {
    let {
      channel: t,
      recommendationsSections: n
    } = e;
    (0, T.g)();
    let i = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    });
    return r.useMemo(() => {
      if (!n.some(e => e.appends_remaining_activities)) return L;
      let e = new Set;
      return n.forEach(t => {
        t.items.forEach(t => {
          null != t.application && e.add(t.application.id)
        })
      }), i.filter(t => !e.has(t.application.id))
    }, [n, i])
  }({
    channel: t,
    recommendationsSections: n
  });
  return (0, i.jsx)(i.Fragment, {
    children: n.map(e => (0, i.jsx)(b, {
      recommendationsSection: e,
      remainingActivities: s
    }, e.key))
  })
}

function b(e) {
  let {
    recommendationsSection: t,
    remainingActivities: n
  } = e, {
    pushHistory: s
  } = (0, A.hH)(), o = t.section_title, a = t.type === l.i.BANNER_CARDS ? m.Z.Looks.LARGE_BANNER : m.Z.Looks.NO_BANNER, {
    items: u,
    handleViewMore: _
  } = G(o, a, r.useMemo(() => {
    let e = t.items.map(e => {
      let {
        application: t,
        is_partner: n
      } = e;
      return {
        application: t,
        isPartner: n
      }
    });
    return t.appends_remaining_activities && e.push(...n.map(e => {
      let {
        application: t
      } = e;
      return {
        application: t
      }
    })), e
  }, [t.items, t.appends_remaining_activities, n]), 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(O.Z, {
      title: t.section_title,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: v.sectionContentContainer,
      children: u.map(e => {
        let {
          application: t,
          isPartner: n
        } = e;
        return (0, i.jsx)(m.Z, {
          application: t,
          look: a,
          onClick: e => {
            e.stopPropagation(), s({
              type: A.gc.APPLICATION,
              application: t
            })
          },
          isPartner: n
        }, t.id)
      })
    })]
  })
}

function G(e, t, n, i) {
  let {
    pushHistory: s
  } = (0, A.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => s({
      type: A.gc.LIST,
      title: e,
      look: t,
      items: n
    })
  }, [n, i, s, t, e])
}