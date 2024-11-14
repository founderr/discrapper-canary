n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(594174),
    o = n(74538),
    s = n(327943),
    c = n(997945),
    u = n(630117),
    d = n(441319);
function h() {
    let [e, t, n] = (0, l.Wu)([a.default, s.Z], () => [s.Z.getCurrentDesktopIcon(), s.Z.isEditorOpen, o.ZP.isPremium(a.default.getCurrentUser())]),
        h = (0, d.aW)(e),
        p = e !== c.aH.DEFAULT && (n || t),
        f = (0, r.useRedesignIconContext)().enabled,
        m = (0, i.jsx)(r.ClydeIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 30,
            height: f ? 30 : 22
        });
    return null != h && p
        ? (0, i.jsx)(u.Z, {
              id: e,
              width: 48
          })
        : m;
}
