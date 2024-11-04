n.d(t, {
    q: function () {
        return g;
    },
    s: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(367907),
    c = n(626135),
    u = n(346479),
    d = n(665906),
    h = n(981631),
    m = n(388032),
    p = n(314633);
function f(e) {
    let { channel: t, narrow: n } = e,
        r = (0, d.tc)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: s()(p.chatHeaderBar, { [p.narrow]: n }),
            children: [
                (0, i.jsx)(a.Text, {
                    className: p.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? m.intl.string(m.t['833FDg']) : m.intl.string(m.t.rEeodH)
                }),
                r
                    ? (0, i.jsx)(a.Button, {
                          size: n ? a.Button.Sizes.SMALL : a.Button.Sizes.TINY,
                          className: p.chatHeaderBarButton,
                          color: a.Button.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, o.hH)(t.getGuildId()),
                                  ...(0, o.v_)(t),
                                  banner_type: 'thread',
                                  cta_type: 'unarchive'
                              }),
                                  u.Z.unarchiveThread(t, !1);
                          },
                          children: m.intl.string(m.t['0dvvEh'])
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { channel: t, narrow: n } = e,
        r = (0, d.Xb)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: s()(p.chatHeaderBar, { [p.narrow]: n }),
            children: [
                (0, i.jsx)(a.Text, {
                    className: p.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? m.intl.string(m.t.E7oO8v) : m.intl.string(m.t['V/JF2N'])
                }),
                r
                    ? (0, i.jsx)(a.Button, {
                          size: n ? a.Button.Sizes.SMALL : a.Button.Sizes.TINY,
                          className: p.chatHeaderBarButton,
                          color: a.Button.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, o.hH)(t.getGuildId()),
                                  ...(0, o.v_)(t),
                                  banner_type: 'thread',
                                  cta_type: 'unlock'
                              }),
                                  u.Z.unlockThread(t);
                          },
                          children: m.intl.string(m.t.zA9d1N)
                      })
                    : null
            ]
        })
    );
}
