"use strict";
n.d(t, {
  Z: function() {
    return ea
  }
}), n(47120), n(733860);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(512722),
  o = n.n(i),
  c = n(143927),
  d = n(924826),
  u = n(91192),
  m = n(536895),
  h = n(442837),
  g = n(481060),
  x = n(430742),
  _ = n(166459),
  E = n(541716),
  f = n(67158),
  C = n(893718),
  T = n(472243),
  N = n(436660),
  I = n(284182),
  S = n(795639),
  p = n(957730),
  v = n(25015),
  M = n(252032),
  j = n(913663),
  A = n(268350),
  R = n(456077),
  O = n(488131),
  b = n(602034),
  Z = n(23750),
  L = n(703558),
  P = n(496675),
  D = n(300429),
  y = n(117530),
  U = n(594174),
  F = n(459273),
  w = n(838440),
  H = n(127654),
  k = n(681154),
  B = n(883429),
  G = n(945141),
  z = n(456269),
  V = n(103921),
  W = n(228392),
  q = n(259637),
  K = n(76451),
  Y = n(470623),
  X = n(479099),
  J = n(399894),
  Q = n(81490),
  $ = n(710352),
  ee = n(981631),
  et = n(176505),
  en = n(689938),
  es = n(730729);
let el = E.I.CREATE_FORUM_POST;

