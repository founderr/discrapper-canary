r.d(n, {
    L: function () {
        return b;
    },
    d: function () {
        return T;
    }
});
var i = r(518263);
var a = r(970173);
var s = r(520712);
var o = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var _ = r(873817);
var h = r(642549);
var p = r(47120);
var m = r(772848),
    g = r(433517),
    E = r(70956);
let v = 'purchase_token',
    I = 60 * E.Z.Millis.DAY;
function T() {
    let e = g.K.get(v);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let n = (0, m.Z)();
    return (
        g.K.set(v, {
            purchaseToken: n,
            expires: Date.now() + I
        }),
        n
    );
}
async function b() {
    let e = new Uint8Array(
        T()
            .split('')
            .map((e) => e.charCodeAt(0))
    );
    return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({ name: 'SHA-256' }, e))));
}
