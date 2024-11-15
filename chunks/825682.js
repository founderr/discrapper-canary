var i = n(200651);
n(192379);
var r = n(788307),
    l = n(51144),
    a = n(27286);
t.Z = function (e) {
    let { hovered: t, activities: n, applicationStream: s, status: o, user: c } = e;
    return n.length > 0
        ? (0, i.jsx)(r.ZP, {
              className: a.activity,
              textClassName: a.text,
              emojiClassName: a.customStatusEmoji,
              activities: n,
              applicationStream: s,
              animate: t,
              user: c
          })
        : (0, i.jsx)('div', {
              className: a.text,
              children: (0, l.u5)(o)
          });
};
