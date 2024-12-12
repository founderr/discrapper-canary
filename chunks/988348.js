r.d(n, {
    G: function () {
        return E;
    },
    N: function () {
        return m;
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
var h = r(998502);
let p = null;
function m() {
    return null == p && (p = g()), p;
}
function g() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
        return h.ZP.requireModule('discord_zstd'), !0;
    } catch (e) {
        if (e.message.includes('Cannot find')) return h.ZP.ensureModule('discord_zstd').catch((e) => {}), !1;
        throw e;
    }
}
function E() {
    let { createContext: e } = h.ZP.requireModule('discord_zstd');
    return e();
}
