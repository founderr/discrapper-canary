t.d(n, {
    O: function () {
        return a;
    }
});
var l = t(904245),
    i = t(306680),
    o = t(944486);
let a = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.Z.getChannelId();
        if (null != e) {
            let n = i.ZP.ackMessageId(e);
            null != n &&
                i.ZP.getOldestUnreadTimestamp(e) > 0 &&
                l.Z.jumpToMessage({
                    channelId: e,
                    messageId: n,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
