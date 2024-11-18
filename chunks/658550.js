n.d(t, {
    Gz: function () {
        return o;
    },
    P0: function () {
        return d;
    },
    gH: function () {
        return s;
    },
    tL: function () {
        return r;
    },
    th: function () {
        return i;
    }
}),
    n(411104);
var l = n(544891);
let i = 8,
    r = 11,
    s = 6,
    o = 6;
async function a(e) {
    let { ticket: t, mfaType: n, data: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
    try {
        return (
            await l.tn.post({
                url: '/mfa/finish',
                body: {
                    ticket: t,
                    mfa_type: n,
                    data: i
                },
                retries: r,
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        var s;
        if (null === (s = e.body) || void 0 === s ? void 0 : s.message) throw Error(e.body.message);
        throw e;
    }
}
async function d(e, t) {
    let { token: n } = await a(e);
    return new Promise((e, l) => {
        t({ 'X-Discord-MFA-Authorization': n }, (t) => {
            var n, i;
            return (null === (n = t.body) || void 0 === n ? void 0 : n.code) === 60008 || (null === (i = t.body) || void 0 === i ? void 0 : i.code) === 60003 ? (l(Error(t.body.message)), !0) : (e(), !1);
        });
    });
}
