n.d(t, {
    OH: function () {
        return f;
    },
    eE: function () {
        return _;
    },
    jZ: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(692547),
    u = n(481060),
    c = n(388032),
    d = n(839072);
((r = i || (i = {})).RED = 'RED'), (r.GRAY = 'GRAY');
let f = {
        LARGE: d.liveLarge,
        SMALL: d.liveSmall
    },
    _ = {
        [u.BadgeShapes.ROUND]: d.liveShapeRound,
        [u.BadgeShapes.ROUND_LEFT]: d.liveShapeRoundLeft,
        [u.BadgeShapes.ROUND_RIGHT]: d.liveShapeRoundRight,
        [u.BadgeShapes.SQUARE]: ''
    };
function p(e) {
    let { className: t, style: n, shape: r = u.BadgeShapes.ROUND, look: i = 'RED', size: s = f.LARGE } = e;
    return 'RED' === i
        ? (0, a.jsx)(u.TextBadge, {
              text: c.intl.string(c.t.dI3q4u),
              className: o()(t, d.live, s),
              color: l.Z.unsafe_rawColors.RED_400.css,
              shape: _[r],
              style: n
          })
        : (0, a.jsx)(u.TextBadge, {
              text: c.intl.string(c.t.dI3q4u),
              className: o()(t, d.live, s, d.grey),
              disableColor: !0,
              shape: _[r],
              style: n
          });
}
(p.Looks = i), (p.Sizes = f), (t.ZP = p);
