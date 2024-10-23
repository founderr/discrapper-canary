n(47120);
var i = n(192379),
    a = n(115434),
    s = n(264181),
    r = n(442837),
    l = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    _ = n(302800),
    E = n(921944);
t.Z = () => {
    var e, t, n, h, m, I, p;
    let g = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        T = (0, r.e7)([u.Z], () => u.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
        S = (null == T ? void 0 : T.dismissibleContent) === l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        f = i.useMemo(() => ((0, d.Fc)(g) && null != T && !S ? [T.dismissibleContent] : []), [g, T, S]),
        [C, N] = (0, o.US)(f, void 0, !0),
        [A, v] = (0, o.XR)(S && (null == T ? void 0 : T.type) === s.Z.COACHTIP ? l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == T ? void 0 : T.version) && void 0 !== e ? e : 0, void 0, !0),
        Z = null;
    if ((null != C || null != A) && null != T && T.type === s.Z.COACHTIP) {
        Z = {
            type: _.k2.COACHTIP,
            title: () => T.title,
            body: () => T.body,
            imageSrc: T.avatar,
            assetIds: T.decorations,
            entrypointBackgroundStyle: null === (t = T.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = T.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (Z.entryPointBackgroundAssets = {
                srcDark: null === (h = e.resting) || void 0 === h ? void 0 : h.dark,
                srcLight: null === (m = e.resting) || void 0 === m ? void 0 : m.light,
                srcDarkHovered: null === (I = e.hovered) || void 0 === I ? void 0 : I.dark,
                srcLightHovered: null === (p = e.hovered) || void 0 === p ? void 0 : p.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: Z,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = S ? v : N;
            null != Z && e(E.L.AUTO);
        }
    };
};
