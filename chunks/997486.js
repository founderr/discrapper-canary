n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(93735),
    a = n(786761),
    s = n(3148),
    r = n(131704),
    l = n(598077),
    o = n(981631),
    c = n(689938),
    u = n(305682);
let d = '1337';
function _(e) {
    let { showAttachment: t } = e,
        n = new l.Z({
            id: '1337',
            username: c.Z.Messages.WUMPUS,
            avatar: 'nitro_wumpus',
            bot: !0
        }),
        _ = new r.DA({
            id: d,
            guild_id: '1337',
            type: o.d4z.GUILD_TEXT,
            name: ''
        }),
        E = {
            id: '1337',
            filename: 'save-message.png',
            url: u,
            proxy_url: u,
            width: 621,
            height: 432,
            size: 1337,
            content_scan_version: (0, i.Qy)()
        };
    return {
        fakeChannel: _,
        fakeMessage: (0, a.e5)({
            ...(0, s.ZP)({
                channelId: d,
                content: c.Z.Messages.FOR_LATER_TUTORIAL_MESSAGE
            }),
            state: o.yb.SENT,
            id: '1337',
            author: n,
            attachments: t ? [E] : void 0
        })
    };
}
