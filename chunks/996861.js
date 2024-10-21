t.d(n, {
    $Z: function () {
        return p;
    },
    B8: function () {
        return R;
    },
    F4: function () {
        return v;
    },
    HH: function () {
        return P;
    },
    Hd: function () {
        return O;
    },
    Xl: function () {
        return C;
    },
    dF: function () {
        return j;
    },
    eM: function () {
        return G;
    },
    fB: function () {
        return T;
    },
    gK: function () {
        return L;
    },
    mG: function () {
        return D;
    },
    qe: function () {
        return b;
    },
    rY: function () {
        return x;
    },
    ts: function () {
        return y;
    },
    zW: function () {
        return N;
    }
}),
    t(200651),
    t(192379),
    t(481060);
var i = t(332148),
    a = t(904245),
    s = t(257559),
    l = t(143740),
    r = t(912332),
    o = t(434404);
t(726521);
var u = t(623292),
    d = t(324701),
    c = t(488131),
    E = t(314897),
    M = t(592125),
    g = t(626135),
    f = t(934415),
    m = t(572004),
    I = t(585483),
    _ = t(709054),
    Z = t(111618),
    S = t(50284),
    h = t(730954),
    A = t(981631);
function N(e) {
    let n = e.getGuildId();
    null != n && o.Z.open(n, A.pNK.OVERVIEW);
}
function v(e, n, t) {
    (0, m.JG)(t.shiftKey ? ''.concat(n.channel_id, '-').concat(n.id) : n.id);
}
function T(e, n) {
    g.default.track(A.rMx.MESSAGE_LINK_COPIED, {
        message_id: n.id,
        channel: n.channel_id
    }),
        (0, m.JG)((0, f.wR)(e.guild_id, e.id, n.id));
}
function p(e, n, t) {
    n.state === A.yb.SEND_FAILED || t.shiftKey ? a.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : s.Z.confirmDelete(e, n);
}
function O(e, n) {
    a.Z.startEditMessage(e.id, n.id, n.content);
}
function R(e, n) {
    (0, S.Z)(e.id, n.id);
}
function x(e, n, t) {
    if (!1 === n.pinned) {
        t.shiftKey ? i.Z.pinMessage(e, n.id) : s.Z.confirmPin(e, n);
        return;
    }
    t.shiftKey ? i.Z.unpinMessage(e, n.id) : s.Z.confirmUnpin(e, n);
}
function C(e, n) {
    (0, l.Z)(e.id, n.id);
}
function D(e, n) {
    (0, h.Z)(e, n, void 0, Z.Z.getOptions(n.id));
}
function P(e, n, t) {
    let i = e.isPrivate(),
        a = n.author.id === E.default.getId();
    (0, u.fE)({
        channel: e,
        message: n,
        shouldMention: !t.shiftKey && !a,
        showMentionToggle: !i && !a
    }),
        I.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS);
}
function L(e, n) {
    (0, c.R6)(e, n, 'Message');
}
function b(e, n) {
    let t = M.Z.getChannel(_.default.castMessageIdAsChannelId(n.id));
    null != t && (0, c.ok)(t);
}
function j(e, n) {
    (0, d.z)({
        channelId: e.id,
        messageId: n.id
    });
}
function G(e, n) {
    (0, d.x)({
        channelId: e.id,
        messageId: n.id
    });
}
function y(e, n) {
    (0, r.l8)({
        channelId: e.id,
        messageId: n.id,
        source: 'message-actions'
    });
}
