r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(442837),
    a = r(314897),
    s = r(158776),
    o = r(676035),
    l = r(981631);
function u(e) {
    let n = (0, i.e7)([a.default], () => a.default.getId() === e),
        r = (0, o.a)(),
        u = (0, i.e7)([s.Z], () =>
            s.Z.findActivity(e, (e) => {
                let { type: n } = e;
                return n === l.IIU.CUSTOM_STATUS;
            })
        );
    return n ? r : u;
}
