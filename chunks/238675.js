n.d(t, {
    fw: function () {
        return s;
    },
    qy: function () {
        return A;
    },
    sJ: function () {
        return o;
    }
});
var a,
    l,
    s,
    o,
    r = n(544891),
    i = n(981631);
async function A(e, t) {
    await r.tn.post({
        url: i.ANM.CAPTCHA_TEST,
        body: {
            decider: e,
            options: t
        }
    });
}
((a = s || (s = {})).HCAPTCHA_EASY = 'hCaptchaEasy'), (a.HCAPTCHA_EASY_INVISIBLE = 'hCaptchaEasyInvisible'), (a.HCAPTCHA_RQDATA = 'hCaptchaRqdata'), (a.SMITE_RQDATA = 'SmiteRqdata'), ((l = o || (o = {}))[(l.EASY = 1)] = 'EASY'), (l[(l.MODERATE = 2)] = 'MODERATE'), (l[(l.DIFFICULT = 3)] = 'DIFFICULT'), (l[(l.VERY_DIFFICULT = 4)] = 'VERY_DIFFICULT');
