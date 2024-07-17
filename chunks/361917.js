t.d(n, {
  Z: function() {
return Y;
  }
}), t(47120), t(653041), t(724458);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(892814),
  o = t(79411),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(115130),
  p = t(566620),
  _ = t(127255),
  E = t(880308),
  A = t(427996),
  h = t(367907),
  f = t(399654),
  N = t(844439),
  C = t(254711),
  v = t(213459),
  I = t(10718),
  P = t(895924),
  T = t(148958),
  S = t(424602),
  x = t(541099),
  R = t(827498),
  L = t(87005),
  g = t(783097),
  M = t(695676),
  y = t(98880),
  O = t(804307),
  j = t(888617),
  b = t(561160),
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
  look: y.U4.LARGE_BANNER
},
{
  cards: Array(8).fill(0).map((e, n) => n),
  look: y.U4.NO_BANNER
},
{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: y.U4.NO_BANNER
}
  ];

function Y(e) {
  let {
channel: n,
entrypoint: t,
searchQuery: a,
setSearchQuery: r,
setScroller: s,
isScrollCloseToBottom: o
  } = e, d = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []), _ = t === R._b.TEXT, E = t === R._b.TEXT, A = t === R._b.TEXT, h = t === R._b.VOICE, f = t === R._b.TEXT, [N, C] = K(_), [v, I] = K(E), [P, T] = K(A), [S, x] = K(h), L = N && v && P && S, g = (A || E) && !L, M = h && d;
  l.useEffect(() => {
(0, p.w1)({
  guildId: n.getGuildId(),
  force: !0
});
  }, [n]);
  let y = a.length > 0;
  return (0, i.jsxs)('div', {
className: w.container,
children: [
  M ? (0, i.jsx)(G, {}) : null,
  (0, i.jsx)(z, {
    searchQuery: a,
    setSearchQuery: r,
    placeholder: f ? k.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : k.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
  }),
  (0, i.jsx)(u.Scroller, {
    ref: s,
    className: w.scrollableContent,
    fade: !0,
    children: y ? (0, i.jsx)(U.Z, {
      channel: n,
      query: a,
      entrypoint: t,
      enableGlobalSearch: t === R._b.TEXT,
      isScrollCloseToBottom: o
    }) : (0, i.jsxs)('div', {
      children: [
        _ && (0, i.jsx)(X, {
          channel: n,
          entrypoint: t,
          onEmptyState: C
        }),
        E && (0, i.jsx)(Q, {
          channel: n,
          onEmptyState: I
        }),
        A && (0, i.jsx)(J, {
          channel: n,
          onEmptyState: T
        }),
        h && (0, i.jsx)(q, {
          channel: n,
          onEmptyState: x
        }),
        L && (0, i.jsx)(b.A, {
          type: R.LG.HOME_EMPTY,
          textContent: t === R._b.TEXT ? k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : k.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
        }),
        g && (0, i.jsx)(H.Z, {})
      ]
    })
  })
]
  });
}

function G() {
  return (0, i.jsxs)('div', {
className: w.developerShelfControlsContainer,
children: [
  (0, i.jsx)(u.Text, {
    className: w.developerShelfControlsLabel,
    variant: 'text-sm/normal',
    children: k.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
  }),
  (0, i.jsx)(A.W, {
    hideSearch: !0
  })
]
  });
}

function z(e) {
  let {
searchQuery: n,
setSearchQuery: t,
placeholder: a
  } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
(0, h.yw)(D.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
  query: e,
  source: x.Z.entrypoint(),
  location: P.Vh.APP_LAUNCHER_HOME
});
  }, 400, {
leading: !1,
trailing: !0
  }), []), p = l.useCallback(() => t(''), [t]), _ = l.useCallback(() => {
d(!0), (0, h.yw)(D.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
  source: x.Z.entrypoint(),
  location: P.Vh.APP_LAUNCHER_HOME
});
  }, []), E = l.useCallback(() => {
if (s) {
  o(!1);
  return;
}
_();
  }, [
s,
_
  ]), A = l.useCallback(e => {
!c && _(), t(e), m(e);
  }, [
c,
t,
_,
m
  ]);
  return (0, i.jsx)('div', {
className: w.searchBarContainer,
children: (0, i.jsx)(u.SearchBar, {
  placeholder: a,
  query: n,
  onChange: A,
  onClear: p,
  size: u.SearchBar.Sizes.MEDIUM,
  autoFocus: !0,
  onFocus: E
})
  });
}

