n.d(t, {
    OH: function () {
        return d;
    },
    eE: function () {
        return _;
    },
    jZ: function () {
        return r;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    u = n(689938),
    c = n(781894);
!(function (e) {
    (e.RED = 'RED'), (e.GRAY = 'GRAY');
})(r || (r = {}));
let d = {
        LARGE: c.liveLarge,
        SMALL: c.liveSmall
    },
    _ = {
        [l.BadgeShapes.ROUND]: c.liveShapeRound,
        [l.BadgeShapes.ROUND_LEFT]: c.liveShapeRoundLeft,
        [l.BadgeShapes.ROUND_RIGHT]: c.liveShapeRoundRight,
        [l.BadgeShapes.SQUARE]: ''
    };
function E(e) {
    let { className: t, style: n, shape: r = l.BadgeShapes.ROUND, look: a = 'RED', size: E = d.LARGE } = e;
    return 'RED' === a
        ? (0, i.jsx)(l.TextBadge, {
              text: u.Z.Messages.LIVE,
              className: o()(t, c.live, E),
              color: s.Z.unsafe_rawColors.RED_400.css,
              shape: _[r],
              style: n
          })
        : (0, i.jsx)(l.TextBadge, {
              text: u.Z.Messages.LIVE,
              className: o()(t, c.live, E, c.grey),
              disableColor: !0,
              shape: _[r],
              style: n
          });
}
(E.Looks = r), (E.Sizes = d), (t.ZP = E);
