n.d(t, {
    Dv: function () {
        return u;
    },
    Gq: function () {
        return o;
    },
    Gx: function () {
        return _;
    },
    XX: function () {
        return l;
    },
    bX: function () {
        return d;
    },
    bY: function () {
        return c;
    },
    iG: function () {
        return f;
    },
    ut: function () {
        return s;
    }
});
var r = n(446108),
    i = n(901461),
    a = n(981631);
function s(e) {
    return 'message-content-'.concat(e.id);
}
function o(e) {
    return 'message-reply-context-'.concat(e.id);
}
function l(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function u(e) {
    return 'message-timestamp-'.concat(e.id);
}
function c(e) {
    return 'message-reactions-'.concat(e.id);
}
function d(e) {
    return 'message-accessories-'.concat(e.id);
}
function f(e, t, n) {
    let c = e.type === a.uaV.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        _ = e.attachments.length > 0,
        p = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        m = e.hasFlag(a.iLy.HAS_THREAD),
        g = f || _ || p || h || m || e.type === a.uaV.THREAD_CREATED,
        E = f && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        v = e.type !== a.uaV.DEFAULT || (!E && '' !== e.content),
        I = (0, i.Z)(e),
        T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
        b = l(e, t),
        S = o(e),
        y = I ? '' : ''.concat(c ? S : b, ' ').concat(r.Z0);
    if (v) {
        let t = s(e);
        y += ' '.concat(t);
    }
    if (g) {
        let t = d(e);
        y += ' '.concat(t);
    }
    if (T) {
        let t = u(e);
        y += ' '.concat(r.fy, ' ').concat(t);
    }
    return y.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return ''.concat(r.Mb, ' ').concat(t);
}
