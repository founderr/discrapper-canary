n.d(t, {
    Z: function () {
        return P;
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
    T = n(973616),
    S = n(592125),
    C = n(626135),
    f = n(823379),
    N = n(404295),
    A = n(728345),
    v = n(812206),
    Z = n(981631),
    L = n(689938),
    R = n(508042),
    O = n(156762);
async function x(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var a, s, r;
            i = null !== (r = null === (a = v.Z.getApplication(e.id)) || void 0 === a ? void 0 : a.bot) && void 0 !== r ? r : null === (s = T.Z.createFromServer(await (0, A.UM)(e.id))) || void 0 === s ? void 0 : s.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let a,
            s = null == S.Z.getDMFromUserId(i.id);
        try {
            a = await c.Z.openPrivateChannel([i.id], !1, !1, _.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (C.default.track(Z.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: s,
                channel_id: a
            }),
            null == a)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, p.ZP)(a, e.id);
        } catch (e) {
            if (e.message === p.sV) {
                t(void 0);
                return;
            }
        }
        await (0, u.Z)({
            targetApplicationId: e.id,
            channelId: a,
            analyticsLocations: n,
            commandOrigin: I.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function b(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: a, botUserId: s, analyticsLocations: c } = e,
        u = (0, l.e7)([S.Z], () => S.Z.getDMFromUserId(s)),
        _ = (0, l.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        E = null != _ && _.applicationId === t.id && _.channelId === u,
        h = n === t.id,
        I = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: r()(R.clickable, { [R.disabledClickable]: I }),
        onClick: () => (E || I ? null : x(t, a, c)),
        'aria-label': L.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: R.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: R.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(m.Z, {
                            application: t,
                            className: R.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        h || E
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: R.spinner,
                                  itemClassName: E ? R.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function M(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: a, analyticsLocations: s } = e;
    return (0, i.jsx)('div', {
        className: R.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                b,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: a,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: s
                },
                e.id
            );
        })
    });
}
function P() {
    let e = (0, N.en)(_.Z.APP_DMS_QUICK_LAUNCHER),
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
        if (!c && !!o) d(!0), C.default.track(Z.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [o, u, c]),
    o)
        ? (0, i.jsx)(g.Z, {
              className: r()(R.headerContainer, O.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: R.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: R.textContainer,
                          children: (0, i.jsx)('span', {
                              className: O.headerText,
                              children: L.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_APPS
                          })
                      }),
                      (0, i.jsx)(M, {
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
