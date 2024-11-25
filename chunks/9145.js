n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(993365),
    c = n(481060),
    d = n(153867),
    u = n(110924),
    h = n(607070),
    p = n(900211),
    m = n(740492),
    f = n(871499),
    g = n(402113),
    C = n(592125),
    x = n(271383),
    _ = n(944486),
    v = n(594174),
    I = n(585483),
    E = n(51144),
    b = n(566620),
    N = n(317381),
    Z = n(619915),
    S = n(988980),
    T = n(952561),
    j = n(563218),
    A = n(884338),
    y = n(719296),
    P = n(651612),
    M = n(918559),
    R = n(981631),
    L = n(388032),
    k = n(718691);
let O = A.u.SIZE_32,
    D = {
        [M.MI.NO_CHAT]: k.noChat,
        [M.MI.RESIZABLE]: k.resizable
    };
function w(e) {
    var t, n;
    let { maxHeight: r, connectedChannelId: w, renderExternalHeader: B } = e,
        U = (0, T.Z)(),
        H = (0, s.Wu)([N.ZP], () => (null != w ? N.ZP.getEmbeddedActivitiesForChannel(w) : []), [w]),
        G = (0, s.e7)([C.Z], () => C.Z.getChannel(w)),
        F = (0, Z.gb)(H),
        V = (0, Z.uF)(F),
        z = l.useCallback(() => {
            (0, b.tg)(M.Ez.PIP);
        }, []),
        W = l.useRef(null),
        K = (0, s.e7)([N.ZP], () => N.ZP.getFocusedLayout()),
        Y = K !== M.MI.NO_CHAT,
        [q, X] = l.useState(null !== (t = m.ZP.activityPanelHeight) && void 0 !== t ? t : r),
        J = l.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        Q = l.useRef(null),
        [$, ee] = l.useState({
            width: 0,
            height: 0
        });
    l.useLayoutEffect(() => {
        if (null == Q.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            ee({
                width: null !== (n = null === (e = Q.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = Q.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe(Q.current), () => e.disconnect();
    }, []);
    let et = $.width / Math.max($.height, 1) < M.I0,
        en = 0,
        ei = 0,
        el = (0, S.Z)(null == U ? void 0 : U.id);
    if (!el) {
        let e = $.width,
            t = $.height;
        et ? ((t = $.width / M.I0) > $.height && (e = (t = $.height) * M.I0), (ei = ($.height - t) / 2)) : ((e = Math.min($.height * M.I0)) > $.width && (t = (e = $.width) / M.I0), (en = ($.width - e) / 2));
    }
    let er = V.get(null !== (n = null == U ? void 0 : U.id) && void 0 !== n ? n : ''),
        ea = (0, s.e7)([_.Z], () => _.Z.getChannelId()),
        es = (0, s.Wu)(
            [x.ZP],
            () => {
                var e;
                return null == G ? [] : Array.from(null !== (e = null == er ? void 0 : er.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => x.ZP.getMember(G.guild_id, e));
            },
            [er, G]
        ),
        eo = l.useMemo(() => {
            let e = new Map();
            return (
                es.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [es]),
        ec = (function (e, t, n) {
            let i = (0, u.Z)(e),
                r = e !== i,
                [a, s] = l.useState(!1);
            l.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (r || a);
            return l.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t
                    ? {
                          ...i,
                          minHeight: 200,
                          maxHeight: n,
                          height: t
                      }
                    : i;
            }, [o, e, n, t]);
        })(Y, q, r);
    if (null == U) return null;
    let ed = [];
    null != er &&
        (ed = Array.from(er.embeddedActivity.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eu = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let l = eo.get(e.id),
            r = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : E.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: r,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, O),
                        alt: r,
                        className: k.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: R.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a()(k.wrapper, D[K], e),
                ref: W,
                style: ec,
                children: [
                    null == B ? void 0 : B(),
                    (0, i.jsxs)('div', {
                        className: k.activityPanelContainer,
                        children: [
                            Y
                                ? null
                                : (0, i.jsx)('div', {
                                      className: k.header,
                                      children: (0, i.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: k.headerTitle,
                                          children: null == U ? void 0 : U.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: a()(k.activityContainer, { [k.activityContainerNoMargin]: el }),
                                style: {
                                    paddingLeft: en,
                                    paddingRight: en,
                                    paddingTop: ei,
                                    paddingBottom: ei
                                },
                                ref: Q,
                                children: (0, i.jsx)(j.Z, {
                                    className: k.iframe,
                                    embedId: (0, y.Z)(w, U.id)
                                })
                            }),
                            null != ea
                                ? (0, i.jsxs)('div', {
                                      className: k.footer,
                                      children: [
                                          (0, i.jsx)(A.Z, {
                                              renderIcon: !1,
                                              users: ed,
                                              size: O,
                                              max: 6,
                                              className: k.userAvatars,
                                              renderUser: (e) => eu(e, G)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: k.footerButtons,
                                              children: [
                                                  (0, i.jsx)(P.Z, {
                                                      channelId: ea,
                                                      className: k.circularButton
                                                  }),
                                                  (0, i.jsx)('div', {
                                                      className: k.leaveButtonContainer,
                                                      children: (0, i.jsx)(g.Z, {
                                                          applicationId: U.id,
                                                          channelId: w,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: k.leaveActivityButton
                                                      })
                                                  }),
                                                  (0, i.jsx)(f.d, {
                                                      label: L.intl.string(L.t.brPQ5e),
                                                      onClick: z,
                                                      iconComponent: c.MinimizeIcon,
                                                      themeable: !0,
                                                      className: k.circularButton
                                                  })
                                              ]
                                          }),
                                          (0, i.jsx)('div', { className: k.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    Y
                        ? (0, i.jsx)(p.Z, {
                              minHeight: 480,
                              maxHeight: r,
                              resizableNode: W,
                              onResize: (e) => {
                                  I.S.dispatch(R.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), X(e);
                              },
                              onResizeEnd: (e) => {
                                  I.S.dispatch(R.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), J(e);
                              }
                          })
                        : null
                ]
            })
    });
}
