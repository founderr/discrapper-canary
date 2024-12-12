var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(481060),
    u = r(923928),
    c = r(468026),
    d = r(594190),
    f = r(131951),
    _ = r(19780),
    h = r(63063),
    p = r(981631),
    m = r(388032);
let g = () => {
    let [e, n] = (0, o.Wu)([d.ZP], () => [d.ZP.canShowAdminWarning, d.ZP.getVisibleGame()], []),
        r = (0, o.e7)([_.Z], () => _.Z.isConnected(), []),
        i = (0, o.e7)([f.Z], () => f.Z.getMode() === p.pM4.PUSH_TO_TALK, []),
        g = null != n && n.elevated && r && i && e,
        E = s.useRef(null);
    function v() {
        null !== E.current && ((0, l.closeModal)(E.current), (E.current = null));
    }
    return (
        s.useEffect(
            () => (
                g
                    ? (E.current = (0, l.openModal)((e) =>
                          (0, a.jsx)(c.default, {
                              title: m.intl.string(m.t.eotlXF),
                              body: m.intl.formatToPlainString(m.t.Lw6KXV, { game: null == n ? void 0 : n.name }),
                              secondaryConfirmText: m.intl.string(m.t['5E9SBw']),
                              onConfirmSecondary: () => u.Z.clearPTTAdminWarning(),
                              onConfirm: () => window.open(h.Z.getArticleURL(p.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                              confirmText: m.intl.string(m.t.psXQHB),
                              ...e
                          })
                      ))
                    : v(),
                () => {
                    v();
                }
            ),
            [n, g]
        ),
        null
    );
};
n.Z = g;
