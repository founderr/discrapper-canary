n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(317381),
    u = n(122613),
    h = n(100527),
    m = n(906732),
    p = n(87005),
    g = n(753972),
    f = n(895924),
    _ = n(812236),
    E = n(82295),
    I = n(740492),
    C = n(973616),
    v = n(592125),
    N = n(626135),
    T = n(823379),
    S = n(404295),
    A = n(728345),
    b = n(812206),
    x = n(981631),
    Z = n(388032),
    L = n(762745),
    y = n(470792);
async function O(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, l, a;
            i = null !== (a = null === (r = b.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = C.Z.createFromServer(await (0, A.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == v.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, h.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (N.default.track(x.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
            await (0, _.ZP)(r, e.id);
        } catch (e) {
            if (e.message === _.sV) {
                t(void 0);
                return;
            }
        }
        await (0, u.Z)({
            targetApplicationId: e.id,
            channelId: r,
            analyticsLocations: n,
            commandOrigin: f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function P(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        u = (0, s.e7)([v.Z], () => v.Z.getDMFromUserId(l)),
        h = (0, s.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        m = null != h && h.applicationId === t.id && h.channelId === u,
        p = n === t.id,
        f = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(L.clickable, { [L.disabledClickable]: f }),
        onClick: () => (m || f ? null : O(t, r, c)),
        'aria-label': Z.intl.formatToPlainString(Z.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: L.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: L.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(g.Z, {
                            application: t,
                            className: L.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        p || m
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: L.spinner,
                                  itemClassName: m ? L.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function R(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: L.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                P,
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
function j() {
    let e = (0, S.en)(h.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: t } = (0, p.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        }),
        [n, l] = r.useState(void 0),
        { analyticsLocations: o } = (0, m.ZP)(h.Z.APP_DMS_QUICK_LAUNCHER),
        c = (0, s.e7)([I.ZP], () => I.ZP.showPlayAgain) && e && t.length > 0,
        [d, u] = r.useState(!1),
        g = r.useMemo(
            () =>
                t
                    .map((e) => e.application)
                    .filter(T.lm)
                    .slice(0, 5),
            [t]
        );
    return (r.useLayoutEffect(() => {
        var e;
        if (!d && !!c) u(!0), N.default.track(x.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = g.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [c, g, d]),
    c)
        ? (0, i.jsx)(E.Z, {
              className: a()(L.headerContainer, y.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: L.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: L.textContainer,
                          children: (0, i.jsx)('span', {
                              className: y.headerText,
                              children: Z.intl.string(Z.t.vayAzs)
                          })
                      }),
                      (0, i.jsx)(R, {
                          frecentApps: g,
                          loadingAppId: n,
                          setLoadingAppId: l,
                          analyticsLocations: o
                      })
                  ]
              })
          })
        : null;
}
