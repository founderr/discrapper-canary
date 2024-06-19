n.d(e, {
  W: function() {
    return o
  }
});
var r = n(50074),
  i = n(177668),
  a = n(507506);

function s(t, e) {
  let n;
  return (0, r.gv)(t, (t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n)), n
}

function o(t, e) {
  return n => {
    let r = t(n),
      o = {};

    function l(e, r) {
      let l = r ? `${e}:${r}` : e;
      if (!o[l]) {
        var u, c;
        let d = (0, i.U4)(e);
        if (!d) return;
        let h = (0, a.U)(d);
        o[l] = r ? (u = t, c = r, t => {
          let e = u(t);
          return {
            send: async t => {
              let n = s(t, ["event", "transaction", "profile", "replay_event"]);
              return n && (n.release = c), e.send(t)
            },
            flush: t => e.flush(t)
          }
        })({
          ...n,
          url: h
        }) : t({
          ...n,
          url: h
        })
      }
      return o[l]
    }
    return {
      send: async function t(t) {
        let n = e({
          envelope: t,
          getEvent: function(e) {
            return s(t, e && e.length ? e : ["event"])
          }
        }).map(t => "string" == typeof t ? l(t, void 0) : l(t.dsn, t.release)).filter(t => !!t);
        return 0 === n.length && n.push(r), (await Promise.all(n.map(e => e.send(t))))[0]
      },
      flush: async function t(t) {
        let e = [...Object.keys(o).map(t => o[t]), r];
        return (await Promise.all(e.map(e => e.flush(t)))).every(t => t)
      }
    }
  }
}