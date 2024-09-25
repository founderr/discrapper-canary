n.d(t, {
    Lh: function () {
        return d;
    },
    MR: function () {
        return m;
    },
    g1: function () {
        return E;
    },
    iD: function () {
        return _;
    },
    ir: function () {
        return f;
    },
    s4: function () {
        return h;
    },
    sm: function () {
        return p;
    }
});
var r = n(757143);
var i = n(633302),
    a = n(695346),
    o = n(314897),
    s = n(626135),
    l = n(981631),
    u = n(468788),
    c = n(689938);
function d(e) {
    return null == e.id ? i.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
function _(e, t, n, r) {
    var i, a, o;
    let s;
    return (s = r ? (e ? c.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : c.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL) : e ? c.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : c.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
        reactions: t,
        emojiName: null !== (o = null === (a = d(n)) || void 0 === a ? void 0 : null === (i = a.replace(/[:_]/g, ' ')) || void 0 === i ? void 0 : i.trim()) && void 0 !== o ? o : ''
    });
}
function E(e) {
    var t, n, r;
    return {
        id: null !== (t = e.id) && void 0 !== t ? t : null,
        name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : '',
        animated: !!e.animated
    };
}
function f(e, t) {
    if (null != t.id) {
        let n = null != e.id ? ''.concat(e.id) : e.id;
        return ''.concat(t.id) === n;
    }
    return null == e.id && t.name === e.name;
}
function h(e) {
    if (e.isThread()) return l.jXE.THREAD_TEXT_AREA;
    if (e.isForumPost()) return l.jXE.FORUM_CHANNEL_TEXT_AREA;
    if (e.isGuildVocal()) return l.jXE.TEXT_IN_VOICE;
    return l.jXE.CHANNEL_TEXT_AREA;
}
function p(e) {
    let { userId: t, optimistic: n } = e,
        r = o.default.getId() === t;
    return (!n || !!r) && !0;
}
function m(e, t) {
    a.fz.updateSetting(e),
        s.default.track(l.rMx.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: u.I.ACCOUNT,
            reaction_notifications: e,
            reaction_notifications_old: t
        });
}
