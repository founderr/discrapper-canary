n.d(t, {
    J2: function () {
        return p;
    },
    V3: function () {
        return h;
    },
    ZB: function () {
        return T;
    },
    e4: function () {
        return g;
    },
    fq: function () {
        return f;
    },
    lM: function () {
        return S;
    },
    wu: function () {
        return I;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711);
var o = n(866442),
    s = n(399606),
    l = n(692547),
    u = n(780384),
    c = n(607070),
    d = n(44315),
    _ = n(564334),
    E = n(981631);
function f(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.saturation);
    return (0, i.useMemo)(
        () =>
            null == e
                ? null
                : {
                      overlaySyncedWithUserTheme: l.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      overlay: l.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      sectionBox: l.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      messageInputBorder: l.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      dividerOpacity: e === l.Z.themes.DARK ? 0.24 : 0.12,
                      noteBackgroundColor: l.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      profileBodyBackgroundHover: l.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      rolePillBackgroundColor: l.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      rolePillBorderColor: l.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                          theme: e,
                          saturation: t
                      }).hsl(),
                      icon: l.Z.colors.INTERACTIVE_NORMAL.resolve({
                          theme: e,
                          saturation: t
                      }).hsl()
                  },
        [e, t]
    );
}
function h(e) {
    return null == e ? null : (0, o.Bd)(e) > 0.5 ? E.BRd.DARK : E.BRd.LIGHT;
}
function p(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
function m(e, t) {
    let n = (0, o.px)(e);
    if (null == t) return 0;
    let r = _.Z.parseString(t);
    if (null == r) return 0;
    let i = [r.red, r.green, r.blue],
        a = [n[0], n[1], n[2]],
        s = r.alpha,
        [l, u, c] = i.map((e, t) => Math.floor(s * e + (1 - s) * a[t]));
    return (0, o.QT)('rgba('.concat(l, ', ').concat(u, ', ').concat(c, ')'));
}
function I(e, t, n) {
    let r = f(e);
    return null == r || null == t ? null : m(t, n ? r.overlaySyncedWithUserTheme : r.overlay);
}
let T = (0, a.memoize)(
    (e) => {
        let t = (0, u.Qg)(e, {
            base: '#ffffff',
            contrastRatio: u.S3.HighContrastText
        });
        return (0, o._i)(t);
    },
    (e) => e
);
function g(e, t) {
    let n = f(e);
    return null != n && null != t ? m(t, null == n ? void 0 : n.messageInputBorder) : null;
}
function S(e, t) {
    let n = (0, d.Sl)(E.Ilk.WHITE_500).hex;
    return (0, u.wj)(e) ? (0, o._i)(n) : null != t ? T(t) : null;
}
function A(e, t, n) {
    let r = p(e, t, n);
    return 'rgba('.concat(r[0], ', ').concat(r[1], ', ').concat(r[2], ', 1)');
}
