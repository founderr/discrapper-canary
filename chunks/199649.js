n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(194359),
    r = n(631937),
    o = n(702321),
    c = n(377171),
    u = n(699516),
    d = n(626135),
    h = n(63063),
    p = n(862679),
    m = n(981631),
    _ = n(596401),
    f = n(689938);
function E(e) {
    let { channel: t, children: E } = e,
        g = (0, s.e7)([u.Z], () => u.Z.isBlocked(t.getRecipientId()));
    (0, r.Z)(t.id);
    let C = (0, o.Z)(t.id),
        I = t.isSystemDM(),
        T = g && !I && !t.isMultiUserDM(),
        x = {};
    if (I) {
        let e = C
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      f.Z.Messages.SYSTEM_DM_OPEN_BLOG,
                      (0, i.jsx)(a.WindowLaunchIcon, {
                          size: 'xs',
                          color: c.Z.HEADER_PRIMARY
                      })
                  ]
              })
            : f.Z.Messages.LEARN_MORE;
        (x.message = f.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION),
            (x.subtitle = f.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT),
            (x.buttonText = e),
            (x.onButtonClick = () => {
                if (C) {
                    open(_.D2),
                        d.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: _.D2
                        });
                    return;
                }
                open(h.Z.getArticleURL(m.BhN.SYSTEM_DMS));
            }),
            (x.imageSrc = n(780961));
    } else
        T &&
            ((x.message = f.Z.Messages.DM_VERIFICATION_TEXT_BLOCKED),
            (x.buttonText = f.Z.Messages.UNBLOCK),
            (x.onButtonClick = () => {
                l.Z.unblockUser(t.getRecipientId());
            }));
    return (0, i.jsx)(p.Z, {
        ...x,
        children: E
    });
}
