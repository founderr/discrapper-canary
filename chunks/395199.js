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
  S = t("285952"),
  m = t("759231"),
  I = t("709054"),
  f = t("689938"),
  _ = t("240323");

function M(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e
}
class E extends n.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: S.default.Justify.BETWEEN,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, a.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function x(e) {
  let {
    imageClass: l,
    children: t,
    error: s,
    onDismissError: n
  } = e;
  return (0, a.jsxs)("div", {
    className: _.content,
    children: [(0, a.jsx)("div", {
      className: i()(_.image, l)
    }), t, (0, a.jsx)(d.TransitionGroup, {
      children: null != s ? (0, a.jsx)(u.SlideIn, {
        className: _.error,
        children: (0, a.jsx)(u.FormErrorBlock, {
          onDismiss: n,
          children: s.message
        })
      }) : null
    })]
  })
}
let U = e => {
  let {
    canceledCount: l
  } = e, t = (0, o.useStateFromStores)([C.default], () => C.default.getPremiumTypeSubscription());
  return null == t ? null : (0, a.jsxs)("div", {
    className: _.pendingCancellation,
    children: [(0, a.jsx)(m.default, {
      className: _.pendingCancellationIcon
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      className: _.pendingCancellationMessage,
      children: f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
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
  return (0, a.jsxs)(x, {
    imageClass: l,
    error: r,
    onDismissError: i,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: t
    }), (0, a.jsx)(c.default, {
      className: _.guildCard,
      guild: s,
      subscriptionChange: o
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), d > 0 ? (0, a.jsx)(U, {
      canceledCount: d
    }) : null]
  })
}
class R extends n.PureComponent {
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
        children: f.default.Messages.CANCEL
      })]
    })
  }
}
class h extends(s = n.PureComponent) {
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
      onCancel: S,
      onDismissError: m,
      canceledCount: I
    } = this.props;
    return (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E, {
        text: l
      }), (0, a.jsx)(u.ModalContent, {
        children: (0, a.jsx)(N, {
          guild: e,
          blurb: t,
          warning: s,
          imageClass: o,
          error: d,
          onDismissError: m,
          canceledCount: I
        })
      }), (0, a.jsx)(R, {
        confirmation: r,
        confirmationLabel: i,
        isModifyingSubscription: c,
        onConfirm: C,
        onCancel: S
      })]
    })
  }
}
M(h, "Header", E), M(h, "ApplyBody", N), M(h, "TransferBody", function(e) {
  var l, t;
  let {
    imageClass: s,
    blurb: r,
    fromGuilds: i,
    toGuild: o,
    error: d,
    onDismissError: C,
    slotCount: S = 1,
    canceledCount: m = 0
  } = e, M = n.useRef(i), E = null === (l = M.current) || void 0 === l ? void 0 : l.length, N = null === (t = M.current) || void 0 === t ? void 0 : t.reduce((e, l) => (!e.hasOwnProperty(l.id) && (e[l.id] = []), e[l.id].push(l), e), {});
  return (0, a.jsxs)(x, {
    imageClass: s,
    error: d,
    onDismissError: C,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: _.transferGuildCardHeader,
      children: f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: E
      })
    }), null != N ? I.default.keys(N).map(e => (0, a.jsx)(c.default, {
      className: _.transferFromGuildCard,
      guild: N[e][0],
      subscriptionChange: -1 * N[e].length
    }, e)) : null, (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: _.transferGuildCardHeader,
      children: f.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: S
      })
    }), (0, a.jsx)("div", {
      className: _.activeTransferGuildCardBorder,
      children: (0, a.jsx)(c.default, {
        className: _.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), m > 0 ? (0, a.jsx)(U, {
      canceledCount: m
    }) : null]
  })
}), M(h, "Footer", R), l.default = h