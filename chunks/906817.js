n.d(t, {
    EM: function () {
        return _;
    },
    WW: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(997638),
    a = n(362658),
    s = n(216306),
    o = n(155409),
    c = n(540126),
    u = n(301342),
    d = n(327530),
    h = n(981631),
    p = n(689938),
    f = n(774264);
function _(e, t, n) {
    if (e === c.wZ) return d.$k;
    if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var i;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return d.Pw + d.QP;
        let l = null === (i = n.getChannelFromSectionRow(e, 0)) || void 0 === i ? void 0 : i.channel;
        return null == l || l.record.type === h.d4z.GUILD_CATEGORY ? d.QP : 16 + d.QP;
    }
    return d.Pw;
}
function m(e, t) {
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
    let { sectionIndex: t, guild: n, guildChannels: _, guildChannelsVersion: m, selectedChannelId: g, disableManageChannels: C } = e,
        { isFavoritesPerk: I } = (0, a.z)('ChannelListSection'),
        E = l.useCallback(() => {
            let e = _.getCategoryFromSection(_.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != g && i.includes(g) && (t = (0, s.KY)(_)), (0, s.Uo)(n.id, i, t);
        }, [n.id, g, _, m]);
    switch (t) {
        case c.wZ:
            return (0, i.jsx)('div', { style: { height: d.$k } });
        case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)('div', { style: { height: d.$k } });
        case c.p2:
            return (0, i.jsx)(u.P, { name: I ? p.Z.Messages.PINNED_CHANNELS : p.Z.Messages.FAVORITES });
        case _.recentsSectionNumber:
            return (0, i.jsx)(u.P, {
                name: p.Z.Messages.RECENTS_CATEGORY_HEADER,
                onDismiss: E
            });
        case _.voiceChannelsSectionNumber: {
            var N;
            let e = _.getCategoryFromSection(_.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null === (N = _.getChannelFromSectionRow(t, 0)) || void 0 === N ? void 0 : N.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: f.sectionDivider }),
                    (0, i.jsx)(u.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case c.wF: {
            let e = _.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C,
                children: (0, i.jsx)(o.Z, {
                    inlineSpecs: d.MF,
                    arrowAlignment: r.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = _.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C
            });
        }
    }
});
