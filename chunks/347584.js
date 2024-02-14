"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("974667"),
  o = s("35092"),
  d = s("819855"),
  u = s("77078"),
  c = s("376556"),
  E = s("679653"),
  _ = s("506885"),
  I = s("981601"),
  T = s("161778"),
  f = s("27618"),
  S = s("697218"),
  m = s("461380"),
  N = s("987663"),
  g = s("158998"),
  h = s("523096"),
  C = s("817343"),
  R = s("49111"),
  x = s("782340"),
  L = s("15994");
class O extends l.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, a.jsxs)("span", {
      onContextMenu: t,
      className: L.userHook,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: g.default.getUserTag(e, {
          mode: "username"
        })
      }), "0" !== e.discriminator && (0, a.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: L.discrim,
        children: ["#", e.discriminator]
      })]
    })
  }
}
class p extends l.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== R.AuditLogActionTypes.DELETE || e.action === R.AuditLogActions.MEMBER_BAN_ADD || e.action === R.AuditLogActions.MEMBER_KICK || e.action === R.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !(0, C.shouldNotRenderChangeDetail)(e, t))
  }
  renderTitle() {
    let {
      log: e,
      onUserContextMenu: t,
      onTargetContextMenu: s,
      onChannelContextMenu: l
    } = this.props, {
      user: n,
      target: i,
      options: r
    } = e, o = N.getChangeTitle(e);
    return null != o ? (0, a.jsx)("div", {
      className: L.overflowEllipsis,
      children: o.format({
        user: n,
        target: i,
        userHook: (s, l) => {
          if (null != e.user) return (0, a.jsx)(O, {
            user: e.user,
            onContextMenu: t
          }, l);
          if (null != e.options.integration_type) {
            var n;
            let t = c.default.get(e.options.integration_type);
            return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : x.default.Messages.UNKNOWN_INTEGRATION
          }
          return x.default.Messages.UNKNOWN_USER
        },
        targetHook: (t, l) => e.targetType === R.AuditLogTargetTypes.USER ? (0, a.jsx)(O, {
          user: e.target,
          onContextMenu: s
        }, l) : (0, a.jsx)("span", {
          onContextMenu: s,
          children: t
        }, l),
        count: r.count,
        channel: r.channel ? "string" == typeof r.channel ? r.channel : (0, E.computeChannelName)(r.channel, S.default, f.default, !0) : null,
        channelHook: (e, t) => (0, a.jsx)("span", {
          onContextMenu: l,
          children: e
        }, t),
        subtarget: r.subtarget
      })
    }) : null
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t,
      guild: s,
      onContentClick: l
    } = this.props;
    return e && null != s ? (0, a.jsx)(C.AuditLogExpandedChangeDetails, {
      log: t,
      guild: s,
      onContentClick: l
    }) : null
  }
  renderEntryAvatar() {
    let {
      props: {
        log: e,
        guildId: t,
        theme: s
      }
    } = this, {
      user: l,
      userId: n,
      options: {
        integration_type: i
      }
    } = e;
    if (null != l && null != n) return (0, a.jsx)(u.Popout, {
      preload: () => (0, _.default)(n, l.getAvatarURL(t, 80), {
        guildId: t
      }),
      renderPopout: e => (0, a.jsx)(I.default, {
        ...e,
        userId: n,
        guildId: t
      }),
      children: s => {
        var l, n, i;
        return (0, a.jsx)(u.Avatar, {
          ...s,
          onClick: e => {
            e.stopPropagation(), s.onClick(e)
          },
          className: L.avatar,
          src: (l = e, n = t, l.action === R.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || l.action === R.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === R.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === R.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? (0, h.getAutomodAvatarURL)() : null === (i = l.user) || void 0 === i ? void 0 : i.getAvatarURL(n, 40)),
          "aria-hidden": !0,
          size: u.AvatarSizes.SIZE_40
        })
      }
    });
    if (null != i) {
      let e = c.default.get(i);
      if (null != e) {
        let t = (0, d.isThemeDark)(s) ? e.icon.darkSVG : e.icon.lightSVG;
        return (0, a.jsx)(u.Avatar, {
          className: L.avatar,
          src: t,
          "aria-hidden": !0,
          size: u.AvatarSizes.SIZE_40
        })
      }
    }
    return null
  }
  render() {
    let e;
    let {
      log: t,
      className: s,
      expanded: l,
      onHeaderClick: n
    } = this.props, o = this.hasChangesToRender(), d = L.headerDefault;
    l ? d = L.headerExpanded : o && (d = L.headerClickable);
    let c = t.timestampStart.calendar(),
      E = t.timestampEnd.calendar();
    e = c === E ? (0, a.jsx)(u.Text, {
      className: L.timestamp,
      variant: "text-sm/normal",
      children: c
    }) : (0, a.jsxs)(u.Text, {
      className: L.timestamp,
      variant: "text-sm/normal",
      children: [c, "—", E]
    });
    let _ = o ? n : R.NOOP;
    return (0, a.jsx)(r.ListNavigatorItem, {
      id: t.id,
      children: n => (0, a.jsxs)("div", {
        className: i(L.auditLog, s),
        children: [(0, a.jsxs)(u.Clickable, {
          className: d,
          "aria-expanded": l,
          onClick: _,
          ...n,
          children: [(0, a.jsx)(C.AuditLogIcon, {
            action: t.action,
            actionType: t.actionType,
            targetType: t.targetType
          }), this.renderEntryAvatar(), (0, a.jsxs)("div", {
            className: L.timeWrap,
            children: [(0, a.jsx)("div", {
              className: L.title,
              children: this.renderTitle()
            }), e]
          }), o ? (0, a.jsx)(m.default, {
            className: L.expand,
            foreground: L.expandForeground,
            expanded: l,
            "aria-hidden": !0
          }) : null]
        }), l ? (0, a.jsx)("div", {
          className: L.divider
        }) : null, this.renderChangeSummary()]
      })
    })
  }
}
var A = o.default.connectStores([T.default], () => ({
  theme: T.default.theme
}))(p)