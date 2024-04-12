"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("493683"),
  d = a("239091"),
  c = a("194359"),
  f = a("703656"),
  E = a("592125"),
  h = a("131951"),
  _ = a("974029"),
  C = a("621113"),
  m = a("51144"),
  S = a("321488"),
  p = a("417183"),
  I = a("825682"),
  T = a("170245"),
  g = a("981631"),
  A = a("65154"),
  N = a("689938"),
  v = a("432182");

function R(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}

function O(e) {
  let {
    user: t,
    onSelect: a
  } = e, s = () => {
    c.default.removeFriend(t.id, {
      location: "Friends"
    })
  }, l = (0, r.useStateFromStores)([h.default], () => h.default.supports(A.Features.VIDEO));
  return (0, n.jsxs)(o.Menu, {
    navId: "friend-row",
    "aria-label": N.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: d.closeContextMenu,
    onSelect: a,
    children: [l ? (0, n.jsx)(o.MenuItem, {
      id: "start-video-call",
      label: N.default.Messages.START_VIDEO_CALL,
      action: function() {
        u.default.openPrivateChannel(t.id, !0, !0)
      }
    }) : null, (0, n.jsx)(o.MenuItem, {
      id: "start-voice-call",
      label: N.default.Messages.START_VOICE_CALL,
      action: () => {
        u.default.openPrivateChannel(t.id, !0)
      }
    }), (0, n.jsx)(o.MenuItem, {
      id: "remove-friend",
      label: N.default.Messages.REMOVE_FRIEND,
      action: () => {
        (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
          header: N.default.Messages.REMOVE_FRIEND_TITLE.format({
            name: m.default.getName(t)
          }),
          confirmText: N.default.Messages.REMOVE_FRIEND,
          cancelText: N.default.Messages.CANCEL,
          onConfirm: s,
          ...e,
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            children: N.default.Messages.REMOVE_FRIEND_BODY.format({
              name: m.default.getName(t)
            })
          })
        }))
      },
      color: "danger"
    })]
  })
}
class L extends s.PureComponent {
  componentWillLeave(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e)
  }
  componentWillEnter(e) {
    null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e)
  }
  render() {
    let {
      user: e,
      isFocused: t,
      activities: a,
      applicationStream: s,
      status: l,
      isMobile: i
    } = this.props, {
      isActiveRow: r
    } = this.state;
    return (0, n.jsx)(p.default, {
      ref: this.peopleListItemRef,
      isFocused: t,
      isActive: r,
      user: e,
      onOtherHover: () => r ? null : (0, d.closeContextMenu)(),
      onClick: this.handleOpenPrivateChannel,
      children: t => (0, n.jsxs)("div", {
        className: v.listItemContents,
        children: [(0, n.jsx)(T.default, {
          user: e,
          status: l,
          isMobile: i,
          subText: (0, n.jsx)(I.default, {
            hovered: t,
            activities: a,
            applicationStream: s,
            status: l,
            user: e
          }),
          hovered: t,
          showAccountIdentifier: !0
        }), (0, n.jsxs)("div", {
          className: v.actions,
          children: [(0, n.jsx)(S.default, {
            icon: _.default,
            tooltip: N.default.Messages.SEND_DM,
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }), (0, n.jsx)(S.default, {
            icon: C.default,
            tooltip: N.default.Messages.MORE,
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "peopleListItemRef", s.createRef()), R(this, "state", {
      isActiveRow: !1
    }), R(this, "handleOpenPrivateChannel", e => {
      let {
        user: t
      } = this.props;
      e.stopPropagation();
      let a = i().find(E.default.getMutablePrivateChannels(), e => e.type === g.ChannelTypes.DM && e.getRecipientId() === t.id);
      null != a ? (0, f.transitionTo)(g.Routes.CHANNEL(g.ME, a.id)) : u.default.openPrivateChannel(t.id)
    }), R(this, "handleOpenActionsMenu", e => {
      let {
        user: t
      } = this.props;
      (0, d.openContextMenu)(e, e => (0, n.jsx)(O, {
        ...e,
        user: t
      }), {
        onClose: () => {
          this.setState({
            isActiveRow: !1
          })
        }
      }), this.setState({
        isActiveRow: !0
      })
    })
  }
}
t.default = L