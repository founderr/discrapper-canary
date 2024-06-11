"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  o = a("481060"),
  i = a("91176"),
  r = a("906732"),
  u = a("910693"),
  c = a("594174"),
  d = a("153124"),
  D = a("465670"),
  I = a("626135"),
  _ = a("5192"),
  C = a("590433"),
  N = a("981631"),
  A = a("689938"),
  m = a("11838");

function M(e) {
  return {
    value: e,
    get label() {
      var t;
      return null === (t = (0, C.getFriendlyDurationString)(e)) || void 0 === t ? void 0 : t.toLocaleUpperCase()
    }
  }
}
let O = [M(C.DisableCommunicationDuration.DURATION_60_SEC), M(C.DisableCommunicationDuration.DURATION_5_MIN), M(C.DisableCommunicationDuration.DURATION_10_MIN), M(C.DisableCommunicationDuration.DURATION_1_HOUR), M(C.DisableCommunicationDuration.DURATION_1_DAY), M(C.DisableCommunicationDuration.DURATION_1_WEEK)];

function T(e) {
  var t, a;
  let {
    guildId: M,
    userId: T,
    anaylticsLocations: E,
    transitionState: U,
    onClose: S
  } = e, f = (0, d.useUID)(), {
    analyticsLocations: L
  } = (0, r.default)(), h = null !== (a = null !== (t = null == E ? void 0 : E[0]) && void 0 !== t ? t : null == L ? void 0 : L[0]) && void 0 !== a ? a : null, x = (0, n.useStateFromStores)([c.default], () => c.default.getUser(T), [T]), [R, g] = s.useState(C.DisableCommunicationDuration.DURATION_60_SEC), b = (0, u.useTrackModerationAction)(M, {
    location: h,
    targetUserId: T
  }), [v, B] = s.useState(""), [p, j] = s.useState(!1), k = s.useCallback(async () => {
    if (null != x) {
      j(!0);
      try {
        await i.default.setCommunicationDisabledDuration(M, T, R, v, h), b(u.ModerationActionType.TIMEOUT), (0, o.showToast)((0, o.createToast)(A.default.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
          user: _.default.getName(M, null, x)
        }), o.ToastType.SUCCESS)), S()
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(A.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE))
      } finally {
        j(!1)
      }
    }
  }, [M, x, T, S, R, v, h, b]);
  return (s.useEffect(() => {
    null != x && I.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: C.CLEAR_COMMUNICATION_DISABLED_MODAL_NAME,
      guild_id: M,
      other_user_id: x.id
    })
  }, []), s.useEffect(() => {
    (null == x || null == M) && S()
  }, [M, x, S]), null == x || null == M) ? null : (0, l.jsxs)(o.ModalRoot, {
    transitionState: U,
    "aria-labelledby": f,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: m.header,
      separator: !1,
      children: [(0, l.jsx)(o.Heading, {
        id: f,
        variant: "heading-lg/semibold",
        children: A.default.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format({
          user: _.default.getName(M, null, x)
        })
      }), (0, l.jsx)(o.Clickable, {
        onClick: S,
        className: m.closeButton,
        "aria-label": A.default.Messages.CLOSE,
        children: (0, l.jsx)(D.default, {
          className: m.closeIcon,
          width: 16,
          height: 16
        })
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: m.contentContainer,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "interactive-normal",
        children: A.default.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format({
          helpdeskArticle: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
        })
      }), (0, l.jsx)(o.Text, {
        className: m.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: A.default.Messages.GUILD_COMMUNICATION_DISABLED_DURATION
      }), (0, l.jsx)(o.ButtonGroup, {
        buttons: O.map(e => (function(e, t, a) {
          let {
            value: s,
            label: n
          } = e;
          return {
            content: (0, l.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: t ? m.selectorTextSelected : m.selectorText,
              children: n
            }),
            className: t ? m.selectorButtonSelected : m.selectorButton,
            onClick: () => a(s)
          }
        })(e, e.value === R, g))
      }), (0, l.jsx)(o.Text, {
        className: m.selectorHeader,
        variant: "text-xs/semibold",
        color: "interactive-normal",
        children: A.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON
      }), (0, l.jsx)(o.TextArea, {
        value: v,
        onChange: e => B(e),
        placeholder: A.default.Messages.GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
        rows: 2,
        maxLength: C.MAX_REASON_LENGTH
      })]
    }), (0, l.jsxs)(o.ModalFooter, {
      children: [(0, l.jsx)(o.Button, {
        onClick: k,
        color: o.Button.Colors.BRAND,
        submitting: p,
        children: A.default.Messages.TIMEOUT_SUBMIT
      }), (0, l.jsx)(o.Button, {
        type: "button",
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: S,
        children: A.default.Messages.CANCEL
      })]
    })]
  })
}