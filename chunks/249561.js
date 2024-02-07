"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("702976"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  d = n("828986"),
  u = n("819689"),
  o = n("679653"),
  c = n("390236"),
  f = n("377114"),
  E = n("699473"),
  g = n("27618"),
  m = n("697218"),
  M = n("822332"),
  h = n("568734"),
  _ = n("870190"),
  N = n("49111"),
  p = n("782340"),
  S = n("834476");
class I extends a.PureComponent {
  render() {
    let e, t;
    let {
      report: n
    } = this.state, {
      channel: a,
      message: l,
      showContextMenuHint: i,
      ...d
    } = this.props, u = a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, h.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
    return i && (e = (0, s.jsx)(M.default, {
      className: S.spacingTop,
      children: p.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
    })), (0, _.canDeleteAndReportMessage)(l) && (t = (0, s.jsx)(r.FormSwitch, {
      value: n,
      onChange: this.handleToggleReport,
      hideBorder: !0,
      className: S.spacingTop,
      children: p.default.Messages.DELETE_MESSAGE_REPORT
    })), (0, s.jsx)(c.default.Provider, {
      value: a.guild_id,
      children: (0, s.jsxs)(r.ConfirmModal, {
        header: u ? p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : p.default.Messages.DELETE_MESSAGE_TITLE,
        confirmText: p.default.Messages.DELETE,
        cancelText: p.default.Messages.CANCEL,
        onConfirm: this.handleDelete,
        ...d,
        children: [(0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: S.spacing,
          children: u ? p.default.Messages.DELETE_FOLLOWED_NEWS_BODY : p.default.Messages.DELETE_MESSAGE_BODY
        }), (0, s.jsx)("div", {
          className: S.message,
          children: (0, s.jsx)(E.default, {
            channel: a,
            message: l,
            disableInteraction: !0
          })
        }), t, e]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      report: !1
    }, this.handleDelete = () => {
      let {
        report: e
      } = this.state, {
        channel: t,
        message: n
      } = this.props;
      e ? (0, f.showReportModalForMessage)(n, () => u.default.deleteMessage(t.id, n.id)) : u.default.deleteMessage(t.id, n.id)
    }, this.handleToggleReport = e => {
      this.setState({
        report: e
      })
    }
  }
}
var A = {
  confirmPin: function(e, t) {
    (0, r.openModal)(n => {
      let a;
      let l = (0, o.computeChannelName)(e, m.default, g.default);
      return a = e.isPrivate() ? p.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : p.default.Messages.PIN_MESSAGE_BODY.format({
        channelName: l
      }), (0, s.jsx)(c.default.Provider, {
        value: e.guild_id,
        children: (0, s.jsxs)(r.ConfirmModal, {
          header: p.default.Messages.PIN_MESSAGE_TITLE,
          confirmText: p.default.Messages.PIN_CONFIRM,
          cancelText: p.default.Messages.CANCEL,
          confirmButtonColor: r.Button.Colors.BRAND,
          onConfirm: () => d.default.pinMessage(e, t.id),
          ...n,
          children: [(0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            className: S.spacing,
            children: a
          }), (0, s.jsx)("div", {
            className: S.message,
            children: (0, s.jsx)(E.default, {
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
    (0, r.openModal)(n => (0, s.jsx)(c.default.Provider, {
      value: e.guild_id,
      children: (0, s.jsxs)(r.ConfirmModal, {
        header: p.default.Messages.UNPIN_MESSAGE_TITLE,
        confirmText: p.default.Messages.UNPIN_CONFIRM,
        cancelText: p.default.Messages.CANCEL,
        onConfirm: () => d.default.unpinMessage(e, t.id),
        ...n,
        children: [(0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: S.spacing,
          children: p.default.Messages.UNPIN_MESSAGE_BODY
        }), (0, s.jsx)("div", {
          className: i(S.message, S.spacing),
          children: (0, s.jsx)(E.default, {
            channel: e,
            message: t,
            disableInteraction: !0
          })
        }), (0, s.jsx)(M.default, {
          children: p.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
        })]
      })
    }))
  },
  confirmDelete: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (0, r.openModal)(a => (0, s.jsx)(I, {
      channel: e,
      message: t,
      showContextMenuHint: n,
      ...a
    }))
  },
  confirmEdit: function(e, t, n) {
    (0, r.openModal)(a => (0, s.jsx)(r.ConfirmModal, {
      header: p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
      confirmText: p.default.Messages.CONFIRM,
      cancelText: p.default.Messages.CANCEL,
      confirmButtonColor: r.Button.Colors.BRAND,
      onConfirm: () => u.default.editMessage(e, t, {
        content: n
      }),
      ...a,
      children: (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        className: S.spacing,
        children: p.default.Messages.EDIT_FOLLOWED_NEWS_BODY
      })
    }))
  }
}