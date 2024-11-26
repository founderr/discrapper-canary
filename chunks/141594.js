n(47120);
var i = n(192379),
    r = n(115434),
    l = n(264181),
    a = n(442837),
    s = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    h = n(302800),
    m = n(921944);
t.Z = () => {
    var e, t, n, p, g, f, _;
    let I = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        E = (0, a.e7)([u.Z], () => u.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)),
        C = (null == E ? void 0 : E.dismissibleContent) === s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        v = i.useMemo(() => ((0, d.Fc)(I) && null != E && !C ? [E.dismissibleContent] : []), [I, E, C]),
        [N, S] = (0, o.US)(v, void 0, !0),
        [T, x] = (0, o.XR)(C && (null == E ? void 0 : E.type) === l.Z.COACHTIP ? s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == E ? void 0 : E.version) && void 0 !== e ? e : 0, void 0, !0),
        b = null;
    if ((null != N || null != T) && null != E && E.type === l.Z.COACHTIP) {
        b = {
            type: h.k2.COACHTIP,
            title: () => E.title,
            body: () => E.body,
            imageSrc: E.avatar,
            assetIds: E.decorations,
            entrypointBackgroundStyle: null === (t = E.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = E.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (b.entryPointBackgroundAssets = {
                srcDark: null === (p = e.resting) || void 0 === p ? void 0 : p.dark,
                srcLight: null === (g = e.resting) || void 0 === g ? void 0 : g.light,
                srcDarkHovered: null === (f = e.hovered) || void 0 === f ? void 0 : f.dark,
                srcLightHovered: null === (_ = e.hovered) || void 0 === _ ? void 0 : _.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: b,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = C ? x : S;
            null != b && e(m.L.AUTO);
        }
    };
};
