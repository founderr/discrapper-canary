t.d(n, {
    Z: function () {
        return m;
    },
    p: function () {
        return h;
    }
});
var l = t(442837),
    a = t(933557),
    o = t(592125),
    r = t(430824),
    i = t(699516),
    s = t(594174),
    c = t(823379),
    d = t(689938);
function u(e, n, t) {
    return 0 === e.length
        ? ''
        : (t ? d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n
          });
}
function m(e) {
    let { guild: n, prompt: t, selectedRoleIds: m, selectedChannelIds: h, itemHook: v } = e,
        g = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
        x = (0, l.Wu)([o.Z, s.default, i.Z], () =>
            Array.from(h)
                .map((e) => o.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, a.F6)(e, s.default, i.Z, !0))
        ),
        p = Array.from(m)
            .map((e) => {
                var n;
                return null === (n = (null != g ? g : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        C = (null == t ? void 0 : t.singleSelect) ? '' : d.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS,
        f = '';
    if (0 === x.length && p.length > 0) C = u(p, v);
    else if (x.length > 0) {
        var N, j;
        (N = x),
            (j = v),
            (C =
                0 === N.length
                    ? ''
                    : d.Z.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
                          count: N.length,
                          extraCount: Math.max(N.length - 2, 0),
                          channel1: N[0],
                          channel2: N[1],
                          itemHook: j
                      })),
            p.length > 0 && (f = u(p, v, !0));
    }
    return {
        helpText: C,
        helpTextAdditional: f
    };
}
function h(e) {
    let { guild: n, prompt: t, selectedRoleIds: u, selectedChannelIds: m, itemHook: h } = e,
        v = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
        g = (0, l.Wu)([o.Z, s.default, i.Z], () =>
            Array.from(m)
                .map((e) => o.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, a.F6)(e, s.default, i.Z, !0))
        ),
        x = Array.from(u)
            .map((e) => {
                var n;
                return null === (n = (null != v ? v : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        p = (null == t ? void 0 : t.singleSelect) ? '' : d.Z.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
    return (
        0 === g.length && x.length > 0
            ? (p = d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
                  count: x.length,
                  extraCount: Math.max(x.length - 2, 0),
                  role1: x[0],
                  role2: x[1],
                  itemHook: h
              }))
            : g.length > 0 && 0 === x.length
              ? (p = d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
                    count: g.length,
                    extraCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: h
                }))
              : g.length > 0 &&
                x.length > 0 &&
                (p = d.Z.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
                    channelCount: g.length,
                    extraChannelCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: h,
                    roleCount: x.length,
                    extraRoleCount: Math.max(x.length - 2, 0),
                    role1: x[0],
                    role2: x[1]
                })),
        {
            helpText: p,
            helpTextAdditional: ''
        }
    );
}
