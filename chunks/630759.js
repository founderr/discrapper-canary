n.d(t, {
    J6: function () {
        return Y;
    },
    LO: function () {
        return m;
    },
    TQ: function () {
        return F;
    },
    UB: function () {
        return G;
    },
    ZU: function () {
        return L;
    },
    Zn: function () {
        return V;
    },
    aZ: function () {
        return D;
    },
    bo: function () {
        return K;
    },
    fz: function () {
        return W;
    },
    kK: function () {
        return P;
    },
    lg: function () {
        return H;
    },
    om: function () {
        return v;
    },
    pL: function () {
        return p;
    },
    uV: function () {
        return O;
    },
    uX: function () {
        return x;
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
    E = n(512722),
    i = n.n(E),
    a = n(913527),
    u = n.n(a),
    o = n(544891),
    c = n(253135),
    s = n(668781),
    _ = n(314897),
    l = n(131951),
    f = n(19780),
    d = n(959457),
    S = n(594174),
    I = n(70956),
    R = n(63063),
    T = n(5192),
    C = n(960048),
    N = n(51144),
    A = n(718629),
    M = n(615830),
    h = n(352954),
    U = n(571826),
    y = n(760373),
    g = n(981631),
    Z = n(689938);
function O() {
    return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
}
function p() {
    return R.Z.getArticleURL(g.BhN.END_TO_END_ENCRYPTION);
}
function F(e, t, n, r, E) {
    n ? A.Z.createSecureFramesVerifiedKey(e, t) : A.Z.createSecureFramesTransientKey(e, t),
        (0, U.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: E
        });
}
function m(e, t, n) {
    if (n) {
        let n = (0, c.MK)(new Uint8Array(t));
        A.Z.deleteSecureFramesVerifiedKey(e, n);
    } else A.Z.deleteSecureFramesTransientKey(e);
}
function L(e, t) {
    h.Z.openSecureFramesUpdateConfirmation({
        title: Z.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: Z.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            A.Z.deleteSecureFramesVerifiedKey(e, t), (0, U.Pn)();
        }
    });
}
function V(e) {
    let t = S.default.getUser(e),
        n = N.ZP.getName(t);
    h.Z.openSecureFramesUpdateConfirmation({
        title: Z.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: n }),
        subtitle: Z.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            A.Z.deleteSecureFramesUserVerifiedKeys(e), (0, U.DF)();
        }
    });
}
function K(e) {
    let t = u()(e),
        n = u()().diff(t, 's');
    if (n > 12 * I.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * I.Z.Seconds.DAYS_30));
        return Z.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (n > I.Z.Seconds.DAYS_30) {
        let e = Math.round(n / I.Z.Seconds.DAYS_30);
        return Z.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (n > 7 * I.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * I.Z.Seconds.DAY));
        return Z.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (n > I.Z.Seconds.DAY) {
        let e = Math.round(n / I.Z.Seconds.DAY);
        return Z.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (n > I.Z.Seconds.HOUR) {
        let e = Math.round(n / I.Z.Seconds.HOUR);
        return Z.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(n > I.Z.Seconds.MINUTE)) return Z.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: n });
        let e = Math.round(n / I.Z.Seconds.MINUTE);
        return Z.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function P(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    if (t && n) return Z.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: O() });
    if (t)
        return Z.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: r,
            helpArticle: O()
        });
    if (n) return Z.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: O() });
    else return Z.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: O() });
}
async function w(e) {
    let t = _.default.getStaticAuthSessionId();
    return i()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await l.Z.getMLSSigningKey(t, e);
}
function b(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function Y(e, t, n) {
    try {
        return (
            await o.tn.post({
                url: g.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: b(t),
                    key_version: n
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (C.Z.captureException(e), e);
    }
}
async function k(e) {
    let { key: t, signature: n } = await w(e);
    try {
        await o.tn.put({
            url: g.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: b(t),
                signature: b(n),
                key_version: e
            }
        }),
            A.Z.addUploadedKeyVersion(e);
    } catch (e) {
        throw (C.Z.captureException(e), e);
    }
}
function B(e) {
    return M.Z.getUploadedKeyVersionsCached().includes(e);
}
async function v(e) {
    !B(e) && (await k(e));
}
async function x(e) {
    if (!B(e)) return await k(e), !0;
    let t = _.default.getId(),
        { key: n } = await w(e),
        r = await Y(t, n, e);
    return !r && (0, U.KA)(e), r;
}
function G(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let E = n.getSecureFramesRosterMapEntry(e);
    if (null == E) return !1;
    let i = new Uint8Array(E);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = d.Z.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let E = new Uint8Array(n);
        for (let e = 0; e < i.length; e++) if (i[e] !== E[e]) return !0;
    }
    return !1;
}
function H(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, U.CW)({
        userId: t,
        channelId: n,
        keyVersion: y.GB,
        reason: y.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        s.Z.show({
            title: Z.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: Z.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({ username: r })
        });
}
function W(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!G(t, [f.Z, d.Z])) return !0;
    {
        let e = S.default.getUser(t),
            E = T.ZP.getName(n, r, e);
        return (
            H({
                userId: t,
                channelId: r,
                nickname: E
            }),
            !1
        );
    }
}
