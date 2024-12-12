var i,
    a = r(442837),
    s = r(570140),
    o = r(168232),
    l = r(474936);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = 'OverridePremiumTypeStore',
    d = {
        premiumTypeOverride: l.F_,
        premiumTypeActual: l.F_,
        createdAtOverride: l.Zh
    };
function f(e) {
    let { premiumType: n } = e;
    d.premiumTypeOverride = n;
}
function _(e) {
    let { createdAt: n } = e;
    d.createdAtOverride = n;
}
function h(e) {
    let { user: n } = e;
    d.premiumTypeActual = (0, o.G)(n.premium_type);
}
class p extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            (d.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual), (d.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride), null != e.createdAtOverride ? (d.createdAtOverride = new Date(e.createdAtOverride)) : (d.createdAtOverride = l.Zh);
            return;
        }
        (d.premiumTypeOverride = l.F_), (d.createdAtOverride = l.Zh);
    }
    getPremiumTypeOverride() {
        return d.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return d.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return d.createdAtOverride;
    }
    getState() {
        return d;
    }
    get premiumType() {
        return d.premiumTypeOverride;
    }
}
u(p, 'displayName', c),
    u(p, 'persistKey', c),
    u(p, 'migrations', [
        (e) => {
            if ((null == e ? void 0 : e.createdAtOverride) == null)
                return {
                    ...e,
                    createdAtOverride: l.Zh
                };
        }
    ]),
    (n.Z = new p(s.Z, {
        SET_PREMIUM_TYPE_OVERRIDE: f,
        SET_CREATED_AT_OVERRIDE: _,
        CURRENT_USER_UPDATE: h,
        CONNECTION_OPEN: h
    }));
