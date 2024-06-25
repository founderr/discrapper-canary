"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(519953),
  l = n(442837),
  u = n(911969),
  _ = n(998698),
  c = n(703558),
  d = n(117530),
  E = n(91313),
  I = n(436660),
  T = n(887490),
  h = n(689938),
  f = n(200121);

function S(e, t, n) {
  let {
    attributes: r,
    children: s,
    element: o
  } = t;
  switch (o.type) {
    case "applicationCommand":
      let a = _.Z.getActiveCommand(n),
        l = 0,
        u = 0;
      if (null != a && a.id === o.command.id) {
        var c;
        let t = E.cu(e);
        for (let e of null !== (c = a.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : l++
      }
      let d = {};
      if (l > 0) {
        let e;
        e = u > 0 ? h.Z.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
          count: l
        }) : h.Z.Messages.COMMANDS_OPTION_COUNT.format({
          count: l
        }), d["data-trailing-placeholder"] = e
      }
      return (0, i.jsx)("div", {
        className: f.applicationCommand,
        ...r,
        ...d,
        children: s
      });
    case "applicationCommandOption":
      return (0, i.jsx)(A, {
        attributes: r,
        channelId: n,
        element: o,
        children: s
      });
    default:
      return null
  }
}
let A = e => {
  let t, {
      channelId: n,
      element: s,
      attributes: E,
      children: S
    } = e,
    A = (0, a.vt)(),
    N = (0, a.UE)(),
    m = (0, a._7)(),
    {
      optionType: O,
      errored: p
    } = (0, l.cj)([_.Z], () => {
      var e, t, i;
      return {
        optionType: null === (e = _.Z.getOption(n, s.optionName)) || void 0 === e ? void 0 : e.type,
        errored: (null === (i = _.Z.getOptionState(n, s.optionName)) || void 0 === i ? void 0 : null === (t = i.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
      }
    }, [n, s.optionName]),
    R = (0, l.e7)([d.Z], () => d.Z.getUpload(n, s.optionName, c.d.SlashCommand), [n, s.optionName]),
    g = s.children[s.children.length - 1],
    C = null != g && T.LC.isText(g) && g.text.endsWith("\n"),
    v = o()(f.inlineElement, f.optionPill, {
      [f.selectedPill]: N && A,
      [f.erroredPill]: (!N || !A) && p
    }),
    L = r.useCallback(() => {
      !T.bN.isVoid(m, s) && I.Q.selectCommandOption(m, s.optionName, !0)
    }, [m, s]);
  return t = O === u.jw.ATTACHMENT ? (null == R ? void 0 : R.filename) != null ? (0, i.jsxs)("span", {
    className: o()(f.optionPillValue, f.attachmentFilename),
    contentEditable: !1,
    children: [R.filename, S]
  }) : (0, i.jsxs)("span", {
    className: o()(f.optionPillValue, f.readonlyPillValue),
    contentEditable: !1,
    children: [h.Z.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, S]
  }) : (0, i.jsxs)("span", {
    className: f.optionPillValue,
    children: [S, C ? (0, i.jsx)("span", {
      className: f.newLine,
      contentEditable: !1
    }) : null]
  }), (0, i.jsxs)("span", {
    ...E,
    className: v,
    children: [(0, i.jsxs)("span", {
      className: f.optionPillKey,
      contentEditable: !1,
      onClick: L,
      children: [s.optionDisplayName, "​"]
    }), t, (0, i.jsx)("span", {
      contentEditable: !1,
      children: "​"
    })]
  })
}