function ea(e) {
  let {
    parentChannel: t,
    isSearchLoading: n,
    onChange: a,
    canCreatePost: i,
    inputRef: o
  } = e, {
    textAreaState: d,
    formOpen: u,
    previewing: m
  } = (0, Y.xH)(e => {
    let {
      textAreaState: t,
      formOpen: n,
      previewing: s
    } = e;
    return {
      textAreaState: t,
      formOpen: n,
      previewing: s
    }
  }, c.Z), [x, _] = l.useState(null), E = l.useContext(F.oo), f = l.useCallback(() => {
    E.bumpDispatchPriority()
  }, [E]), C = (0, h.e7)([P.Z], () => P.Z.can(ee.Plq.ATTACH_FILES, t)), T = (0, h.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)), N = u && C && i, v = (null == t ? void 0 : t.isMediaChannel()) === !0, M = function(e, t) {
    let n = (0, Y.AF)(),
      s = (0, z.ql)(e);
    return l.useCallback(() => {
      let {
        formOpen: l,
        setFormOpenFromUserAction: a,
        name: r,
        textAreaState: i,
        hasClickedForm: o
      } = n.getState();
      !l && (setTimeout(() => {
        if (t.current instanceof g.TextAreaAutosize) {
          var e, n, s, l;
          null === (n = t.current) || void 0 === n || null === (e = n._textArea) || void 0 === e || e.setSelectionRange(r.length, r.length), null === (l = t.current) || void 0 === l || null === (s = l._textArea) || void 0 === s || s.focus()
        }
      }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== s || y.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) && a())
    }, [n, e.id, s, t])
  }(t, o), R = function(e) {
    let {
      formOpen: t
    } = (0, Y.xH)(e => {
      let {
        formOpen: t
      } = e;
      return {
        formOpen: t
      }
    }, c.Z), n = (0, Y.AF)(), s = (0, b.r)({
      parentChannel: e
    });
    l.useEffect(() => {
      let {
        setNameError: e,
        setMessageError: t
      } = n.getState();
      e(null), t(null)
    }, [t, n]);
    let a = l.useCallback((t, s, l) => {
      let {
        name: a,
        textAreaState: r
      } = n.getState();
      null == t && (t = r.textValue), t = t.trim();
      let {
        content: i
      } = p.ZP.parse(e, t);
      if (t = i, null == s || 0 === s.length) {
        var o;
        s = null === (o = j.Z.getStickerPreview(e.id, el.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
      }
      if ((null == l || 0 === l.length) && (l = y.Z.getUploads(e.id, L.d.FirstThreadMessage)), null != l && l.length > 0 && e.isMediaChannel()) {
        let e = l.findIndex(e => !0 === e.isThumbnail);
        if (e > -1) {
          let t = l[e];
          l.splice(e, 1), l.unshift(t)
        }
      }
      let c = 0 === a.length,
        d = (null == t || 0 === t.length) && (null == s || 0 === s.length) && 0 === l.length;
      return {
        content: t,
        stickers: s,
        uploads: l,
        hasNameError: c,
        hasMessageError: d
      }
    }, [e, n]);
    return l.useCallback(async (t, l, r) => {
      let {
        setNameError: i,
        setMessageError: o,
        setSubmitting: c,
        resetFormState: d,
        formOpen: u,
        setFormOpen: m,
        setPreviewing: h,
        setFormOpenFromUserAction: g,
        setGuidelinesOpen: x
      } = n.getState(), _ = G.Z.hasSeen(e.id);
      if (!u) return (0, W.P_)({
        guildId: e.guild_id,
        channelId: e.id
      }), !_ && n.getState().setGuidelinesOpen(!0), g(), {
        shouldClear: !1,
        shouldRefocus: !1
      };
      let {
        content: E,
        stickers: f,
        uploads: C,
        hasNameError: T,
        hasMessageError: N
      } = a(t, l, r);
      if (i(T ? (0, k.V_)() : null), o(N ? (0, k.T4)() : null), T || N) return {
        shouldClear: !1,
        shouldRefocus: !0
      };
      try {
        c(!0);
        let {
          valid: t
        } = await (0, w.v)({
          content: E,
          stickers: f,
          uploads: C,
          type: el,
          channel: e
        });
        if (!t) return {
          shouldClear: !1,
          shouldRefocus: !0
        };
        let n = await s(E, f, C);
        return (0, O.ok)(n), B.Z.resort(e.id), (0, A.qB)(e.id, el.drafts.type), d(), m(!1), h(!1), G.Z.markAsSeen(e.id), x(!1), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch (t) {
        var I, S;
        return (null === (I = t.body) || void 0 === I ? void 0 : I.code) === ee.evJ.AUTOMOD_TITLE_BLOCKED ? i((0, k.Gx)(t.body, e)) : (null === (S = t.body) || void 0 === S ? void 0 : S.code) === ee.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, k.Gx)(t.body, e)), {
          shouldClear: !1,
          shouldRefocus: !0
        }
      } finally {
        c(!1)
      }
    }, [s, a, e, n])
  }(t);
  return l.useLayoutEffect(a, [u, d, T, a]), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)("div", {
      "aria-label": i ? en.Z.Messages.NEW_FORUM_POST : en.Z.Messages.SEARCH,
      className: r()(es.container, {
        [es.collapsed]: !u
      }),
      onClick: !u && i ? M : void 0,
      children: (0, s.jsxs)("form", {
        onMouseDown: f,
        onFocus: f,
        onSubmit: e => {
          if (e.preventDefault(), !!i) R()
        },
        children: [(0, s.jsxs)("div", {
          className: es.formContainer,
          children: [(0, s.jsx)(er, {
            parentChannel: t,
            isSearchLoading: n,
            inputRef: o
          }), (0, s.jsxs)("div", {
            className: m ? es.previewForm : es.form,
            children: [(0, s.jsx)(ei, {
              editorRef: x,
              parentChannel: t,
              isSearchLoading: n,
              inputRef: o,
              canCreatePost: i
            }), u && (0, s.jsx)(ed, {
              editorRef: x,
              setEditorRef: _,
              parentChannel: t,
              submit: R,
              disabled: !i
            }), m && (0, s.jsx)(eu, {})]
          }), N && (v ? (0, s.jsx)(S._, {
            parentChannel: t
          }) : (0, s.jsx)(K.Z, {
            channelId: t.id
          }))]
        }), (0, s.jsxs)("div", {
          className: es.form,
          children: [N && v && (0, s.jsx)(I.Z, {
            parentChannel: t
          }), u && (0, s.jsx)(eh, {
            className: es.horizontalPadding,
            parentChannel: t,
            canCreatePost: i
          })]
        })]
      })
    })
  })
}
let er = l.memo(function(e) {
    let {
      parentChannel: t,
      isSearchLoading: n,
      inputRef: a
    } = e, {
      formOpen: r,
      name: i,
      textAreaState: o,
      hasClickedForm: d,
      submitting: u
    } = (0, Y.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: s,
        previewing: l,
        textAreaState: a,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: s,
        textAreaState: a,
        previewing: l,
        hasClickedForm: r,
        submitting: i
      }
    }, c.Z), m = (0, Y.AF)(), h = (0, z.ql)(t), E = l.useCallback(() => {
      var e;
      m.getState().resetFormState(), x.Z.clearDraft(t.id, L.d.ThreadSettings), x.Z.clearDraft(t.id, L.d.FirstThreadMessage), _.Z.clearAll(t.id, L.d.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null === (e = a.current) || void 0 === e || e.blur(), (0, W.Oq)({
        guildId: t.guild_id,
        channelId: t.id
      })
    }, [m, t.id, t.guild_id, a]), f = l.useMemo(() => {
      if (n && !r) return (0, s.jsx)(eE, {});
      if (!n && !r && (0 === o.textValue.trim().length || o.textValue.trim() === h)) return (0, s.jsx)(g.MagnifyingGlassIcon, {
        size: "md",
        color: "currentColor",
        className: es.searchIcon
      });
      if (!r && (i.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || y.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) && d) return (0, s.jsx)(g.PencilIcon, {
        size: "md",
        color: "currentColor",
        className: es.pencilIcon
      });
      else return u ? (0, s.jsx)(g.CircleXIcon, {
        size: "md",
        color: "currentColor",
        className: es.closeIconDisabled
      }) : (0, s.jsx)(g.Tooltip, {
        text: en.Z.Messages.FORUM_CLEAR_ALL,
        children: e => (0, s.jsx)(g.Clickable, {
          ...e,
          onClick: E,
          children: (0, s.jsx)(g.CircleXIcon, {
            size: "md",
            color: "currentColor",
            className: es.closeIcon
          })
        })
      })
    }, [n, r, d, i, o.textValue, E, t.id, h, u]);
    return (0, s.jsx)("div", {
      className: es.prefixElement,
      children: f
    })
  }),
  ei = l.memo(function(e) {
    let {
      parentChannel: t,
      inputRef: n,
      canCreatePost: a,
      editorRef: r
    } = e, {
      formOpen: i,
      nameError: d,
      name: u,
      textAreaState: m,
      previewing: x
    } = (0, Y.xH)(e => {
      let {
        formOpen: t,
        nameError: n,
        name: s,
        previewing: l,
        textAreaState: a,
        hasClickedForm: r,
        submitting: i
      } = e;
      return {
        formOpen: t,
        nameError: n,
        name: s,
        textAreaState: a,
        previewing: l,
        hasClickedForm: r,
        submitting: i
      }
    }, c.Z), _ = (0, Y.AF)(), E = null != t.topic && 0 !== t.topic.length, f = G.Z.hasSeen(t.id), C = (0, z.ql)(t), T = (0, h.e7)([U.default], () => U.default.getCurrentUser());
    o()(null != T, "current user cannot be null");
    (0, F.yp)({
      event: ee.CkL.FOCUS_COMPOSER_TITLE,
      handler: () => {
        var e;
        let t = n.current instanceof g.TextAreaAutosize ? null === (e = n.current) || void 0 === e ? void 0 : e._textArea : n.current;
        null == t || t.focus(), _.getState().setTitleFocused(!0), _.getState().setFormOpen(!0), _.getState().setHasClickedForm(!0)
      }
    });
    let N = l.useCallback(e => {
        let n = e.clipboardData.files[0];
        null != n && n.type.startsWith("image/") && (e.preventDefault(), (0, H.d)([n], t, L.d.FirstThreadMessage), _.getState().setFormOpenFromUserAction())
      }, [t, _]),
      I = (0, k.Op)(d, {
        content: u
      });
    return (0, s.jsxs)("div", {
      className: es.titleContainer,
      onPaste: N,
      children: [i && x ? (0, s.jsx)(g.Heading, {
        variant: "heading-md/semibold",
        className: es.title,
        children: u
      }) : (0, s.jsx)(g.TextArea, {
        value: u,
        placeholder: a ? i || m.textValue.length > 0 && m.textValue.trim() !== C ? en.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : en.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : en.Z.Messages.SEARCH,
        flex: !0,
        autosize: i,
        rows: 1,
        showCharacterCount: !1,
        showRemainingCharacterCount: !1,
        maxLength: ee.HN8,
        onChange: e => {
          let n = (0, R.Z)(e, !1);
          _.getState().setName(n);
          let s = 0 === n.trim().length,
            l = 0 === m.textValue.trim().length,
            a = m.textValue.trim() === C;
          s && (l || a) && _.getState().setHasClickedForm(!1), !i && B.Z.updateForumSearchQuery(t.id, n)
        },
        onFocus: () => {
          _.getState().setTitleFocused(!0), _.getState().setBodyFocused(!1)
        },
        onBlur: () => {
          _.getState().setTitleFocused(!1);
          let e = (0, R.Z)(u, !0);
          e !== u && (_.getState().setName(e), !i && B.Z.updateForumSearchQuery(t.id, e))
        },
        onKeyDown: e => {
          var s, l;
          "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), i && u.length > 0 ? null == r || r.focus() : a && e.shiftKey && ((0, W.nH)({
            guildId: t.guild_id,
            channelId: t.id
          }), E && !f && _.getState().setGuidelinesOpen(!0), _.getState().setFormOpenFromUserAction(), u.trim().length > 0 && (_.getState().setBodyFocused(!0), null == r || r.focus())));
          let o = n.current instanceof g.TextAreaAutosize ? null === (s = n.current) || void 0 === s ? void 0 : s._textArea : n.current;
          if ("Home" === e.key || "End" === e.key) {
            if (null == o) return;
            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) o.setSelectionRange(0, 0);
            else {
              let e = u.length;
              o.setSelectionRange(e, e)
            }
          }
          "Escape" === e.key && !_.getState().submitting && (null === (l = n.current) || void 0 === l || l.blur(), _.getState().setFormOpen(!1), _.getState().setTitleFocused(!1), _.getState().setBodyFocused(!1), _.getState().setPreviewing(!1))
        },
        error: I,
        className: es.title,
        inputRef: n
      }), i ? null : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(eo, {
          parentChannel: t
        }), (0, s.jsx)(eg, {
          parentChannel: t,
          canCreatePost: a
        })]
      })]
    })
  });

