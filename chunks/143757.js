n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(317381),
    u = n(122613),
    _ = n(100527),
    E = n(906732),
    h = n(87005),
    m = n(753972),
    I = n(895924),
    p = n(812236),
    g = n(82295),
    T = n(592125),
    S = n(626135),
    f = n(823379),
    C = n(404295),
    N = n(812206),
    A = n(981631),
    v = n(689938),
    Z = n(508042),
    L = n(156762);
async function R(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i) {
        var a;
        i = null === (a = N.Z.getApplication(e.id)) || void 0 === a ? void 0 : a.bot;
    }
    if (null != i) {
        let a = null == T.Z.getDMFromUserId(i.id),
            s = await c.Z.openPrivateChannel([i.id], !1, !1, _.Z.APP_DMS_QUICK_LAUNCHER);
        S.default.track(A.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
            application_id: e.id,
            is_new_dm: a,
            channel_id: s
        });
        try {
            await (0, p.ZP)(s, e.id);
        } catch (e) {
            if (e.message === p.sV) {
                t(void 0);
                return;
            }
        }
        await (0, u.Z)({
            targetApplicationId: e.id,
            channelId: s,
            analyticsLocations: n,
            commandOrigin: I.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    }
}
function O(e) {
    let { application: t, loading: n, setLoadingAppId: a, botUserId: s, analyticsLocations: r } = e,
        c = (0, l.e7)([T.Z], () => T.Z.getDMFromUserId(s)),
        u = (0, l.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        _ = null != u && u.applicationId === t.id && u.channelId === c;
    return (0, i.jsx)(o.Clickable, {
        className: Z.clickable,
        onClick: () => (_ ? null : R(t, a, r)),
        'aria-label': v.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: Z.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...a } = e;
                return (0, i.jsxs)('div', {
                    className: Z.iconContainer,
                    ...a,
                    children: [
                        (0, i.jsx)(m.Z, {
                            application: t,
                            className: Z.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        n || _
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: Z.spinner,
                                  itemClassName: _ ? Z.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function x(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: a, analyticsLocations: s } = e;
    return (0, i.jsx)('div', {
        className: Z.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                O,
                {
                    application: e,
                    loading: n === e.id,
                    setLoadingAppId: a,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: s
                },
                e.id
            );
        })
    });
}
function b() {
    let e = (0, C.en)(_.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: t } = (0, h.f)({
            channel: void 0,
            onlyActivityApps: !1,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        }),
        [n, s] = a.useState(void 0),
        { analyticsLocations: l } = (0, E.ZP)(_.Z.APP_DMS_QUICK_LAUNCHER),
        o = e && t.length > 0,
        [c, d] = a.useState(!1),
        u = a.useMemo(
            () =>
                t
                    .map((e) => e.application)
                    .filter(f.lm)
                    .slice(0, 5),
            [t]
        );
    return (a.useLayoutEffect(() => {
        var e;
        if (!c && !!o) d(!0), S.default.track(A.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [o, u, c]),
    o)
        ? (0, i.jsx)(g.Z, {
              className: r()(Z.headerContainer, L.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: Z.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: Z.textContainer,
                          children: (0, i.jsx)('span', {
                              className: L.headerText,
                              children: v.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_APPS
                          })
                      }),
                      (0, i.jsx)(x, {
                          frecentApps: u,
                          loadingAppId: n,
                          setLoadingAppId: s,
                          analyticsLocations: l
                      })
                  ]
              })
          })
        : null;
}
