"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  i = a("627445"),
  l = a.n(i),
  r = a("759843"),
  o = a("65597"),
  u = a("77078"),
  d = a("327037"),
  c = a("152584"),
  E = a("599417"),
  f = a("506885"),
  m = a("697218"),
  g = a("945330"),
  S = a("599110"),
  _ = a("158998"),
  I = a("255403"),
  T = a("2581"),
  h = a("415133"),
  O = a("42060"),
  M = a("22658"),
  N = a("998957"),
  L = a("426149"),
  R = a("767282"),
  v = a("935583"),
  P = a("15881"),
  C = a("49111"),
  x = a("782340"),
  p = a("968414");

function A(e) {
  let t, {
      source: a,
      transitionState: i,
      onClose: A,
      oneClickFlow: U = !1
    } = e,
    [G, b] = n.useState(U ? P.PomeloModalSlides.SUGGESTIONS : P.PomeloModalSlides.INFO),
    [D, j] = n.useState(!1),
    [k, F] = n.useState(null),
    [w, B] = n.useState(U ? v.EditState.SUGGESTION : v.EditState.NONE),
    [H, W] = n.useState(!1),
    [V, X] = n.useState(!1),
    z = n.useRef(null),
    Y = (0, o.default)([T.default], () => T.default.isCurrentUsernameInvalid()),
    Z = (0, o.default)([m.default], () => {
      let e = m.default.getCurrentUser();
      return l(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    q = (0, O.useForceMigration)(),
    {
      usernameSuggestion: K,
      usernameSuggestionLoading: Q
    } = (0, M.useUsernameSuggestion)(U ? v.TIMEOUT_TIME : void 0);
  n.useEffect(() => {
    w === v.EditState.EDIT_USERNAME && X(!0), S.default.track(C.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
      source: a,
      step: w
    })
  }, [w, a]), n.useEffect(() => {
    !V && !H && null != K && K.length > 0 && J(e => ({
      ...e,
      username: K
    }))
  }, [K, V, H]);
  let [$, J] = n.useState({
    username: (0, h.getDefaultPomelo)(Z),
    globalName: _.default.getName(Z)
  }), ee = e => {
    F(null), null != e.username && W(!0), J(t => ({
      ...t,
      ...e
    }))
  }, et = n.useMemo(() => [{
    slideId: P.PomeloModalSlides.INFO,
    next: P.PomeloModalSlides.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: P.PomeloModalSlides.EDIT_SCREEN,
    next: P.PomeloModalSlides.FINISH_LATER,
    back: P.PomeloModalSlides.INFO,
    footerButtons: [w === v.EditState.PREVIEW ? "GOT_IT" : "BACK", w === v.EditState.PREVIEW ? "GOT_IT" : w === v.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: P.PomeloModalSlides.FINISH_LATER,
    back: P.PomeloModalSlides.EDIT_SCREEN
  }, {
    slideId: P.PomeloModalSlides.SUGGESTIONS,
    footerButtons: [w === v.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: P.PomeloModalSlides.FINISH_LATER
  }], [w]), ea = et.length, es = n.useCallback(async () => {
    if ($.globalName.length <= 0) {
      let e = x.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
        minNum: 1,
        maxNum: 32
      });
      F(e), S.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: e,
        display_name_error: !0,
        location: "modal"
      });
      return
    }
    if (_.default.getGlobalName(Z) === $.globalName) {
      B(v.EditState.EDIT_USERNAME);
      return
    }
    try {
      F(null), j(!0), await (0, c.saveAccountRequest)({
        global_name: $.globalName
      }), B(v.EditState.EDIT_USERNAME)
    } catch (a) {
      let e = new E.default(a),
        t = e.getAnyErrorMessage();
      S.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        display_name_error: !0,
        location: "modal"
      }), F(t)
    } finally {
      j(!1)
    }
  }, [Z, $]), en = n.useCallback(async () => {
    try {
      F(null), j(!0), await I.default.createPomelo({
        username: (0, h.formatPomeloForEditing)($.username)
      }, U), await (0, d.fetchProfile)(Z.id), B(v.EditState.PREVIEW)
    } catch (a) {
      let e = new E.default(a),
        t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : x.default.Messages.ERROR_GENERIC_TITLE;
      F(t), S.default.track(C.AnalyticEvents.POMELO_ERRORS, {
        reason: t,
        username_error: !0,
        location: "modal",
        one_click_flow: U
      })
    } finally {
      j(!1)
    }
  }, [$, Z.id, U]), ei = Y || (0, h.shouldSkipToEditUsername)(Z), el = n.useCallback(() => {
    B(ei ? v.EditState.EDIT_USERNAME : v.EditState.EDIT_DISPLAY_NAME), b(et[Math.min(ea - 1, G + 1)].slideId)
  }, [G, et, ea, ei]), er = n.useCallback(() => {
    F(null), G === P.PomeloModalSlides.EDIT_SCREEN ? w === v.EditState.EDIT_USERNAME ? ei ? (B(v.EditState.NONE), b(et[Math.max(0, G - 1)].slideId)) : B(v.EditState.EDIT_DISPLAY_NAME) : w === v.EditState.EDIT_DISPLAY_NAME ? (B(v.EditState.NONE), b(et[Math.max(0, G - 1)].slideId)) : w === v.EditState.PREVIEW && B(v.EditState.EDIT_USERNAME) : b(et[Math.max(0, G - 1)].slideId)
  }, [et, G, w, ei]), eo = n.useCallback(() => {
    b(P.PomeloModalSlides.FINISH_LATER)
  }, []), eu = n.useMemo(() => {
    if (G === P.PomeloModalSlides.EDIT_SCREEN && w === v.EditState.EDIT_DISPLAY_NAME) return es;
    if (G === P.PomeloModalSlides.EDIT_SCREEN && w === v.EditState.EDIT_USERNAME) return en;
    if (G === P.PomeloModalSlides.SUGGESTIONS && w === v.EditState.SUGGESTION) return en;
    else return el
  }, [G, w, es, en, el]), ed = n.useMemo(() => {
    var e, t;
    return y(null !== (t = null === (e = et.find(e => e.slideId === G)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
      handleNext: eu,
      handleBack: er,
      handleRemindMeLater: eo,
      onClose: A
    }, D, Q, H)
  }, [er, eo, eu, A, et, G, D, Q, H]), ec = n.useMemo(() => (0, h.getUserAvatarURLForPomelo)(Z), [Z]);
  n.useLayoutEffect(() => {
    (0, f.default)(Z.id, ec)
  }, [Z, ec]), n.useEffect(() => {
    var e, t;
    switch (w) {
      case v.EditState.EDIT_DISPLAY_NAME:
        null === (e = z.current) || void 0 === e || e.focusDisplayName();
        break;
      case v.EditState.EDIT_USERNAME:
      case v.EditState.SUGGESTION:
        null === (t = z.current) || void 0 === t || t.focusUsername()
    }
  }, [w]);
  return !H && null == k && (w === v.EditState.EDIT_USERNAME ? t = x.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
    source: Z.username
  }) : w === v.EditState.SUGGESTION && (Q || null != K) && (t = x.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(u.ModalRoot, {
    className: p.modalRoot,
    impression: {
      impressionName: r.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: a,
        impression_group: r.ImpressionGroups.POMELO_FLOW,
        one_click_flow: U
      }
    },
    transitionState: i,
    size: u.ModalSize.DYNAMIC,
    children: [(0, s.jsx)(u.Button, {
      onClick: () => {
        q && (G === P.PomeloModalSlides.SUGGESTIONS || G === P.PomeloModalSlides.EDIT_SCREEN) ? b(P.PomeloModalSlides.FINISH_LATER) : A()
      },
      size: u.Button.Sizes.MIN,
      look: u.Button.Looks.BLANK,
      className: p.closeContainer,
      "aria-label": x.default.Messages.CLOSE,
      children: (0, s.jsx)(g.default, {
        width: 15,
        height: 15,
        className: p.close
      })
    }), (0, s.jsx)(u.ModalContent, {
      className: p.contentContainer,
      children: (0, s.jsxs)(u.Slides, {
        activeSlide: G,
        width: 480,
        children: [(0, s.jsx)(u.Slide, {
          id: P.PomeloModalSlides.INFO,
          children: (0, s.jsx)(R.default, {
            user: Z
          })
        }), (0, s.jsx)(u.Slide, {
          id: P.PomeloModalSlides.EDIT_SCREEN,
          children: (0, s.jsx)(N.default, {
            user: Z,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(v.EditState.EDIT_USERNAME),
            onFocusDisplayName: () => B(v.EditState.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, s.jsx)(u.Slide, {
          id: P.PomeloModalSlides.FINISH_LATER,
          children: (0, s.jsx)(L.default, {
            onClose: A
          })
        }), (0, s.jsx)(u.Slide, {
          id: P.PomeloModalSlides.SUGGESTIONS,
          children: (0, s.jsx)(N.default, {
            user: Z,
            error: k,
            editState: w,
            userRef: z,
            formValues: $,
            footerNotice: t,
            onChangeFormValue: ee,
            onFocusUsername: () => B(v.EditState.SUGGESTION),
            onFocusDisplayName: () => B(v.EditState.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: Q,
            oneClickFlow: U
          })
        })]
      })
    }), ed]
  })
}
let y = (e, t, a, n, i) => 0 === e.length ? null : (0, s.jsxs)(u.ModalFooter, {
  className: p.footer,
  children: [(0, s.jsxs)("div", {
    className: p.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(u.Button, {
      className: p.unfilledButton,
      type: "button",
      size: u.Button.Sizes.SMALL,
      look: u.Button.Looks.BLANK,
      color: u.Button.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: x.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
    }), e.includes("NEXT") && (0, s.jsx)(u.Button, {
      type: "button",
      size: u.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.NEXT
    }), e.includes("SUBMIT") && (0, s.jsx)(u.Button, {
      type: "button",
      size: u.Button.Sizes.SMALL,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.SUBMIT
    }), e.includes("GET_STARTED") && (0, s.jsx)(u.Button, {
      type: "button",
      size: u.Button.Sizes.SMALL,
      onClick: t.handleNext,
      children: x.default.Messages.GET_STARTED
    }), e.includes("GOT_IT") && (0, s.jsx)(u.Button, {
      type: "button",
      size: u.Button.Sizes.SMALL,
      onClick: t.onClose,
      children: x.default.Messages.GOT_IT
    }), e.includes("UPDATE") && (0, s.jsx)(u.Button, {
      type: "button",
      size: u.Button.Sizes.SMALL,
      disabled: n && !i,
      submitting: a,
      onClick: t.handleNext,
      children: x.default.Messages.UPDATE
    })]
  }), e.includes("BACK") && (0, s.jsx)(u.Button, {
    className: p.unfilledButton,
    type: "button",
    size: u.Button.Sizes.SMALL,
    look: u.Button.Looks.BLANK,
    color: u.Button.Colors.CUSTOM,
    onClick: t.handleBack,
    children: x.default.Messages.BACK
  })]
})