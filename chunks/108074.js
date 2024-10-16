r.d(t, {
    W: function () {
        return E;
    }
});
var n = r(617726),
    a = r(967752),
    _ = r(510529);
function o(e, t) {
    let r;
    return (0, n.gv)(e, (e, n) => (t.includes(n) && (r = Array.isArray(e) ? e[1] : void 0), !!r)), r;
}
function E(e, t) {
    return (r) => {
        let E = e(r),
            i = new Map();
        function c(t, n) {
            let E = n ? `${t}:${n}` : t,
                c = i.get(E);
            if (!c) {
                var s, l;
                let u = (0, a.U4)(t);
                if (!u) return;
                let I = (0, _.U)(u, r.tunnel);
                (c = n
                    ? ((s = e),
                      (l = n),
                      (e) => {
                          let t = s(e);
                          return {
                              ...t,
                              send: async (e) => {
                                  let r = o(e, ['event', 'transaction', 'profile', 'replay_event']);
                                  return r && (r.release = l), t.send(e);
                              }
                          };
                      })({
                          ...r,
                          url: I
                      })
                    : e({
                          ...r,
                          url: I
                      })),
                    i.set(E, c);
            }
            return [t, c];
        }
        return {
            send: async function e(e) {
                let r = t({
                        envelope: e,
                        getEvent: function (t) {
                            return o(e, t && t.length ? t : ['event']);
                        }
                    })
                        .map((e) => ('string' == typeof e ? c(e, void 0) : c(e.dsn, e.release)))
                        .filter((e) => !!e),
                    a = r.length ? r : [['', E]];
                return (
                    await Promise.all(
                        a.map(([t, r]) => {
                            var a, _;
                            return r.send(
                                ((a = e),
                                (_ = t),
                                (0, n.Jd)(
                                    _
                                        ? {
                                              ...a[0],
                                              dsn: _
                                          }
                                        : a[0],
                                    a[1]
                                ))
                            );
                        })
                    )
                )[0];
            },
            flush: async function e(e) {
                let t = [...i.values(), E];
                return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
            }
        };
    };
}
