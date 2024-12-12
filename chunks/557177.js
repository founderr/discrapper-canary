let i;
r.d(n, {
    GN: function () {
        return _;
    },
    tu: function () {
        return f;
    },
    uk: function () {
        return d;
    }
});
var a = r(259443),
    s = r(292619),
    o = r(474873),
    l = r(135906),
    u = r(246946);
{
    let e = (0, s.w)({ location: 'SoundUtils' }),
        n = r(902653);
    i = e ? n.WebAudioAPISound : n.WebAudioSound;
}
let c = new a.Yd('SoundUtils');
function d(e, n) {
    var r;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return f(null !== (r = (0, l.Z)(n)[e]) && void 0 !== r ? r : e, e, i);
}
function f(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return new i(e, n, r);
}
function _(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0,
        a = arguments.length > 3 ? arguments[3] : void 0;
    if (u.Z.disableSounds) return;
    let s = (0, l.Z)(null != a ? a : o.Z.getSoundpack());
    null == s && c.log('Unable to find sound for pack name: '.concat(a));
    let d = f(null !== (n = s[e]) && void 0 !== n ? n : e, e, r);
    return (
        null != i
            ? d.playWithListener().then((e) => {
                  e && i();
              })
            : d.play(),
        d
    );
}
