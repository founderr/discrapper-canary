n.d(t, {
    Z: function () {
        return m;
    },
    p: function () {
        return h;
    }
});
var l = n(442837),
    o = n(933557),
    a = n(592125),
    r = n(430824),
    i = n(699516),
    s = n(594174),
    c = n(823379),
    d = n(388032);
function u(e, t, n) {
    return 0 === e.length
        ? ''
        : d.intl.format(n ? d.t.cJZxWV : d.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t
          });
}
function m(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: h, itemHook: v } = e,
        x = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRoles(t.id) : void 0)),
        g = (0, l.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(h)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, o.F6)(e, s.default, i.Z, !0))
        ),
        p = Array.from(m)
            .map((e) => {
                var t;
                return null === (t = (null != x ? x : {})[e]) || void 0 === t ? void 0 : t.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        f = (null == n ? void 0 : n.singleSelect) ? '' : d.intl.string(d.t.JshhEh),
        j = '';
    if (0 === g.length && p.length > 0) f = u(p, v);
    else if (g.length > 0) {
        var C, b;
        (C = g),
            (b = v),
            (f =
                0 === C.length
                    ? ''
                    : d.intl.format(d.t.Rj841d, {
                          count: C.length,
                          extraCount: Math.max(C.length - 2, 0),
                          channel1: C[0],
                          channel2: C[1],
                          itemHook: b
                      })),
            p.length > 0 && (j = u(p, v, !0));
    }
    return {
        helpText: f,
        helpTextAdditional: j
    };
}
function h(e) {
    let { guild: t, prompt: n, selectedRoleIds: u, selectedChannelIds: m, itemHook: h } = e,
        v = (0, l.e7)([r.Z], () => (null != t ? r.Z.getRoles(t.id) : void 0)),
        x = (0, l.Wu)([a.Z, s.default, i.Z], () =>
            Array.from(m)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, o.F6)(e, s.default, i.Z, !0))
        ),
        g = Array.from(u)
            .map((e) => {
                var t;
                return null === (t = (null != v ? v : {})[e]) || void 0 === t ? void 0 : t.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        p = (null == n ? void 0 : n.singleSelect) ? '' : d.intl.string(d.t.JshhEh);
    return (
        0 === x.length && g.length > 0
            ? (p = d.intl.format(d.t.vdtNYW, {
                  count: g.length,
                  extraCount: Math.max(g.length - 2, 0),
                  role1: g[0],
                  role2: g[1],
                  itemHook: h
              }))
            : x.length > 0 && 0 === g.length
              ? (p = d.intl.format(d.t.ZKywGR, {
                    count: x.length,
                    extraCount: Math.max(x.length - 2, 0),
                    channel1: x[0],
                    channel2: x[1],
                    itemHook: h
                }))
              : x.length > 0 &&
                g.length > 0 &&
                (p = d.intl.format(d.t.WewRHB, {
                    channelCount: x.length,
                    extraChannelCount: Math.max(x.length - 2, 0),
                    channel1: x[0],
                    channel2: x[1],
                    itemHook: h,
                    roleCount: g.length,
                    extraRoleCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1]
                })),
        {
            helpText: p,
            helpTextAdditional: ''
        }
    );
}
