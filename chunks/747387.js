n(47120);
var r = n(735250),
    i = n(470079),
    a = n(745625),
    c = n(14199),
    o = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    l = n(626135),
    u = n(109167),
    h = n(353250),
    f = n(599857),
    v = n(981631);
t.Z = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: m, onRender: y, onVerify: C, onError: E, onOpen: _, onClose: b, onChalExpired: R, size: x, userflow: g, ...w } = e,
        A = i.useRef(null),
        S = (0, u.H)('captcha'),
        k = (0, o.Z)(),
        [I, j] = i.useState(!1),
        O = i.useCallback(
            (e) => {
                l.default.track(v.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: k
                });
            },
            [k, t, n]
        ),
        T = i.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        L = i.useCallback(() => {
            var e, t;
            null != m && '' !== m && null != A.current && (null === (e = A.current) || void 0 === e || e.setData({ rqdata: m })), 'invisible' === x && (null === (t = A.current) || void 0 === t || t.execute());
        }, [m, A, x]),
        P = i.useCallback(() => {
            !I && (O('initial-load'), T('initial-load'), j(!0)), L();
        }, [T, I, O, L]);
    i.useEffect(() => {
        L();
    }, [L]),
        i.useEffect(() => {
            P();
        }, [P]);
    let N = i.useCallback(() => {
            O('error'), T('error'), L(), null == E || E();
        }, [O, T, L, E]),
        Z = i.useCallback(
            (e) => {
                O('verify'), T('verify'), C(e);
            },
            [T, C, O]
        ),
        V = i.useCallback(() => {
            O('render'), (0, h.emitCaptchaDistributionMetric)(S, g), null == y || y();
        }, [S, y, O, g]),
        D = i.useCallback(() => {
            O('open'), T('open'), (0, h.emitCaptchaDistributionMetric)(S, g), null == _ || _();
        }, [T, S, _, O, g]),
        M = i.useCallback(() => {
            O('close'), null == b || b(), L();
        }, [b, O, L]),
        H = i.useCallback(() => {
            O('chal-expire'), null == R || R();
        }, [R, O]);
    return ((null == n || '' === n) && (n = v.OL7), t === p.hP.RECAPTCHA)
        ? (0, r.jsx)(c.Z, {
              ...w,
              onLoad: P,
              onRender: V,
              onVerify: Z,
              onError: N,
              sitekey: n
          })
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, r.jsx)(f._, {
                ...w,
                onLoad: P,
                onRender: V,
                onVerify: Z,
                onError: N,
                sitekey: n,
                action: g
            })
          : t === p.hP.HCAPTCHA
            ? (0, r.jsx)(a.Z, {
                  ref: A,
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onError: N,
                  onVerify: Z,
                  onChalExpired: H,
                  onOpen: D,
                  onClose: M,
                  size: x
              })
            : (0, r.jsx)(c.Z, {
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onRender: V,
                  onVerify: Z,
                  onError: N
              });
};
