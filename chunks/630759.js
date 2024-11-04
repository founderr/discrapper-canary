n.d(e, {
    J6: function () {
        return k;
    },
    LO: function () {
        return L;
    },
    TQ: function () {
        return F;
    },
    UB: function () {
        return W;
    },
    ZU: function () {
        return K;
    },
    Zn: function () {
        return P;
    },
    aZ: function () {
        return M;
    },
    bo: function () {
        return O;
    },
    fz: function () {
        return z;
    },
    kK: function () {
        return w;
    },
    lg: function () {
        return G;
    },
    om: function () {
        return x;
    },
    pL: function () {
        return Z;
    },
    uV: function () {
        return D;
    },
    uX: function () {
        return B;
    }
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(47120);
var r = n(250683),
    i = n(512722),
    o = n.n(i),
    u = n(913527),
    a = n.n(u),
    c = n(544891),
    l = n(253135),
    E = n(668781),
    s = n(314897),
    f = n(131951),
    d = n(19780),
    _ = n(959457),
    S = n(594174),
    h = n(70956),
    y = n(63063),
    g = n(5192),
    T = n(960048),
    I = n(51144),
    p = n(718629),
    R = n(615830),
    A = n(352954),
    U = n(571826),
    C = n(760373),
    m = n(981631),
    N = n(388032);
function D() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function M() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function Z() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function F(t, e, n, r, i) {
    n ? p.Z.createSecureFramesVerifiedKey(t, e) : p.Z.createSecureFramesTransientKey(t, e),
        (0, U.M1)({
            channelId: r,
            userId: t,
            analyticsLocation: i
        });
}
function L(t, e, n) {
    if (n) {
        let n = (0, l.MK)(new Uint8Array(e));
        p.Z.deleteSecureFramesVerifiedKey(t, n);
    } else p.Z.deleteSecureFramesTransientKey(t);
}
function K(t, e) {
    A.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.string(N.t['hdL15+']),
        subtitle: N.intl.string(N.t['8VGYKi']),
        onConfirm: () => {
            p.Z.deleteSecureFramesVerifiedKey(t, e), (0, U.Pn)();
        }
    });
}
function P(t) {
    let e = S.default.getUser(t),
        n = I.ZP.getName(e);
    A.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.formatToPlainString(N.t.K6NGBw, { username: n }),
        subtitle: N.intl.string(N.t.F1BQKy),
        onConfirm: () => {
            p.Z.deleteSecureFramesUserVerifiedKeys(t), (0, U.DF)();
        }
    });
}
function O(t) {
    let e = a()(t),
        n = a()().diff(e, 's');
    if (n > 12 * h.Z.Seconds.DAYS_30) {
        let t = Math.round(n / (12 * h.Z.Seconds.DAYS_30));
        return N.intl.formatToPlainString(N.t.F1wqkJ, { count: t });
    }
    if (n > h.Z.Seconds.DAYS_30) {
        let t = Math.round(n / h.Z.Seconds.DAYS_30);
        return N.intl.formatToPlainString(N.t['iT+b+/'], { count: t });
    }
    if (n > 7 * h.Z.Seconds.DAY) {
        let t = Math.round(n / (7 * h.Z.Seconds.DAY));
        return N.intl.formatToPlainString(N.t.dLurKS, { count: t });
    } else if (n > h.Z.Seconds.DAY) {
        let t = Math.round(n / h.Z.Seconds.DAY);
        return N.intl.formatToPlainString(N.t.LE8a2N, { count: t });
    } else if (n > h.Z.Seconds.HOUR) {
        let t = Math.round(n / h.Z.Seconds.HOUR);
        return N.intl.formatToPlainString(N.t.KULxVV, { count: t });
    } else {
        if (!(n > h.Z.Seconds.MINUTE)) return N.intl.formatToPlainString(N.t['/w0Qp6'], { count: n });
        let t = Math.round(n / h.Z.Seconds.MINUTE);
        return N.intl.formatToPlainString(N.t.ws6rWl, { count: t });
    }
}
function w(t) {
    let { isCurrentUserKeyPersistent: e, isOtherUserKeyPersistent: n, otherUserNickname: r } = t;
    if (e && n) return N.intl.format(N.t['FJN+kp'], { helpArticle: D() });
    if (e)
        return N.intl.format(N.t['p/9PGh'], {
            username: r,
            helpArticle: D()
        });
    if (n) return N.intl.format(N.t['qT5z8/'], { helpArticle: D() });
    else return N.intl.format(N.t['6JLy+v'], { helpArticle: D() });
}
async function V(t) {
    let e = s.default.getStaticAuthSessionId();
    return o()(null != e, '[getCurrentUserPublicKey] session id should not be null'), await f.Z.getMLSSigningKey(e, t);
}
function b(t) {
    let e = r.fromByteArray(new Uint8Array(t));
    return 'data:application/octet-stream;base64,'.concat(e);
}
async function k(t, e, n) {
    try {
        return (
            await c.tn.post({
                url: m.ANM.VOICE_MATCH_PUBLIC_KEY(t),
                body: {
                    public_key: b(e),
                    key_version: n
                }
            })
        ).body.is_match;
    } catch (t) {
        throw (T.Z.captureException(t), t);
    }
}
async function Y(t) {
    let { key: e, signature: n } = await V(t);
    try {
        await c.tn.put({
            url: m.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: b(e),
                signature: b(n),
                key_version: t
            }
        }),
            p.Z.addUploadedKeyVersion(t);
    } catch (t) {
        throw (T.Z.captureException(t), t);
    }
}
function v(t) {
    return R.Z.getUploadedKeyVersionsCached().includes(t);
}
async function x(t) {
    !v(t) && (await Y(t));
}
async function B(t) {
    if (!v(t)) return await Y(t), !0;
    let e = s.default.getId(),
        { key: n } = await V(t),
        r = await k(e, n, t);
    return !r && (0, U.KA)(t), r;
}
function W(t, e) {
    let [n, r] = e;
    if (!n.isUserConnected(t)) return !1;
    let i = n.getSecureFramesRosterMapEntry(t);
    if (null == i) return !1;
    let o = new Uint8Array(i);
    for (let e of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(e, t)) continue;
        let n = _.Z.getSecureFramesRosterMapEntry(e, t);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let t = 0; t < o.length; t++) if (o[t] !== i[t]) return !0;
    }
    return !1;
}
function G(t) {
    let { userId: e, channelId: n, nickname: r } = t;
    (0, U.CW)({
        userId: e,
        channelId: n,
        keyVersion: C.GB,
        reason: C.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        E.Z.show({
            title: N.intl.string(N.t.mznLyc),
            body: N.intl.format(N.t.WY6IKS, { username: r })
        });
}
function z(t) {
    let { userId: e, guildId: n, channelId: r } = t;
    if (!W(e, [d.Z, _.Z])) return !0;
    {
        let t = S.default.getUser(e),
            i = g.ZP.getName(n, r, t);
        return (
            G({
                userId: e,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}
