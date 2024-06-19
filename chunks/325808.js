t.d(s, {
  Z: function() {
    return M
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(442837),
  r = t(481060),
  o = t(846027),
  c = t(230711),
  E = t(825209),
  d = t(131951),
  _ = t(285952),
  T = t(153124),
  S = t(358085),
  u = t(962100),
  I = t(981631),
  N = t(689938),
  A = t(972633),
  C = t(331651);
let O = !S.isPlatformEmbedded,
  m = (0, T.hQ)();

function h(e) {
  let {
    value: s
  } = e;
  s === I.pM4.PUSH_TO_TALK && O && (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(t.bind(t, 468026));
    return s => (0, n.jsx)(e, {
      title: N.Z.Messages.PTT_LIMITED_TITLE,
      confirmText: N.Z.Messages.DOWNLOAD,
      cancelText: N.Z.Messages.OKAY,
      onConfirm: () => (0, u.y)("PTT Limited Modal"),
      body: N.Z.Messages.PTT_LIMITED_BODY,
      ...s
    })
  }), o.Z.setMode(s)
}

function g(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), " ms")
}

function R(e) {
  let s, {
      inputMode: t
    } = e,
    {
      shortcut: i,
      delay: T
    } = (0, l.cj)([d.Z], () => d.Z.getModeOptions());
  return s = S.isPlatformEmbedded || t !== I.pM4.PUSH_TO_TALK ? (0, n.jsx)(r.FormText, {
    type: r.FormText.Types.DESCRIPTION,
    className: a()(A.pttToolsMessage, C.marginBottom8),
    children: N.Z.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({
      onClick: () => c.Z.setSection(I.oAB.KEYBINDS)
    })
  }) : (0, n.jsx)(r.FormText, {
    type: r.FormText.Types.DESCRIPTION,
    className: a()(A.pttToolsMessage, A.pttToolsWarning, C.marginBottom8),
    children: N.Z.Messages.PTT_LIMITED_WARNING.format({
      onDownloadClick: () => (0, u.y)("Help Text PTT")
    })
  }), (0, n.jsxs)("div", {
    className: A.pttTools,
    children: [(0, n.jsxs)(_.Z, {
      children: [(0, n.jsx)(_.Z.Child, {
        basis: "50%",
        children: (0, n.jsx)(r.FormItem, {
          title: N.Z.Messages.FORM_LABEL_SHORTCUT,
          children: (0, n.jsx)(E.Z, {
            defaultValue: i,
            onChange: e => o.Z.setMode(t, {
              shortcut: e
            })
          })
        })
      }), (0, n.jsx)(_.Z.Child, {
        basis: "50%",
        children: (0, n.jsxs)(r.FormItem, {
          children: [(0, n.jsx)(r.FormTitle, {
            id: m,
            tag: r.FormTitleTags.H5,
            className: C.marginBottom8,
            children: N.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
          }), (0, n.jsx)(r.Slider, {
            initialValue: T,
            onValueChange: e => o.Z.setMode(t, {
              delay: e
            }),
            onValueRender: g,
            maxValue: I.qhL,
            "aria-labelledby": m
          })]
        })
      })]
    }), s]
  })
}

function M() {
  let e = (0, l.e7)([d.Z], () => d.Z.getMode()),
    s = [{
      value: I.pM4.VOICE_ACTIVITY,
      name: N.Z.Messages.INPUT_MODE_VAD
    }, {
      value: I.pM4.PUSH_TO_TALK,
      name: O ? N.Z.Messages.INPUT_MODE_PTT_LIMITED : N.Z.Messages.INPUT_MODE_PTT
    }];
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.FormItem, {
      title: N.Z.Messages.FORM_LABEL_INPUT_MODE,
      className: C.marginBottom20,
      children: (0, n.jsx)(r.RadioGroup, {
        onChange: h,
        options: s,
        value: e
      })
    }), e === I.pM4.PUSH_TO_TALK && (0, n.jsx)(R, {
      inputMode: e
    })]
  })
}