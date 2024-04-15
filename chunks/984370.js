"use strict";
n.r(t), n.d(t, {
  handleDoubleClick: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("873546"),
  r = n("442837"),
  o = n("100527"),
  u = n("906732"),
  d = n("320007"),
  c = n("141321"),
  f = n("208450"),
  h = n("594174"),
  E = n("502568"),
  m = n("358085"),
  p = n("998502"),
  S = n("300986"),
  g = n("314451"),
  _ = n("35583"),
  N = n("981631"),
  I = n("176505"),
  T = n("210652");
async function C() {
  if ((0, m.isMac)() && m.isPlatformEmbedded) {
    var e, t, n;
    let a = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === a ? p.default.minimize() : "Maximize" === a && p.default.maximize()
  }
}

function A(e) {
  let {
    children: t,
    className: n,
    channelId: l,
    guildId: s,
    innerClassname: o,
    transparent: u = !1,
    toolbar: m,
    mobileToolbar: p,
    "aria-label": N,
    "aria-labelledby": I,
    scrollable: A,
    role: v,
    hideSearch: R,
    showDivider: x
  } = e, M = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), L = (null == M ? void 0 : M.isStaff()) || (null == M ? void 0 : M.isStaffPersonal()) || !1;
  return (0, a.jsx)(E.default, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == m) return null;
      let e = null != l && !R;
      return i.isMobile ? p : (0, a.jsxs)(a.Fragment, {
        children: [m, e ? (0, a.jsx)(f.default, {
          className: T.search
        }, null != s ? s : l) : null, x && (0, a.jsx)(E.default.Divider, {}), (0, a.jsx)(_.default, {}), (0, a.jsx)(d.default, {
          canShowReminder: !0
        }), (0, a.jsx)(c.default, {}), L ? (0, a.jsx)(g.default, {}) : (0, a.jsx)(S.default, {})]
      })
    }(),
    transparent: u,
    onDoubleClick: C,
    "aria-label": N,
    "aria-labelledby": I,
    role: v,
    scrollable: A,
    children: t
  })
}

function v(e) {
  let {
    children: t,
    className: n,
    "aria-label": l,
    "aria-labelledby": s,
    role: i
  } = e;
  return (0, a.jsx)(E.default, {
    className: n,
    onDoubleClick: C,
    "aria-label": l,
    "aria-labelledby": s,
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
  } = (0, u.default)(o.default.HEADER_BAR), i = s()(n.className, {
    [T.forumOrHome]: null != n.channelType && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === I.StaticChannelRoute.GUILD_HOME
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: l,
    children: t ? (0, a.jsx)(A, {
      ...n,
      className: i
    }) : (0, a.jsx)(v, {
      ...n,
      className: i
    })
  })
}
R.Title = E.default.Title, R.Icon = E.default.Icon, R.Divider = E.default.Divider, R.Caret = E.default.Caret, t.default = R