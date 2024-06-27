t.d(n, {
  Z: function() {
    return k
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
  h = t(127255),
  N = t(880308),
  _ = t(367907),
  E = t(399654),
  C = t(844439),
  A = t(10718),
  f = t(895924),
  x = t(148958),
  v = t(424602),
  I = t(541099),
  g = t(827498),
  P = t(87005),
  T = t(695676),
  M = t(98880),
  S = t(804307),
  R = t(41558),
  L = t(105862),
  j = t(28147),
  O = t(981631),
  b = t(689079),
  y = t(689938),
  Z = t(584915);
let H = [],
  U = Array(8).fill(0).map((e, n) => n),
  D = [{
    cards: [, , , , ].fill(0).map((e, n) => n),
    look: M.U4.LARGE_BANNER
  }, {
    cards: Array(8).fill(0).map((e, n) => n),
    look: M.U4.NO_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, n) => n),
    look: M.U4.NO_BANNER
  }];

function k(e) {
  let {
    channel: n,
    entrypoint: t,
    searchQuery: a,
    setSearchQuery: r
  } = e, s = (0, m.NX)(n.id, !0, "AppLauncherHomeScreen"), o = t === g._b.TEXT, c = t === g._b.TEXT, d = t === g._b.TEXT, h = t === g._b.VOICE, N = d || c, _ = t === g._b.TEXT;
  l.useEffect(() => {
    s && (0, p.w1)({
      guildId: n.getGuildId(),
      force: !0
    })
  }, [s, n]);
  let E = a.length > 0;
  return (0, i.jsxs)("div", {
    className: Z.container,
    children: [(0, i.jsx)(B, {
      searchQuery: a,
      setSearchQuery: r,
      placeholder: _ ? y.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : y.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
    }), (0, i.jsx)(u.Scroller, {
      className: Z.scrollableContent,
      fade: !0,
      children: E ? (0, i.jsx)("div", {
        children: (0, i.jsx)(j.Z, {
          channel: n,
          query: a,
          entrypoint: t,
          enableGlobalSearch: t === g._b.TEXT,
          enableActivitiesSearch: s
        })
      }) : (0, i.jsxs)("div", {
        children: [o && (0, i.jsx)(w, {
          channel: n,
          entrypoint: t
        }), c && (0, i.jsx)(F, {
          channel: n
        }), d && (0, i.jsx)(W, {
          channel: n
        }), h && (0, i.jsx)(V, {
          channel: n
        }), N && (0, i.jsx)(L.Z, {})]
      })
    })]
  })
}

function B(e) {
  let {
    searchQuery: n,
    setSearchQuery: t,
    placeholder: a
  } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
    (0, _.yw)(O.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: I.Z.entrypoint(),
      location: f.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: !1,
    trailing: !0
  }), []), p = l.useCallback(() => t(""), [t]), h = l.useCallback(() => {
    d(!0), (0, _.yw)(O.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: I.Z.entrypoint(),
      location: f.Vh.APP_LAUNCHER_HOME
    })
  }, []), N = l.useCallback(() => {
    if (s) {
      o(!1);
      return
    }
    h()
  }, [s, h]), E = l.useCallback(e => {
    !c && h(), t(e), m(e)
  }, [c, t, h, m]);
  return (0, i.jsx)("div", {
    className: Z.searchBarContainer,
    children: (0, i.jsx)(u.SearchBar, {
      placeholder: a,
      query: n,
      onChange: E,
      onClear: p,
      size: u.SearchBar.Sizes.MEDIUM,
      autoFocus: !0,
      onFocus: N
    })
  })
}

