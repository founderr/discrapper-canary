n(47120);
var i = n(470079),
    a = n(115434),
    s = n(442837),
    r = n(243778),
    l = n(594174),
    o = n(51144),
    c = n(874703),
    d = n(105622),
    u = n(302800),
    _ = n(921944);
t.Z = () => {
    let e = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, d.J)('useCollectiblesShopTabNewBadge'),
        n = (0, s.e7)([c.Z], () => c.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
        h = i.useMemo(() => ((0, o.Fc)(e) && t && null != n ? [n.dismissibleContent] : []), [e, t, n]),
        [E, m] = (0, r.US)(h, void 0, !0),
        I = null;
    if (null != E && t && null != n) {
        var g, p, T, f, S, C;
        I = {
            type: u.k2.COACHTIP,
            title: () => n.title,
            body: () => n.body,
            imageSrc: n.avatar,
            assetIds: n.decorations,
            entrypointBackgroundStyle: null === (g = n.refTargetBackground) || void 0 === g ? void 0 : g.style
        };
        let e = null === (p = n.refTargetBackground) || void 0 === p ? void 0 : p.asset;
        null != e &&
            (I.entryPointBackgroundAssets = {
                srcDark: null === (T = e.resting) || void 0 === T ? void 0 : T.dark,
                srcLight: null === (f = e.resting) || void 0 === f ? void 0 : f.light,
                srcDarkHovered: null === (S = e.hovered) || void 0 === S ? void 0 : S.dark,
                srcLightHovered: null === (C = e.hovered) || void 0 === C ? void 0 : C.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: I,
        dismissCollectiblesShopTabNewBadge: () => {
            null != I && m(_.L.AUTO);
        }
    };
};
