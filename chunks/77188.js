n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var r = n(470079),
    i = n(836560),
    a = n(327432),
    s = n(40851),
    o = n(213459),
    l = n(998698),
    u = n(695346),
    c = n(752305),
    d = n(86724),
    _ = n(886027),
    E = n(515270),
    f = n(265446),
    h = n(196483),
    p = n(417662),
    I = n(847302),
    m = n(374157);
n(209073);
var T = n(814011),
    S = n(50607),
    g = n(618136),
    A = n(247765),
    N = n(15559),
    O = n(42530);
function R(e) {
    let t = r.useContext(s.ZP),
        n = u.R$.useSetting(),
        [R] = r.useState(() => {
            let r = (0, a.Jh)();
            return (
                (r.children = (0, c.JM)('')),
                (r.selection = {
                    anchor: O.nO,
                    focus: O.nO
                }),
                (function (e) {
                    var t, n, r;
                    let { editor: a, chatInputType: s, channel: o, canUseCommands: l, canOnlyUseTextCommands: u, windowContext: c, previewMarkdown: O, forTests: R, onChangeStart: v, onChangeEnd: C, updateState: y } = e,
                        L = a,
                        { onChange: D } = L;
                    (L.chatInputType = s),
                        (L.windowContext = c),
                        (L.previewMarkdown = O),
                        (L.composition = null),
                        (L.events = new i.EventEmitter()),
                        (L.isMac = 'MacIntel' === navigator.platform),
                        (L.onChange = () => {
                            L.events.emit('onChange'), D();
                        }),
                        (L = (0, S.B)(L, !0 === R)),
                        (L = (0, T.Z)(L)),
                        (L = (0, m.Z)(L)),
                        (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (L = (0, d.Z)(L, o, !0 === l, !0 === u)),
                        (L = (0, I.ZP)(L, o.guild_id, o.id)),
                        !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (L = (0, _.Z)(L)),
                        !(null === (r = s.markdown) || void 0 === r ? void 0 : r.disableCodeBlocks) && (L = (0, E.ZP)(L)),
                        R && (L = (0, A.Z)(L)),
                        (L = (0, p.Z)(L)),
                        (L = (0, f.Z)(L)),
                        (L = (0, g.Z)(L)),
                        (L = (0, N.Z)(L, v, C)),
                        (L = (0, h.Z)(L, (e) => {
                            let { newValue: t, newSelection: n } = e;
                            return y(L, 'undo', {
                                value: t,
                                selection: n
                            });
                        }));
                })({
                    ...e,
                    editor: r,
                    windowContext: t,
                    previewMarkdown: n
                }),
                r
            );
        });
    return (
        r.useEffect(() => {
            let e = () => R.onChange();
            return (
                l.Z.addChangeListener(e),
                o.ZP.addChangeListener(e),
                () => {
                    l.Z.removeChangeListener(e), o.ZP.removeChangeListener(e);
                }
            );
        }, [R]),
        r.useEffect(() => {
            R.previewMarkdown !== n && ((R.previewMarkdown = n), R.onChange());
        }, [R, n]),
        R
    );
}
