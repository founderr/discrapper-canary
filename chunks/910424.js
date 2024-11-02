n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(572691),
    s = n(287734),
    o = n(872810),
    c = n(40851),
    u = n(382182),
    d = n(199902),
    h = n(592125),
    m = n(585483),
    p = n(915863),
    f = n(981631),
    g = n(388032),
    C = n(511292);
function x(e) {
    let { isCurrentUser: t, color: n, look: x, applicationStream: v, onAction: _ } = e,
        { activeStream: I, watchingOtherStream: E } = (0, l.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(v),
            watchingOtherStream:
                null != v &&
                d.Z.getAllActiveStreamsForChannel(v.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== v.ownerId;
                }).length > 0
        })),
        b = (0, l.e7)([h.Z], () => h.Z.getChannel(null == v ? void 0 : v.channelId)),
        [S, Z] = (0, u.wq)(b),
        T = (0, c.Aq)(),
        N = null != I && null != v && I.state !== f.jm8.ENDED && I.ownerId === v.ownerId,
        j = (e) => {
            if (null != v) null == _ || _(), s.default.selectVoiceChannel(v.channelId), !N && (0, o.iV)(v, { forceMultiple: e }), T.dispatch(f.CkL.POPOUT_CLOSE), m.S.dispatch(f.CkL.MODAL_CLOSE), a.Z.popAll();
        };
    if (null == v) return null;
    let A = (0, u.P9)(Z);
    t ? (A = g.intl.string(g.t.XvBdeX)) : N && (A = g.intl.string(g.t.JH1SJy));
    let y = {
        color: n,
        look: x
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(
                p.Z,
                {
                    disabled: t || N || !S,
                    onClick: () => j(!1),
                    ...y,
                    fullWidth: !0,
                    children: [
                        (0, i.jsx)(r.ScreenArrowIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.streamIcon
                        }),
                        A
                    ]
                },
                'play'
            ),
            E && !N
                ? (0, i.jsx)(r.Tooltip, {
                      text: g.intl.string(g.t.wCrzur),
                      children: (e) =>
                          (0, i.jsx)(p.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), j(!0);
                              },
                              ...y,
                              className: C.iconButton,
                              size: C.iconButtonSize,
                              children: (0, i.jsx)(r.EyePlusIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.iconSize
                              })
                          })
                  })
                : null
        ]
    });
}
