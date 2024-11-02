n.d(e, {
    Z: function () {
        return i;
    }
});
var a = n(512722),
    s = n.n(a),
    l = n(875425);
function i(t) {
    if (t !== l.F.TODAY) return s()('number' == typeof t, 'Invalid custom status clear timeout'), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
