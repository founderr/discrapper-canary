"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  i = n.n(r),
  l = n("446674"),
  o = n("266491"),
  u = n("77078"),
  d = n("345116"),
  c = n("521012"),
  f = n("145131"),
  _ = n("965397"),
  E = n("423487"),
  h = n("299039"),
  m = n("782340"),
  p = n("763247");
class S extends a.PureComponent {
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
    error: a,
    onDismissError: r
  } = e;
  return (0, s.jsxs)("div", {
    className: p.content,
    children: [(0, s.jsx)("div", {
      className: i(p.image, t)
    }), n, (0, s.jsx)(o.default, {
      children: null != a ? (0, s.jsx)(_.default, {
        className: p.error,
        children: (0, s.jsx)(u.FormErrorBlock, {
          onDismiss: r,
          children: a.message
        })
      }) : null
    })]
  })
}
let C = e => {
  let {
    canceledCount: t
  } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
  return null == n ? null : (0, s.jsxs)("div", {
    className: p.pendingCancellation,
    children: [(0, s.jsx)(E.default, {
      className: p.pendingCancellationIcon
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      className: p.pendingCancellationMessage,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
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
    guild: a,
    warning: r,
    error: i,
    onDismissError: l,
    slotCount: o = 1,
    canceledCount: c = 0
  } = e;
  return (0, s.jsxs)(I, {
    imageClass: t,
    error: i,
    onDismissError: l,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, s.jsx)(d.default, {
      className: p.guildCard,
      guild: a,
      subscriptionChange: o
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), c > 0 ? (0, s.jsx)(C, {
      canceledCount: c
    }) : null]
  })
}
class R extends a.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: a,
      onCancel: r
    } = this.props;
    return (0, s.jsxs)(u.ModalFooter, {
      children: [(0, s.jsx)(u.Button, {
        onClick: a,
        submitting: n,
        "aria-label": t,
        children: e
      }), (0, s.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: r,
        disabled: n,
        children: m.default.Messages.CANCEL
      })]
    })
  }
}
class N extends a.PureComponent {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: r,
      confirmation: i,
      confirmationLabel: l,
      imageClass: o,
      error: d,
      isModifyingSubscription: c,
      onConfirm: f,
      onCancel: _,
      onDismissError: E,
      canceledCount: h
    } = this.props;
    return (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)(S, {
        text: t
      }), (0, s.jsx)(u.ModalContent, {
        children: (0, s.jsx)(g, {
          guild: e,
          blurb: n,
          warning: r,
          imageClass: o,
          error: d,
          onDismissError: E,
          canceledCount: h
        })
      }), (0, s.jsx)(R, {
        confirmation: i,
        confirmationLabel: l,
        isModifyingSubscription: c,
        onConfirm: f,
        onCancel: _
      })]
    })
  }
}
N.Header = S, N.ApplyBody = g, N.TransferBody = function(e) {
  var t, n;
  let {
    imageClass: r,
    blurb: i,
    fromGuilds: l,
    toGuild: o,
    error: c,
    onDismissError: f,
    slotCount: _ = 1,
    canceledCount: E = 0
  } = e, S = a.useRef(l), g = null === (t = S.current) || void 0 === t ? void 0 : t.length, R = null === (n = S.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, s.jsxs)(I, {
    imageClass: r,
    error: c,
    onDismissError: f,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: i
    }), (0, s.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: p.transferGuildCardHeader,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: g
      })
    }), null != R ? h.default.keys(R).map(e => (0, s.jsx)(d.default, {
      className: p.transferFromGuildCard,
      guild: R[e][0],
      subscriptionChange: -1 * R[e].length
    }, e)) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: p.transferGuildCardHeader,
      children: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: _
      })
    }), (0, s.jsx)("div", {
      className: p.activeTransferGuildCardBorder,
      children: (0, s.jsx)(d.default, {
        className: p.transferToGuildCard,
        guild: o,
        subscriptionChange: null != l ? l.length : 1
      })
    }), E > 0 ? (0, s.jsx)(C, {
      canceledCount: E
    }) : null]
  })
}, N.Footer = R;
var T = N