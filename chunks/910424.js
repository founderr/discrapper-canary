n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(572691),
    r = n(287734),
    o = n(872810),
    c = n(40851),
    u = n(382182),
    d = n(199902),
    h = n(592125),
    p = n(585483),
    m = n(915863),
    _ = n(981631),
    f = n(689938),
    E = n(511292);
function g(e) {
    let { isCurrentUser: t, color: n, look: g, applicationStream: C, onAction: I } = e,
        { activeStream: T, watchingOtherStream: x } = (0, s.cj)([d.Z], () => ({
            activeStream: d.Z.getActiveStreamForApplicationStream(C),
            watchingOtherStream:
                null != C &&
                d.Z.getAllActiveStreamsForChannel(C.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== C.ownerId;
                }).length > 0
        })),
        S = (0, s.e7)([h.Z], () => h.Z.getChannel(null == C ? void 0 : C.channelId)),
        [v, N] = (0, u.wq)(S),
        A = (0, c.Aq)(),
        Z = null != T && null != C && T.state !== _.jm8.ENDED && T.ownerId === C.ownerId,
        M = (e) => {
            if (null != C) null == I || I(), r.default.selectVoiceChannel(C.channelId), !Z && (0, o.iV)(C, { forceMultiple: e }), A.dispatch(_.CkL.POPOUT_CLOSE), p.S.dispatch(_.CkL.MODAL_CLOSE), l.Z.popAll();
        };
    if (null == C) return null;
    let b = (0, u.P9)(N);
    t ? (b = f.Z.Messages.WATCH_STREAM_STREAMING) : Z && (b = f.Z.Messages.WATCH_STREAM_WATCHING);
    let R = {
        color: n,
        look: g
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(
                m.Z,
                {
                    disabled: t || Z || !v,
                    onClick: () => M(!1),
                    ...R,
                    fullWidth: !0,
                    children: [
                        (0, i.jsx)(a.ScreenArrowIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.streamIcon
                        }),
                        b
                    ]
                },
                'play'
            ),
            x && !Z
                ? (0, i.jsx)(a.Tooltip, {
                      text: f.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                      children: (e) =>
                          (0, i.jsx)(m.Z, {
                              ...e,
                              onClick: () => {
                                  var t;
                                  null === (t = e.onClick) || void 0 === t || t.call(e), M(!0);
                              },
                              ...R,
                              className: E.iconButton,
                              size: E.iconButtonSize,
                              children: (0, i.jsx)(a.EyePlusIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: E.iconSize
                              })
                          })
                  })
                : null
        ]
    });
}
