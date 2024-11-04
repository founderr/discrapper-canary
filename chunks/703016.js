n(757143), n(733860);
var i = n(913527),
    r = n.n(i),
    a = n(570140),
    l = n(241601),
    s = n(419363),
    o = n(933557),
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
    S = n(9156),
    N = n(594174),
    T = n(51144),
    x = n(196051),
    b = n(441729),
    A = n(653477),
    Z = n(981631),
    y = n(388032);
let L = [],
    R = null,
    P = null,
    O = null,
    j = /\|\|([\s\S]+?)\|\|/g;
function D(e, t, n, i) {
    let a = _.Z.getGuild(n),
        l = e
            .replace(j, y.intl.string(y.t['F+x38P']))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                var i;
                let r = N.default.getUser(t);
                if (null == r) return e;
                return null !== (i = f.ZP.getNick(n, r.id)) && void 0 !== i ? i : T.ZP.getName(r);
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != a ? _.Z.getRole(a.id, t) : null;
                return null != n && null != n.name ? n.name : y.intl.string(y.t.dRcLAw);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = g.Z.getChannel(t);
                return null == n ? e : (0, o.F6)(n, N.default, C.Z);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => ''.concat(y.intl.string(y.t.sMOuub), ' ').concat(t))
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => '/'.concat(t))
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = c.Qh[n],
                    a = 1000 * parseInt(t, 10),
                    l = r()(a);
                return null != i ? i(l) : l.format();
            });
    return null == i
        ? y.intl.formatToPlainString(y.t['uIj77+'], {
              username: t,
              body: l
          })
        : y.intl.formatToPlainString(y.t['Ix4H+v'], {
              username: t,
              body: l,
              replyUsername: i
          });
}
function M() {
    if (!s.Zh) return !1;
    let e = u.default.locale;
    if (null == O) {
        var t;
        O = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices();
    }
    let n = O.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e || !1);
    P = n.length > 0 ? n[0] : null;
}
async function w(e, t, n, i, r) {
    let a = s.e6(e, n);
    null !== a && (null == P && M(), t ? await (0, x.NB)() : null == R || R.removeEventListener('end', x.NB), a.addEventListener('end', x.NB), null != i && a.addEventListener('start', i), null != r && a.addEventListener('end', r), (R = a), s.iq(a, P));
}
function k(e, t, n, i, r) {
    w(e, t, r, () => {
        (0, x.Bo)(n, i);
    });
}
function U(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    w(t, n, i, r, a);
}
function G() {
    return null !== R && R.removeEventListener('end', x.NB), s.M9(), (R = null), !0;
}
function B(e) {
    var t, n, i;
    let { message: r, channel: a } = e,
        l = r.type === Z.uaV.REPLY ? d.Z.getMessageByReference(r.messageReference) : null,
        s = (null == l ? void 0 : l.state) === d.Y.LOADED ? (null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.author) : null,
        o = null != s ? (null !== (n = f.ZP.getNick(a.guild_id, null == s ? void 0 : s.id)) && void 0 !== n ? n : T.ZP.getName(s)) : null,
        c = a.getGuildId(),
        u = null !== (i = f.ZP.getNick(c, r.author.id)) && void 0 !== i ? i : T.ZP.getName(r.author);
    return k(D(r.content, u, c, o), !0, a.id, r.id), !0;
}
function H(e) {
    var t, n, i, r, a, l;
    let { channelId: s, message: o, optimistic: c } = e;
    if (c || E.Z.isSelfDeaf()) return !1;
    let d = g.Z.getChannel(s);
    if (null == d) return !1;
    let u = v.Z.getChannelId(),
        _ = p.ZP.getCurrentSidebarChannelId(u),
        N = s === u || s === _,
        x = h.OW.getSetting() && o.tts && N,
        b = I.Z.getTTSType(),
        y = (null === (t = o.author) || void 0 === t ? void 0 : t.id) !== m.default.getId() && (b === Z.PrB.ALL_CHANNELS || (b === Z.PrB.SELECTED_CHANNEL && N));
    if ((x || y) && !C.Z.isBlockedForMessage(o)) {
        if (L.indexOf(o.id) >= 0) return !1;
        L.unshift(o.id) > 10 && L.pop();
        let e = d.getGuildId();
        if (null != e && S.ZP.getMutedChannels(e).has(s)) return !1;
        let t = null !== (a = null !== (r = f.ZP.getNick(e, null === (n = o.author) || void 0 === n ? void 0 : n.id)) && void 0 !== r ? r : T.ZP.getName(o.author)) && void 0 !== a ? a : '',
            c = o.type === Z.uaV.REPLY ? (null === (i = o.referenced_message) || void 0 === i ? void 0 : i.author) : null,
            u = null != c ? (null !== (l = f.ZP.getNick(e, null == c ? void 0 : c.id)) && void 0 !== l ? l : T.ZP.getName(c)) : null;
        k(D(o.content, t, e, u), !1, d.id, o.id, A.f);
    }
    return !1;
}
function V(e) {
    let { id: t, channelId: n } = e,
        i = b.Z.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, x.NB)(), !0);
}
function F() {
    E.Z.isSelfDeaf() && s.M9();
}
t.Z = {
    init() {
        a.Z.subscribe('SPEAK_TEXT', U), a.Z.subscribe('SPEAK_MESSAGE', B), a.Z.subscribe('STOP_SPEAKING', G), a.Z.subscribe('MESSAGE_CREATE', H), a.Z.subscribe('MESSAGE_DELETE', V), a.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', F), a.Z.subscribe('USER_SETTINGS_PROTO_UPDATE', M), (0, l.Ql)(M);
    }
};
