"use strict";
n.r(t), n.d(t, {
  INVITE_ROW_HEIGHT: function() {
    return m
  },
  InviteRow: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("819855"),
  a = n("77078"),
  s = n("148387"),
  u = n("843962"),
  o = n("679653"),
  d = n("161778"),
  c = n("305961"),
  f = n("705955"),
  h = n("27618"),
  g = n("697218"),
  I = n("315102"),
  E = n("159885"),
  _ = n("158998"),
  p = n("782340"),
  v = n("435808");
let m = 44;
class T extends i.Component {
  shouldComponentUpdate(e, t) {
    return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
  }
  renderUserOrChannel() {
    let e, t, n;
    let {
      user: i,
      channel: r
    } = this.props;
    if (null != i) t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = _.default.getName(i);
    else if (null != r && (t = (0, u.getChannelIconURL)(r), n = (0, o.computeChannelName)(r, g.default, h.default), null == t && null != r.guild_id)) {
      let n = c.default.getGuild(r.guild_id);
      null != n && (null != n.icon ? t = I.default.getGuildIconURL({
        id: r.guild_id,
        icon: n.icon,
        size: 32
      }) : e = (0, E.getAcronym)(n.name))
    }
    if (null == t || null == n) return null != e ? (0, l.jsx)("div", {
      className: v.acronym,
      "aria-hidden": !0,
      children: e
    }) : null;
    return (0, l.jsx)(a.Avatar, {
      src: t,
      "aria-label": n,
      size: a.AvatarSizes.SIZE_32,
      className: v.inviteRowAvatar
    })
  }
  render() {
    let e;
    let {
      user: t,
      channel: n
    } = this.props, {
      sending: i,
      invited: s,
      hovered: u
    } = this.state;
    return e = s ? (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      size: a.Button.Sizes.SMALL,
      disabled: !0,
      color: (0, r.isThemeDark)(d.default.theme) ? a.Button.Colors.WHITE : a.Button.Colors.BLACK,
      children: p.default.Messages.INVITE_FRIEND_MODAL_SENT
    }) : (0, l.jsx)(a.Button, {
      color: a.Button.Colors.GREEN,
      look: u ? a.Button.Looks.FILLED : a.Button.Looks.OUTLINED,
      className: v.inviteRowButton,
      size: a.Button.Sizes.SMALL,
      submitting: i,
      onClick: this.handleClickInvite,
      children: p.default.Messages.INVITE_FRIEND_MODAL_INVITE
    }), (0, l.jsxs)("div", {
      className: v.inviteRow,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [(0, l.jsxs)("div", {
        className: v.inviteRowInfo,
        children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
          className: v.inviteRowName,
          children: [_.default.getName(t), null != n ? (0, o.computeChannelName)(n, g.default, h.default, !0) : null]
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
      }), s.default.enqueue({
        type: s.InvitePropertiesType.GROUP_DM,
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
      }), s.default.enqueue({
        type: s.InvitePropertiesType.USER,
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