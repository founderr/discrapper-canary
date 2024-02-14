"use strict";
s.r(t), s.d(t, {
  ChannelNotificationSettings: function() {
    return T
  }
}), s("222007");
var i = s("37983"),
  n = s("884691"),
  l = s("77078"),
  a = s("519705"),
  r = s("133403"),
  d = s("679653"),
  o = s("419830"),
  u = s("42203"),
  c = s("245997"),
  h = s("27618"),
  N = s("697218"),
  f = s("145131"),
  g = s("34676"),
  S = s("49111"),
  E = s("782340"),
  m = s("293397");
class T extends n.PureComponent {
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
    null != n && a.default.updateChannelOverrideSettings(n, i.id, {
      message_notifications: e,
      muted: null != t && t
    }, s)
  }
  handleRadioChange(e) {
    this.setMessageNotification(e, void 0, g.NotificationLabel.notifications(e))
  }
  renderMessageNotificationsRadioOption(e) {
    let {
      messageNotifications: t,
      guildMuted: s,
      muted: n,
      guildMessageNotifications: a,
      checkboxColor: r
    } = this.props, d = t === e;
    (null == t || t === S.UserNotificationSettings.NULL) && e === a && (d = !0);
    let o = l.Checkbox.Types.INVERTED;
    return (n || t === S.UserNotificationSettings.NULL || null == t) && (o = l.Checkbox.Types.GHOST), (0, i.jsx)(l.Checkbox, {
      value: !s && d,
      disabled: s,
      shape: l.Checkbox.Shapes.ROUND,
      color: r,
      type: o,
      onChange: this.handleRadioChange.bind(this, e)
    })
  }
  renderName() {
    let e, t;
    let {
      channel: s
    } = this.props;
    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
    let n = (0, o.getChannelIconComponent)(s);
    if (s.type === S.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
      let e = c.default.getCategories(s.guild_id);
      t = E.default.Messages.NUM_CHANNELS.format({
        num: null != e[s.id] ? e[s.id].length : 0
      })
    } else t = null != e ? E.default.Messages.IN_CATEGORY.format({
      categoryName: (0, d.computeChannelName)(e, N.default, h.default)
    }) : E.default.Messages.NO_CATEGORY;
    return (0, i.jsxs)(f.default, {
      grow: 1,
      className: m.nameContainer,
      children: [null != n ? (0, i.jsx)(n, {
        className: m.icon
      }) : null, (0, i.jsxs)("div", {
        className: m.channelNameContainer,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          className: m.channelName,
          children: (0, d.computeChannelName)(s, N.default, h.default)
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: m.channelNameByline,
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
    return (0, i.jsxs)(f.default, {
      grow: 0,
      shrink: 0,
      className: m.checkboxGroup,
      justify: f.default.Justify.AROUND,
      align: f.default.Align.CENTER,
      children: [(0, i.jsx)(f.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ALL_MESSAGES)
      }), (0, i.jsx)(f.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ONLY_MENTIONS)
      }), (0, i.jsx)(f.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: t ? m.checkboxContainerMuted : m.checkboxContainer,
        children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.NO_MESSAGES)
      }), (0, i.jsx)(f.default.Child, {
        wrap: !0,
        grow: 0,
        shrink: 0,
        className: m.checkboxMute,
        children: (0, i.jsx)(l.Checkbox, {
          value: e,
          shape: l.Checkbox.Shapes.BOX,
          type: l.Checkbox.Types.INVERTED,
          onChange: this.handleMute
        })
      })]
    })
  }
  render() {
    let {
      highlight: e
    } = this.state;
    return (0, i.jsxs)(l.Card, {
      outline: !0,
      editable: !0,
      className: e ? m.overrideHighlight : m.override,
      children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
        className: m.removeOverride,
        onClick: this.handleDelete
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      highlight: !1
    }, this.unhighlight = () => {
      this.setState({
        highlight: !1
      })
    }, this.handleMute = (e, t) => {
      let {
        messageNotifications: s
      } = this.props;
      this.setMessageNotification(null != s ? s : S.UserNotificationSettings.NULL, t, g.NotificationLabel.muted(t))
    }, this.handleDelete = () => {
      let {
        onDelete: e,
        channel: t
      } = this.props;
      this.setMessageNotification(S.UserNotificationSettings.NULL, !1, g.NotificationLabels.OverrideDeleted), null != e && e(t.id)
    }
  }
}