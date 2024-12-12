r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(75060),
    a = r(991240);
async function s() {
    let e = null;
    try {
        e = await i.Z.getThermalState();
    } catch (e) {
        if (e.message === a.n) return Promise.resolve(null);
        throw e;
    }
    return Promise.resolve(e);
}
