n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(780384),
    s = n(481060),
    o = n(332148),
    c = n(198620),
    d = n(624453),
    u = n(306680),
    h = n(494404),
    p = n(257559),
    m = n(388032);
let f = [];
function g(e) {
    let { channel: t, onJump: g } = e,
        { messages: C, loading: x } = (0, r.cj)([d.Z], () => {
            let e = d.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : f;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        _ = (0, r.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id));
    return (
        l.useEffect(() => {
            C.some(c.k5) && o.Z.fetchPins(t.id, !0);
        }, []),
        l.useEffect(() => {
            _ && o.Z.ackPins(t.id);
        }, [_, t.id]),
        (0, i.jsx)(s.Dialog, {
            'aria-label': m.intl.string(m.t['mp1N//']),
            children: (0, i.jsx)(h.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: C,
                loading: x,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : p.Z.confirmUnpin(t, e));
                },
                onJump: g,
                getProTip: function () {
                    return t.isPrivate() ? m.intl.string(m.t['3dLGAg']) : m.intl.string(m.t.KTbRcn);
                },
                renderHeader: () =>
                    (0, i.jsx)(h.h4, {
                        icon: s.PinIcon,
                        title: m.intl.string(m.t['mp1N//'])
                    }),
                renderEmptyState: function (e) {
                    let l = m.intl.string(m.t.fmyaWF);
                    t.isPrivate() && (l = m.intl.string(m.t.rhqcbG));
                    let r = (0, a.ap)(e) ? n(306059) : n(281485);
                    return (0, i.jsx)(
                        h.nH,
                        {
                            msg: l,
                            image: r
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
