var r = n(610138);
var i = n(216116);
var a = n(78328);
var o = n(815648);
var s = n(47120);
var l = n(724458);
var u = n(653041);
var c = n(315314);
var d = n(203651);
var _ = n(544891),
    E = n(569611),
    f = n(547010),
    h = n(580189),
    p = n(397550),
    m = n(931619);
n(358085);
var I = n(960048),
    T = n(591759),
    g = n(303850),
    S = n(981631);
let A = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'],
    v = new g.R();
function N(e) {
    let t = new URLSearchParams();
    t.append('query', '@http.x_client_trace_id:"'.concat(e, '"')), t.append('showAllSpans', 'true');
    let n = T.Z.toURLSafe('traces?'.concat(t.toString()), 'https://datadog.discord.tools/apm/');
    return null == n ? null : n.toString();
}
function O() {
    if (null == Intl.DateTimeFormat) return null;
    let e = Intl.DateTimeFormat();
    return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone;
}
let R = /\/api(\/v\d+)?\/science/;
function C(e) {
    let t = 10;
    return e.reduce((e, n) => (10 === t ? e.push(n) : e.push(''.concat(n, ';q=0.').concat(t)), (t = Math.max(t - 1, 1)), e), []).join(',');
}
(0, _.lg)({
    prepareRequest(e) {
        let { default: t } = n(314897),
            { default: r } = n(857192),
            { default: i } = n(706454),
            { default: a } = n(594174),
            { default: o } = n(626135),
            { isPlatformEmbedded: s } = n(358085);
        if ('/' === e.url[0]) {
            var l, u;
            (e.url = (0, _.K0)() + e.url), !('Authorization' in e.header) && !('authorization' in e.header) && e.set('Authorization', t.getToken());
            let n = o.getSuperPropertiesBase64();
            null != n && e.set('X-Super-Properties', n);
            let c = t.getFingerprint();
            if ((null != c && '' !== c && e.set('X-Fingerprint', c), s)) {
                let t = [];
                null != navigator && (t = ((l = [...navigator.languages]), l));
                let n = C(t);
                e.set('Accept-Language', n);
            }
            e.set('X-Discord-Locale', i.locale);
            let d = O();
            null != d && e.set('X-Discord-Timezone', d);
            let E = r.getDebugOptionsHeaderValue();
            if ((null != E && '' !== E && e.set('X-Debug-Options', E), r.isTracingRequests)) {
                let t = a.getCurrentUser(),
                    n = v.generate(null !== (u = null == t ? void 0 : t.id) && void 0 !== u ? u : '0');
                e.set('x-client-trace-id', n);
                try {
                    let t = new URL(e.url).pathname;
                    if (!R.test(t)) {
                        let r = N(n);
                        null !== r && console.debug('%c[tracing]%c %s %s\n%s', 'font-weight: bold', '', e.method, t, r);
                    }
                } catch (e) {
                    console.error('error while printing tracing log', e);
                }
            }
        }
        E.Hj('Network', 'Sending '.concat(e.method, ' to ').concat(e.url)),
            e.on('response', (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    r = null == n ? '' : 'and body: '.concat(n);
                E.Hj(
                    'Network',
                    'Completed '
                        .concat(e.method, ' to ')
                        .concat(e.url, ' with status: ')
                        .concat(null == t ? void 0 : t.status, ' ')
                        .concat(r)
                );
            }),
            e.on('error', (t, n) => {
                if (
                    (E.Hj(
                        'Network',
                        'Failed '
                            .concat(e.method, ' to ')
                            .concat(e.url, ' with status ')
                            .concat(null == t ? void 0 : t.status, ' and body: ')
                            .concat(null == n ? void 0 : n.text)
                    ),
                    null != t && 'parse' in t && t.parse)
                ) {
                    let n = '[FILTERED]';
                    if (A.includes(e.url)) {
                        var r, i;
                        n = null === (i = e.xhr) || void 0 === i ? void 0 : null === (r = i.responseText) || void 0 === r ? void 0 : r.slice(0, 1000);
                    }
                    I.Z.addBreadcrumb({
                        category: 'superagent',
                        message: 'Failed to parse HTTP response.',
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: n,
                            status: t.status
                        }
                    });
                }
            });
    },
    interceptResponse(e, t, r) {
        var i, a, o, s, l;
        return 400 === e.statusCode && (null === (i = e.body) || void 0 === i ? void 0 : i.captcha_key)
            ? (Promise.all([n.e('36514').then(n.bind(n, 475271)), n.e('31177').then(n.bind(n, 353250))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: r }] = t;
                      return n.showCaptchaAsync(r(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: r } = e,
                          i = { 'X-Captcha-Key': n };
                      null != r && (i['X-Captcha-Rqtoken'] = r), t(i);
                  })
                  .catch(r),
              !0)
            : 401 === e.statusCode && (null === (a = e.body) || void 0 === a ? void 0 : a.code) === S.evJ.MFA_REQUIRED && (null === (o = e.body) || void 0 === o ? void 0 : o.mfa)
              ? (Promise.all([n.e('52030'), n.e('78030')])
                    .then(n.bind(n, 24031))
                    .then((n) => {
                        let { openMFAModal: i } = n;
                        i(e.body.mfa, t, r);
                    })
                    .catch(r),
                !0)
              : (0, p.b)(e.statusCode, null === (s = e.body) || void 0 === s ? void 0 : s.code)
                ? (Promise.resolve()
                      .then(n.bind(n, 895886))
                      .then((e) => {
                          let { default: t } = e;
                          t();
                      }),
                  !1)
                : (0, f.b)(e.statusCode, null === (l = e.body) || void 0 === l ? void 0 : l.code)
                  ? (n
                        .e('76731')
                        .then(n.bind(n, 626892))
                        .then((t) => {
                            var n;
                            let { default: r } = t;
                            r(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id);
                        }),
                    !1)
                  : ((0, h.X)(e) &&
                        n
                            .e('89715')
                            .then(n.bind(n, 707708))
                            .then((e) => {
                                let { handleBlockedByProxy: t } = e;
                                t();
                            }),
                    !1);
    }
}),
    (0, _.Jt)(async (e) => {
        if ((E.Hj('Network', 'Request to '.concat(e, ' failed, will retry.')), !m.Z.isOnline())) await m.Z.awaitOnline(), E.Hj('Network', 'Network detected online, retrying '.concat(e));
    });
