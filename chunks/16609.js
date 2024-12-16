function i(e) {
    if (null != e) return 'channel_id' in e ? e.channel_id : void 0;
}
function a(e) {
    if (null != e) return 'guild_id' in e ? e.guild_id : void 0;
}
r.d(n, {
    j: function () {
        return a;
    },
    p: function () {
        return i;
    }
});
