n(47120);
var i = n(470079),
    a = n(115434),
    s = n(264181),
    r = n(442837),
    l = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    _ = n(105622),
    E = n(302800),
    h = n(921944);
t.Z = () => {
    var e, t, n, m, I, p, g;
    let T = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        S = (0, _.J)('useCollectiblesShopTabNewBadge'),
        f = (0, r.e7)([u.Z], () => u.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
        C = (null == f ? void 0 : f.dismissibleContent) === l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        N = i.useMemo(() => ((0, d.Fc)(T) && S && null != f && !C ? [f.dismissibleContent] : []), [T, S, f, C]),
        [A, v] = (0, o.US)(N, void 0, !0),
        [Z, L] = (0, o.XR)(C && (null == f ? void 0 : f.type) === s.Z.COACHTIP ? l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == f ? void 0 : f.version) && void 0 !== e ? e : 0, void 0, !0),
        O = null;
    if ((null != A || null != Z) && S && null != f && f.type === s.Z.COACHTIP) {
        O = {
            type: E.k2.COACHTIP,
            title: () => f.title,
            body: () => f.body,
            imageSrc: f.avatar,
            assetIds: f.decorations,
            entrypointBackgroundStyle: null === (t = f.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = f.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (O.entryPointBackgroundAssets = {
                srcDark: null === (m = e.resting) || void 0 === m ? void 0 : m.dark,
                srcLight: null === (I = e.resting) || void 0 === I ? void 0 : I.light,
                srcDarkHovered: null === (p = e.hovered) || void 0 === p ? void 0 : p.dark,
                srcLightHovered: null === (g = e.hovered) || void 0 === g ? void 0 : g.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: O,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = C ? L : v;
            null != O && e(h.L.AUTO);
        }
    };
};
