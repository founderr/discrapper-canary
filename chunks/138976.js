e.d(t, {
    O: function () {
        return r;
    }
});
var i = e(904245),
    l = e(306680),
    o = e(944486);
let r = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let n = o.Z.getChannelId();
        if (null != n) {
            let t = l.ZP.ackMessageId(n);
            null != t &&
                l.ZP.getOldestUnreadTimestamp(n) > 0 &&
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
