r.d(n, {
    ZP: function () {
        return h;
    },
    cs: function () {
        return p;
    },
    pe: function () {
        return _;
    }
});
var i = r(789020);
var a = r(653041);
var s = r(512722),
    o = r.n(s),
    l = r(869765),
    u = r(598077),
    c = r(594174),
    d = r(48854),
    f = r(981631);
function _(e) {
    let { id: n, username: r, avatar: i, discriminator: a, bot: s, globalName: o } = e;
    return {
        id: n,
        username: r,
        avatar: i,
        discriminator: a,
        bot: s,
        global_name: o
    };
}
function h(e) {
    let { channelId: n, content: r, tts: i = !1, type: a = f.uaV.DEFAULT, messageReference: s, allowedMentions: h, author: p, flags: m, nonce: g, poll: E, changelogId: v, giftingPrompt: I, state: T } = e,
        b = [];
    if (a === f.uaV.REPLY && (o()(null != s, 'Replies must have a message reference'), null == h || h.replied_user)) {
        let e = l.Z.getMessageByReference(s);
        (null == e ? void 0 : e.state) === l.Y.LOADED && b.push(_(e.message.author));
    }
    return (
        null == p && (p = c.default.getCurrentUser()),
        p instanceof u.Z && (p = _(p)),
        o()(null != p, 'createMessage: author cannot be undefined'),
        {
            id: null != g ? g : (0, d.r)(),
            type: a,
            content: r,
            channel_id: n,
            author: p,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: b,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: T || f.yb.SENDING,
            tts: i,
            message_reference: s,
            message_snapshots: [],
            flags: m,
            nonce: g,
            poll: E,
            changelog_id: v,
            gifting_prompt: I
        }
    );
}
function p(e) {
    let { messageId: n, channelId: r, content: i, embeds: a, loggingName: s } = e;
    return {
        id: null != n ? n : (0, d.r)(),
        type: f.uaV.DEFAULT,
        flags: f.iLy.EPHEMERAL,
        content: i,
        channel_id: r,
        author: {
            id: f.LAt,
            username: 'Clyde',
            discriminator: f.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != a ? a : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: f.yb.SENT,
        tts: !1,
        loggingName: s
    };
}
