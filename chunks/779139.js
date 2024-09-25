n.d(t, {
    TZ: function () {
        return c;
    },
    y6: function () {
        return u;
    }
});
var r = n(904245),
    i = n(594174),
    a = n(626135),
    o = n(709054),
    s = n(8532),
    l = n(981631);
let u = (e) => {
        var t;
        let n = null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            r = ((null != n ? o.default.extractTimestamp(n) : 0) + o.default.extractTimestamp(e)) % s.m.length;
        return s.m[r];
    },
    c = (e, t, n) => {
        var o;
        let s = {
            channel: e,
            message: t,
            shouldMention: !0,
            showMentionToggle: !0
        };
        r.Z.sendGreetMessage(e.id, n, r.Z.getSendMessageOptionsForReply(s)),
            a.default.track(l.rMx.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null === (o = i.default.getCurrentUser()) || void 0 === o ? void 0 : o.id
            });
    };
