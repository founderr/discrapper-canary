var i,
    a = r(442837),
    s = r(570140),
    o = r(594174),
    l = r(626135),
    u = r(74538),
    c = r(997945),
    d = r(981631),
    f = r(921944),
    _ = r(474936);
function h(e, n, r) {
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
let p = 2,
    m = {
        client: {
            desktop: c.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    g = !1,
    E = !0,
    v = () => {
        E = !u.ZP.canUsePremiumAppIcons(o.default.getCurrentUser());
    },
    I = (e) => {
        if (((m.client.desktop = e), !E)) {
            var n;
            l.default.track(d.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.premiumType,
                icon_premium_tier: e !== c.aH.DEFAULT ? _.p9.TIER_2 : null
            });
        }
    };
function T(e) {
    let { id: n } = e;
    null != n && I(n);
}
function b() {
    g = !0;
}
function y() {
    S(), (g = !1);
}
function S() {
    E &&
        (m.client = {
            desktop: c.aH.DEFAULT,
            coachmarkImpressions: p
        });
}
function A(e) {
    let { markAsDismissed: n } = e;
    (m.client.coachmarkImpressions += 1), m.client.coachmarkImpressions >= p && (null == n || n(f.L.UNKNOWN), y());
}
class N extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.waitFor(o.default), this.syncWith([o.default], v);
    }
    get isEditorOpen() {
        return g;
    }
    get isUpsellPreview() {
        return E;
    }
    getState() {
        return m;
    }
    getCurrentDesktopIcon() {
        var e;
        return null == m ? void 0 : null === (e = m.client) || void 0 === e ? void 0 : e.desktop;
    }
}
h(N, 'displayName', 'AppIconPersistedStoreState'),
    h(N, 'persistKey', 'AppIconPersistedStoreState'),
    (n.Z = new N(s.Z, {
        APP_ICON_UPDATED: T,
        APP_ICON_EDITOR_OPEN: b,
        APP_ICON_EDITOR_CLOSE: y,
        APP_ICON_EDITOR_RESET: S,
        APP_ICON_TRACK_IMPRESSION: A,
        LOGOUT: y
    }));
