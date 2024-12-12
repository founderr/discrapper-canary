r.d(n, {
    D: function () {
        return a;
    }
});
var i = r(674563);
function a(e) {
    let n;
    return e.isSystemUser() ? (n = i.Hb.SYSTEM_DM) : e.isClyde() ? (n = i.Hb.AI) : e.bot && (n = i.Hb.BOT), n;
}
