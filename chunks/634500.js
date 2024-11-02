n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(923928),
    u = n(468026),
    c = n(269647),
    d = n(981631),
    f = n(388032);
function _() {
    let e = (0, a.e7)([c.Z], () => c.Z.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.closeModal)(t.current), (t.current = null));
    }
    function _() {
        l.Z.clearVADWarning();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, s.openModal)((e) =>
                          (0, r.jsx)(u.default, {
                              title: f.intl.string(f.t.NYklho),
                              body: f.intl.string(f.t.EJ26Oj),
                              onCancel: _,
                              cancelText: f.intl.string(f.t.UYW0d3),
                              confirmText: f.intl.string(f.t.E3Y7ND),
                              onConfirm: () => {
                                  o.Z.setMode(d.pM4.PUSH_TO_TALK), _();
                              },
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
}
