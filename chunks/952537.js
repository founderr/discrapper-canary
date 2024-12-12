r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(789020);
function a(e) {
    return {
        id: e.id,
        userId: e.user_id,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.mute_config,
        joinTimestamp: e.join_timestamp
    };
}
