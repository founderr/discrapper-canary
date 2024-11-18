n.d(t, {
    Iu: function () {
        return B;
    },
    Jw: function () {
        return U;
    },
    _r: function () {
        return Z;
    },
    cX: function () {
        return V;
    },
    lv: function () {
        return G;
    },
    v: function () {
        return M;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(490757),
    s = n(429827),
    o = n(353928),
    l = n(336892),
    u = n(624833),
    c = n(944314),
    d = n(399358),
    f = n(945835),
    _ = n(912931),
    p = n(966552),
    h = n(561763),
    m = n(529306),
    g = n(90075),
    E = n(862666),
    v = n(252611),
    b = n(136144),
    I = n(316137),
    S = n(654123),
    T = n(660020),
    y = n(980084),
    A = n(24688),
    N = n(200997),
    C = n(633302),
    R = n(134432),
    O = n(594174),
    D = n(768581),
    L = n(176354),
    x = n(353368),
    w = n(388032);
let M = {
        start: 10,
        end: 15
    },
    P = [a],
    k = [s, o, l, u, c, d, f, _, p, h, m, g, E, v, b, I, S, T, y, A, N],
    U = {
        [x.q.BASIC]: P,
        [x.q.PREMIUM]: k
    },
    G = i().memoize(
        (e) =>
            new Promise((t) => {
                let n = new Image();
                (n.src = e),
                    (n.crossOrigin = 'Anonymous'),
                    (n.onload = () => {
                        let r = x.v * (0, R.x_)();
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
        let n = U[e];
        if (null != t && e === x.q.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e);
        }
        return Math.floor(Math.random() * n.length);
    };
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.v;
    if (null != e.id) {
        var n;
        return D.ZP.getEmojiURL({
            id: e.id,
            animated: null !== (n = e.animated) && void 0 !== n && n,
            size: t
        });
    }
    let r = C.ZP.convertSurrogateToName(e.name, !1),
        i = C.ZP.getByName(r);
    return null != i ? L.ZP.getURL(i.surrogates) : '';
}
function F(e, t) {
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
    var t, n, r, i, a, s;
    if (e.length < 1) return '';
    let o = F(e, 'userId'),
        l = F(e, 'emojiName'),
        u = l.length < 2 ? (null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : '') : l.join(', ');
    if (o.length < 1) return '';
    if (1 === o.length)
        return w.intl.formatToPlainString(w.t.yZYxzM, {
            firstUsername: null === (n = O.default.getUser(o[0])) || void 0 === n ? void 0 : n.username,
            emojiNames: u
        });
    if (2 === o.length)
        return w.intl.formatToPlainString(w.t['8rmtbW'], {
            firstUsername: null === (r = O.default.getUser(o[0])) || void 0 === r ? void 0 : r.username,
            secondUsername: null === (i = O.default.getUser(o[1])) || void 0 === i ? void 0 : i.username,
            emojiNames: u
        });
    else
        return w.intl.formatToPlainString(w.t['/okjv7'], {
            firstUsername: null === (a = O.default.getUser(o[0])) || void 0 === a ? void 0 : a.username,
            secondUsername: null === (s = O.default.getUser(o[1])) || void 0 === s ? void 0 : s.username,
            count: o.length - 2,
            emojiNames: u
        });
}
