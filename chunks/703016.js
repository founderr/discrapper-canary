n(757143), n(733860);
var i = n(913527),
    r = n.n(i),
    l = n(570140),
    a = n(241601),
    o = n(419363),
    s = n(933557),
    c = n(660199),
    d = n(869765),
    u = n(706454),
    h = n(695346),
    m = n(314897),
    p = n(433355),
    g = n(592125),
    f = n(271383),
    _ = n(430824),
    E = n(131951),
    I = n(292959),
    C = n(699516),
    v = n(944486),
    N = n(9156),
    S = n(594174),
    T = n(51144),
    b = n(196051),
    x = n(441729),
    A = n(653477),
    Z = n(981631),
    L = n(388032);
let P = [],
    y = null,
    O = null,
    R = null,
    j = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, i) {
    let l = _.Z.getGuild(n),
        a = e
            .replace(j, L.intl.string(L.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var i;
                let r = S.default.getUser(t);
                if (null == r) return e;
                return null !== (i = f.ZP.getNick(n, r.id)) && void 0 !== i ? i : T.ZP.getName(r);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != l ? _.Z.getRole(l.id, t) : null;
                return null != n && null != n.name ? n.name : L.intl.string(L.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, s.F6)(n, S.default, C.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(L.intl.string(L.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = c.Qh[n],
                    l = 1000 * parseInt(t, 10),
                    a = r()(l);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? L.intl.formatToPlainString(L.t['uIj77+'], {
              username: t,
              body: a
          })
        : L.intl.formatToPlainString(L.t['Ix4H+v'], {
              username: t,
              body: a,
              replyUsername: i
          });
}
function M() {
    if (!o.Zh) return !1;
    let e = u.default.locale;
    if (null == R) {
        var t;
        R = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = R.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e || !1);
    O = n.length > 0 ? n[0] : null;
}
async function w(e, t, n, i, r) {
    let l = o.e6(e, n);
    null !== l && (null == O && M(), t ? await (0, b.NB)() : null == y || y.removeEventListener('end', b.NB), l.addEventListener('end', b.NB), null != i && l.addEventListener('start', i), null != r && l.addEventListener('end', r), (y = l), o.iq(l, O));
}
function k(e, t, n, i, r) {
    w(e, t, r, () => {
        (0, b.Bo)(n, i);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: l } = e;
    w(t, n, i, r, l);
}
function G() {
    return null !== y && y.removeEventListener('end', b.NB), o.M9(), (y = null), !0;
}
function B(e) {
    var t, n, i;
    let { message: r, channel: l } = e,
        a = r.type === Z.uaV.REPLY ? d.Z.getMessageByReference(r.messageReference) : null,
        o = (null == a ? void 0 : a.state) === d.Y.LOADED ? (null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.author) : null,
        s = null != o ? (null !== (n = f.ZP.getNick(l.guild_id, null == o ? void 0 : o.id)) && void 0 !== n ? n : T.ZP.getName(o)) : null,
        c = l.getGuildId(),
        u = null !== (i = f.ZP.getNick(c, r.author.id)) && void 0 !== i ? i : T.ZP.getName(r.author);
    return k(D(r.content, u, c, s), !0, l.id, r.id), !0;
}
function H(e) {
    var t, n, i, r, l, a;
    let { channelId: o, message: s, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let d = g.Z.getChannel(o);
    if (null == d) return !1;
    let u = v.Z.getChannelId(),
        _ = p.ZP.getCurrentSidebarChannelId(u),
        S = o === u || o === _,
        b = h.OW.getSetting() && s.tts && S,
        x = I.Z.getTTSType(),
        L = (null === (t = s.author) || void 0 === t ? void 0 : t.id) !== m.default.getId() && (x === Z.PrB.ALL_CHANNELS || (x === Z.PrB.SELECTED_CHANNEL && S));
    if ((b || L) && !C.Z.isBlockedOrIgnoredForMessage(s)) {
        if (P.indexOf(s.id) >= 0) return !1;
        P.unshift(s.id) > 10 && P.pop();
        let e = d.getGuildId();
        if (null != e && N.ZP.getMutedChannels(e).has(o)) return !1;
        let t = null !== (l = null !== (r = f.ZP.getNick(e, null === (n = s.author) || void 0 === n ? void 0 : n.id)) && void 0 !== r ? r : T.ZP.getName(s.author)) && void 0 !== l ? l : '',
            c = s.type === Z.uaV.REPLY ? (null === (i = s.referenced_message) || void 0 === i ? void 0 : i.author) : null,
            u = null != c ? (null !== (a = f.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== a ? a : T.ZP.getName(c)) : null;
        k(D(s.content, t, e, u), !1, d.id, s.id, A.f);
    }
    return !1;
}
function V(e) {
    let { id: t, channelId: n } = e,
        i = x.Z.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, b.NB)(), !0);
}
function F() {
    E.Z.isSelfDeaf() && o.M9();
}
t.Z = {
    init() {
        l.Z.subscribe('SPEAK_TEXT', U), l.Z.subscribe('SPEAK_MESSAGE', B), l.Z.subscribe('STOP_SPEAKING', G), l.Z.subscribe('MESSAGE_CREATE', H), l.Z.subscribe('MESSAGE_DELETE', V), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), l.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', M), (0, a.Ql)(M);
    }
};
