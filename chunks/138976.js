e.d(t, {
    O: function () {
        return l;
    }
});
var i = e(904245),
    o = e(306680),
    r = e(944486);
let l = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let n = r.Z.getChannelId();
        if (null != n) {
            let t = o.ZP.ackMessageId(n);
            null != t &&
                o.ZP.getOldestUnreadTimestamp(n) > 0 &&
                i.Z.jumpToMessage({
                    channelId: n,
                    messageId: t,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
