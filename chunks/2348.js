"use strict";
t.d(s, {
  Z: function() {
    return O
  }
}), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(692547),
  o = t(481060),
  c = t(239091),
  d = t(977258),
  u = t(637853),
  E = t(473403),
  _ = t(216306),
  I = t(514342),
  T = t(743475),
  N = t(827907),
  m = t(868814),
  S = t(981631),
  h = t(689938),
  g = t(46771);

function C(e) {
  let {
    guild: s,
    channel: i
  } = e, l = (0, N.Mf)(i.id);
  return "null" === i.id ? (0, n.jsx)("div", {
    className: a()(g.categoryRow, g.uncategorized),
    children: (0, n.jsx)(o.Text, {
      className: g.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    })
  }) : (0, n.jsxs)(o.Clickable, {
    className: a()(g.categoryRow, {
      [g.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("86977"), t.e("39285"), t.e("8965"), t.e("85760")]).then(t.bind(t, 139035));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: i,
          guild: s
        })
      })
    },
    onClick: e => (e.stopPropagation(), (0, d.s)(s.id, i.id) ? (0, T.pt)(i.id) : (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s.id,
        startingChannelId: i.id
      })
    }), !0),
    children: [(0, n.jsx)(o.Text, {
      className: g.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), (0, n.jsx)(o.Checkbox, {
      "aria-checked": l,
      value: l,
      type: o.Checkbox.Types.INVERTED,
      className: g.checkbox,
      displayOnly: !0
    })]
  })
}
let x = i.memo(function() {
    return (0, n.jsx)("div", {
      className: g.separator
    })
  }),
  R = i.memo(function(e) {
    let {
      index: s
    } = e;
    return (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: g.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(s))
  }),
  L = i.memo(function(e) {
    let {
      channel: s,
      category: i,
      guild: l,
      isFirstChannel: _,
      isLastChannel: C,
      tooltipDirection: L = "right"
    } = e, O = (0, N.Mf)(s.id, i.id), A = (0, N.t4)(s.id, i.id), p = (0, N.EH)(s.id, i.id), M = (0, N.lL)(l.id, i.id), f = null != (0, m.Z)(l).find(e => e.id === s.id), D = (0, u.mn)(s.id), v = e => {
      if (!A) return e.stopPropagation(), (0, d.s)(l.id, s.id) ? (0, T.pt)(s.id) : (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: l.id,
          startingChannelId: s.id
        })
      }), !0
    }, j = e => {
      s.isGuildVocal() ? (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("79695"), t.e("14262"), t.e("86977"), t.e("39285"), t.e("3741"), t.e("18320"), t.e("83331"), t.e("69069")]).then(t.bind(t, 213202));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: s,
          guild: l
        })
      }) : (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("49237"), t.e("99387"), t.e("50990"), t.e("79695"), t.e("6380"), t.e("11250"), t.e("57878"), t.e("77172"), t.e("67535"), t.e("95393"), t.e("14262"), t.e("86977"), t.e("81539"), t.e("7590"), t.e("8739"), t.e("58286"), t.e("39285"), t.e("92511"), t.e("41947"), t.e("30243"), t.e("88646"), t.e("68241"), t.e("21078"), t.e("19820"), t.e("47939"), t.e("30676"), t.e("48800"), t.e("95824"), t.e("3741"), t.e("37220"), t.e("94920"), t.e("91315"), t.e("18320"), t.e("72922"), t.e("77791")]).then(t.bind(t, 373651));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: s,
          guild: l
        })
      })
    };
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.Tooltip, {
        text: null != p ? p : M,
        delay: 500,
        position: L,
        children: e => (0, n.jsxs)(o.Clickable, {
          className: a()(g.channelRow, {
            [g.firstChannel]: _,
            [g.lastChannel]: C,
            [g.disabled]: A
          }),
          ...e,
          onClick: v,
          onContextMenu: j,
          children: [(0, n.jsx)("div", {
            className: g.channelInfo,
            children: (0, n.jsxs)("div", {
              className: g.channelName,
              children: [(0, n.jsx)(E._, {
                channel: s,
                guild: l
              }), (0, n.jsx)(I.Z, {
                className: g.__invalid_name,
                children: (0, n.jsx)(o.Text, {
                  className: g.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: A ? "text-muted" : "text-normal",
                  children: s.name
                })
              }), f ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(R, {
                  index: 0
                }), (0, n.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: g.channelSubtitle,
                  color: "text-brand",
                  children: h.Z.Messages.CHANNEL_POPULAR
                })]
              }) : null]
            })
          }), (0, n.jsx)("div", {
            className: g.channelActions,
            children: (0, d.s)(s.guild_id, s.id) ? (0, n.jsx)(o.Checkbox, {
              "aria-checked": O,
              value: O,
              type: o.Checkbox.Types.INVERTED,
              disabled: A,
              color: D ? r.Z.colors.TEXT_BRAND.css : r.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
              innerClassName: g.checkboxInner,
              displayOnly: !0
            }) : (0, n.jsxs)(o.Button, {
              look: o.Button.Looks.OUTLINED,
              color: o.Button.Colors.PRIMARY,
              className: g.lockedPill,
              innerClassName: g.lockedPillInner,
              onClick: S.dG4,
              children: [(0, n.jsx)(o.LockIcon, {
                size: "xs",
                color: "currentColor"
              }), (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: h.Z.Messages.UNLOCK
              })]
            })
          })]
        })
      }), !C && (0, n.jsx)(x, {})]
    })
  });

function O(e) {
  let {
    categories: s,
    guild: t,
    className: l,
    hasSidebar: a
  } = e, r = i.useCallback(e => {
    let i = s._categories[e];
    return (0, n.jsx)(C, {
      channel: i.channel,
      guild: t
    }, i.channel.id)
  }, [s, t]), o = i.useCallback((e, i) => {
    let l = s._categories[e],
      r = s[l.channel.id][i];
    return null == r ? null : (0, n.jsx)(L, {
      category: l.channel,
      channel: r.channel,
      guild: t,
      isFirstChannel: 0 === i,
      isLastChannel: s[l.channel.id].length - 1 === i,
      tooltipDirection: a ? "right" : "top"
    }, r.channel.id)
  }, [s, t, a]), c = (0, _.tn)(t.id, s, 64);
  return (0, n.jsx)("div", {
    className: l,
    children: c.map((e, s) => {
      let t = r(s),
        i = [],
        l = e.rowCount;
      if (0 === l) return null;
      for (let e = 0; e < l; e++) i.push(o(s, e));
      return (0, n.jsxs)(n.Fragment, {
        children: [t, i]
      })
    })
  })
}