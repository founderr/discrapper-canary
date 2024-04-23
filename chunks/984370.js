"use strict";
n.r(t), n.d(t, {
  handleDoubleClick: function() {
    return A
  }
});
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("873546"),
  r = n("442837"),
  o = n("100527"),
  u = n("906732"),
  d = n("320007"),
  c = n("141321"),
  f = n("208450"),
  E = n("594174"),
  _ = n("502568"),
  m = n("358085"),
  T = n("998502"),
  I = n("300986"),
  p = n("314451"),
  h = n("35583"),
  N = n("981631"),
  S = n("176505"),
  C = n("210652");
async function A() {
  if ((0, m.isMac)() && m.isPlatformEmbedded) {
    var e, t, n;
    let s = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === s ? T.default.minimize() : "Maximize" === s && T.default.maximize()
  }
}

function g(e) {
  let {
    children: t,
    className: n,
    channelId: l,
    guildId: a,
    innerClassname: o,
    transparent: u = !1,
    toolbar: m,
    mobileToolbar: T,
    "aria-label": N,
    "aria-labelledby": S,
    scrollable: g,
    role: M,
    hideSearch: R,
    showDivider: v
  } = e, O = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), x = (null == O ? void 0 : O.isStaff()) || (null == O ? void 0 : O.isStaffPersonal()) || !1;
  return (0, s.jsx)(_.default, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == m) return null;
      let e = null != l && !R;
      return i.isMobile ? T : (0, s.jsxs)(s.Fragment, {
        children: [m, e ? (0, s.jsx)(f.default, {
          className: C.search
        }, null != a ? a : l) : null, v && (0, s.jsx)(_.default.Divider, {}), (0, s.jsx)(h.default, {}), (0, s.jsx)(d.default, {
          canShowReminder: !0
        }), (0, s.jsx)(c.default, {}), x ? (0, s.jsx)(p.default, {}) : (0, s.jsx)(I.default, {})]
      })
    }(),
    transparent: u,
    onDoubleClick: A,
    "aria-label": N,
    "aria-labelledby": S,
    role: M,
    scrollable: g,
    children: t
  })
}

function M(e) {
  let {
    children: t,
    className: n,
    "aria-label": l,
    "aria-labelledby": a,
    role: i
  } = e;
  return (0, s.jsx)(_.default, {
    className: n,
    onDoubleClick: A,
    "aria-label": l,
    "aria-labelledby": a,
    role: i,
    children: t
  })
}

function R(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    analyticsLocations: l
  } = (0, u.default)(o.default.HEADER_BAR), i = a()(n.className, {
    [C.forumOrHome]: null != n.channelType && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === S.StaticChannelRoute.GUILD_HOME
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: l,
    children: t ? (0, s.jsx)(g, {
      ...n,
      className: i
    }) : (0, s.jsx)(M, {
      ...n,
      className: i
    })
  })
}
R.Title = _.default.Title, R.Icon = _.default.Icon, R.Divider = _.default.Divider, R.Caret = _.default.Caret, t.default = R