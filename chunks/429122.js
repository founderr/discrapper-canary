n.d(t, {
    dt: function () {
        return p;
    },
    eo: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(884338),
    o = n(934415),
    a = n(540126),
    s = n(700026),
    c = n(301342),
    u = n(327530),
    d = n(607686);
let h = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(c.Qo, { category: r });
});
function p(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: o, visualRefreshEnabled: c } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: d, canHaveVoiceSummary: h } = (0, s.ie)(n, o, t),
        p = d ? u.QP : 0;
    if (!h || t === a.wZ) return p;
    let m = n.getNamedCategoryFromSection(t);
    return null == m
        ? p
        : (0, s.V5)({
                category: m,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? (c ? 38 : u.Vf) + p
          : p;
}
function m(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, s.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: c, voiceStates: u, guildId: p, selectedChannelId: m, selectedVoiceChannelId: f, optInEnabled: g } = e,
        { hasDivider: C, canHaveVoiceSummary: _ } = l.useMemo(() => (0, s.ie)(n, g, t), [n, g, t, c]),
        v = l.useMemo(() => (t === a.wZ ? null : n.getCategoryFromSection(t)), [n, t, c]),
        x = l.useMemo(
            () =>
                null != v && v.isCollapsed
                    ? (0, o.c4)({
                          channels: v.getChannelRecords(),
                          selectedChannelId: m,
                          selectedVoiceChannelId: f,
                          voiceStates: u
                      })
                    : [],
            [v, m, f, u]
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
