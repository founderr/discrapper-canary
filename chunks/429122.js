n.d(t, {
    dt: function () {
        return p;
    },
    eo: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(884338),
    a = n(934415),
    o = n(540126),
    s = n(700026),
    c = n(301342),
    u = n(327530),
    d = n(573726);
let h = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(c.Qo, { category: r });
});
function p(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: a } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: d } = (0, s.ie)(n, a, t),
        h = c ? u.QP : 0;
    if (!d || t === o.wZ) return h;
    let p = n.getNamedCategoryFromSection(t);
    return null == p
        ? h
        : (0, s.V5)({
                category: p,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? u.Vf + h
          : h;
}
function f(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, s.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: c, voiceStates: u, guildId: p, selectedChannelId: f, selectedVoiceChannelId: m, optInEnabled: g } = e,
        { hasDivider: C, canHaveVoiceSummary: _ } = l.useMemo(() => (0, s.ie)(n, g, t), [n, g, t, c]),
        v = l.useMemo(() => (t === o.wZ ? null : n.getCategoryFromSection(t)), [n, t, c]),
        x = l.useMemo(
            () =>
                null != v && v.isCollapsed
                    ? (0, a.c4)({
                          channels: v.getChannelRecords(),
                          selectedChannelId: f,
                          selectedVoiceChannelId: m,
                          voiceStates: u
                      })
                    : [],
            [v, f, m, u]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(h, {
            guildChannels: n,
            guildChannelsVersion: c
        });
    let I = C ? (0, i.jsx)('div', { className: d.sectionDivider }) : null;
    return _ && 0 !== x.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: d.voiceUserSummary,
                      children: (0, i.jsx)(r.Z, {
                          renderIcon: !0,
                          users: x,
                          max: 8,
                          showUserPopout: !0,
                          guildId: p
                      })
                  }),
                  I
              ]
          })
        : I;
});
