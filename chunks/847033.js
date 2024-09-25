n.d(t, {
    Z: function () {
        return y;
    },
    m: function () {
        return C;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(512722),
    l = n.n(s),
    u = n(399606),
    c = n(704215),
    d = n(367907),
    _ = n(605236),
    E = n(584825),
    f = n(994592),
    h = n(160404),
    p = n(703656),
    m = n(984933),
    I = n(430824),
    T = n(626135),
    g = n(652515),
    S = n(550951),
    A = n(544978),
    v = n(333866),
    N = n(629481),
    O = n(981631);
let R = o.createContext(void 0);
function C() {
    let e = o.useContext(R);
    return l()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function y(e) {
    var t;
    let { children: n, initialTab: r, guildId: i } = e,
        s = (0, u.e7)([I.Z], () => I.Z.getGuild(i)),
        l = (0, u.e7)([h.Z], () => h.Z.isViewingServerShop(i)),
        C = (0, S.g)(s, 'guild_shop_page'),
        y = (0, g.RF)(i, 'guild_shop_page'),
        b = (null == s ? void 0 : s.hasFeature(O.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        L = (0, f.mY)(null == s ? void 0 : s.id),
        D = L && y,
        M = null === (t = (0, E.YB)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        P = [],
        U = A.y.GUILD_SHOP_FULL_PREVIEW;
    l || (b && L) ? (P.push(M === v.a3.PRODUCTS_FIRST ? A.y.GUILD_PRODUCTS : A.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(M === v.a3.PRODUCTS_FIRST ? A.y.GUILD_ROLE_SUBSCRIPTIONS : A.y.GUILD_PRODUCTS), (U = P[0])) : b && !L ? (P.push(A.y.GUILD_PRODUCTS), (U = A.y.GUILD_PRODUCTS)) : !b && L && (P.push(A.y.GUILD_ROLE_SUBSCRIPTIONS), (U = A.y.GUILD_ROLE_SUBSCRIPTIONS), C && P.push(A.y.GUILD_PRODUCTS_PREVIEW)), (r = null != r ? r : U);
    let [w, x] = o.useState(r),
        G = (C && !D) || w === A.y.GUILD_PRODUCTS_PREVIEW;
    o.useEffect(() => {
        x(r);
    }, [r]);
    let k = (e) => {
        (0, _.EW)(c.z.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = { ...(0, d.hH)(i) };
        if (w === A.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), x(A.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = N.mz.DISMISS_TAB_PREVIEW);
        else {
            var n;
            (0, p.dL)(O.Z5c.CHANNEL(i, null === (n = m.ZP.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), (t.action_taken = N.mz.DISMISS_FULL_PREVIEW);
        }
        T.default.track(O.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
    };
    return (0, a.jsx)(R.Provider, {
        value: {
            selectedTab: w,
            setSelectedTab: x,
            categoryTabs: P,
            isPhantomPreview: G,
            handlePreviewDismiss: k
        },
        children: n
    });
}
