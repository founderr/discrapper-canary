n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(2052),
    o = n(317381),
    c = n(638880),
    d = n(122613),
    u = n(527805),
    _ = n(884338),
    E = n(100527),
    I = n(906732),
    m = n(895924),
    T = n(973616),
    N = n(314897),
    h = n(592125),
    C = n(158776),
    p = n(594174),
    f = n(823379),
    g = n(226378),
    A = n(701488),
    S = n(689938),
    M = n(211655);
function O(e) {
    var t;
    let { application: n, channelId: O, guildId: x } = e,
        { analyticsLocations: R } = (0, I.ZP)(E.Z.ACTIVITY_INSTANCE_EMBED),
        v = (0, r.O)(),
        L = (0, s.e7)([h.Z], () => h.Z.getChannel(O)),
        Z = (null == L ? void 0 : null === (t = L.isThread) || void 0 === t ? void 0 : t.call(L)) ? (null == L ? void 0 : L.parent_id) : O,
        P = (0, s.e7)([N.default], () => N.default.getId()),
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
                .filter(f.lm);
        }),
        y = (0, s.e7)([C.Z], () => {
            var e;
            let t = null == b ? void 0 : b.userIds.values().next().value;
            return null == t ? null : null === (e = C.Z.findActivity(t, (e) => e.application_id === n.id)) || void 0 === e ? void 0 : e.details;
        }),
        B = a.useMemo(() => {
            let e = new T.Z(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = A.wT), e;
        }, [n]),
        k = (0, u.s5)({
            userId: P,
            channelId: O,
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
                ? await (0, d.Z)({
                      targetApplicationId: n.id,
                      channelId: O,
                      locationObject: v.location,
                      analyticsLocations: R,
                      componentId: w,
                      commandOrigin: m.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, c.Z)({
                      applicationId: b.applicationId,
                      activityChannelId: O,
                      locationObject: v.location,
                      analyticsLocations: R,
                      componentId: w
                  });
        },
        Y = F.disabled ? S.Z.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_ENDED;
    return (0, i.jsx)('div', {
        className: M.container,
        children: (0, i.jsxs)('div', {
            className: M.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: M.headerContainer,
                    children: G
                        ? (0, i.jsx)('div', {
                              className: M.__invalid_endedNote,
                              children: (0, i.jsx)(l.Text, {
                                  variant: 'text-md/medium',
                                  children: Y
                              })
                          })
                        : (0, i.jsx)(l.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != y ? y : S.Z.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_PRESENCE
                          })
                }),
                (0, i.jsxs)('div', {
                    className: M.footerContainer,
                    children: [
                        (0, i.jsx)(l.Tooltip, {
                            text: F.tooltip,
                            tooltipContentClassName: M.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, a.createElement)(
                                    l.Button,
                                    {
                                        ...n,
                                        key: ''.concat(F.isJoinAction),
                                        onClick: () => {
                                            H(), null == t || t();
                                        },
                                        color: F.isJoinAction ? l.ButtonColors.GREEN : l.ButtonColors.PRIMARY,
                                        submitting: V,
                                        disabled: F.disabled
                                    },
                                    F.text
                                );
                            }
                        }),
                        !G &&
                            (0, i.jsx)(_.Z, {
                                guildId: x,
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
