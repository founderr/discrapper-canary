n.d(t, {
    M: function () {
        return a;
    },
    s: function () {
        return l;
    }
});
var i = n(570140);
function l(e) {
    i.Z.dispatch({
        type: 'VOICE_CATEGORY_EXPAND',
        guildId: e,
        expand: !0
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'VOICE_CATEGORY_COLLAPSE',
        guildId: e,
        expand: !1
    });
}
