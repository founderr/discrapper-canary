n(47120);
var r = n(735250),
    a = n(470079),
    i = n(745625),
    o = n(14199),
    c = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    h = n(626135),
    l = n(981631);
t.Z = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: u, onRender: f, onVerify: v, onError: m, onOpen: y, onClose: C, onChalExpired: E, size: R, ..._ } = e,
        b = a.useRef(null),
        x = (0, c.Z)(),
        [g, w] = a.useState(!1),
        k = a.useCallback(
            (e) => {
                h.default.track(l.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: x
                });
            },
            [x, t, n]
        ),
        A = a.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        I = a.useCallback(() => {
            var e, t;
            null != u && '' !== u && null != b.current && (null === (e = b.current) || void 0 === e || e.setData({ rqdata: u })), 'invisible' === R && (null === (t = b.current) || void 0 === t || t.execute());
        }, [u, b, R]),
        S = a.useCallback(() => {
            !g && (k('initial-load'), A('initial-load'), w(!0)), I();
        }, [A, g, k, I]);
    a.useEffect(() => {
        I();
    }, [I]),
        a.useEffect(() => {
            S();
        }, [S]);
    let j = a.useCallback(() => {
            k('error'), A('error'), I(), null == m || m();
        }, [k, A, I, m]),
        O = a.useCallback(
            (e) => {
                k('verify'), A('verify'), v(e);
            },
            [A, v, k]
        ),
        P = a.useCallback(() => {
            k('render'), null == f || f();
        }, [f, k]),
        N = a.useCallback(() => {
            k('open'), A('open'), null == y || y();
        }, [A, y, k]),
        T = a.useCallback(() => {
            k('close'), null == C || C();
        }, [C, k]),
        Z = a.useCallback(() => {
            k('chal-expire'), null == E || E();
        }, [E, k]);
    return ((null == n || '' === n) && (n = l.OL7), t === p.hP.RECAPTCHA)
        ? (0, r.jsx)(o.Z, {
              ..._,
              onLoad: S,
              onRender: P,
              onVerify: O,
              onError: j,
              sitekey: n
          })
        : t === p.hP.HCAPTCHA
          ? (0, r.jsx)(i.Z, {
                ref: b,
                ..._,
                sitekey: n,
                onLoad: S,
                onError: j,
                onVerify: O,
                onChalExpired: Z,
                onOpen: N,
                onClose: T,
                size: R
            })
          : (0, r.jsx)(o.Z, {
                ..._,
                sitekey: n,
                onLoad: S,
                onRender: P,
                onVerify: O,
                onError: j
            });
};
