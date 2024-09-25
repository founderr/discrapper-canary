n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(47120);
function i(e) {
    let t = {};
    for (let n of e)
        for (let e in n)
            e in t
                ? (t[e] = {
                      ...t[e],
                      ...n[e]
                  })
                : (t[e] = { ...n[e] });
    return t;
}
