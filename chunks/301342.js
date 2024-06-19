n.d(t, {
  P: function() {
    return L
  },
  Qo: function() {
    return v
  },
  kw: function() {
    return M
  },
  rj: function() {
    return A
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(91192),
  o = n(442837),
  u = n(481060),
  c = n(211739),
  d = n(239091),
  h = n(146773),
  g = n(680089),
  p = n(430824),
  m = n(496675),
  C = n(9156),
  E = n(514342),
  f = n(151827),
  _ = n(203818),
  I = n(438144),
  N = n(981631),
  Z = n(689938),
  S = n(949601);

function x(e) {
  e.stopPropagation()
}
let T = i.memo(function(e) {
  let t, {
      channel: s,
      connectChannelDragSource: h,
      connectChannelDropTarget: _,
      disableManageChannels: I,
      position: T,
      sortingPosition: L,
      hideIcon: v,
      children: A
    } = e,
    M = (0, o.e7)([C.ZP], () => C.ZP.isChannelMuted(s.getGuildId(), s.id)),
    R = (0, o.e7)([g.Z], () => g.Z.isCollapsed(s.id)),
    O = (0, o.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, s));
  t = null != L ? T > L ? S.containerDragAfter : S.containerDragBefore : S.containerDefault;
  let P = i.useCallback(() => {
      R ? (0, c.mJ)(s.id) : (0, c.c4)(s.id)
    }, [s.id, R]),
    j = i.useCallback(e => {
      if ("null" !== s.id) {
        let t = p.Z.getGuild(s.getGuildId());
        null != t && (0, d.jW)(e, async () => {
          let {
            default: e
          } = await n.e("8965").then(n.bind(n, 139035));
          return n => (0, l.jsx)(e, {
            ...n,
            channel: s,
            guild: t
          })
        })
      }
    }, [s]),
    b = i.useCallback(() => {
      let e = s.type === N.d4z.GUILD_CATEGORY ? null : s.type,
        t = s.getGuildId();
      null != t && (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("99387"), n.e("45094")]).then(n.bind(n, 218613));
        return n => (0, l.jsx)(i, {
          ...n,
          channelType: e,
          guildId: t,
          categoryId: "null" !== s.id ? s.id : null
        })
      })
    }, [s]),
    {
      role: D,
      tabIndex: y,
      ...U
    } = (0, a.JA)(s.id),
    G = i.useRef(null),
    w = i.useRef(null),
    k = (0, l.jsxs)("li", {
      className: t,
      "data-dnd-name": s.name,
      children: [(0, l.jsx)(u.FocusRing, {
        focusTarget: G,
        ringTarget: w,
        offset: {
          left: 4,
          right: 4
        },
        children: (0, l.jsxs)("div", {
          ref: w,
          className: r()(S.iconVisibility, S.wrapper, {
            [S.collapsed]: R,
            [S.muted]: M,
            [S.clickable]: !0
          }),
          onContextMenu: j,
          children: [(0, l.jsxs)(u.Clickable, {
            innerRef: G,
            className: S.mainContent,
            tabIndex: y,
            ...U,
            onClick: P,
            "aria-label": Z.Z.Messages.CATEGORY_A11Y_LABEL.format({
              categoryName: s.name
            }),
            "aria-expanded": !R,
            focusProps: {
              enabled: !1
            },
            children: [v ? null : (0, l.jsx)(u.ChevronSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: S.icon
            }), (0, l.jsx)(f.Z, {
              className: S.name,
              children: (0, l.jsx)(E.Z, {
                children: s.name
              })
            })]
          }), (0, l.jsx)("div", {
            onClick: x,
            className: S.children,
            children: O && !I ? (0, l.jsx)(u.Tooltip, {
              text: Z.Z.Messages.CREATE_CHANNEL,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, l.jsx)(u.Button, {
                  "aria-label": Z.Z.Messages.CREATE_CHANNEL,
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  className: r()(S.addButton, S.forceVisible),
                  onClick: b,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  tabIndex: y,
                  focusProps: {
                    offset: {
                      top: -3,
                      right: -4,
                      bottom: -3,
                      left: -4
                    }
                  },
                  children: (0, l.jsx)(u.PlusSmallIcon, {
                    size: "sm",
                    color: "currentColor",
                    className: S.addButtonIcon
                  })
                })
              }
            }) : null
          })]
        })
      }), A]
    });
  return null != _ && null != h ? _(h(k)) : k
});
t.ZP = (0, h.B)(T);
let L = i.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: i
    } = e;
    return (0, l.jsx)("li", {
      className: r()(i, S.containerDefault),
      children: (0, l.jsxs)("div", {
        className: r()(S.iconVisibility, S.wrapperStatic),
        children: [(0, l.jsx)("div", {
          className: S.mainContent,
          children: (0, l.jsx)(f.Z, {
            className: S.name,
            children: (0, l.jsx)(E.Z, {
              children: t
            })
          })
        }), null != n ? (0, l.jsx)(u.TooltipContainer, {
          text: Z.Z.Messages.CLEAR_RECENT_CHANNELS,
          className: S.dismissWrapper,
          children: (0, l.jsx)(u.Clickable, {
            className: S.dismissButton,
            onClick: n,
            children: (0, l.jsx)(u.CircleXIcon, {
              size: "md",
              color: "currentColor",
              className: S.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  v = i.memo(function(e) {
    let {
      category: t
    } = e, n = (0, o.e7)([_.Z], () => _.Z.isVoiceCategoryCollapsed(t.guild.id)), s = i.useCallback(() => {
      n ? (0, I.s)(t.guild.id) : (0, I.M)(t.guild.id)
    }, [t.guild.id, n]);
    return n ? (0, l.jsxs)(u.Clickable, {
      className: S.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(u.VoiceNormalIcon, {
        size: "xs",
        color: "currentColor",
        className: S.voiceChannelsToggleIcon
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: Z.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
      })]
    }) : (0, l.jsxs)(u.Clickable, {
      className: S.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(u.VoiceNormalIcon, {
        size: "xs",
        color: "currentColor",
        className: S.voiceChannelsToggleIcon
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: Z.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
      })]
    })
  }),
  A = i.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, i = (0, o.e7)([_.Z], () => _.Z.isVoiceCategoryCollapsed(t.guild.id));
    return i || null == n || n.record.type === N.d4z.GUILD_CATEGORY ? i ? (0, l.jsx)("li", {
      className: r()(S.containerDefault),
      children: (0, l.jsx)("div", {
        className: r()(S.iconVisibility, S.wrapperStatic),
        children: (0, l.jsx)(f.Z, {
          className: S.name,
          children: (0, l.jsx)(E.Z, {
            children: Z.Z.Messages.VOICE_CHANNELS_CATEGORY_HEADER
          })
        })
      })
    }) : null : (0, l.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  M = i.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, l.jsx)("li", {
      className: r()(S.containerDefault),
      children: (0, l.jsx)("div", {
        className: r()(S.iconVisibility, S.wrapperStatic),
        children: (0, l.jsx)(f.Z, {
          className: S.name,
          children: (0, l.jsx)(E.Z, {
            children: t.name
          })
        })
      })
    })
  })