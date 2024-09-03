n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(993365),
    c = n(481060),
    u = n(153867),
    d = n(110924),
    h = n(607070),
    p = n(900211),
    m = n(740492),
    _ = n(871499),
    f = n(402113),
    E = n(592125),
    C = n(271383),
    g = n(944486),
    I = n(594174),
    x = n(585483),
    T = n(51144),
    N = n(566620),
    S = n(317381),
    v = n(619915),
    Z = n(988980),
    A = n(952561),
    M = n(563218),
    b = n(884338),
    R = n(719296),
    L = n(651612),
    j = n(918559),
    O = n(981631),
    P = n(689938),
    y = n(402137);
let D = b.u.SIZE_32,
    k = {
        [j.MI.NO_CHAT]: y.noChat,
        [j.MI.RESIZABLE]: y.resizable
    };
function U(e) {
    var t, n;
    let { maxHeight: s, connectedChannelId: U, renderExternalHeader: w } = e,
        B = (0, A.Z)(),
        H = (0, r.Wu)([S.ZP], () => (null != U ? S.ZP.getEmbeddedActivitiesForChannel(U) : []), [U]),
        G = (0, r.e7)([E.Z], () => E.Z.getChannel(U)),
        V = (0, v.gb)(H),
        F = (0, v.uF)(V),
        W = a.useCallback(() => {
            (0, N.tg)(j.Ez.PIP);
        }, []),
        z = a.useRef(null),
        Y = (0, r.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        K = Y !== j.MI.NO_CHAT,
        [q, X] = a.useState(null !== (t = m.ZP.activityPanelHeight) && void 0 !== t ? t : s),
        Q = a.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        J = a.useRef(null),
        [$, ee] = a.useState({
            width: 0,
            height: 0
        });
    a.useLayoutEffect(() => {
        if (null == J.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            ee({
                width: null !== (n = null === (e = J.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = J.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe(J.current), () => e.disconnect();
    }, []);
    let et = $.width / Math.max($.height, 1) < j.I0,
        en = 0,
        ei = 0,
        ea = (0, Z.Z)(null == B ? void 0 : B.id);
    if (!ea) {
        let e = $.width,
            t = $.height;
        et ? ((t = $.width / j.I0) > $.height && (e = (t = $.height) * j.I0), (ei = ($.height - t) / 2)) : ((e = Math.min($.height * j.I0)) > $.width && (t = (e = $.width) / j.I0), (en = ($.width - e) / 2));
    }
    let es = F.get(null !== (n = null == B ? void 0 : B.id) && void 0 !== n ? n : ''),
        el = (0, r.e7)([g.Z], () => g.Z.getChannelId()),
        er = (0, r.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == G ? [] : Array.from(null !== (e = null == es ? void 0 : es.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => C.ZP.getMember(G.guild_id, e));
            },
            [es, G]
        ),
        eo = a.useMemo(() => {
            let e = new Map();
            return (
                er.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [er]),
        ec = (function (e, t, n) {
            let i = (0, d.Z)(e),
                s = e !== i,
                [l, r] = a.useState(!1);
            a.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (s || l);
            return a.useMemo(() => {
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
        })(K, q, s);
    if (null == B) return null;
    let eu = [];
    null != es &&
        (eu = Array.from(es.embeddedActivity.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ed = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let a = eo.get(e.id),
            s = null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : T.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: s,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, D),
                        alt: s,
                        className: y.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: O.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: l()(y.wrapper, k[Y], e),
                ref: z,
                style: ec,
                children: [
                    null == w ? void 0 : w(),
                    (0, i.jsxs)('div', {
                        className: y.activityPanelContainer,
                        children: [
                            K
                                ? null
                                : (0, i.jsx)('div', {
                                      className: y.header,
                                      children: (0, i.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: y.headerTitle,
                                          children: null == B ? void 0 : B.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: l()(y.activityContainer, { [y.activityContainerNoMargin]: ea }),
                                style: {
                                    paddingLeft: en,
                                    paddingRight: en,
                                    paddingTop: ei,
                                    paddingBottom: ei
                                },
                                ref: J,
                                children: (0, i.jsx)(M.Z, {
                                    className: y.iframe,
                                    embedId: (0, R.Z)(U, B.id)
                                })
                            }),
                            null != el
                                ? (0, i.jsxs)('div', {
                                      className: y.footer,
                                      children: [
                                          (0, i.jsx)(b.Z, {
                                              renderIcon: !1,
                                              users: eu,
                                              size: D,
                                              max: 6,
                                              className: y.userAvatars,
                                              renderUser: (e) => ed(e, G)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: y.footerButtons,
                                              children: [
                                                  (0, i.jsx)(L.Z, {
                                                      channelId: el,
                                                      className: y.circularButton
                                                  }),
                                                  (0, i.jsx)('div', {
                                                      className: y.leaveButtonContainer,
                                                      children: (0, i.jsx)(f.Z, {
                                                          applicationId: B.id,
                                                          channelId: U,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: y.leaveActivityButton
                                                      })
                                                  }),
                                                  (0, i.jsx)(_.d, {
                                                      label: P.Z.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
                                                      onClick: W,
                                                      iconComponent: c.MinimizeIcon,
                                                      themeable: !0,
                                                      className: y.circularButton
                                                  })
                                              ]
                                          }),
                                          (0, i.jsx)('div', { className: y.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    K
                        ? (0, i.jsx)(p.Z, {
                              minHeight: 480,
                              maxHeight: s,
                              resizableNode: z,
                              onResize: (e) => {
                                  x.S.dispatch(O.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), X(e);
                              },
                              onResizeEnd: (e) => {
                                  x.S.dispatch(O.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), Q(e);
                              }
                          })
                        : null
                ]
            })
    });
}
