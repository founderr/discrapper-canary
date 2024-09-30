n.d(t, {
    fw: function () {
        return r;
    },
    qy: function () {
        return c;
    },
    sJ: function () {
        return o;
    }
});
var a,
    l,
    r,
    o,
    s = n(544891),
    i = n(981631);
async function c(e, t) {
    await s.tn.post({
        url: i.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        }
    });
}
((a = r || (r = {})).HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), (a.RECAPTCHA = 'Recaptcha'), ((l = o || (o = {}))[(l.EASY = 1)] = 'EASY'), (l[(l.MODERATE = 2)] = 'MODERATE'), (l[(l.DIFFICULT = 3)] = 'DIFFICULT'), (l[(l.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT');
