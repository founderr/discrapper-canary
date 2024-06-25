n.d(t, {
  Z: function() {
    return O
  },
  m: function() {
    return R
  }
}), n(653041), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(512722),
  a = n.n(l),
  r = n(399606),
  o = n(704215),
  c = n(367907),
  u = n(605236),
  d = n(584825),
  E = n(994592),
  _ = n(160404),
  I = n(703656),
  T = n(984933),
  m = n(430824),
  N = n(626135),
  h = n(652515),
  C = n(550951),
  S = n(544978),
  A = n(333866),
  g = n(629481),
  p = n(981631);
let f = i.createContext(void 0);

function R() {
  let e = i.useContext(f);
  return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function O(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: a
  } = e, R = (0, r.e7)([m.Z], () => m.Z.getGuild(a)), O = (0, r.e7)([_.Z], () => _.Z.isViewingServerShop(a)), M = (0, C.g)(R, "guild_shop_page"), x = (0, h.RF)(a, "guild_shop_page"), v = (null == R ? void 0 : R.hasFeature(p.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, E.mY)(null == R ? void 0 : R.id), Z = null === (t = (0, d.YB)(a)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], D = S.y.GUILD_SHOP_FULL_PREVIEW;
  O || v && L ? (P.push(Z === A.a3.PRODUCTS_FIRST ? S.y.GUILD_PRODUCTS : S.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === A.a3.PRODUCTS_FIRST ? S.y.GUILD_ROLE_SUBSCRIPTIONS : S.y.GUILD_PRODUCTS), D = P[0]) : v && !L ? (P.push(S.y.GUILD_PRODUCTS), D = S.y.GUILD_PRODUCTS) : !v && L && (P.push(S.y.GUILD_ROLE_SUBSCRIPTIONS), D = S.y.GUILD_ROLE_SUBSCRIPTIONS, M && P.push(S.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : D;
  let [j, U] = i.useState(l), b = M && !(L && x) || j === S.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    U(l)
  }, [l]), (0, s.jsx)(f.Provider, {
    value: {
      selectedTab: j,
      setSelectedTab: U,
      categoryTabs: P,
      isPhantomPreview: b,
      handlePreviewDismiss: e => {
        (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, c.hH)(a)
        };
        if (j === S.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), U(S.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, I.dL)(p.Z5c.CHANNEL(a, null === (n = T.ZP.getDefaultChannel(a)) || void 0 === n ? void 0 : n.id)), t.action_taken = g.mz.DISMISS_FULL_PREVIEW
        }
        N.default.track(p.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}