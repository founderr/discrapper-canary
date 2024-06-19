n.d(e, {
  RA: function() {
    return a
  },
  U4: function() {
    return s
  },
  vK: function() {
    return l
  }
});
var r = n(529866);
let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function a(t, e = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: a,
    projectId: s,
    protocol: o,
    publicKey: l
  } = t;
  return `${o}://${l}${e&&i?`:${i}`:""}@${n}${a?`:${a}`:""}/${r?`${r}/`:r}${s}`
}

function s(t) {
  let e = i.exec(t);
  if (!e) {
    console.error(`Invalid Sentry Dsn: ${t}`);
    return
  }
  let [n, r, a = "", s, l = "", u] = e.slice(1), c = "", d = u, h = d.split("/");
  if (h.length > 1 && (c = h.slice(0, -1).join("/"), d = h.pop()), d) {
    let t = d.match(/^\d+/);
    t && (d = t[0])
  }
  return o({
    host: s,
    pass: a,
    path: c,
    projectId: d,
    port: l,
    protocol: n,
    publicKey: r
  })
}

function o(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId
  }
}

function l(t) {
  let e = "string" == typeof t ? s(t) : o(t);
  if (!!e && !! function(t) {
      var e;
      if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
      let {
        port: n,
        projectId: i,
        protocol: a
      } = t;
      if (["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0))) return !1;
      if (!i.match(/^\d+$/)) return r.kg.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1;
      return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.kg.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1) : (r.kg.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), !1)
    }(e)) return e
}