"use strict";
l.r(t), l.d(t, {
  default: function() {
    return F
  }
}), l("47120"), l("653041"), l("536091");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("442837"),
  d = l("704215"),
  o = l("692547"),
  u = l("481060"),
  c = l("239091"),
  h = l("605236"),
  f = l("66999"),
  m = l("549631"),
  C = l("473403"),
  N = l("454585"),
  x = l("22082"),
  g = l("703656"),
  p = l("6025"),
  S = l("922482"),
  E = l("601070"),
  I = l("514342"),
  _ = l("216306"),
  T = l("163"),
  v = l("753540"),
  A = l("70297"),
  O = l("981631"),
  R = l("176505"),
  j = l("689938"),
  b = l("53264");
let L = new Set([O.ChannelTypes.GUILD_FORUM, O.ChannelTypes.GUILD_MEDIA]),
  M = new Set([O.ChannelTypes.GUILD_VOICE, O.ChannelTypes.GUILD_STAGE_VOICE]);

function D(e) {
  let {
    guild: t,
    channel: a,
    onCategoryClick: s
  } = e, r = (0, v.useIsChecked)(t.id, a.id, a.id), d = (0, v.useIsDisabled)(t.id, a.id, a.id);
  return (0, n.jsxs)("div", {
    className: i()(b.categoryRow, {
      [b.uncategorized]: "null" === a.id
    }),
    onContextMenu: e => {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await l.e("8965").then(l.bind(l, "139035"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: a,
          guild: t
        })
      })
    },
    children: [(0, n.jsx)(u.Text, {
      className: b.categoryText,
      color: "text-muted",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: a.name
    }), "null" !== a.id && !d && (0, n.jsxs)(u.Clickable, {
      className: b.selectAll,
      onClick: () => {
        !d && s(t.id, a.id, a.id)
      },
      children: [(0, n.jsx)(u.Checkbox, {
        className: b.selectAllCheckbox,
        size: 14,
        shape: u.Checkbox.Shapes.SMALL_BOX,
        value: r,
        type: u.Checkbox.Types.INVERTED,
        displayOnly: !0
      }), (0, n.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: j.default.Messages.CHANNEL_BROWSER_SELECT_ALL
      })]
    })]
  })
}
let B = a.memo(function() {
    return (0, n.jsx)("div", {
      className: b.separator
    })
  }),
  y = a.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: b.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  w = a.memo(function(e) {
    let {
      channel: t,
      category: a,
      guild: s,
      isFirstChannel: d,
      isLastChannel: h,
      onChannelClick: T,
      tooltipDirection: A = "right"
    } = e, {
      isSubscriptionGated: D
    } = (0, f.default)(t.id), w = (0, v.useIsChecked)(s.id, t.id, a.id), F = (0, v.useIsDisabled)(s.id, t.id, a.id), H = (0, v.useDisabledTooltip)(s.id, a.id), U = (0, r.useStateFromStores)([E.default], () => E.default.getActiveThreadCount(s.id, t.id)), k = (0, r.useStateFromStores)([x.default], () => x.default.shouldIndicateNewChannel(s.id, t.id)), P = e => {
      if (!F) return e.stopPropagation(), T(s.id, t.id, a.id), !0
    }, G = e => {
      t.isGuildVocal() ? (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("8137"), l.e("83331")]).then(l.bind(l, "213202"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: t,
          guild: s
        })
      }) : (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("8137"), l.e("54310")]).then(l.bind(l, "373651"));
        return l => (0, n.jsx)(e, {
          ...l,
          channel: t,
          guild: s
        })
      })
    }, W = function(e, t) {
      let l = [];
      return O.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && l.push((0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: b.channelSubtitle,
        children: j.default.Messages.ACTIVE_FORUM_POST_COUNT.format({
          count: t
        })
      }, "thread-count")), !M.has(e.type) && l.push((0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: b.channelSubtitle,
        children: (0, _.getActiveAgoTimestamp)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && l.push((0, n.jsx)(I.default, {
        children: (0, n.jsx)(u.Text, {
          className: b.topic,
          variant: "text-xs/normal",
          children: N.default.parseTopic(e.topic, !0, {
            channelId: e.id
          })
        })
      }, "topic")), [l.map((e, t) => [e, (0, n.jsx)(y, {
        index: t
      }, "subtitle-separator-".concat(t))])].flat(2).slice(0, -1)
    }(t, U), z = e => (e.stopPropagation(), L.has(t.type) || e.shiftKey) ? ((0, g.transitionToGuild)(s.id, t.id), !0) : t.isGuildStageVoice() || t.isGuildVoice() ? ((0, S.connectAndOpen)(t), !0) : (p.default.openChannelAsSidebar({
      guildId: t.guild_id,
      channelId: t.id,
      baseChannelId: R.StaticChannelRoute.CHANNEL_BROWSER
    }), !0), Y = j.default.Messages.CHANNEL_BROWSER_VIEW;
    t.isGuildStageVoice() || t.isGuildVoice() ? Y = j.default.Messages.JOIN : t.isForumLikeChannel() && (Y = j.default.Messages.OPEN);
    let V = F ? "text-muted" : "text-normal",
      Z = (0, u.useToken)(F ? o.default.colors.TEXT_MUTED : o.default.colors.TEXT_NORMAL).hex();
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.Tooltip, {
        text: H,
        delay: 500,
        position: A,
        children: e => (0, n.jsxs)(u.Clickable, {
          className: i()(b.channelRow, {
            [b.firstChannel]: d,
            [b.lastChannel]: h,
            [b.disabled]: F
          }),
          ...e,
          onClick: P,
          onContextMenu: G,
          children: [(0, n.jsxs)("div", {
            className: b.channelInfo,
            children: [(0, n.jsxs)("div", {
              className: b.channelName,
              children: [(0, n.jsx)(C.ChannelItemIcon, {
                channel: t,
                guild: s
              }), (0, n.jsx)(I.default, {
                className: b.__invalid_name,
                children: (0, n.jsx)(u.Text, {
                  className: b.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: V,
                  children: t.name
                })
              }), D ? (0, n.jsx)(m.default, {
                color: Z,
                className: b.premiumIcon
              }) : null, k ? (0, n.jsx)(u.TextBadge, {
                text: j.default.Messages.NEW,
                color: o.default.unsafe_rawColors.BRAND_260.css,
                className: b.titleBadge
              }) : null]
            }), (0, n.jsx)("div", {
              className: b.channelSubtitles,
              children: W
            })]
          }), (0, n.jsxs)("div", {
            className: b.channelActions,
            children: [(0, n.jsx)(u.Button, {
              look: u.ButtonLooks.OUTLINED,
              color: u.ButtonColors.PRIMARY,
              size: u.ButtonSizes.SMALL,
              className: b.viewChannelButton,
              onClick: z,
              children: Y
            }), (0, n.jsx)(u.Checkbox, {
              "aria-checked": w,
              value: w,
              type: u.Checkbox.Types.INVERTED,
              disabled: F,
              innerClassName: b.checkboxInner,
              displayOnly: !0
            })]
          })]
        })
      }), !h && (0, n.jsx)(B, {})]
    })
  });

