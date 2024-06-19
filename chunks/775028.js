l.d(n, {
  Z: function() {
    return w
  }
}), l(47120), l(653041), l(536091);
var t = l(735250),
  i = l(470079),
  s = l(120356),
  a = l.n(s),
  r = l(442837),
  d = l(704215),
  o = l(692547),
  c = l(481060),
  u = l(239091),
  h = l(605236),
  m = l(66999),
  x = l(549631),
  N = l(473403),
  C = l(454585),
  g = l(22082),
  E = l(703656),
  p = l(6025),
  f = l(922482),
  Z = l(601070),
  _ = l(514342),
  I = l(216306),
  v = l(163),
  j = l(753540),
  S = l(70297),
  R = l(981631),
  T = l(176505),
  O = l(689938),
  A = l(552992);
let L = new Set([R.d4z.GUILD_FORUM, R.d4z.GUILD_MEDIA]),
  M = new Set([R.d4z.GUILD_VOICE, R.d4z.GUILD_STAGE_VOICE]);

function B(e) {
  let {
    guild: n,
    channel: i,
    onCategoryClick: s
  } = e, r = (0, j.Mf)(n.id, i.id, i.id), d = (0, j.t4)(n.id, i.id, i.id);
  return (0, t.jsxs)("div", {
    className: a()(A.categoryRow, {
      [A.uncategorized]: "null" === i.id
    }),
    onContextMenu: e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await l.e("8965").then(l.bind(l, 139035));
        return l => (0, t.jsx)(e, {
          ...l,
          channel: i,
          guild: n
        })
      })
    },
    children: [(0, t.jsx)(c.Text, {
      className: A.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: i.name
    }), "null" !== i.id && !d && (0, t.jsxs)(c.Clickable, {
      className: A.selectAll,
      onClick: () => {
        !d && s(n.id, i.id, i.id)
      },
      children: [(0, t.jsx)(c.Checkbox, {
        className: A.selectAllCheckbox,
        size: 14,
        shape: c.Checkbox.Shapes.SMALL_BOX,
        value: r,
        type: c.Checkbox.Types.INVERTED,
        displayOnly: !0
      }), (0, t.jsx)(c.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: O.Z.Messages.CHANNEL_BROWSER_SELECT_ALL
      })]
    })]
  })
}
let P = i.memo(function() {
    return (0, t.jsx)("div", {
      className: A.separator
    })
  }),
  b = i.memo(function(e) {
    let {
      index: n
    } = e;
    return (0, t.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: A.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(n))
  }),
  D = i.memo(function(e) {
    let {
      channel: n,
      category: i,
      guild: s,
      isFirstChannel: d,
      isLastChannel: h,
      onChannelClick: v,
      tooltipDirection: S = "right"
    } = e, {
      isSubscriptionGated: B
    } = (0, m.Z)(n.id), D = (0, j.Mf)(s.id, n.id, i.id), w = (0, j.t4)(s.id, n.id, i.id), H = (0, j.EH)(s.id, i.id), y = (0, r.e7)([Z.Z], () => Z.Z.getActiveThreadCount(s.id, n.id)), U = (0, r.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(s.id, n.id)), k = e => {
      if (!w) return e.stopPropagation(), v(s.id, n.id, i.id), !0
    }, W = e => {
      n.isGuildVocal() ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("79695"), l.e("18320"), l.e("83331")]).then(l.bind(l, 213202));
        return l => (0, t.jsx)(e, {
          ...l,
          channel: n,
          guild: s
        })
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("79695"), l.e("18320"), l.e("54310")]).then(l.bind(l, 373651));
        return l => (0, t.jsx)(e, {
          ...l,
          channel: n,
          guild: s
        })
      })
    }, G = function(e, n) {
      let l = [];
      return R.TPd.GUILD_THREADS_ONLY.has(e.type) && n >= 1 && l.push((0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        className: A.channelSubtitle,
        children: O.Z.Messages.ACTIVE_FORUM_POST_COUNT.format({
          count: n
        })
      }, "thread-count")), !M.has(e.type) && l.push((0, t.jsx)(c.Text, {
        variant: "text-xs/normal",
        className: A.channelSubtitle,
        children: (0, I.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && l.push((0, t.jsx)(_.Z, {
        children: (0, t.jsx)(c.Text, {
          className: A.topic,
          variant: "text-xs/normal",
          children: C.Z.parseTopic(e.topic, !0, {
            channelId: e.id
          })
        })
      }, "topic")), [l.map((e, n) => [e, (0, t.jsx)(b, {
        index: n
      }, "subtitle-separator-".concat(n))])].flat(2).slice(0, -1)
    }(n, y), F = e => (e.stopPropagation(), L.has(n.type) || e.shiftKey) ? ((0, E.XU)(s.id, n.id), !0) : n.isGuildStageVoice() || n.isGuildVoice() ? ((0, f.Cq)(n), !0) : (p.Z.openChannelAsSidebar({
      guildId: n.guild_id,
      channelId: n.id,
      baseChannelId: T.oC.CHANNEL_BROWSER
    }), !0), z = O.Z.Messages.CHANNEL_BROWSER_VIEW;
    n.isGuildStageVoice() || n.isGuildVoice() ? z = O.Z.Messages.JOIN : n.isForumLikeChannel() && (z = O.Z.Messages.OPEN);
    let Y = w ? "text-muted" : "text-normal",
      V = (0, c.useToken)(w ? o.Z.colors.TEXT_MUTED : o.Z.colors.TEXT_NORMAL).hex();
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(c.Tooltip, {
        text: H,
        delay: 500,
        position: S,
        children: e => (0, t.jsxs)(c.Clickable, {
          className: a()(A.channelRow, {
            [A.firstChannel]: d,
            [A.lastChannel]: h,
            [A.disabled]: w
          }),
          ...e,
          onClick: k,
          onContextMenu: W,
          children: [(0, t.jsxs)("div", {
            className: A.channelInfo,
            children: [(0, t.jsxs)("div", {
              className: A.channelName,
              children: [(0, t.jsx)(N._, {
                channel: n,
                guild: s
              }), (0, t.jsx)(_.Z, {
                className: A.__invalid_name,
                children: (0, t.jsx)(c.Text, {
                  className: A.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: Y,
                  children: n.name
                })
              }), B ? (0, t.jsx)(x.Z, {
                color: V,
                className: A.premiumIcon
              }) : null, U ? (0, t.jsx)(c.TextBadge, {
                text: O.Z.Messages.NEW,
                color: o.Z.unsafe_rawColors.BRAND_260.css,
                className: A.titleBadge
              }) : null]
            }), (0, t.jsx)("div", {
              className: A.channelSubtitles,
              children: G
            })]
          }), (0, t.jsxs)("div", {
            className: A.channelActions,
            children: [(0, t.jsx)(c.Button, {
              look: c.ButtonLooks.OUTLINED,
              color: c.ButtonColors.PRIMARY,
              size: c.ButtonSizes.SMALL,
              className: A.viewChannelButton,
              onClick: F,
              children: z
            }), (0, t.jsx)(c.Checkbox, {
              "aria-checked": D,
              value: D,
              type: c.Checkbox.Types.INVERTED,
              disabled: w,
              innerClassName: A.checkboxInner,
              displayOnly: !0
            })]
          })]
        })
      }), !h && (0, t.jsx)(P, {})]
    })
  });

