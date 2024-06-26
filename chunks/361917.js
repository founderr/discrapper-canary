"use strict";
n.d(t, {
  Z: function() {
    return k
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
  N = n(10718),
  A = n(895924),
  m = n(148958),
  O = n(424602),
  p = n(541099),
  R = n(827498),
  g = n(87005),
  C = n(695676),
  v = n(98880),
  L = n(804307),
  D = n(41558),
  M = n(105862),
  P = n(28147),
  y = n(981631),
  U = n(689079),
  b = n(689938),
  G = n(584915);
let w = [],
  x = Array(8).fill(0).map((e, t) => t),
  B = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: v.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, t) => t),
    look: v.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: v.U4.NO_BANNER
  }];

function k(e) {
  let {
    channel: t,
    entrypoint: n,
    searchQuery: s,
    setSearchQuery: o
  } = e, a = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen"), l = n === R._b.TEXT, u = n === R._b.TEXT, c = n === R._b.TEXT, I = n === R._b.VOICE, T = c || u, h = n === R._b.TEXT;
  r.useEffect(() => {
    a && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [a, t]);
  let f = s.length > 0;
  return (0, i.jsxs)("div", {
    className: G.container,
    children: [(0, i.jsx)(V, {
      searchQuery: s,
      setSearchQuery: o,
      placeholder: h ? b.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : b.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
    }), (0, i.jsx)(_.Scroller, {
      className: G.scrollableContent,
      fade: !0,
      children: f ? (0, i.jsx)("div", {
        children: (0, i.jsx)(P.Z, {
          channel: t,
          query: s,
          entrypoint: n,
          enableGlobalSearch: n === R._b.TEXT,
          enableActivitiesSearch: a
        })
      }) : (0, i.jsxs)("div", {
        children: [l && (0, i.jsx)(Z, {
          channel: t,
          entrypoint: n
        }), u && (0, i.jsx)(F, {
          channel: t
        }), c && (0, i.jsx)(Y, {
          channel: t
        }), I && (0, i.jsx)(H, {
          channel: t
        }), T && (0, i.jsx)(M.Z, {})]
      })
    })]
  })
}

function V(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: s
  } = e, [a, l] = r.useState(!0), [u, c] = r.useState(!1), d = r.useMemo(() => o().debounce(e => {
    (0, h.yw)(y.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: p.Z.entrypoint(),
      location: A.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: !1,
    trailing: !0
  }), []), E = r.useCallback(() => n(""), [n]), I = r.useCallback(() => {
    c(!0), (0, h.yw)(y.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: p.Z.entrypoint(),
      location: A.Vh.APP_LAUNCHER_HOME
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
    className: G.searchBarContainer,
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

function Z(e) {
  let {
    channel: t,
    entrypoint: n
  } = e, {
    frecentApps: s,
    loading: o
  } = (0, g.f)(t, !0), a = r.useMemo(() => {
    let e = [];
    for (let t of s) null != t.application && e.push({
      application: t.application,
      isPartner: !1
    });
    return e
  }, [s]), l = b.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
    items: u,
    handleViewMore: _
  } = W(l, n === R._b.VOICE ? v.U4.LARGE_BANNER : v.U4.NO_BANNER, a, 8, R.L3.RECENT_APPS);
  return (r.useEffect(() => {
    if (!0 !== o.current) 0 !== u.length && (0, h.yw)(y.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: u.length,
      section_name: R.L3.RECENT_APPS,
      location: R.G0.HOME,
      source: n
    })
  }, [u.length, n, o]), !0 === o.current || 0 === u.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(D.Z, {
      title: l,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: G.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: G.frecentList,
        children: u.map(e => {
          let {
            application: t,
            isPartner: n
          } = e;
          return (0, i.jsx)(v.kA, {
            application: t,
            look: v.U4.ICON,
            isPartner: n,
            location: R.G0.HOME
          }, t.id)
        })
      })
    })]
  })
}

function H(e) {
  let {
    channel: t
  } = e;
  (0, T.g)();
  let n = (0, I.Z)({
      guildId: t.getGuildId(),
      channel: t
    }),
    s = v.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: o
    } = O.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    a = r.useMemo(() => o ? v.kA : v.qR, [o]);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(D.Z, {
      title: b.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: G.sectionContentContainer,
      children: n.map(e => {
        let {
          application: n
        } = e;
        return (0, i.jsx)(a, {
          channel: t,
          application: n,
          look: s,
          location: A.Vh.APP_LAUNCHER_HOME,
          sectionName: R.L3.ACTIVITIES
        }, n.id)
      })
    })]
  })
}

function F(e) {
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
    limit: U.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    s(U.bi.FRECENCY)
  }, [s]);
  let l = r.useMemo(() => n.filter(e => e.id !== U.bi.FRECENCY && e.id !== U.bi.BUILT_IN), [n]),
    u = (0, m.h)(l),
    _ = R.L3.APPS_IN_THIS_SERVER,
    d = r.useMemo(() => o().compact(u.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [u]),
    {
      items: E,
      handleViewMore: I
    } = W(b.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, v.U4.NO_BANNER, d, 8, _);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(D.Z, {
      title: b.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: I
    }), (0, i.jsx)("div", {
      className: G.sectionContentContainer,
      children: a.current ? x.map(e => (0, i.jsx)(L.Z, {
        look: v.U4.NO_BANNER
      }, e)) : E.map((e, t) => {
        let {
          application: n,
          isPartner: r
        } = e;
        return null != n ? (0, i.jsx)(v.kA, {
          application: n,
          isPartner: r,
          look: v.U4.NO_BANNER,
          sectionName: _,
          resultsPosition: t,
          location: A.Vh.APP_LAUNCHER_HOME
        }, n.id) : null
      })
    })]
  })
}

function Y(e) {
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
      if (!n.some(e => e.appends_remaining_activities)) return w;
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
    children: n === S.M.FETCHING ? B.map((e, t) => {
      let {
        cards: n,
        look: r
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(D.Z.Loading, {}), (0, i.jsx)("div", {
          className: G.sectionContentContainer,
          children: n.map(e => (0, i.jsx)(L.Z, {
            look: r
          }, e))
        })]
      }, t)
    }) : s.map(e => (0, i.jsx)(j, {
      recommendationsSection: e,
      remainingActivities: o
    }, e.key))
  })
}

function j(e) {
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
  } = W(s, o, a, 8, u);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(D.Z, {
      title: t.section_title,
      onClickViewMore: c
    }), (0, i.jsx)("div", {
      className: G.sectionContentContainer,
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
          location: A.Vh.APP_LAUNCHER_HOME
        }, n.id)
      })
    })]
  })
}

function W(e, t, n, i, s) {
  let {
    pushHistory: o
  } = (0, C.hH)();
  return r.useMemo(() => n.length <= i ? {
    items: n,
    handleViewMore: void 0
  } : {
    items: n.slice(0, i),
    handleViewMore: () => {
      (0, h.yw)(y.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: s,
        source: p.Z.entrypoint()
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