"use strict";
t.r(l), t("724458"), t("653041"), t("47120");
var s, a = t("735250"),
  n = t("470079"),
  r = t("120356"),
  i = t.n(r),
  o = t("442837"),
  d = t("215569"),
  u = t("481060"),
  c = t("777789"),
  C = t("78839"),
  m = t("285952"),
  S = t("864293"),
  f = t("759231"),
  I = t("709054"),
  _ = t("689938"),
  M = t("240323");

function E(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e
}
class x extends n.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: m.default.Justify.BETWEEN,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, a.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function U(e) {
  let {
    imageClass: l,
    children: t,
    error: s,
    onDismissError: n
  } = e;
  return (0, a.jsxs)("div", {
    className: M.content,
    children: [(0, a.jsx)("div", {
      className: i()(M.image, l)
    }), t, (0, a.jsx)(d.TransitionGroup, {
      children: null != s ? (0, a.jsx)(S.default, {
        className: M.error,
        children: (0, a.jsx)(u.FormErrorBlock, {
          onDismiss: n,
          children: s.message
        })
      }) : null
    })]
  })
}
let R = e => {
  let {
    canceledCount: l
  } = e, t = (0, o.useStateFromStores)([C.default], () => C.default.getPremiumTypeSubscription());
  return null == t ? null : (0, a.jsxs)("div", {
    className: M.pendingCancellation,
    children: [(0, a.jsx)(f.default, {
      className: M.pendingCancellationIcon
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      className: M.pendingCancellationMessage,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: t.currentPeriodEnd,
        canceledCount: l
      })
    })]
  })
};

function N(e) {
  let {
    imageClass: l,
    blurb: t,
    guild: s,
    warning: n,
    error: r,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, a.jsxs)(U, {
    imageClass: l,
    error: r,
    onDismissError: i,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: t
    }), (0, a.jsx)(c.default, {
      className: M.guildCard,
      guild: s,
      subscriptionChange: o
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), d > 0 ? (0, a.jsx)(R, {
      canceledCount: d
    }) : null]
  })
}
class h extends n.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: l,
      isModifyingSubscription: t,
      onConfirm: s,
      onCancel: n
    } = this.props;
    return (0, a.jsxs)(u.ModalFooter, {
      children: [(0, a.jsx)(u.Button, {
        onClick: s,
        submitting: t,
        "aria-label": l,
        children: e
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: n,
        disabled: t,
        children: _.default.Messages.CANCEL
      })]
    })
  }
}
class g extends(s = n.PureComponent) {
  render() {
    let {
      guild: e,
      header: l,
      blurb: t,
      warning: s,
      confirmation: r,
      confirmationLabel: i,
      imageClass: o,
      error: d,
      isModifyingSubscription: c,
      onConfirm: C,
      onCancel: m,
      onDismissError: S,
      canceledCount: f
    } = this.props;
    return (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(x, {
        text: l
      }), (0, a.jsx)(u.ModalContent, {
        children: (0, a.jsx)(N, {
          guild: e,
          blurb: t,
          warning: s,
          imageClass: o,
          error: d,
          onDismissError: S,
          canceledCount: f
        })
      }), (0, a.jsx)(h, {
        confirmation: r,
        confirmationLabel: i,
        isModifyingSubscription: c,
        onConfirm: C,
        onCancel: m
      })]
    })
  }
}
E(g, "Header", x), E(g, "ApplyBody", N), E(g, "TransferBody", function(e) {
  var l, t;
  let {
    imageClass: s,
    blurb: r,
    fromGuilds: i,
    toGuild: o,
    error: d,
    onDismissError: C,
    slotCount: m = 1,
    canceledCount: S = 0
  } = e, f = n.useRef(i), E = null === (l = f.current) || void 0 === l ? void 0 : l.length, x = null === (t = f.current) || void 0 === t ? void 0 : t.reduce((e, l) => (!e.hasOwnProperty(l.id) && (e[l.id] = []), e[l.id].push(l), e), {});
  return (0, a.jsxs)(U, {
    imageClass: s,
    error: d,
    onDismissError: C,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: E
      })
    }), null != x ? I.default.keys(x).map(e => (0, a.jsx)(c.default, {
      className: M.transferFromGuildCard,
      guild: x[e][0],
      subscriptionChange: -1 * x[e].length
    }, e)) : null, (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: m
      })
    }), (0, a.jsx)("div", {
      className: M.activeTransferGuildCardBorder,
      children: (0, a.jsx)(c.default, {
        className: M.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), S > 0 ? (0, a.jsx)(R, {
      canceledCount: S
    }) : null]
  })
}), E(g, "Footer", h), l.default = g