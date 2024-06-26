"use strict";
n.d(t, {
  Z: function() {
    return x
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
  h = n(367907),
  f = n(399654),
  S = n(844439),
  N = n(10718),
  A = n(148958),
  m = n(424602),
  O = n(827498),
  p = n(87005),
  R = n(695676),
  g = n(98880),
  C = n(804307),
  v = n(41558),
  L = n(105862),
  D = n(28147),
  M = n(981631),
  P = n(689079),
  y = n(689938),
  U = n(584915);
let b = [],
  G = Array(8).fill(0).map((e, t) => t),
  w = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: g.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, t) => t),
    look: g.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: g.U4.NO_BANNER
  }];

function x(e) {
  let {
    channel: t,
    entrypoint: n,
    searchQuery: s,
    setSearchQuery: o,
    enableRecommendations: a,
    enableRecents: l,
    enableGlobalSearch: u
  } = e, c = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen"), I = n === O._b.TEXT && l, T = n === O._b.TEXT, h = n === O._b.TEXT && a, f = n === O._b.VOICE, S = h || T, N = n === O._b.TEXT;
  r.useEffect(() => {
    c && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [c, t]);
  let A = s.length > 0;
  return (0, i.jsxs)("div", {
    className: U.container,
    children: [(0, i.jsx)(B, {
      searchQuery: s,
      setSearchQuery: o,
      placeholder: N ? y.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : y.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
    }), (0, i.jsx)(_.Scroller, {
      className: U.scrollableContent,
      fade: !0,
      children: A ? (0, i.jsx)("div", {
        children: (0, i.jsx)(D.Z, {
          channel: t,
          query: s,
          entrypoint: n,
          enableGlobalSearch: u,
          enableActivitiesSearch: c
        })
      }) : (0, i.jsxs)("div", {
        children: [I && (0, i.jsx)(k, {
          channel: t,
          entrypoint: n
        }), T && (0, i.jsx)(Z, {
          channel: t
        }), h && (0, i.jsx)(H, {
          channel: t
        }), f && (0, i.jsx)(V, {
          channel: t
        }), S && (0, i.jsx)(L.Z, {})]
      })
    })]
  })
}

function B(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: s
  } = e, a = r.useMemo(() => o().debounce(e => {}, 400, {
    leading: !1,
    trailing: !0
  }), []), l = r.useCallback(e => {
    n(e), a(e)
  }, [n, a]), u = r.useCallback(() => n(""), [n]);
  return (0, i.jsx)("div", {
    className: U.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: s,
      query: t,
      onChange: l,
      onClear: u,
      size: _.SearchBar.Sizes.MEDIUM,
      autoFocus: !0
    })
  })
}

function k(e) {
  let {
    channel: t,
    entrypoint: n
  } = e, {
    frecentApps: s,
    loading: o
  } = (0, p.f)(t, !0), a = r.useMemo(() => {
    let e = [];
    for (let t of s) null != t.application && e.push({
      application: t.application,
      isPartner: !1
    });
    return e
  }, [s]), l = y.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
    items: u,
    handleViewMore: _
  } = Y(l, n === O._b.VOICE ? g.U4.LARGE_BANNER : g.U4.NO_BANNER, a, 8);
  return (r.useEffect(() => {
    if (!0 !== o.current) 0 !== u.length && (0, h.yw)(M.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: u.length,
      section_name: O.L3.RECENT_APPS,
      location: O.G0.HOME,
      source: n
    })
  }, [u.length, n, o]), !0 === o.current || 0 === u.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(v.Z, {
      title: l,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: U.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: U.frecentList,
        children: u.map(e => {
          let {
            application: n,
            isPartner: r
          } = e;
          return (0, i.jsx)(g.kA, {
            channel: t,
            application: n,
            look: g.U4.ICON,
            isPartner: r
          }, n.id)
        })
      })
    })]
  })
}

function V(e) {
  let {
    channel: t
  } = e;
  (0, T.g)();
  let n = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    }),
    s = g.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: o
    } = m.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    a = r.useMemo(() => o ? g.kA : g.qR, [o]);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(v.Z, {
      title: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: U.sectionContentContainer,
      children: n.map(e => {
        let {
          application: n
        } = e;
        return (0, i.jsx)(a, {
          channel: t,
          application: n,
          look: s,
          sectionName: O.L3.ACTIVITIES
        }, n.id)
      })
    })]
  })
}

function Z(e) {
  let {
    channel: t
  } = e, {
    sectionDescriptors: n,
    filterSection: s,
    loading: a
  } = N.wi(t, {
    commandType: c.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: P.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    s(P.bi.FRECENCY)
  }, [s]);
  let l = r.useMemo(() => n.filter(e => e.id !== P.bi.FRECENCY && e.id !== P.bi.BUILT_IN), [n]),
    u = (0, A.h)(l),
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
    } = Y(y.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, g.U4.NO_BANNER, _, 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(v.Z, {
      title: y.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: E
    }), (0, i.jsx)("div", {
      className: U.sectionContentContainer,
      children: a.current ? G.map(e => (0, i.jsx)(C.Z, {
        look: g.U4.NO_BANNER
      }, e)) : d.map(e => {
        let {
          application: n,
          isPartner: r
        } = e;
        return null != n ? (0, i.jsx)(g.kA, {
          channel: t,
          application: n,
          isPartner: r,
          look: g.U4.NO_BANNER,
          sectionName: O.L3.APPS_IN_THIS_SERVER
        }, n.id) : null
      })
    })]
  })
}

function H(e) {
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
      (0, f.$)({
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
      if (!n.some(e => e.appends_remaining_activities)) return b;
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
    children: n === S.M.FETCHING ? w.map((e, t) => {
      let {
        cards: n,
        look: r
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(v.Z.Loading, {}), (0, i.jsx)("div", {
          className: U.sectionContentContainer,
          children: n.map(e => (0, i.jsx)(C.Z, {
            look: r
          }, e))
        })]
      }, t)
    }) : s.map(e => (0, i.jsx)(F, {
      channel: t,
      recommendationsSection: e,
      remainingActivities: o
    }, e.key))
  })
}

function F(e) {
  let {
    channel: t,
    recommendationsSection: n,
    remainingActivities: s
  } = e, o = n.section_title, a = n.type === l.i.BANNER_CARDS ? g.U4.LARGE_BANNER : g.U4.NO_BANNER, {
    items: u,
    handleViewMore: _
  } = Y(o, a, r.useMemo(() => {
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
    children: [(0, i.jsx)(v.Z, {
      title: n.section_title,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: U.sectionContentContainer,
      children: u.map(e => {
        let {
          application: r,
          isPartner: s
        } = e;
        return (0, i.jsx)(g.kA, {
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

function Y(e, t, n, i) {
  let {
    pushHistory: s
  } = (0, R.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => s({
      type: R.gc.LIST,
      title: e,
      look: t,
      items: n
    })
  }, [n, i, s, t, e])
}