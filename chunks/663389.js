var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(594174),
    f = n(981631);
let _ = f.QZA.CLOSED,
    p = null,
    h = null,
    m = {},
    g = {},
    E = {},
    v = null,
    b = null,
    I = !1,
    T = !1,
    S = null,
    y = null,
    A = null,
    N = [],
    C = null,
    R = null;
function O(e) {
    var t, n, r, i, a, s;
    let o = d.default.getCurrentUser();
    if (null == o) return D();
    (h = null !== (t = e.section) && void 0 !== t ? t : h),
        (C = null !== (n = e.section) && void 0 !== n ? n : h),
        null != e.subsection && null != h && (m[h] = e.subsection),
        null != e.scrollPosition && null != h && (g[h] = e.scrollPosition),
        (T = !!e.openWithoutBackstack),
        (_ = f.QZA.OPEN),
        (E = {}),
        (b = {
            ...(v = {
                [f.oAB.ACCOUNT]: {
                    userId: o.id,
                    username: o.username,
                    discriminator: o.discriminator,
                    email: o.email,
                    avatar: o.avatar,
                    password: '',
                    newPassword: null,
                    claimed: o.isClaimed()
                }
            })
        }),
        (y = null !== (r = e.onClose) && void 0 !== r ? r : null),
        (A = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null),
        (N = null !== (a = e.analyticsLocations) && void 0 !== a ? a : []),
        (R = null !== (s = e.impressionSource) && void 0 !== s ? s : null);
}
function D() {
    (_ = f.QZA.CLOSED), (I = !1), (v = null), (C = null), (b = null), (p = null), (h = null), (m = {}), (g = {}), (y = null), (A = null), (N = []), (R = null);
}
function L() {
    (_ = f.QZA.OPEN), (E = {});
}
class x extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    hasChanges() {
        return null != b && null != v && (!!this.isOpen() || S === f.cII.USER_SETTINGS) && !l().isEqual(b, v);
    }
    isOpen() {
        return I;
    }
    getPreviousSection() {
        return p;
    }
    getSection() {
        return h;
    }
    getSubsection() {
        return null != h ? m[h] : null;
    }
    getScrollPosition() {
        return null != h ? g[h] : null;
    }
    shouldOpenWithoutBackstack() {
        return T;
    }
    getProps() {
        return {
            submitting: _ === f.QZA.SUBMITTING,
            section: h,
            subsection: null != h ? m[h] : null,
            scrollPosition: null != h ? g[h] : null,
            settings: b,
            errors: E,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: T,
            analyticsLocation: A,
            analyticsLocations: N,
            initialSection: C,
            impressionSource: R
        };
    }
    get onClose() {
        return y;
    }
}
(a = 'UserSettingsModalStore'),
    (i = 'displayName') in (r = x)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new x(c.Z, {
        USER_SETTINGS_MODAL_OPEN: function (e) {
            (I = !0), O(e);
        },
        USER_SETTINGS_MODAL_INIT: O,
        USER_SETTINGS_MODAL_CLOSE: D,
        LOGOUT: D,
        USER_SETTINGS_MODAL_SUBMIT: function () {
            _ = f.QZA.SUBMITTING;
        },
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
            var t;
            if (_ !== f.QZA.SUBMITTING) return !1;
            (_ = f.QZA.OPEN), (h = f.oAB.ACCOUNT), (E = null !== (t = e.errors) && void 0 !== t ? t : {});
        },
        USER_SETTINGS_MODAL_SET_SECTION: function (e) {
            var t;
            (p = h), (h = e.section), (A = null), (N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : []), null != e.subsection && (m[h] = e.subsection);
        },
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function (e) {
            let { forSection: t } = e;
            null != t ? delete m[t] : null != h && delete m[h];
        },
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function (e) {
            let { forSection: t } = e;
            null != t ? delete g[t] : null != h && delete g[h];
        },
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
            let { settings: t } = e;
            null == b && (b = {});
            let n = b[f.oAB.ACCOUNT];
            b[f.oAB.ACCOUNT] = {
                ...n,
                ...t
            };
        },
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
        USER_SETTINGS_MODAL_RESET: function () {
            let e = d.default.getCurrentUser();
            L(),
                null != e &&
                    (b = {
                        ...(v = {
                            [f.oAB.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: '',
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        })
                    });
        },
        DRAWER_SELECT_TAB: function (e) {
            return (
                (S = e.tab),
                null == h &&
                    S === f.cII.USER_SETTINGS &&
                    O({
                        type: 'USER_SETTINGS_MODAL_INIT',
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
            );
        }
    }));
