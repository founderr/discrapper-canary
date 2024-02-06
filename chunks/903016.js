"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("808653"), n("424973");
var r = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  a = n("446674"),
  o = n("266491"),
  u = n("77078"),
  c = n("345116"),
  d = n("521012"),
  f = n("145131"),
  h = n("965397"),
  p = n("423487"),
  E = n("782340"),
  m = n("47274");
class I extends s.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, r.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: f.default.Justify.BETWEEN,
      children: [(0, r.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, r.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function S(e) {
  let {
    imageClass: t,
    children: n,
    error: s,
    onDismissError: l
  } = e;
  return (0, r.jsxs)("div", {
    className: m.content,
    children: [(0, r.jsx)("div", {
      className: i(m.image, t)
    }), n, (0, r.jsx)(o.default, {
      children: null != s ? (0, r.jsx)(h.default, {
        className: m.error,
        children: (0, r.jsx)(u.FormErrorBlock, {
          onDismiss: l,
          children: s.message
        })
      }) : null
    })]
  })
}
let _ = e => {
  let {
    canceledCount: t
  } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
  return null == n ? null : (0, r.jsxs)("div", {
    className: m.pendingCancellation,
    children: [(0, r.jsx)(p.default, {
      className: m.pendingCancellationIcon
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: m.pendingCancellationMessage,
      children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function g(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: s,
    warning: l,
    error: i,
    onDismissError: a,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, r.jsxs)(S, {
    imageClass: t,
    error: i,
    onDismissError: a,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(c.default, {
      className: m.guildCard,
      guild: s,
      subscriptionChange: o
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), d > 0 ? (0, r.jsx)(_, {
      canceledCount: d
    }) : null]
  })
}
class C extends s.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: s,
      onCancel: l
    } = this.props;
    return (0, r.jsxs)(u.ModalFooter, {
      children: [(0, r.jsx)(u.Button, {
        onClick: s,
        submitting: n,
        "aria-label": t,
        children: e
      }), (0, r.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: l,
        disabled: n,
        children: E.default.Messages.CANCEL
      })]
    })
  }
}
class L extends s.PureComponent {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: l,
      confirmation: i,
      confirmationLabel: a,
      imageClass: o,
      error: c,
      isModifyingSubscription: d,
      onConfirm: f,
      onCancel: h,
      onDismissError: p,
      canceledCount: E
    } = this.props;
    return (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(I, {
        text: t
      }), (0, r.jsx)(u.ModalContent, {
        children: (0, r.jsx)(g, {
          guild: e,
          blurb: n,
          warning: l,
          imageClass: o,
          error: c,
          onDismissError: p,
          canceledCount: E
        })
      }), (0, r.jsx)(C, {
        confirmation: i,
        confirmationLabel: a,
        isModifyingSubscription: d,
        onConfirm: f,
        onCancel: h
      })]
    })
  }
}
L.Header = I, L.ApplyBody = g, L.TransferBody = function(e) {
  var t, n;
  let {
    imageClass: l,
    blurb: i,
    fromGuilds: a,
    toGuild: o,
    error: d,
    onDismissError: f,
    slotCount: h = 1,
    canceledCount: p = 0
  } = e, I = s.useRef(a), g = null === (t = I.current) || void 0 === t ? void 0 : t.length, C = null === (n = I.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, r.jsxs)(S, {
    imageClass: l,
    error: d,
    onDismissError: f,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: i
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: m.transferGuildCardHeader,
      children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: g
      })
    }), null != C ? Object.keys(C).map(e => (0, r.jsx)(c.default, {
      className: m.transferFromGuildCard,
      guild: C[e][0],
      subscriptionChange: -1 * C[e].length
    }, e)) : null, (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.transferGuildCardHeader,
      children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: h
      })
    }), (0, r.jsx)("div", {
      className: m.activeTransferGuildCardBorder,
      children: (0, r.jsx)(c.default, {
        className: m.transferToGuildCard,
        guild: o,
        subscriptionChange: null != a ? a.length : 1
      })
    }), p > 0 ? (0, r.jsx)(_, {
      canceledCount: p
    }) : null]
  })
}, L.Footer = C;
var R = L