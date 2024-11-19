n.d(t, {
    Z: function () {
        return R;
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
    I = n(973616),
    C = n(592125),
    v = n(626135),
    N = n(823379),
    T = n(404295),
    S = n(728345),
    A = n(812206),
    b = n(981631),
    x = n(388032),
    Z = n(762745),
    L = n(470792);
async function y(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, l, a;
            i = null !== (a = null === (r = A.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = I.Z.createFromServer(await (0, S.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == C.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, h.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (v.default.track(b.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
function O(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        u = (0, s.e7)([C.Z], () => C.Z.getDMFromUserId(l)),
        h = (0, s.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        m = null != h && h.applicationId === t.id && h.channelId === u,
        p = n === t.id,
        f = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(Z.clickable, { [Z.disabledClickable]: f }),
        onClick: () => (m || f ? null : y(t, r, c)),
        'aria-label': x.intl.formatToPlainString(x.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: Z.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: Z.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(g.Z, {
                            application: t,
                            className: Z.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        p || m
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: Z.spinner,
                                  itemClassName: m ? Z.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function P(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: Z.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                O,
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
function R() {
    let e = (0, T.en)(h.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: t } = (0, p.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        }),
        [n, l] = r.useState(void 0),
        { analyticsLocations: s } = (0, m.ZP)(h.Z.APP_DMS_QUICK_LAUNCHER),
        o = e && t.length > 0,
        [c, d] = r.useState(!1),
        u = r.useMemo(
            () =>
                t
                    .map((e) => e.application)
                    .filter(N.lm)
                    .slice(0, 5),
            [t]
        );
    return (r.useLayoutEffect(() => {
        var e;
        if (!c && !!o) d(!0), v.default.track(b.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
    }, [o, u, c]),
    o)
        ? (0, i.jsx)(E.Z, {
              className: a()(Z.headerContainer, L.privateChannelsHeaderContainer),
              children: (0, i.jsxs)('div', {
                  className: Z.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: Z.textContainer,
                          children: (0, i.jsx)('span', {
                              className: L.headerText,
                              children: x.intl.string(x.t.vayAzs)
                          })
                      }),
                      (0, i.jsx)(P, {
                          frecentApps: u,
                          loadingAppId: n,
                          setLoadingAppId: l,
                          analyticsLocations: s
                      })
                  ]
              })
          })
        : null;
}
