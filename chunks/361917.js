t.d(n, {
  Z: function() {
    return B
  }
}), t(47120), t(653041);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(892814),
  o = t(79411),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(867176),
  p = t(566620),
  E = t(127255),
  h = t(880308),
  _ = t(367907),
  N = t(399654),
  A = t(844439),
  C = t(10718),
  f = t(895924),
  x = t(148958),
  v = t(424602),
  I = t(541099),
  g = t(827498),
  P = t(87005),
  T = t(695676),
  M = t(98880),
  S = t(804307),
  R = t(561160),
  L = t(41558),
  j = t(105862),
  O = t(28147),
  b = t(981631),
  y = t(689079),
  Z = t(689938),
  H = t(584915);
let U = [],
  D = Array(8).fill(0).map((e, n) => n),
  k = [{
    cards: [, , , , ].fill(0).map((e, n) => n),
    look: M.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, n) => n),
    look: M.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, n) => n),
    look: M.U4.NO_BANNER
  }];

function B(e) {
  let {
    channel: n,
    entrypoint: t,
    searchQuery: a,
    setSearchQuery: r,
    setScroller: s
  } = e, o = (0, m.NX)(n.id, !0, "AppLauncherHomeScreen"), c = t === g._b.TEXT, d = t === g._b.TEXT, E = t === g._b.TEXT, h = t === g._b.VOICE, _ = E || d, N = t === g._b.TEXT, [A, C] = z(c), [f, x] = z(d), [v, I] = z(E), [P, T] = z(E);
  l.useEffect(() => {
    o && (0, p.w1)({
      guildId: n.getGuildId(),
      force: !0
    })
  }, [o, n]);
  let M = a.length > 0;
  return (0, i.jsxs)("div", {
    className: H.container,
    children: [(0, i.jsx)(w, {
      searchQuery: a,
      setSearchQuery: r,
      placeholder: N ? Z.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : Z.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
    }), (0, i.jsx)(u.Scroller, {
      ref: s,
      className: H.scrollableContent,
      fade: !0,
      children: M ? (0, i.jsx)("div", {
        children: (0, i.jsx)(O.Z, {
          channel: n,
          query: a,
          entrypoint: t,
          enableGlobalSearch: t === g._b.TEXT,
          enableActivitiesSearch: o
        })
      }) : A && f && v && P ? (0, i.jsx)(R.A, {
        type: g.LG.HOME_EMPTY,
        textContent: t === g._b.TEXT ? Z.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_BODY : Z.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
      }) : (0, i.jsxs)("div", {
        children: [c && (0, i.jsx)(V, {
          channel: n,
          entrypoint: t,
          onEmptyState: C
        }), d && (0, i.jsx)(W, {
          channel: n,
          onEmptyState: x
        }), E && (0, i.jsx)(Y, {
          channel: n,
          onEmptyState: I
        }), h && (0, i.jsx)(F, {
          channel: n,
          onEmptyState: T
        }), _ && (0, i.jsx)(j.Z, {})]
      })
    })]
  })
}

function w(e) {
  let {
    searchQuery: n,
    setSearchQuery: t,
    placeholder: a
  } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
    (0, _.yw)(b.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: I.Z.entrypoint(),
      location: f.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: !1,
    trailing: !0
  }), []), p = l.useCallback(() => t(""), [t]), E = l.useCallback(() => {
    d(!0), (0, _.yw)(b.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: I.Z.entrypoint(),
      location: f.Vh.APP_LAUNCHER_HOME
    })
  }, []), h = l.useCallback(() => {
    if (s) {
      o(!1);
      return
    }
    E()
  }, [s, E]), N = l.useCallback(e => {
    !c && E(), t(e), m(e)
  }, [c, t, E, m]);
  return (0, i.jsx)("div", {
    className: H.searchBarContainer,
    children: (0, i.jsx)(u.SearchBar, {
      placeholder: a,
      query: n,
      onChange: N,
      onClear: p,
      size: u.SearchBar.Sizes.MEDIUM,
      autoFocus: !0,
      onFocus: h
    })
  })
}

