r.d(n, {
    V: function () {
        return a;
    }
});
var i = r(594190);
function a() {
    let e = i.ZP.getCurrentGameForAnalytics();
    return {
        game_name: null != e ? e.name : null,
        game_id: null != e ? e.id : null
    };
}
