n.d(t, {
  Z: function() {
return R;
  },
  m: function() {
return M;
  }
}), n(653041), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  r = n.n(s),
  l = n(399606),
  o = n(704215),
  c = n(367907),
  u = n(605236),
  d = n(584825),
  _ = n(994592),
  E = n(160404),
  I = n(703656),
  m = n(984933),
  T = n(430824),
  h = n(626135),
  N = n(652515),
  f = n(550951),
  C = n(544978),
  p = n(333866),
  g = n(629481),
  S = n(981631);
let A = a.createContext(void 0);

function M() {
  let e = a.useContext(A);
  return r()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}

function R(e) {
  var t;
  let {
children: n,
initialTab: s,
guildId: r
  } = e, M = (0, l.e7)([T.Z], () => T.Z.getGuild(r)), R = (0, l.e7)([E.Z], () => E.Z.isViewingServerShop(r)), O = (0, f.g)(M, 'guild_shop_page'), x = (0, N.RF)(r, 'guild_shop_page'), v = (null == M ? void 0 : M.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, Z = (0, _.mY)(null == M ? void 0 : M.id), L = null === (t = (0, d.YB)(r)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], D = C.y.GUILD_SHOP_FULL_PREVIEW;
  R || v && Z ? (P.push(L === p.a3.PRODUCTS_FIRST ? C.y.GUILD_PRODUCTS : C.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(L === p.a3.PRODUCTS_FIRST ? C.y.GUILD_ROLE_SUBSCRIPTIONS : C.y.GUILD_PRODUCTS), D = P[0]) : v && !Z ? (P.push(C.y.GUILD_PRODUCTS), D = C.y.GUILD_PRODUCTS) : !v && Z && (P.push(C.y.GUILD_ROLE_SUBSCRIPTIONS), D = C.y.GUILD_ROLE_SUBSCRIPTIONS, O && P.push(C.y.GUILD_PRODUCTS_PREVIEW)), s = null != s ? s : D;
  let [b, j] = a.useState(s), U = O && !(Z && x) || b === C.y.GUILD_PRODUCTS_PREVIEW;
  return a.useEffect(() => {
j(s);
  }, [s]), (0, i.jsx)(A.Provider, {
value: {
  selectedTab: b,
  setSelectedTab: j,
  categoryTabs: P,
  isPhantomPreview: U,
  handlePreviewDismiss: e => {
    (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
    let t = {
      ...(0, c.hH)(r)
    };
    if (b === C.y.GUILD_PRODUCTS_PREVIEW)
      e.stopPropagation(), j(C.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
    else {
      var n;
      (0, I.dL)(S.Z5c.CHANNEL(r, null === (n = m.ZP.getDefaultChannel(r)) || void 0 === n ? void 0 : n.id)), t.action_taken = g.mz.DISMISS_FULL_PREVIEW;
    }
    h.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
  }
},
children: n
  });
}