n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(653041),
    n(47120),
    n(390547),
    n(733860);
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    c = n(304680),
    d = n(503089),
    u = n(493544),
    m = n(600164),
    p = n(210887),
    h = n(592125),
    g = n(271383),
    f = n(19780),
    y = n(226961),
    b = n(594174),
    S = n(51144),
    v = n(189648),
    C = n(775194),
    D = n(499848),
    F = n(724392),
    R = n(442580),
    E = n(770800),
    Z = n(981631),
    x = n(65154),
    P = n(388032),
    N = n(612547);
let I = (e, t, n) =>
        (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
                children: (0, r.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(s.Avatar, {
                            size: s.AvatarSizes.SIZE_24,
                            src: e.getAvatarURL(n, 24),
                            'aria-label': e.username,
                            className: N.avatar
                        }),
                        (0, r.jsx)('span', {
                            className: N.username,
                            children: null != t ? t : S.ZP.getName(e)
                        })
                    ]
                })
            })
        }),
    j = (e) =>
        (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
                children: (0, r.jsx)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: (0, r.jsx)('span', {
                        className: N.username,
                        children: e
                    })
                })
            })
        });
function T(e, t, n, r, a) {
    let i = [];
    if (null == t) return i;
    let {
        transport: l,
        rtp: { inbound: s, outbound: d },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOD, { context: e })
        }),
        null != l &&
            i.push({
                section: (0, y.J$)(e, Z._s_.TRANSPORT, n),
                label: P.intl.string(P.t.wU9INz),
                element: E.Z,
                elementProps: {
                    context: e,
                    index: n
                }
            }),
        null != d &&
            i.push({
                section: (0, y.J$)(e, Z._s_.OUTBOUND, n),
                label: P.intl.string(P.t['3u0gIC']),
                element: F.Z,
                elementProps: {
                    context: e,
                    index: n
                }
            }),
        null != m &&
            i.push({
                section: (0, y.J$)(e, Z._s_.CAMERA, n),
                label: P.intl.string(P.t['2AGBWF']),
                element: v.Z,
                elementProps: {
                    context: e,
                    index: n,
                    camera: m
                }
            }),
        null != s && !o().isEmpty(s))
    ) {
        let t = [];
        Object.keys(s).forEach((i) => {
            let o = b.default.getUser(i),
                l = g.ZP.getNick(a, i),
                d = (0, y.J$)(e, i, n);
            null != s[i] &&
                s[i].length > 0 &&
                t.push({
                    section: d,
                    label: null != o ? I(o, l, a) : j(null != l ? l : i),
                    ariaLabel: null != o ? o.tag : i,
                    onClick: () => {
                        c.zc(d);
                    },
                    element: D.Z,
                    elementProps: {
                        context: e,
                        index: n,
                        videoStreams: r
                    }
                });
        }),
            t.length > 0 &&
                (i.push({
                    section: u.ID.HEADER,
                    label: P.intl.string(P.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function _() {
    var e, t;
    let { defaultStats: n, streamStats: i } = (0, l.e7)(
            [y.ZP],
            () => ({
                defaultStats: y.ZP.getAllStats(x.Yn.DEFAULT),
                streamStats: y.ZP.getAllStats(x.Yn.STREAM)
            }),
            [],
            l.pF
        ),
        o = (0, l.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())),
        m = null === (e = n.concat(i).find((e) => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare,
        g = null === (t = i.find((e) => null != e.clips)) || void 0 === t ? void 0 : t.clips,
        b = (0, l.e7)([p.Z], () => p.Z.theme),
        S = (0, l.e7)([p.Z], () => (p.Z.darkSidebar ? Z.BRd.DARK : void 0)),
        v = (0, l.e7)([y.ZP], () => y.ZP.getSection()),
        D = (0, l.e7)([y.ZP], () => y.ZP.getVideoStreams()),
        F = (function (e) {
            let { defaultStats: t, streamStats: n, videoStreams: a, screenshare: i, clips: o, channel: l, connectionState: c } = e,
                d = t.flatMap((e, t) => T(x.Yn.DEFAULT, e, t, a, null == l ? void 0 : l.getGuildId())),
                m = n.flatMap((e, t) => T(x.Yn.STREAM, e, t, a, null == l ? void 0 : l.getGuildId())),
                p = [],
                h = [],
                g = { section: u.ID.DIVIDER };
            null != i &&
                (p.push(g),
                p.push({
                    section: Z._s_.SCREENSHARE,
                    label: P.intl.string(P.t['gWbr/f']),
                    element: R.Z,
                    elementProps: { screenshare: i }
                })),
                null != o &&
                    (h.push(g),
                    h.push({
                        section: Z._s_.CLIPS,
                        label: P.intl.string(P.t.MKrFKC),
                        element: C.Z,
                        elementProps: { clips: o }
                    })),
                m.length > 0 && m.unshift(g);
            let f =
                null != l
                    ? [
                          {
                              section: u.ID.CUSTOM,
                              label: 'Channel Name',
                              element: () =>
                                  (0, r.jsx)(s.Heading, {
                                      className: N.channelName,
                                      variant: 'heading-lg/semibold',
                                      children: l.name
                                  })
                          }
                      ]
                    : [];
            return [
                ...f,
                {
                    section: u.ID.CUSTOM,
                    label: 'Connection State',
                    element: () =>
                        (0, r.jsx)(s.Heading, {
                            className: N.channelName,
                            variant: 'heading-md/normal',
                            children: c === Z.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
                        })
                },
                ...d,
                ...m,
                ...p,
                ...h
            ];
        })({
            defaultStats: n,
            streamStats: i,
            videoStreams: D,
            screenshare: m,
            clips: g,
            channel: o,
            connectionState: (0, l.e7)([f.Z], () => f.Z.getState())
        });
    return (
        a.useEffect(
            () => () => {
                c.xv();
            },
            []
        ),
        (0, r.jsx)(d.ZP, {
            theme: b,
            sidebarTheme: S,
            section: v,
            onSetSection: c.zc,
            sections: F
        })
    );
}
