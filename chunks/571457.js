n.d(t, {
    R: function () {
        return s;
    },
    k: function () {
        return r;
    }
});
var i = n(626135),
    a = n(981631);
function s(e) {
    let { selectedTab: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function r(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(a.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
