n.d(t, {
    J6: function () {
        return Z;
    },
    LO: function () {
        return T;
    },
    TQ: function () {
        return C;
    },
    ZU: function () {
        return M;
    },
    Zn: function () {
        return m;
    },
    bo: function () {
        return U;
    },
    kK: function () {
        return w;
    },
    om: function () {
        return F;
    },
    uX: function () {
        return v;
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
    n(873817);
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    u = n(544891),
    l = n(253135),
    c = n(314897),
    E = n(131951),
    d = n(594174),
    f = n(70956),
    _ = n(960048),
    h = n(51144),
    y = n(718629),
    I = n(615830),
    S = n(352954),
    g = n(571826),
    A = n(760373),
    R = n(981631),
    p = n(689938);
function C(e, t, n, r, i) {
    n ? y.Z.createVerifiedKey(e, t) : y.Z.createSecureFramesTransientKey(e, t),
        (0, g.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function T(e, t, n) {
    if (n) {
        let n = (0, l.MK)(new Uint8Array(t));
        y.Z.deleteVerifiedKey(e, n);
    } else y.Z.deleteSecureFramesTransientKey(e);
}
function M(e, t) {
    S.Z.openSecureFramesUpdateConfirmation({
        title: p.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: p.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            y.Z.deleteVerifiedKey(e, t), (0, g.Pn)();
        }
    });
}
function m(e) {
    let t = d.default.getUser(e),
        n = h.ZP.getName(t);
    S.Z.openSecureFramesUpdateConfirmation({
        title: p.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: n }),
        subtitle: p.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            y.Z.deleteAllUserVerifiedKeys(e), (0, g.DF)();
        }
    });
}
function U(e) {
    let t = s()(e),
        n = s()().diff(t, 's');
    if (n > 12 * f.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * f.Z.Seconds.DAYS_30));
        return p.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (n > f.Z.Seconds.DAYS_30) {
        let e = Math.round(n / f.Z.Seconds.DAYS_30);
        return p.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (n > 7 * f.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * f.Z.Seconds.DAY));
        return p.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (n > f.Z.Seconds.DAY) {
        let e = Math.round(n / f.Z.Seconds.DAY);
        return p.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (n > f.Z.Seconds.HOUR) {
        let e = Math.round(n / f.Z.Seconds.HOUR);
        return p.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(n > f.Z.Seconds.MINUTE)) return p.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: n });
        let e = Math.round(n / f.Z.Seconds.MINUTE);
        return p.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function w(e) {
    let { isCurrentUserPersistent: t, isOtherUserPersistent: n, otherUserNickname: r } = e;
    if (t && n) return p.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    if (t)
        return p.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: r,
            helpArticle: A.l4
        });
    if (n) return p.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    else return p.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
}
async function b(e) {
    let t = c.default.getStaticAuthSessionId();
    return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await E.Z.getMLSSigningKey(t, e);
}
function N(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function Z(e, t, n) {
    try {
        return (
            await u.tn.post({
                url: R.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: N(t),
                    key_version: n
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (_.Z.captureException(e), e);
    }
}
async function D(e) {
    let { key: t, signature: n } = await b(e);
    try {
        await u.tn.put({
            url: R.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: N(t),
                signature: N(n),
                key_version: e
            }
        }),
            y.Z.addCurrentUserUploadedKeyVersionCached(e);
    } catch (e) {
        throw (_.Z.captureException(e), e);
    }
}
function L(e) {
    return I.Z.getUploadedKeyVersionsCached().includes(e);
}
async function F(e) {
    !L(e) && (await D(e));
}
async function v(e) {
    if (!L(e)) return await D(e), !0;
    let t = c.default.getId(),
        { key: n } = await b(e),
        r = await Z(t, n, e);
    return !r && (0, g.KA)(e), r;
}
