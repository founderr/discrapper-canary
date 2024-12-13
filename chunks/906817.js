n.d(t, {
    EM: function () {
        return g;
    },
    WW: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(997638),
    o = n(362658),
    a = n(216306),
    s = n(155409),
    c = n(540126),
    d = n(301342),
    u = n(327530),
    h = n(981631),
    p = n(388032),
    m = n(607686);
function f(e) {
    return e ? 9 : u.QP;
}
function g(e, t, n, i) {
    if (e === c.wZ) return u.$k;
    if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : u.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var l;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return u.Pw + f(i);
        let r = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
        return null == r || r.record.type === h.d4z.GUILD_CATEGORY ? f(i) : 16 + f(i);
    }
    return u.Pw;
}
function C(e, t) {
    switch (e) {
        case c.wZ:
            return 'hoisted-spacer';
        case c.wd:
            return 'uncategorized-spacer';
        case c.p2:
            return 'favorites';
        case t.recentsSectionNumber:
            return 'recents-header';
        case t.voiceChannelsSectionNumber:
            return 'voice-channels-header';
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return 'category-'.concat(n.id);
            return 'section-'.concat(e);
        }
    }
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: f, guildChannelsVersion: g, selectedChannelId: C, disableManageChannels: v } = e,
        { isFavoritesPerk: _ } = (0, o.z)('ChannelListSection'),
        x = l.useCallback(() => {
            let e = f.getCategoryFromSection(f.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != C && i.includes(C) && (t = (0, a.KY)(f)), (0, a.Uo)(n.id, i, t);
        }, [n.id, C, f, g]);
    switch (t) {
        case c.wZ:
            return (0, i.jsx)('div', { style: { height: u.$k } });
        case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)('div', { style: { height: u.$k } });
        case c.p2:
            return (0, i.jsx)(d.P, { name: _ ? p.intl.string(p.t.mlPMCw) : p.intl.string(p.t.k8fFjo) });
        case f.recentsSectionNumber:
            return (0, i.jsx)(d.P, {
                name: p.intl.string(p.t.gKcrqK),
                onDismiss: x
            });
        case f.voiceChannelsSectionNumber: {
            var I;
            let e = f.getCategoryFromSection(f.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null === (I = f.getChannelFromSectionRow(t, 0)) || void 0 === I ? void 0 : I.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: m.sectionDivider }),
                    (0, i.jsx)(d.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case c.wF: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v,
                children: (0, i.jsx)(s.Z, {
                    inlineSpecs: u.MF,
                    arrowAlignment: r.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(d.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v
            });
        }
    }
});
