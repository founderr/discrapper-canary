r.d(t, {
    Eg: function () {
        return P;
    },
    Jd: function () {
        return M;
    },
    S1: function () {
        return C;
    },
    jp: function () {
        return g;
    },
    lA: function () {
        return U;
    },
    nV: function () {
        return D;
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
    l = r(622916),
    u = r(694043),
    I = r(688838),
    R = r(393523),
    N = r(833772),
    A = r(454463),
    T = r(163162),
    d = r(408720),
    f = r(515737),
    L = r(804410),
    O = r(376457),
    p = r(42367),
    h = r(297117),
    S = r(387486);
function D(e) {
    return [(0, n.S)(), (0, a.C)(), (0, f.t)(), (0, d.f)(), (0, L.k)(), (0, p.O)(), (0, _.R)(), (0, O.s)()];
}
function C(e = {}) {
    let t = (function (e = {}) {
        return {
            defaultIntegrations: D(),
            release: 'string' == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : T.m9.SENTRY_RELEASE && T.m9.SENTRY_RELEASE.id ? T.m9.SENTRY_RELEASE.id : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0,
            ...e
        };
    })(e);
    if (
        (function () {
            let e = T.m9,
                t = e.chrome ? 'chrome' : 'browser',
                r = e[t],
                n = r && r.runtime && r.runtime.id,
                a = (T.m9.location && T.m9.location.href) || '',
                _ = !!n && T.m9 === T.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((e) => a.startsWith(`${e}//`)),
                o = void 0 !== e.nw;
            return !!n && !_ && !o;
        })()
    ) {
        (0, l.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
        return;
    }
    A.X && !(0, u.Ak)() && l.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let r = {
            ...t,
            stackParser: (0, I.Sq)(t.stackParser || h.Dt),
            integrations: (0, o.m8)(t),
            transport: t.transport || S.f
        },
        n = (0, i.M)(N.R, r);
    return (
        t.autoSessionTracking &&
            (function () {
                if (void 0 === T.m9.document) {
                    A.X && l.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
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
    if (!T.m9.document) {
        A.X && l.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let t = (0, E.nZ)(),
        r = t.getClient(),
        n = r && r.getDsn();
    if (!n) {
        A.X && l.kg.error('DSN not configured for showReportDialog call');
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
    let a = T.m9.document.createElement('script');
    (a.async = !0), (a.crossOrigin = 'anonymous'), (a.src = (0, s.h)(n, e)), e.onLoad && (a.onload = e.onLoad);
    let { onClose: _ } = e;
    if (_) {
        let e = (t) => {
            if ('__sentry_reportdialog_closed__' === t.data)
                try {
                    _();
                } finally {
                    T.m9.removeEventListener('message', e);
                }
        };
        T.m9.addEventListener('message', e);
    }
    let o = T.m9.document.head || T.m9.document.body;
    o ? o.appendChild(a) : A.X && l.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function P() {}
function U(e) {
    e();
}
function M(e) {
    let t = (0, E.s3)();
    t && t.captureUserFeedback(e);
}
