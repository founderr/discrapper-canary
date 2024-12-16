n.d(t, {
    dt: function () {
        return g;
    },
    eo: function () {
        return C;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(884338),
    a = n(398758),
    s = n(9156),
    c = n(934415),
    u = n(540126),
    d = n(700026),
    h = n(301342),
    p = n(327530),
    m = n(607686);
let f = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(h.Qo, { category: r });
});
function g(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: o, visualRefreshEnabled: a, density: s } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: h } = (0, d.ie)(n, o, t),
        m = c ? (a ? 9 : p.QP) : 0;
    if (!h || t === u.wZ) return m;
    let f = n.getNamedCategoryFromSection(t);
    return null == f
        ? m
        : (0, d.V5)({
                category: f,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? (a ? ('cozy' === s ? 42 : 34) : p.Vf) + m
          : m;
}
function C(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, d.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: h, voiceStates: p, guildId: g, selectedChannelId: C, selectedVoiceChannelId: v, optInEnabled: _ } = e,
        { hasDivider: x, canHaveVoiceSummary: I } = l.useMemo(() => (0, d.ie)(n, _, t), [n, _, t, h]),
        b = l.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, h]),
        E = (0, a.DM)(g),
        S = (0, r.Wu)(
            [s.ZP],
            () => {
                if (null == b || !b.isCollapsed || !I) return [];
                let e = b.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = s.ZP.isChannelOrParentOptedIn(g, n.id);
                    (!E || e) && t.push(n);
                }
                return t;
            },
            [b, I, g, E]
        ),
        Z = l.useMemo(
            () =>
                (0, c.c4)({
                    channels: S,
                    selectedChannelId: C,
                    selectedVoiceChannelId: v,
                    voiceStates: p
                }),
            [S, C, v, p]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(f, {
            guildChannels: n,
            guildChannelsVersion: h
        });
    let N = x ? (0, i.jsx)('div', { className: m.sectionDivider }) : null;
    return I && 0 !== Z.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: m.voiceUserSummary,
                      children: (0, i.jsx)(o.Z, {
                          renderIcon: !0,
                          users: Z,
                          max: 8,
                          showUserPopout: !0,
                          guildId: g
                      })
                  }),
                  N
              ]
          })
        : N;
});
