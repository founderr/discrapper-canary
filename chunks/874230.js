n.d(e, {
  $p: function() {
    return l
  },
  KA: function() {
    return o
  },
  qG: function() {
    return s
  }
});
var r = n(545459),
  i = n(862315);
let a = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function s(t) {
  let e;
  if (!t) return;
  let n = t.match(a);
  if (!!n) return "1" === n[3] ? e = !0 : "0" === n[3] && (e = !1), {
    traceId: n[1],
    parentSampled: e,
    parentSpanId: n[2]
  }
}

function o(t, e) {
  let n = s(t),
    a = (0, r.EN)(e),
    {
      traceId: o,
      parentSpanId: l,
      parentSampled: u
    } = n || {},
    c = {
      traceId: o || (0, i.DM)(),
      spanId: (0, i.DM)().substring(16),
      sampled: void 0 !== u && u
    };
  return l && (c.parentSpanId = l), a && (c.dsc = a), {
    traceparentData: n,
    dynamicSamplingContext: a,
    propagationContext: c
  }
}

function l(t = (0, i.DM)(), e = (0, i.DM)().substring(16), n) {
  let r = "";
  return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
}