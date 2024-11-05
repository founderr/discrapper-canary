n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(2052),
    s = n(317381),
    c = n(638880),
    d = n(122613),
    u = n(527805),
    m = n(884338),
    h = n(100527),
    f = n(906732),
    p = n(895924),
    g = n(973616),
    _ = n(314897),
    C = n(592125),
    E = n(158776),
    I = n(594174),
    x = n(823379),
    v = n(226378),
    N = n(701488),
    T = n(388032),
    S = n(211655);
function b(e) {
    var t;
    let { application: n, channelId: b, guildId: A } = e,
        { analyticsLocations: j } = (0, f.ZP)(h.Z.ACTIVITY_INSTANCE_EMBED),
        Z = (0, o.O)(),
        R = (0, l.e7)([C.Z], () => C.Z.getChannel(b)),
        P = (null == R ? void 0 : null === (t = R.isThread) || void 0 === t ? void 0 : t.call(R)) ? (null == R ? void 0 : R.parent_id) : b,
        y = (0, l.e7)([_.default], () => _.default.getId()),
        {
            embeddedActivity: L,
            currentEmbeddedActivity: O,
            activityLaunchState: M
        } = (0, l.cj)([s.ZP], () => ({
            embeddedActivity: s.ZP.getEmbeddedActivitiesForChannel(null != P ? P : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: s.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: s.ZP.getLaunchState(n.id, null != P ? P : void 0)
        })),
        k = (0, l.Wu)([I.default], () => {
            var e;
            return Array.from(null !== (e = null == L ? void 0 : L.userIds) && void 0 !== e ? e : [])
                .map((e) => I.default.getUser(e))
                .filter(x.lm);
        }),
        D = (0, l.e7)([E.Z], () => {
            var e;
            let t = null == L ? void 0 : L.userIds.values().next().value;
            return null == t ? null : null === (e = E.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = r.useMemo(() => {
            let e = new g.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = N.wT), e;
        }, [n]),
        w = (0, u.s5)({
            userId: y,
            channelId: b,
            application: B
        }),
        U = null == L,
        F = (0, v.NL)({
            embeddedActivity: L,
            joinability: w,
            currentEmbeddedActivity: O,
            channel: R
        }),
        G = r.useId(),
        V = null != M && M.isLaunching && M.componentId === G,
        H = async () => {
            U
                ? await (0, d.Z)({
                      targetApplicationId: n.id,
                      channelId: b,
                      locationObject: Z.location,
                      analyticsLocations: j,
                      componentId: G,
                      commandOrigin: p.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: L.applicationId,
                      activityChannelId: b,
                      locationObject: Z.location,
                      analyticsLocations: j,
                      componentId: G
                  });
        },
        z = F.disabled ? T.intl.string(T.t.JBnc7O) : T.intl.string(T.t.cX9uLS);
    return (0, i.jsx)('div', {
        className: S.container,
        children: (0, i.jsxs)('div', {
            className: S.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: S.headerContainer,
                    children: U
                        ? (0, i.jsx)('div', {
                              className: S.__invalid_endedNote,
                              children: (0, i.jsx)(a.Text, {
                                  variant: 'text-md/medium',
                                  children: z
                              })
                          })
                        : (0, i.jsx)(a.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != D ? D : T.intl.string(T.t.oQn0h4)
                          })
                }),
                (0, i.jsxs)('div', {
                    className: S.footerContainer,
                    children: [
                        (0, i.jsx)(a.Tooltip, {
                            text: F.tooltip,
                            tooltipContentClassName: S.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, r.createElement)(
                                    a.Button,
                                    {
                                        ...n,
                                        key: ''.concat(F.isJoinAction),
                                        onClick: () => {
                                            H(), null == t || t();
                                        },
                                        color: F.isJoinAction ? a.ButtonColors.GREEN : a.ButtonColors.PRIMARY,
                                        submitting: V,
                                        disabled: F.disabled
                                    },
                                    F.text
                                );
                            }
                        }),
                        !U &&
                            (0, i.jsx)(m.Z, {
                                guildId: A,
                                users: k,
                                max: 4,
                                size: m.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
}
