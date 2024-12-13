n.d(t, {
    dt: function () {
        return f;
    },
    eo: function () {
        return g;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(884338),
    a = n(9156),
    s = n(934415),
    c = n(540126),
    u = n(700026),
    d = n(301342),
    h = n(327530),
    p = n(607686);
let m = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(d.Qo, { category: r });
});
function f(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: o, visualRefreshEnabled: a } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: s, canHaveVoiceSummary: d } = (0, u.ie)(n, o, t),
        p = s ? h.QP : 0;
    if (!d || t === c.wZ) return p;
    let m = n.getNamedCategoryFromSection(t);
    return null == m
        ? p
        : (0, u.V5)({
                category: m,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? (a ? 38 : h.Vf) + p
          : p;
}
function g(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, u.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: d, voiceStates: h, guildId: f, selectedChannelId: g, selectedVoiceChannelId: C, optInEnabled: v } = e,
        { hasDivider: _, canHaveVoiceSummary: x } = l.useMemo(() => (0, u.ie)(n, v, t), [n, v, t, d]),
        I = l.useMemo(() => (t === c.wZ ? null : n.getCategoryFromSection(t)), [n, t, d]),
        b = (0, r.Wu)(
            [a.ZP],
            () => {
                if (null == I || !I.isCollapsed || !x) return [];
                let e = I.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!!n.isGuildVocal()) a.ZP.isChannelOrParentOptedIn(f, n.id) && t.push(n);
                }
                return t;
            },
            [I, x, f]
        ),
        E = l.useMemo(
            () =>
                (0, s.c4)({
                    channels: b,
                    selectedChannelId: g,
                    selectedVoiceChannelId: C,
                    voiceStates: h
                }),
            [b, g, C, h]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(m, {
            guildChannels: n,
            guildChannelsVersion: d
        });
    let S = _ ? (0, i.jsx)('div', { className: p.sectionDivider }) : null;
    return x && 0 !== E.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: p.voiceUserSummary,
                      children: (0, i.jsx)(o.Z, {
                          renderIcon: !0,
                          users: E,
                          max: 8,
                          showUserPopout: !0,
                          guildId: f
                      })
                  }),
                  S
              ]
          })
        : S;
});
