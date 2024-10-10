r.d(t, {
    Z: function () {
        return o;
    },
    w: function () {
        return i;
    }
});
var n = r(622916),
    a = r(255768),
    _ = r(696486);
function o(e) {
    if (!a.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >', parent_span_id: o } = (0, _.XU)(e),
        { spanId: i } = e.spanContext(),
        E = (0, _.Tt)(e),
        c = (0, _.Gx)(e),
        s = c === e,
        I = `[Tracing] Starting ${E ? 'sampled' : 'unsampled'} ${s ? 'root ' : ''}span`,
        u = [`op: ${r}`, `name: ${t}`, `ID: ${i}`];
    if ((o && u.push(`parent ID: ${o}`), !s)) {
        let { op: e, description: t } = (0, _.XU)(c);
        u.push(`root ID: ${c.spanContext().spanId}`), e && u.push(`root op: ${e}`), t && u.push(`root description: ${t}`);
    }
    n.kg.log(`${I}
  ${u.join('\n  ')}`);
}
function i(e) {
    if (!a.X) return;
    let { description: t = '< unknown name >', op: r = '< unknown op >' } = (0, _.XU)(e),
        { spanId: o } = e.spanContext(),
        i = (0, _.Gx)(e) === e,
        E = `[Tracing] Finishing "${r}" ${i ? 'root ' : ''}span "${t}" with ID ${o}`;
    n.kg.log(E);
}
