t.d(n, {
    Z: function () {
        return p;
    }
});
var i = t(735250), l = t(470079), r = t(481060), a = t(895924), s = t(424602), o = t(827498), c = t(98880), u = t(772606), d = t(689938), m = t(235435);
function p(e) {
    let {
            channel: n,
            entrypoint: t,
            title: p,
            look: _,
            items: E,
            sectionName: h
        } = e, {clickOnHomeActivityOpensAppDetail: A} = s.m1.getCurrentConfig({ location: 'AppLauncherApplicationListViewScreen' }, { autoTrackExposure: !1 }), f = l.useMemo(() => t === o._b.TEXT ? c.kA : c.qR, [t]);
    return (0, i.jsxs)('section', {
        className: m.container,
        'aria-label': d.Z.Messages.APP_LAUNCHER_SECTION_VIEW_MORE_ARIA_LABEL.format({ sectionTitle: p }),
        children: [
            (0, i.jsxs)('div', {
                className: m.header,
                children: [
                    (0, i.jsx)(u.Z, { className: m.backButton }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: p
                    })
                ]
            }),
            (0, i.jsx)(r.Scroller, {
                children: (0, i.jsx)('div', {
                    className: m.appGrid,
                    children: E.map((e, t) => {
                        let {
                            application: l,
                            isPartner: r
                        } = e;
                        return (0, i.jsx)(f, {
                            channel: n,
                            application: l,
                            look: _,
                            isPartner: r,
                            sectionName: h,
                            resultsPosition: t,
                            location: a.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                            isOneClickCTA: A
                        }, l.id);
                    })
                })
            })
        ]
    });
}
