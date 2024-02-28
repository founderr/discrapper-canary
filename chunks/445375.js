"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("295426"),
  d = n("352674"),
  c = n("125667"),
  f = n("264732"),
  h = n("206230"),
  m = n("812204"),
  p = n("685665"),
  E = n("850391"),
  g = n("149022"),
  C = n("681060"),
  S = n("376215"),
  _ = n("172554"),
  I = n("699473"),
  T = n("328511"),
  v = n("467094"),
  x = n("845579"),
  N = n("42203"),
  A = n("474643"),
  M = n("377253"),
  R = n("957255"),
  j = n("585722"),
  L = n("476765"),
  O = n("945330"),
  y = n("745183"),
  P = n("959097"),
  b = n("664336"),
  D = n("378765"),
  U = n("718422"),
  w = n("412861"),
  F = n("910927"),
  k = n("730498"),
  B = n("24337"),
  V = n("967241"),
  H = n("517141"),
  G = n("49111"),
  W = n("782340"),
  Y = n("303283"),
  z = n("247703");
let K = E.ChatInputTypes.THREAD_CREATION;

function Z(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: a
  } = e, s = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t)), {
    AnalyticsLocationProvider: i
  } = (0, p.default)(m.default.CREATE_THREAD);
  return null == s ? null : (0, l.jsx)(i, {
    children: (0, l.jsx)(D.ComponentDispatchGroupProvider, {
      children: (0, l.jsxs)("section", {
        "aria-label": W.default.Messages.CREATE_THREAD,
        className: Y.container,
        children: [(0, l.jsx)(f.default, {
          channel: s,
          draftType: A.DraftType.FirstThreadMessage
        }), (0, l.jsxs)(b.default, {
          toolbar: (0, l.jsx)(b.default.Icon, {
            icon: O.default,
            tooltip: W.default.Messages.CLOSE,
            onClick: () => (0, V.closeAndClearThreadSidebar)(t)
          }),
          children: [(0, l.jsx)(b.default.Icon, {
            icon: P.default,
            disabled: !0,
            "aria-label": W.default.Messages.THREAD
          }), (0, l.jsx)(b.default.Title, {
            children: W.default.Messages.NEW_THREAD
          })]
        }), (0, l.jsx)(X, {
          parentChannel: s,
          parentMessageId: n,
          location: a
        })]
      })
    })
  })
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: s
  } = e, d = (0, r.useStateFromStores)([h.default], () => h.default.messageGroupSpacing), f = function() {
    let e = a.useContext(D.ComponentDispatchGroupContext);
    return a.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: m,
    setThreadSettings: p,
    updateThreadSettings: E
  } = function(e, t) {
    let [n, l] = a.useState({}), s = a.useCallback(n => {
      l(e => ({
        ...e,
        ...n
      })), o.default.changeThreadSettings(e.id, {
        ...n,
        parentMessageId: t
      })
    }, [e.id, t]);
    return {
      threadSettings: n,
      setThreadSettings: l,
      updateThreadSettings: s
    }
  }(t, n), {
    textAreaState: C,
    setTextAreaState: S
  } = function(e, t) {
    let [n, l] = a.useState((0, g.createEmptyState)());
    return a.useEffect(() => {
      function n(n) {
        var a;
        let s = A.default.getDraft(e.id, A.DraftType.FirstThreadMessage);
        (0 === s.length || !0 === n) && l((0, g.createState)(s)), t(null !== (a = A.default.getThreadSettings(e.id)) && void 0 !== a ? a : {})
      }
      return n(!0), A.default.addChangeListener(n), () => {
        A.default.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: l
    }
  }(t, p), I = (0, k.usePrivateThreadMode)(t), {
    nameError: x,
    messageError: N,
    submit: M
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: l,
      privateThreadMode: s,
      textAreaState: i,
      location: r
    } = e, [u, o] = a.useState(null), [d, c] = a.useState(null), f = (0, H.default)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: l,
      privateThreadMode: s,
      location: r,
      onThreadCreated: V.openThreadSidebarForViewing,
      useDefaultThreadName: !0
    }), h = a.useCallback(async (e, a, s) => {
      var r, u, d;
      null == e && (e = i.textValue), e = e.trim(), (null == a || 0 === a.length) && (a = null === (r = T.default.getStickerPreview(t.id, K.drafts.type)) || void 0 === r ? void 0 : r.map(e => e.id)), (null == s || 0 === s.length) && (s = j.default.getUploads(t.id, A.DraftType.FirstThreadMessage));
      let h = null !== (u = l.name) && void 0 !== u ? u : "",
        m = null == n && 0 === h.length,
        p = "" === e && (null == a || 0 === a.length) && 0 === s.length;
      if (o(m ? (0, F.makeEmptyTitleError)() : null), c(p ? (0, F.makeEmptyMessageError)() : null), m || p) return {
        shouldClear: !1,
        shouldRefocus: !0
      };
      if (null == n) {
        let {
          valid: n
        } = await (0, U.applyChatRestrictions)({
          content: e,
          stickers: a,
          uploads: s,
          type: K,
          channel: t
        });
        if (!n) return {
          shouldClear: !1,
          shouldRefocus: !0
        }
      }
      try {
        await f(e, a, s)
      } catch (e) {
        return (null === (d = e.body) || void 0 === d ? void 0 : d.code) === G.AbortCodes.AUTOMOD_TITLE_BLOCKED && o((0, F.makeAutomodViolationError)(e.body, t)), {
          shouldClear: !1,
          shouldRefocus: !0
        }
      }
      return (0, v.clearStickerPreview)(t.id, K.drafts.type), {
        shouldClear: !0,
        shouldRefocus: !1
      }
    }, [f, i.textValue, l.name, n, t]);
    return {
      nameError: u,
      messageError: d,
      submit: h
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: m,
    privateThreadMode: I,
    textAreaState: C,
    location: s
  }), R = (0, k.getIsPrivate)(m, I) ? y.default : P.default;
  return (0, l.jsx)("div", {
    className: Y.chat,
    onMouseDown: f,
    onFocus: f,
    children: (0, l.jsx)("div", {
      className: i(Y.messagesWrapper, "group-spacing-".concat(d)),
      children: (0, l.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), M()
        },
        className: Y.form,
        children: [(0, l.jsx)(u.Scroller, {
          className: Y.scroller,
          fade: !0,
          children: (0, l.jsxs)("div", {
            className: Y.scrollerInner,
            children: [(0, l.jsxs)(_.default, {
              channelId: "create-thread-null",
              children: [(0, l.jsx)("div", {
                className: z.iconWrapper,
                children: (0, l.jsx)(R, {
                  className: z.icon
                })
              }), (0, l.jsx)(q, {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: m,
                updateThreadSettings: E,
                error: x
              }), t.type === G.ChannelTypes.GUILD_TEXT ? (0, l.jsx)(Q, {
                startedFromMessage: null != n,
                threadSettings: m,
                updateThreadSettings: E,
                privateThreadMode: I
              }) : null]
            }), (0, l.jsx)($, {
              parentChannel: t,
              parentMessageId: n
            })]
          })
        }), (0, l.jsxs)("div", {
          className: Y.submitContainer,
          children: [(0, l.jsx)(J, {
            parentChannel: t,
            textAreaState: C,
            setTextAreaState: S,
            submit: M,
            error: N
          }), (0, l.jsx)(c.default, {
            channel: t,
            isThreadCreation: !0
          })]
        })]
      })
    })
  })
}

