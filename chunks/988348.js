n.d(t, {
    G: function () {
        return m;
    },
    N: function () {
        return h;
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
var E = n(998502);
let f = null;
function h() {
    return null == f && (f = p()), f;
}
function p() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
        return E.ZP.requireModule('discord_zstd'), !0;
    } catch (e) {
        if (e.message.includes('Cannot find')) return E.ZP.ensureModule('discord_zstd').catch((e) => {}), !1;
        throw e;
    }
}
function m() {
    let { createContext: e } = E.ZP.requireModule('discord_zstd');
    return e();
}
