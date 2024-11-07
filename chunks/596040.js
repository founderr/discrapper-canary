n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    l = n(566620),
    r = n(782769),
    a = n(451576);
let s = (e) => null != e && '' !== e;
function o(e, t) {
    let n = (0, r.z)(null != t ? t : void 0),
        o = (0, a.Z)(t),
        c = s(e) || o;
    return (
        i.useEffect(() => {
            c && n && (0, l.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
