r.d(n, {
    U: function () {
        return o;
    }
});
var i = r(570140),
    a = r(709054),
    s = r(981631);
function o(e, n, r) {
    i.Z.dispatch({
        type: 'MESSAGE_CREATE',
        channelId: e,
        message: l({
            channelId: e,
            requesterUser: n,
            requestToSpeakTimestamp: r
        }),
        optimistic: !1,
        sendMessageOptions: {},
        isPushNotification: !1
    });
}
function l(e) {
    let { channelId: n, requesterUser: r, requestToSpeakTimestamp: i } = e;
    return {
        id: a.default.fromTimestamp(Date.parse(i)),
        type: s.uaV.STAGE_RAISE_HAND,
        flags: s.iLy.EPHEMERAL,
        content: '',
        channel_id: n,
        author: r,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: i,
        state: s.yb.SENT,
        tts: !1
    };
}
