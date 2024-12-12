r.d(n, {
    Dv: function () {
        return c;
    },
    Gq: function () {
        return l;
    },
    Gx: function () {
        return h;
    },
    XX: function () {
        return u;
    },
    bX: function () {
        return f;
    },
    bY: function () {
        return d;
    },
    iG: function () {
        return _;
    },
    ut: function () {
        return o;
    }
});
var i = r(446108),
    a = r(901461),
    s = r(981631);
function o(e) {
    return 'message-content-'.concat(e.id);
}
function l(e) {
    return 'message-reply-context-'.concat(e.id);
}
function u(e, n) {
    let r = null != n ? n : e.id;
    return 'message-username-'.concat(r);
}
function c(e) {
    return 'message-timestamp-'.concat(e.id);
}
function d(e) {
    return 'message-reactions-'.concat(e.id);
}
function f(e) {
    return 'message-accessories-'.concat(e.id);
}
function _(e, n, r) {
    let d = e.type === s.uaV.REPLY && null != e.messageReference,
        _ = e.embeds.length > 0,
        h = e.attachments.length > 0,
        p = e.stickerItems.length > 0,
        m = e.codedLinks.length > 0,
        g = e.hasFlag(s.iLy.HAS_THREAD),
        E = _ || h || p || m || g || e.type === s.uaV.THREAD_CREATED,
        v = _ && e.content === e.embeds[0].url && e.embeds[0].type === s.hBH.GIFV,
        I = e.type !== s.uaV.DEFAULT || (!v && '' !== e.content),
        T = (0, a.Z)(e),
        b = !T && (null == r ? void 0 : r.hasTimestamp) !== !1,
        y = !T,
        S = u(e, n),
        A = l(e),
        N = d ? A : S,
        C = y ? ''.concat(N, ' ').concat(i.Z0) : '';
    if (I) {
        let n = o(e);
        C += ' '.concat(n);
    }
    if (E) {
        let n = f(e);
        C += ' '.concat(n);
    }
    if (b) {
        let n = c(e);
        C += ' '.concat(i.fy, ' ').concat(n);
    }
    return C.trim();
}
function h(e) {
    if (0 === e.reactions.length) return;
    let n = d(e);
    return ''.concat(i.Mb, ' ').concat(n);
}
