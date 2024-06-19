n.d(e, {
  U: function() {
    return s
  },
  h: function() {
    return o
  }
});
var r = n(442853),
  i = n(177668);

function a(t) {
  let e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
}

function s(t, e = {}) {
  var n, i, s;
  let o = "string" == typeof e ? e : e.tunnel,
    l = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
  return o || `${n=t,`${a(n)}${n.projectId}/envelope/`}?${i=t,s=l,(0,r._j)({sentry_key:i.publicKey,sentry_version:"7",...s&&{sentry_client:`${s.name}/${s.version}`}})}`
}

function o(t, e) {
  let n = (0, i.vK)(t);
  if (!n) return "";
  let r = `${a(n)}embed/error-page/`,
    s = `dsn=${(0,i.RA)(n)}`;
  for (let t in e) {
    if ("dsn" !== t)
      if ("user" === t) {
        let t = e.user;
        if (!t) continue;
        t.name && (s += `&name=${encodeURIComponent(t.name)}`), t.email && (s += `&email=${encodeURIComponent(t.email)}`)
      } else s += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`
  }
  return `${r}?${s}`
}