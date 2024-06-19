n.d(t, {
  EM: function() {
    return m
  },
  WW: function() {
    return C
  }
});
var l = n(735250),
  i = n(470079),
  s = n(362658),
  r = n(216306),
  a = n(155409),
  o = n(486458),
  u = n(540126),
  c = n(301342),
  d = n(327530),
  h = n(981631),
  g = n(689938),
  p = n(857100);

function m(e, t, n) {
  if (e === u.zm) return d.$k;
  if (e === u.wd) return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
  if (e === n.voiceChannelsSectionNumber) {
    var l;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return d.Pw + d.QP;
    let i = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
    return null == i || i.record.type === h.d4z.GUILD_CATEGORY ? d.QP : 16 + d.QP
  }
  return d.Pw
}

function C(e, t) {
  switch (e) {
    case u.zm:
      return "hoisted-spacer";
    case u.wd:
      return "uncategorized-spacer";
    case u.p2:
      return "favorites";
    case t.recentsSectionNumber:
      return "recents-header";
    case t.voiceChannelsSectionNumber:
      return "voice-channels-header";
    default: {
      let n = t.getNamedCategoryFromSection(e);
      if (null != n) return "category-".concat(n.id);
      return "section-".concat(e)
    }
  }
}
t.ZP = i.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: m,
    guildChannelsVersion: C,
    selectedChannelId: E,
    disableManageChannels: f
  } = e, {
    isFavoritesPerk: _
  } = (0, s.z)("ChannelListSection"), I = i.useCallback(() => {
    let e = m.getCategoryFromSection(m.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      l = e.getShownChannelAndThreadIds();
    null != E && l.includes(E) && (t = (0, r.KY)(m)), (0, r.Uo)(n.id, l, t)
  }, [n.id, E, m, C]);
  switch (t) {
    case u.zm:
      return (0, l.jsx)("div", {
        style: {
          height: d.$k
        }
      });
    case u.wd:
      if (n.hasFeature(h.oNc.HUB)) return null;
      return (0, l.jsx)("div", {
        style: {
          height: d.$k
        }
      });
    case u.p2:
      return (0, l.jsx)(c.P, {
        name: _ ? g.Z.Messages.PINNED_CHANNELS : g.Z.Messages.FAVORITES
      });
    case m.recentsSectionNumber:
      return (0, l.jsx)(c.P, {
        name: g.Z.Messages.RECENTS_CATEGORY_HEADER,
        onDismiss: I
      });
    case m.voiceChannelsSectionNumber: {
      var N;
      let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null === (N = m.getChannelFromSectionRow(t, 0)) || void 0 === N ? void 0 : N.channel;
      return (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)("div", {
          className: p.sectionDivider
        }), (0, l.jsx)(c.rj, {
          category: e,
          channel: n
        })]
      })
    }
    case u.wF: {
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, l.jsx)(c.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: f,
        children: (0, l.jsx)(a.Z, {
          inlineSpecs: d.MF,
          arrowAlignment: o.cy.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = m.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, l.jsx)(c.ZP, {
        channel: e.record,
        position: e.position,
        disableManageChannels: f
      })
    }
  }
})