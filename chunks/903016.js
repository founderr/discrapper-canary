"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  o = n("266491"),
  u = n("77078"),
  c = n("345116"),
  d = n("521012"),
  f = n("145131"),
  h = n("965397"),
  E = n("423487"),
  _ = n("299039"),
  p = n("782340"),
  m = n("47274");
class I extends r.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, s.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: f.default.Justify.BETWEEN,
      children: [(0, s.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, s.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function S(e) {
  let {
    imageClass: t,
    children: n,
    error: r,
    onDismissError: l
  } = e;
  return (0, s.jsxs)("div", {
    className: m.content,
    children: [(0, s.jsx)("div", {
      className: a(m.image, t)
    }), n, (0, s.jsx)(o.default, {
      children: null != r ? (0, s.jsx)(h.default, {
        className: m.error,
        children: (0, s.jsx)(u.FormErrorBlock, {
          onDismiss: l,
          children: r.message
        })
      }) : null
    })]
  })
}
let g = e => {
  let {
    canceledCount: t
  } = e, n = (0, i.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
  return null == n ? null : (0, s.jsxs)("div", {
    className: m.pendingCancellation,
    children: [(0, s.jsx)(E.default, {
      className: m.pendingCancellationIcon
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      className: m.pendingCancellationMessage,
      children: p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function L(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: r,
    warning: l,
    error: a,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, s.jsxs)(S, {
    imageClass: t,
    error: a,
    onDismissError: i,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, s.jsx)(c.default, {
      className: m.guildCard,
      guild: r,
      subscriptionChange: o
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), d > 0 ? (0, s.jsx)(g, {
      canceledCount: d
    }) : null]
  })
}
class C extends r.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: r,
      onCancel: l
    } = this.props;
    return (0, s.jsxs)(u.ModalFooter, {
      children: [(0, s.jsx)(u.Button, {
        onClick: r,
        submitting: n,
        "aria-label": t,
        children: e
      }), (0, s.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: l,
        disabled: n,
        children: p.default.Messages.CANCEL
      })]
    })
  }
}
class R extends r.PureComponent {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: l,
      confirmation: a,
      confirmationLabel: i,
      imageClass: o,
      error: c,
      isModifyingSubscription: d,
      onConfirm: f,
      onCancel: h,
      onDismissError: E,
      canceledCount: _
    } = this.props;
    return (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(I, {
        text: t
      }), (0, s.jsx)(u.ModalContent, {
        children: (0, s.jsx)(L, {
          guild: e,
          blurb: n,
          warning: l,
          imageClass: o,
          error: c,
          onDismissError: E,
          canceledCount: _
        })
      }), (0, s.jsx)(C, {
        confirmation: a,
        confirmationLabel: i,
        isModifyingSubscription: d,
        onConfirm: f,
        onCancel: h
      })]
    })
  }
}
R.Header = I, R.ApplyBody = L, R.TransferBody = function(e) {
  var t, n;
  let {
    imageClass: l,
    blurb: a,
    fromGuilds: i,
    toGuild: o,
    error: d,
    onDismissError: f,
    slotCount: h = 1,
    canceledCount: E = 0
  } = e, I = r.useRef(i), L = null === (t = I.current) || void 0 === t ? void 0 : t.length, C = null === (n = I.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, s.jsxs)(S, {
    imageClass: l,
    error: d,
    onDismissError: f,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), (0, s.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: m.transferGuildCardHeader,
      children: p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: L
      })
    }), null != C ? _.default.keys(C).map(e => (0, s.jsx)(c.default, {
      className: m.transferFromGuildCard,
      guild: C[e][0],
      subscriptionChange: -1 * C[e].length
    }, e)) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.transferGuildCardHeader,
      children: p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: h
      })
    }), (0, s.jsx)("div", {
      className: m.activeTransferGuildCardBorder,
      children: (0, s.jsx)(c.default, {
        className: m.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), E > 0 ? (0, s.jsx)(g, {
      canceledCount: E
    }) : null]
  })
}, R.Footer = C;
var N = R