function X(e) {
  let {
channel: n,
entrypoint: t,
onEmptyState: a
  } = e, {
frecentApps: r,
loading: s
  } = (0, L.f)(n, !0), o = l.useMemo(() => {
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
  } = ee(c, t === R._b.VOICE ? y.U4.LARGE_BANNER : y.U4.NO_BANNER, o, 8, R.L3.RECENT_APPS);
  l.useEffect(() => {
if (!0 !== s.current)
  0 !== u.length && (0, h.yw)(D.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
    num: u.length,
    section_name: R.L3.RECENT_APPS,
    location: R.G0.HOME,
    source: t
  });
  }, [
u.length,
t,
s
  ]);
  let m = s.current,
p = !m && 0 === u.length;
  return (l.useEffect(() => {
a(p);
  }, [
p,
a
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
          isPartner: l
        } = e;
        return (0, i.jsx)(y.kA, {
          application: t,
          look: y.U4.ICON,
          isPartner: l,
          location: R.G0.HOME,
          sectionName: R.L3.RECENT_APPS,
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
  (0, E.g)();
  let a = (0, _.Z)({
  guildId: n.getGuildId(),
  channel: n
}),
r = y.U4.LARGE_BANNER,
{
  trackSectionImpressionRef: s
} = (0, j.Z)({
  sectionName: R.L3.ACTIVITIES,
  numItems: a.length,
  numVisibleItems: a.length
}),
{
  clickOnHomeActivityOpensAppDetail: o
} = S.m1.getCurrentConfig({
  location: 'ActivitiesShelfSection'
}, {
  autoTrackExposure: !1
}),
c = 0 === a.length;
  return (l.useEffect(() => {
t(c);
  }, [
t,
c
  ]), c) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => s.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: k.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: a.map((e, t) => {
      let {
        application: l
      } = e;
      return (0, i.jsx)(y.qR, {
        channel: n,
        application: l,
        look: r,
        location: P.Vh.APP_LAUNCHER_HOME,
        sectionName: R.L3.ACTIVITIES,
        resultsPosition: t,
        isOneClickCTA: !o
      }, l.id);
    })
  })
]
  });
}

