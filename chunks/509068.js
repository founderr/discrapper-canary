r.d(t, {
    Eg: function () {
        return M;
    },
    Jd: function () {
        return U;
    },
    S1: function () {
        return C;
    },
    jp: function () {
        return g;
    },
    lA: function () {
        return P;
    },
    nV: function () {
        return h;
    }
});
var n = r(636361),
    a = r(502990),
    _ = r(907765),
    o = r(151122),
    i = r(511906),
    E = r(263449),
    c = r(233517),
    s = r(510529),
    I = r(622916),
    u = r(694043),
    l = r(688838),
    R = r(393523),
    A = r(833772),
    T = r(454463),
    N = r(163162),
    d = r(408720),
    O = r(515737),
    p = r(804410),
    f = r(376457),
    L = r(42367),
    S = r(297117),
    D = r(387486);
function h(e) {
    return [(0, n.S)(), (0, a.C)(), (0, O.t)(), (0, d.f)(), (0, p.k)(), (0, L.O)(), (0, _.R)(), (0, f.s)()];
}
function C(e = {}) {
    let t = (function (e = {}) {
        return {
            defaultIntegrations: h(),
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
                n = r && r.runtime && r.runtime.id,
                a = (N.m9.location && N.m9.location.href) || '',
                _ = !!n && N.m9 === N.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((e) => a.startsWith(`${e}//`)),
                o = void 0 !== e.nw;
            return !!n && !_ && !o;
        })()
    ) {
        (0, I.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
        return;
    }
    T.X && !(0, u.Ak)() && I.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let r = {
            ...t,
            stackParser: (0, l.Sq)(t.stackParser || S.Dt),
            integrations: (0, o.m8)(t),
            transport: t.transport || D.f
        },
        n = (0, i.M)(A.R, r);
    return (
        t.autoSessionTracking &&
            (function () {
                if (void 0 === N.m9.document) {
                    T.X && I.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, R.a)(({ from: e, to: t }) => {
                        void 0 !== e && e !== t && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        n
    );
}
function g(e = {}) {
    if (!N.m9.document) {
        T.X && I.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let t = (0, E.nZ)(),
        r = t.getClient(),
        n = r && r.getDsn();
    if (!n) {
        T.X && I.kg.error('DSN not configured for showReportDialog call');
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
    let a = N.m9.document.createElement('script');
    (a.async = !0), (a.crossOrigin = 'anonymous'), (a.src = (0, s.h)(n, e)), e.onLoad && (a.onload = e.onLoad);
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
    o ? o.appendChild(a) : T.X && I.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function M() {}
function P(e) {
    e();
}
function U(e) {
    let t = (0, E.s3)();
    t && t.captureUserFeedback(e);
}
