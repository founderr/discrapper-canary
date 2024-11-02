n.d(t, {
    ZP: function () {
        return d;
    },
    cs: function () {
        return f;
    },
    pe: function () {
        return c;
    }
}),
    n(789020),
    n(653041);
var r = n(512722),
    i = n.n(r),
    a = n(869765),
    s = n(598077),
    o = n(594174),
    l = n(48854),
    u = n(981631);
function c(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: s } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: s
    };
}
function d(e) {
    let { channelId: t, content: n, tts: r = !1, type: d = u.uaV.DEFAULT, messageReference: f, allowedMentions: _, author: h, flags: p, nonce: m, poll: g, changelogId: E, giftingPrompt: v, state: I } = e,
        S = [];
    if (d === u.uaV.REPLY && (i()(null != f, 'Replies must have a message reference'), null == _ || _.replied_user)) {
        let e = a.Z.getMessageByReference(f);
        (null == e ? void 0 : e.state) === a.Y.LOADED && S.push(c(e.message.author));
    }
    return (
        null == h && (h = o.default.getCurrentUser()),
        h instanceof s.Z && (h = c(h)),
        i()(null != h, 'createMessage: author cannot be undefined'),
        {
            id: null != m ? m : (0, l.r)(),
            type: d,
            content: n,
            channel_id: t,
            author: h,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: S,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: I || u.yb.SENDING,
            tts: r,
            message_reference: f,
            message_snapshots: [],
            flags: p,
            nonce: m,
            poll: g,
            changelog_id: E,
            gifting_prompt: v
        }
    );
}
function f(e) {
    let { messageId: t, channelId: n, content: r, embeds: i, loggingName: a } = e;
    return {
        id: null != t ? t : (0, l.r)(),
        type: u.uaV.DEFAULT,
        flags: u.iLy.EPHEMERAL,
        content: r,
        channel_id: n,
        author: {
            id: u.LAt,
            username: 'Clyde',
            discriminator: u.fo$,
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
        state: u.yb.SENT,
        tts: !1,
        loggingName: a
    };
}