function Q(e) {
  var n;
  let {
channel: t,
onEmptyState: a
  } = e, s = (0, v.LD)(t.guild_id, !0), {
commandsByActiveSection: o,
loading: c
  } = I.wi(t, {
commandType: d.yU.CHAT
  }, {
placeholderCount: 0,
limit: B.tn,
includeFrecency: !0
  }), u = l.useMemo(() => o.reduce((e, n) => {
let {
  section: t,
  data: i
} = n;
return i.length > 0 && e.add(t.id), e;
  }, new Set()), [o]), m = l.useMemo(() => {
var e, n;
return Object.values(null !== (n = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}).map(e => {
  let {
    descriptor: n
  } = e;
  return n;
}).filter(e => !(e.id in C.Tm) && u.has(e.id));
  }, [
null === (n = s.result) || void 0 === n ? void 0 : n.sections,
u
  ]), p = (0, T.h)(m), _ = R.L3.APPS_IN_THIS_SERVER, E = l.useMemo(() => r().compact(p.map(e => {
let {
  application: n
} = e;
return n;
  })).map(e => ({
application: e
  })), [p]), {
items: A,
handleViewMore: h
  } = ee(k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, y.U4.NO_BANNER, E, 8, _), {
trackSectionImpressionRef: f
  } = (0, j.Z)({
sectionName: _,
numItems: E.length,
numVisibleItems: A.length
  }), N = s.fetchState.fetching || c.current, S = !N && 0 === A.length;
  return (l.useEffect(() => {
a(S);
  }, [
S,
a
  ]), S) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => f.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: h
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: N ? W.map(e => (0, i.jsx)(O.Z, {
      look: y.U4.NO_BANNER
    }, e)) : A.map((e, n) => {
      let {
        application: t,
        isPartner: l
      } = e;
      return null != t ? (0, i.jsx)(y.kA, {
        application: t,
        isPartner: l,
        look: y.U4.NO_BANNER,
        sectionName: _,
        resultsPosition: n,
        location: P.Vh.APP_LAUNCHER_HOME
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
fetchState: a,
recommendationsSections: r,
isInstallOnDemand: o
  } = function(e) {
let {
  channel: n,
  location: t
} = e, i = n.id;
l.useEffect(() => {
  (0, f.$)({
    channelId: i,
    location: t
  });
}, [
  i,
  t
]);
let {
  sectionDescriptors: a
} = I.wi(n, {
  commandType: d.yU.CHAT
}, {
  placeholderCount: 0,
  limit: B.tn,
  includeFrecency: !0
}), r = l.useCallback(e => !(0, g.ye)({
  application: e
}) && !(null != a.find(n => n.id === e.id)), [a]), {
  fetchState: s,
  recommendationsSections: o
} = (0, c.cj)([N.ZP], () => ({
  fetchState: N.ZP.getFetchState({
    channelId: i,
    location: t
  }),
  recommendationsSections: N.ZP.getRecommendations({
    channelId: i,
    location: t
  })
}));
return {
  fetchState: s,
  recommendationsSections: o,
  isInstallOnDemand: r
};
  }({
channel: n,
location: s.I.APP_LAUNCHER_TEXT
  }), u = function(e) {
let {
  channel: n,
  recommendationsSections: t
} = e;
(0, E.g)();
let i = (0, _.Z)({
  guildId: n.getGuildId(),
  channel: n
});
return l.useMemo(() => {
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
  }), m = a === N.M.FETCHING, p = !m && 0 === r.length;
  return (l.useEffect(() => {
t(p);
  }, [
p,
t
  ]), p) ? null : (0, i.jsx)(i.Fragment, {
children: m ? F.map((e, n) => {
  let {
    cards: t,
    look: l
  } = e;
  return (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(Z.Z.Loading, {}),
      (0, i.jsx)('div', {
        className: w.sectionContentContainer,
        children: t.map(e => (0, i.jsx)(O.Z, {
          look: l
        }, e))
      })
    ]
  }, n);
}) : r.map(e => (0, i.jsx)($, {
  recommendationsSection: e,
  remainingActivities: u,
  isInstallOnDemand: o
}, e.key))
  });
}

function $(e) {
  let n, t, {
  recommendationsSection: a,
  remainingActivities: r,
  isInstallOnDemand: s
} = e,
c = a.section_title;
  switch (a.type) {
case o.i.BANNER_CARDS:
  n = y.U4.LARGE_BANNER;
  break;
case o.i.SMALL_BANNER_CARDS:
  n = y.U4.MEDIUM_BANNER;
  break;
default:
  n = y.U4.NO_BANNER;
  }
  let u = l.useMemo(() => {
  let e = a.items.map(e => {
    let {
      application: n,
      is_partner: t
    } = e;
    return {
      application: n,
      isPartner: t,
      installOnDemand: s(n)
    };
  });
  return a.appends_remaining_activities && e.push(...r.map(e => {
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
  a.items,
  a.appends_remaining_activities,
  s,
  r
]),
d = a.key;
  switch (a.type) {
case o.i.BANNER_CARDS:
case o.i.SMALL_BANNER_CARDS:
  t = 6;
  break;
case o.i.EXPANDABLE_LIST:
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
  }), E = a.type !== o.i.SMALL_BANNER_CARDS;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => _.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: a.section_title,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: p
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: m.map((e, t) => {
      let {
        application: l,
        isPartner: a,
        installOnDemand: r
      } = e;
      return (0, i.jsx)(y.kA, {
        application: l,
        look: n,
        isPartner: a,
        sectionName: d,
        resultsPosition: t,
        location: P.Vh.APP_LAUNCHER_HOME,
        installOnDemand: r,
        enableVideoBanner: E
      }, l.id);
    })
  })
]
  });
}

function K(e) {
  let [n, t] = l.useState(!e);
  return [
n,
l.useCallback(function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  t(e);
}, [])
  ];
}

function ee(e, n, t, i, a) {
  let {
pushHistory: r
  } = (0, M.hH)();
  return l.useMemo(() => t.length <= i ? {
items: t,
handleViewMore: void 0
  } : {
items: t.slice(0, i),
handleViewMore: () => {
  (0, h.yw)(D.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
    section_name: a,
    source: x.Z.entrypoint()
  }), r({
    type: M.gc.LIST,
    title: e,
    look: n,
    items: t,
    sectionName: a
  });
}
  }, [
t,
i,
a,
r,
e,
n
  ]);
}