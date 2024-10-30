n.d(t, {
    Z: function () {
        return R;
    },
    m: function () {
        return x;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    a = n(192379),
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
    f = n(430824),
    h = n(626135),
    T = n(652515),
    N = n(550951),
    p = n(544978),
    C = n(333866),
    g = n(629481),
    S = n(981631);
let A = a.createContext(void 0);
function x() {
    let e = a.useContext(A);
    return r()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function R(e) {
    var t;
    let { children: n, initialTab: s, guildId: r } = e,
        x = (0, l.e7)([f.Z], () => f.Z.getGuild(r)),
        R = (0, l.e7)([E.Z], () => E.Z.isViewingServerShop(r)),
        v = (0, N.g)(x, 'guild_shop_page'),
        M = (0, T.RF)(r, 'guild_shop_page'),
        O = (null == x ? void 0 : x.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        L = (0, _.mY)(null == x ? void 0 : x.id),
        Z = null === (t = (0, d.YB)(r)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        b = [],
        P = p.y.GUILD_SHOP_FULL_PREVIEW;
    R || (O && L) ? (b.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_PRODUCTS : p.y.GUILD_ROLE_SUBSCRIPTIONS), b.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_ROLE_SUBSCRIPTIONS : p.y.GUILD_PRODUCTS), (P = b[0])) : O && !L ? (b.push(p.y.GUILD_PRODUCTS), (P = p.y.GUILD_PRODUCTS)) : !O && L && (b.push(p.y.GUILD_ROLE_SUBSCRIPTIONS), (P = p.y.GUILD_ROLE_SUBSCRIPTIONS), v && b.push(p.y.GUILD_PRODUCTS_PREVIEW)), (s = null != s ? s : P);
    let [D, j] = a.useState(s),
        U = (v && !(L && M)) || D === p.y.GUILD_PRODUCTS_PREVIEW;
    return (
        a.useEffect(() => {
            j(s);
        }, [s]),
        (0, i.jsx)(A.Provider, {
            value: {
                selectedTab: D,
                setSelectedTab: j,
                categoryTabs: b,
                isPhantomPreview: U,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(r) };
                    if (D === p.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(p.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = g.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(S.Z5c.CHANNEL(r, null === (n = m.ZP.getDefaultChannel(r)) || void 0 === n ? void 0 : n.id)), (t.action_taken = g.mz.DISMISS_FULL_PREVIEW);
                    }
                    h.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
