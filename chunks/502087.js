var r,
    i = n(442837),
    a = n(570140),
    o = n(168232),
    s = n(474936);
function l(e, t, n) {
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
let u = 'OverridePremiumTypeStore',
    c = {
        premiumTypeOverride: s.F_,
        premiumTypeActual: s.F_,
        createdAtOverride: s.Zh
    };
function d(e) {
    let { premiumType: t } = e;
    c.premiumTypeOverride = t;
}
function _(e) {
    let { createdAt: t } = e;
    c.createdAtOverride = t;
}
function E(e) {
    let { user: t } = e;
    c.premiumTypeActual = (0, o.G)(t.premium_type);
}
class f extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            (c.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual), (c.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride), null != e.createdAtOverride ? (c.createdAtOverride = new Date(e.createdAtOverride)) : (c.createdAtOverride = s.Zh);
            return;
        }
        (c.premiumTypeOverride = s.F_), (c.createdAtOverride = s.Zh);
    }
    getPremiumTypeOverride() {
        return c.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return c.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return c.createdAtOverride;
    }
    getState() {
        return c;
    }
    get premiumType() {
        return c.premiumTypeOverride;
    }
}
l(f, 'displayName', u),
    l(f, 'persistKey', u),
    l(f, 'migrations', [
        (e) => {
            if ((null == e ? void 0 : e.createdAtOverride) == null)
                return {
                    ...e,
                    createdAtOverride: s.Zh
                };
        }
    ]),
    (t.Z = new f(a.Z, {
        SET_PREMIUM_TYPE_OVERRIDE: d,
        SET_CREATED_AT_OVERRIDE: _,
        CURRENT_USER_UPDATE: E,
        CONNECTION_OPEN: E
    }));
