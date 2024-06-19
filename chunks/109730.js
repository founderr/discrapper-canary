s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s(47120);
var a = s(735250),
  l = s(470079),
  o = s(442837),
  n = s(481060),
  r = s(91176),
  i = s(906732),
  c = s(910693),
  u = s(594174),
  d = s(153124),
  I = s(626135),
  _ = s(5192),
  C = s(590433),
  N = s(981631),
  U = s(689938),
  T = s(400655);

function D(e) {
  return {
    value: e,
    get label() {
      var t;
      return null === (t = (0, C.L9)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
    }
  }
}
let A = [D(C.UK.DURATION_60_SEC), D(C.UK.DURATION_5_MIN), D(C.UK.DURATION_10_MIN), D(C.UK.DURATION_1_HOUR), D(C.UK.DURATION_1_DAY), D(C.UK.DURATION_1_WEEK)];

function O(e) {
  var t, s;
  let {
    guildId: D,
    userId: O,
    anaylticsLocations: M,
    transitionState: E,
    onClose: m
  } = e, x = (0, d.Dt)(), {
    analyticsLocations: S
  } = (0, i.ZP)(), h = null !== (s = null !== (t = null == M ? void 0 : M[0]) && void 0 !== t ? t : null == S ? void 0 : S[0]) && void 0 !== s ? s : null, L = (0, o.e7)([u.default], () => u.default.getUser(O), [O]), [R, g] = l.useState(C.UK.DURATION_60_SEC), f = (0, c.sE)(D, {
    location: h,
    targetUserId: O
  }), [v, p] = l.useState(""), [B, b] = l.useState(!1), j = l.useCallback(async () => {
    if (null != L) {
      b(!0);
      try {
        await r.Z.setCommunicationDisabledDuration(D, O, R, v, h), f(c.jQ.TIMEOUT), (0, n.showToast)((0, n.createToast)(U.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: _.ZP.getName(D, null, L)
        }), n.ToastType.SUCCESS)), m()
      } catch (e) {
        (0, n.showToast)((0, n.createToast)(U.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, n.ToastType.FAILURE))
      } finally {
        b(!1)
      }
    }
  }, [D, L, O, m, R, v, h, f]);
  return (l.useEffect(() => {
    if (null != L) I.default.track(N.rMx.OPEN_MODAL, {
      type: C.Cl,
      guild_id: D,
      other_user_id: L.id
    })
  }, []), l.useEffect(() => {
    (null == L || null == D) && m()
  }, [D, L, m]), null == L || null == D) ? null : (0, a.jsxs)(n.ModalRoot, {
    transitionState: E,
    "aria-labelledby": x,
    children: [(0, a.jsxs)(n.ModalHeader, {
      className: T.header,
      separator: !1,
      children: [(0, a.jsx)(n.Heading, {
        id: x,
        variant: "heading-lg/semibold",
        children: U.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
          user: _.ZP.getName(D, null, L)
        })
      }), (0, a.jsx)(n.Clickable, {
        onClick: m,
        className: T.closeButton,
        "aria-label": U.Z.Messages.CLOSE,
        children: (0, a.jsx)(n.CloseSmallIcon, {
          size: "xs",
          color: "currentColor",
          className: T.closeIcon
        })
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      className: T.contentContainer,
      children: [(0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: U.Z.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
          helpdeskArticle: C.cu
        })
      }), (0, a.jsx)(n.Text, {
        className: T.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: U.Z.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
      }), (0, a.jsx)(n.ButtonGroup, {
        buttons: A.map(e => (function(e, t, s) {
          let {
            value: l,
            label: o
          } = e;
          return {
            content: (0, a.jsx)(n.Text, {
              variant: "text-xs/normal",
              className: t ? T.selectorTextSelected : T.selectorText,
              children: o
            }),
            className: t ? T.selectorButtonSelected : T.selectorButton,
            onClick: () => s(l)
          }
        })(e, e.value === R, g))
      }), (0, a.jsx)(n.Text, {
        className: T.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: U.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON
      }), (0, a.jsx)(n.TextArea, {
        value: v,
        onChange: e => p(e),
        placeholder: U.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
        rows: 2,
        maxLength: C.GN
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      children: [(0, a.jsx)(n.Button, {
        onClick: j,
        color: n.Button.Colors.BRAND,
        submitting: B,
        children: U.Z.Messages.TIMEOUT_SUBMIT
      }), (0, a.jsx)(n.Button, {
        type: "button",
        look: n.Button.Looks.LINK,
        color: n.Button.Colors.PRIMARY,
        onClick: m,
        children: U.Z.Messages.CANCEL
      })]
    })]
  })
}