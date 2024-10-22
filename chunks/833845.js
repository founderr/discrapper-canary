n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(442837),
    l = n(314897),
    a = n(88751);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.cj)(
        [a.ZP, l.default],
        () => {
            let n = l.default.getId();
            return a.ZP.getPermissionsForUser(n, e, t);
        },
        [e, t]
    );
}
