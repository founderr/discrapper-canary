n.d(e, {
  BO: function() {
    return o
  },
  Cd: function() {
    return g
  },
  HY: function() {
    return m
  },
  Jd: function() {
    return s
  },
  R: function() {
    return u
  },
  V$: function() {
    return d
  },
  f4: function() {
    return h
  },
  gv: function() {
    return l
  },
  mL: function() {
    return p
  },
  zQ: function() {
    return _
  }
});
var r = n(177668),
  i = n(10674),
  a = n(442853);

function s(t, e = []) {
  return [t, e]
}

function o(t, e) {
  let [n, r] = t;
  return [n, [...r, e]]
}

function l(t, e) {
  for (let n of t[1]) {
    let t = n[0].type;
    if (e(n, t)) return !0
  }
  return !1
}

function u(t, e) {
  return l(t, (t, n) => e.includes(n))
}

function c(t, e) {
  return (e || new TextEncoder).encode(t)
}

function d(t, e) {
  let [n, r] = t, a = JSON.stringify(n);

  function s(t) {
    "string" == typeof a ? a = "string" == typeof t ? a + t : [c(a, e), t] : a.push("string" == typeof t ? c(t, e) : t)
  }
  for (let t of r) {
    let [e, n] = t;
    if (s(`
${JSON.stringify(e)}
`), "string" == typeof n || n instanceof Uint8Array) s(n);
    else {
      let t;
      try {
        t = JSON.stringify(n)
      } catch (e) {
        t = JSON.stringify((0, i.Fv)(n))
      }
      s(t)
    }
  }
  return "string" == typeof a ? a : function(t) {
    let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
      n = 0;
    for (let r of t) e.set(r, n), n += r.length;
    return e
  }(a)
}

function h(t, e, n) {
  let r = "string" == typeof t ? e.encode(t) : t;

  function i(t) {
    let e = r.subarray(0, t);
    return r = r.subarray(t + 1), e
  }

  function a() {
    let t = r.indexOf(10);
    return t < 0 && (t = r.length), JSON.parse(n.decode(i(t)))
  }
  let s = a(),
    o = [];
  for (; r.length;) {
    let t = a(),
      e = "number" == typeof t.length ? t.length : void 0;
    o.push([t, e ? i(e) : a()])
  }
  return [s, o]
}

function _(t, e) {
  let n = "string" == typeof t.data ? c(t.data, e) : t.data;
  return [(0, a.Jr)({
    type: "attachment",
    length: n.length,
    filename: t.filename,
    content_type: t.contentType,
    attachment_type: t.attachmentType
  }), n]
}
let f = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor"
};

function p(t) {
  return f[t]
}

function m(t) {
  if (!t || !t.sdk) return;
  let {
    name: e,
    version: n
  } = t.sdk;
  return {
    name: e,
    version: n
  }
}

function g(t, e, n, i) {
  let s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...e && {
      sdk: e
    },
    ...!!n && {
      dsn: (0, r.RA)(i)
    },
    ...s && {
      trace: (0, a.Jr)({
        ...s
      })
    }
  }
}