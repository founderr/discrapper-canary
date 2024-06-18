"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var i = n(470079),
  r = n(836560),
  s = n(327432),
  o = n(40851),
  a = n(213459),
  l = n(998698),
  u = n(695346),
  _ = n(752305),
  c = n(86724),
  d = n(886027),
  E = n(515270),
  I = n(265446),
  T = n(196483),
  h = n(417662),
  S = n(847302),
  f = n(374157);
n(209073);
var N = n(814011),
  A = n(50607),
  m = n(618136),
  O = n(247765),
  R = n(15559),
  p = n(42530);

function g(e) {
  let t = i.useContext(o.ZP),
    n = u.R$.useSetting(),
    [g] = i.useState(() => {
      let i = (0, s.Jh)();
      return i.children = (0, _.JM)(""), i.selection = {
          anchor: p.nO,
          focus: p.nO
        },
        function(e) {
          var t, n, i;
          let {
            editor: s,
            chatInputType: o,
            channel: a,
            canUseCommands: l,
            canOnlyUseTextCommands: u,
            windowContext: _,
            previewMarkdown: p,
            forTests: g,
            onChangeStart: C,
            onChangeEnd: v,
            updateState: L
          } = e, D = s, {
            onChange: M
          } = D;
          D.chatInputType = o, D.windowContext = _, D.previewMarkdown = p, D.composition = null, D.events = new r.EventEmitter, D.isMac = "MacIntel" === navigator.platform, D.onChange = () => {
            D.events.emit("onChange"), M()
          }, D = (0, A.B)(D, !0 === g), D = (0, N.Z)(D), D = (0, f.Z)(D), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (D = (0, c.Z)(D, a, !0 === l, !0 === u)), D = (0, S.ZP)(D, a.guild_id, a.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (D = (0, d.Z)(D)), !(null === (i = o.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (D = (0, E.ZP)(D)), g && (D = (0, O.Z)(D)), D = (0, h.Z)(D), D = (0, I.Z)(D), D = (0, m.Z)(D), D = (0, R.Z)(D, C, v), D = (0, T.Z)(D, e => {
            let {
              newValue: t,
              newSelection: n
            } = e;
            return L(D, "undo", {
              value: t,
              selection: n
            })
          })
        }({
          ...e,
          editor: i,
          windowContext: t,
          previewMarkdown: n
        }), i
    });
  return i.useEffect(() => {
    let e = () => g.onChange();
    return l.Z.addChangeListener(e), a.ZP.addChangeListener(e), () => {
      l.Z.removeChangeListener(e), a.ZP.removeChangeListener(e)
    }
  }, [g]), i.useEffect(() => {
    g.previewMarkdown !== n && (g.previewMarkdown = n, g.onChange())
  }, [g, n]), g
}