function Q(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: a,
    privateThreadMode: s
  } = e, r = (0, k.getIsPrivate)(n, s), o = (0, l.jsx)("div", {
    className: Y.privateThreadFormTitle,
    children: (0, l.jsx)("span", {
      className: Y.privateThreadFormTitleText,
      children: W.default.Messages.PRIVATE_THREAD
    })
  }), d = (0, l.jsx)(u.Checkbox, {
    className: i(Y.checkbox),
    type: u.Checkbox.Types.INVERTED,
    disabled: s === k.PrivateThreadMode.PrivateOnly,
    value: r,
    onChange: (e, t) => a({
      isPrivate: t
    }),
    children: (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "none",
      children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
    })
  });
  return t || s === k.PrivateThreadMode.Disabled ? null : (0, l.jsxs)(u.FormSection, {
    title: o,
    className: Y.formSection,
    children: [d, r ? (0, l.jsx)(u.Text, {
      className: Y.privateThreadDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: W.default.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
    }) : null]
  })
}

function q(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: a,
    threadSettings: s,
    updateThreadSettings: i,
    error: r
  } = e, o = null !== (t = s.name) && void 0 !== t ? t : "", c = (0, F.renderError)(r, {
    content: o
  }), f = (0, k.getDefaultThreadName)(n, a), h = null != a, m = (0, L.useUID)();
  return (0, l.jsx)(u.FormSection, {
    tag: "label",
    htmlFor: m,
    title: W.default.Messages.THREAD_NAME + (h ? " (Optional)" : ""),
    className: Y.formSection,
    children: (0, l.jsx)(u.TextInput, {
      value: o,
      id: m,
      placeholder: "" !== f ? f : W.default.Messages.FORM_THREAD_NAME_PLACEHOLDER,
      maxLength: G.MAX_CHANNEL_NAME_LENGTH,
      onChange: e => {
        i({
          name: (0, B.default)(e, !1)
        }), "" !== e ? d.default.startTyping(n.id) : d.default.stopTyping(n.id)
      },
      onBlur: () => {
        let e = (0, B.default)(o, !0);
        e !== o && i({
          name: e
        })
      },
      error: c
    })
  })
}

