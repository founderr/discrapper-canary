"use strict";
n.d(t, {
  Z: function() {
    return b
  }
}), n(653041), n(47120);
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
  A = n(424602),
  m = n(827498),
  O = n(695676),
  R = n(98880),
  p = n(804307),
  g = n(41558),
  C = n(105862),
  v = n(28147),
  L = n(689079),
  D = n(689938),
  M = n(584915);
let P = [],
  y = Array(8).fill(0).map((e, t) => t),
  U = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: R.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, t) => t),
    look: R.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: R.U4.NO_BANNER
  }];

function b(e) {
  let {
    channel: t,
    entrypoint: n,
    searchQuery: s,
    setSearchQuery: o,
    enableRecommendations: a,
    enableRecents: l,
    enableGlobalSearch: u
  } = e, c = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen"), I = n === m._.TEXT, T = n === m._.TEXT && a, h = n === m._.VOICE, S = T || I;
  r.useEffect(() => {
    c && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [c, t]);
  let f = s.length > 0;
  return (0, i.jsxs)("div", {
    className: M.container,
    children: [(0, i.jsx)(G, {
      searchQuery: s,
      setSearchQuery: o
    }), (0, i.jsx)(_.Scroller, {
      className: M.scrollableContent,
      fade: !0,
      children: f ? (0, i.jsx)("div", {
        children: (0, i.jsx)(v.Z, {
          channel: t,
          query: s,
          entrypoint: n,
          enableGlobalSearch: u,
          enableActivitiesSearch: c
        })
      }) : (0, i.jsxs)("div", {
        children: [l && (0, i.jsx)(w, {}), I && (0, i.jsx)(x, {
          channel: t
        }), T && (0, i.jsx)(k, {
          channel: t
        }), h && (0, i.jsx)(B, {
          channel: t
        }), S && (0, i.jsx)(C.Z, {})]
      })
    })]
  })
}

function G(e) {
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
    className: M.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: D.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER,
      query: t,
      onChange: a,
      onClear: l,
      size: _.SearchBar.Sizes.MEDIUM,
      autoFocus: !0
    })
  })
}

function w() {
  return null
}

function B(e) {
  let {
    channel: t
  } = e;
  (0, T.g)();
  let n = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    }),
    s = R.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: o
    } = A.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    a = r.useMemo(() => o ? R.kA : R.qR, [o]);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(g.Z, {
      title: D.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: M.sectionContentContainer,
      children: n.map(e => {
        let {
          application: n
        } = e;
        return (0, i.jsx)(a, {
          channel: t,
          application: n,
          look: s,
          sectionName: m.L.ACTIVITIES
        }, n.id)
      })
    })]
  })
}

function x(e) {
  let {
    channel: t
  } = e, {
    sectionDescriptors: n,
    filterSection: s,
    loading: a
  } = f.wi(t, {
    commandType: c.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: L.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    s(L.bi.FRECENCY)
  }, [s]);
  let l = r.useMemo(() => n.filter(e => e.id !== L.bi.FRECENCY && e.id !== L.bi.BUILT_IN), [n]),
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
    } = Z(D.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, R.U4.NO_BANNER, _, 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(g.Z, {
      title: D.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: E
    }), (0, i.jsx)("div", {
      className: M.sectionContentContainer,
      children: a.current ? y.map(e => (0, i.jsx)(p.Z, {
        look: R.U4.NO_BANNER
      }, e)) : d.map(e => {
        let {
          application: n,
          isPartner: r
        } = e;
        return null != n ? (0, i.jsx)(R.kA, {
          channel: t,
          application: n,
          isPartner: r,
          look: R.U4.NO_BANNER,
          sectionName: m.L.APPS_IN_THIS_SERVER
        }, n.id) : null
      })
    })]
  })
}

function k(e) {
  let {
    channel: t
  } = e, {
    fetchState: n,
    recommendationsSections: s
  } = function(e) {
    let {
      channelId: t,
      location: n
    } = e;
    r.useEffect(() => {
      (0, h.$)({
        channelId: t,
        location: n
      })
    }, [t, n]);
    let [i, s] = (0, u.Wu)([S.Z], () => [S.Z.getFetchState({
      channelId: t,
      location: n
    }), S.Z.getRecommendations({
      channelId: t,
      location: n
    })]);
    return {
      fetchState: i,
      recommendationsSections: s
    }
  }({
    channelId: t.id,
    location: a.I.APP_LAUNCHER_TEXT
  }), o = function(e) {
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
      if (!n.some(e => e.appends_remaining_activities)) return P;
      let e = new Set;
      return n.forEach(t => {
        t.items.forEach(t => {
          null != t.application && e.add(t.application.id)
        })
      }), i.filter(t => !e.has(t.application.id))
    }, [n, i])
  }({
    channel: t,
    recommendationsSections: s
  });
  return (0, i.jsx)(i.Fragment, {
    children: n === S.M.FETCHING ? U.map((e, t) => {
      let {
        cards: n,
        look: r
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(g.Z.Loading, {}), (0, i.jsx)("div", {
          className: M.sectionContentContainer,
          children: n.map(e => (0, i.jsx)(p.Z, {
            look: r
          }, e))
        })]
      }, t)
    }) : s.map(e => (0, i.jsx)(V, {
      channel: t,
      recommendationsSection: e,
      remainingActivities: o
    }, e.key))
  })
}

function V(e) {
  let {
    channel: t,
    recommendationsSection: n,
    remainingActivities: s
  } = e, o = n.section_title, a = n.type === l.i.BANNER_CARDS ? R.U4.LARGE_BANNER : R.U4.NO_BANNER, {
    items: u,
    handleViewMore: _
  } = Z(o, a, r.useMemo(() => {
    let e = n.items.map(e => {
      let {
        application: t,
        is_partner: n
      } = e;
      return {
        application: t,
        isPartner: n
      }
    });
    return n.appends_remaining_activities && e.push(...s.map(e => {
      let {
        application: t
      } = e;
      return {
        application: t
      }
    })), e
  }, [n.items, n.appends_remaining_activities, s]), 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(g.Z, {
      title: n.section_title,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: M.sectionContentContainer,
      children: u.map(e => {
        let {
          application: r,
          isPartner: s
        } = e;
        return (0, i.jsx)(R.kA, {
          channel: t,
          application: r,
          look: a,
          isPartner: s,
          sectionName: n.key
        }, r.id)
      })
    })]
  })
}

function Z(e, t, n, i) {
  let {
    pushHistory: s
  } = (0, O.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => s({
      type: O.gc.LIST,
      title: e,
      look: t,
      items: n
    })
  }, [n, i, s, t, e])
}