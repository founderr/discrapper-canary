n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(392711),
    s = n.n(a),
    o = n(970731),
    c = n(981631),
    u = n(388032),
    d = n(800598),
    h = n(480032),
    m = n(699352);
let p = null;
function f(e) {
    let { onDismiss: t, onAccept: n, popoutPosition: l, gameConsoleAccounts: a } = e;
    r()(a.length > 0, 'Rendering ConsoleNUXTooltip without a game console account'), (null == p || null == a.find((e) => e.type === p)) && (p = s().shuffle(a)[0].type);
    let f = null,
        g = null;
    switch (p) {
        case c.ABu.XBOX:
            (f = u.intl.string(u.t.soeJqK)), (g = m);
            break;
        case c.ABu.PLAYSTATION:
        case c.ABu.PLAYSTATION_STAGING:
            (f = u.intl.string(u.t.o8gjmJ)), (g = h);
    }
    return (0, i.jsx)(o.ZP, {
        header: u.intl.string(u.t.ZagEMT),
        content: f,
        asset: (0, i.jsx)('img', {
            src: g,
            alt: '',
            className: d.art
        }),
        onClick: n,
        onSecondaryClick: t,
        markAsDismissed: t,
        buttonCTA: u.intl.string(u.t.HYgaeX),
        secondaryButtonCTA: u.intl.string(u.t.SlM9wc),
        caretPosition: 'top' === l ? o.DF.BOTTOM_LEFT : o.DF.TOP_LEFT
    });
}
