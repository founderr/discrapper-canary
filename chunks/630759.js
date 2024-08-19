t.d(s, {
    J6: function () {
        return L;
    },
    LO: function () {
        return p;
    },
    TQ: function () {
        return h;
    },
    ZU: function () {
        return R;
    },
    Zn: function () {
        return x;
    },
    bo: function () {
        return M;
    },
    kK: function () {
        return f;
    },
    om: function () {
        return v;
    },
    uX: function () {
        return j;
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
    t(873817);
var n = t(250683),
    a = t(512722),
    i = t.n(a),
    r = t(913527),
    o = t.n(r),
    l = t(544891),
    c = t(253135),
    d = t(314897),
    _ = t(131951),
    E = t(594174),
    u = t(70956),
    I = t(960048),
    T = t(51144),
    S = t(718629),
    N = t(615830),
    C = t(352954),
    m = t(571826),
    A = t(760373),
    O = t(981631),
    g = t(689938);
function h(e, s, t, n, a) {
    t ? S.Z.createVerifiedKey(e, s) : S.Z.createSecureFramesTransientKey(e, s),
        (0, m.M1)({
            channelId: n,
            userId: e,
            analyticsLocation: a
        });
}
function p(e, s, t) {
    if (t) {
        let t = (0, c.MK)(new Uint8Array(s));
        S.Z.deleteVerifiedKey(e, t);
    } else S.Z.deleteSecureFramesTransientKey(e);
}
function R(e, s) {
    C.Z.openSecureFramesUpdateConfirmation({
        title: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
        subtitle: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            S.Z.deleteVerifiedKey(e, s), (0, m.Pn)();
        }
    });
}
function x(e) {
    let s = E.default.getUser(e),
        t = T.ZP.getName(s);
    C.Z.openSecureFramesUpdateConfirmation({
        title: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({ username: t }),
        subtitle: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
        onConfirm: () => {
            S.Z.deleteAllUserVerifiedKeys(e), (0, m.DF)();
        }
    });
}
function M(e) {
    let s = o()(e),
        t = o()().diff(s, 's');
    if (t > 12 * u.Z.Seconds.DAYS_30) {
        let e = Math.round(t / (12 * u.Z.Seconds.DAYS_30));
        return g.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
    }
    if (t > u.Z.Seconds.DAYS_30) {
        let e = Math.round(t / u.Z.Seconds.DAYS_30);
        return g.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({ count: e });
    }
    if (t > 7 * u.Z.Seconds.DAY) {
        let e = Math.round(t / (7 * u.Z.Seconds.DAY));
        return g.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
    } else if (t > u.Z.Seconds.DAY) {
        let e = Math.round(t / u.Z.Seconds.DAY);
        return g.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
    } else if (t > u.Z.Seconds.HOUR) {
        let e = Math.round(t / u.Z.Seconds.HOUR);
        return g.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
    } else {
        if (!(t > u.Z.Seconds.MINUTE)) return g.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({ count: t });
        let e = Math.round(t / u.Z.Seconds.MINUTE);
        return g.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({ count: e });
    }
}
function f(e) {
    let { isCurrentUserPersistent: s, isOtherUserPersistent: t, otherUserNickname: n } = e;
    if (s && t) return g.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    if (s)
        return g.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format({
            username: n,
            helpArticle: A.l4
        });
    if (t) return g.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
    else return g.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({ helpArticle: A.l4 });
}
async function D(e) {
    let s = d.default.getStaticAuthSessionId();
    return i()(null != s, '[getCurrentUserPublicKey] session id should not be null'), await _.Z.getMLSSigningKey(s, e);
}
function P(e) {
    let s = n.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(s);
}
async function L(e, s, t) {
    try {
        return (
            await l.tn.post({
                url: O.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: P(s),
                    key_version: t
                }
            })
        ).body.is_match;
    } catch (e) {
        throw (I.Z.captureException(e), e);
    }
}
async function b(e) {
    let { key: s, signature: t } = await D(e);
    try {
        await l.tn.put({
            url: O.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: P(s),
                signature: P(t),
                key_version: e
            }
        }),
            S.Z.addCurrentUserUploadedKeyVersionCached(e);
    } catch (e) {
        throw (I.Z.captureException(e), e);
    }
}
function Z(e) {
    return N.Z.getUploadedKeyVersionsCached().includes(e);
}
async function v(e) {
    !Z(e) && (await b(e));
}
async function j(e) {
    if (!Z(e)) return await b(e), !0;
    let s = d.default.getId(),
        { key: t } = await D(e),
        n = await L(s, t, e);
    return !n && (0, m.KA)(e), n;
}
