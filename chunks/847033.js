n.d(t, {
    Z: function () {
        return O;
    },
    m: function () {
        return M;
    }
}),
    n(653041),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(512722),
    l = n.n(s),
    r = n(399606),
    o = n(704215),
    c = n(367907),
    d = n(605236),
    u = n(584825),
    _ = n(994592),
    E = n(160404),
    I = n(703656),
    m = n(984933),
    T = n(430824),
    N = n(626135),
    h = n(652515),
    C = n(550951),
    f = n(544978),
    p = n(333866),
    g = n(629481),
    A = n(981631);
let S = a.createContext(void 0);
function M() {
    let e = a.useContext(S);
    return l()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function O(e) {
    var t;
    let { children: n, initialTab: s, guildId: l } = e,
        M = (0, r.e7)([T.Z], () => T.Z.getGuild(l)),
        O = (0, r.e7)([E.Z], () => E.Z.isViewingServerShop(l)),
        x = (0, C.g)(M, 'guild_shop_page'),
        R = (0, h.RF)(l, 'guild_shop_page'),
        v = (null == M ? void 0 : M.hasFeature(A.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        L = (0, _.mY)(null == M ? void 0 : M.id),
        Z = null === (t = (0, u.YB)(l)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        P = [],
        b = f.y.GUILD_SHOP_FULL_PREVIEW;
    O || (v && L) ? (P.push(Z === p.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === p.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), (b = P[0])) : v && !L ? (P.push(f.y.GUILD_PRODUCTS), (b = f.y.GUILD_PRODUCTS)) : !v && L && (P.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), (b = f.y.GUILD_ROLE_SUBSCRIPTIONS), x && P.push(f.y.GUILD_PRODUCTS_PREVIEW)), (s = null != s ? s : b);
    let [D, j] = a.useState(s),
        U = (x && !(L && R)) || D === f.y.GUILD_PRODUCTS_PREVIEW;
    return (
        a.useEffect(() => {
            j(s);
        }, [s]),
        (0, i.jsx)(S.Provider, {
            value: {
                selectedTab: D,
                setSelectedTab: j,
                categoryTabs: P,
                isPhantomPreview: U,
                handlePreviewDismiss: (e) => {
                    (0, d.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(l) };
                    if (D === f.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(f.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = g.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(A.Z5c.CHANNEL(l, null === (n = m.ZP.getDefaultChannel(l)) || void 0 === n ? void 0 : n.id)), (t.action_taken = g.mz.DISMISS_FULL_PREVIEW);
                    }
                    N.default.track(A.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
