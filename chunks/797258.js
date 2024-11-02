var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(314897);
let f = Object.freeze([]),
    _ = {};
function h(e) {
    (_ = {}),
        e.sessions.forEach((e) => {
            _[e.sessionId] = e;
        });
}
class p extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    getSessions() {
        return _;
    }
    getSession() {
        let e = d.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = d.default.getSessionId(),
            t = l().find(_, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : f;
    }
    getSessionById(e) {
        return _[e];
    }
    getActiveSession() {
        return l().find(_, (e) => {
            let { active: t } = e;
            return t;
        });
    }
}
(a = 'SessionsStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new p(c.Z, {
        CONNECTION_OPEN: h,
        SESSIONS_REPLACE: h
    }));
