var r, i, a, o, s, l, u;
n.d(t, {
    OY: function () {
        return u;
    },
    Sn: function () {
        return l;
    },
    hQ: function () {
        return a;
    },
    lK: function () {
        return r;
    },
    wO: function () {
        return i;
    }
}),
    !(function (e) {
        e.MESSAGE = 'message';
    })(r || (r = {})),
    !(function (e) {
        (e[(e.OWNER = 1)] = 'OWNER'), (e[(e.MEMBER = 2)] = 'MEMBER');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.REVIEW_PENDING = 1)] = 'REVIEW_PENDING'), (e[(e.CLASSIFICATION_UPHELD = 2)] = 'CLASSIFICATION_UPHELD'), (e[(e.CLASSIFICATION_INVALIDATED = 3)] = 'CLASSIFICATION_INVALIDATED');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.UNKNOWN = 1)] = 'UNKNOWN'), (e[(e.UNSOLICITED_PORNOGRAPHY = 100)] = 'UNSOLICITED_PORNOGRAPHY'), (e[(e.NONCONSENSUAL_PORNOGRAPHY = 200)] = 'NONCONSENSUAL_PORNOGRAPHY'), (e[(e.GLORIFYING_VIOLENCE = 210)] = 'GLORIFYING_VIOLENCE'), (e[(e.HATE_SPEECH = 220)] = 'HATE_SPEECH'), (e[(e.CRACKED_ACCOUNTS = 230)] = 'CRACKED_ACCOUNTS'), (e[(e.ILLICIT_GOODS = 240)] = 'ILLICIT_GOODS'), (e[(e.SOCIAL_ENGINEERING = 250)] = 'SOCIAL_ENGINEERING'), (e[(e.TEST_CLASSIFICATION = 9000)] = 'TEST_CLASSIFICATION'), (e[(e.TEST_CLASSIFICATION_LOW = 9001)] = 'TEST_CLASSIFICATION_LOW'), (e[(e.TEST_CLASSIFICATION_SEVERE = 9002)] = 'TEST_CLASSIFICATION_SEVERE');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.BAN = 0)] = 'BAN'), (e[(e.TEMP_BAN = 1)] = 'TEMP_BAN'), (e[(e.GLOBAL_QUARANTINE = 2)] = 'GLOBAL_QUARANTINE'), (e[(e.REQUIRE_VERIFICATION = 3)] = 'REQUIRE_VERIFICATION'), (e[(e.USER_WARNING = 4)] = 'USER_WARNING'), (e[(e.USER_SPAMMER = 5)] = 'USER_SPAMMER'), (e[(e.CHANNEL_SPAM = 6)] = 'CHANNEL_SPAM'), (e[(e.MESSAGE_SPAM = 7)] = 'MESSAGE_SPAM'), (e[(e.DISABLE_SUSPICIOUS_ACTIVITY = 8)] = 'DISABLE_SUSPICIOUS_ACTIVITY'), (e[(e.LIMITED_ACCESS = 9)] = 'LIMITED_ACCESS'), (e[(e.CHANNEL_SCHEDULE_DELETE = 10)] = 'CHANNEL_SCHEDULE_DELETE'), (e[(e.MESSAGE_CONTENT_REMOVAL = 11)] = 'MESSAGE_CONTENT_REMOVAL'), (e[(e.GUILD_DISABLE_INVITE = 12)] = 'GUILD_DISABLE_INVITE'), (e[(e.USER_CONTENT_REMOVAL = 13)] = 'USER_CONTENT_REMOVAL'), (e[(e.USER_USERNAME_MANGLE = 14)] = 'USER_USERNAME_MANGLE'), (e[(e.GUILD_LIMITED_ACCESS = 15)] = 'GUILD_LIMITED_ACCESS'), (e[(e.USER_MESSAGE_REMOVAL = 16)] = 'USER_MESSAGE_REMOVAL'), (e[(e.GUILD_DELETE = 20)] = 'GUILD_DELETE');
    })(s || (s = {})),
    !(function (e) {
        (e[(e.ALL_GOOD = 100)] = 'ALL_GOOD'), (e[(e.LIMITED = 200)] = 'LIMITED'), (e[(e.VERY_LIMITED = 300)] = 'VERY_LIMITED'), (e[(e.AT_RISK = 400)] = 'AT_RISK'), (e[(e.SUSPENDED = 500)] = 'SUSPENDED');
    })(l || (l = {})),
    !(function (e) {
        (e[(e.PENDING = 0)] = 'PENDING'), (e[(e.SUCCESS = 1)] = 'SUCCESS'), (e[(e.FAILED = 2)] = 'FAILED');
    })(u || (u = {}));
