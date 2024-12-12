r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(47120);
function a(e) {
    let n = {};
    for (let r of e)
        for (let e in r)
            e in n
                ? (n[e] = {
                      ...n[e],
                      ...r[e]
                  })
                : (n[e] = { ...r[e] });
    return n;
}
