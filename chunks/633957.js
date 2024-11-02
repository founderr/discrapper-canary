n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(442837),
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
    f = n(973616),
    T = n(314897),
    h = n(592125),
    N = n(158776),
    p = n(594174),
    C = n(823379),
    g = n(226378),
    S = n(701488),
    A = n(689938),
    x = n(211655);
function R(e) {
    var t;
    let { application: n, channelId: R, guildId: v } = e,
        { analyticsLocations: M } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        O = (0, l.O)(),
        L = (0, s.e7)([h.Z], () => h.Z.getChannel(R)),
        Z = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : R,
        b = (0, s.e7)([T.default], () => T.default.getId()),
        {
            embeddedActivity: P,
            currentEmbeddedActivity: D,
            activityLaunchState: j
        } = (0, s.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != Z ? Z : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: o.ZP.getLaunchState(n.id, null != Z ? Z : void 0)
        })),
        U = (0, s.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == P ? void 0 : P.userIds) && void 0 !== e ? e : [])
                .map((e) => p.default.getUser(e))
                .filter(C.lm);
        }),
        y = (0, s.e7)([N.Z], () => {
            var e;
            let t = null == P ? void 0 : P.userIds.values().next().value;
            return null == t ? null : null === (e = N.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = a.useMemo(() => {
            let e = new f.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = S.wT), e;
        }, [n]),
        k = (0, d.s5)({
            userId: b,
            channelId: R,
            application: B
        }),
        G = null == P,
        F = (0, g.NL)({
            embeddedActivity: P,
            joinability: k,
            currentEmbeddedActivity: D,
            channel: L
        }),
        w = a.useId(),
        V = null != j && j.isLaunching && j.componentId === w,
        H = async () => {
            G
                ? await (0, u.Z)({
                      targetApplicationId: n.id,
                      channelId: R,
                      locationObject: O.location,
                      analyticsLocations: M,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: P.applicationId,
                      activityChannelId: R,
                      locationObject: O.location,
                      analyticsLocations: M,
                      componentId: w
                  });
        },
        Y = F.disabled ? A.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : A.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: x.container,
        children: (0, i.jsxs)('div', {
            className: x.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: x.headerContainer,
                    children: G
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
                              children: null != y ? y : A.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: x.footerContainer,
                    children: [
                        (0, i.jsx)(r.Tooltip, {
                            text: F.tooltip,
                            tooltipContentClassName: x.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, a.createElement)(
                                    r.Button,
                                    {
                                        ...n,
                                        key: ''.concat(F.isJoinAction),
                                        onClick: () => {
                                            H(), null == t || t();
                                        },
                                        color: F.isJoinAction ? r.ButtonColors.GREEN : r.ButtonColors.PRIMARY,
                                        submitting: V,
                                        disabled: F.disabled
                                    },
                                    F.text
                                );
                            }
                        }),
                        !G &&
                            (0, i.jsx)(_.Z, {
                                guildId: v,
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
