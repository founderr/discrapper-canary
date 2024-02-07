"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("808653"), n("424973");
var s = n("37983"),
  r = n("884691"),
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
  _ = n("47274");
class m extends r.PureComponent {
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

function I(e) {
  let {
    imageClass: t,
    children: n,
    error: r,
    onDismissError: l
  } = e;
  return (0, s.jsxs)("div", {
    className: _.content,
    children: [(0, s.jsx)("div", {
      className: i(_.image, t)
    }), n, (0, s.jsx)(o.default, {
      children: null != r ? (0, s.jsx)(h.default, {
        className: _.error,
        children: (0, s.jsx)(u.FormErrorBlock, {
          onDismiss: l,
          children: r.message
        })
      }) : null
    })]
  })
}
let S = e => {
  let {
    canceledCount: t
  } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
  return null == n ? null : (0, s.jsxs)("div", {
    className: _.pendingCancellation,
    children: [(0, s.jsx)(p.default, {
      className: _.pendingCancellationIcon
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      className: _.pendingCancellationMessage,
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
    guild: r,
    warning: l,
    error: i,
    onDismissError: a,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, s.jsxs)(I, {
    imageClass: t,
    error: i,
    onDismissError: a,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, s.jsx)(c.default, {
      className: _.guildCard,
      guild: r,
      subscriptionChange: o
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), d > 0 ? (0, s.jsx)(S, {
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
        children: E.default.Messages.CANCEL
      })]
    })
  }
}
class L extends r.PureComponent {
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
    return (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(m, {
        text: t
      }), (0, s.jsx)(u.ModalContent, {
        children: (0, s.jsx)(g, {
          guild: e,
          blurb: n,
          warning: l,
          imageClass: o,
          error: c,
          onDismissError: p,
          canceledCount: E
        })
      }), (0, s.jsx)(C, {
        confirmation: i,
        confirmationLabel: a,
        isModifyingSubscription: d,
        onConfirm: f,
        onCancel: h
      })]
    })
  }
}
L.Header = m, L.ApplyBody = g, L.TransferBody = function(e) {
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
  } = e, m = r.useRef(a), g = null === (t = m.current) || void 0 === t ? void 0 : t.length, C = null === (n = m.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, s.jsxs)(I, {
    imageClass: l,
    error: d,
    onDismissError: f,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: i
    }), (0, s.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: _.transferGuildCardHeader,
      children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: g
      })
    }), null != C ? Object.keys(C).map(e => (0, s.jsx)(c.default, {
      className: _.transferFromGuildCard,
      guild: C[e][0],
      subscriptionChange: -1 * C[e].length
    }, e)) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: _.transferGuildCardHeader,
      children: E.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: h
      })
    }), (0, s.jsx)("div", {
      className: _.activeTransferGuildCardBorder,
      children: (0, s.jsx)(c.default, {
        className: _.transferToGuildCard,
        guild: o,
        subscriptionChange: null != a ? a.length : 1
      })
    }), p > 0 ? (0, s.jsx)(S, {
      canceledCount: p
    }) : null]
  })
}, L.Footer = C;
var R = L