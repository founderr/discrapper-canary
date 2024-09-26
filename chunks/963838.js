n.d(t, {
    Iu: function () {
        return B;
    },
    Jw: function () {
        return G;
    },
    _r: function () {
        return F;
    },
    cX: function () {
        return V;
    },
    lv: function () {
        return k;
    },
    v: function () {
        return U;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(490757),
    o = n(429827),
    s = n(353928),
    l = n(336892),
    u = n(624833),
    c = n(944314),
    d = n(399358),
    _ = n(945835),
    E = n(912931),
    f = n(966552),
    h = n(561763),
    p = n(529306),
    m = n(90075),
    I = n(862666),
    T = n(252611),
    g = n(136144),
    S = n(316137),
    A = n(654123),
    v = n(660020),
    N = n(980084),
    O = n(24688),
    R = n(200997),
    C = n(633302),
    y = n(134432),
    L = n(594174),
    b = n(768581),
    D = n(176354),
    M = n(353368),
    P = n(689938);
let U = {
        start: 10,
        end: 15
    },
    w = [a],
    x = [o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, v, N, O, R],
    G = {
        [M.q.BASIC]: w,
        [M.q.PREMIUM]: x
    },
    k = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = 'Anonymous'),
                    (n.onload = () => {
                        let r = M.v * (0, y.x_)();
                        if (n.width === r && n.height === r) t(e);
                        else {
                            var i;
                            let e = document.createElement('canvas');
                            (e.width = r), (e.height = r), null === (i = e.getContext('2d')) || void 0 === i || i.drawImage(n, 0, 0), t(e.toDataURL('image/png'));
                        }
                    });
            })
    ),
    B = (e, t) => {
        let n = G[e];
        if (null != t && e === M.q.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.v;
    if (null != e.id) {
        var n;
        return b.ZP.getEmojiURL({
            id: e.id,
            animated: null !== (n = e.animated) && void 0 !== n && n,
            size: t
        });
    }
    let r = C.ZP.convertSurrogateToName(e.name, !1),
        i = C.ZP.getByName(r);
    return null != i ? D.ZP.getURL(i.surrogates) : '';
}
function Z(e, t) {
    return i()(e)
        .map((e) => {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : null;
        })
        .filter((e) => null != e)
        .uniq()
        .value();
}
function V(e) {
    var t, n, r, i, a, o;
    if (e.length < 1) return '';
    let s = Z(e, 'userId'),
        l = Z(e, 'emojiName'),
        u = l.length < 2 ? (null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : '') : l.join(', ');
    if (s.length < 1) return '';
    if (1 === s.length)
        return P.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (n = L.default.getUser(s[0])) || void 0 === n ? void 0 : n.username,
            emojiNames: u
        });
    if (2 === s.length)
        return P.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (r = L.default.getUser(s[0])) || void 0 === r ? void 0 : r.username,
            secondUsername: null === (i = L.default.getUser(s[1])) || void 0 === i ? void 0 : i.username,
            emojiNames: u
        });
    else
        return P.Z.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (a = L.default.getUser(s[0])) || void 0 === a ? void 0 : a.username,
            secondUsername: null === (o = L.default.getUser(s[1])) || void 0 === o ? void 0 : o.username,
            count: s.length - 2,
            emojiNames: u
        });
}
