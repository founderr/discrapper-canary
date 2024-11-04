n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(780384),
    a = n(481060),
    o = n(332148),
    c = n(198620),
    u = n(624453),
    d = n(306680),
    h = n(494404),
    m = n(257559),
    p = n(388032);
let f = [];
function g(e) {
    let { channel: t, onJump: g } = e,
        { messages: C, loading: x } = (0, r.cj)([u.Z], () => {
            let e = u.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : f;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        v = (0, r.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id));
    return (
        l.useEffect(() => {
            C.some(c.k5) && o.Z.fetchPins(t.id, !0);
        }, []),
        l.useEffect(() => {
            v && o.Z.ackPins(t.id);
        }, [v, t.id]),
        (0, i.jsx)(a.Dialog, {
            'aria-label': p.intl.string(p.t['mp1N//']),
            children: (0, i.jsx)(h.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: C,
                loading: x,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : m.Z.confirmUnpin(t, e));
                },
                onJump: g,
                getProTip: function () {
                    return t.isPrivate() ? p.intl.string(p.t['3dLGAg']) : p.intl.string(p.t.KTbRcn);
                },
                renderHeader: () =>
                    (0, i.jsx)(h.h4, {
                        icon: a.PinIcon,
                        title: p.intl.string(p.t['mp1N//'])
                    }),
                renderEmptyState: function (e) {
                    let l = p.intl.string(p.t.fmyaWF);
                    t.isPrivate() && (l = p.intl.string(p.t.rhqcbG));
                    let r = (0, s.ap)(e) ? n(306059) : n(281485);
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
