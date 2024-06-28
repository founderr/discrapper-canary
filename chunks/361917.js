"use strict";
n.d(t, {
  Z: function() {
    return V
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
  h = n(367907),
  f = n(399654),
  S = n(844439),
  A = n(10718),
  N = n(895924),
  m = n(148958),
  O = n(424602),
  R = n(541099),
  p = n(827498),
  g = n(87005),
  C = n(695676),
  v = n(98880),
  L = n(804307),
  D = n(561160),
  M = n(41558),
  P = n(105862),
  y = n(28147),
  U = n(981631),
  b = n(689079),
  G = n(689938),
  w = n(584915);
let x = [],
  B = Array(8).fill(0).map((e, t) => t),
  k = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: v.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, t) => t),
    look: v.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: v.U4.NO_BANNER
  }];

function V(e) {
  let {
    channel: t,
    entrypoint: n,
    searchQuery: s,
    setSearchQuery: o,
    setScroller: a
  } = e, l = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen"), u = n === p._b.TEXT, c = n === p._b.TEXT, I = n === p._b.TEXT, T = n === p._b.VOICE, h = I || c, f = n === p._b.TEXT, [S, A] = K(u), [N, m] = K(c), [O, R] = K(I), [g, C] = K(I);
  r.useEffect(() => {
    l && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [l, t]);
  let v = s.length > 0;
  return (0, i.jsxs)("div", {
    className: w.container,
    children: [(0, i.jsx)(Z, {
      searchQuery: s,
      setSearchQuery: o,
      placeholder: f ? G.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : G.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
    }), (0, i.jsx)(_.Scroller, {
      ref: a,
      className: w.scrollableContent,
      fade: !0,
      children: v ? (0, i.jsx)("div", {
        children: (0, i.jsx)(y.Z, {
          channel: t,
          query: s,
          entrypoint: n,
          enableGlobalSearch: n === p._b.TEXT,
          enableActivitiesSearch: l
        })
      }) : S && N && O && g ? (0, i.jsx)(D.A, {
        type: p.LG.HOME_EMPTY,
        textContent: n === p._b.TEXT ? G.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_BODY : G.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
      }) : (0, i.jsxs)("div", {
        children: [u && (0, i.jsx)(H, {
          channel: t,
          entrypoint: n,
          onEmptyState: A
        }), c && (0, i.jsx)(Y, {
          channel: t,
          onEmptyState: m
        }), I && (0, i.jsx)(j, {
          channel: t,
          onEmptyState: R
        }), T && (0, i.jsx)(F, {
          channel: t,
          onEmptyState: C
        }), h && (0, i.jsx)(P.Z, {})]
      })
    })]
  })
}

function Z(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: s
  } = e, [a, l] = r.useState(!0), [u, c] = r.useState(!1), d = r.useMemo(() => o().debounce(e => {
    (0, h.yw)(U.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: R.Z.entrypoint(),
      location: N.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: !1,
    trailing: !0
  }), []), E = r.useCallback(() => n(""), [n]), I = r.useCallback(() => {
    c(!0), (0, h.yw)(U.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: R.Z.entrypoint(),
      location: N.Vh.APP_LAUNCHER_HOME
    })
  }, []), T = r.useCallback(() => {
    if (a) {
      l(!1);
      return
    }
    I()
  }, [a, I]), f = r.useCallback(e => {
    !u && I(), n(e), d(e)
  }, [u, n, I, d]);
  return (0, i.jsx)("div", {
    className: w.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: s,
      query: t,
      onChange: f,
      onClear: E,
      size: _.SearchBar.Sizes.MEDIUM,
      autoFocus: !0,
      onFocus: T
    })
  })
}

function H(e) {
  let {
    channel: t,
    entrypoint: n,
    onEmptyState: s
  } = e, {
    frecentApps: o,
    loading: a
  } = (0, g.f)(t, !0), l = r.useMemo(() => {
    let e = [];
    for (let t of o) null != t.application && e.push({
      application: t.application,
      isPartner: !1
    });
    return e
  }, [o]), u = G.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
    items: _,
    handleViewMore: c
  } = z(u, n === p._b.VOICE ? v.U4.LARGE_BANNER : v.U4.NO_BANNER, l, 8, p.L3.RECENT_APPS);
  return (r.useEffect(() => {
    if (!0 !== a.current) 0 !== _.length && (0, h.yw)(U.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: _.length,
      section_name: p.L3.RECENT_APPS,
      location: p.G0.HOME,
      source: n
    })
  }, [_.length, n, a]), r.useEffect(() => {
    !1 === a.current && 0 === _.length && s()
  }, [_.length, a, s]), !0 === a.current || 0 === _.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(M.Z, {
      title: u,
      onClickViewMore: c
    }), (0, i.jsx)("div", {
      className: w.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: w.frecentList,
        children: _.map(e => {
          let {
            application: t,
            isPartner: n
          } = e;
          return (0, i.jsx)(v.kA, {
            application: t,
            look: v.U4.ICON,
            isPartner: n,
            location: p.G0.HOME
          }, t.id)
        })
      })
    })]
  })
}

