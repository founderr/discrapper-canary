r.d(n, {
    J2: function () {
        return g;
    },
    V3: function () {
        return m;
    },
    ZB: function () {
        return I;
    },
    e4: function () {
        return T;
    },
    fq: function () {
        return p;
    },
    lM: function () {
        return b;
    },
    wu: function () {
        return v;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(392711);
var o = r(866442),
    l = r(399606),
    u = r(692547),
    c = r(780384),
    d = r(607070),
    f = r(44315),
    _ = r(564334),
    h = r(981631);
function p(e) {
    let n = (0, l.e7)([d.Z], () => d.Z.saturation);
    return (0, a.useMemo)(
        () =>
            null == e
                ? null
                : {
                      overlaySyncedWithUserTheme: u.Z.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      overlay: u.Z.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      sectionBox: u.Z.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      messageInputBorder: u.Z.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      dividerOpacity: e === u.Z.themes.DARK ? 0.24 : 0.12,
                      noteBackgroundColor: u.Z.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      profileBodyBackgroundHover: u.Z.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      rolePillBackgroundColor: u.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      rolePillBorderColor: u.Z.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                          theme: e,
                          saturation: n
                      }).hsl(),
                      icon: u.Z.colors.INTERACTIVE_NORMAL.resolve({
                          theme: e,
                          saturation: n
                      }).hsl()
                  },
        [e, n]
    );
}
function m(e) {
    return null == e ? null : (0, o.Bd)(e) > 0.5 ? h.BRd.DARK : h.BRd.LIGHT;
}
function g(e, n, r) {
    let i = r / 100,
        a = 1 - i;
    return [Math.round(e[0] * a + n[0] * i), Math.round(e[1] * a + n[1] * i), Math.round(e[2] * a + n[2] * i)];
}
function E(e, n) {
    let r = (0, o.px)(e);
    if (null == n) return 0;
    let i = _.Z.parseString(n);
    if (null == i) return 0;
    let a = [i.red, i.green, i.blue],
        s = [r[0], r[1], r[2]],
        l = i.alpha,
        [u, c, d] = a.map((e, n) => Math.floor(l * e + (1 - l) * s[n]));
    return (0, o.QT)('rgba('.concat(u, ', ').concat(c, ', ').concat(d, ')'));
}
function v(e, n, r) {
    let i = p(e);
    return null == i || null == n ? null : E(n, r ? i.overlaySyncedWithUserTheme : i.overlay);
}
let I = (0, s.memoize)(
    (e) => {
        let n = (0, c.Qg)(e, {
            base: '#ffffff',
            contrastRatio: c.S3.HighContrastText
        });
        return (0, o._i)(n);
    },
    (e) => e
);
function T(e, n) {
    let r = p(e);
    return null != r && null != n ? E(n, null == r ? void 0 : r.messageInputBorder) : null;
}
function b(e, n) {
    let r = (0, f.Sl)(h.Ilk.WHITE_500).hex;
    return (0, c.wj)(e) ? (0, o._i)(r) : null != n ? I(n) : null;
}
function y(e, n, r) {
    let i = g(e, n, r);
    return 'rgba('.concat(i[0], ', ').concat(i[1], ', ').concat(i[2], ', 1)');
}
