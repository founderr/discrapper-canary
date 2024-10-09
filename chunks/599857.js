n.d(t, {
    _: function () {
        return c;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(14199),
    r = n(780384),
    l = n(756148),
    o = n(981631);
function c(e) {
    return (
        a.useEffect(() => {
            var t, n, i;
            l.Z.init(e.sitekey),
                null === (i = window) ||
                    void 0 === i ||
                    null === (n = i.grecaptcha) ||
                    void 0 === n ||
                    null === (t = n.enterprise) ||
                    void 0 === t ||
                    t.ready(async () => {
                        var t;
                        let n = await (null === (t = window) || void 0 === t ? void 0 : t.grecaptcha).enterprise.execute(e.sitekey, null != e.action ? { action: e.action } : void 0);
                        e.onVerify(n);
                    });
        }, [e]),
        (0, i.jsx)(i.Fragment, {})
    );
}
let d = (e) => {
    let { theme: t, ...n } = e,
        a = (0, r.wj)(t) ? 'dark' : 'light';
    return (0, i.jsx)(s.Z, {
        sitekey: o.OL7,
        ...n,
        theme: a
    });
};
(d.Themes = {
    LIGHT: 'light',
    DARK: 'dark'
}),
    (d.Sizes = {
        COMPACT: 'compact',
        NORMAL: 'normal',
        INVISIBLE: 'invisible'
    }),
    (t.Z = d);
