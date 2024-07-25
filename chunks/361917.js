t.d(n, {
  Z: function() {
return G;
  }
}), t(47120), t(653041), t(724458);
var i = t(735250),
  a = t(470079),
  l = t(392711),
  r = t.n(l),
  o = t(892814),
  s = t(79411),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(115130),
  p = t(566620),
  _ = t(127255),
  f = t(880308),
  C = t(427996),
  h = t(367907),
  A = t(399654),
  E = t(844439),
  N = t(254711),
  v = t(213459),
  x = t(10718),
  I = t(895924),
  g = t(148958),
  P = t(424602),
  L = t(541099),
  S = t(827498),
  T = t(87005),
  R = t(783097),
  b = t(695676),
  M = t(98880),
  y = t(804307),
  j = t(888617),
  O = t(561160),
  Z = t(41558),
  H = t(105862),
  U = t(28147),
  D = t(981631),
  B = t(689079),
  k = t(689938),
  w = t(678313);
let V = [],
  W = Array(8).fill(0).map((e, n) => n),
  F = [{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: M.U4.LARGE_BANNER
},
{
  cards: Array(8).fill(0).map((e, n) => n),
  look: M.U4.NO_BANNER
},
{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: M.U4.NO_BANNER
}
  ];

function G(e) {
  let {
channel: n,
entrypoint: t,
searchQuery: l,
setSearchQuery: r,
setScroller: o,
isScrollCloseToBottom: s
  } = e, d = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []), _ = t === S._b.TEXT, f = t === S._b.TEXT && !n.isPrivate(), C = t === S._b.TEXT, h = t === S._b.VOICE, A = t === S._b.TEXT, [E, N] = $(_), [v, x] = $(f), [I, g] = $(C), [P, L] = $(h), T = E && v && I && P, R = (C || f) && !T, b = h && d;
  a.useEffect(() => {
(0, p.w1)({
  guildId: n.getGuildId(),
  force: !0
});
  }, [n]);
  let M = l.length > 0;
  return (0, i.jsxs)('div', {
className: w.container,
children: [
  b ? (0, i.jsx)(Y, {}) : null,
  (0, i.jsx)(z, {
    searchQuery: l,
    setSearchQuery: r,
    placeholder: A ? k.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : k.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
  }),
  (0, i.jsx)(u.Scroller, {
    ref: o,
    className: w.scrollableContent,
    fade: !0,
    children: M ? (0, i.jsx)(U.Z, {
      channel: n,
      query: l,
      entrypoint: t,
      enableGlobalSearch: t === S._b.TEXT,
      isScrollCloseToBottom: s
    }) : (0, i.jsxs)('div', {
      children: [
        _ && (0, i.jsx)(X, {
          channel: n,
          entrypoint: t,
          onEmptyState: N
        }),
        f && (0, i.jsx)(Q, {
          channel: n,
          onEmptyState: x
        }),
        C && (0, i.jsx)(J, {
          channel: n,
          onEmptyState: g
        }),
        h && (0, i.jsx)(q, {
          channel: n,
          onEmptyState: L
        }),
        T && (0, i.jsx)(O.A, {
          type: S.LG.HOME_EMPTY,
          textContent: t === S._b.TEXT ? k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
        }),
        R && (0, i.jsx)(H.Z, {})
      ]
    })
  })
]
  });
}

function Y() {
  return (0, i.jsxs)('div', {
className: w.developerShelfControlsContainer,
children: [
  (0, i.jsx)(u.Text, {
    className: w.developerShelfControlsLabel,
    variant: 'text-sm/normal',
    children: k.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
  }),
  (0, i.jsx)(C.W, {
    hideSearch: !0
  })
]
  });
}

function z(e) {
  let {
searchQuery: n,
setSearchQuery: t,
placeholder: l
  } = e, o = a.useRef(null), [s, c] = a.useState(!1), d = a.useMemo(() => r().debounce(e => {
(0, h.yw)(D.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
  query: e,
  source: L.Z.entrypoint(),
  location: I.Vh.APP_LAUNCHER_HOME
});
  }, 400, {
leading: !1,
trailing: !0
  }), []), m = a.useCallback(() => t(''), [t]), p = a.useCallback(() => {
c(!0), (0, h.yw)(D.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
  source: L.Z.entrypoint(),
  location: I.Vh.APP_LAUNCHER_HOME
});
  }, []), _ = a.useCallback(() => {
c(!1);
  }, []), f = a.useCallback(e => {
!s && p(), t(e), d(e);
  }, [
s,
t,
p,
d
  ]);
  return a.useEffect(() => {
let e = o.current;
if (null == e)
  return;
let n = () => {
  !s && p();
};
return e.addEventListener('click', n), () => {
  e.removeEventListener('click', n);
};
  }, [
s,
p
  ]), (0, i.jsx)('div', {
className: w.searchBarContainer,
children: (0, i.jsx)(u.SearchBar, {
  ref: e => {
    var n;
    o.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
  },
  placeholder: l,
  query: n,
  onChange: f,
  onClear: m,
  size: u.SearchBar.Sizes.MEDIUM,
  onFocus: _,
  autoFocus: !0
})
  });
}

