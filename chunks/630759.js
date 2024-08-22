t.d(n, {
    J6: function () {
        return b;
    },
    LO: function () {
        return U;
    },
    MA: function () {
        return k;
    },
    TQ: function () {
        return p;
    },
    ZU: function () {
        return Z;
    },
    Zn: function () {
        return m;
    },
    bo: function () {
        return D;
    },
    fz: function () {
        return G;
    },
    kK: function () {
        return F;
    },
    lg: function () {
        return Y;
    },
    om: function () {
        return K;
    },
    uX: function () {
        return v;
    }
}),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(47120);
var r = t(250683),
    i = t(512722),
    u = t.n(i),
    E = t(913527),
    a = t.n(E),
    o = t(544891),
    s = t(253135),
    c = t(668781),
    l = t(314897),
    _ = t(131951),
    d = t(19780),
    f = t(959457),
    S = t(594174),
    I = t(70956),
    T = t(5192),
    R = t(960048),
    A = t(51144),
    N = t(718629),
    M = t(615830),
    C = t(352954),
    h = t(571826),
    g = t(760373),
    y = t(981631),
    O = t(689938);
function p(e, n, t, r, i) {
    t ? N.Z.createSecureFramesVerifiedKey(e, n) : N.Z.createSecureFramesTransientKey(e, n),
        (0, h.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function U(e, n, t) {
    if (t) {
        let t = (0, s.MK)(new Uint8Array(n));
        N.Z.deleteSecureFramesVerifiedKey(e, t);
    } else N.Z.deleteSecureFramesTransientKey(e);
}
function Z(e, n) {
    C.Z.openSecureFramesUpdateConfirmation({
        title: O.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: O.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            N.Z.deleteSecureFramesVerifiedKey(e, n), (0, h.Pn)();
        }
    });
}
function m(e) {
    let n = S.default.getUser(e),
        t = A.ZP.getName(n);
    C.Z.openSecureFramesUpdateConfirmation({
        title: O.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: t }),
        subtitle: O.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            N.Z.deleteSecureFramesUserVerifiedKeys(e), (0, h.DF)();
        }
    });
}
function D(e) {
    let n = a()(e),
        t = a()().diff(n, 's');
    if (t > 12 * I.Z.Seconds.DAYS_30) {
        let e = Math.round(t / (12 * I.Z.Seconds.DAYS_30));
        return O.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (t > I.Z.Seconds.DAYS_30) {
        let e = Math.round(t / I.Z.Seconds.DAYS_30);
        return O.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (t > 7 * I.Z.Seconds.DAY) {
        let e = Math.round(t / (7 * I.Z.Seconds.DAY));
        return O.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (t > I.Z.Seconds.DAY) {
        let e = Math.round(t / I.Z.Seconds.DAY);
        return O.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (t > I.Z.Seconds.HOUR) {
        let e = Math.round(t / I.Z.Seconds.HOUR);
        return O.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(t > I.Z.Seconds.MINUTE)) return O.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: t });
        let e = Math.round(t / I.Z.Seconds.MINUTE);
        return O.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function F(e) {
    let { isCurrentUserKeyPersistent: n, isOtherUserKeyPersistent: t, otherUserNickname: r } = e;
    if (n && t) return O.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: g.l4 });
    if (n)
        return O.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: r,
            helpArticle: g.l4
        });
    if (t) return O.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: g.l4 });
    else return O.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: g.l4 });
}
async function L(e) {
    let n = l.default.getStaticAuthSessionId();
    return u()(null != n, '[getCurrentUserPublicKey] session id should not be null'), await _.Z.getMLSSigningKey(n, e);
}
function V(e) {
    let n = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(n);
}
async function b(e, n, t) {
    try {
        return (
            await o.tn.post({
                url: y.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: V(n),
                    key_version: t
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (R.Z.captureException(e), e);
    }
}
async function w(e) {
    let { key: n, signature: t } = await L(e);
    try {
        await o.tn.put({
            url: y.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: V(n),
                signature: V(t),
                key_version: e
            }
        }),
            N.Z.addUploadedKeyVersion(e);
    } catch (e) {
        throw (R.Z.captureException(e), e);
    }
}
function P(e) {
    return M.Z.getUploadedKeyVersionsCached().includes(e);
}
async function K(e) {
    !P(e) && (await w(e));
}
async function v(e) {
    if (!P(e)) return await w(e), !0;
    let n = l.default.getId(),
        { key: t } = await L(e),
        r = await b(n, t, e);
    return !r && (0, h.KA)(e), r;
}
function k(e, n) {
    let [t, r] = n,
        i = t.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let u = new Uint8Array(i);
    return r
        .getAllActiveStreamKeys()
        .filter((n) => r.isUserConnected(n, e))
        .every((n) => {
            let t = f.Z.getSecureFramesRosterMapEntry(n, e);
            if (null == t) return !1;
            let r = new Uint8Array(t);
            for (let e = 0; e < u.length; e++) if (u[e] !== r[e]) return !1;
            return !0;
        });
}
function Y(e) {
    let { userId: n, channelId: t, nickname: r } = e;
    (0, h.CW)({
        userId: n,
        channelId: t,
        keyVersion: g.GB,
        reason: g.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        c.Z.show({
            title: O.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_TITLE,
            body: O.Z.Messages.E2EE_INCONSISTENT_KEY_MISMATCH_SUBTITLE.format({ username: r })
        });
}
function G(e) {
    let { userId: n, guildId: t, channelId: r } = e;
    if (k(n, [d.Z, f.Z])) return !0;
    let i = S.default.getUser(n),
        u = T.ZP.getName(t, r, i);
    return (
        Y({
            userId: n,
            channelId: r,
            nickname: u
        }),
        !1
    );
}
