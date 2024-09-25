n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(2052),
    u = n(317381),
    c = n(638880),
    d = n(122613),
    _ = n(527805),
    E = n(884338),
    f = n(100527),
    h = n(906732),
    p = n(895924),
    m = n(973616),
    I = n(314897),
    T = n(592125),
    g = n(158776),
    S = n(594174),
    A = n(823379),
    v = n(226378),
    N = n(701488),
    O = n(689938),
    R = n(211655);
function C(e) {
    var t;
    let { application: n, channelId: r, guildId: C } = e,
        { analyticsLocations: y } = (0, h.ZP)(f.Z.ACTIVITY_INSTANCE_EMBED),
        b = (0, l.O)(),
        L = (0, o.e7)([T.Z], () => T.Z.getChannel(r)),
        D = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : r,
        M = (0, o.e7)([I.default], () => I.default.getId()),
        {
            embeddedActivity: P,
            currentEmbeddedActivity: U,
            activityLaunchState: w
        } = (0, o.cj)([u.ZP], () => ({
            embeddedActivity: u.ZP.getEmbeddedActivitiesForChannel(null != D ? D : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: u.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: u.ZP.getLaunchState(n.id, null != D ? D : void 0)
        })),
        x = (0, o.Wu)([S.default], () => {
            var e;
            return Array.from(null !== (e = null == P ? void 0 : P.userIds) && void 0 !== e ? e : [])
                .map((e) => S.default.getUser(e))
                .filter(A.lm);
        }),
        G = (0, o.e7)([g.Z], () => {
            var e;
            let t = null == P ? void 0 : P.userIds.values().next().value;
            return null == t ? null : null === (e = g.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        k = a.useMemo(() => {
            let e = new m.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = N.wT), e;
        }, [n]),
        B = (0, _.s5)({
            userId: M,
            channelId: r,
            application: k
        }),
        F = null == P,
        Z = (0, v.NL)({
            embeddedActivity: P,
            joinability: B,
            currentEmbeddedActivity: U,
            channel: L
        }),
        V = a.useId(),
        H = null != w && w.isLaunching && w.componentId === V,
        Y = async () => {
            F
                ? await (0, d.Z)({
                      targetApplicationId: n.id,
                      channelId: r,
                      locationObject: b.location,
                      analyticsLocations: y,
                      componentId: V,
                      commandOrigin: p.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: P.applicationId,
                      activityChannelId: r,
                      locationObject: b.location,
                      analyticsLocations: y,
                      componentId: V,
                      commandOrigin: p.bB.ACTIVITY_INSTANCE_EMBED
                  });
        },
        j = Z.disabled ? O.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : O.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: R.container,
        children: (0, i.jsxs)('div', {
            className: R.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: R.headerContainer,
                    children: F
                        ? (0, i.jsx)('div', {
                              className: R.__invalid_endedNote,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  children: j
                              })
                          })
                        : (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != G ? G : O.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: R.footerContainer,
                    children: [
                        (0, i.jsx)(s.Tooltip, {
                            text: Z.tooltip,
                            tooltipContentClassName: R.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, a.createElement)(
                                    s.Button,
                                    {
                                        ...n,
                                        key: ''.concat(Z.isJoinAction),
                                        onClick: () => {
                                            Y(), null == t || t();
                                        },
                                        color: Z.isJoinAction ? s.ButtonColors.GREEN : s.ButtonColors.PRIMARY,
                                        submitting: H,
                                        disabled: Z.disabled
                                    },
                                    Z.text
                                );
                            }
                        }),
                        !F &&
                            (0, i.jsx)(E.Z, {
                                guildId: C,
                                users: x,
                                max: 4,
                                size: E.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
}
