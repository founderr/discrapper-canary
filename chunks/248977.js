r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(47120);
function a(e) {
    let n = '';
    for (let r of Object.keys(e)) {
        let i = e[r];
        void 0 !== i && ('boolean' == typeof i && (i = i ? 'yes' : 'no'), (n += ''.concat(r, '=').concat(i, ',')));
    }
    return n;
}
