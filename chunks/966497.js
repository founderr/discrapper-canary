r.d(t, {
    Z: function () {
        return o;
    },
    w: function () {
        return E;
    }
});
var a = r(622916),
    n = r(255768),
    _ = r(696486);
function o(e) {
    if (!n.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >', parent_span_id: o } = (0, _.XU)(e),
        { spanId: E } = e.spanContext(),
        i = (0, _.Tt)(e),
        c = (0, _.Gx)(e),
        s = c === e,
        l = `[Tracing] Starting ${i ? 'sampled' : 'unsampled'} ${s ? 'root ' : ''}span`,
        I = [`op: ${r}`, `name: ${t}`, `ID: ${E}`];
    if ((o && I.push(`parent ID: ${o}`), !s)) {
        let { op: e, description: t } = (0, _.XU)(c);
        I.push(`root ID: ${c.spanContext().spanId}`), e && I.push(`root op: ${e}`), t && I.push(`root description: ${t}`);
    }
    a.kg.log(`${l}
  ${I.join('\n  ')}`);
}
function E(e) {
    if (!n.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >' } = (0, _.XU)(e),
        { spanId: o } = e.spanContext(),
        E = (0, _.Gx)(e) === e,
        i = `[Tracing] Finishing "${r}" ${E ? 'root ' : ''}span "${t}" with ID ${o}`;
    a.kg.log(i);
}
