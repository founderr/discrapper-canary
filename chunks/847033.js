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
    p = n(544978),
    f = n(333866),
    A = n(629481),
    g = n(981631);
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
        v = (null == M ? void 0 : M.hasFeature(g.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        L = (0, _.mY)(null == M ? void 0 : M.id),
        Z = null === (t = (0, u.YB)(l)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        P = [],
        D = p.y.GUILD_SHOP_FULL_PREVIEW;
    O || (v && L) ? (P.push(Z === f.a3.PRODUCTS_FIRST ? p.y.GUILD_PRODUCTS : p.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === f.a3.PRODUCTS_FIRST ? p.y.GUILD_ROLE_SUBSCRIPTIONS : p.y.GUILD_PRODUCTS), (D = P[0])) : v && !L ? (P.push(p.y.GUILD_PRODUCTS), (D = p.y.GUILD_PRODUCTS)) : !v && L && (P.push(p.y.GUILD_ROLE_SUBSCRIPTIONS), (D = p.y.GUILD_ROLE_SUBSCRIPTIONS), x && P.push(p.y.GUILD_PRODUCTS_PREVIEW)), (s = null != s ? s : D);
    let [b, j] = a.useState(s),
        U = (x && !(L && R)) || b === p.y.GUILD_PRODUCTS_PREVIEW;
    return (
        a.useEffect(() => {
            j(s);
        }, [s]),
        (0, i.jsx)(S.Provider, {
            value: {
                selectedTab: b,
                setSelectedTab: j,
                categoryTabs: P,
                isPhantomPreview: U,
                handlePreviewDismiss: (e) => {
                    (0, d.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(l) };
                    if (b === p.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(p.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = A.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(g.Z5c.CHANNEL(l, null === (n = m.ZP.getDefaultChannel(l)) || void 0 === n ? void 0 : n.id)), (t.action_taken = A.mz.DISMISS_FULL_PREVIEW);
                    }
                    N.default.track(g.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
