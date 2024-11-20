var t = n(392711),
    i = n.n(t),
    o = n(981631),
    r = n(388032);
let { CAPTCHA: _, EMAIL: R, PHONE: I, REVERIFY_EMAIL: c, REVERIFY_PHONE: a } = o.PUi,
    u = {
        [o.c2C.REQUIRE_VERIFIED_EMAIL]: [R],
        [o.c2C.REQUIRE_VERIFIED_PHONE]: [I],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [o.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
        [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [R, I],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [I, c],
        [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [R, a],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
        [o.c2C.REQUIRE_CAPTCHA]: [_],
        [o.c2C.AGREEMENTS]: []
    };
E.Z = {
    isPhoneReverification: (e, E) => void 0 !== e && e.isPhoneVerified() && (E === o.c2C.REQUIRE_REVERIFIED_PHONE || E === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || E === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: (e) => e === o.c2C.REQUIRE_REVERIFIED_EMAIL || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
    getButtonTitle(e) {
        switch (e) {
            case o.PUi.EMAIL:
                return r.intl.string(r.t['1MPz29']);
            case o.PUi.PHONE:
                return r.intl.string(r.t.mjJecn);
            case o.PUi.REVERIFY_EMAIL:
                return r.intl.string(r.t.nmdPFR);
            case o.PUi.REVERIFY_PHONE:
                return r.intl.string(r.t.of2129);
            default:
                return r.intl.string(r.t['oF6+W1']);
        }
    },
    areVerificationTypesEqual: (e, E) => i().isEqual(e, E)
};
