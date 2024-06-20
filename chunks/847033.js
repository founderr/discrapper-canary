n.d(t, {
  Z: function() {
    return R
  },
  m: function() {
    return O
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
  N = n(430824),
  m = n(626135),
  h = n(652515),
  C = n(550951),
  S = n(544978),
  A = n(333866),
  p = n(629481),
  g = n(981631);
let f = i.createContext(void 0);

function O() {
  let e = i.useContext(f);
  return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function R(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: a
  } = e, O = (0, r.e7)([N.Z], () => N.Z.getGuild(a)), R = (0, r.e7)([_.Z], () => _.Z.isViewingServerShop(a)), M = (0, C.g)(O, "guild_shop_page"), x = (0, h.RF)(a, "guild_shop_page"), v = (null == O ? void 0 : O.hasFeature(g.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, E.mY)(null == O ? void 0 : O.id), Z = null === (t = (0, d.YB)(a)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], D = S.y.GUILD_SHOP_FULL_PREVIEW;
  R || v && L ? (P.push(Z === A.a3.PRODUCTS_FIRST ? S.y.GUILD_PRODUCTS : S.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === A.a3.PRODUCTS_FIRST ? S.y.GUILD_ROLE_SUBSCRIPTIONS : S.y.GUILD_PRODUCTS), D = P[0]) : v && !L ? (P.push(S.y.GUILD_PRODUCTS), D = S.y.GUILD_PRODUCTS) : !v && L && (P.push(S.y.GUILD_ROLE_SUBSCRIPTIONS), D = S.y.GUILD_ROLE_SUBSCRIPTIONS, M && P.push(S.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : D;
  let [j, U] = i.useState(l), y = M && !(L && x) || j === S.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    U(l)
  }, [l]), (0, s.jsx)(f.Provider, {
    value: {
      selectedTab: j,
      setSelectedTab: U,
      categoryTabs: P,
      isPhantomPreview: y,
      handlePreviewDismiss: e => {
        (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, c.hH)(a)
        };
        if (j === S.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), U(S.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = p.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, I.dL)(g.Z5c.CHANNEL(a, null === (n = T.ZP.getDefaultChannel(a)) || void 0 === n ? void 0 : n.id)), t.action_taken = p.mz.DISMISS_FULL_PREVIEW
        }
        m.default.track(g.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}