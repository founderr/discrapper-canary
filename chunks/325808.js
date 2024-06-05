"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("442837"),
  r = s("481060"),
  o = s("846027"),
  d = s("230711"),
  u = s("825209"),
  c = s("131951"),
  S = s("285952"),
  E = s("153124"),
  T = s("358085"),
  _ = s("962100"),
  I = s("981631"),
  N = s("689938"),
  f = s("917439"),
  g = s("611273");
let m = !T.isPlatformEmbedded,
  C = (0, E.uid)();

function A(e) {
  let {
    value: t
  } = e;
  t === I.InputModes.PUSH_TO_TALK && m && (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(s.bind(s, "468026"));
    return t => (0, a.jsx)(e, {
      title: N.default.Messages.PTT_LIMITED_TITLE,
      confirmText: N.default.Messages.DOWNLOAD,
      cancelText: N.default.Messages.OKAY,
      onConfirm: () => (0, _.openDownloadAppsModal)("PTT Limited Modal"),
      body: N.default.Messages.PTT_LIMITED_BODY,
      ...t
    })
  }), o.default.setMode(t)
}

function h(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), " ms")
}

function O(e) {
  let t, {
      inputMode: s
    } = e,
    {
      shortcut: n,
      delay: E
    } = (0, i.useStateFromStoresObject)([c.default], () => c.default.getModeOptions());
  return t = T.isPlatformEmbedded || s !== I.InputModes.PUSH_TO_TALK ? (0, a.jsx)(r.FormText, {
    type: r.FormText.Types.DESCRIPTION,
    className: l()(f.pttToolsMessage, g.marginBottom8),
    children: N.default.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({
      onClick: () => d.default.setSection(I.UserSettingsSections.KEYBINDS)
    })
  }) : (0, a.jsx)(r.FormText, {
    type: r.FormText.Types.DESCRIPTION,
    className: l()(f.pttToolsMessage, f.pttToolsWarning, g.marginBottom8),
    children: N.default.Messages.PTT_LIMITED_WARNING.format({
      onDownloadClick: () => (0, _.openDownloadAppsModal)("Help Text PTT")
    })
  }), (0, a.jsxs)("div", {
    className: f.pttTools,
    children: [(0, a.jsxs)(S.default, {
      children: [(0, a.jsx)(S.default.Child, {
        basis: "50%",
        children: (0, a.jsx)(r.FormItem, {
          title: N.default.Messages.FORM_LABEL_SHORTCUT,
          children: (0, a.jsx)(u.default, {
            defaultValue: n,
            onChange: e => o.default.setMode(s, {
              shortcut: e
            })
          })
        })
      }), (0, a.jsx)(S.default.Child, {
        basis: "50%",
        children: (0, a.jsxs)(r.FormItem, {
          children: [(0, a.jsx)(r.FormTitle, {
            id: C,
            tag: r.FormTitleTags.H5,
            className: g.marginBottom8,
            children: N.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
          }), (0, a.jsx)(r.Slider, {
            initialValue: E,
            onValueChange: e => o.default.setMode(s, {
              delay: e
            }),
            onValueRender: h,
            maxValue: I.MAX_PTT_RELEASE_DELAY,
            "aria-labelledby": C
          })]
        })
      })]
    }), t]
  })
}

function p() {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.getMode()),
    t = [{
      value: I.InputModes.VOICE_ACTIVITY,
      name: N.default.Messages.INPUT_MODE_VAD
    }, {
      value: I.InputModes.PUSH_TO_TALK,
      name: m ? N.default.Messages.INPUT_MODE_PTT_LIMITED : N.default.Messages.INPUT_MODE_PTT
    }];
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.FormItem, {
      title: N.default.Messages.FORM_LABEL_INPUT_MODE,
      className: g.marginBottom20,
      children: (0, a.jsx)(r.RadioGroup, {
        onChange: A,
        options: t,
        value: e
      })
    }), e === I.InputModes.PUSH_TO_TALK && (0, a.jsx)(O, {
      inputMode: e
    })]
  })
}