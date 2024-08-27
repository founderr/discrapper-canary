n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(470079),
    a = n(626135),
    i = n(353250),
    c = n(981631);
function o(e) {
    let t = r.useRef(!0);
    return (
        r.useEffect(
            () => () => {
                t.current && (null == e || e(i.CaptchaError.CANCEL));
            },
            []
        ),
        r.useEffect(
            () => (
                a.default.track(c.rMx.OPEN_MODAL, { type: 'Guild Join Captcha' }),
                () => {
                    t.current && a.default.track(c.rMx.MODAL_DISMISSED, { type: 'Guild Join Captcha' });
                }
            ),
            [t]
        ),
        () => {
            t.current = !1;
        }
    );
}
