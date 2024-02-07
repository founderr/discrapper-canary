"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  o = n("145079"),
  u = n("86621"),
  d = n("506885"),
  c = n("981601"),
  f = n("145131"),
  p = n("49111"),
  m = n("123106");
class h extends i.Component {
  render() {
    let {
      popoutOpen: e
    } = this.state, {
      user: t,
      analyticsContext: n,
      disablePopout: i,
      guildId: a
    } = this.props, s = {
      location: {
        ...n.location,
        object: p.AnalyticsObjects.LIST_ITEM
      }
    };
    return (0, l.jsx)(r.Popout, {
      preload: () => (0, d.default)(t.id, t.getAvatarURL(a, 80), {
        guildId: a
      }),
      renderPopout: e => (0, l.jsx)(c.default, {
        ...e,
        guildId: a,
        userId: t.id,
        analyticsParams: s
      }),
      position: "left",
      onRequestClose: this.handleUserPopoutClose,
      shouldShow: !i && e,
      children: e => this.renderUserPopout(e)
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      popoutOpen: !1
    }, this.handleClickUser = () => {
      let {
        onPopoutOpen: e
      } = this.props;
      this.setState({
        popoutOpen: !this.state.popoutOpen
      }), null == e || e()
    }, this.handleUserPopoutClose = () => {
      let {
        onPopoutClose: e
      } = this.props;
      this.setState({
        popoutOpen: !1
      }), null == e || e()
    }, this.renderUserPopout = e => {
      let {
        className: t,
        disablePopout: n,
        onContextMenu: i,
        user: a,
        status: u,
        textClassName: d,
        nick: c,
        guildId: p
      } = this.props;
      return (0, l.jsxs)(f.default, {
        align: f.default.Align.CENTER,
        className: s(m.memberListItem, t, {
          [m.popoutDisabled]: n
        }),
        onContextMenu: i,
        onMouseDown: e.onMouseDown,
        onKeyDown: e.onKeyDown,
        onClick: this.handleClickUser,
        children: [(0, l.jsx)(r.Avatar, {
          src: a.getAvatarURL(p, 24),
          className: m.avatar,
          "aria-label": a.username,
          size: r.AvatarSizes.SIZE_24,
          status: u
        }), (0, l.jsx)(r.Text, {
          className: s(m.memberListItemTag, d),
          variant: "text-sm/normal",
          children: (0, l.jsx)(o.default, {
            user: a,
            nick: c,
            usernameClass: m.username,
            hideDiscriminator: !0
          })
        })]
      })
    }
  }
}
h.defaultProps = {
  disablePopout: !1
};
var E = (0, u.default)(h)