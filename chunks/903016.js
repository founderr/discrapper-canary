"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("808653"), n("424973");
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
  _ = n("782340"),
  p = n("47274");
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
    className: p.content,
    children: [(0, s.jsx)("div", {
      className: a(p.image, t)
    }), n, (0, s.jsx)(o.default, {
      children: null != r ? (0, s.jsx)(h.default, {
        className: p.error,
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
  } = e, n = (0, i.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
  return null == n ? null : (0, s.jsxs)("div", {
    className: p.pendingCancellation,
    children: [(0, s.jsx)(E.default, {
      className: p.pendingCancellationIcon
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      className: p.pendingCancellationMessage,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
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
    error: a,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, s.jsxs)(I, {
    imageClass: t,
    error: a,
    onDismissError: i,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, s.jsx)(c.default, {
      className: p.guildCard,
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
class L extends r.PureComponent {
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
        children: _.default.Messages.CANCEL
      })]
    })
  }
}
class C extends r.PureComponent {
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
      children: [(0, s.jsx)(m, {
        text: t
      }), (0, s.jsx)(u.ModalContent, {
        children: (0, s.jsx)(g, {
          guild: e,
          blurb: n,
          warning: l,
          imageClass: o,
          error: c,
          onDismissError: E,
          canceledCount: _
        })
      }), (0, s.jsx)(L, {
        confirmation: a,
        confirmationLabel: i,
        isModifyingSubscription: d,
        onConfirm: f,
        onCancel: h
      })]
    })
  }
}
C.Header = m, C.ApplyBody = g, C.TransferBody = function(e) {
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
  } = e, m = r.useRef(i), g = null === (t = m.current) || void 0 === t ? void 0 : t.length, L = null === (n = m.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, s.jsxs)(I, {
    imageClass: l,
    error: d,
    onDismissError: f,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), (0, s.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: p.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: g
      })
    }), null != L ? Object.keys(L).map(e => (0, s.jsx)(c.default, {
      className: p.transferFromGuildCard,
      guild: L[e][0],
      subscriptionChange: -1 * L[e].length
    }, e)) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: p.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: h
      })
    }), (0, s.jsx)("div", {
      className: p.activeTransferGuildCardBorder,
      children: (0, s.jsx)(c.default, {
        className: p.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), E > 0 ? (0, s.jsx)(S, {
      canceledCount: E
    }) : null]
  })
}, C.Footer = L;
var R = C