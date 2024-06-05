"use strict";
s.r(t), s("789020"), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  u = s("481060"),
  d = s("332148"),
  r = s("904245"),
  o = s("933557"),
  c = s("372900"),
  f = s("726521"),
  E = s("294218"),
  g = s("699516"),
  m = s("594174"),
  M = s("387204"),
  h = s("630388"),
  _ = s("970257"),
  N = s("981631"),
  p = s("689938"),
  S = s("929463");

function A(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class I extends a.PureComponent {
  render() {
    let e, t;
    let {
      report: s
    } = this.state, {
      channel: a,
      message: l,
      showContextMenuHint: i,
      ...d
    } = this.props, r = a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, h.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
    return i && (e = (0, n.jsx)(M.default, {
      className: S.spacingTop,
      children: p.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
    })), (0, _.canDeleteAndReportMessage)(l) && (t = (0, n.jsx)(u.FormSwitch, {
      value: s,
      onChange: this.handleToggleReport,
      hideBorder: !0,
      className: S.spacingTop,
      children: p.default.Messages.DELETE_MESSAGE_REPORT
    })), (0, n.jsx)(c.default.Provider, {
      value: a.guild_id,
      children: (0, n.jsxs)(u.ConfirmModal, {
        header: r ? p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : p.default.Messages.DELETE_MESSAGE_TITLE,
        confirmText: p.default.Messages.DELETE,
        cancelText: p.default.Messages.CANCEL,
        onConfirm: this.handleDelete,
        ...d,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          className: S.spacing,
          children: r ? p.default.Messages.DELETE_FOLLOWED_NEWS_BODY : p.default.Messages.DELETE_MESSAGE_BODY
        }), (0, n.jsx)("div", {
          className: S.message,
          children: (0, n.jsx)(E.default, {
            channel: a,
            message: l,
            disableInteraction: !0
          })
        }), t, e]
      })
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      report: !1
    }), A(this, "handleDelete", () => {
      let {
        report: e
      } = this.state, {
        channel: t,
        message: s
      } = this.props;
      e ? (0, f.showReportModalForMessage)(s, "message_delete_alert", () => r.default.deleteMessage(t.id, s.id)) : r.default.deleteMessage(t.id, s.id)
    }), A(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    })
  }
}
t.default = {
  confirmPin: function(e, t) {
    (0, u.openModal)(s => {
      let a;
      let l = (0, o.computeChannelName)(e, m.default, g.default);
      return a = e.isPrivate() ? p.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : p.default.Messages.PIN_MESSAGE_BODY.format({
        channelName: l
      }), (0, n.jsx)(c.default.Provider, {
        value: e.guild_id,
        children: (0, n.jsxs)(u.ConfirmModal, {
          header: p.default.Messages.PIN_MESSAGE_TITLE,
          confirmText: p.default.Messages.PIN_CONFIRM,
          cancelText: p.default.Messages.CANCEL,
          confirmButtonColor: u.Button.Colors.BRAND,
          onConfirm: () => d.default.pinMessage(e, t.id),
          ...s,
          children: [(0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            className: S.spacing,
            children: a
          }), (0, n.jsx)("div", {
            className: S.message,
            children: (0, n.jsx)(E.default, {
              channel: e,
              message: t,
              animateAvatar: !1,
              disableInteraction: !0
            })
          })]
        })
      })
    })
  },
  confirmUnpin: function(e, t) {
    (0, u.openModal)(s => (0, n.jsx)(c.default.Provider, {
      value: e.guild_id,
      children: (0, n.jsxs)(u.ConfirmModal, {
        header: p.default.Messages.UNPIN_MESSAGE_TITLE,
        confirmText: p.default.Messages.UNPIN_CONFIRM,
        cancelText: p.default.Messages.CANCEL,
        onConfirm: () => d.default.unpinMessage(e, t.id),
        ...s,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          className: S.spacing,
          children: p.default.Messages.UNPIN_MESSAGE_BODY
        }), (0, n.jsx)("div", {
          className: i()(S.message, S.spacing),
          children: (0, n.jsx)(E.default, {
            channel: e,
            message: t,
            disableInteraction: !0
          })
        }), (0, n.jsx)(M.default, {
          children: p.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
        })]
      })
    }))
  },
  confirmDelete: function(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (0, u.openModal)(a => (0, n.jsx)(I, {
      channel: e,
      message: t,
      showContextMenuHint: s,
      ...a
    }))
  },
  confirmEdit: function(e, t, s) {
    (0, u.openModal)(a => (0, n.jsx)(u.ConfirmModal, {
      header: p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
      confirmText: p.default.Messages.CONFIRM,
      cancelText: p.default.Messages.CANCEL,
      confirmButtonColor: u.Button.Colors.BRAND,
      onConfirm: () => r.default.editMessage(e, t, {
        content: s
      }),
      ...a,
      children: (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        className: S.spacing,
        children: p.default.Messages.EDIT_FOLLOWED_NEWS_BODY
      })
    }))
  }
}