function w(e) {
  let {
    channel: n,
    entrypoint: t
  } = e, {
    frecentApps: a,
    loading: r
  } = (0, P.f)(n, !0), s = l.useMemo(() => {
    let e = [];
    for (let n of a) null != n.application && e.push({
      application: n.application,
      isPartner: !1
    });
    return e
  }, [a]), o = y.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
    items: c,
    handleViewMore: u
  } = G(o, t === g._b.VOICE ? M.U4.LARGE_BANNER : M.U4.NO_BANNER, s, 8, g.L3.RECENT_APPS);
  return (l.useEffect(() => {
    if (!0 !== r.current) 0 !== c.length && (0, _.yw)(O.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: c.length,
      section_name: g.L3.RECENT_APPS,
      location: g.G0.HOME,
      source: t
    })
  }, [c.length, t, r]), !0 === r.current || 0 === c.length) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(R.Z, {
      title: o,
      onClickViewMore: u
    }), (0, i.jsx)("div", {
      className: Z.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: Z.frecentList,
        children: c.map(e => {
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

function V(e) {
  let {
    channel: n
  } = e;
  (0, N.g)();
  let t = (0, h.Z)({
      guildId: n.getGuildId(),
      channel: n
    }),
    a = M.U4.LARGE_BANNER,
    {
      clickOnHomeActivityOpensAppDetail: r
    } = v.m1.getCurrentConfig({
      location: "ActivitiesShelfSection"
    }, {
      autoTrackExposure: !1
    }),
    s = l.useMemo(() => r ? M.kA : M.qR, [r]);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(R.Z, {
      title: y.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: Z.sectionContentContainer,
      children: t.map(e => {
        let {
          application: t
        } = e;
        return (0, i.jsx)(s, {
          channel: n,
          application: t,
          look: a,
          location: f.Vh.APP_LAUNCHER_HOME,
          sectionName: g.L3.ACTIVITIES
        }, t.id)
      })
    })]
  })
}

function F(e) {
  let {
    channel: n
  } = e, {
    sectionDescriptors: t,
    filterSection: a,
    loading: s
  } = A.wi(n, {
    commandType: d.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: b.tn,
    includeFrecency: !0
  });
  l.useEffect(() => {
    a(b.bi.FRECENCY)
  }, [a]);
  let o = l.useMemo(() => t.filter(e => e.id !== b.bi.FRECENCY && e.id !== b.bi.BUILT_IN), [t]),
    c = (0, x.h)(o),
    u = g.L3.APPS_IN_THIS_SERVER,
    m = l.useMemo(() => r().compact(c.map(e => {
      let {
        application: n
      } = e;
      return n
    })).map(e => ({
      application: e
    })), [c]),
    {
      items: p,
      handleViewMore: h
    } = G(y.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, M.U4.NO_BANNER, m, 8, u);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(R.Z, {
      title: y.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: h
    }), (0, i.jsx)("div", {
      className: Z.sectionContentContainer,
      children: s.current ? U.map(e => (0, i.jsx)(S.Z, {
        look: M.U4.NO_BANNER
      }, e)) : p.map((e, n) => {
        let {
          application: t,
          isPartner: l
        } = e;
        return null != t ? (0, i.jsx)(M.kA, {
          application: t,
          isPartner: l,
          look: M.U4.NO_BANNER,
          sectionName: u,
          resultsPosition: n,
          location: f.Vh.APP_LAUNCHER_HOME
        }, t.id) : null
      })
    })]
  })
}

function W(e) {
  let {
    channel: n
  } = e, {
    fetchState: t,
    recommendationsSections: a
  } = function(e) {
    let {
      channelId: n,
      location: t
    } = e;
    l.useEffect(() => {
      (0, E.$)({
        channelId: n,
        location: t
      })
    }, [n, t]);
    let [i, a] = (0, c.Wu)([C.Z], () => [C.Z.getFetchState({
      channelId: n,
      location: t
    }), C.Z.getRecommendations({
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
  }), r = function(e) {
    let {
      channel: n,
      recommendationsSections: t
    } = e;
    (0, N.g)();
    let i = (0, h.Z)({
      guildId: n.getGuildId(),
      channel: n
    });
    return l.useMemo(() => {
      if (!t.some(e => e.appends_remaining_activities)) return H;
      let e = new Set;
      return t.forEach(n => {
        n.items.forEach(n => {
          null != n.application && e.add(n.application.id)
        })
      }), i.filter(n => !e.has(n.application.id))
    }, [t, i])
  }({
    channel: n,
    recommendationsSections: a
  });
  return (0, i.jsx)(i.Fragment, {
    children: t === C.M.FETCHING ? D.map((e, n) => {
      let {
        cards: t,
        look: l
      } = e;
      return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(R.Z.Loading, {}), (0, i.jsx)("div", {
          className: Z.sectionContentContainer,
          children: t.map(e => (0, i.jsx)(S.Z, {
            look: l
          }, e))
        })]
      }, n)
    }) : a.map(e => (0, i.jsx)(Y, {
      recommendationsSection: e,
      remainingActivities: r
    }, e.key))
  })
}

function Y(e) {
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
  } = G(a, r, s, 8, c);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(R.Z, {
      title: n.section_title,
      onClickViewMore: d
    }), (0, i.jsx)("div", {
      className: Z.sectionContentContainer,
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

function G(e, n, t, i, a) {
  let {
    pushHistory: r
  } = (0, T.hH)();
  return l.useMemo(() => t.length <= i ? {
    items: t,
    handleViewMore: void 0
  } : {
    items: t.slice(0, i),
    handleViewMore: () => {
      (0, _.yw)(O.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
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