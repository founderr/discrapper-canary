var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(923928),
    u = n(468026),
    c = n(594190),
    d = n(131951),
    _ = n(19780),
    E = n(63063),
    f = n(981631),
    h = n(689938);
let p = () => {
    let [e, t] = (0, o.Wu)([c.ZP], () => [c.ZP.canShowAdminWarning, c.ZP.getVisibleGame()], []),
        n = (0, o.e7)([_.Z], () => _.Z.isConnected(), []),
        r = (0, o.e7)([d.Z], () => d.Z.getMode() === f.pM4.PUSH_TO_TALK, []),
        p = null != t && t.elevated && n && r && e,
        m = a.useRef(null);
    function I() {
        null !== m.current && ((0, s.closeModal)(m.current), (m.current = null));
    }
    return (
        a.useEffect(
            () => (
                p
                    ? (m.current = (0, s.openModal)((e) =>
                          (0, i.jsx)(u.default, {
                              title: h.Z.Messages.PTT_PERMISSION_TITLE,
                              body: h.Z.Messages.PTT_PERMISSION_BODY.format({ game: null == t ? void 0 : t.name }),
                              secondaryConfirmText: h.Z.Messages.DONT_SHOW_AGAIN,
                              onConfirmSecondary: () => l.Z.clearPTTAdminWarning(),
                              onConfirm: () => window.open(E.Z.getArticleURL(f.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                              confirmText: h.Z.Messages.HELP_DESK,
                              ...e
                          })
                      ))
                    : I(),
                () => {
                    I();
                }
            ),
            [t, p]
        ),
        null
    );
};
t.Z = p;
