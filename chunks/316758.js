n.d(t, {
    IV: function () {
        return l;
    },
    P: function () {
        return c;
    },
    fH: function () {
        return u;
    },
    sk: function () {
        return _;
    },
    xt: function () {
        return d;
    }
});
var r = n(166459),
    i = n(966390),
    a = n(476326),
    o = n(703558),
    s = n(398805);
async function l(e, t, n) {
    let r = (0, s.Yk)(t, n),
        i = await fetch(n);
    return u(e, t, new File([await i.blob()], r, { type: 'image/gif' })), n;
}
function u(e, t, n) {
    let i = {
        id: t,
        channelId: e,
        file: n,
        platform: a.ow.WEB
    };
    r.Z.addFile({
        file: i,
        channelId: e,
        draftType: o.d.Poll
    });
}
async function c(e, t, n) {
    r.Z.remove(e, t, o.d.Poll);
}
async function d(e) {
    r.Z.clearAll(e, o.d.Poll);
}
async function _(e) {
    let { channel: t, items: n, poll: r, nonce: a, maxSizeCallback: s } = e;
    return i.Z.uploadFiles({
        channelId: t.id,
        uploads: n,
        draftType: o.d.Poll,
        parsedMessage: {
            content: '',
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        },
        options: {
            nonce: a,
            poll: r
        },
        raiseEndpointErrors: !0
    });
}
