"use strict";
n.d(t, {
  Z: function() {
    return P
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
  A = n(424602),
  m = n(827498),
  O = n(695676),
  R = n(98880),
  p = n(41558),
  g = n(105862),
  C = n(28147),
  v = n(689079),
  L = n(689938),
  D = n(584915);
let M = [];

function P(e) {
  let {
    channel: t,
    entrypoint: n,
    enableRecommendations: s,
    enableRecents: o,
    enableGlobalSearch: a
  } = e, l = (0, d.NX)(t.id, !0, "AppLauncherHomeScreen"), u = n === m._.TEXT, c = n === m._.TEXT && s, I = n === m._.VOICE, T = c || u;
  r.useEffect(() => {
    l && (0, E.w1)({
      guildId: t.getGuildId(),
      force: !0
    })
  }, [l, t]);
  let [h, S] = r.useState(""), f = h.length > 0;
  return (0, i.jsxs)("div", {
    className: D.container,
    children: [(0, i.jsx)(y, {
      searchQuery: h,
      setSearchQuery: S
    }), (0, i.jsx)(_.Scroller, {
      className: D.scrollableContent,
      fade: !0,
      children: f ? (0, i.jsx)("div", {
        children: (0, i.jsx)(C.Z, {
          channel: t,
          query: h,
          entrypoint: n,
          enableGlobalSearch: a,
          enableShelfSearch: l
        })
      }) : (0, i.jsxs)("div", {
        children: [o && (0, i.jsx)(U, {}), u && (0, i.jsx)(G, {
          channel: t
        }), c && (0, i.jsx)(w, {
          channel: t
        }), I && (0, i.jsx)(b, {
          channel: t
        }), T && (0, i.jsx)(g.Z, {})]
      })
    })]
  })
}

function y(e) {
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
    className: D.searchBarContainer,
    children: (0, i.jsx)(_.SearchBar, {
      placeholder: L.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER,
      query: t,
      onChange: a,
      onClear: l,
      size: _.SearchBar.Sizes.MEDIUM
    })
  })
}

function U() {
  return null
}

function b(e) {
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
    children: [(0, i.jsx)(p.Z, {
      title: L.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    }), (0, i.jsx)("div", {
      className: D.sectionContentContainer,
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

function G(e) {
  let {
    channel: t
  } = e, {
    sectionDescriptors: n,
    filterSection: s
  } = f.wi(t, {
    commandType: c.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: v.tn,
    includeFrecency: !0
  });
  r.useEffect(() => {
    s(v.bi.FRECENCY)
  }, [s]);
  let a = r.useMemo(() => n.filter(e => e.id !== v.bi.FRECENCY && e.id !== v.bi.BUILT_IN), [n]),
    l = (0, N.h)(a),
    u = r.useMemo(() => o().compact(l.map(e => {
      let {
        application: t
      } = e;
      return t
    })).map(e => ({
      application: e
    })), [l]),
    {
      items: _,
      handleViewMore: d
    } = B(L.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, R.U4.NO_BANNER, u, 8);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(p.Z, {
      title: L.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      onClickViewMore: d
    }), (0, i.jsx)("div", {
      className: D.sectionContentContainer,
      children: _.map(e => {
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

function w(e) {
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
      if (!n.some(e => e.appends_remaining_activities)) return M;
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
    children: n.map(e => (0, i.jsx)(k, {
      channel: t,
      recommendationsSection: e,
      remainingActivities: s
    }, e.key))
  })
}

function k(e) {
  let {
    channel: t,
    recommendationsSection: n,
    remainingActivities: s
  } = e, o = n.section_title, a = n.type === l.i.BANNER_CARDS ? R.U4.LARGE_BANNER : R.U4.NO_BANNER, {
    items: u,
    handleViewMore: _
  } = B(o, a, r.useMemo(() => {
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
    children: [(0, i.jsx)(p.Z, {
      title: n.section_title,
      onClickViewMore: _
    }), (0, i.jsx)("div", {
      className: D.sectionContentContainer,
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

function B(e, t, n, i) {
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