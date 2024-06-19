n.r(t), n.d(t, {
  default: function() {
    return L
  },
  triggerBrowserDownload: function() {
    return I
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var o = n(735250),
  a = n(470079),
  s = n(544891),
  r = n(481060),
  l = n(464179),
  i = n(479531),
  d = n(117938),
  c = n(981631),
  u = n(689938),
  _ = n(418729);

function I(e, t) {
  let n = URL.createObjectURL(t),
    o = document.createElement("a");
  o.href = n, o.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n)
}
async function N(e, t, n) {
  let o = c.ANM.BILLING_INVOICE_PDF,
    a = t ? {
      name: n.name,
      line_1: n.line1,
      line_2: n.line2,
      city: n.city,
      state: n.state,
      postal_code: n.postalCode,
      country: n.country
    } : null,
    r = await s.tn.post({
      url: o,
      body: {
        payment_id: e,
        billing_address_override: t ? a : null
      },
      oldFormErrors: !0,
      binary: !0
    });
  return I(e, r.body), !0
}

function L(e) {
  let {
    payment: t,
    paymentSource: n,
    ...s
  } = e, c = {
    name: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: "",
    country: n.country
  }, [I, L] = a.useState(c), [E, S] = a.useState(!1), [y, O] = a.useState(!1), [T, C] = a.useState(!1), [D, h] = a.useState("");
  async function m() {
    C(!0);
    try {
      await N(M, E, I)
    } catch (n) {
      var e;
      let t = JSON.parse(await n.body.text());
      h(null !== (e = new i.Z({
        ...n,
        body: t
      }).getAnyErrorMessage()) && void 0 !== e ? e : u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR)
    } finally {
      C(!1)
    }
  }
  let p = d.C,
    M = t.id,
    R = (0, o.jsx)("div", {
      children: (0, o.jsx)(r.FormSwitch, {
        value: E,
        note: u.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
        onChange: S,
        children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE
      })
    }),
    g = E ? (0, o.jsx)(l.ZP, {
      ...I,
      mode: l.ZP.Modes.CREATE,
      layout: p,
      onBillingAddressChange: function(e, t) {
        L(e), O(t)
      },
      error: null
    }) : null;
  return (0, o.jsxs)(r.ModalRoot, {
    className: _.modal,
    size: r.ModalSize.DYNAMIC,
    ...s,
    children: [(0, o.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE
      })
    }), (0, o.jsxs)(r.ModalContent, {
      className: _.body,
      children: [R, g]
    }), (0, o.jsxs)(r.ModalFooter, {
      children: [(0, o.jsx)(r.Button, {
        type: "submit",
        color: r.Button.Colors.GREEN,
        disabled: E && !y,
        onClick: m,
        submitting: T,
        autoFocus: !0,
        children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON
      }), (0, o.jsx)(r.Text, {
        color: "text-danger",
        className: _.error,
        variant: "text-sm/semibold",
        children: D
      })]
    })]
  })
}