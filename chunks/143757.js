n.d(t, {
    Z: function () {
        return v;
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
    f = n(812206),
    S = n(689938),
    C = n(508042),
    N = n(156762);
async function A(e, t) {
    t(e.id);
    let n = e.bot;
    if (null == n) {
        var i;
        n = null === (i = f.Z.getApplication(e.id)) || void 0 === i ? void 0 : i.bot;
    }
    if (null != n) {
        let i = await c.Z.openPrivateChannel([n.id]);
        await (0, m.ZP)(i, e.id),
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
function v() {
    let e = (0, T.en)('private-channels'),
        { loading: t, frecentApps: n } = (0, _.f)(void 0, !1),
        [s, c] = a.useState(void 0),
        u = (0, l.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        h = a.useMemo(
            () =>
                n
                    .map((e) => e.application)
                    .filter(g.lm)
                    .map((e) => {
                        var t;
                        return (function (e, t, n, a, s) {
                            let r = null != a && a.applicationId === e.id && a.channelId === s;
                            return (0, i.jsx)(o.Clickable, {
                                className: C.clickable,
                                onClick: () => (r ? null : A(e, n)),
                                'aria-label': S.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                                    applicationName: e.name,
                                    applicationDescription: e.description
                                }),
                                children: (0, i.jsx)(o.Tooltip, {
                                    tooltipContentClassName: C.tooltipContent,
                                    text: e.name,
                                    children: (n) => {
                                        let { ...a } = n;
                                        return (0, i.jsxs)('div', {
                                            className: C.iconContainer,
                                            ...a,
                                            children: [
                                                (0, i.jsx)(E.Z, {
                                                    application: e,
                                                    className: C.iconCard,
                                                    'aria-hidden': !0,
                                                    rendersPlaceholder: !0
                                                }),
                                                t || r
                                                    ? (0, i.jsx)(o.Spinner, {
                                                          type: o.Spinner.Type.PULSING_ELLIPSIS,
                                                          className: C.spinner,
                                                          itemClassName: r ? C.spinnerInnerRunning : void 0
                                                      })
                                                    : null
                                            ]
                                        });
                                    }
                                })
                            });
                        })(e, s === e.id, c, u, p.Z.getDMFromUserId(null === (t = e.bot) || void 0 === t ? void 0 : t.id));
                    })
                    .slice(0, 5),
            [n, s, u]
        );
    return !e || t.current || 0 === h.length
        ? null
        : (0, i.jsx)(
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
                                  children: S.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_APPS
                              })
                          }),
                          (0, i.jsx)('div', {
                              className: C.itemContainer,
                              children: h
                          })
                      ]
                  })
              },
              'dm-quick-launcher'
          );
}
