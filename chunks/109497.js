n(653041);
var i,
    r = n(442837),
    l = n(570140),
    a = n(695346),
    o = n(885110),
    s = n(70956),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = [],
    h = !1;
function m() {
    return u.length >= 4 && u.some((e) => e < Date.now() - 3 * s.Z.Millis.DAY);
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && Array.isArray(e.sessionStartsWithDND) && (u = e.sessionStartsWithDND);
    }
    showNagBar() {
        return h;
    }
    getState() {
        return { sessionStartsWithDND: u };
    }
    getTemp() {
        return { x: a.Cr.getSetting() };
    }
}
d(p, 'displayName', 'HabitualDNDStore'),
    d(p, 'persistKey', 'habitualDND'),
    new p(l.Z, {
        POST_CONNECTION_OPEN: function () {
            o.Z.getStatus() === c.Skl.DND && '0' === a.Cr.getSetting()
                ? (u.push(Date.now()),
                  (u = u.filter((e) => e > Date.now() - 5 * s.Z.Millis.DAY)),
                  m() &&
                      setTimeout(() => {
                          l.Z.dispatch({ type: 'HABITUAL_DND_CLEAR' });
                      }, 15 * s.Z.Millis.SECOND))
                : (u = []);
        },
        HABITUAL_DND_CLEAR: function () {
            (h = !!m() || !1), (u = []);
        }
    });