function X(e) {
  let {
channel: n,
entrypoint: t,
onEmptyState: l
  } = e, {
frecentApps: r,
loading: o
  } = (0, T.f)(n, !0), s = a.useMemo(() => {
let e = [];
for (let n of r)
  null != n.application && e.push({
    application: n.application,
    isPartner: !1
  });
return e;
  }, [r]), c = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
items: u,
handleViewMore: d
  } = ee(c, t === S._b.VOICE ? M.U4.LARGE_BANNER : M.U4.NO_BANNER, s, 8, S.L3.RECENT_APPS);
  a.useEffect(() => {
if (!0 !== o.current)
  0 !== u.length && (0, h.yw)(D.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
    num: u.length,
    section_name: S.L3.RECENT_APPS,
    location: S.G0.HOME,
    source: t
  });
  }, [
u.length,
t,
o
  ]);
  let m = o.current,
p = !m && 0 === u.length;
  return (a.useEffect(() => {
l(p);
  }, [
p,
l
  ]), m || p) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(Z.Z, {
    title: c,
    buttonType: Z.Z.buttonTypes.VIEW_MORE,
    onClickViewButton: d
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: (0, i.jsx)('div', {
      className: w.frecentList,
      children: u.map((e, n) => {
        let {
          application: t,
          isPartner: a
        } = e;
        return (0, i.jsx)(M.kA, {
          application: t,
          look: M.U4.ICON,
          isPartner: a,
          location: S.G0.HOME,
          sectionName: S.L3.RECENT_APPS,
          resultsPosition: n
        }, t.id);
      })
    })
  })
]
  });
}

function q(e) {
  let {
channel: n,
onEmptyState: t
  } = e;
  (0, f.g)();
  let l = (0, _.Z)({
  guildId: n.getGuildId()
}),
r = M.U4.LARGE_BANNER,
{
  trackSectionImpressionRef: o
} = (0, j.Z)({
  sectionName: S.L3.ACTIVITIES,
  numItems: l.length,
  numVisibleItems: l.length
}),
{
  clickOnHomeActivityOpensAppDetail: s
} = P.m1.getCurrentConfig({
  location: 'ActivitiesShelfSection'
}, {
  autoTrackExposure: !1
}),
c = 0 === l.length;
  return (a.useEffect(() => {
t(c);
  }, [
t,
c
  ]), c) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => o.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: k.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: l.map((e, t) => {
      let {
        application: a
      } = e;
      return (0, i.jsx)(M.qR, {
        channel: n,
        application: a,
        look: r,
        location: I.Vh.APP_LAUNCHER_HOME,
        sectionName: S.L3.ACTIVITIES,
        resultsPosition: t,
        isOneClickCTA: !s
      }, a.id);
    })
  })
]
  });
}

function Q(e) {
  var n;
  let {
channel: t,
onEmptyState: l
  } = e, o = (0, v.LD)(t.guild_id, !0), {
commandsByActiveSection: s,
loading: c
  } = x.wi(t, {
commandType: d.yU.CHAT
  }, {
placeholderCount: 0,
limit: B.tn,
includeFrecency: !0
  }), u = a.useMemo(() => s.reduce((e, n) => {
let {
  section: t,
  data: i
} = n;
return i.length > 0 && e.add(t.id), e;
  }, new Set()), [s]), m = a.useMemo(() => {
var e, n;
return Object.values(null !== (n = null === (e = o.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}).map(e => {
  let {
    descriptor: n
  } = e;
  return n;
}).filter(e => !(e.id in N.Tm) && u.has(e.id));
  }, [
null === (n = o.result) || void 0 === n ? void 0 : n.sections,
u
  ]), p = (0, g.h)(m), _ = S.L3.APPS_IN_THIS_SERVER, f = a.useMemo(() => r().compact(p.map(e => {
let {
  application: n
} = e;
return n;
  })).map(e => ({
application: e
  })), [p]), {
items: C,
handleViewMore: h
  } = ee(k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, M.U4.NO_BANNER, f, 8, _), {
trackSectionImpressionRef: A
  } = (0, j.Z)({
sectionName: _,
numItems: f.length,
numVisibleItems: C.length
  }), E = o.fetchState.fetching || c.current, P = !E && 0 === C.length;
  return (a.useEffect(() => {
l(P);
  }, [
P,
l
  ]), P) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => A.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: h
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: E ? W.map(e => (0, i.jsx)(y.Z, {
      look: M.U4.NO_BANNER
    }, e)) : C.map((e, n) => {
      let {
        application: t,
        isPartner: a
      } = e;
      return null != t ? (0, i.jsx)(M.kA, {
        application: t,
        isPartner: a,
        look: M.U4.NO_BANNER,
        sectionName: _,
        resultsPosition: n,
        location: I.Vh.APP_LAUNCHER_HOME
      }, t.id) : null;
    })
  })
]
  });
}

