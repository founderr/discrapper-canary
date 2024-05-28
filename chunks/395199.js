"use strict";
l.r(t), l("724458"), l("653041"), l("47120");
var s, a = l("735250"),
  n = l("470079"),
  r = l("120356"),
  i = l.n(r),
  o = l("442837"),
  d = l("215569"),
  u = l("481060"),
  c = l("777789"),
  m = l("78839"),
  C = l("285952"),
  S = l("864293"),
  I = l("759231"),
  f = l("709054"),
  _ = l("689938"),
  M = l("240323");

function E(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class x extends n.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: C.default.Justify.BETWEEN,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, a.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function N(e) {
  let {
    imageClass: t,
    children: l,
    error: s,
    onDismissError: n
  } = e;
  return (0, a.jsxs)("div", {
    className: M.content,
    children: [(0, a.jsx)("div", {
      className: i()(M.image, t)
    }), l, (0, a.jsx)(d.TransitionGroup, {
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
let U = e => {
  let {
    canceledCount: t
  } = e, l = (0, o.useStateFromStores)([m.default], () => m.default.getPremiumTypeSubscription());
  return null == l ? null : (0, a.jsxs)("div", {
    className: M.pendingCancellation,
    children: [(0, a.jsx)(I.default, {
      className: M.pendingCancellationIcon
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      className: M.pendingCancellationMessage,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: l.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function R(e) {
  let {
    imageClass: t,
    blurb: l,
    guild: s,
    warning: n,
    error: r,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, a.jsxs)(N, {
    imageClass: t,
    error: r,
    onDismissError: i,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), (0, a.jsx)(c.default, {
      className: M.guildCard,
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
class p extends n.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: l,
      onConfirm: s,
      onCancel: n
    } = this.props;
    return (0, a.jsxs)(u.ModalFooter, {
      children: [(0, a.jsx)(u.Button, {
        onClick: s,
        submitting: l,
        "aria-label": t,
        children: e
      }), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: n,
        disabled: l,
        children: _.default.Messages.CANCEL
      })]
    })
  }
}
class h extends(s = n.PureComponent) {
  render() {
    let {
      guild: e,
      header: t,
      blurb: l,
      warning: s,
      confirmation: r,
      confirmationLabel: i,
      imageClass: o,
      error: d,
      isModifyingSubscription: c,
      onConfirm: m,
      onCancel: C,
      onDismissError: S,
      canceledCount: I
    } = this.props;
    return (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(x, {
        text: t
      }), (0, a.jsx)(u.ModalContent, {
        children: (0, a.jsx)(R, {
          guild: e,
          blurb: l,
          warning: s,
          imageClass: o,
          error: d,
          onDismissError: S,
          canceledCount: I
        })
      }), (0, a.jsx)(p, {
        confirmation: r,
        confirmationLabel: i,
        isModifyingSubscription: c,
        onConfirm: m,
        onCancel: C
      })]
    })
  }
}
E(h, "Header", x), E(h, "ApplyBody", R), E(h, "TransferBody", function(e) {
  var t, l;
  let {
    imageClass: s,
    blurb: r,
    fromGuilds: i,
    toGuild: o,
    error: d,
    onDismissError: m,
    slotCount: C = 1,
    canceledCount: S = 0
  } = e, I = n.useRef(i), E = null === (t = I.current) || void 0 === t ? void 0 : t.length, x = null === (l = I.current) || void 0 === l ? void 0 : l.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, a.jsxs)(N, {
    imageClass: s,
    error: d,
    onDismissError: m,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: E
      })
    }), null != x ? f.default.keys(x).map(e => (0, a.jsx)(c.default, {
      className: M.transferFromGuildCard,
      guild: x[e][0],
      subscriptionChange: -1 * x[e].length
    }, e)) : null, (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: C
      })
    }), (0, a.jsx)("div", {
      className: M.activeTransferGuildCardBorder,
      children: (0, a.jsx)(c.default, {
        className: M.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), S > 0 ? (0, a.jsx)(U, {
      canceledCount: S
    }) : null]
  })
}), E(h, "Footer", p), t.default = h