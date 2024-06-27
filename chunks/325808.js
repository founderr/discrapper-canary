t.d(s, {
  Z: function() {
    return R
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(442837),
  o = t(481060),
  l = t(846027),
  c = t(230711),
  d = t(825209),
  _ = t(131951),
  E = t(285952),
  u = t(153124),
  T = t(358085),
  S = t(962100),
  I = t(981631),
  N = t(689938),
  C = t(972633),
  m = t(331651);
let A = !T.isPlatformEmbedded,
  g = (0, u.hQ)();

function O(e) {
  let {
    value: s
  } = e;
  s === I.pM4.PUSH_TO_TALK && A && (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(t.bind(t, 468026));
    return s => (0, n.jsx)(e, {
      title: N.Z.Messages.PTT_LIMITED_TITLE,
      confirmText: N.Z.Messages.DOWNLOAD,
      cancelText: N.Z.Messages.OKAY,
      onConfirm: () => (0, S.y)("PTT Limited Modal"),
      body: N.Z.Messages.PTT_LIMITED_BODY,
      ...s
    })
  }), l.Z.setMode(s)
}

function h(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), " ms")
}

function p(e) {
  let s, {
      inputMode: t
    } = e,
    {
      shortcut: a,
      delay: u
    } = (0, r.cj)([_.Z], () => _.Z.getModeOptions());
  return s = T.isPlatformEmbedded || t !== I.pM4.PUSH_TO_TALK ? (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: i()(C.pttToolsMessage, m.marginBottom8),
    children: N.Z.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({
      onClick: () => c.Z.setSection(I.oAB.KEYBINDS)
    })
  }) : (0, n.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: i()(C.pttToolsMessage, C.pttToolsWarning, m.marginBottom8),
    children: N.Z.Messages.PTT_LIMITED_WARNING.format({
      onDownloadClick: () => (0, S.y)("Help Text PTT")
    })
  }), (0, n.jsxs)("div", {
    className: C.pttTools,
    children: [(0, n.jsxs)(E.Z, {
      children: [(0, n.jsx)(E.Z.Child, {
        basis: "50%",
        children: (0, n.jsx)(o.FormItem, {
          title: N.Z.Messages.FORM_LABEL_SHORTCUT,
          children: (0, n.jsx)(d.Z, {
            defaultValue: a,
            onChange: e => l.Z.setMode(t, {
              shortcut: e
            })
          })
        })
      }), (0, n.jsx)(E.Z.Child, {
        basis: "50%",
        children: (0, n.jsxs)(o.FormItem, {
          children: [(0, n.jsx)(o.FormTitle, {
            id: g,
            tag: o.FormTitleTags.H5,
            className: m.marginBottom8,
            children: N.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
          }), (0, n.jsx)(o.Slider, {
            initialValue: u,
            onValueChange: e => l.Z.setMode(t, {
              delay: e
            }),
            onValueRender: h,
            maxValue: I.qhL,
            "aria-labelledby": g
          })]
        })
      })]
    }), s]
  })
}

function R() {
  let e = (0, r.e7)([_.Z], () => _.Z.getMode()),
    s = [{
      value: I.pM4.VOICE_ACTIVITY,
      name: N.Z.Messages.INPUT_MODE_VAD
    }, {
      value: I.pM4.PUSH_TO_TALK,
      name: A ? N.Z.Messages.INPUT_MODE_PTT_LIMITED : N.Z.Messages.INPUT_MODE_PTT
    }];
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.FormItem, {
      title: N.Z.Messages.FORM_LABEL_INPUT_MODE,
      className: m.marginBottom20,
      children: (0, n.jsx)(o.RadioGroup, {
        onChange: O,
        options: s,
        value: e
      })
    }), e === I.pM4.PUSH_TO_TALK && (0, n.jsx)(p, {
      inputMode: e
    })]
  })
}