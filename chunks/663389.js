var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(594174),
    u = n(981631);
function c(e, t, n) {
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
let d = u.QZA.CLOSED,
    _ = null,
    E = null,
    f = {},
    h = {},
    p = {},
    m = null,
    I = null,
    T = !1,
    g = !1,
    S = null,
    A = null,
    v = null,
    N = [],
    O = null,
    R = null;
function C(e) {
    (T = !0), y(e);
}
function y(e) {
    var t, n, r, i, a, o;
    let s = l.default.getCurrentUser();
    if (null == s) return L();
    (E = null !== (t = e.section) && void 0 !== t ? t : E),
        (O = null !== (n = e.section) && void 0 !== n ? n : E),
        null != e.subsection && null != E && (f[E] = e.subsection),
        null != e.scrollPosition && null != E && (h[E] = e.scrollPosition),
        (g = !!e.openWithoutBackstack),
        (d = u.QZA.OPEN),
        (p = {}),
        (I = {
            ...(m = {
                [u.oAB.ACCOUNT]: {
                    userId: s.id,
                    username: s.username,
                    discriminator: s.discriminator,
                    email: s.email,
                    avatar: s.avatar,
                    password: '',
                    newPassword: null,
                    claimed: s.isClaimed()
                }
            })
        }),
        (A = null !== (r = e.onClose) && void 0 !== r ? r : null),
        (v = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null),
        (N = null !== (a = e.analyticsLocations) && void 0 !== a ? a : []),
        (R = null !== (o = e.impressionSource) && void 0 !== o ? o : null);
}
function L() {
    (d = u.QZA.CLOSED), (T = !1), (m = null), (O = null), (I = null), (_ = null), (E = null), (f = {}), (h = {}), (A = null), (v = null), (N = []), (R = null);
}
function b(e) {
    var t;
    (_ = E), (E = e.section), (v = null), (N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : []), null != e.subsection && (f[E] = e.subsection);
}
function D(e) {
    let { forSection: t } = e;
    null != t ? delete f[t] : null != E && delete f[E];
}
function M(e) {
    let { forSection: t } = e;
    null != t ? delete h[t] : null != E && delete h[E];
}
function P(e) {
    let { settings: t } = e;
    null == I && (I = {});
    let n = I[u.oAB.ACCOUNT];
    I[u.oAB.ACCOUNT] = {
        ...n,
        ...t
    };
}
function U() {
    d = u.QZA.SUBMITTING;
}
function w() {
    let e = l.default.getCurrentUser();
    x(),
        null != e &&
            (I = {
                ...(m = {
                    [u.oAB.ACCOUNT]: {
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
}
function x() {
    (d = u.QZA.OPEN), (p = {});
}
function G(e) {
    var t;
    if (d !== u.QZA.SUBMITTING) return !1;
    (d = u.QZA.OPEN), (E = u.oAB.ACCOUNT), (p = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function k(e) {
    return (
        (S = e.tab),
        null == E &&
            S === u.cII.USER_SETTINGS &&
            y({
                type: 'USER_SETTINGS_MODAL_INIT',
                section: null,
                subsection: null,
                scrollPosition: null,
                openWithoutBackstack: !1
            })
    );
}
class B extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    hasChanges() {
        return null != I && null != m && (!!this.isOpen() || S === u.cII.USER_SETTINGS) && !a().isEqual(I, m);
    }
    isOpen() {
        return T;
    }
    getPreviousSection() {
        return _;
    }
    getSection() {
        return E;
    }
    getSubsection() {
        return null != E ? f[E] : null;
    }
    getScrollPosition() {
        return null != E ? h[E] : null;
    }
    shouldOpenWithoutBackstack() {
        return g;
    }
    getProps() {
        return {
            submitting: d === u.QZA.SUBMITTING,
            section: E,
            subsection: null != E ? f[E] : null,
            scrollPosition: null != E ? h[E] : null,
            settings: I,
            errors: p,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: g,
            analyticsLocation: v,
            analyticsLocations: N,
            initialSection: O,
            impressionSource: R
        };
    }
    get onClose() {
        return A;
    }
}
c(B, 'displayName', 'UserSettingsModalStore'),
    (t.Z = new B(s.Z, {
        USER_SETTINGS_MODAL_OPEN: C,
        USER_SETTINGS_MODAL_INIT: y,
        USER_SETTINGS_MODAL_CLOSE: L,
        LOGOUT: L,
        USER_SETTINGS_MODAL_SUBMIT: U,
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: G,
        USER_SETTINGS_MODAL_SET_SECTION: b,
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: D,
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: M,
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: P,
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: x,
        USER_SETTINGS_MODAL_RESET: w,
        DRAWER_SELECT_TAB: k
    }));
