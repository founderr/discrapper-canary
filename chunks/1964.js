var _ = n(392711),
    t = n.n(_),
    I = n(981631),
    R = n(689938);
let { CAPTCHA: i, EMAIL: o, PHONE: r, REVERIFY_EMAIL: c, REVERIFY_PHONE: a } = I.PUi,
    u = {
        [I.c2C.REQUIRE_VERIFIED_EMAIL]: [o],
        [I.c2C.REQUIRE_VERIFIED_PHONE]: [r],
        [I.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [I.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
        [I.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, r],
        [I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, c],
        [I.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, a],
        [I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
        [I.c2C.REQUIRE_CAPTCHA]: [i],
        [I.c2C.AGREEMENTS]: []
    };
E.Z = {
    isPhoneReverification: (e, E) => void 0 !== e && e.isPhoneVerified() && (E === I.c2C.REQUIRE_REVERIFIED_PHONE || E === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || E === I.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: (e) => e === I.c2C.REQUIRE_REVERIFIED_EMAIL || e === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
    getButtonTitle(e) {
        switch (e) {
            case I.PUi.EMAIL:
                return R.Z.Messages.VERIFY_BY_EMAIL;
            case I.PUi.PHONE:
                return R.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case I.PUi.REVERIFY_EMAIL:
                return R.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case I.PUi.REVERIFY_PHONE:
                return R.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
                return R.Z.Messages.START_VERIFICATION_BUTTON;
        }
    },
    areVerificationTypesEqual: (e, E) => t().isEqual(e, E)
};
