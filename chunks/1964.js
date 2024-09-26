var s = n(392711),
    a = n.n(s),
    r = n(981631),
    i = n(689938);
let { CAPTCHA: o, EMAIL: l, PHONE: c, REVERIFY_EMAIL: d, REVERIFY_PHONE: _ } = r.PUi,
    u = {
        [r.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
        [r.c2C.REQUIRE_VERIFIED_PHONE]: [c],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL]: [d],
        [r.c2C.REQUIRE_REVERIFIED_PHONE]: [_],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, d],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, _],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, _],
        [r.c2C.REQUIRE_CAPTCHA]: [o],
        [r.c2C.AGREEMENTS]: []
    };
t.Z = {
    isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: (e) => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
    getButtonTitle(e) {
        switch (e) {
            case r.PUi.EMAIL:
                return i.Z.Messages.VERIFY_BY_EMAIL;
            case r.PUi.PHONE:
                return i.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case r.PUi.REVERIFY_EMAIL:
                return i.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case r.PUi.REVERIFY_PHONE:
                return i.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
                return i.Z.Messages.START_VERIFICATION_BUTTON;
        }
    },
    areVerificationTypesEqual: (e, t) => a().isEqual(e, t)
};