function F(e) {
  let {
    channel: t,
    onEmptyState: n
  } = e;
  (0, T.g)();
  let s = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    }),
    o = v.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: a
    } = O.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    l = r.useMemo(() => a ? v.kA : v.qR, [a]);
  return (r.useEffect(() => {
    0 === s.length && n()
  }), 0 === s.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(M.Z, {
      title: G.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: w.sectionContentContainer,
      children: s.map(e => {
        let {
          application: n
        } = e;
        return (0, i.jsx)(l, {
          channel: t,
          application: n,
          look: o,
          location: N.Vh.APP_LAUNCHER_HOME,
          sectionName: p.L3.ACTIVITIES
        }, n.id)
      })
    })]
  })
}

function Y(e) {
  let {
    channel: t,
    onEmptyState: n
  } = e, {
    sectionDescriptors: s,
    filterSection: a,
    loading: l
  } = A.wi(t, {
    commandType: c.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: b.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    a(b.bi.FRECENCY)
  }, [a]);
  let u = r.useMemo(() => s.filter(e => e.id !== b.bi.FRECENCY && e.id !== b.bi.BUILT_IN), [s]),
    _ = (0, m.h)(u),
    d = p.L3.APPS_IN_THIS_SERVER,
    E = r.useMemo(() => o().compact(_.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [_]),
    {
      items: I,
      handleViewMore: T
    } = z(G.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, v.U4.NO_BANNER, E, 8, d);
  return (r.useEffect(() => {
    !1 === l.current && 0 === I.length && n()
  }, [I.length, l, n]), !1 === l.current && 0 === I.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(M.Z, {
      title: G.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: T
    }), (0, i.jsx)("div", {
      className: w.sectionContentContainer,
      children: l.current ? B.map(e => (0, i.jsx)(L.Z, {
        look: v.U4.NO_BANNER
      }, e)) : I.map((e, t) => {
        let {
          application: n,
          isPartner: r
        } = e;
        return null != n ? (0, i.jsx)(v.kA, {
          application: n,
          isPartner: r,
          look: v.U4.NO_BANNER,
          sectionName: d,
          resultsPosition: t,
          location: N.Vh.APP_LAUNCHER_HOME
        }, n.id) : null
      })
    })]
  })
}

function j(e) {
  let {
    channel: t,
    onEmptyState: n
  } = e, {
    fetchState: s,
    recommendationsSections: o
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
  }), l = function(e) {
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
      if (!n.some(e => e.appends_remaining_activities)) return x;
      let e = new Set;
      return n.forEach(t => {
        t.items.forEach(t => {
          null != t.application && e.add(t.application.id)
        })
      }), i.filter(t => !e.has(t.application.id))
    }, [n, i])
  }({
    channel: t,
    recommendationsSections: o
  });
  return r.useEffect(() => {
    s !== S.M.FETCHING && 0 === o.length && n()
  }, [s, n, o.length]), (0, i.jsx)(i.Fragment, {
    children: s === S.M.FETCHING ? k.map((e, t) => {
      let {
        cards: n,
        look: r
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(M.Z.Loading, {}), (0, i.jsx)("div", {
          className: w.sectionContentContainer,
          children: n.map(e => (0, i.jsx)(L.Z, {
            look: r
          }, e))
        })]
      }, t)
    }) : o.map(e => (0, i.jsx)(W, {
      recommendationsSection: e,
      remainingActivities: l
    }, e.key))
  })
}

function W(e) {
  let {
    recommendationsSection: t,
    remainingActivities: n
  } = e, s = t.section_title, o = t.type === l.i.BANNER_CARDS ? v.U4.LARGE_BANNER : v.U4.NO_BANNER, a = r.useMemo(() => {
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
  }, [t.items, t.appends_remaining_activities, n]), u = t.key, {
    items: _,
    handleViewMore: c
  } = z(s, o, a, 8, u);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(M.Z, {
      title: t.section_title,
      onClickViewMore: c
    }), (0, i.jsx)("div", {
      className: w.sectionContentContainer,
      children: _.map((e, t) => {
        let {
          application: n,
          isPartner: r
        } = e;
        return (0, i.jsx)(v.kA, {
          application: n,
          look: o,
          isPartner: r,
          sectionName: u,
          resultsPosition: t,
          location: N.Vh.APP_LAUNCHER_HOME
        }, n.id)
      })
    })]
  })
}

function K(e) {
  let [t, n] = r.useState(!e);
  return [t, r.useCallback(() => {
    n(!0)
  }, [])]
}

function z(e, t, n, i, s) {
  let {
    pushHistory: o
  } = (0, C.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => {
      (0, h.yw)(U.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: s,
        source: R.Z.entrypoint()
      }), o({
        type: C.gc.LIST,
        title: e,
        look: t,
        items: n,
        sectionName: s
      })
    }
  }, [n, i, s, o, e, t])
}