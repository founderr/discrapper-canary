r.d(n, {
    i: function () {
        return o;
    }
});
var i = r(544891),
    a = r(881052),
    s = r(981631);
async function o(e, n) {
    try {
        await i.tn.patch({
            url: s.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
            body: n,
            rejectWithError: !1
        });
    } catch (e) {
        throw new a.Hx(e);
    }
}
