"use strict";
s.r(t), s.d(t, {
  ChannelNotificationSettings: function() {
    return x
  }
}), s("47120");
var i = s("735250"),
  n = s("470079"),
  a = s("481060"),
  l = s("92114"),
  r = s("225433"),
  o = s("933557"),
  d = s("471445"),
  u = s("592125"),
  c = s("324067"),
  h = s("699516"),
  S = s("594174"),
  N = s("285952"),
  f = s("621600"),
  g = s("981631"),
  m = s("689938"),
  E = s("154460");

function _(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class x extends n.PureComponent {
  highlight() {
    this.setState({
      highlight: !0
    }, () => {
      null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
    })
  }
  componentWillUnmount() {
    null != this._timeout && clearTimeout(this._timeout)
  }
  setMessageNotification(e, t, s) {
    let {
      channel: i
    } = this.props, n = i.getGuildId();
    null != n && l.default.updateChannelOverrideSettings(n, i.id, {
      message_notifications: e,
      muted: null != t && t
    }, s)
  }
  handleRadioChange(e) {
    this.setMessageNotification(e, void 0, f.NotificationLabel.notifications(e))
  }
  renderMessageNotificationsRadioOption(e) {
    let {
      messageNotifications: t,
      guildMuted: s,
      muted: n,
      guildMessageNotifications: l,
      checkboxColor: r
    } = this.props, o = t === e;
    (null == t || t === g.UserNotificationSettings.NULL) && e === l && (o = !0);
    let d = a.Checkbox.Types.INVERTED;
    return (n || t === g.UserNotificationSettings.NULL || null == t) && (d = a.Checkbox.Types.GHOST), (0, i.jsx)(a.Checkbox, {
      value: !s && o,
      disabled: s,
      shape: a.Checkbox.Shapes.ROUND,
      color: r,
      type: d,
      onChange: this.handleRadioChange.bind(this, e)
    })
  }
  renderName() {
    let e, t;
    let {
      channel: s
    } = this.props;
    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
    let n = (0, d.getChannelIconComponent)(s);
    if (s.type === g.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
      let e = c.default.getCategories(s.guild_id);
      t = m.default.Messages.NUM_CHANNELS.format({
        num: null != e[s.id] ? e[s.id].length : 0
      })
    } else t = null != e ? m.default.Messages.IN_CATEGORY.format({
      categoryName: (0, o.computeChannelName)(e, S.default, h.default)
    }) : m.default.Messages.NO_CATEGORY;
    return (0, i.jsxs)(N.default, {
      grow: 1,
      className: E.nameContainer,
      children: [null != n ? (0, i.jsx)(n, {
        className: E.icon
      }) : null, (0, i.jsxs)("div", {
        className: E.channelNameContainer,
        children: [(0, i.jsx)(a.Text, {
          variant: "text-md/semibold",
          className: E.channelName,
          children: (0, o.computeChannelName)(s, S.default, h.default)
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: E.channelNameByline,
          children: t
        })]
      })]
    })
  }
  renderOptions() {
    let {
      muted: e,
      guildMuted: t
    } = this.props;
    return (0, i.jsxs)(N.default, {
      grow: 0,
      shrink: 0,
      className: E.checkboxGroup,
      justify: N.default.Justify.AROUND,
      align: N.default.Align.CENTER,
      children: [(0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? E.checkboxContainerMuted : E.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(g.UserNotificationSettings.ALL_MESSAGES)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? E.checkboxContainerMuted : E.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(g.UserNotificationSettings.ONLY_MENTIONS)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? E.checkboxContainerMuted : E.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(g.UserNotificationSettings.NO_MESSAGES)
      }), (0, i.jsx)(N.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: E.checkboxMute,
        children: (0, i.jsx)(a.Checkbox, {
          value: e,
          shape: a.Checkbox.Shapes.BOX,
          type: a.Checkbox.Types.INVERTED,
          onChange: this.handleMute
        })
      })]
    })
  }
  render() {
    let {
      highlight: e
    } = this.state;
    return (0, i.jsxs)(a.Card, {
      outline: !0,
      editable: !0,
      className: e ? E.overrideHighlight : E.override,
      children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
        className: E.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "_timeout", void 0), _(this, "state", {
      highlight: !1
    }), _(this, "unhighlight", () => {
      this.setState({
        highlight: !1
      })
    }), _(this, "handleMute", (e, t) => {
      let {
        messageNotifications: s
      } = this.props;
      this.setMessageNotification(null != s ? s : g.UserNotificationSettings.NULL, t, f.NotificationLabel.muted(t))
    }), _(this, "handleDelete", () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(g.UserNotificationSettings.NULL, !1, f.NotificationLabels.OverrideDeleted), null != e && e(t.id)
    })
  }
}