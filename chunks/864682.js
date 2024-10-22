n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(594174),
    s = n(74538),
    o = n(327943),
    c = n(997945),
    u = n(630117),
    d = n(441319);
function h() {
    let [e, t, n] = (0, l.Wu)([r.default, o.Z], () => [o.Z.getCurrentDesktopIcon(), o.Z.isEditorOpen, s.ZP.isPremium(r.default.getCurrentUser())]),
        h = d.QA[e],
        p = e !== c.aH.DEFAULT && (n || t),
        f = (0, a.useRedesignIconContext)().enabled,
        _ = (0, i.jsx)(a.ClydeIcon, {
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
        : _;
}
