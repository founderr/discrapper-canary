"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var l = n("735250"),
  s = n("470079"),
  u = n("374470"),
  a = n("442837"),
  r = n("481060"),
  c = n("295866"),
  i = n("398327"),
  o = n("63063"),
  d = n("601993"),
  f = n("981631"),
  E = n("689938");

function p(e) {
  let {
    text: t = "",
    target: n
  } = e, p = (0, a.useStateFromStores)([i.default], () => i.default.isEnabled()), M = (0, a.useStateFromStores)([i.default], () => i.default.hasLearnedWord(t), [t]), C = s.useRef({
    ...e,
    spellcheckEnabled: p
  });
  C.current = {
    ...e,
    spellcheckEnabled: p
  };
  let m = s.useRef(!1),
    [S, h] = s.useState(!1),
    [g, L] = s.useState([]),
    T = s.useCallback(() => {
      let {
        spellcheckEnabled: e,
        text: t,
        onHeightUpdate: n
      } = C.current;
      e && (0, d.isSupported)() && Promise.all([(0, d.isMisspelled)(t, !0), (0, d.getCorrections)(t, !0)]).then(e => {
        let [t, l] = e;
        m.current && (h(t), L(l), n())
      })
    }, []),
    b = s.useCallback(() => {
      if ((0, u.isElement)(n, HTMLInputElement) || (0, u.isElement)(n, HTMLTextAreaElement)) {
        let {
          selectionStart: e,
          selectionEnd: t,
          value: l
        } = n;
        n.value = "", n.value = l, "email" !== n.type && (n.selectionStart = e, n.selectionEnd = t)
      }
    }, [n]);
  if (s.useEffect(() => {
      let e = (0, d.addResultListener)(T);
      return m.current = !0, () => {
        m.current = !1, e()
      }
    }, [T]), s.useEffect(() => {
      T()
    }, [t, p, T]), !(0, d.isSupported)()) return [null, null];
  let x = g.map((e, t) => (0, l.jsx)(r.MenuItem, {
    id: "correction-".concat(t),
    label: e,
    action: () => {
      (0, d.replaceWithCorrection)(e), n.focus()
    }
  }, "correction-".concat(t)));
  return [x, (0, l.jsxs)(l.Fragment, {
    children: [S ? (0, l.jsx)(r.MenuItem, {
      id: "add-to-dictionary",
      label: E.default.Messages.ADD_TO_DICTIONARY,
      action: () => {
        (0, c.learnWord)(t), b()
      }
    }) : null, M && (0, l.jsx)(r.MenuItem, {
      id: "remove-from-dictionary",
      label: E.default.Messages.REMOVE_FROM_DICTIONARY,
      action: () => {
        (0, c.unlearnWord)(t), b()
      }
    }), (0, l.jsx)(r.MenuCheckboxItem, {
      id: "spellcheck",
      label: E.default.Messages.SPELLCHECK,
      checked: p,
      action: () => {
        (0, c.toggleSpellcheck)(), b()
      }
    }), p ? (0, l.jsx)(r.MenuItem, {
      id: "languages",
      label: E.default.Messages.LANGUAGES,
      action: () => window.open(o.default.getArticleURL(f.HelpdeskArticles.SPELLCHECK))
    }) : null]
  })]
}