r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(846027),
    u = r(923928),
    c = r(468026),
    d = r(269647),
    f = r(981631),
    _ = r(388032);
function h() {
    let e = (0, s.e7)([d.Z], () => d.Z.shouldShowWarning(), []),
        n = a.useRef(null);
    function r() {
        null !== n.current && ((0, o.closeModal)(n.current), (n.current = null));
    }
    function h() {
        u.Z.clearVADWarning();
    }
    return (
        a.useEffect(
            () => (
                e
                    ? (n.current = (0, o.openModal)((e) =>
                          (0, i.jsx)(c.default, {
                              title: _.intl.string(_.t.NYklho),
                              body: _.intl.string(_.t.EJ26Oj),
                              onCancel: h,
                              cancelText: _.intl.string(_.t.UYW0d3),
                              confirmText: _.intl.string(_.t.E3Y7ND),
                              onConfirm: () => {
                                  l.Z.setMode(f.pM4.PUSH_TO_TALK), h();
                              },
                              ...e
                          })
                      ))
                    : r(),
                () => {
                    r();
                }
            ),
            [e]
        ),
        null
    );
}
