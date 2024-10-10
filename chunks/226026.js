t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(990547),
    a = t(442837),
    l = t(213609),
    o = t(541099),
    r = t(312871);
function s(e) {
    let { applicationId: n, sectionName: t, sectionPosition: s, sectionOverallPosition: c } = e,
        d = (0, a.e7)([o.Z], () => o.Z.entrypoint());
    return {
        trackItemImpressionRef: (0, r.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                    properties: {
                        application_id: n,
                        section_name: t,
                        section_position: s,
                        section_overall_position: c,
                        source: d
                    }
                });
            },
            threshold: 0.5,
            minTimeVisibleMs: 1000
        })
    };
}
