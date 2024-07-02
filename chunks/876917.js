t(47120);
var i = t(735250), a = t(470079), r = t(120356), o = t.n(r), s = t(802433), l = t(680295), c = t(837618), d = t(241822);
n.Z = e => {
    let {
            profileEffectId: n,
            isHovering: t,
            forCollectedModal: r = !1,
            isPurchased: u,
            removeSetHeight: f = !1
        } = e, p = r ? 250 : 0.1, [_, m] = a.useState(!0);
    return (a.useEffect(() => {
        if (!0 !== r)
            m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, p);
            return () => {
                clearTimeout(e);
            };
        }
    }, [
        p,
        r
    ]), null != n) ? (0, i.jsxs)('div', {
        className: o()(c.previewContainer, {
            [c.previewContainerAnimation]: r,
            [c.previewContainerSetHeight]: !f
        }),
        children: [
            (0, i.jsx)('img', {
                src: d,
                alt: ' ',
                className: r ? c.previewForCollected : c.preview,
                'aria-hidden': !0
            }),
            !_ && (0, i.jsx)('div', {
                className: u ? c.purchasedEffect : void 0,
                children: (0, i.jsx)(l.Z, {
                    profileEffectId: n,
                    useThumbnail: !0,
                    autoPlay: r,
                    restartMethod: s.j.FromStart,
                    resetOnHover: !0,
                    isHovering: t,
                    introDelay: p,
                    useOpacityOnHover: !1,
                    shopPreview: !0
                })
            })
        ]
    }) : null;
};
