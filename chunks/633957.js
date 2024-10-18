n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
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
    T = n(973616),
    f = n(314897),
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
    let { application: n, channelId: R, guildId: O } = e,
        { analyticsLocations: v } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        M = (0, l.O)(),
        L = (0, s.e7)([h.Z], () => h.Z.getChannel(R)),
        Z = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : R,
        P = (0, s.e7)([f.default], () => f.default.getId()),
        {
            embeddedActivity: b,
            currentEmbeddedActivity: D,
            activityLaunchState: j
        } = (0, s.cj)([o.ZP], () => ({
            embeddedActivity: o.ZP.getEmbeddedActivitiesForChannel(null != Z ? Z : '').find((e) => e.applicationId === n.id),
            currentEmbeddedActivity: o.ZP.getCurrentEmbeddedActivity(),
            activityLaunchState: o.ZP.getLaunchState(n.id, null != Z ? Z : void 0)
        })),
        U = (0, s.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == b ? void 0 : b.userIds) && void 0 !== e ? e : [])
                .map((e) => p.default.getUser(e))
                .filter(C.lm);
        }),
        y = (0, s.e7)([N.Z], () => {
            var e;
            let t = null == b ? void 0 : b.userIds.values().next().value;
            return null == t ? null : null === (e = N.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = a.useMemo(() => {
            let e = new T.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = S.wT), e;
        }, [n]),
        k = (0, d.s5)({
            userId: P,
            channelId: R,
            application: B
        }),
        G = null == b,
        F = (0, g.NL)({
            embeddedActivity: b,
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
                      locationObject: M.location,
                      analyticsLocations: v,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: b.applicationId,
                      activityChannelId: R,
                      locationObject: M.location,
                      analyticsLocations: v,
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
