"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("808653"), n("424973");
var l = n("37983"),
  s = n("884691"),
  i = n("414456"),
  r = n.n(i),
  o = n("446674"),
  a = n("266491"),
  u = n("77078"),
  d = n("345116"),
  c = n("521012"),
  f = n("145131"),
  p = n("965397"),
  h = n("423487"),
  m = n("782340"),
  E = n("47274");
class I extends s.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: f.default.Justify.BETWEEN,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, l.jsx)(u.ModalCloseButton, {
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
    onDismissError: i
  } = e;
  return (0, l.jsxs)("div", {
    className: E.content,
    children: [(0, l.jsx)("div", {
      className: r(E.image, t)
    }), n, (0, l.jsx)(a.default, {
      children: null != s ? (0, l.jsx)(p.default, {
        className: E.error,
        children: (0, l.jsx)(u.FormErrorBlock, {
          onDismiss: i,
          children: s.message
        })
      }) : null
    })]
  })
}
let g = e => {
  let {
    canceledCount: t
  } = e, n = (0, o.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
  return null == n ? null : (0, l.jsxs)("div", {
    className: E.pendingCancellation,
    children: [(0, l.jsx)(h.default, {
      className: E.pendingCancellationIcon
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      className: E.pendingCancellationMessage,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function _(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: s,
    warning: i,
    error: r,
    onDismissError: o,
    slotCount: a = 1,
    canceledCount: c = 0
  } = e;
  return (0, l.jsxs)(S, {
    imageClass: t,
    error: r,
    onDismissError: o,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, l.jsx)(d.default, {
      className: E.guildCard,
      guild: s,
      subscriptionChange: a
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: i
    }), c > 0 ? (0, l.jsx)(g, {
      canceledCount: c
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
      onCancel: i
    } = this.props;
    return (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        onClick: s,
        submitting: n,
        "aria-label": t,
        children: e
      }), (0, l.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: i,
        disabled: n,
        children: m.default.Messages.CANCEL
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
      warning: i,
      confirmation: r,
      confirmationLabel: o,
      imageClass: a,
      error: d,
      isModifyingSubscription: c,
      onConfirm: f,
      onCancel: p,
      onDismissError: h,
      canceledCount: m
    } = this.props;
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(I, {
        text: t
      }), (0, l.jsx)(u.ModalContent, {
        children: (0, l.jsx)(_, {
          guild: e,
          blurb: n,
          warning: i,
          imageClass: a,
          error: d,
          onDismissError: h,
          canceledCount: m
        })
      }), (0, l.jsx)(C, {
        confirmation: r,
        confirmationLabel: o,
        isModifyingSubscription: c,
        onConfirm: f,
        onCancel: p
      })]
    })
  }
}
L.Header = I, L.ApplyBody = _, L.TransferBody = function(e) {
  var t, n;
  let {
    imageClass: i,
    blurb: r,
    fromGuilds: o,
    toGuild: a,
    error: c,
    onDismissError: f,
    slotCount: p = 1,
    canceledCount: h = 0
  } = e, I = s.useRef(o), _ = null === (t = I.current) || void 0 === t ? void 0 : t.length, C = null === (n = I.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, l.jsxs)(S, {
    imageClass: i,
    error: c,
    onDismissError: f,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), (0, l.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: E.transferGuildCardHeader,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: _
      })
    }), null != C ? Object.keys(C).map(e => (0, l.jsx)(d.default, {
      className: E.transferFromGuildCard,
      guild: C[e][0],
      subscriptionChange: -1 * C[e].length
    }, e)) : null, (0, l.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: E.transferGuildCardHeader,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: p
      })
    }), (0, l.jsx)("div", {
      className: E.activeTransferGuildCardBorder,
      children: (0, l.jsx)(d.default, {
        className: E.transferToGuildCard,
        guild: a,
        subscriptionChange: null != o ? o.length : 1
      })
    }), h > 0 ? (0, l.jsx)(g, {
      canceledCount: h
    }) : null]
  })
}, L.Footer = C;
var R = L