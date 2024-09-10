let r;
n.d(t, {
    GN: function () {
        return d;
    },
    tu: function () {
        return c;
    },
    uk: function () {
        return u;
    }
});
var i = n(259443),
    a = n(474873),
    s = n(135906),
    o = n(246946);
r = n(902653).b;
let l = new i.Y('SoundUtils');
function u(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return c(null !== (n = (0, s.Z)(t)[e]) && void 0 !== n ? n : e, e, r);
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return new r(e, t, n);
}
function d(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (o.Z.disableSounds) return;
    let u = (0, s.Z)(null != i ? i : a.Z.getSoundpack());
    null == u && l.log('Unable to find sound for pack name: '.concat(i));
    let d = c(null !== (t = u[e]) && void 0 !== t ? t : e, e, n);
    return (
        null != r
            ? d.playWithListener().then((e) => {
                  e && r();
              })
            : d.play(),
        d
    );
}
