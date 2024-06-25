n.d(t, {
  Z: function() {
    return z
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(430742),
  u = n(144144),
  d = n(738619),
  h = n(561472),
  m = n(607070),
  E = n(100527),
  p = n(906732),
  g = n(541716),
  f = n(752305),
  C = n(893718),
  _ = n(303628),
  I = n(967128),
  x = n(294218),
  T = n(913663),
  N = n(268350),
  Z = n(695346),
  S = n(592125),
  v = n(703558),
  A = n(375954),
  M = n(496675),
  R = n(117530),
  j = n(153124),
  L = n(502568),
  O = n(459273),
  P = n(838440),
  y = n(127654),
  b = n(241309),
  D = n(928477),
  U = n(456077),
  k = n(488131),
  w = n(602034),
  H = n(981631),
  G = n(689938),
  B = n(71417),
  V = n(971055);
let F = g.I.THREAD_CREATION;

function z(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: i
  } = e, s = (0, r.e7)([S.Z], () => S.Z.getChannel(t)), {
    analyticsLocations: a
  } = (0, p.ZP)(E.Z.CREATE_THREAD);
  return null == s ? null : (0, l.jsx)(p.Gt, {
    value: a,
    children: (0, l.jsx)(O.I3, {
      children: (0, l.jsxs)("section", {
        "aria-label": G.Z.Messages.CREATE_THREAD,
        className: B.container,
        children: [(0, l.jsx)(h.Z, {
          channel: s,
          draftType: v.d.FirstThreadMessage
        }), (0, l.jsxs)(L.ZP, {
          toolbar: (0, l.jsx)(L.ZP.Icon, {
            icon: o.CloseSmallIcon,
            tooltip: G.Z.Messages.CLOSE,
            onClick: () => (0, k.NK)(t)
          }),
          children: [(0, l.jsx)(L.ZP.Icon, {
            icon: o.ThreadIcon,
            disabled: !0,
            "aria-label": G.Z.Messages.THREAD
          }), (0, l.jsx)(L.ZP.Title, {
            children: G.Z.Messages.NEW_THREAD
          })]
        }), (0, l.jsx)(W, {
          parentChannel: s,
          parentMessageId: n,
          location: i
        })]
      })
    })
  })
}

function W(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    location: s
  } = e, u = (0, r.e7)([m.Z], () => m.Z.messageGroupSpacing), h = function() {
    let e = i.useContext(O.oo);
    return i.useCallback(() => {
      e.bumpDispatchPriority()
    }, [e])
  }(), {
    threadSettings: E,
    setThreadSettings: p,
    updateThreadSettings: g
  } = function(e, t) {
    let [n, l] = i.useState({}), s = i.useCallback(n => {
      l(e => ({
        ...e,
        ...n
      })), c.Z.changeThreadSettings(e.id, {
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
    setTextAreaState: _
  } = function(e, t) {
    let [n, l] = i.useState((0, f.H2)());
    return i.useEffect(() => {
      function n(n) {
        var i;
        let s = v.Z.getDraft(e.id, v.d.FirstThreadMessage);
        (0 === s.length || !0 === n) && l((0, f.eK)(s)), t(null !== (i = v.Z.getThreadSettings(e.id)) && void 0 !== i ? i : {})
      }
      return n(!0), v.Z.addChangeListener(n), () => {
        v.Z.removeChangeListener(n)
      }
    }, [e.id, t]), {
      textAreaState: n,
      setTextAreaState: l
    }
  }(t, p), x = (0, D.vH)(t), {
    nameError: Z,
    messageError: S,
    submit: A
  } = function(e) {
    let {
      parentChannel: t,
      parentMessageId: n,
      threadSettings: l,
      privateThreadMode: s,
      textAreaState: a,
      location: r
    } = e, [o, c] = i.useState(null), [u, d] = i.useState(null), h = (0, w.Z)({
      parentChannel: t,
      parentMessageId: n,
      threadSettings: l,
      privateThreadMode: s,
      location: r,
      onThreadCreated: k.ok,
      useDefaultThreadName: !0
    });
    return {
      nameError: o,
      messageError: u,
      submit: i.useCallback(async (e, i, s) => {
        var r, o, u;
        null == e && (e = a.textValue), e = e.trim(), (null == i || 0 === i.length) && (i = null === (r = T.Z.getStickerPreview(t.id, F.drafts.type)) || void 0 === r ? void 0 : r.map(e => e.id)), (null == s || 0 === s.length) && (s = R.Z.getUploads(t.id, v.d.FirstThreadMessage));
        let m = null !== (o = l.name) && void 0 !== o ? o : "",
          E = null == n && 0 === m.length,
          p = "" === e && (null == i || 0 === i.length) && 0 === s.length;
        if (c(E ? (0, b.V_)() : null), d(p ? (0, b.T4)() : null), E || p) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null == n) {
          let {
            valid: n
          } = await (0, P.v)({
            content: e,
            stickers: i,
            uploads: s,
            type: F,
            channel: t
          });
          if (!n) return {
            shouldClear: !1,
            shouldRefocus: !0
          }
        }
        try {
          await h(e, i, s)
        } catch (e) {
          return (null === (u = e.body) || void 0 === u ? void 0 : u.code) === H.evJ.AUTOMOD_TITLE_BLOCKED && c((0, b.Gx)(e.body, t)), {
            shouldClear: !1,
            shouldRefocus: !0
          }
        }
        return (0, N.qB)(t.id, F.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      }, [h, a.textValue, l.name, n, t])
    }
  }({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: E,
    privateThreadMode: x,
    textAreaState: C,
    location: s
  }), M = (0, D.oD)(E, x) ? o.ThreadLockIcon : o.ThreadIcon;
  return (0, l.jsx)("div", {
    className: B.chat,
    onMouseDown: h,
    onFocus: h,
    children: (0, l.jsx)("div", {
      className: a()(B.messagesWrapper, "group-spacing-".concat(u)),
      children: (0, l.jsxs)("form", {
        onSubmit: e => {
          e.preventDefault(), A()
        },
        className: B.form,
        children: [(0, l.jsx)(o.Scroller, {
          className: B.scroller,
          fade: !0,
          children: (0, l.jsxs)("div", {
            className: B.scrollerInner,
            children: [(0, l.jsxs)(I.ZP, {
              channelId: "create-thread-null",
              children: [(0, l.jsx)("div", {
                className: V.iconWrapper,
                children: (0, l.jsx)(M, {
                  className: V.icon
                })
              }), (0, l.jsx)(K, {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: E,
                updateThreadSettings: g,
                error: Z
              }), t.type === H.d4z.GUILD_TEXT ? (0, l.jsx)(Y, {
                startedFromMessage: null != n,
                threadSettings: E,
                updateThreadSettings: g,
                privateThreadMode: x
              }) : null]
            }), (0, l.jsx)(X, {
              parentChannel: t,
              parentMessageId: n
            })]
          })
        }), (0, l.jsxs)("div", {
          className: B.submitContainer,
          children: [(0, l.jsx)(q, {
            parentChannel: t,
            textAreaState: C,
            setTextAreaState: _,
            submit: A,
            error: S
          }), (0, l.jsx)(d.Z, {
            channel: t,
            isThreadCreation: !0
          })]
        })]
      })
    })
  })
}

function Y(e) {
  let {
    startedFromMessage: t,
    threadSettings: n,
    updateThreadSettings: i,
    privateThreadMode: s
  } = e, r = (0, D.oD)(n, s), c = (0, l.jsx)("div", {
    className: B.privateThreadFormTitle,
    children: (0, l.jsx)("span", {
      className: B.privateThreadFormTitleText,
      children: G.Z.Messages.PRIVATE_THREAD
    })
  }), u = (0, l.jsx)(o.Checkbox, {
    className: a()(B.checkbox),
    type: o.Checkbox.Types.INVERTED,
    disabled: s === D.Jw.PrivateOnly,
    value: r,
    onChange: (e, t) => i({
      isPrivate: t
    }),
    children: (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "none",
      children: G.Z.Messages.FORM_THREAD_PRIVATE_THREAD_SECTION_LABEL
    })
  });
  return t || s === D.Jw.Disabled ? null : (0, l.jsxs)(o.FormSection, {
    title: c,
    className: B.formSection,
    children: [u, r ? (0, l.jsx)(o.Text, {
      className: B.privateThreadDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: G.Z.Messages.FORM_THREAD_PRIVATE_THREAD_DESCRIPTION
    }) : null]
  })
}

function K(e) {
  var t;
  let {
    parentChannel: n,
    parentMessageId: i,
    threadSettings: s,
    updateThreadSettings: a,
    error: r
  } = e, c = null !== (t = s.name) && void 0 !== t ? t : "", d = (0, b.Op)(r, {
    content: c
  }), h = (0, D.Od)(n, i), m = null != i, E = (0, j.Dt)();
  return (0, l.jsx)(o.FormSection, {
    tag: "label",
    htmlFor: E,
    title: G.Z.Messages.THREAD_NAME + (m ? " (Optional)" : ""),
    className: B.formSection,
    children: (0, l.jsx)(o.TextInput, {
      value: c,
      id: E,
      placeholder: "" !== h ? h : G.Z.Messages.FORM_THREAD_NAME_PLACEHOLDER,
      maxLength: H.HN8,
      onChange: e => {
        a({
          name: (0, U.Z)(e, !1)
        }), "" !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id)
      },
      onBlur: () => {
        let e = (0, U.Z)(c, !0);
        e !== c && a({
          name: e
        })
      },
      error: d
    })
  })
}

function q(e) {
  let {
    parentChannel: t,
    textAreaState: n,
    setTextAreaState: s,
    submit: d,
    error: h
  } = e, [m, E] = i.useState(!0), p = i.useCallback(() => E(!0), []), g = i.useCallback(() => E(!1), []), f = i.useCallback((e, n, l) => {
    c.Z.saveDraft(t.id, n, v.d.FirstThreadMessage), s(e => ("" !== n && e.textValue !== n ? u.Z.startTyping(t.id) : "" === n && u.Z.stopTyping(t.id), {
      textValue: n,
      richValue: l
    }))
  }, [t.id, s]), I = i.useCallback(e => {
    let {
      value: t,
      uploads: n,
      stickers: l
    } = e;
    return d(t, l, n)
  }, [d]);
  (0, O.yp)({
    event: H.CkL.TEXTAREA_FOCUS,
    handler: p
  }), (0, O.yp)({
    event: H.CkL.TEXTAREA_BLUR,
    handler: g
  });
  let x = (0, r.e7)([M.Z], () => M.Z.can(H.Plq.ATTACH_FILES, t)),
    T = (0, b.Op)(h, {
      content: n.textValue
    });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(_.Z, {
      channelId: t.id,
      type: F,
      canAttachFiles: x
    }), (0, l.jsx)("div", {
      className: B.starterMessageError,
      children: (0, l.jsx)(o.InputError, {
        error: T
      })
    }), (0, l.jsx)(C.Z, {
      type: F,
      channel: t,
      placeholder: G.Z.Messages.FORM_THREAD_STARTER_MESSAGE_PLACEHOLDER,
      textValue: n.textValue,
      richValue: n.richValue,
      focused: m,
      className: B.channelTextArea,
      innerClassName: a()(B.channelTextAreaInner, {
        [B.channelTextAreaInnerError]: null != T
      }),
      onFocus: p,
      onBlur: g,
      onChange: f,
      onSubmit: I,
      promptToUpload: y.d
    })]
  })
}

function X(e) {
  let {
    parentChannel: t,
    parentMessageId: n
  } = e, i = (0, r.e7)([A.Z], () => null == n ? null : A.Z.getMessage(t.id, n)), s = Z.jU.useSetting();
  return null != i ? (0, l.jsx)(x.Z, {
    className: B.messagePreview,
    message: i,
    channel: t,
    compact: s,
    renderThreadAccessory: !1,
    trackAnnouncementViews: !0
  }) : null
}