n.d(t, {
    Z: function () {
        return B;
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
    f = n(411840),
    g = n(871499),
    C = n(402113),
    x = n(592125),
    v = n(271383),
    _ = n(944486),
    I = n(594174),
    E = n(585483),
    b = n(51144),
    Z = n(566620),
    N = n(317381),
    S = n(619915),
    T = n(988980),
    j = n(952561),
    A = n(563218),
    y = n(884338),
    P = n(719296),
    M = n(651612),
    R = n(918559),
    L = n(981631),
    k = n(388032),
    O = n(718691);
let D = y.u.SIZE_32,
    w = {
        [R.MI.NO_CHAT]: O.noChat,
        [R.MI.RESIZABLE]: O.resizable
    };
function B(e) {
    var t, n;
    let { maxHeight: r, connectedChannelId: B, renderExternalHeader: U } = e,
        { groupedButtons: H } = (0, f.Z)({ location: 'ActivityPanelFocusedView' }),
        G = (0, j.Z)(),
        F = (0, s.Wu)([N.ZP], () => (null != B ? N.ZP.getEmbeddedActivitiesForChannel(B) : []), [B]),
        V = (0, s.e7)([x.Z], () => x.Z.getChannel(B)),
        z = (0, S.gb)(F),
        W = (0, S.uF)(z),
        K = l.useCallback(() => {
            (0, Z.tg)(R.Ez.PIP);
        }, []),
        Y = l.useRef(null),
        q = (0, s.e7)([N.ZP], () => N.ZP.getFocusedLayout()),
        X = q !== R.MI.NO_CHAT,
        [J, Q] = l.useState(null !== (t = m.ZP.activityPanelHeight) && void 0 !== t ? t : r),
        $ = l.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ee = l.useRef(null),
        [et, en] = l.useState({
            width: 0,
            height: 0
        });
    l.useLayoutEffect(() => {
        if (null == ee.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            en({
                width: null !== (n = null === (e = ee.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = ee.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe(ee.current), () => e.disconnect();
    }, []);
    let ei = et.width / Math.max(et.height, 1) < R.I0,
        el = 0,
        er = 0,
        ea = (0, T.Z)(null == G ? void 0 : G.id);
    if (!ea) {
        let e = et.width,
            t = et.height;
        ei ? ((t = et.width / R.I0) > et.height && (e = (t = et.height) * R.I0), (er = (et.height - t) / 2)) : ((e = Math.min(et.height * R.I0)) > et.width && (t = (e = et.width) / R.I0), (el = (et.width - e) / 2));
    }
    let es = W.get(null !== (n = null == G ? void 0 : G.id) && void 0 !== n ? n : ''),
        eo = (0, s.e7)([_.Z], () => _.Z.getChannelId()),
        ec = (0, s.Wu)(
            [v.ZP],
            () => {
                var e;
                return null == V ? [] : Array.from(null !== (e = null == es ? void 0 : es.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => v.ZP.getMember(V.guild_id, e));
            },
            [es, V]
        ),
        ed = l.useMemo(() => {
            let e = new Map();
            return (
                ec.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ec]),
        eu = (function (e, t, n) {
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
        })(X, J, r);
    if (null == G) return null;
    let eh = [];
    null != es &&
        (eh = Array.from(es.embeddedActivity.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ep = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let l = ed.get(e.id),
            r = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : b.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: r,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, D),
                        alt: r,
                        className: O.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: L.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a()(O.wrapper, w[q], e),
                ref: Y,
                style: eu,
                children: [
                    null == U ? void 0 : U(),
                    (0, i.jsxs)('div', {
                        className: O.activityPanelContainer,
                        children: [
                            X
                                ? null
                                : (0, i.jsx)('div', {
                                      className: O.header,
                                      children: (0, i.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: O.headerTitle,
                                          children: null == G ? void 0 : G.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: a()(O.activityContainer, { [O.activityContainerNoMargin]: ea }),
                                style: {
                                    paddingLeft: el,
                                    paddingRight: el,
                                    paddingTop: er,
                                    paddingBottom: er
                                },
                                ref: ee,
                                children: (0, i.jsx)(A.Z, {
                                    className: O.iframe,
                                    embedId: (0, P.Z)(B, G.id)
                                })
                            }),
                            null != eo
                                ? (0, i.jsxs)('div', {
                                      className: O.footer,
                                      children: [
                                          (0, i.jsx)(y.Z, {
                                              renderIcon: !1,
                                              users: eh,
                                              size: D,
                                              max: 6,
                                              className: O.userAvatars,
                                              renderUser: (e) => ep(e, V)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: O.footerButtons,
                                              children: [
                                                  H
                                                      ? null
                                                      : (0, i.jsx)(M.Z, {
                                                            channelId: eo,
                                                            className: O.circularButton
                                                        }),
                                                  H
                                                      ? (0, i.jsxs)('div', {
                                                            className: O.buttonSection,
                                                            children: [
                                                                (0, i.jsx)(M.Z, { channelId: eo }),
                                                                (0, i.jsx)(g.d, {
                                                                    label: k.intl.string(k.t.brPQ5e),
                                                                    onClick: K,
                                                                    iconComponent: c.MinimizeIcon,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, i.jsx)('div', {
                                                      className: O.leaveButtonContainer,
                                                      children: (0, i.jsx)(C.Z, {
                                                          applicationId: G.id,
                                                          channelId: B,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: H ? void 0 : O.leaveActivityButton
                                                      })
                                                  }),
                                                  H
                                                      ? null
                                                      : (0, i.jsx)(g.d, {
                                                            label: k.intl.string(k.t.brPQ5e),
                                                            onClick: K,
                                                            iconComponent: c.MinimizeIcon,
                                                            themeable: !0,
                                                            className: O.circularButton
                                                        })
                                              ]
                                          }),
                                          (0, i.jsx)('div', { className: O.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    X
                        ? (0, i.jsx)(p.Z, {
                              minHeight: 480,
                              maxHeight: r,
                              resizableNode: Y,
                              onResize: (e) => {
                                  E.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), Q(e);
                              },
                              onResizeEnd: (e) => {
                                  E.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), $(e);
                              }
                          })
                        : null
                ]
            })
    });
}