function V(e) {
  let {
    channel: n,
    entrypoint: t,
    onEmptyState: a
  } = e, {
    frecentApps: r,
    loading: s
  } = (0, P.f)(n, !0), o = l.useMemo(() => {
    let e = [];
    for (let n of r) null != n.application && e.push({
      application: n.application,
      isPartner: !1
    });
    return e
  }, [r]), c = Z.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
    items: u,
    handleViewMore: d
  } = X(c, t === g._b.VOICE ? M.U4.LARGE_BANNER : M.U4.NO_BANNER, o, 8, g.L3.RECENT_APPS);
  return (l.useEffect(() => {
    if (!0 !== s.current) 0 !== u.length && (0, _.yw)(b.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: u.length,
      section_name: g.L3.RECENT_APPS,
      location: g.G0.HOME,
      source: t
    })
  }, [u.length, t, s]), l.useEffect(() => {
    !1 === s.current && 0 === u.length && a()
  }, [u.length, s, a]), !0 === s.current || 0 === u.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.Z, {
      title: c,
      onClickViewMore: d
    }), (0, i.jsx)("div", {
      className: H.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: H.frecentList,
        children: u.map(e => {
          let {
            application: n,
            isPartner: t
          } = e;
          return (0, i.jsx)(M.kA, {
            application: n,
            look: M.U4.ICON,
            isPartner: t,
            location: g.G0.HOME
          }, n.id)
        })
      })
    })]
  })
}

function F(e) {
  let {
    channel: n,
    onEmptyState: t
  } = e;
  (0, h.g)();
  let a = (0, E.Z)({
      guildId: n.getGuildId(),
      channel: n
    }),
    r = M.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: s
    } = v.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    o = l.useMemo(() => s ? M.kA : M.qR, [s]);
  return (l.useEffect(() => {
    0 === a.length && t()
  }), 0 === a.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.Z, {
      title: Z.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: H.sectionContentContainer,
      children: a.map(e => {
        let {
          application: t
        } = e;
        return (0, i.jsx)(o, {
          channel: n,
          application: t,
          look: r,
          location: f.Vh.APP_LAUNCHER_HOME,
          sectionName: g.L3.ACTIVITIES
        }, t.id)
      })
    })]
  })
}

function W(e) {
  let {
    channel: n,
    onEmptyState: t
  } = e, {
    sectionDescriptors: a,
    filterSection: s,
    loading: o
  } = C.wi(n, {
    commandType: d.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: y.tn,
    includeFrecency: !0
  });
  l.useEffect(() => {
    s(y.bi.FRECENCY)
  }, [s]);
  let c = l.useMemo(() => a.filter(e => e.id !== y.bi.FRECENCY && e.id !== y.bi.BUILT_IN), [a]),
    u = (0, x.h)(c),
    m = g.L3.APPS_IN_THIS_SERVER,
    p = l.useMemo(() => r().compact(u.map(e => {
      let {
        application: n
      } = e;
      return n
    })).map(e => ({
      application: e
    })), [u]),
    {
      items: E,
      handleViewMore: h
    } = X(Z.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, M.U4.NO_BANNER, p, 8, m);
  return (l.useEffect(() => {
    !1 === o.current && 0 === E.length && t()
  }, [E.length, o, t]), !1 === o.current && 0 === E.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.Z, {
      title: Z.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: h
    }), (0, i.jsx)("div", {
      className: H.sectionContentContainer,
      children: o.current ? D.map(e => (0, i.jsx)(S.Z, {
        look: M.U4.NO_BANNER
      }, e)) : E.map((e, n) => {
        let {
          application: t,
          isPartner: l
        } = e;
        return null != t ? (0, i.jsx)(M.kA, {
          application: t,
          isPartner: l,
          look: M.U4.NO_BANNER,
          sectionName: m,
          resultsPosition: n,
          location: f.Vh.APP_LAUNCHER_HOME
        }, t.id) : null
      })
    })]
  })
}

