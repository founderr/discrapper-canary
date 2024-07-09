n.d(t, {
    Z: function () {
        return R;
    },
    m: function () {
        return x;
    }
}), n(653041), n(47120);
var i = n(735250), a = n(470079), s = n(512722), r = n.n(s), l = n(399606), o = n(704215), c = n(367907), d = n(605236), u = n(584825), _ = n(994592), E = n(160404), m = n(703656), I = n(984933), T = n(430824), h = n(626135), N = n(652515), p = n(550951), f = n(544978), C = n(333866), g = n(629481), S = n(981631);
let A = a.createContext(void 0);
function x() {
    let e = a.useContext(A);
    return r()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function R(e) {
    var t;
    let {
            children: n,
            initialTab: s,
            guildId: r
        } = e, x = (0, l.e7)([T.Z], () => T.Z.getGuild(r)), R = (0, l.e7)([E.Z], () => E.Z.isViewingServerShop(r)), O = (0, p.g)(x, 'guild_shop_page'), M = (0, N.RF)(r, 'guild_shop_page'), v = (null == x ? void 0 : x.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, _.mY)(null == x ? void 0 : x.id), Z = null === (t = (0, u.YB)(r)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], b = f.y.GUILD_SHOP_FULL_PREVIEW;
    R || v && L ? (P.push(Z === C.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === C.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), b = P[0]) : v && !L ? (P.push(f.y.GUILD_PRODUCTS), b = f.y.GUILD_PRODUCTS) : !v && L && (P.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), b = f.y.GUILD_ROLE_SUBSCRIPTIONS, O && P.push(f.y.GUILD_PRODUCTS_PREVIEW)), s = null != s ? s : b;
    let [D, j] = a.useState(s), U = O && !(L && M) || D === f.y.GUILD_PRODUCTS_PREVIEW;
    return a.useEffect(() => {
        j(s);
    }, [s]), (0, i.jsx)(A.Provider, {
        value: {
            selectedTab: D,
            setSelectedTab: j,
            categoryTabs: P,
            isPhantomPreview: U,
            handlePreviewDismiss: e => {
                (0, d.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = { ...(0, c.hH)(r) };
                if (D === f.y.GUILD_PRODUCTS_PREVIEW)
                    e.stopPropagation(), j(f.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
                else {
                    var n;
                    (0, m.dL)(S.Z5c.CHANNEL(r, null === (n = I.ZP.getDefaultChannel(r)) || void 0 === n ? void 0 : n.id)), t.action_taken = g.mz.DISMISS_FULL_PREVIEW;
                }
                h.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
            }
        },
        children: n
    });
}