function J(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: s,
    submit: c,
    error: f
  } = e, [h, m] = a.useState(!0), p = a.useCallback(() => m(!0), []), E = a.useCallback(() => m(!1), []), g = a.useCallback((e, n, l) => {
    o.default.saveDraft(t.id, n, A.DraftType.FirstThreadMessage), s(e => ("" !== n && e.textValue !== n ? d.default.startTyping(t.id) : "" === n && d.default.stopTyping(t.id), {
      textValue: n,
      richValue: l
    }))
  }, [t.id, s]), _ = a.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: l
    } = e;
    return c(t, l, n)
  }, [c]);
  (0, D.useComponentAction)({
    event: G.ComponentActions.TEXTAREA_FOCUS,
    handler: p
  }), (0, D.useComponentAction)({
    event: G.ComponentActions.TEXTAREA_BLUR,
    handler: E
  });
  let I = (0, r.useStateFromStores)([R.default], () => R.default.can(G.Permissions.ATTACH_FILES, t)),
    T = (0, F.renderError)(f, {
      content: n.textValue
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(S.default, {
      channelId: t.id,
      type: K,
      canAttachFiles: I
    }), (0, l.jsx)("div", {
      className: Y.starterMessageError,
      children: (0, l.jsx)(u.InputError, {
        error: T
      })
    }), (0, l.jsx)(C.default, {
      type: K,
      channel: t,
      placeholder: W.default.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
      textValue: n.textValue,
      richValue: n.richValue,
      focused: h,
      className: Y.channelTextArea,
      innerClassName: i(Y.channelTextAreaInner, {
        [Y.channelTextAreaInnerError]: null != T
      }),
      onFocus: p,
      onBlur: E,
      onChange: g,
      onSubmit: _,
      promptToUpload: w.promptToUpload
    })]
  })
}

function $(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, a = (0, r.useStateFromStores)([M.default], () => null == n ? null : M.default.getMessage(t.id, n)), s = x.MessageDisplayCompact.useSetting();
  return null != a ? (0, l.jsx)(I.default, {
    className: Y.messagePreview,
    message: a,
    channel: t,
    compact: s,
    renderThreadAccessory: !1,
    trackAnnouncementViews: !0
  }) : null
}