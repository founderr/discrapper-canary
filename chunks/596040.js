n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    l = n(566620),
    r = n(782769),
    s = n(451576);
let a = (e) => null != e && '' !== e;
function o(e, t) {
    let n = (0, r.z)(null != t ? t : void 0),
        o = (0, s.Z)(t),
        c = a(e) || o;
    return (
        i.useEffect(() => {
            c && n && (0, l.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
