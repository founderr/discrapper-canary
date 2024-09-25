n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(937615),
    i = n(689938);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return i.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
    if (e.premium && !n) return i.Z.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
    let a = e.getPrice(null, t);
    if (null != a) return a.amount > 0 ? (0, r.T4)(a.amount, a.currency) : i.Z.Messages.APPLICATION_STORE_FREE;
    return i.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
}
