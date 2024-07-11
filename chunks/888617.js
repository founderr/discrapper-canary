t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(990547), l = t(213609), r = t(312871);
function a(e) {
    let {
        sectionName: n,
        numItems: t,
        numVisibleItems: a
    } = e;
    return {
        trackSectionImpressionRef: (0, r.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: {
                        section_name: n,
                        num_items: t,
                        num_visible_items: a
                    }
                });
            },
            threshold: 1
        })
    };
}
