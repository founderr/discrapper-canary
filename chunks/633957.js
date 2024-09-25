n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(481060),
    l = n(2052),
    o = n(317381),
    c = n(638880),
    u = n(122613),
    d = n(527805),
    _ = n(884338),
    E = n(100527),
    I = n(906732),
    m = n(895924),
    T = n(973616),
    h = n(314897),
    N = n(592125),
    f = n(158776),
    C = n(594174),
    p = n(823379),
    g = n(226378),
    A = n(701488),
    S = n(689938),
    x = n(211655);
function R(e) {
    var t;
    let { application: n, channelId: R, guildId: O } = e,
        { analyticsLocations: M } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        v = (0, l.O)(),
        L = (0, a.e7)([N.Z], () => N.Z.getChannel(R)),
        Z = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : R,
        P = (0, a.e7)([h.default], () => h.default.getId()),
        {
            embeddedActivity: b,
            currentEmbeddedActivity: D,
            activityLaunchState: j
        } = (0, a.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != Z ? Z : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: o.ZP.getLaunchState(n.id, null != Z ? Z : void 0)
        })),
        U = (0, a.Wu)([C.default], () => {
            var e;
            return Array.from(null !== (e = null == b ? void 0 : b.userIds) && void 0 !== e ? e : [])
                .map((e) => C.default.getUser(e))
                .filter(p.lm);
        }),
        y = (0, a.e7)([f.Z], () => {
            var e;
            let t = null == b ? void 0 : b.userIds.values().next().value;
            return null == t ? null : null === (e = f.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = s.useMemo(() => {
            let e = new T.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = A.wT), e;
        }, [n]),
        k = (0, d.s5)({
            userId: P,
            channelId: R,
            application: B
        }),
        F = null == b,
        G = (0, g.NL)({
            embeddedActivity: b,
            joinability: k,
            currentEmbeddedActivity: D,
            channel: L
        }),
        w = s.useId(),
        V = null != j && j.isLaunching && j.componentId === w,
        H = async () => {
            F
                ? await (0, u.Z)({
                      targetApplicationId: n.id,
                      channelId: R,
                      locationObject: v.location,
                      analyticsLocations: M,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: b.applicationId,
                      activityChannelId: R,
                      locationObject: v.location,
                      analyticsLocations: M,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  });
        },
        Y = G.disabled ? S.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: x.container,
        children: (0, i.jsxs)('div', {
            className: x.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: x.headerContainer,
                    children: F
                        ? (0, i.jsx)('div', {
                              className: x.__invalid_endedNote,
                              children: (0, i.jsx)(r.Text, {
                                  variant: 'text-md/medium',
                                  children: Y
                              })
                          })
                        : (0, i.jsx)(r.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != y ? y : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: x.footerContainer,
                    children: [
                        (0, i.jsx)(r.Tooltip, {
                            text: G.tooltip,
                            tooltipContentClassName: x.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, s.createElement)(
                                    r.Button,
                                    {
                                        ...n,
                                        key: ''.concat(G.isJoinAction),
                                        onClick: () => {
                                            H(), null == t || t();
                                        },
                                        color: G.isJoinAction ? r.ButtonColors.GREEN : r.ButtonColors.PRIMARY,
                                        submitting: V,
                                        disabled: G.disabled
                                    },
                                    G.text
                                );
                            }
                        }),
                        !F &&
                            (0, i.jsx)(_.Z, {
                                guildId: O,
                                users: U,
                                max: 4,
                                size: _.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
}
