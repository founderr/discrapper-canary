n(789020), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(332148),
  c = n(904245),
  u = n(933557),
  d = n(372900),
  _ = n(726521),
  E = n(294218),
  I = n(699516),
  m = n(594174),
  T = n(387204),
  h = n(630388),
  N = n(970257),
  f = n(981631),
  C = n(689938),
  p = n(421476);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class S extends s.PureComponent {
  render() {
let e, t;
let {
  report: n
} = this.state, {
  channel: s,
  message: a,
  showContextMenuHint: r,
  ...o
} = this.props, c = s.type === f.d4z.GUILD_ANNOUNCEMENT && (0, h.yE)(a.flags, f.iLy.CROSSPOSTED);
return r && (e = (0, i.jsx)(T.Z, {
  className: p.spacingTop,
  children: C.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
})), (0, N.vc)(a) && (t = (0, i.jsx)(l.FormSwitch, {
  value: n,
  onChange: this.handleToggleReport,
  hideBorder: !0,
  className: p.spacingTop,
  children: C.Z.Messages.DELETE_MESSAGE_REPORT
})), (0, i.jsx)(d.Z.Provider, {
  value: s.guild_id,
  children: (0, i.jsxs)(l.ConfirmModal, {
    header: c ? C.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : C.Z.Messages.DELETE_MESSAGE_TITLE,
    confirmText: C.Z.Messages.DELETE,
    cancelText: C.Z.Messages.CANCEL,
    onConfirm: this.handleDelete,
    ...o,
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-md/normal',
        className: p.spacing,
        children: c ? C.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : C.Z.Messages.DELETE_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: p.message,
        children: (0, i.jsx)(E.Z, {
          channel: s,
          message: a,
          disableInteraction: !0
        })
      }),
      t,
      e
    ]
  })
});
  }
  constructor(...e) {
super(...e), g(this, 'state', {
  report: !1
}), g(this, 'handleDelete', () => {
  let {
    report: e
  } = this.state, {
    channel: t,
    message: n
  } = this.props;
  e ? (0, _.ak)(n, 'message_delete_alert', () => c.Z.deleteMessage(t.id, n.id)) : c.Z.deleteMessage(t.id, n.id);
}), g(this, 'handleToggleReport', e => {
  this.setState({
    report: e
  });
});
  }
}
t.Z = {
  confirmPin: function(e, t) {
(0, l.openModal)(n => {
  let s;
  let a = (0, u.F6)(e, m.default, I.Z);
  return s = e.isPrivate() ? C.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : C.Z.Messages.PIN_MESSAGE_BODY.format({
    channelName: a
  }), (0, i.jsx)(d.Z.Provider, {
    value: e.guild_id,
    children: (0, i.jsxs)(l.ConfirmModal, {
      header: C.Z.Messages.PIN_MESSAGE_TITLE,
      confirmText: C.Z.Messages.PIN_CONFIRM,
      cancelText: C.Z.Messages.CANCEL,
      confirmButtonColor: l.Button.Colors.BRAND,
      onConfirm: () => o.Z.pinMessage(e, t.id),
      ...n,
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-md/normal',
          className: p.spacing,
          children: s
        }),
        (0, i.jsx)('div', {
          className: p.message,
          children: (0, i.jsx)(E.Z, {
            channel: e,
            message: t,
            animateAvatar: !1,
            disableInteraction: !0
          })
        })
      ]
    })
  });
});
  },
  confirmUnpin: function(e, t) {
(0, l.openModal)(n => (0, i.jsx)(d.Z.Provider, {
  value: e.guild_id,
  children: (0, i.jsxs)(l.ConfirmModal, {
    header: C.Z.Messages.UNPIN_MESSAGE_TITLE,
    confirmText: C.Z.Messages.UNPIN_CONFIRM,
    cancelText: C.Z.Messages.CANCEL,
    onConfirm: () => o.Z.unpinMessage(e, t.id),
    ...n,
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-md/normal',
        className: p.spacing,
        children: C.Z.Messages.UNPIN_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: r()(p.message, p.spacing),
        children: (0, i.jsx)(E.Z, {
          channel: e,
          message: t,
          disableInteraction: !0
        })
      }),
      (0, i.jsx)(T.Z, {
        children: C.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
      })
    ]
  })
}));
  },
  confirmDelete: function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
(0, l.openModal)(s => (0, i.jsx)(S, {
  channel: e,
  message: t,
  showContextMenuHint: n,
  ...s
}));
  },
  confirmEdit: function(e, t, n) {
(0, l.openModal)(s => (0, i.jsx)(l.ConfirmModal, {
  header: C.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
  confirmText: C.Z.Messages.CONFIRM,
  cancelText: C.Z.Messages.CANCEL,
  confirmButtonColor: l.Button.Colors.BRAND,
  onConfirm: () => c.Z.editMessage(e, t, {
    content: n
  }),
  ...s,
  children: (0, i.jsx)(l.Text, {
    variant: 'text-md/normal',
    className: p.spacing,
    children: C.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
  })
}));
  }
};