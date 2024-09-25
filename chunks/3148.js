n.d(t, {
    ZP: function () {
        return E;
    },
    cs: function () {
        return f;
    },
    pe: function () {
        return _;
    }
});
var r = n(789020);
var i = n(653041);
var a = n(512722),
    o = n.n(a),
    s = n(869765),
    l = n(598077),
    u = n(594174),
    c = n(48854),
    d = n(981631);
function _(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: o } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: o
    };
}
function E(e) {
    let { channelId: t, content: n, tts: r = !1, type: i = d.uaV.DEFAULT, messageReference: a, allowedMentions: E, author: f, flags: h, nonce: p, poll: m, changelogId: I, giftingPrompt: T, state: g } = e,
        S = [];
    if (i === d.uaV.REPLY && (o()(null != a, 'Replies must have a message reference'), null == E || E.replied_user)) {
        let e = s.Z.getMessageByReference(a);
        (null == e ? void 0 : e.state) === s.Y.LOADED && S.push(_(e.message.author));
    }
    return (
        null == f && (f = u.default.getCurrentUser()),
        f instanceof l.Z && (f = _(f)),
        o()(null != f, 'createMessage: author cannot be undefined'),
        {
            id: null != p ? p : (0, c.r)(),
            type: i,
            content: n,
            channel_id: t,
            author: f,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: S,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: g || d.yb.SENDING,
            tts: r,
            message_reference: a,
            message_snapshots: [],
            flags: h,
            nonce: p,
            poll: m,
            changelog_id: I,
            gifting_prompt: T
        }
    );
}
function f(e) {
    let { messageId: t, channelId: n, content: r, embeds: i, loggingName: a } = e;
    return {
        id: null != t ? t : (0, c.r)(),
        type: d.uaV.DEFAULT,
        flags: d.iLy.EPHEMERAL,
        content: r,
        channel_id: n,
        author: {
            id: d.LAt,
            username: 'Clyde',
            discriminator: d.fo$,
            avatar: 'clyde',
            bot: !0
        },
        attachments: [],
        embeds: null != i ? i : [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: new Date().toISOString(),
        state: d.yb.SENT,
        tts: !1,
        loggingName: a
    };
}
