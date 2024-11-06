n.d(t, {
    Z: function () {
        return b;
    },
    m: function () {
        return S;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(367907),
    u = n(605236),
    d = n(584825),
    m = n(994592),
    h = n(160404),
    f = n(703656),
    p = n(984933),
    g = n(430824),
    _ = n(626135),
    C = n(652515),
    E = n(550951),
    I = n(544978),
    x = n(333866),
    v = n(629481),
    N = n(981631);
let T = r.createContext(void 0);
function S() {
    let e = r.useContext(T);
    return a()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function b(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        S = (0, o.e7)([g.Z], () => g.Z.getGuild(a)),
        b = (0, o.e7)([h.Z], () => h.Z.isViewingServerShop(a)),
        A = (0, E.g)(S, 'guild_shop_page'),
        j = (0, C.RF)(a, 'guild_shop_page'),
        Z = (null == S ? void 0 : S.hasFeature(N.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        R = (0, m.mY)(null == S ? void 0 : S.id),
        P = null === (t = (0, d.YB)(a)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        y = [],
        L = I.y.GUILD_SHOP_FULL_PREVIEW;
    b || (Z && R) ? (y.push(P === x.a3.PRODUCTS_FIRST ? I.y.GUILD_PRODUCTS : I.y.GUILD_ROLE_SUBSCRIPTIONS), y.push(P === x.a3.PRODUCTS_FIRST ? I.y.GUILD_ROLE_SUBSCRIPTIONS : I.y.GUILD_PRODUCTS), (L = y[0])) : Z && !R ? (y.push(I.y.GUILD_PRODUCTS), (L = I.y.GUILD_PRODUCTS)) : !Z && R && (y.push(I.y.GUILD_ROLE_SUBSCRIPTIONS), (L = I.y.GUILD_ROLE_SUBSCRIPTIONS), A && y.push(I.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : L);
    let [O, M] = r.useState(l),
        k = (A && !(R && j)) || O === I.y.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            M(l);
        }, [l]),
        (0, i.jsx)(T.Provider, {
            value: {
                selectedTab: O,
                setSelectedTab: M,
                categoryTabs: y,
                isPhantomPreview: k,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(a) };
                    if (O === I.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), M(I.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = v.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, f.dL)(N.Z5c.CHANNEL(a, null === (n = p.ZP.getDefaultChannel(a)) || void 0 === n ? void 0 : n.id)), (t.action_taken = v.mz.DISMISS_FULL_PREVIEW);
                    }
                    _.default.track(N.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
