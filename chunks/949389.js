n.d(t, {
    GO: function () {
        return r;
    },
    K7: function () {
        return l;
    },
    xm: function () {
        return a;
    }
});
var i = n(570140);
function r(e) {
    i.Z.dispatch({
        type: 'BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS',
        guildId: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'PUBLIC_UPSELL_NOTICE_DISMISS',
        guildId: e
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'MAX_MEMBER_COUNT_NOTICE_DISMISS',
        guildId: e
    });
}
