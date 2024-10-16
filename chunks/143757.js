n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(317381),
    u = n(122613),
    _ = n(87005),
    E = n(753972),
    h = n(895924),
    m = n(812236),
    I = n(82295),
    p = n(592125),
    g = n(823379),
    T = n(404295),
    S = n(812206),
    f = n(689938),
    C = n(508042),
    N = n(156762);
async function A(e, t) {
    t(e.id);
    let n = e.bot;
    if (null == n) {
        var i;
        n = null === (i = S.Z.getApplication(e.id)) || void 0 === i ? void 0 : i.bot;
    }
    if (null != n) {
        let i = await c.Z.openPrivateChannel([n.id]);
        try {
            await (0, m.ZP)(i, e.id);
        } catch (e) {
            if (e.message === m.sV) {
                t(void 0);
                return;
            }
        }
        await (0, u.Z)({
            targetApplicationId: e.id,
            locationObject: {},
            channelId: i,
            analyticsLocations: [],
            commandOrigin: h.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    }
}
function v(e) {
    let { application: t, loading: n, setLoadingAppId: a, botUserId: s } = e,
        r = (0, l.e7)([p.Z], () => p.Z.getDMFromUserId(s)),
        c = (0, l.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        u = null != c && c.applicationId === t.id && c.channelId === r;
    return (0, i.jsx)(o.Clickable, {
        className: C.clickable,
        onClick: () => (u ? null : A(t, a)),
        'aria-label': f.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: C.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...a } = e;
                return (0, i.jsxs)('div', {
                    className: C.iconContainer,
                    ...a,
                    children: [
                        (0, i.jsx)(E.Z, {
                            application: t,
                            className: C.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        n || u
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: C.spinner,
                                  itemClassName: u ? C.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function Z(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: a } = e;
    return (0, i.jsx)('div', {
        className: C.itemContainer,
        children: t
            .map((e) => e.application)
            .filter(g.lm)
            .slice(0, 5)
            .map((e) => {
                var t;
                return (0, i.jsx)(
                    v,
                    {
                        application: e,
                        loading: n === e.id,
                        setLoadingAppId: a,
                        botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id
                    },
                    e.id
                );
            })
    });
}
function L() {
    let e = (0, T.en)('private-channels'),
        { frecentApps: t } = (0, _.f)({
            channel: void 0,
            onlyActivityApps: !1,
            allowFetch: e
        }),
        [n, s] = a.useState(void 0);
    return e && 0 !== t.length
        ? (0, i.jsx)(
              I.Z,
              {
                  className: r()(C.headerContainer, N.privateChannelsHeaderContainer),
                  children: (0, i.jsxs)('div', {
                      className: C.container,
                      children: [
                          (0, i.jsx)('div', {
                              className: C.textContainer,
                              children: (0, i.jsx)('span', {
                                  className: N.headerText,
                                  children: f.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_APPS
                              })
                          }),
                          (0, i.jsx)(Z, {
                              frecentApps: t,
                              loadingAppId: n,
                              setLoadingAppId: s
                          })
                      ]
                  })
              },
              'dm-quick-launcher'
          )
        : null;
}
