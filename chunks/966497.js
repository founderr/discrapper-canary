r.d(t, {
    Z: function () {
        return o;
    },
    w: function () {
        return E;
    }
});
var n = r(622916),
    a = r(255768),
    _ = r(696486);
function o(e) {
    if (!a.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >', parent_span_id: o } = (0, _.XU)(e),
        { spanId: E } = e.spanContext(),
        i = (0, _.Tt)(e),
        c = (0, _.Gx)(e),
        s = c === e,
        l = `[Tracing] Starting ${i ? 'sampled' : 'unsampled'} ${s ? 'root ' : ''}span`,
        u = [`op: ${r}`, `name: ${t}`, `ID: ${E}`];
    if ((o && u.push(`parent ID: ${o}`), !s)) {
        let { op: e, description: t } = (0, _.XU)(c);
        u.push(`root ID: ${c.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`);
    }
    n.kg.log(`${l}
  ${u.join('\n  ')}`);
}
function E(e) {
    if (!a.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >' } = (0, _.XU)(e),
        { spanId: o } = e.spanContext(),
        E = (0, _.Gx)(e) === e,
        i = `[Tracing] Finishing "${r}" ${E ? 'root ' : ''}span "${t}" with ID ${o}`;
    n.kg.log(i);
}
