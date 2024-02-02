"use strict";
n.r(t), n.d(t, {
  INVITE_ROW_HEIGHT: function() {
    return T
  },
  InviteRow: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  s = n("819855"),
  a = n("77078"),
  r = n("148387"),
  o = n("843962"),
  u = n("679653"),
  d = n("161778"),
  c = n("305961"),
  f = n("705955"),
  g = n("27618"),
  h = n("697218"),
  I = n("315102"),
  E = n("159885"),
  m = n("158998"),
  v = n("782340"),
  p = n("435808");
let T = 44;
class _ extends i.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n;
    let {
      user: i,
      channel: s
    } = this.props;
    if (null != i) t = i.getAvatarURL(null == s ? void 0 : s.guild_id, 32), n = m.default.getName(i);
    else if (null != s && (t = (0, o.getChannelIconURL)(s), n = (0, u.computeChannelName)(s, h.default, g.default), null == t && null != s.guild_id)) {
      let n = c.default.getGuild(s.guild_id);
      null != n && (null != n.icon ? t = I.default.getGuildIconURL({
        id: s.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, E.getAcronym)(n.name))
    }
    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
      className: p.acronym,
      "aria-hidden": !0,
      children: e
    }) : null;
    return (0, l.jsx)(a.Avatar, {
      src: t,
      "aria-label": n,
      size: a.AvatarSizes.SIZE_32,
      className: p.inviteRowAvatar
    })
  }
  render() {
    let e;
    let {
      user: t,
      channel: n
    } = this.props, {
      sending: i,
      invited: r,
      hovered: o
    } = this.state;
    return e = r ? (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      size: a.Button.Sizes.SMALL,
      disabled: !0,
      color: (0, s.isThemeDark)(d.default.theme) ? a.Button.Colors.WHITE : a.Button.Colors.BLACK,
      children: v.default.Messages.INVITE_FRIEND_MODAL_SENT
    }) : (0, l.jsx)(a.Button, {
      color: a.Button.Colors.GREEN,
      look: o ? a.Button.Looks.FILLED : a.Button.Looks.OUTLINED,
      className: p.inviteRowButton,
      size: a.Button.Sizes.SMALL,
      submitting: i,
      onClick: this.handleClickInvite,
      children: v.default.Messages.INVITE_FRIEND_MODAL_INVITE
    }), (0, l.jsxs)("div", {
      className: p.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: p.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: p.inviteRowName,
          children: [m.default.getName(t), null != n ? (0, u.computeChannelName)(n, h.default, g.default, !0) : null]
        })]
      }), e]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      sending: !1,
      invited: !1,
      hovered: !1
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.getSuggestedProps = () => {
      var e;
      let {
        row: t
      } = this.props;
      return null !== (e = null != t ? f.default.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null
    }, this.handleClickInvite = () => {
      let {
        user: e,
        channel: t,
        inviteKey: n,
        location: l
      } = this.props;
      null != n && (null != t ? (this.setState({
        sending: !0
      }), r.default.enqueue({
        type: r.InvitePropertiesType.GROUP_DM,
        channel: t,
        inviteKey: n,
        location: l,
        suggested: this.getSuggestedProps()
      }, e => {
        this.setState({
          sending: !1,
          invited: e
        })
      })) : null != e && (this.setState({
        sending: !0
      }), r.default.enqueue({
        type: r.InvitePropertiesType.USER,
        user: e,
        inviteKey: n,
        location: l,
        suggested: this.getSuggestedProps()
      }, e => {
        this.setState({
          sending: !1,
          invited: e
        })
      })))
    }
  }
}