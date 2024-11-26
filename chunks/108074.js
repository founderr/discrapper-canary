r.d(t, {
    W: function () {
        return E;
    }
});
var a = r(617726),
    n = r(967752),
    _ = r(510529);
function o(e, t) {
    let r;
    return (0, a.gv)(e, (e, a) => (t.includes(a) && (r = Array.isArray(e) ? e[1] : void 0), !!r)), r;
}
function E(e, t) {
    return (r) => {
        let E = e(r),
            i = new Map();
        function c(t, a) {
            let E = a ? `${t}:${a}` : t,
                c = i.get(E);
            if (!c) {
                var s, l;
                let I = (0, n.U4)(t);
                if (!I) return;
                let u = (0, _.U)(I, r.tunnel);
                (c = a
                    ? ((s = e),
                      (l = a),
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
                          url: u
                      })
                    : e({
                          ...r,
                          url: u
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
                    n = r.length ? r : [['', E]];
                return (
                    await Promise.all(
                        n.map(([t, r]) => {
                            var n, _;
                            return r.send(
                                ((n = e),
                                (_ = t),
                                (0, a.Jd)(
                                    _
                                        ? {
                                              ...n[0],
                                              dsn: _
                                          }
                                        : n[0],
                                    n[1]
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
