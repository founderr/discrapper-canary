n.d(t, {
    RI: function () {
        return r;
    },
    k5: function () {
        return a;
    },
    kR: function () {
        return o;
    }
});
var i = n(626135),
    l = n(981631);
function r(e) {
    let { selectedTab: t } = e;
    i.default.track(l.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function o(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(l.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function a(e) {
    let { source: t } = e;
    i.default.track(l.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
