n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n(47120);
var a, r, l = n(735250),
  o = n(470079),
  s = n(512722),
  i = n.n(s),
  u = n(913527),
  c = n.n(u),
  d = n(442837),
  E = n(481060),
  h = n(749210),
  _ = n(592125),
  f = n(944486),
  A = n(594174),
  p = n(285952),
  v = n(153124),
  m = n(626135),
  b = n(63063),
  g = n(771308),
  T = n(758119),
  M = n(13430),
  G = n(723359),
  x = n(981631),
  y = n(689938),
  R = n(101655);

function C(e) {
  let {
    transitionState: t,
    source: a
  } = e, r = (0, d.e7)([A.default], () => A.default.getCurrentUser()), s = (0, d.e7)([f.Z, _.Z], () => _.Z.getChannel(f.Z.getChannelId())), [u, C] = o.useState(null), [N, O] = o.useState(null), [k, S] = o.useState(!1), [D, Z] = o.useState(0), I = o.createRef(), B = o.createRef(), j = (0, v.Dt)(), w = null != u ? c()().diff(u, "years") : null;

  function L() {
    let e = null == s ? void 0 : s.getGuildId();
    h.Z.nsfwReturnToSafety(e), (0, T.qV)(a)
  }
  async function F() {
    i()(null != u, "Cannot submit null birthday.");
    try {
      return O(null), S(!0), await (0, g.Av)(u, a)
    } catch (t) {
      if (null != t.body && null != t.body.date_of_birth)(0, T.C8)(a, t.body.date_of_birth);
      else {
        var e;
        (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? O(y.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : O(null == t ? void 0 : t.body.message), S(!1)
      }
    }
  }
  async function Y() {
    if (i()(null != w, "Cannot submit if we haven't been able to calculate age."), w < 18) {
      Z(1);
      return
    }
    await F()
  }
  async function U(e) {
    e.preventDefault(), !k && null != u && await Y()
  }
  async function P() {
    null == await F() && Z(0)
  }
  o.useEffect(() => {
    null != r && null != r.nsfwAllowed && (0, T.qq)(a)
  }), o.useEffect(() => {
    m.default.track(x.rMx.AGE_GATE_ACTION, {
      source: a,
      action: G.Al.AGE_GATE_OPEN
    })
  }, [a]);
  let H = o.useCallback(e => {
      C(e)
    }, [C]),
    z = o.useCallback(() => {
      var e;
      null === (e = B.current) || void 0 === e || e.focus()
    }, [B]);
  return 0 === D ? function() {
    let e = (() => {
        if (a === G.L0.FAMILY_CENTER) return y.Z.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
        return y.Z.Messages.AGE_GATE_EXISTING_HEADER
      })(),
      r = (() => {
        switch (a) {
          case G.L0.FAMILY_CENTER:
            return y.Z.Messages.AGE_GATE_FAMILY_CENTER_BODY;
          case G.L0.DEEP_LINK_PROMPT:
            return y.Z.Messages.AGE_GATE_DEEP_LINK_BODY.format({
              helpURL: b.Z.getArticleURL(x.BhN.AGE_GATE)
            });
          default:
            return y.Z.Messages.AGE_GATE_NSFW_BODY.format({
              helpURL: b.Z.getArticleURL(x.BhN.AGE_GATE)
            })
        }
      })();
    return (0, l.jsxs)(E.ModalRoot, {
      transitionState: t,
      size: E.ModalSize.SMALL,
      "aria-labelledby": j,
      children: [(0, l.jsxs)(E.ModalContent, {
        children: [(0, l.jsxs)("div", {
          className: R.container,
          children: [(0, l.jsx)("img", {
            alt: "",
            src: n(462991),
            className: R.img
          }), (0, l.jsx)(E.Heading, {
            variant: "heading-xl/semibold",
            className: R.title,
            id: j,
            children: e
          }), (0, l.jsx)(E.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: r
          })]
        }), (0, l.jsx)("form", {
          onSubmit: U,
          children: (0, l.jsx)(M.Z, {
            label: y.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
            wrapperClassName: R.birthday,
            name: "date_of_birth",
            onChange: H,
            onPopulated: z,
            error: N,
            value: u,
            ref: I,
            autoFocus: !0
          })
        })]
      }), (0, l.jsxs)(E.ModalFooter, {
        justify: p.Z.Justify.BETWEEN,
        children: [(0, l.jsx)(E.Button, {
          buttonRef: B,
          submitting: k,
          disabled: null == u,
          size: E.ButtonSizes.SMALL,
          onClick: Y,
          children: y.Z.Messages.AGE_GATE_SUBMIT
        }), (0, l.jsx)(E.Button, {
          look: E.Button.Looks.LINK,
          size: E.Button.Sizes.NONE,
          color: E.Button.Colors.PRIMARY,
          onClick: L,
          children: y.Z.Messages.AGE_GATE_GO_BACK
        })]
      })]
    })
  }() : (0, l.jsxs)(E.ModalRoot, {
    transitionState: E.ModalTransitionState.ENTERED,
    size: E.ModalSize.SMALL,
    "aria-labelledby": j,
    children: [(0, l.jsx)(E.ModalContent, {
      children: (0, l.jsxs)("div", {
        className: R.confirmContainer,
        children: [(0, l.jsx)(E.Heading, {
          variant: "heading-xl/semibold",
          className: R.confirmTitle,
          id: j,
          children: y.Z.Messages.AGE_GATE_CONFIRM_HEADER.format({
            age: w
          })
        }), (0, l.jsx)(E.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: y.Z.Messages.AGE_GATE_NSFW_BODY.format({
            helpURL: b.Z.getArticleURL(x.BhN.AGE_GATE)
          })
        })]
      })
    }), (0, l.jsxs)(E.ModalFooter, {
      className: R.confirmFooter,
      children: [(0, l.jsx)(E.Button, {
        look: E.Button.Looks.LINK,
        size: E.Button.Sizes.NONE,
        color: E.Button.Colors.PRIMARY,
        onClick: () => Z(0),
        children: y.Z.Messages.AGE_GATE_CONFIRM_GO_BACK
      }), (0, l.jsx)(E.Button, {
        color: E.Button.Colors.BRAND,
        onClick: P,
        children: y.Z.Messages.AGE_GATE_CONFIRM_BUTTON
      })]
    })]
  })
}(r = a || (a = {}))[r.AGE_GATE_FORM = 0] = "AGE_GATE_FORM", r[r.CONFIRM = 1] = "CONFIRM"