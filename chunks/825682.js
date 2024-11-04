var i = n(200651);
n(192379);
var r = n(788307),
    a = n(51144),
    l = n(126875);
t.Z = function (e) {
    let { hovered: t, activities: n, applicationStream: s, status: o, user: c } = e;
    return n.length > 0
        ? (0, i.jsx)(r.ZP, {
              className: l.activity,
              textClassName: l.text,
              emojiClassName: l.customStatusEmoji,
              activities: n,
              applicationStream: s,
              animate: t,
              user: c
          })
        : (0, i.jsx)('div', {
              className: l.text,
              children: (0, a.u5)(o)
          });
};
