r.d(t, {
    Eg: function () {
        return g;
    },
    Jd: function () {
        return M;
    },
    S1: function () {
        return C;
    },
    jp: function () {
        return P;
    },
    lA: function () {
        return U;
    },
    nV: function () {
        return S;
    }
});
var a = r(636361),
    n = r(502990),
    _ = r(907765),
    o = r(151122),
    E = r(511906),
    i = r(263449),
    c = r(233517),
    s = r(510529),
    l = r(622916),
    I = r(694043),
    u = r(688838),
    R = r(393523),
    A = r(833772),
    T = r(454463),
    N = r(163162),
    d = r(408720),
    f = r(515737),
    O = r(804410),
    L = r(376457),
    p = r(42367),
    h = r(297117),
    D = r(387486);
function S(e) {
    return [(0, a.S)(), (0, n.C)(), (0, f.t)(), (0, d.f)(), (0, O.k)(), (0, p.O)(), (0, _.R)(), (0, L.s)()];
}
function C(e = {}) {
    let t = (function (e = {}) {
        return {
            defaultIntegrations: S(),
            release: 'string' == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : N.m9.SENTRY_RELEASE && N.m9.SENTRY_RELEASE.id ? N.m9.SENTRY_RELEASE.id : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0,
            ...e
        };
    })(e);
    if (
        (function () {
            let e = N.m9,
                t = e.chrome ? 'chrome' : 'browser',
                r = e[t],
                a = r && r.runtime && r.runtime.id,
                n = (N.m9.location && N.m9.location.href) || '',
                _ = !!a && N.m9 === N.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((e) => n.startsWith(`${e}//`)),
                o = void 0 !== e.nw;
            return !!a && !_ && !o;
        })()
    ) {
        (0, l.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
        return;
    }
    T.X && !(0, I.Ak)() && l.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let r = {
            ...t,
            stackParser: (0, u.Sq)(t.stackParser || h.Dt),
            integrations: (0, o.m8)(t),
            transport: t.transport || D.f
        },
        a = (0, E.M)(A.R, r);
    return (
        t.autoSessionTracking &&
            (function () {
                if (void 0 === N.m9.document) {
                    T.X && l.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, R.a)(({ from: e, to: t }) => {
                        void 0 !== e && e !== t && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        a
    );
}
function P(e = {}) {
    if (!N.m9.document) {
        T.X && l.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let t = (0, i.nZ)(),
        r = t.getClient(),
        a = r && r.getDsn();
    if (!a) {
        T.X && l.kg.error('DSN not configured for showReportDialog call');
        return;
    }
    if (
        (t &&
            (e.user = {
                ...t.getUser(),
                ...e.user
            }),
        !e.eventId)
    ) {
        let t = (0, c.eW)();
        t && (e.eventId = t);
    }
    let n = N.m9.document.createElement('script');
    (n.async = !0), (n.crossOrigin = 'anonymous'), (n.src = (0, s.h)(a, e)), e.onLoad && (n.onload = e.onLoad);
    let { onClose: _ } = e;
    if (_) {
        let e = (t) => {
            if ('__sentry_reportdialog_closed__' === t.data)
                try {
                    _();
                } finally {
                    N.m9.removeEventListener('message', e);
                }
        };
        N.m9.addEventListener('message', e);
    }
    let o = N.m9.document.head || N.m9.document.body;
    o ? o.appendChild(n) : T.X && l.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function g() {}
function U(e) {
    e();
}
function M(e) {
    let t = (0, i.s3)();
    t && t.captureUserFeedback(e);
}