function eo(e) {
  let {
    parentChannel: t
  } = e, {
    guidelinesOpen: n
  } = (0, Y.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), l = (0, Y.AF)(), a = null != t.topic && 0 !== t.topic.length, i = () => {
    l.getState().setGuidelinesOpen(!n)
  };
  return a ? (0, s.jsx)(g.Tooltip, {
    text: en.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
    children: e => (0, s.jsx)(g.Clickable, {
      ...e,
      onClick: i,
      className: r()(es.forumPostFormButton, {
        [es.forumPostFormButtonActive]: n
      }),
      children: (0, s.jsx)(g.BookCheckIcon, {
        size: "md",
        color: "currentColor",
        ...e
      })
    })
  }) : null
}
let ec = l.memo(function(e) {
    let {
      parentChannel: t,
      textValue: n
    } = e, l = new Z.ZP({
      channelId: t.id,
      content: n
    }), {
      content: a
    } = (0, v.Z)(l, {
      hideSimpleEmbedContent: !0,
      isInteracting: !1,
      formatInline: !1,
      allowList: !0,
      allowHeading: !0,
      previewLinkTarget: !0
    }), i = (0, M.Z)({
      message: l,
      channel: t
    }, a, !1);
    return (0, s.jsx)("div", {
      className: r()(es.channelTextAreaInner, es.previewTextArea),
      children: i
    })
  }),
  ed = l.memo(function(e) {
    let {
      parentChannel: t,
      submit: n,
      disabled: a = !1,
      editorRef: i,
      setEditorRef: d
    } = e, u = (0, h.e7)([U.default], () => U.default.getCurrentUser());
    o()(null != u, "current user cannot be null");
    let {
      messageError: m,
      previewing: x,
      textAreaState: _,
      bodyFocused: E,
      formOpen: f
    } = (0, Y.xH)(e => {
      let {
        messageError: t,
        textAreaState: n,
        previewing: s,
        bodyFocused: l,
        formOpen: a
      } = e;
      return {
        messageError: t,
        textAreaState: n,
        previewing: s,
        bodyFocused: l,
        formOpen: a
      }
    }, c.Z), T = (0, Y.AF)();
    l.useEffect(() => () => (0, W.Vn)({
      guildId: t.guild_id,
      channelId: t.id
    }), [t.guild_id, t.id]);
    let I = l.useCallback(() => {
        T.getState().setBodyFocused(!0)
      }, [T]),
      S = l.useCallback(() => {
        T.getState().setBodyFocused(!1)
      }, [T]),
      p = l.useCallback((e, t, n) => {
        let {
          setTextAreaState: s
        } = T.getState();
        s({
          textValue: t,
          richValue: n
        })
      }, [T]),
      v = l.useCallback(e => {
        let {
          value: t,
          uploads: s,
          stickers: l
        } = e;
        return n(t, l, s)
      }, [n]);
    (0, F.yp)({
      event: ee.CkL.TEXTAREA_FOCUS,
      handler: I
    }), (0, F.yp)({
      event: ee.CkL.TEXTAREA_BLUR,
      handler: S
    });
    let M = (0, k.Op)(m, {
      content: _.textValue
    });
    return (0, s.jsx)("div", {
      className: es.bodyContainer,
      children: (0, s.jsxs)("div", {
        className: es.contentContainer,
        children: [x ? (0, s.jsx)(ec, {
          parentChannel: t,
          textValue: _.textValue
        }) : (0, s.jsx)("div", {
          onClick: I,
          children: (0, s.jsx)(C.Z, {
            type: el,
            setEditorRef: d,
            channel: t,
            placeholder: en.Z.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
            textValue: _.textValue,
            richValue: _.richValue,
            focused: E,
            className: es.channelTextArea,
            innerClassName: r()(es.channelTextAreaInner, {
              [es.channelTextAreaInnerError]: null != M
            }),
            onChange: p,
            onSubmit: v,
            promptToUpload: H.d,
            disabled: a,
            onKeyDown: e => {
              if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                if (null == i) return;
                e.preventDefault(), e.stopPropagation();
                let t = i.getSlateEditor();
                if (null == t) return;
                "Home" === e.key ? N.Q.resetSelectionToStart(t) : N.Q.resetSelectionToEnd(t)
              }
              f && "Escape" === e.key && !T.getState().submitting && (null == i || i.blur(), T.getState().setFormOpen(!1), T.getState().setTitleFocused(!1), T.getState().setBodyFocused(!1), T.getState().setPreviewing(!1))
            },
            autoCompletePosition: "bottom"
          })
        }), (0, s.jsx)(g.InputError, {
          error: M
        })]
      })
    })
  });

