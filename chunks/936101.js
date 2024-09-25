n.d(t, {
    L: function () {
        return S;
    },
    d: function () {
        return g;
    }
});
var r = n(518263);
var i = n(970173);
var a = n(520712);
var o = n(268111);
var s = n(941497);
var l = n(32026);
var u = n(480839);
var c = n(744285);
var d = n(492257);
var _ = n(873817);
var E = n(642549);
var f = n(47120);
var h = n(772848),
    p = n(433517),
    m = n(70956);
let I = 'purchase_token',
    T = 60 * m.Z.Millis.DAY;
function g() {
    let e = p.K.get(I);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let t = (0, h.Z)();
    return (
        p.K.set(I, {
            purchaseToken: t,
            expires: Date.now() + T
        }),
        t
    );
}
async function S() {
    let e = new Uint8Array(
        g()
            .split('')
            .map((e) => e.charCodeAt(0))
    );
    return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({ name: 'SHA-256' }, e))));
}
