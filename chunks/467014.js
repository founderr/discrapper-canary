n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(433355),
    o = n(189432),
    c = n(356778),
    u = n(776767),
    d = n(50493),
    h = n(388032),
    m = n(194898);
function p(e) {
    let { userId: t, guildId: n } = e,
        p = (0, r.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: f, linksCount: g, mediaCount: C } = (0, c.P2)(t, n),
        x = new Intl.NumberFormat(h.intl.currentLocale).format(f),
        v = new Intl.NumberFormat(h.intl.currentLocale).format(g),
        _ = new Intl.NumberFormat(h.intl.currentLocale).format(C),
        I = l.useCallback(
            async (e) => {
                if (null == p) return;
                let i = (0, c.Ow)(t, e);
                await (0, o.r)(n, t, p.baseChannelId, {
                    modViewPanel: d.k.MESSAGE_HISTORY,
                    additionalSearchQuery: i
                });
            },
            [n, p, t]
        );
    return (0, i.jsx)(s.FormItem, {
        title: h.intl.string(h.t.vCn2Tk),
        titleClassName: m.infoTitle,
        children: (0, i.jsxs)(u.WM, {
            children: [
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t.OIgYlZ)
                    }),
                    description:
                        f === c.II
                            ? (0, i.jsx)(s.Spinner, {
                                  type: s.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: x
                              }),
                    onNavigate: f > 0 ? () => I(c.mw.MESSAGES) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.LinkIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t.DFSvTk)
                    }),
                    description:
                        g === c.II
                            ? (0, i.jsx)(s.Spinner, {
                                  type: s.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: v
                              }),
                    onNavigate: g > 0 ? () => I(c.mw.LINKS) : void 0
                }),
                (0, i.jsx)(u._2, {
                    icon: (0, i.jsx)(s.ImagesIcon, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t['Aw9+/P'])
                    }),
                    description:
                        C === c.II
                            ? (0, i.jsx)(s.Spinner, {
                                  type: s.SpinnerTypes.SPINNING_CIRCLE,
                                  className: m.loadingSpinner
                              })
                            : (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: _
                              }),
                    onNavigate: C > 0 ? () => I(c.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
