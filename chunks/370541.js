r.d(t, {
    $p: function () {
        return E;
    },
    pT: function () {
        return o;
    }
});
var a = r(285883),
    n = r(394798);
let _ = RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function o(e, t) {
    let r = (function (e) {
            let t;
            if (!e) return;
            let r = e.match(_);
            if (!!r)
                return (
                    '1' === r[3] ? (t = !0) : '0' === r[3] && (t = !1),
                    {
                        traceId: r[1],
                        parentSampled: t,
                        parentSpanId: r[2]
                    }
                );
        })(e),
        o = (0, a.EN)(t),
        { traceId: E, parentSpanId: i, parentSampled: c } = r || {};
    return r
        ? {
              traceId: E || (0, n.DM)(),
              parentSpanId: i || (0, n.DM)().substring(16),
              spanId: (0, n.DM)().substring(16),
              sampled: c,
              dsc: o || {}
          }
        : {
              traceId: E || (0, n.DM)(),
              spanId: (0, n.DM)().substring(16)
          };
}
function E(e = (0, n.DM)(), t = (0, n.DM)().substring(16), r) {
    let a = '';
    return void 0 !== r && (a = r ? '-1' : '-0'), `${e}-${t}${a}`;
}
