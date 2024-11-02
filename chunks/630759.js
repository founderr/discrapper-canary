e.d(n, {
    J6: function () {
        return v;
    },
    LO: function () {
        return P;
    },
    TQ: function () {
        return O;
    },
    UB: function () {
        return B;
    },
    ZU: function () {
        return w;
    },
    Zn: function () {
        return F;
    },
    aZ: function () {
        return D;
    },
    bo: function () {
        return b;
    },
    fz: function () {
        return H;
    },
    kK: function () {
        return V;
    },
    lg: function () {
        return W;
    },
    om: function () {
        return Y;
    },
    pL: function () {
        return Z;
    },
    uV: function () {
        return M;
    },
    uX: function () {
        return G;
    }
}),
    e(518263),
    e(970173),
    e(520712),
    e(268111),
    e(941497),
    e(32026),
    e(480839),
    e(744285),
    e(492257),
    e(873817),
    e(47120);
var r = e(250683),
    i = e(512722),
    u = e.n(i),
    o = e(913527),
    a = e.n(o),
    l = e(544891),
    c = e(253135),
    s = e(668781),
    d = e(314897),
    E = e(131951),
    f = e(19780),
    _ = e(959457),
    S = e(594174),
    h = e(70956),
    T = e(63063),
    y = e(5192),
    g = e(960048),
    A = e(51144),
    I = e(718629),
    p = e(615830),
    C = e(352954),
    N = e(571826),
    R = e(760373),
    m = e(981631),
    U = e(388032);
function M() {
    return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function Z() {
    return T.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function O(t, n, e, r, i) {
    e ? I.Z.createSecureFramesVerifiedKey(t, n) : I.Z.createSecureFramesTransientKey(t, n),
        (0, N.M1)({
            channelId: r,
            userId: t,
            analyticsLocation: i
        });
}
function P(t, n, e) {
    if (e) {
        let e = (0, c.MK)(new Uint8Array(n));
        I.Z.deleteSecureFramesVerifiedKey(t, e);
    } else I.Z.deleteSecureFramesTransientKey(t);
}
function w(t, n) {
    C.Z.openSecureFramesUpdateConfirmation({
        title: U.intl.string(U.t['hdL15+']),
        subtitle: U.intl.string(U.t['8VGYKi']),
        onConfirm: () => {
            I.Z.deleteSecureFramesVerifiedKey(t, n), (0, N.Pn)();
        }
    });
}
function F(t) {
    let n = S.default.getUser(t),
        e = A.ZP.getName(n);
    C.Z.openSecureFramesUpdateConfirmation({
        title: U.intl.formatToPlainString(U.t.K6NGBw, { username: e }),
        subtitle: U.intl.string(U.t.F1BQKy),
        onConfirm: () => {
            I.Z.deleteSecureFramesUserVerifiedKeys(t), (0, N.DF)();
        }
    });
}
function b(t) {
    let n = a()(t),
        e = a()().diff(n, 's');
    if (e > 12 * h.Z.Seconds.DAYS_30) {
        let t = Math.round(e / (12 * h.Z.Seconds.DAYS_30));
        return U.intl.formatToPlainString(U.t.F1wqkJ, { count: t });
    }
    if (e > h.Z.Seconds.DAYS_30) {
        let t = Math.round(e / h.Z.Seconds.DAYS_30);
        return U.intl.formatToPlainString(U.t['iT+b+/'], { count: t });
    }
    if (e > 7 * h.Z.Seconds.DAY) {
        let t = Math.round(e / (7 * h.Z.Seconds.DAY));
        return U.intl.formatToPlainString(U.t.dLurKS, { count: t });
    } else if (e > h.Z.Seconds.DAY) {
        let t = Math.round(e / h.Z.Seconds.DAY);
        return U.intl.formatToPlainString(U.t.LE8a2N, { count: t });
    } else if (e > h.Z.Seconds.HOUR) {
        let t = Math.round(e / h.Z.Seconds.HOUR);
        return U.intl.formatToPlainString(U.t.KULxVV, { count: t });
    } else {
        if (!(e > h.Z.Seconds.MINUTE)) return U.intl.formatToPlainString(U.t['/w0Qp6'], { count: e });
        let t = Math.round(e / h.Z.Seconds.MINUTE);
        return U.intl.formatToPlainString(U.t.ws6rWl, { count: t });
    }
}
function V(t) {
    let { isCurrentUserKeyPersistent: n, isOtherUserKeyPersistent: e, otherUserNickname: r } = t;
    if (n && e) return U.intl.format(U.t['FJN+kp'], { helpArticle: M() });
    if (n)
        return U.intl.format(U.t['p/9PGh'], {
            username: r,
            helpArticle: M()
        });
    if (e) return U.intl.format(U.t['qT5z8/'], { helpArticle: M() });
    else return U.intl.format(U.t['6JLy+v'], { helpArticle: M() });
}
async function K(t) {
    let n = d.default.getStaticAuthSessionId();
    return u()(null != n, '[getCurrentUserPublicKey] session id should not be null'), await E.Z.getMLSSigningKey(n, t);
}
function L(t) {
    let n = r.fromByteArray(new Uint8Array(t));
    return 'data:application/octet-stream;base64,'.concat(n);
}
async function v(t, n, e) {
    try {
        return (
            await l.tn.post({
                url: m.ANM.VOICE_MATCH_PUBLIC_KEY(t),
                body: {
                    public_key: L(n),
                    key_version: e
                }
            })
        ).body.is_match;
    } catch (t) {
        throw (g.Z.captureException(t), t);
    }
}
async function k(t) {
    let { key: n, signature: e } = await K(t);
    try {
        await l.tn.put({
            url: m.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: L(n),
                signature: L(e),
                key_version: t
            }
        }),
            I.Z.addUploadedKeyVersion(t);
    } catch (t) {
        throw (g.Z.captureException(t), t);
    }
}
function x(t) {
    return p.Z.getUploadedKeyVersionsCached().includes(t);
}
async function Y(t) {
    !x(t) && (await k(t));
}
async function G(t) {
    if (!x(t)) return await k(t), !0;
    let n = d.default.getId(),
        { key: e } = await K(t),
        r = await v(n, e, t);
    return !r && (0, N.KA)(t), r;
}
function B(t, n) {
    let [e, r] = n;
    if (!e.isUserConnected(t)) return !1;
    let i = e.getSecureFramesRosterMapEntry(t);
    if (null == i) return !1;
    let u = new Uint8Array(i);
    for (let n of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(n, t)) continue;
        let e = _.Z.getSecureFramesRosterMapEntry(n, t);
        if (null == e) return !0;
        let i = new Uint8Array(e);
        for (let t = 0; t < u.length; t++) if (u[t] !== i[t]) return !0;
    }
    return !1;
}
function W(t) {
    let { userId: n, channelId: e, nickname: r } = t;
    (0, N.CW)({
        userId: n,
        channelId: e,
        keyVersion: R.GB,
        reason: R.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        s.Z.show({
            title: U.intl.string(U.t.mznLyc),
            body: U.intl.format(U.t.WY6IKS, { username: r })
        });
}
function H(t) {
    let { userId: n, guildId: e, channelId: r } = t;
    if (!B(n, [f.Z, _.Z])) return !0;
    {
        let t = S.default.getUser(n),
            i = y.ZP.getName(e, r, t);
        return (
            W({
                userId: n,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}