function eu() {
  return (0, s.jsx)("div", {
    className: es.previewModeIndicator,
    children: (0, s.jsx)(g.Text, {
      variant: "text-sm/normal",
      color: "interactive-normal",
      children: en.Z.Messages.PREVIEW_MODE
    })
  })
}

function em() {
  let e = (0, V.C)(),
    {
      previewing: t
    } = (0, Y.xH)(e => {
      let {
        previewing: t
      } = e;
      return {
        previewing: t
      }
    }),
    n = (0, Y.AF)(),
    a = l.useCallback(() => {
      n.getState().setPreviewing(!t), (0, W.nE)()
    }, [t, n]);
  return e ? (0, s.jsx)(g.Tooltip, {
    text: t ? en.Z.Messages.EXIT_PREVIEW : en.Z.Messages.PREVIEW,
    children: e => (0, s.jsx)(g.Clickable, {
      ...e,
      onClick: a,
      className: r()(es.forumPostFormButton, {
        [es.forumPostFormButtonActive]: t
      }),
      children: t ? (0, s.jsx)(g.EyeSlashIcon, {
        size: "md",
        color: "currentColor",
        ...e
      }) : (0, s.jsx)(g.EyeIcon, {
        size: "md",
        color: "currentColor",
        ...e
      })
    })
  }) : null
}
let eh = l.memo(function(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    className: a
  } = e, {
    textAreaState: r,
    appliedTags: i,
    name: o
  } = (0, Y.xH)(e => {
    let {
      textAreaState: t,
      appliedTags: n,
      name: s
    } = e;
    return {
      textAreaState: t,
      appliedTags: n,
      name: s
    }
  }), {
    rateLimitPerUser: c
  } = t, d = c > 0, u = (0, h.e7)([D.Z], () => D.Z.getSlowmodeCooldownGuess(t.id, D.S.CreateThread)), m = (0, h.e7)([P.Z], () => P.Z.can(ee.Plq.MANAGE_THREADS, t) || P.Z.can(ee.Plq.MANAGE_CHANNELS, t)), x = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, _ = (0, Y.AF)(), E = l.useCallback(() => {
    _.getState().setBodyFocused(!1)
  }, [_]), C = l.useMemo(() => "" !== o.trim() && "" !== r.textValue.trim(), [o, r.textValue]);
  return l.useEffect(() => {
    !C && _.getState().setPreviewing(!1)
  }, [C, _]), (0, s.jsxs)("div", {
    className: a,
    children: [(0, s.jsx)(e_, {
      parentChannel: t
    }), (0, s.jsx)("div", {
      className: es.tagsDivider
    }), (0, s.jsxs)("div", {
      className: es.controlsContainer,
      children: [(0, s.jsxs)("div", {
        className: es.controls,
        children: [(0, s.jsxs)("div", {
          className: es.wrappedControls,
          children: [x && (0, s.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-danger",
            children: en.Z.Messages.FORUM_POST_TAG_REQUIRED_ERROR
          }), (0, s.jsx)(T.Z, {
            type: el,
            textValue: r.textValue,
            className: es.characterCount
          }), d && (0, s.jsx)(J.Z, {
            rateLimitPerUser: c,
            slowmodeCooldownGuess: u,
            isBypassSlowmode: m,
            leadingIcon: !0
          })]
        }), (0, s.jsx)(eo, {
          parentChannel: t
        }), C && (0, s.jsx)(em, {}), (0, s.jsx)(eg, {
          parentChannel: t,
          disableIfInvalid: !0,
          canCreatePost: n,
          disabled: d && !m && u > 0
        })]
      }), (0, s.jsx)(f.Z, {
        type: el,
        className: es.expressionPicker,
        onClick: E
      }, "expression")]
    })]
  })
});

