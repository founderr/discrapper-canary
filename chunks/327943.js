var r,
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(626135),
    l = n(74538),
    u = n(997945),
    c = n(981631),
    d = n(921944),
    _ = n(474936);
function E(e, t, n) {
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
let f = 2,
    h = {
        client: {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    p = !1,
    m = !0,
    I = () => {
        m = !l.ZP.canUsePremiumAppIcons(o.default.getCurrentUser());
    },
    T = (e) => {
        if (((h.client.desktop = e), !m)) {
            var t;
            s.default.track(c.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
                icon_premium_tier: e !== u.aH.DEFAULT ? _.p9.TIER_2 : null
            });
        }
    };
function g(e) {
    let { id: t } = e;
    null != t && T(t);
}
function S() {
    p = !0;
}
function A() {
    v(), (p = !1);
}
function v() {
    m &&
        (h.client = {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: f
        });
}
function N(e) {
    let { markAsDismissed: t } = e;
    (h.client.coachmarkImpressions += 1), h.client.coachmarkImpressions >= f && (null == t || t(d.L.UNKNOWN), A());
}
class O extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e), this.waitFor(o.default), this.syncWith([o.default], I);
    }
    get isEditorOpen() {
        return p;
    }
    get isUpsellPreview() {
        return m;
    }
    getState() {
        return h;
    }
    getCurrentDesktopIcon() {
        var e;
        return null == h ? void 0 : null === (e = h.client) || void 0 === e ? void 0 : e.desktop;
    }
}
E(O, 'displayName', 'AppIconPersistedStoreState'),
    E(O, 'persistKey', 'AppIconPersistedStoreState'),
    (t.Z = new O(a.Z, {
        APP_ICON_UPDATED: g,
        APP_ICON_EDITOR_OPEN: S,
        APP_ICON_EDITOR_CLOSE: A,
        APP_ICON_EDITOR_RESET: v,
        APP_ICON_TRACK_IMPRESSION: N,
        LOGOUT: A
    }));
