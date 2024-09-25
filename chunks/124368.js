n.d(t, {
    AX: function () {
        return l;
    },
    M3: function () {
        return c;
    },
    RN: function () {
        return h;
    },
    SX: function () {
        return i;
    },
    dg: function () {
        return _;
    },
    fZ: function () {
        return p;
    },
    iN: function () {
        return E;
    },
    on: function () {
        return r;
    },
    vw: function () {
        return u;
    },
    yX: function () {
        return d;
    },
    zb: function () {
        return f;
    }
});
var r,
    i,
    a = n(47120);
var o = n(981631),
    s = n(689938);
let l = 4320,
    u = 50,
    c = 100000,
    d = 50,
    _ = 25,
    E = {
        HAS_INTERACTED: 1,
        ALL_MESSAGES: 2,
        ONLY_MENTIONS: 4,
        NO_MESSAGES: 8
    };
function f() {
    return [
        {
            setting: E.ALL_MESSAGES,
            label: s.Z.Messages.FORM_LABEL_ALL_MESSAGES
        },
        {
            setting: E.ONLY_MENTIONS,
            label: s.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
        },
        {
            setting: E.NO_MESSAGES,
            label: s.Z.Messages.FORM_LABEL_NOTHING
        }
    ];
}
!(function (e) {
    (e.EMBED = 'Embed'), (e.BROWSER = 'Thread Browser'), (e.POPOUT = 'Active Threads Popout'), (e.CHANNEL_LIST = 'Channel List'), (e.GUILD_ACTIVE_THREADS_MODAL = 'Guild Active Threads Modal'), (e.INBOX = 'Inbox'), (e.FORUM = 'Forum'), (e.VOICE_AUTO_OPEN = 'Voice Auto Open');
})(r || (r = {})),
    !(function (e) {
        (e.LATEST_ACTIVITY = 'Last Message'), (e.CREATION_DATE = 'Creation');
    })(i || (i = {}));
let h = new Set([o.evJ.TOO_MANY_ATTACHMENTS, o.evJ.EXPLICIT_CONTENT, o.evJ.ENTITY_TOO_LARGE, o.evJ.EXPLICIT_CONTENT]),
    p = new Set([o.evJ.AUTOMOD_MESSAGE_BLOCKED, o.evJ.AUTOMOD_TITLE_BLOCKED]);
