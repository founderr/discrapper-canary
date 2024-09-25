n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(836560);
var o = n(327432),
    s = n(40851),
    l = n(213459),
    u = n(998698),
    c = n(695346),
    d = n(752305),
    _ = n(86724),
    E = n(886027),
    f = n(515270),
    h = n(265446),
    p = n(196483),
    m = n(417662),
    I = n(847302),
    T = n(374157);
n(209073);
var g = n(814011),
    S = n(50607),
    A = n(618136),
    v = n(247765),
    N = n(15559),
    O = n(42530);
function R(e) {
    let t = i.useContext(s.ZP),
        n = c.R$.useSetting(),
        [r] = i.useState(() => {
            let r = (0, o.Jh)();
            return (
                (r.children = (0, d.JM)('')),
                (r.selection = {
                    anchor: O.nO,
                    focus: O.nO
                }),
                C({
                    ...e,
                    editor: r,
                    windowContext: t,
                    previewMarkdown: n
                }),
                r
            );
        });
    return (
        i.useEffect(() => {
            let e = () => r.onChange();
            return (
                u.Z.addChangeListener(e),
                l.ZP.addChangeListener(e),
                () => {
                    u.Z.removeChangeListener(e), l.ZP.removeChangeListener(e);
                }
            );
        }, [r]),
        i.useEffect(() => {
            r.previewMarkdown !== n && ((r.previewMarkdown = n), r.onChange());
        }, [r, n]),
        r
    );
}
function C(e) {
    var t, n, r;
    let { editor: i, chatInputType: o, channel: s, canUseCommands: l, canOnlyUseTextCommands: u, windowContext: c, previewMarkdown: d, forTests: O, onChangeStart: R, onChangeEnd: C, updateState: y } = e,
        b = i,
        { onChange: L } = b;
    (b.chatInputType = o),
        (b.windowContext = c),
        (b.previewMarkdown = d),
        (b.composition = null),
        (b.events = new a.EventEmitter()),
        (b.isMac = 'MacIntel' === navigator.platform),
        (b.onChange = () => {
            b.events.emit('onChange'), L();
        }),
        (b = (0, S.B)(b, !0 === O)),
        (b = (0, g.Z)(b)),
        (b = (0, T.Z)(b)),
        (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (b = (0, _.Z)(b, s, !0 === l, !0 === u)),
        (b = (0, I.ZP)(b, s.guild_id, s.id)),
        !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (b = (0, E.Z)(b)),
        !(null === (r = o.markdown) || void 0 === r ? void 0 : r.disableCodeBlocks) && (b = (0, f.ZP)(b)),
        O && (b = (0, v.Z)(b)),
        (b = (0, m.Z)(b)),
        (b = (0, h.Z)(b)),
        (b = (0, A.Z)(b)),
        (b = (0, N.Z)(b, R, C)),
        (b = (0, p.Z)(b, (e) => {
            let { newValue: t, newSelection: n } = e;
            return y(b, 'undo', {
                value: t,
                selection: n
            });
        }));
}
