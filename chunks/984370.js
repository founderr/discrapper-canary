n.d(t, {
  O: function() {
    return g
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(873546),
  r = n(442837),
  o = n(100527),
  c = n(906732),
  u = n(320007),
  d = n(141321),
  E = n(208450),
  _ = n(594174),
  I = n(502568),
  T = n(358085),
  N = n(998502),
  m = n(300986),
  h = n(314451),
  C = n(35583),
  S = n(981631),
  A = n(176505),
  p = n(656847);
async function g() {
  if ((0, T.isMac)() && T.isPlatformEmbedded) {
    var e, t, n;
    let s = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === s ? N.ZP.minimize() : "Maximize" === s && N.ZP.maximize()
  }
}

function f(e) {
  let {
    children: t,
    className: n,
    channelId: i,
    guildId: l,
    innerClassname: o,
    transparent: c = !1,
    toolbar: T,
    mobileToolbar: N,
    "aria-label": S,
    "aria-labelledby": A,
    scrollable: f,
    role: O,
    hideSearch: R,
    showDivider: M
  } = e, x = (0, r.e7)([_.default], () => _.default.getCurrentUser()), v = (null == x ? void 0 : x.isStaff()) || (null == x ? void 0 : x.isStaffPersonal()) || !1;
  return (0, s.jsx)(I.ZP, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == T) return null;
      let e = null != i && !R;
      return a.tq ? N : (0, s.jsxs)(s.Fragment, {
        children: [T, e ? (0, s.jsx)(E.Z, {
          className: p.search
        }, null != l ? l : i) : null, M && (0, s.jsx)(I.ZP.Divider, {}), (0, s.jsx)(C.Z, {}), (0, s.jsx)(u.Z, {
          canShowReminder: !0
        }), (0, s.jsx)(d.Z, {}), v ? (0, s.jsx)(h.Z, {}) : (0, s.jsx)(m.Z, {})]
      })
    }(),
    transparent: c,
    onDoubleClick: g,
    "aria-label": S,
    "aria-labelledby": A,
    role: O,
    scrollable: f,
    children: t
  })
}

function O(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: a
  } = e;
  return (0, s.jsx)(I.ZP, {
    className: n,
    onDoubleClick: g,
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    children: t
  })
}

function R(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    analyticsLocations: i
  } = (0, c.ZP)(o.Z.HEADER_BAR), a = l()(n.className, {
    [p.forumOrHome]: null != n.channelType && S.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === A.oC.GUILD_HOME
  });
  return (0, s.jsx)(c.Gt, {
    value: i,
    children: t ? (0, s.jsx)(f, {
      ...n,
      className: a
    }) : (0, s.jsx)(O, {
      ...n,
      className: a
    })
  })
}
R.Title = I.ZP.Title, R.Icon = I.ZP.Icon, R.Divider = I.ZP.Divider, R.Caret = I.ZP.Caret, t.Z = R