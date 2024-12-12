var i = r(200651);
r(192379);
var a = r(788307),
    s = r(833858),
    o = r(981631);
let l = (e) => {
    var n;
    let { className: r, hangStatusActivity: l, animate: u = !0 } = e;
    if ((null == l ? void 0 : l.state) === o.tNA.CUSTOM)
        return null != l.emoji
            ? (0, i.jsx)(a.Iv, {
                  emoji: l.emoji,
                  className: r,
                  hideTooltip: !0,
                  animate: u
              })
            : null;
    let c = null === (n = (0, s.tV)(l)) || void 0 === n ? void 0 : n.icon;
    return null != c
        ? (0, i.jsx)('img', {
              src: c,
              alt: '',
              className: null != r ? r : void 0
          })
        : null;
};
n.Z = l;
