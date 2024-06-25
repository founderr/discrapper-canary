n.d(t, {
  O: function() {
    return p
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
  m = n(998502),
  N = n(300986),
  h = n(314451),
  C = n(35583),
  S = n(981631),
  A = n(176505),
  g = n(656847);
async function p() {
  if ((0, T.isMac)() && T.isPlatformEmbedded) {
    var e, t, n;
    let s = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === s ? m.ZP.minimize() : "Maximize" === s && m.ZP.maximize()
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
    mobileToolbar: m,
    "aria-label": S,
    "aria-labelledby": A,
    scrollable: f,
    role: R,
    hideSearch: O,
    showDivider: M
  } = e, x = (0, r.e7)([_.default], () => _.default.getCurrentUser()), v = (null == x ? void 0 : x.isStaff()) || (null == x ? void 0 : x.isStaffPersonal()) || !1;
  return (0, s.jsx)(I.ZP, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == T) return null;
      let e = null != i && !O;
      return a.tq ? m : (0, s.jsxs)(s.Fragment, {
        children: [T, e ? (0, s.jsx)(E.Z, {
          className: g.search
        }, null != l ? l : i) : null, M && (0, s.jsx)(I.ZP.Divider, {}), (0, s.jsx)(C.Z, {}), (0, s.jsx)(u.Z, {
          canShowReminder: !0
        }), (0, s.jsx)(d.Z, {}), v ? (0, s.jsx)(h.Z, {}) : (0, s.jsx)(N.Z, {})]
      })
    }(),
    transparent: c,
    onDoubleClick: p,
    "aria-label": S,
    "aria-labelledby": A,
    role: R,
    scrollable: f,
    children: t
  })
}

function R(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: a
  } = e;
  return (0, s.jsx)(I.ZP, {
    className: n,
    onDoubleClick: p,
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    children: t
  })
}

function O(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    analyticsLocations: i
  } = (0, c.ZP)(o.Z.HEADER_BAR), a = l()(n.className, {
    [g.forumOrHome]: null != n.channelType && S.TPd.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === A.oC.GUILD_HOME
  });
  return (0, s.jsx)(c.Gt, {
    value: i,
    children: t ? (0, s.jsx)(f, {
      ...n,
      className: a
    }) : (0, s.jsx)(R, {
      ...n,
      className: a
    })
  })
}
O.Title = I.ZP.Title, O.Icon = I.ZP.Icon, O.Divider = I.ZP.Divider, O.Caret = I.ZP.Caret, t.Z = O