function eg(e) {
  let {
    parentChannel: t,
    canCreatePost: n,
    disabled: l,
    disableIfInvalid: a = !1
  } = e, {
    submitting: r,
    textAreaState: i,
    name: o,
    appliedTags: c,
    formOpen: d
  } = (0, Y.xH)(e => {
    let {
      submitting: t,
      textAreaState: n,
      name: s,
      appliedTags: l,
      formOpen: a
    } = e;
    return {
      submitting: t,
      textAreaState: n,
      name: s,
      appliedTags: l,
      formOpen: a
    }
  }), u = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === c.size && o.length > 0 && i.textValue.length > 0, m = (0, h.Wu)([y.Z], () => y.Z.getUploads(t.id, L.d.FirstThreadMessage)), x = i.textValue.trim().length > 0 || m.length > 0, _ = !u && x && o.trim().length > 0;
  if (__OVERLAY__) return null;
  let E = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, s.jsxs)(g.Button, {
      ...e,
      size: g.Button.Sizes.SMALL,
      className: es.submitButton,
      innerClassName: es.submitButtonInner,
      type: "submit",
      submitting: r,
      disabled: a && !_ || l || !n,
      children: [(0, s.jsx)(g.ChatIcon, {
        size: "xs",
        color: "currentColor",
        className: es.submitIcon
      }), (0, s.jsx)(g.Text, {
        variant: "text-md/semibold",
        color: "none",
        children: d ? en.Z.Messages.SUBMIT_POST : en.Z.Messages.NEW_FORUM_POST_NEW
      })]
    })
  };
  return n ? E() : (0, s.jsx)(g.Tooltip, {
    text: en.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
    children: e => E(e)
  })
}

