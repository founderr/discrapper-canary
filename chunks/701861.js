n(47120);
var i = n(735250),
  s = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(493683),
  u = n(239091),
  d = n(194359),
  E = n(703656),
  h = n(592125),
  _ = n(131951),
  I = n(51144),
  m = n(321488),
  g = n(417183),
  p = n(825682),
  T = n(170245),
  N = n(981631),
  S = n(65154),
  C = n(689938),
  A = n(53485);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Z(e) {
  let {
    user: t,
    onSelect: n
  } = e, s = () => {
    d.Z.removeFriend(t.id, {
      location: "Friends"
    })
  }, l = (0, r.e7)([_.Z], () => _.Z.supports(S.AN.VIDEO));
  return (0, i.jsxs)(o.Menu, {
    navId: "friend-row",
    "aria-label": C.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: u.Zy,
    onSelect: n,
    children: [l ? (0, i.jsx)(o.MenuItem, {
      id: "start-video-call",
      label: C.Z.Messages.START_VIDEO_CALL,
      action: function() {
        c.Z.openPrivateChannel(t.id, !0, !0)
      }
    }) : null, (0, i.jsx)(o.MenuItem, {
      id: "start-voice-call",
      label: C.Z.Messages.START_VOICE_CALL,
      action: () => {
        c.Z.openPrivateChannel(t.id, !0)
      }
    }), (0, i.jsx)(o.MenuItem, {
      id: "remove-friend",
      label: C.Z.Messages.REMOVE_FRIEND,
      action: () => {
        (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
          header: C.Z.Messages.REMOVE_FRIEND_TITLE.format({
            name: I.ZP.getName(t)
          }),
          confirmText: C.Z.Messages.REMOVE_FRIEND,
          cancelText: C.Z.Messages.CANCEL,
          onConfirm: s,
          ...e,
          children: (0, i.jsx)(o.Text, {
            variant: "text-md/normal",
            children: C.Z.Messages.REMOVE_FRIEND_BODY.format({
              name: I.ZP.getName(t)
            })
          })
        }))
      },
      color: "danger"
    })]
  })
}
class v extends s.PureComponent {
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
      activities: n,
      applicationStream: s,
      status: l,
      lastOnlineTimestamp: a,
      isMobile: r
    } = this.props, {
      isActiveRow: c
    } = this.state;
    return (0, i.jsx)(g.Z, {
      ref: this.peopleListItemRef,
      isFocused: t,
      isActive: c,
      user: e,
      onOtherHover: () => c ? null : (0, u.Zy)(),
      onClick: this.handleOpenPrivateChannel,
      children: t => (0, i.jsxs)("div", {
        className: A.listItemContents,
        children: [(0, i.jsx)(T.Z, {
          user: e,
          status: l,
          isMobile: r,
          subText: (0, i.jsx)(p.Z, {
            hovered: t,
            activities: n,
            applicationStream: s,
            status: l,
            user: e,
            lastOnlineTimestamp: a,
            experimentLocation: "friend_row"
          }),
          hovered: t,
          showAccountIdentifier: !0
        }), (0, i.jsxs)("div", {
          className: A.actions,
          children: [(0, i.jsx)(m.Z, {
            icon: o.ChatIcon,
            tooltip: C.Z.Messages.SEND_DM,
            onClick: this.handleOpenPrivateChannel,
            shouldHighlight: t
          }), (0, i.jsx)(m.Z, {
            icon: o.MoreVerticalIcon,
            tooltip: C.Z.Messages.MORE,
            onClick: this.handleOpenActionsMenu,
            shouldHighlight: t
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "peopleListItemRef", s.createRef()), f(this, "state", {
      isActiveRow: !1
    }), f(this, "handleOpenPrivateChannel", e => {
      let {
        user: t
      } = this.props;
      e.stopPropagation();
      let n = a().find(h.Z.getMutablePrivateChannels(), e => e.type === N.d4z.DM && e.getRecipientId() === t.id);
      null != n ? (0, E.uL)(N.Z5c.CHANNEL(N.ME, n.id)) : c.Z.openPrivateChannel(t.id)
    }), f(this, "handleOpenActionsMenu", e => {
      let {
        user: t
      } = this.props;
      (0, u.vq)(e, e => (0, i.jsx)(Z, {
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
t.Z = v