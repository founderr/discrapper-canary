var i = n(200651);
n(192379);
var a = n(788307),
    s = n(51144),
    r = n(126875);
t.Z = function (e) {
    let { hovered: t, activities: n, applicationStream: l, status: o, user: c } = e;
    return n.length > 0
        ? (0, i.jsx)(a.ZP, {
              className: r.activity,
              textClassName: r.text,
              emojiClassName: r.customStatusEmoji,
              activities: n,
              applicationStream: l,
              animate: t,
              user: c
          })
        : (0, i.jsx)('div', {
              className: r.text,
              children: (0, s.u5)(o)
          });
};