function ex() {
  return Promise.resolve()
}

function e_(e) {
  let {
    parentChannel: t
  } = e, {
    appliedTags: n,
    toggleAppliedTag: a,
    setPopoutOpen: i
  } = (0, Y.xH)(e => {
    let {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: s
    } = e;
    return {
      appliedTags: t,
      toggleAppliedTag: n,
      setPopoutOpen: s
    }
  }, c.Z), o = n.size >= $.Cn, h = (0, d.ZP)({
    id: "".concat(t.id, "-post-form-tags-navigator"),
    isEnabled: !0,
    wrap: !0,
    scrollToStart: ex,
    scrollToEnd: ex,
    orientation: m.hy.HORIZONTAL
  }), {
    containerRef: x,
    containerWidth: _
  } = (0, Q.Z)(), E = l.useRef(null), [f, C] = l.useState(!0), T = (0, z.Vm)(t), [N, I] = l.useState(0);
  return (l.useLayoutEffect(() => {
    var e;
    let t = E.current,
      n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
      s = null == t || null == n || n.clientHeight > t.clientHeight;
    if (s !== f && C(s), s && null != x.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = x.current.getBoundingClientRect(), s = 0;
      for (let l of n.children) {
        let {
          right: n,
          top: a,
          height: r
        } = l.getBoundingClientRect();
        if (a - t > r) break;
        n - e > s && (s = n - e)
      }
      I(s)
    }
  }, [T, f, x, _]), 0 === T.length) ? null : (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: es.tagsContainer,
      ref: x,
      children: [(0, s.jsx)(g.TagIcon, {
        size: "xs",
        color: "currentColor",
        className: es.tagsIcon
      }), (0, s.jsx)("div", {
        className: es.tagList,
        ref: E,
        children: (0, s.jsx)(u.bG, {
          navigator: h,
          children: (0, s.jsx)(u.SJ, {
            children: e => {
              let {
                ref: t,
                ...l
              } = e;
              return (0, s.jsx)("div", {
                className: es.tagListInner,
                ref: t,
                ...l,
                children: T.map(e => (0, s.jsx)(X.Z, {
                  ariaLabel: en.Z.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                    tagName: e.name
                  }),
                  tag: e,
                  onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
                  disabled: !n.has(e.id) && n.size >= $.Cn,
                  selected: n.has(e.id),
                  size: X.Z.Sizes.SMALL
                }, e.id))
              })
            }
          })
        })
      }), f && (0, s.jsx)(g.Popout, {
        onRequestOpen: () => i(!0),
        onRequestClose: () => i(!1),
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, s.jsx)(q.Z, {
            parentChannel: t,
            appliedTags: n,
            maxTagsApplied: o,
            onSelectTag: a,
            onClose: l
          })
        },
        position: "bottom",
        align: "center",
        children: e => (0, s.jsxs)(g.Button, {
          ...e,
          size: g.Button.Sizes.TINY,
          className: es.tagsButton,
          innerClassName: es.tagsButtonInner,
          style: {
            left: N
          },
          look: g.Button.Looks.LINK,
          "aria-label": en.Z.Messages.ADD_TAG_FORUM_POST,
          children: [en.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(g.ChevronSmallDownIcon, {
            size: "custom",
            color: "currentColor",
            width: 16
          })]
        })
      }), (0, s.jsxs)(g.Button, {
        size: g.Button.Sizes.TINY,
        className: r()(es.tagsButton, es.tagsButtonPlaceholder),
        innerClassName: es.tagsButtonInner,
        look: g.Button.Looks.LINK,
        "aria-label": en.Z.Messages.ADD_TAG_FORUM_POST,
        children: [en.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, s.jsx)(g.ChevronSmallDownIcon, {
          size: "custom",
          color: "currentColor",
          width: 16
        })]
      })]
    })
  })
}

function eE(e) {
  let {
    style: t,
    className: n
  } = e;
  return (0, s.jsx)("div", {
    className: n,
    style: t,
    children: (0, s.jsx)("div", {
      className: es.loader
    })
  })
}