n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(194359),
    s = n(631937),
    o = n(702321),
    c = n(377171),
    d = n(699516),
    u = n(626135),
    h = n(63063),
    p = n(862679),
    m = n(981631),
    f = n(596401),
    g = n(388032);
function C(e) {
    let { channel: t, children: C } = e,
        x = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.getRecipientId()));
    (0, s.Z)(t.id);
    let v = (0, o.Z)(t.id),
        _ = t.isSystemDM(),
        I = x && !_ && !t.isMultiUserDM(),
        E = {};
    if (_) {
        let e = v
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      g.intl.string(g.t['+KSnWV']),
                      (0, i.jsx)(a.WindowLaunchIcon, {
                          size: 'xs',
                          color: c.Z.HEADER_PRIMARY
                      })
                  ]
              })
            : g.intl.string(g.t.hvVgAQ);
        (E.message = g.intl.string(g.t.Bt2N7O)),
            (E.subtitle = g.intl.string(g.t['n/Vzk5'])),
            (E.buttonText = e),
            (E.onButtonClick = () => {
                if (v) {
                    open(f.D2),
                        u.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: f.D2
                        });
                    return;
                }
                open(h.Z.getArticleURL(m.BhN.SYSTEM_DMS));
            }),
            (E.imageSrc = n(780961));
    } else
        I &&
            ((E.message = g.intl.string(g.t['9T6N5+'])),
            (E.buttonText = g.intl.string(g.t.XyHpKC)),
            (E.onButtonClick = () => {
                r.Z.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(p.Z, {
        ...E,
        children: C
    });
}
