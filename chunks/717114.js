n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(923928),
    l = n(468026),
    u = n(594190),
    c = n(131951),
    d = n(19780),
    f = n(63063),
    _ = n(981631),
    h = n(388032);
t.Z = () => {
    let [e, t] = (0, a.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []),
        n = (0, a.e7)([d.Z], () => d.Z.isConnected(), []),
        p = (0, a.e7)([c.Z], () => c.Z.getMode() === _.pM4.PUSH_TO_TALK, []),
        m = null != t && t.elevated && n && p && e,
        g = i.useRef(null);
    function E() {
        null !== g.current && ((0, s.closeModal)(g.current), (g.current = null));
    }
    return (
        i.useEffect(
            () => (
                m
                    ? (g.current = (0, s.openModal)((e) =>
                          (0, r.jsx)(l.default, {
                              title: h.intl.string(h.t.eotlXF),
                              body: h.intl.formatToPlainString(h.t.Lw6KXV, { game: null == t ? void 0 : t.name }),
                              secondaryConfirmText: h.intl.string(h.t['5E9SBw']),
                              onConfirmSecondary: () => o.Z.clearPTTAdminWarning(),
                              onConfirm: () => window.open(f.Z.getArticleURL(_.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                              confirmText: h.intl.string(h.t.psXQHB),
                              ...e
                          })
                      ))
                    : E(),
                () => {
                    E();
                }
            ),
            [t, m]
        ),
        null
    );
};
