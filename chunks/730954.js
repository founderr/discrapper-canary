t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(789020);
var i = t(904245),
    a = t(667204);
function s(e, n, t) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ((i.Z.deleteMessage(e.id, n.id, !0), n.isCommandType())) {
        null != n.interactionData && null != s.applicationId && (0, a.d)(n, e, s);
        return;
    }
    let { content: l, tts: r, messageReference: o, flags: u, nonce: d } = n;
    i.Z.sendMessage(
        e.id,
        {
            content: l,
            tts: r,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        void 0,
        {
            nonce: d,
            flags: u,
            messageReference: null != o ? o : void 0,
            ...s
        }
    );
}