function F(e) {
  let {
    categories: t,
    guild: l,
    className: s,
    innerClassName: r,
    hasSidebar: o
  } = e, {
    onChannelClick: c
  } = (0, T.default)(l.id), f = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX) ? 0 : -1, m = a.useCallback(e => {
    let {
      section: a
    } = e;
    if (0 === a && -1 === f) return null;
    let s = t._categories[a + f];
    return (0, n.jsx)(D, {
      channel: s.channel,
      guild: l,
      onCategoryClick: c
    }, s.channel.id)
  }, [t, l, f, c]), C = a.useCallback(e => {
    let {
      section: a,
      row: s
    } = e;
    if (0 === a && -1 === f) return (0, n.jsx)(A.default, {
      guild: l
    });
    let i = t._categories[a + f],
      r = t[i.channel.id][s];
    return null == r ? null : (0, n.jsx)(w, {
      category: i.channel,
      channel: r.channel,
      guild: l,
      isFirstChannel: 0 === s,
      isLastChannel: t[i.channel.id].length - 1 === s,
      tooltipDirection: o ? "right" : "top",
      onChannelClick: c
    }, r.channel.id)
  }, [t, l, f, o, c]), N = (0, A.useNuxCardHeight)(l.id), x = (0, _.useChannelBrowserSections)(l.id, t, 64, N);
  return (0, n.jsx)(u.ListAuto, {
    className: s,
    innerClassName: i()(r, b.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => x[e].rowHeight,
    renderSection: m,
    renderRow: C,
    sections: x.map(e => e.rowCount)
  }, "channel-browser-list")
}