n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(833880),
    i = n(896416),
    a = n(15568);
function o(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, a.Z)(e, t);
        var n,
            o = r((n = Object.prototype.toString.call(e))).call(n, 8, -1);
        if (('Object' === o && e.constructor && (o = e.constructor.name), 'Map' === o || 'Set' === o)) return i(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return (0, a.Z)(e, t);
    }
}