function J(e) {
  let {
channel: n,
onEmptyState: t
  } = e, {
fetchState: l,
recommendationsSections: r,
isInstallOnDemand: s
  } = function(e) {
let {
  channel: n,
  location: t
} = e, i = n.id;
a.useEffect(() => {
  (0, A.a)({
    channelId: i,
    location: t,
    withCommands: !1
  });
}, [
  i,
  t
]);
let {
  sectionDescriptors: l
} = x.wi(n, {
  commandType: d.yU.CHAT
}, {
  placeholderCount: 0,
  limit: B.tn,
  includeFrecency: !0
}), r = a.useCallback(e => !(0, R.ye)({
  application: e
}) && !(null != l.find(n => n.id === e.id)), [l]), {
  fetchState: o,
  recommendationsSections: s
} = (0, c.cj)([E.ZP], () => ({
  fetchState: E.ZP.getFetchState({
    channelId: i,
    location: t,
    withCommands: !1
  }),
  recommendationsSections: E.ZP.getRecommendations({
    channelId: i,
    location: t,
    withCommands: !1
  })
}));
return {
  fetchState: o,
  recommendationsSections: s,
  isInstallOnDemand: r
};
  }({
channel: n,
location: o.I.APP_LAUNCHER_TEXT
  }), u = function(e) {
let {
  channel: n,
  recommendationsSections: t
} = e;
(0, f.g)();
let i = (0, _.Z)({
  guildId: n.getGuildId()
});
return a.useMemo(() => {
  if (!t.some(e => e.appends_remaining_activities))
    return V;
  let e = new Set();
  return t.forEach(n => {
    n.items.forEach(n => {
      null != n.application && e.add(n.application.id);
    });
  }), i.filter(n => !e.has(n.application.id));
}, [
  t,
  i
]);
  }({
channel: n,
recommendationsSections: r
  }), m = l === E.M.FETCHING, p = !m && 0 === r.length;
  return (a.useEffect(() => {
t(p);
  }, [
p,
t
  ]), p) ? null : (0, i.jsx)(i.Fragment, {
children: m ? F.map((e, n) => {
  let {
    cards: t,
    look: a
  } = e;
  return (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(Z.Z.Loading, {}),
      (0, i.jsx)('div', {
        className: w.sectionContentContainer,
        children: t.map(e => (0, i.jsx)(y.Z, {
          look: a
        }, e))
      })
    ]
  }, n);
}) : r.map(e => (0, i.jsx)(K, {
  recommendationsSection: e,
  remainingActivities: u,
  isInstallOnDemand: s
}, e.key))
  });
}

function K(e) {
  let n, t, {
  recommendationsSection: l,
  remainingActivities: r,
  isInstallOnDemand: o
} = e,
c = l.section_title;
  switch (l.type) {
case s.i.BANNER_CARDS:
  n = M.U4.LARGE_BANNER;
  break;
case s.i.SMALL_BANNER_CARDS:
  n = M.U4.MEDIUM_BANNER;
  break;
default:
  n = M.U4.NO_BANNER;
  }
  let u = a.useMemo(() => {
  let e = l.items.map(e => {
    let {
      application: n,
      is_partner: t
    } = e;
    return {
      application: n,
      isPartner: t,
      installOnDemand: o(n)
    };
  });
  return l.appends_remaining_activities && e.push(...r.map(e => {
    let {
      application: n
    } = e;
    return {
      application: n,
      isPartner: !1,
      installOnDemand: !1
    };
  })), e;
}, [
  l.items,
  l.appends_remaining_activities,
  o,
  r
]),
d = l.key;
  switch (l.type) {
case s.i.BANNER_CARDS:
case s.i.SMALL_BANNER_CARDS:
  t = 6;
  break;
case s.i.EXPANDABLE_LIST:
default:
  t = 8;
  }
  let {
items: m,
handleViewMore: p
  } = ee(c, n, u, t, d), {
trackSectionImpressionRef: _
  } = (0, j.Z)({
sectionName: d,
numItems: u.length,
numVisibleItems: m.length
  }), f = l.type !== s.i.SMALL_BANNER_CARDS;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => _.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: l.section_title,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: p
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: m.map((e, t) => {
      let {
        application: a,
        isPartner: l,
        installOnDemand: r
      } = e;
      return (0, i.jsx)(M.kA, {
        application: a,
        look: n,
        isPartner: l,
        sectionName: d,
        resultsPosition: t,
        location: I.Vh.APP_LAUNCHER_HOME,
        installOnDemand: r,
        enableVideoBanner: f
      }, a.id);
    })
  })
]
  });
}

function $(e) {
  let [n, t] = a.useState(!e);
  return [
n,
a.useCallback(function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  t(e);
}, [])
  ];
}

function ee(e, n, t, i, l) {
  let {
pushHistory: r
  } = (0, b.hH)();
  return a.useMemo(() => t.length <= i ? {
items: t,
handleViewMore: void 0
  } : {
items: t.slice(0, i),
handleViewMore: () => {
  (0, h.yw)(D.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
    section_name: l,
    source: L.Z.entrypoint(),
    num: t.length
  }), r({
    type: b.gc.LIST,
    title: e,
    look: n,
    items: t,
    sectionName: l
  });
}
  }, [
t,
i,
l,
r,
e,
n
  ]);
}