function w(e) {
  let {
    categories: n,
    guild: l,
    className: s,
    innerClassName: r,
    hasSidebar: o
  } = e, {
    onChannelClick: u
  } = (0, v.Z)(l.id), m = (0, h.wE)(d.z.CHANNEL_BROWSER_NUX) ? 0 : -1, x = i.useCallback(e => {
    let {
      section: i
    } = e;
    if (0 === i && -1 === m) return null;
    let s = n._categories[i + m];
    return (0, t.jsx)(B, {
      channel: s.channel,
      guild: l,
      onCategoryClick: u
    }, s.channel.id)
  }, [n, l, m, u]), N = i.useCallback(e => {
    let {
      section: i,
      row: s
    } = e;
    if (0 === i && -1 === m) return (0, t.jsx)(S.Z, {
      guild: l
    });
    let a = n._categories[i + m],
      r = n[a.channel.id][s];
    return null == r ? null : (0, t.jsx)(D, {
      category: a.channel,
      channel: r.channel,
      guild: l,
      isFirstChannel: 0 === s,
      isLastChannel: n[a.channel.id].length - 1 === s,
      tooltipDirection: o ? "right" : "top",
      onChannelClick: u
    }, r.channel.id)
  }, [n, l, m, o, u]), C = (0, S.q)(l.id), g = (0, I.tn)(l.id, n, 64, C);
  return (0, t.jsx)(c.ListAuto, {
    className: s,
    innerClassName: a()(r, A.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => g[e].rowHeight,
    renderSection: x,
    renderRow: N,
    sections: g.map(e => e.rowCount)
  }, "channel-browser-list")
}