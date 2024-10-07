var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(594174),
    _ = n(981631);
let E = _.QZA.CLOSED,
    f = null,
    h = null,
    p = {},
    I = {},
    m = {},
    T = null,
    S = null,
    g = !1,
    A = !1,
    N = null,
    O = null,
    R = null,
    v = [],
    C = null,
    L = null;
function y(e) {
    var t, n, r, i, a, s;
    let o = d.default.getCurrentUser();
    if (null == o) return D();
    (h = null !== (t = e.section) && void 0 !== t ? t : h),
        (C = null !== (n = e.section) && void 0 !== n ? n : h),
        null != e.subsection && null != h && (p[h] = e.subsection),
        null != e.scrollPosition && null != h && (I[h] = e.scrollPosition),
        (A = !!e.openWithoutBackstack),
        (E = _.QZA.OPEN),
        (m = {}),
        (S = {
            ...(T = {
                [_.oAB.ACCOUNT]: {
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
        (O = null !== (r = e.onClose) && void 0 !== r ? r : null),
        (R = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null),
        (v = null !== (a = e.analyticsLocations) && void 0 !== a ? a : []),
        (L = null !== (s = e.impressionSource) && void 0 !== s ? s : null);
}
function D() {
    (E = _.QZA.CLOSED), (g = !1), (T = null), (C = null), (S = null), (f = null), (h = null), (p = {}), (I = {}), (O = null), (R = null), (v = []), (L = null);
}
function b() {
    (E = _.QZA.OPEN), (m = {});
}
class M extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(d.default);
    }
    hasChanges() {
        return null != S && null != T && (!!this.isOpen() || N === _.cII.USER_SETTINGS) && !l().isEqual(S, T);
    }
    isOpen() {
        return g;
    }
    getPreviousSection() {
        return f;
    }
    getSection() {
        return h;
    }
    getSubsection() {
        return null != h ? p[h] : null;
    }
    getScrollPosition() {
        return null != h ? I[h] : null;
    }
    shouldOpenWithoutBackstack() {
        return A;
    }
    getProps() {
        return {
            submitting: E === _.QZA.SUBMITTING,
            section: h,
            subsection: null != h ? p[h] : null,
            scrollPosition: null != h ? I[h] : null,
            settings: S,
            errors: m,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: A,
            analyticsLocation: R,
            analyticsLocations: v,
            initialSection: C,
            impressionSource: L
        };
    }
    get onClose() {
        return O;
    }
}
(a = 'UserSettingsModalStore'),
    (i = 'displayName') in (r = M)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new M(c.Z, {
        USER_SETTINGS_MODAL_OPEN: function (e) {
            (g = !0), y(e);
        },
        USER_SETTINGS_MODAL_INIT: y,
        USER_SETTINGS_MODAL_CLOSE: D,
        LOGOUT: D,
        USER_SETTINGS_MODAL_SUBMIT: function () {
            E = _.QZA.SUBMITTING;
        },
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
            var t;
            if (E !== _.QZA.SUBMITTING) return !1;
            (E = _.QZA.OPEN), (h = _.oAB.ACCOUNT), (m = null !== (t = e.errors) && void 0 !== t ? t : {});
        },
        USER_SETTINGS_MODAL_SET_SECTION: function (e) {
            var t;
            (f = h), (h = e.section), (R = null), (v = null !== (t = e.analyticsLocations) && void 0 !== t ? t : []), null != e.subsection && (p[h] = e.subsection);
        },
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function (e) {
            let { forSection: t } = e;
            null != t ? delete p[t] : null != h && delete p[h];
        },
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function (e) {
            let { forSection: t } = e;
            null != t ? delete I[t] : null != h && delete I[h];
        },
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
            let { settings: t } = e;
            null == S && (S = {});
            let n = S[_.oAB.ACCOUNT];
            S[_.oAB.ACCOUNT] = {
                ...n,
                ...t
            };
        },
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: b,
        USER_SETTINGS_MODAL_RESET: function () {
            let e = d.default.getCurrentUser();
            b(),
                null != e &&
                    (S = {
                        ...(T = {
                            [_.oAB.ACCOUNT]: {
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
                (N = e.tab),
                null == h &&
                    N === _.cII.USER_SETTINGS &&
                    y({
                        type: 'USER_SETTINGS_MODAL_INIT',
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
            );
        }
    }));