function Y(e) {
  let {
    channel: n,
    onEmptyState: t
  } = e, {
    fetchState: a,
    recommendationsSections: r
  } = function(e) {
    let {
      channelId: n,
      location: t
    } = e;
    l.useEffect(() => {
      (0, N.$)({
        channelId: n,
        location: t
      })
    }, [n, t]);
    let [i, a] = (0, c.Wu)([A.Z], () => [A.Z.getFetchState({
      channelId: n,
      location: t
    }), A.Z.getRecommendations({
      channelId: n,
      location: t
    })]);
    return {
      fetchState: i,
      recommendationsSections: a
    }
  }({
    channelId: n.id,
    location: s.I.APP_LAUNCHER_TEXT
  }), o = function(e) {
    let {
      channel: n,
      recommendationsSections: t
    } = e;
    (0, h.g)();
    let i = (0, E.Z)({
      guildId: n.getGuildId(),
      channel: n
    });
    return l.useMemo(() => {
      if (!t.some(e => e.appends_remaining_activities)) return U;
      let e = new Set;
      return t.forEach(n => {
        n.items.forEach(n => {
          null != n.application && e.add(n.application.id)
        })
      }), i.filter(n => !e.has(n.application.id))
    }, [t, i])
  }({
    channel: n,
    recommendationsSections: r
  });
  return l.useEffect(() => {
    a !== A.M.FETCHING && 0 === r.length && t()
  }, [a, t, r.length]), (0, i.jsx)(i.Fragment, {
    children: a === A.M.FETCHING ? k.map((e, n) => {
      let {
        cards: t,
        look: l
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(L.Z.Loading, {}), (0, i.jsx)("div", {
          className: H.sectionContentContainer,
          children: t.map(e => (0, i.jsx)(S.Z, {
            look: l
          }, e))
        })]
      }, n)
    }) : r.map(e => (0, i.jsx)(G, {
      recommendationsSection: e,
      remainingActivities: o
    }, e.key))
  })
}

function G(e) {
  let {
    recommendationsSection: n,
    remainingActivities: t
  } = e, a = n.section_title, r = n.type === o.i.BANNER_CARDS ? M.U4.LARGE_BANNER : M.U4.NO_BANNER, s = l.useMemo(() => {
    let e = n.items.map(e => {
      let {
        application: n,
        is_partner: t
      } = e;
      return {
        application: n,
        isPartner: t
      }
    });
    return n.appends_remaining_activities && e.push(...t.map(e => {
      let {
        application: n
      } = e;
      return {
        application: n
      }
    })), e
  }, [n.items, n.appends_remaining_activities, t]), c = n.key, {
    items: u,
    handleViewMore: d
  } = X(a, r, s, 8, c);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.Z, {
      title: n.section_title,
      onClickViewMore: d
    }), (0, i.jsx)("div", {
      className: H.sectionContentContainer,
      children: u.map((e, n) => {
        let {
          application: t,
          isPartner: l
        } = e;
        return (0, i.jsx)(M.kA, {
          application: t,
          look: r,
          isPartner: l,
          sectionName: c,
          resultsPosition: n,
          location: f.Vh.APP_LAUNCHER_HOME
        }, t.id)
      })
    })]
  })
}

function z(e) {
  let [n, t] = l.useState(!e);
  return [n, l.useCallback(() => {
    t(!0)
  }, [])]
}

function X(e, n, t, i, a) {
  let {
    pushHistory: r
  } = (0, T.hH)();
  return l.useMemo(() => t.length <= i ? {
    items: t,
    handleViewMore: void 0
  } : {
    items: t.slice(0, i),
    handleViewMore: () => {
      (0, _.yw)(b.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: a,
        source: I.Z.entrypoint()
      }), r({
        type: T.gc.LIST,
        title: e,
        look: n,
        items: t,
        sectionName: a
      })
    }
  }, [t, i, a, r, e, n])
}