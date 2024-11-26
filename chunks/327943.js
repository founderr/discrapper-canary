var r,
    i = n(442837),
    a = n(570140),
    s = n(594174),
    o = n(626135),
    l = n(74538),
    u = n(997945),
    c = n(981631),
    d = n(921944),
    f = n(474936);
function _(e, t, n) {
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
let p = {
        client: {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: 0
        }
    },
    h = !1,
    m = !0,
    g = () => {
        m = !l.ZP.canUsePremiumAppIcons(s.default.getCurrentUser());
    },
    E = (e) => {
        if (((p.client.desktop = e), !m)) {
            var t;
            o.default.track(c.rMx.APP_ICON_UPDATED, {
                icon_id: e,
                user_premium_tier: null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
                icon_premium_tier: e !== u.aH.DEFAULT ? f.p9.TIER_2 : null
            });
        }
    };
function v() {
    I(), (h = !1);
}
function I() {
    m &&
        (p.client = {
            desktop: u.aH.DEFAULT,
            coachmarkImpressions: 2
        });
}
class T extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (p = e), this.waitFor(s.default), this.syncWith([s.default], g);
    }
    get isEditorOpen() {
        return h;
    }
    get isUpsellPreview() {
        return m;
    }
    getState() {
        return p;
    }
    getCurrentDesktopIcon() {
        var e;
        return null == p ? void 0 : null === (e = p.client) || void 0 === e ? void 0 : e.desktop;
    }
}
_(T, 'displayName', 'AppIconPersistedStoreState'),
    _(T, 'persistKey', 'AppIconPersistedStoreState'),
    (t.Z = new T(a.Z, {
        APP_ICON_UPDATED: function (e) {
            let { id: t } = e;
            null != t && E(t);
        },
        APP_ICON_EDITOR_OPEN: function () {
            h = !0;
        },
        APP_ICON_EDITOR_CLOSE: v,
        APP_ICON_EDITOR_RESET: I,
        APP_ICON_TRACK_IMPRESSION: function (e) {
            let { markAsDismissed: t } = e;
            (p.client.coachmarkImpressions += 1), p.client.coachmarkImpressions >= 2 && (null == t || t(d.L.UNKNOWN), v());
        },
        LOGOUT: v
    }));
