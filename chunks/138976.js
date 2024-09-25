t.d(n, {
    O: function () {
        return E;
    }
});
var i = t(904245),
    o = t(306680),
    l = t(944486);
let E = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.Z.getChannelId();
        if (null != e) {
            let n = o.ZP.ackMessageId(e);
            null != n &&
                o.ZP.getOldestUnreadTimestamp(e) > 0 &&
                i.Z.jumpToMessage({
                    channelId: e,
                    messageId: n,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
