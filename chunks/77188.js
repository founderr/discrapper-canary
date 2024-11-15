n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(192379),
    i = n(836560),
    a = n(327432),
    s = n(40851),
    o = n(213459),
    l = n(998698),
    u = n(695346),
    c = n(752305),
    d = n(86724),
    f = n(886027),
    _ = n(515270),
    p = n(265446),
    h = n(196483),
    m = n(417662),
    g = n(847302),
    E = n(374157);
n(209073);
var v = n(814011),
    b = n(50607),
    I = n(618136),
    S = n(247765),
    T = n(15559),
    y = n(42530);
function A(e) {
    let t = r.useContext(s.ZP),
        n = u.R$.useSetting(),
        [A] = r.useState(() => {
            let r = (0, a.Jh)();
            return (
                (r.children = (0, c.JM)('')),
                (r.selection = {
                    anchor: y.nO,
                    focus: y.nO
                }),
                (function (e) {
                    var t, n, r;
                    let { editor: a, chatInputType: s, channel: o, canUseCommands: l, canOnlyUseTextCommands: u, windowContext: c, previewMarkdown: y, forTests: A, onChangeStart: N, onChangeEnd: C, updateState: R } = e,
                        O = a,
                        { onChange: D } = O;
                    (O.chatInputType = s),
                        (O.windowContext = c),
                        (O.previewMarkdown = y),
                        (O.composition = null),
                        (O.events = new i.EventEmitter()),
                        (O.isMac = 'MacIntel' === navigator.platform),
                        (O.onChange = () => {
                            O.events.emit('onChange'), D();
                        }),
                        (O = (0, b.B)(O, !0 === A)),
                        (O = (0, v.Z)(O)),
                        (O = (0, E.Z)(O)),
                        (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (O = (0, d.Z)(O, o, !0 === l, !0 === u)),
                        (O = (0, g.ZP)(O, o.guild_id, o.id)),
                        !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (O = (0, f.Z)(O)),
                        !(null === (r = s.markdown) || void 0 === r ? void 0 : r.disableCodeBlocks) && (O = (0, _.ZP)(O)),
                        A && (O = (0, S.Z)(O)),
                        (O = (0, m.Z)(O)),
                        (O = (0, p.Z)(O)),
                        (O = (0, I.Z)(O)),
                        (O = (0, T.Z)(O, N, C)),
                        (O = (0, h.Z)(O, (e) => {
                            let { newValue: t, newSelection: n } = e;
                            return R(O, 'undo', {
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
            let e = () => A.onChange();
            return (
                l.Z.addChangeListener(e),
                o.ZP.addChangeListener(e),
                () => {
                    l.Z.removeChangeListener(e), o.ZP.removeChangeListener(e);
                }
            );
        }, [A]),
        r.useEffect(() => {
            A.previewMarkdown !== n && ((A.previewMarkdown = n), A.onChange());
        }, [A, n]),
        A
    );
}
