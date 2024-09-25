n.d(t, {
    $_: function () {
        return s;
    },
    _l: function () {
        return r;
    },
    jk: function () {
        return o;
    },
    vL: function () {
        return a;
    }
});
var r,
    i = n(786761);
function a(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id,
        savedAt: new Date(e.saved_at),
        authorSummary: e.author_summary,
        channelSummary: e.channel_summary,
        messageSummary: e.message_summary,
        guildId: 0 === e.guild_id ? void 0 : e.guild_id,
        authorId: 0 === e.author_id ? void 0 : e.author_id,
        notes: e.notes,
        dueAt: null != e.due_at ? new Date(e.due_at) : void 0
    };
}
function o(e) {
    return {
        message: null != e.message ? (0, i.e5)(e.message) : null,
        saveData: a(e.save_data)
    };
}
function s(e) {
    return {
        channelId: e.channel_id,
        messageId: e.message_id
    };
}
!(function (e) {
    (e.ALL = 'ALL'), (e.REMINDER = 'REMINDER'), (e.BOOKMARK = 'BOOKMARK');
})(r || (r = {}));
