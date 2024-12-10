n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(317381),
    h = n(122613),
    m = n(100527),
    p = n(906732),
    g = n(87005),
    f = n(753972),
    _ = n(895924),
    E = n(812236),
    I = n(82295),
    C = n(740492),
    v = n(973616),
    S = n(592125),
    N = n(626135),
    T = n(823379),
    b = n(404295),
    x = n(728345),
    A = n(812206),
    Z = n(981631),
    L = n(388032),
    y = n(914333),
    P = n(312565);
async function O(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, l, a;
            i = null !== (a = null === (r = A.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = v.ZP.createFromServer(await (0, x.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == S.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, m.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (N.default.track(Z.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: l,
                channel_id: r
            }),
            null == r)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, E.ZP)(r, e.id);
        } catch (e) {
            if (e.message === E.sV) {
                t(void 0);
                return;
            }
        }
        await (0, h.Z)({
            targetApplicationId: e.id,
            channelId: r,
            analyticsLocations: n,
            commandOrigin: _.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function R(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        d = (0, o.e7)([S.Z], () => S.Z.getDMFromUserId(l)),
        h = (0, o.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
        m = null != h && h.applicationId === t.id && h.channelId === d,
        p = n === t.id,
        g = null != n;
    return (0, i.jsx)(s.Clickable, {
        className: a()(y.clickable, { [y.disabledClickable]: g }),
        onClick: () => (m || g ? null : O(t, r, c)),
        'aria-label': L.intl.formatToPlainString(L.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(s.Tooltip, {
            tooltipContentClassName: y.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: y.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(f.Z, {
                            application: t,
                            className: y.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        p || m
                            ? (0, i.jsx)(s.Spinner, {
                                  type: s.Spinner.Type.PULSING_ELLIPSIS,
                                  className: y.spinner,
                                  itemClassName: m ? y.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function j(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: y.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                R,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: r,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: l
                },
                e.id
            );
        })
    });
}
let D = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function M() {
    let e = (0, b.en)(m.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: t } = (0, g.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        }),
        [n, l] = r.useState(void 0),
        { analyticsLocations: s } = (0, p.ZP)(m.Z.APP_DMS_QUICK_LAUNCHER),
        c = (0, o.e7)([C.ZP], () => C.ZP.showPlayAgain) && e && t.length > 0,
        [d, u] = r.useState(!1),
        h = r.useMemo(
            () =>
                t
                    .map((e) => e.application)
                    .filter(T.lm)
                    .slice(0, 5),
            [t]
        );
    return (r.useLayoutEffect(() => {
        var e;
        if (!d && !!c) u(!0), N.default.track(Z.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = h.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [c, h, d]),
    c)
        ? (0, i.jsx)(I.Z, {
              className: a()(y.headerContainer, P.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: y.container,
                  onContextMenu: D,
                  children: [
                      (0, i.jsx)('div', {
                          className: y.textContainer,
                          children: (0, i.jsx)('span', {
                              className: P.headerText,
                              children: L.intl.string(L.t.vayAzs)
                          })
                      }),
                      (0, i.jsx)(j, {
                          frecentApps: h,
                          loadingAppId: n,
                          setLoadingAppId: l,
                          analyticsLocations: s
                      })
                  ]
              })
          })
        : null;
}
