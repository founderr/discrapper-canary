r.d(t, {
    R: function () {
        return E;
    }
});
var a = r(622916),
    n = r(255768),
    _ = r(73453),
    o = r(820754);
function E(e, t) {
    let r;
    if (!(0, _.z)(e)) return [!1];
    r = 'function' == typeof e.tracesSampler ? e.tracesSampler(t) : void 0 !== t.parentSampled ? t.parentSampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1;
    let E = (0, o.o)(r);
    return void 0 === E ? (n.X && a.kg.warn('[Tracing] Discarding transaction because of invalid sample rate.'), [!1]) : E ? (Math.random() < E ? [!0, E] : (n.X && a.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [!1, E])) : (n.X && a.kg.log(`[Tracing] Discarding transaction because ${'function' == typeof e.tracesSampler ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`), [!1, E]);
}
