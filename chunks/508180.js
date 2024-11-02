var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(468026),
    u = n(131951),
    c = n(388032);
t.Z = () => {
    let e = (0, a.e7)([u.Z], () => u.Z.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.closeModal)(t.current), (t.current = null));
    }
    function d() {
        o.Z.interact();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, s.openModal)((e) =>
                          (0, r.jsx)(l.default, {
                              title: c.intl.string(c.t.dLLxCw),
                              body: c.intl.string(c.t['64lmt7']),
                              onConfirm: d,
                              confirmText: c.intl.string(c.t.BddRzc),
                              ...e
                          })
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e]
        ),
        null
    );
};
