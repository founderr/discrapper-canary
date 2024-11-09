n.d(t, {
    Ej: function () {
        return T;
    },
    Nc: function () {
        return E;
    },
    Nv: function () {
        return R;
    },
    Qj: function () {
        return _;
    },
    TX: function () {
        return b;
    },
    Uv: function () {
        return C;
    },
    ZZ: function () {
        return d;
    },
    Zt: function () {
        return I;
    },
    cq: function () {
        return f;
    },
    eN: function () {
        return N;
    },
    f1: function () {
        return p;
    },
    gs: function () {
        return y;
    },
    lq: function () {
        return m;
    },
    o2: function () {
        return v;
    },
    oL: function () {
        return c;
    },
    qz: function () {
        return S;
    },
    r_: function () {
        return g;
    },
    rf: function () {
        return h;
    },
    u1: function () {
        return A;
    }
});
var r = n(570140),
    i = n(153867),
    a = n(626135),
    s = n(607070),
    o = n(981631),
    l = n(969943),
    u = n(611480);
function c(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_FONT_SIZE',
        fontSize: e
    });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING',
        messageGroupSpacing: e
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ZOOM',
        zoom: e
    });
}
function _() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE' }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function h() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE' }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function p() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE' });
}
function m() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE' });
}
function g() {
    r.Z.dispatch({ type: 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN' });
}
function E(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED',
        systemPrefersReducedMotion: e
    });
}
function v(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SATURATION',
        saturation: e
    });
}
function I(e) {
    let t = s.Z.useReducedMotion;
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION',
        prefersReducedMotion: e
    });
    let n = s.Z.useReducedMotion;
    !t && n
        ? i.ZP.applySettingsOverride({
              gifAutoPlay: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateEmoji: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateStickers: {
                  value: u.yr.ANIMATE_ON_INTERACTION,
                  reasonKey: l.mX.REDUCED_MOTION_STICKERS
              }
          })
        : t && !n && i.ZP.clearSettingsOverride('gifAutoPlay', 'animateEmoji', 'animateStickers');
}
function S(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS',
        syncForcedColors: e
    });
}
function T(e, t) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED',
        systemPrefersColorScheme: e,
        systemForcedColors: t
    });
}
function b(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED',
        systemPrefersContrast: e
    });
}
function y(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS',
        alwaysShowLinkDecorations: e
    });
}
function A(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ROLE_STYLE',
        roleStyle: e
    }),
        a.default.track(o.rMx.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function N() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE' });
}
function C() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE' });
}
function R(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_HIDE_TAGS',
        hideTags: e
    });
}
