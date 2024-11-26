r.d(t, {
    R: function () {
        return i;
    }
});
var a = r(263449),
    n = r(452896),
    _ = r(163162);
let o = {
        replayIntegration: 'replay',
        replayCanvasIntegration: 'replay-canvas',
        feedbackIntegration: 'feedback',
        feedbackModalIntegration: 'feedback-modal',
        feedbackScreenshotIntegration: 'feedback-screenshot',
        captureConsoleIntegration: 'captureconsole',
        contextLinesIntegration: 'contextlines',
        linkedErrorsIntegration: 'linkederrors',
        debugIntegration: 'debug',
        dedupeIntegration: 'dedupe',
        extraErrorDataIntegration: 'extraerrordata',
        httpClientIntegration: 'httpclient',
        reportingObserverIntegration: 'reportingobserver',
        rewriteFramesIntegration: 'rewriteframes',
        sessionTimingIntegration: 'sessiontiming',
        browserProfilingIntegration: 'browserprofiling'
    },
    E = _.m9;
async function i(e) {
    let t = o[e],
        r = (E.Sentry = E.Sentry || {});
    if (!t) throw Error(`Cannot lazy load integration: ${e}`);
    let i = r[e];
    if ('function' == typeof i) return i;
    let c = (function (e) {
            let t = (0, a.s3)(),
                r = t && t.getOptions(),
                _ = (r && r.cdnBaseUrl) || 'https://browser.sentry-cdn.com';
            return new URL(`/${n.J}/${e}.min.js`, _).toString();
        })(t),
        s = _.m9.document.createElement('script');
    (s.src = c), (s.crossOrigin = 'anonymous'), (s.referrerPolicy = 'origin');
    let l = new Promise((e, t) => {
        s.addEventListener('load', () => e()), s.addEventListener('error', t);
    });
    _.m9.document.body.appendChild(s);
    try {
        await l;
    } catch (t) {
        throw Error(`Error when loading integration: ${e}`);
    }
    let I = r[e];
    if ('function' != typeof I) throw Error(`Could not load integration: ${e}`);
    return I;
}
