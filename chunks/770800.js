n(571269), n(298267);
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(600164),
    d = n(19780),
    u = n(226961),
    m = n(914010),
    p = n(959457),
    h = n(246946),
    g = n(594174),
    f = n(5192),
    C = n(476221),
    y = n(481250),
    S = n(206314),
    D = n(513547),
    R = n(65154),
    b = n(689938),
    E = n(701491),
    v = n(113207);
class F extends a.PureComponent {
    render() {
        let { transport: e, mediaSessionId: t, hidePersonalInformation: n, hostname: a } = this.props;
        if (null == e) return (0, r.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
        let i = {
                ...e,
                hostname: a
            },
            s = o().map(i, (e, t) => {
                if ('receiverReports' !== t && (!n || 'localAddress' !== t))
                    return (0, r.jsx)(
                        D.ck,
                        {
                            label: t,
                            value: e
                        },
                        t
                    );
            }),
            d = o().map(i.receiverReports, (e) => {
                let t = Array.isArray(e.bitrate) ? (null === (r = e.bitrate.at(-1)) || void 0 === r ? void 0 : r.value) : e.bitrate,
                    n = g.default.getUser(e.id);
                var r,
                    a = f.ZP.getNickname(m.Z.getGuildId(), void 0, n);
                return (
                    null == a && (a = null != n ? n.username : e.id),
                    {
                        displayName: a,
                        bitrate: t / 1000,
                        lost: (100 * e.fractionLost) / 256
                    }
                );
            }),
            u = o().sortBy(d, (e) => e.displayName),
            p = o().map(u, (e) =>
                (function (e, t, n) {
                    let a = (0, r.jsxs)(c.Z, {
                            id: 'bitrate-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Bitrate:' }),
                                (0, r.jsxs)('span', {
                                    children: [t.toFixed(2), ' Kbps']
                                })
                            ]
                        }),
                        i = (0, r.jsxs)(c.Z, {
                            id: 'lost-'.concat(e),
                            justify: c.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)('span', { children: 'Packet Loss:' }),
                                (0, r.jsxs)('span', {
                                    children: [n.toFixed(0), '%']
                                })
                            ]
                        });
                    return (0, r.jsx)(
                        S.Z,
                        {
                            label: e,
                            valueRendered: [a, i],
                            children: e
                        },
                        e
                    );
                })(e.displayName, e.bitrate, e.lost)
            );
        return (0, r.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: b.Z.Messages.RTC_DEBUG_TRANSPORT + (null != t ? ' - ' + t : ''),
            className: E.allowSelection,
            children: [(0, y.a)(s), 0 === p.length ? null : (0, r.jsx)(l.FormDivider, { className: v.marginBottom20 }), (0, y.a)(p)]
        });
    }
}
t.Z = s.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
    let { context: t, index: n } = e,
        r = u.ZP.getAllStats(t)[n],
        a = t === R.Yn.STREAM ? p.Z.getHostname(p.Z.getActiveStreamKey()) : d.Z.getHostname();
    return {
        hidePersonalInformation: h.Z.hidePersonalInformation,
        transport: null != r ? r.transport : null,
        mediaSessionId: d.Z.getMediaSessionId(),
        hostname: C.Z.getShortHostname(a)
    };
})(F);
